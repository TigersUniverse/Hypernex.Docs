---
sidebar_position: 1
---

# SendToAllClients

:::info

This method is only available on **ServerScripts**

:::

Sends a NetworkEvent to all clients with a given name, message type, and object array data.

:::warning

Data in the object array **MUST** be serializable over the network!

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
eventName | string | The name of the event to be identified
data | object[] | An Array containing data to send.
messageChannel | [MessageChannel](./../../messagechannel/index.md) | The MessageChannel to send data over. Use this based on how often you send data between the server and the client.

:::note

+ The **messageChannel** parameter is default at `MessageChannel.Reliable`
+ The **data** parameter can be `null`

:::

The following example relays data from `clientTeam` to the rest of the clients over the default MessageChannel.

**JavaScript**
```js
let Events = instance.GetHandler("Events")
let Network = instance.GetHandler("Network")

Events.Subscribe(ScriptEvent.OnUserNetworkEvent, new SandboxFunc(engine).SetAction((userId, eventName, eventArgs) => {
    if(eventArgs === undefined)
        return
    switch(eventName){
        case "clientTeam":{
            let team = eventArgs[0]
            let dataToSend = [userId, team]
            Network.SendToAllClients("clientTeam", dataToSend)
        }
    }
}))
```

**Lua**
```lua
local Events = instance.GetHandler("Events")
local Network = instance.GetHandler("Network")

Events.Subscribe(ScriptEvent.OnUserNetworkEvent, SandboxFunc().SetAction(function(userId, eventName, eventArgs)
    if eventArgs == nil then return end
    if eventName == "clientTeam" then
        local team = eventArgs[0]
        local dataToSend = {userId, team}
        Network.SendToAllClients("clientTeam", dataToSend)
    end
end))
```