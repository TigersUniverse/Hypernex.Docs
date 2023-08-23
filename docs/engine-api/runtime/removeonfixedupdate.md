# RemoveOnFixedUpdate

Removes a SandboxFunc from every FixedUpdate frame.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
s | SandboxFunc | The function to remove from OnFixedUpdate

The following example compares update loops to fixed update loops, then removes it whenever.

**JavaScript**
```js
let updatesCount = 0
let fixedUpdatesCount = 0
let action1 = new SandboxFunc(engine).SetAction(() => updatesCount++)
let action2 = new SandboxFunc(engine).SetAction(() => fixedUpdatesCount++)
Runtime.OnUpdate(action1)
Runtime.OnFixedUpdate(action2)

function printCount(){
    print("Updates are " + updatesCount)
    print("FixedUpdates are " + fixedUpdatesCount)
}
// Call print call after Update and FixedUpdate, such as an event

// Do something here that signifies a wait
Runtime.RemoveOnUpdate(action1)
Runtime.RemoveOnFixedUpdate(action2)
```

**Lua**
```lua
local updatesCount = 0
local fixedUpdatesCount = 0
local action1 = SandboxFunc().SetAction(function() updatesCount = updatesCount + 1 end)
local action2 = SandboxFunc().SetAction(function() fixedUpdatesCount = fixedUpdatesCount + 1 end)
Runtime.OnUpdate(action1)
Runtime.OnFixedUpdate(action2)

function printCount()
    print("Updates are "..tostring(updatesCount))
    print("FixedUpdates are "..tostring(fixedUpdatesCount))
end
-- Call print call after Update and FixedUpdate, such as an event

-- Do something here that signifies a wait
Runtime.RemoveOnUpdate(action1)
Runtime.RemoveOnFixedUpdate(action2)
```