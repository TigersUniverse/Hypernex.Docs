# Subscribe

Listens for a specific event defined by [ScriptEvent](./../scriptevent) and invokes a SandboxFunc.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
scriptEvent | [ScriptEvent](./../scriptevent) | The ScriptEvent to listen to
callback | SandboxFunc | The function to invoke when the event is raised

The following example listens for a NetworkedEvent sent from a client, and forwards it to other clients.

**JavaScript**
```js
const myEventName = "someEventName"
Events.Subscribe(ScriptEvent.OnUserNetworkEvent, new SandboxFunc(engine).SetAction((userid, eventName, eventArgs) => {
    /*
     * userid - The UserId of the player that sent the message. This is 100% reliable as long as the user was authenticated.
     * eventName - The provided name of the NetworkEvent that is being invoked. This is set by your code on the client.
     * eventArgs - An object array of arguments. Can be null or empty.
    */
   if(eventName !== myEventName || eventArgs === null || eventArgs.length > 2) return
   // All data MUST be serializable!
   let newData = [userid, eventArgs[0], eventArgs[1]]
   NetworkEvent.SendToAllClients(myEventName, newData)
   // At this point, a client would need to Subscribe to ScriptEvent.OnServerNetworkEvent
}))
```

**Lua**
```lua
local myEventName = "someEventName"
Events.Subscribe(ScriptEvent.OnUserNetworkEvent, new SandboxFunc().SetAction(function (userid, eventName, eventArgs)
    --[[
      userid - The UserId of the player that sent the message. This is 100% reliable as long as the user was authenticated.
      eventName - The provided name of the NetworkEvent that is being invoked. This is set by your code on the client.
      eventArgs - An object array of arguments. Can be null or empty.
    --]]
   if eventName !== myEventName or eventArgs === null pr eventArgs.length > 2 then return end
   -- All data MUST be serializable!
   local newData = {userid, eventArgs[0], eventArgs[1]}
   NetworkEvent.SendToAllClients(myEventName, newData)
   -- At this point, a client would need to Subscribe to ScriptEvent.OnServerNetworkEvent
end))
```