---
sidebar_position: 3
---

# Send

Sends a message to the WebSocket server

**Method Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
message | string | The message to send to the server

The example below opens a new connection, sends an object containing a number, then is returned a new number.

**JavaScript**
```js
let currentNumber = 0
let ws = new WebSocket()

function sendNewNumber(){
    let numberObject = {"number": currentNumber}
    let jsonString = JSON.stringify(numberObject)
    ws.Send(jsonString)
}

ws.Create("ws://example.com", () => sendNewNumber(), data => {
    // Precondition, data must be valid JSON string with a number property
    let j = JSON.parse(data)
    currentNumber = j["number"]
    print("Got new number! Number: " + currentNumber)
    sendNewNumber()
})
ws.Open()
```

**Lua**
```lua
local currentNumber = 0
local ws = WebSocket()

function sendNewNumber()
    local numberObject = {["number"] = currentNumber}
    local jsonString = json.serialize(numberObject)
    ws.Send(jsonString)
end

ws.Create("ws://example.com", function() sendNewNumber() end, function(data)
    -- Precondition, data must be valid JSON string with a number property
    local j = json.parse(tostring(data))
    currentNumber = j["number"]
    print("Got new number! Number: "..tostring(currentNumber))
    sendNewNumber()
end)
ws.Open()
```