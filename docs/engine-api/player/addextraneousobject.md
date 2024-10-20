# AddExtraneousObject

:::info

This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.

:::

The AddExtraneousObject method will add an extraneous object to be serialized across the network for other clients to read.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
key | `string` | The key of the ExtraneousObject
value | `object` | The value of the ExtraneousObject

:::warning

**ALL** extraneous data values **MUST** be serializable by the network!

:::

The following examples create a random float3 and add it as extraneous data under key `RandomPosition`

**JavaScript**
```js
let Players = instance.GetHandler("Players")

function random(min, max){
    if(min === undefined)
        min = 0
    if(max === undefined)
        max = Number.MAX_SAFE_INTEGER
    return Math.floor(Math.random() * max + 1) + min
}

let f = new float3(random(), random(), random())
Players.LocalPlayer.AddExtraneousData("RandomPosition", f)
```

**Lua**
```lua
local Players = instance.GetHandler("Players")

function random(min, max)
    if min == nil then min = 0 end
    if max == nil then max = math.huge end
    return math.random(min, max)
end

local f = float3()
f.x = random()
f.y = random()
f.z = random()
Players.LocalPlayer.AddExtraneousData("RandomPosition", f)
```