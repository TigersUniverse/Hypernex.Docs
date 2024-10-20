# Handlers

The general idea of Handlers is that they manage crucial functionality of the Hypernex game itself. This could be basic tasks like the Player's name, to more advanced tasks like the gravity of the world. Everything like this is completely done through Handlers.

Below is a list of handlers

+ [Bindings](./bindings/index.md)
+ [Events](./events/index.md)
+ [Network](./network/index.md)
+ [Physics](./physics/index.md)
+ [Players](./players/index.md)
+ [Runtime](./runtime/index.md)
+ [World](./world/index.md)

## Getting a Handler

Simply call the `instance` object's function `GetHandler` with the name of the Handler

```js
let HandlerClass = instance.GetHandler("Handler Name Here")
```