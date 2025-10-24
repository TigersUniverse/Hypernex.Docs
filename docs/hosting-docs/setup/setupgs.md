---
sidebar_position: 3
---

# Setup GameServer

This guide shows you how to set up your own GameServer.

## Getting a Build

There are two ways to get a build,

### Downloading a Build from GitHub

You can download a build from the GitHub's [latest release](https://github.com/TigersUniverse/Hypernex.Networking/releases/latest)

### Building from source

Download all required libraries, relink assemblies, and build using dotnet, then publish for `linux-x64`

## Configuring the Instance

Run `./Hypernex.Networking.Server` once, and stop it instantly.

:::note

You may need to give executable permissions before running. Use `chmod +x Hypernex.Networking.Server`

:::

Open the `serverconfig.cfg` with a preferred text editor, such as `nano`. A server config looks like the following

```toml
# The server domain to connect to
ServerDomain = "localhost"
# Defines if the Server is HTTP
IsServerHTTP = true
# The API Version to Get Requests
APIVersion = "v1"
# GameServer Token; leave Empty if one isn't needed
GameServerToken = ""
# The Local IP Address for servers to run on
LocalIp = "0.0.0.0"
# The IP to be shared to the Socket Server
GlobalIp = "127.0.0.1"
# Beginning Port Range for GameServer's Instances
BeginPortRange = 10000
# Ending Port Range for GameServer's Instances
EndPortRange = 10100
# Have Instances use multiple Threads (recommended on)
UseMultithreading = true
# Time for threads to update (in ms)
ThreadUpdate = 10
# Allow IPs from IPV6 to connect
UseIPV6 = false
```

Configure this as needed; config keys should be self explanatory.

### Running the GameServer

If configured correctly, you can now launch the GameServer by running `./Hypernex.Networking.Server`. After running, you will know when the GameServer is ready when it outputs `Ready!` in green at the bottom.

:::warning

yt-dlp will download to `path/to/Hypernex.Networking.Server/ytdlp/yt-dlp`. After it downloads you MUST make it executable with the following command:

`chmod +x ytdlp/yt-dlp`

Not doing this will cause yt-dlp to fail to launch, meaning your clients will be unable to download media!

:::