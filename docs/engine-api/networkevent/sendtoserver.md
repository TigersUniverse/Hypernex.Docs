---
sidebar_position: 2
---

# SendToServer

:::info

This method is only available on **LocalScripts**

:::

Sends a NetworkEvent to the server with a given name, message type, and object array data.

:::warning

Data in the object array **MUST** be serializable over the network!

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
eventName | string | The name of the event to be identified
messageChannel | [MessageChannel](../messagechannel) | The MessageChannel to send data over. Use this based on how often you send data between the server and the client.
data | object[] | An Array containing data to send.

:::note

+ The **messageChannel** parameter is default at `MessageChannel.Reliable`
+ The **data** parameter can be `null`

:::

The example below sends a simple number array to the Server over event `numbers`, with default reliability

**JavaScript**
```js
let data = [1, 5, 6, 2]
NetworkEvent.SendToServer("numbers", data)
```

**Lua**
```lua
local data = {1, 5, 6, 2}
NetworkEvent.SendToServer("numbers", data)
```