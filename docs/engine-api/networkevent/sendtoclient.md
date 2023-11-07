---
sidebar_position: 0
---

# SendToClient

:::info

This method is only available on **ServerScripts**

:::

Sends a NetworkEvent to a client with a given name, message type, and object array data.

:::warning

Data in the object array **MUST** be serializable over the network!

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
userid | string | The UserId to send the data to
eventName | string | The name of the event to be identified
data | object[] | An Array containing data to send.
messageChannel | [MessageChannel](./../messagechannel/index.md) | The MessageChannel to send data over. Use this based on how often you send data between the server and the client.

:::note

+ The **messageChannel** parameter is default at `MessageChannel.Reliable`
+ The **data** parameter can be `null`

:::

The example below listens for the `numbers` message (see [SendToServer](./sendtoserver.md) example), and then relays it back to the client with all the numbers plus one with the event name `newNumbers`.

**JavaScript**
```js
Events.Subscribe(ScriptEvent.OnUserNetworkEvent, new SandboxFunc(engine).SetAction((userId, eventName, eventArgs) => {
    if(eventArgs === undefined)
        return
    switch(eventName){
        case "numbers":{
            let newData = []
            for(let i = 0; i < eventArgs.length; i++){
                let number = eventArgs[i]
                newData.push(number + 1)
            }
            NetworkEvent.SendToClient(userId, "newNumbers", newData)
            break
        }
    }
}))
```

**Lua**
```lua
Events.Subscribe(ScriptEvent.OnUserNetworkEvent, SanboxFunc().SetAction(function(userId, eventName, eventArgs)
    if eventArgs == nil then return end
    if eventName == "numbers" then
        local newData = {}
        for _, number in ipairs(eventArgs) do
            table.insert(newData, number + 1)
        end
        NetworkEvent.SendToClient(userId, "newNumbers", newData)
    end
end))
```