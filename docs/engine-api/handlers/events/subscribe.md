# Subscribe

Subscribes a SandboxFunc to a [ScriptEvent](./../../scriptevent/index.md)

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
scriptEvent | [ScriptEvent](./../../scriptevent/index.md) | The [ScriptEvent](./../../scriptevent/index.md) to listen for
callback | SandboxFunc | The function to call

The example below listens for a user to join, then prints their name and pronouns.

**JavaScript**
```js
let Events = instance.GetHandler("Events")
let Players = instance.GetHandler("Players")

Events.Subscribe(ScriptEvent.OnUserJoin, new SandboxFunc(engine).SetAction(userid => {
    let player = Players.GetPlayerFromUserId(userid)
    if(player === undefined) return
    let pronouns = player.Pronouns
    if(pronouns === null || pronouns === undefined) return
    print(player.DisplayName + " has joined, say hi to " + pronouns.AccusativeCase + "!")
}))
```

**Lua**
```lua
local Events = instance.GetHandler("Events")
local Players = instance.GetHandler("Players")

Events.Subscribe(ScriptEvent.OnUserJoin, SandboxFunc().SetAction(function(userid)
    local player = Players.GetPlayerFromUserId(userid)
    if player == nil then return end
    local pronouns = player.Pronouns
    if pronouns == nil then return end
    print(player.DisplayName.." has joined, say hi to "..pronouns.AccusativeCase.."!")
end))
```