# GetExtraneousObjectKeys

Gets all the keys of Extraneous Objects.

The following example prints if the extraneous object "goal" is found.

**JavaScript**
```js
let Players = instance.GetHandler("Players")
let objects = Players.LocalPlayer.GetExtraneousObjects()
for(let i = 0: i < objects.length; i++){
    let obj = objects[i]
    if(obj == "goal")
        print("Found goal!")
}
```

**Lua**
```lua
local Players = instance.GetHandler("Players")
for _, obj in ipairs(Players.LocalPlayer.GetExtraneousObjects()) do
    if obj == "goal" then
        print("Found goal!")
    end
end
```