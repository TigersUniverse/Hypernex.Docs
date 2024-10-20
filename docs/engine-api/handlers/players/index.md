# Players

The Players class gets all information about current Players connected to a GameInstance, or about a Player using an Avatar (if the Player is in a GameInstance).

To get the Players class, you must [get its handler](./../index.md).

```js
let Players = instance.GetHandler("Players")
```

You can then use the `Players` property to access the Players class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetPlayerFromUserId | [Player](./../../player/index.md)? | `string` | Returns a Player from their UserId

## Properties

Property Name | Type | Description
--- | --- | ---
LocalPlayer | [Player](./../../player/index.md) | The Local Player, or the Avatar Player
Children | [Player](./../../player/index.md)[] | All Players currently present in an instance