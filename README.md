# React - from first principles

---

## 1. Creating an HTML Element Using JavaScript

```js
document.createElement('h1');
```

- This creates an `h1` element in memory.
- At this point, it is **not shown on the page**.

```js
element.textContent = 'Hiiiii testing 1233.....';
```

- This adds text inside the `h1` element.

```js
element.className = 'element';
element.id = 'first';
```

- `className` sets the CSS class.
- `id` sets the element’s unique identifier.

---

## 2. Attaching the Element to the DOM

```js
const root = document.getElementById('root');
```

- Selects an existing element from the HTML.

```js
root.append(element);
```

- Adds the created element inside `root`.
- Now the element appears in the browser.

---

## 3. Adding Styles Using JavaScript

```js
element.style.fontSize = '30px';
element.style.backgroundColor = 'orange';
element.style.color = 'white';
```

- `style` is an object attached to the element.
- Each CSS property is set individually.
- CSS properties are written in camelCase.

---

## 4. Creating a `React` Object

```js
const React = {
  createElement: function (tag, attributes, children) {
    ...
  },
};
```

- `React` is a normal JavaScript object.
- It contains a method named `createElement`.

---

## 5. Parameters of `createElement`

```js
createElement(tag, attributes, children);
```

- `tag` → the HTML tag name (`h1`, `h2`)
- `attributes` → object containing properties like `className`, `id`, `style`
- `children` → text to be placed inside the element

---

## 6. Creating the Element Inside the Function

```js
const element = document.createElement(tag);
```

- Creates a DOM element based on the given tag.

```js
element.textContent = children;
```

- Sets the text inside the element.

---

## 7. Looping Through Attributes

```js
for (const key in attributes) {
```

- Goes through each property in the `attributes` object.

---

## 8. Handling the `style` Attribute

```js
if (key == 'style') {
  Object.assign(element.style, attributes.style);
}
```

- `style` is an object, so it needs special handling.
- `Object.assign` copies all style properties at once.

```js
Object.assign(target, source);
```

- Copies properties from `source` into `target`.

---

## 9. Handling Other Attributes

```js
else {
  element[key] = attributes[key];
}
```

- Sets properties like `className` and `id` directly on the element.

---

## 10. Returning the Created Element

```js
return element;
```

- Returns the fully prepared DOM element.

---

## 11. Creating Elements Using `React.createElement`

```js
const element1 = React.createElement('h1', {...}, 'Hello');
const element2 = React.createElement('h2', {...}, 'This is the second element');
```

- Calls the `createElement` method.
- Provides tag, attributes, and text content.

---

## 12. Appending Elements to the DOM

```js
root.append(element1);
root.append(element2);
```

- Inserts both elements into the DOM.
- They become visible in the browser.

---

## 13. Meaning of Your Comments

```js
// React is nothing but a JS object
```

- React is created using JavaScript.

```js
// React is a JS library
```

- React provides prewritten code to simplify tasks.

```js
// React.createElement
```

- `createElement` is one of the methods inside React.

---
