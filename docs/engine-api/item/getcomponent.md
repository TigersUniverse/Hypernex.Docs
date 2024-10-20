# GetComponent

The GetComponent function will return a Component attached to an Item by its specific name. The component's abilities will be largely dictated by the IsReadOnly property on its corresponding Item.

For a List of Components, see the [Components](./../components/index.md) page.

Here is how you would get a component

```js
let component = item.GetComponent("Insert Component Name Here")
```