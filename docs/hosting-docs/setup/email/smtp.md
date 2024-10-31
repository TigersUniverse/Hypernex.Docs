# SMTP Setup

:::note

This guide assumes you have an SMTP server connected with your own domain.

:::

This guide teaches you how to connect an SMTP server to use for mailing.

## Prerequisites

+ An SMTP Server
+ A domain
+ Ability to send `no-reply@[domain]`
  + Sandbox SMTPs with specific names will not work!

## Gathering Information

From your provider, you will need the following information

+ Server Hostname
  + This would look something like `smtp.example.com`
+ Server Port
  + Common STARTTLS Ports
    + `25`, `587`, and `2587`
  + Common TLS Ports
    + `465` and `2465`
+ Username
  + This is the SMTP Username you use to authenticate
+ Password
  + This is the SMTP Password you use with your Username to authenticate

## Entering the Information

In the `config.json` file, navigate to the `SMTPSettings` object. In there, fill in the information. This should be self-explanatory for most of the values. Some advanced configuration options are listed below.

+ `Secure`
  + Disable secure mode (SSL/TLS)
+ `NoTLS`
  + Disables TLS connection

:::warning

While you can disable Security/TLS, we heavily advise **against it**. Email servers are huge targets for scammers, and if they can get their hands on credentials, they will abuse it.

:::

+ `OverrideDomain`
  + If the domain for your email does not match your `BaseURL`'s hostname, then you can override the domain here

:::note

OverrideDomain does not override the sender (`no-reply`), you **MUST** be able to use your own sending name.

:::

And that's it! If you have configured everything correctly, you should be able to send emails from your SMTP server.

Here's an example config for SMTPSettings

```json
"SMTPSettings":{
    "Server": "smtp.example.com",
    "Port": 465,
    "Secure": true,
    "NoTLS": false,
    "Username": "MY_USERNAME",
    "Password": "MY_PASSWORD_DO_NOT_SHARE",
    "OverrideDomain": "play.hypernex.dev"
},
```