# GetExtraneousObjectKeys

Gets all the keys of Extraneous Objects.

The following example prints if the extraneous object "goal" is found.

**JavaScript**
```js
let objects = LocalAvatar.GetExtraneousObjects()
for(let i = 0: i < objects.length; i++){
    let obj = objects[i]
    if(obj == "goal")
        print("Found goal!")
}
```

**Lua**
```lua
for _, obj in ipairs(LocalAvatar.GetExtraneousObjects()) do
    if obj == "goal" then
        print("Found goal!")
    end
end
```