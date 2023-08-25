# GetPronouns

Gets a NetPlayers pronouns

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
userid | string | The UserId of the user to get pronouns from

The example below listens for a user to join, then prints their name and pronouns. (Assuming LocalScript)

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