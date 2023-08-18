# Is24HourClock

Checks to see if the device is using a 24 hour time clock. 24 hour clocks are represented by HH:mm rather than hh:mm.

The following example gets the hour using [GetHours](gethours.md) and formats it to the current time standard.

**JavaScript**
```js
let time = new Time()
let hours = time.GetHours()
let text = ""
if(time.Is24HourClock())
{
    if(hours < 10)
        text += "0"
    text += hours
}
else
{
    if(hours > 12)
        text += hours - 12
}
print("The hour is " + text)
```

**Lua**
```lua
local time = Time()
local hours = time.GetHours()
local text = ""
if time.Is24HourClock() then
    if hours < 10 then
        text = text.."0"
    end
    text = text..tostring(hours)
else
    if hours > 12 then
        text = text..tostring(hours - 12)
    end
end
print("The hour is "..text)
```