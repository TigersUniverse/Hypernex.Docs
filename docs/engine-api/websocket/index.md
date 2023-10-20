# WebSocket

:::info

This class is only available on **ServerScripts**

:::

The WebSockets class provides a WebSocket interface for game instances to use to implement continuous connectivity with a 3rd party service.

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
[IsOpen](isopen.md) | bool | Returns true if the connection to the WebSocket server is alive

**Instance Methods**

Method Name | Return Type | Description
--- | --- | ---
[Create](create.md) | void | Creates a WebSocket Instance associated with the WebSocket object. This is not static!
[Open](open.md) | void | Opens the WebSocket connection
[Send](send.md) | void | Sends a message to the WebSocket server
[Close](close.md) | void | Closes the WebSocket connection