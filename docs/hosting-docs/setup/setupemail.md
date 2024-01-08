---
sidebar_position: 2
---

# Email Setup

This is heavily based on [this guide by Pritthish Nath](https://pritthish-nath.medium.com/configuring-spf-dkim-and-dmarc-with-sendmail-on-ubuntu-18-04-41edfd24fdd2) with some slight adjustments. This guide assumes that you use [DigitalOcean](https://www.digitalocean.com/) as your provider; however, as long as you know how to set up a PTR on your IP and set your hostnames, you'll be fine.

## Prerequisites

+ A VPS/Server of some kind
    + Recommend DigitalOcean
+ A domain
+ The Domain connected to Cloudflare nameservers and an A record pointed to your server's IP
    + Proxy is optional, but recommended
    + Cloudflare isn't required, but is recommended
+ Correctly configured hosts

## OpenDKIM

Installing OpenDKIM can be tricky, especially since it's kinda old, but don't worry, just follow along.

### Installing

As root, simply run

```
apt-get install opendkim opendkim-tools
```

### Setting up a DKIM Key

As root, run this code, replacing `[DOMAIN]` with your domain (include subdomain(s)!)

```
opendkim-genkey -t -s default -d [DOMAIN]
```

:::note

Take note of where you ran this command, as a `default.txt` file will be output there, which is needed in a later step

:::

Next, lets move the key somewhere,

```
mkdir /etc/opendkim
cp default.private /etc/opendkim/
```

:::info

If any service asks, your Selector is `default`

:::

Now, we need to give it the correct permissions

```
chmod -R ugo-w /etc/opendkim
chown -R root /etc/opendkim
```

### Updating the `opendkim.conf`

Open the OpenDKIM config file at `/etc/opendkim.conf` with a preferred text editor. I'm using `nano`.

```
nano /etc/opendkim.conf
```

Then, replace the following values with these lines,

:::caution

Do not have multiple keys! If there is already a socket, either remove it, or comment out the line with a `#`

:::

`Domain [DOMAIN]` (include subdomain(s))

`KeyFile /etc/opendkim/default.private`

`Selector default`

`Socket inet:8891@[SUBDOMAIN/DOMAIN]` (If your domain is something like `play.hypernex.dev`, then you would input `play`, otherwise, just `hypernex`. Should be a hostname)

:::note

Take note of your Socket value, as we will need it later

:::

### Starting OpenDKIM

Finally, start the OpenDKIM service

```
systemctl start opendkim
```

If something does not work, look for the Error status in the systemd logs

```
systemctl status opendkim
```

## Sendmail

Hypernex uses Sendmail, the same as php's `mail()` function, to send emails. This setup is fairly easy.

### Installing Sendmail

Run this command,

```
apt install sendmail
```

### Configuring Sendmail

Open the Sendmail config file at `/etc/mail/sendmail.mc` with a preferred text editor. I'm still using `nano`.

```
nano /etc/mail/sendmail.mc
```

Next, add this line to the bottom, replacing the [SOCKET] with the `Socket` value done in the OpenDKIM configuration step from earlier.

```
INPUT_MAIL_FILTER(`opendkim', `S=[SOCKET]')
```

Finally, save and recompile Sendmail

```
sudo -i
cd /etc/mail
m4 sendmail.mc > sendmail.cf
systemctl restart sendmail
```

## Adding Records

Navigate to your Cloudflare dashboard, and select the domain you will be working with, then navigate to the DNS tab.

### SRV

Add a new TXT record for your domain/subdomain, and input the following text, replacing [DOMAIN] with your domain (including subdomain).

```
v=spf1 a:[DOMAIN] -all
```

Set TTL to Auto and save.

### DMARC

Add a new TXT record with the following key `_dmarc.[SUBDOMAIN, IF APPLICABLE]`, and input the following text

```
v=DMARC1; p=reject; sp=reject;
```

### DKIM

Add a new TXT record with the following key `default._domainkey.[SUBDOMAIN, IF APPLICABLE]`, and input text from your `default.txt` file from earlier.

Assuming your `default.txt` file looked like this,

```
default._domainkey      IN      TXT     ( "v=DKIM1; h=sha256; k=rsa; t=y; "
          "p=0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
          0000000000000000000000000000000000000000000000000000000000000000"
          "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" )  ; ----- DKIM key default for play.hypernex.dev
```

The text would be this,

```
v=DKIM1; h=sha256; k=rsa; t=y; p=00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```

## PTR Record

Assuming you used DigitalOcean, all you need to do is set your droplet's name to your domain, then reboot your droplet (assuming you changed the name). If you did not use DigitalOcean, please check with your provider on how to set a PTR record for your shared/dedicated IP address.