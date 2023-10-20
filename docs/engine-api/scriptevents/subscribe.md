# Subscribe

Subscribes a SandboxFunc to a [ScriptEvent](./../scriptevent/index.md)

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
scriptEvent | [ScriptEvent](./../scriptevent/index.md) | The [ScriptEvent](./../scriptevent/index.md) to listen for
callback | SandboxFunc | The function to call

The example below listens for a user to join, then prints their name and pronouns.

**JavaScript**
```js
Events.Subscribe(ScriptEvent.OnUserJoin, userid => {
    let pronouns = Players.GetPronouns(userid)
    if(pronouns === null || pronouns === undefined) return
    print(Players.GetUsername(userid) + " has joined, say hi to " + pronouns.AccusativeCase "!")
})
```

**Lua**
```lua
Events.Subscribe(ScriptEvent.OnUserJoin, function(userid)
    local pronouns = Players.GetPronouns(userid)
    if pronouns == nil then return end
    print(Players.GetUsername(userid).." has joined, say hi to "..pronouns.AccusativeCase "!")
end)
```