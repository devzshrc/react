const element = React.createElement("h1", { id: "title" }, "Hello guyszzzz");
const element2 = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hellooooooooo"),
  React.createElement("h2", null, "hiiiiii")
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
root.render(element2);
// very complicated to write such a syntax

// const element3 = <h1 id="title">Mic testingg 123232</h1>;
// root.render(element3);

//is such a thing possible??
//JSX was born - looks like HTML
//JSX - React.createElement() -> React element(JS oBJect) -> converts to REAL DOM
//Javascript XML
//who will convert this syntax to our desired react.crea.... syntax
// Babel does that
//we imported babel from its cdn
//babel converts jsx to -> React.createElement()
// <script type="text/babel" src="script.js"></script>
//now this jsx code runs smoothly

const element3 = (
  <div>
    <h1>Hellooo</h1>
    <h2>HIii</h2>
  </div>
);
root.render(element3);
