# GetAMPM

Returns whether the hour is AM or PM. Primarily used with [Is24HourClock](is24hourclock.md) and [GetHours](gethours.md).

The following example returns the time with AM/PM appended if needed

**JavaScript**
```js
let time = new UtcTime()
let hours = time.GetHours()
let minutes = time.GetMinutes()

let timeText = ""

if(time.Is24HourClock())
{
    if(hours < 10)
        timeText += "0"
    timeText += hours + ":"
    if(minutes < 10)
        timeText += "0"
    timeText += minutes
}
else
{
    timeText += hours + ":"
    if(minutes < 10)
        timeText += "0"
    timeText += " " + time.GetAMPM()
}
print("The current time is " + timeText)
```

**Lua**
```lua
local time = UtcTime()
local hours = time.GetHours()
local minutes = time.GetMinutes()

local timeText = ""

if time.Is24HourClock() then
    if hours < 10 then
        timeText = timeText.."0"
    end
    timeText += hours + ":"
    if minutes < 10 then
        timeText = timeText.."0"
    end
    timeText + timeText..tostring(minutes)
else
    timeText = timeText..tostring(hours)..":"
    if minutes < 10 then
        timeText = timeText.."0"
    end
    timeText = timeText.." "..time.GetAMPM()
end
print("The current time is "..timeText)
```