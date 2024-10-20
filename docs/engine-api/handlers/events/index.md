# Events

Provides tools for subscribing to certain events for the World and GameServer.

To get the Events class, you must [get its handler](./../index.md).

```js
let Events = instance.GetHandler("Events")
```

You can then use the `Events` property to access the Events class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
[Subscribe](subscribe.md) | `void` | [ScriptEvent](./../../scriptevent/index.md), `function`¹ | Subscribes a SandboxFunc to a [ScriptEvent](./../../scriptevent/index.md)

___

¹ Has multiple callback parameters