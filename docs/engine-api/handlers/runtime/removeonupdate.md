# RemoveOnUpdate

Removes a SandboxFunc from every Update frame.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
s | SandboxFunc | The function to remove from OnUpdate

The following example creates an Update which sets a text label to the current date, then removes it whenever. This example assumes this is a **LocalScript**.

**JavaScript**
```js
let World = instance.GetHandler("World")
let Runtime = instance.GetHandler("Runtime")

let t = World.GetItemInRoot("dateText")
let tText = t.GetComponent("Text")

let action = new SandboxFunc(engine).SetAction(() => {
    let time = new Time()
    tText.SetText(time.GetMonthName() + " " + time.GetDay() + ", " + time.GetYear())
})
Runtime.OnUpdate(action)
// Do something here that signifies a wait
Runtime.RemoveOnUpdate(action)
```

**Lua**
```lua
local World = instance.GetHandler("World")
local Runtime = instance.GetHandler("Runtime")

local t = World.GetItemInRoot("dateText")
local tText = t.GetComponent("Text")

local action = SandboxFunc().SetAction(function()
    local time = Time()
    tText.SetText(time.GetMonthName().." "..tostring(time.GetDay())..", "..tostring(time.GetYear()))
end)
Runtime.OnUpdate(action)
-- Do something here that signifies a wait
Runtime.RemoveOnUpdate(action)
```