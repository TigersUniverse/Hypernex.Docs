---
sidebar_position: 1
---

# Create

Creates a WebSocket Instance associated with the WebSocket object. This is not static!

**Method Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
url | string | The WebSocket URL to connect to
OnOpen | Delegate? | Function to be invoked when the Socket opens a connection (Optional)
OnMessage | Delegate? | Function to be invoked when a message is received from the server (Optional)
OnClose | Delegate? | Function to be invoked when the Socket closes a connection (Optional)
OnError | Delegate? | Function to be invoked when the Socket closes a connection because of an error (Optional)

The Following example opens a WebSocket, sends an open message (see [Send](./send)), and handles new messages.

**JavaScript**
```js
let ws = new WebSocket()
ws.Create("ws://example.com/", () => ws.Send("I'm Here!"), data => {
    if(data === "ping")
        ws.Send("pong")
    print("Got message! Message: " + data)
})
ws.Open()
// ...
```

**Lua**
```lua
local ws = WebSocket()
ws.Create("ws://example.com/", function() ws.Send("I'm Here!") end, function(data)
    -- in case data is not a string
    local s = tostring(data)
    if s == "ping" then ws.Send("pong") end
    print("Got message! Message: "..s)
end)
ws.Open()
-- ...
```