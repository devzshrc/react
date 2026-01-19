# React - from first principles

---

## 1. Creating an HTML Element Using JavaScript

```js
document.createElement("h1");
```

- This creates an `h1` element in memory.
- At this point, it is **not shown on the page**.

```js
element.textContent = "Hiiiii testing 1233.....";
```

- This adds text inside the `h1` element.

```js
element.className = "element";
element.id = "first";
```

- `className` sets the CSS class.
- `id` sets the element’s unique identifier.

---

## 2. Attaching the Element to the DOM

```js
const root = document.getElementById("root");
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
element.style.fontSize = "30px";
element.style.backgroundColor = "orange";
element.style.color = "white";
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
if (key == "style") {
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

React's(WHAT) job is only to describe what the UI should look like. It doesn't create DOM elements. It creates lightweight Javascript objects that act as blueprints. - doesnt create anything - it'll just give you the object -just UI declaration
{
type:"h1",
props:,
style:{},
children:{},
className:
}
react just gives you this object
not its ReactDOM's job to get this element and operform operations onto it

ReactDOM's (HOW) job this is the renderer - Job is to take the blueprint from React and actually build the UI for specific platform(in this case web browser)

//React just gives you the react element that signifies how the Ui will look like, now its the job of ReactDOM to paint it onto the DOM

why do we need ReactDOM sperately,
react is used in web, mobile, pdfs,.....
rendering process will be different for various platforms...the process of describing how th eui will look like will be the same and react will handle that part

VITE- a bundler
npm create vite@latest

# Select: React

# Select: JavaScript

cd your-project-name
npm install
npm run dev

## How we do this manually?

### Core Idea

**Everything in React is built from `React.createElement()`**, even when you write JSX.

---

### 1. `React.createElement()`

- `React.createElement(type, props, children)` creates a **React Element** (a plain JS object).
- Nested UI requires **deeply nested function calls**, which is hard to read and write.
- Example: creating `div > h1 + h2` manually is verbose and ugly.

Bottom line:
👉 This syntax works, but humans shouldn’t write it directly.

---

### 2. React Root & Rendering

- `ReactDOM.createRoot(container)` creates a root connection to the DOM.
- `root.render(element)` converts a **React Element** into **real DOM nodes**.
- Calling `render()` again **replaces** the previous render, it does not append.

---

### 3. JSX Exists to Fix the Problem

- JSX looks like HTML but **is not HTML**.
- JSX is syntactic sugar for `React.createElement()`.

Flow:

```
JSX
↓ (Babel)
React.createElement()
↓
React Element (JS Object)
↓ (ReactDOM)
Real DOM
```

---

### 4. Babel’s Job

- Browsers do **not** understand JSX.
- **Babel** converts JSX into `React.createElement()` before execution.
- That’s why `type="text/babel"` or a build step is required.

No Babel → JSX breaks.

---

### 5. JSX Rules

- JSX must return **a single root element**.
- Multiple siblings must be wrapped in:
  - `<div>...</div>` or
  - `<>...</>` (**React Fragment**)

- This avoids ambiguity about what the component returns.

---

### 6. JSX Is Just JavaScript

- JSX expressions are wrapped in `()`.
- Comments inside JSX use `{/* comment */}`.
- Ultimately, JSX compiles to function calls.

---

### 7. React Components

- A React component is **just a function that returns JSX**.
- Example:

  ```js
  function App(name) {
    return <h1>Hello {name}</h1>;
  }
  ```

- Calling `App("devashish")` returns a React Element.
- `root.render(a)` renders that element.

Important distinction:

- `App()` → normal JS function call
- `<App />` → React component invocation (preferred, supports props & lifecycle)

---

### 8. Props vs Arguments (Important)

- Calling `App("devashish")` passes a raw argument.
- `<App name="devashish" />` passes **props**, which is the correct React pattern.
- Mixing the two is technically possible but conceptually wrong.

---

### Final Mental Model

- JSX is **not magic**.
- React components are **functions**.
- JSX → Babel → `React.createElement()` → ReactDOM → real DOM.
- One root element rule is non-negotiable.
- Use components with `<Component />`, not `Component()`.

## useState hook
