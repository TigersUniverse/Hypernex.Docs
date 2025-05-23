---
sidebar_position: 0
---

# Setup CDN

A CDN is required to handle both file downloads and uploads from clients for all User-Generated Content. They are designed to be lightweight and their goal is to reduce stress off of the main server.

## Setting Up the Server

To setup a server, navigate to the [latest release](https://github.com/TigersUniverse/HypernexCDN/releases/latest) and download the library which targets your server's platform.

:::note

If you're on linux, you may need to make the binary executable. Run the following command to do so.

```bash
chmod +x hypernexcdn_linux-[architecture]
```

:::

## Configuring the Server

After you run the executable once, you should see a `config.toml` file appear in the same directory as the executable. Open this file with your preferred editor.

```toml
API_Server = 'http://hypernex.local/api/v1/'
AWS_key = 'access-key'
AWS_secret = 'access-secret'
AWS_endpoint = 'http://s3.local:9000'
AWS_region = 'us-1'
AWS_bucket = 'hypernex'
Mongo_URI = 'mongodb://mongodb-server'
REDIS_Address = 'redis://redis.local:6379/0'
PICS_Bucket = '/'
PUBLIC_PICS = 'root-pics-dir/'
```

Here's a quick rundown of every value and what it means

+ `API_Server`
  + The base URL for the API server
+ `AWS_key`
  + The key to your S3 bucket
+ `AWS_secret`
  + The secret to your S3 bucket
+ `AWS_endpoint`
  + The endpoint your S3 bucket is located
+ `AWS_region`
  + The region your S3 bucket is located
+ `AWS_bucket`
  + The name of your S3 bucket
+ `Mongo_URI`
  + The URI to connect to your Mongo database
+ `REDIS_Address`
  + The Redis URI to connect to your Redis database
+ `PICS_Bucket`
  + The name of the bucket where your public pictures are stored
  + Enables the `/randomImage` and `/picture/{picture}` endpoints when valid
  + If your pictures are in the same bucket, set this to `/`
  + If you do not wish to use this feature, leave it blank
+ `PUBLIC_PICS` *(Optional)*
  + The Prefix to all of your public images
  + If your pictures are in the same bucket, be sure to add a trailing slash after you put the directory name

Fill in these values as needed and then start the server.

## Running the Server

To run the server, you can run the following command (on linux)

```bash
./hypernexcdn_linux-[architecture]
```

or if you're on Windows, simply run the executable.

If you'd like your process to run in the background on Linux, look into using tmux or a systemd process.

:::note

The HypernexCDN is designed to gracefully handle errors. If something doesn't work properly, whether that be from a service outage or malformed user input, the server should handle it. If the server panics and crashes, there is likely a greater issue going on that needs to be [reported](https://github.com/TigersUniverse/HypernexCDN/issues).

:::

## Proxying the CDN

The HypernexCDN is designed to run behind a proxy with caching enabled. This allows easy SSL configuration and object caching locally to reduce transfer costs. While you can use any reverse proxy, we recommend using [Caddy](https://caddyserver.com/) for its reliability and ease-of-use.

### Setting up Caddy

To setup Caddy with object caching, we need to build it with the [cache-handler](https://github.com/caddyserver/cache-handler) module. We will use [xcaddy](https://github.com/caddyserver/xcaddy) to build caddy automatically and easily.

To install xcaddy on linux, simply run the following commands

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/xcaddy/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-xcaddy-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/xcaddy/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-xcaddy.list
sudo apt update
sudo apt install xcaddy
```

If you are on a non-linux platform, check the xcaddy [latest release](https://github.com/caddyserver/xcaddy/releases/latest) for a pre-built binary that works for you, or build xcaddy from source yourself.

Once you have xcaddy installed, we can now build caddy with our two modules

+ The cache-handler module
+ Your selected storage model

:::note

cache-handler requires a storage module to be installed with it, otherwise it will fail. Below is a list of storages you can use:

+ [Badger](https://github.com/dgraph-io/badger) `github.com/darkweak/storages/badger/caddy`
+ [Etcd](https://github.com/etcd-io/etcd) `github.com/darkweak/storages/etcd/caddy`
+ [Go-redis](https://github.com/redis/go-redis) `github.com/darkweak/storages/go-redis/caddy`
+ [Nats](https://github.com/nats-io/nats-server) `github.com/darkweak/storages/nats/caddy`
+ [Nuts](https://github.com/nutsdb/nutsdb) `github.com/darkweak/storages/nuts/caddy`
+ [Olric](https://github.com/buraksezer/olric) `github.com/darkweak/storages/olric/caddy`
+ [Otter](https://github.com/maypok86/otter) `github.com/darkweak/storages/otter/caddy`
+ [Redis](https://github.com/redis/rueidis) `github.com/darkweak/storages/redis/caddy`
+ [Simplefs](https://github.com/darkweak/simplefs) `github.com/darkweak/storages/simplefs/caddy`

We recommend using `go-redis` and will be explaining how to use it, but you can select whatever the best storage is to run on your server. Keep in mind that whichever storage solution you pick, you will be responsible for setting up correctly and securely.

You can read more about storages [here](https://github.com/darkweak/storages/).

:::

For this tutorial, we will be building caddy with cache-handler and go-redis. Run the command below to start building caddy with the two modules.

```bash
xcaddy build --with github.com/caddyserver/cache-handler --with github.com/darkweak/storages/go-redis/caddy
```

And after a few minutes, we should see our caddy executable built at `./caddy`.

Now we need to create our configuration file. In the same directory as caddy, create a new file called `Caddyfile` and input the following text

```caddy
{
  cache {
    url 127.0.0.1:6379
  }
  regex {
    exclude /randomImage
    exclude /randomImage/*
  }
  ttl 1800s
}
examplecdn.yoururl.com {
  cache
  reverse_proxy :3333
}
```

:::tip

Increase or decrease the ttl value to keep or dispose of cache on the server faster or slower!

:::

Then you'll replace `examplecdn.yoururl.com` with the domain that will be interacting with the CDN.

:::warning

The domain should be different from your API's domain. While you may be able to setup Caddy to reverse proxy requests to both your API and CDN on the same server, this configuration is not supported.

:::

<details><summary>If you're also using Redis as your Storage</summary>
<p>

Since we're using Redis, we'll need to setup a redis server locally. You can read a guide [here](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/) on how to install a Redis server locally.

</p>
</details>

After you create your Caddyfile, you are now ready to start your Caddy server!

To run caddy in the foreground, run

```bash
./caddy run
```

or to run caddy in the background, run

```bash
./caddy start
```

and now your proxy is ready! You should be able to access the CDN publicly.

### Setting up Without a Proxy

:::warning

Setting up without a proxy is **NOT** recommended for production as there will be **NO CACHING** (which will increase S3 costs) and **NO SSL**, which means ***all files will be transferred insecurely***. You should only ever do this if you are setting up a development server and your API server is not accessible to the public.

:::

If you wish to not use a proxy, simply access the CDN at `http://localhost:3333/`.

## Adding the CDN to the API

After you've setup your CDN, you need to tell your API server that it is available. Inside of your `config.json` file in your API server, you should see a property called `CDNURLs`. You can add your url to that array.

:::caution

Make sure your URL is *complete!* The url should have `https://` at the beginning and end with a trailing slash.

:::

After you've added the URL to the config, simply save and restart your API server, and your new CDN server should be accessible!