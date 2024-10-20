# GetPlayerAssignedTags

Returns all of the Player Assigned tags as a string array.

The following example checks all tags to see if one matches a desired tag.

**JavaScript**
```js
let Players = instance.GetHandler("Players")
let tags = Players.LocalPlayer.GetPlayerAssignedTags()
for (let i = 0; i < tags.length; i++)
{
    let tag = tags[i]
    if(tag === "special")
    {
        print("You're special!")
        return
    }
}
print("You're not special..")
```

**Lua**
```lua
local Players = instance.GetHandler("Players")
local tags = Players.LocalPlayer.GetPlayerAssignedTags()
for _, tag in ipairs(tags) do
    if tag == "special" do print("You're special!") return end
end
print("You're not special..")
```