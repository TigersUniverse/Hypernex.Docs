---
sidebar_position: 1
---

# Handlers

The general idea of Handlers is that they manage crucial functionality of the Hypernex game itself. This could be basic tasks like the Player's name, to more advanced tasks like the gravity of the world. Everything like this is completely done through Handlers.

Below is a list of handlers

+ [Bindings](./bindings/index.md) (Client-Only)
+ [Events](./events/index.md)
+ [NavMesh](./navmesh/index.md) (Client-Only)
+ [Network](./network/index.md)
+ [Physics](./physics/index.md) (Client-Only)
+ [Players](./players/index.md) (Client-Only)
+ [Runtime](./runtime/index.md) (Client-Only)
+ [World](./world/index.md) (Client-Only)
+ [HTTP](./http/index.md) (Server-Only)

## Getting a Handler

Simply call the `instance` object's function `GetHandler` with the name of the Handler

```js
let HandlerClass = instance.GetHandler("Handler Name Here")
```