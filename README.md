# whichplatform
A small Node.js standard Javascript file helps you detect which platform of Operating System you currently using.

# How to use?

Just clone the repo and paste `whichplatform.js` in your code, just this steps.

# Example

After pasting code follow the example.

```js

let plat = new platform();

if (plat.isLinux() == true) {
    console.log('Linux Platform');
}
else if (plat.isWindows() == true) {
    console.log('Windows Platform');
}
```

# License

MIT License
