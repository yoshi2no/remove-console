This codemod removes all `console` statements from your TypeScript and JavaScript files

## Example

### Before

```ts
const greeting = "hello world!";

console.log("good morning y'all!");

const sayHi = () => {
  console.error("oops!");
};
```

### After

```ts
const greeting = "hello world!";

const sayHi = () => {};
```
