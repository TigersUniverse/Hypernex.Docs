---
sidebar_position: 0
---

# API Server Setup

This guide will show you how to setup your own API server.

## Prerequisites

+ Redis Database
+ Mongodb Database
+ DigitalOcean Space or some other S3 Bucket
+ Domain with a valid A record
+ A Linux (recommended Ubuntu) Server with Node.JS installed

## Setting up the API Environment

To setup the API Server, simply download the source code from [Hypernex.API](https://github.com/TigersUniverse/Hypernex.API). This can go in any directory you'd like.

:::note

Uploads are saved to disk before being moved to the cloud, so if you are handling a lot of uploads at once, be sure to give Hypernex sufficient storage.

:::

Then, with all the files, run `npm i` to download all the required packages.

After which, you can continue to configuring.

## Configure

To generate the Config file, run `node main.js` once, and the program should notice there is no config, and stop. The config is located in the same directory as `main.js` and is called `config.json`. A normal config looks something like this:

```json
{
    "BaseURL": "http://localhost/",
    "CDNURLs": ["http://localhost:3333/"],
    "DatabaseInfo": {
        "DatabaseNumber": 0,
        "Host": "",
        "Port": 0,
        "Username": "",
        "Password": "",
        "UseDatabaseTLS": false,
        "DatabaseTLS": {
            "TLSKeyLocation": "",
            "TLSCertificateLocation": "",
            "TLSCALocation": ""
        }
    },
    "MongoDBURL": "",
    "SpacesInfo": {
        "AccessKeyId": "",
        "SecretAccessKey": "",
        "Region": "",
        "SpaceName": ""
    },
    "MaxFileSize": 1000,
    "TrustAllDomains": false,
    "AllowedDomains": [],
    "UseHTTPS": false,
    "HTTPSTLS": {
        "TLSKeyLocation": "",
        "TLSCertificateLocation": ""
    },
    "SocketPort": 2096,
    "WebRoot": "../Web",
    "HTMLPaths": {
        "EmailVerificationPath": "emailhtml/verifyEmail.html",
        "ResetPasswordPath": "emailhtml/resetPassword.html"
    },
    "SignupRules": {
        "RequireInviteCode": false,
        "GlobalInviteCodes": [],
        "RemoveCodeAfterUse": true
    },
    "AVSettings":{
        "ScanFiles": false,
        "clamdPort": null,
        "clamdHost": null,
        "clamdTimeout": null,
        "clamdHealthCheckInterval": null
    },
    "EmailInterface": "sendmail",
    "SMTPSettings":{
        "Server": "",
        "Port": 465,
        "Secure": true,
        "NoTLS": false,
        "Username": "",
        "Password": "",
        "OverrideDomain": ""
    },
    "GameServerTokens": [],
    "AllowAnyGameServer": false,
    "RequireTokenToDownloadBuilds": false,
    "GameEngine": "Unity",
    "GameEngineVersion": "2023.2.20f1"
}
```

The config names should be self explanatory, so configure as needed.

After configuration, it's time to run the server!

## Running the Server

There are two ways you can run the server.

### Forever (Recommended)

[forever](https://www.npmjs.com/package/forever) is a package that will automatically restart a node program, if it exits for any reason.

To use forever, simply install it globally, then run the server.

```
npm i forever -g
forever start main.js
```

### Tmux

The `tmux` command will create an environment where you can exit your SSH client, without killing the node process.

```
tmux
node main.js
```

:::warning

Tmux will NOT automatically restart the node program if it is killed.

:::