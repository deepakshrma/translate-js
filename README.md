# Translate-js
A simple translation/locale library to switch between messages. No fancy module, just an utility.
### How to use
--As simple as Vanila Ice-Cream

```js
import { addLocale, setLocale } from 'translate-js'
addLocale({
    en: {
        hello: "Hello, Good Morning"
    },
    zh: {
        hello: "你好，早上好"
    }
});
setLocale("en"); // Set default Locale
console.log("hello".toLocale()) // Output: Hello, Good Morning
setLocale('zh')
console.log("hello".toLocale()) // Output: 你好，早上好
```

### How to install
```bash
npm i --save https://git@github.com/deepakshrma/translate-js.git
```

🕉Thanks for support!!🙏🙏
