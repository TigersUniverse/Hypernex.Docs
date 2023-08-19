# IsExtraneousObjectPresent

Checks if there is an extraneous object with a specific key.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
key | string | The Extraneous Object to look for

The following example looks for a "goal" Extraneous Object, then prints it. Assume the value is a number.

**JavaScript**
```js
if(LocalAvatar.IsExtraneousObjectPresent("goal"))
    print("The user defined goal is: " + LocalAvatar.GetExtraneousObject("goal"))
```

**Lua**
```lua
if LocalAvatar.IsExtraneousObjectPresent("goal") then
    print("The user defined goal is: "..tostring(LocalAvatar.GetExtraneousObject("goal")))
end
```