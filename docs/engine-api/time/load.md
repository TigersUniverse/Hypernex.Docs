# Load

Loads a specified time.

**Overload 1 Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
year | int | The target year
month | int | The target month
day | int | The target day

**Overload 2 Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
year | int | The target year
month | int | The target month
day | int | The target day
hour | int | The target hour
minute | int | The target minute
second | int | The target second

**Overload 3 Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
year | int | The target year
month | int | The target month
day | int | The target day
hour | int | The target hour
minute | int | The target minute
second | int | The target second
milisecond | int | The target millisecond

**Overload 4 Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
u | [UtcTime](./../utctime/index.md) | The UtcTime to convert to Local Time

The following example Loads the Date January 1st, 2012

**JavaScript**
```js
let time = new Time()
time.Load(2012, 1, 1)
```

**Lua**
```lua
local time = Time()
time.Load(2012, 1, 1)
```