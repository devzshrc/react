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

//Babel converts the JSX to react element -> then this react element is given to REACTDOM and reactDOM converts it to a real HTML element

const element3 = (
  <div>
    <h1>
      {/* <h1 id="title" className="first"></h1> */}
      Hellooo
    </h1>
    <h2>HIii</h2>
  </div>
);
//(JSX code) -> wrapped in ()
root.render(element3);

const element4 = (
  <>
    <h1>frebjghb</h1>
    <h2>kaise ho</h2>
  </> // should be wrapped under some element...div or <> </> called as fragment
  //cuz if not wrapped...which one will go in element4 - h1 or h2.....to prevent that we wrap it inside a div or fragment
  //we should have only one root
);

//React Component
// its just a function that return JSX
function App() {
  return <h1>hello namaste</h1>;
  //returning JSX
} // this is a react component

root.render(App());
// root.render(<App />); can be called like this too
// App() and <App/>
//since we are calling this App() like this so ....can we also pass-in arguments???
// const a = App("devashish") like this
