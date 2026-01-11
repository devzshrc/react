/************************************************************
 * 1. MANUAL DOM CREATION (BASIC WAY – COMMENTED OUT)
 ************************************************************/

// create an h1 element using js
// const element1 = document.createElement('h1');

// add text inside the element
// element1.textContent = 'Hiiiii testing 1233.....';

// add class and id
// element1.className = 'element';
// element1.id = 'first';

// attach element to DOM
// const root = document.getElementById('root');
// root.append(element1);

// add styles using JavaScript
// element1.style.fontSize = '30px';
// element1.style.backgroundColor = 'orange';
// element1.style.color = 'white';

/************************************************************
 * 2. CREATING OUR OWN REACT OBJECT
 ************************************************************/

// React is a JavaScript object
// Inside it, we define a method called createElement
const React = {
  createElement: function (tag, attributes, children) {
    // create a DOM element using the given tag
    const element = document.createElement(tag);

    // add text inside the element
    element.textContent = children;

    // iterate over all properties inside attributes object
    for (const key in attributes) {
      // style needs special handling because it is an object
      if (key == 'style') {
        // Object.assign copies properties from one object to another
        Object.assign(element.style, attributes.style);
      } else {
        // assign other properties like className and id
        element[key] = attributes[key];
      }
    }

    // return the fully created element
    return element;
  },
};

// react is an object that we created
// createElement is a method inside that object

/************************************************************
 * 3. CREATING ELEMENTS USING React.createElement
 ************************************************************/

const element1 = React.createElement(
  'h1',
  {
    className: 'element',
    id: 'first',
    style: {
      fontSize: '30px',
      backgroundColor: 'orange',
      color: 'white',
    },
  },
  'Hwllo guyssssss',
);

const element2 = React.createElement(
  'h2',
  {
    className: 'element',
    id: 'second',
    style: {
      fontSize: '28px',
      backgroundColor: 'yellow',
      color: 'green',
    },
  },
  'This is the second element',
);

/************************************************************
 * 4. SAME createElement FUNCTION (WITHOUT React OBJECT)
 *    (COMMENTED OUT FOR REFERENCE)
 ************************************************************/

// function createElement(tag, attributes, children) {
//   const element = document.createElement(tag);
//   element.textContent = children;

//   // iterate over properties in attribute object
//   for (const key in attributes) {
//     if (key == 'style') {
//       Object.assign(element.style, attributes.style);
//     } else {
//       element[key] = attributes[key];
//     }
//   }

//   return element;
// }

// object.assign - can copy properties of one object to properties of other object

/************************************************************
 * 5. NOTES ABOUT REACT (FROM YOUR COMMENTS)
 ************************************************************/

// React is nothing but a JS object
// React has methods like createElement
// React.createElement
// React is a JS library (utilize already prewritten code that does some job for us)

/************************************************************
 * 6. CREATING OUR OWN ReactDOM OBJECT
 ************************************************************/

const root = document.getElementById('root');

// ReactDOM is also a JavaScript object
// It contains a render method
const ReactDOM = {
  render: function (child, parent) {
    // attach the child element to the parent
    parent.append(child);
  },
};

// render elements to the DOM
ReactDOM.render(element1, root);
ReactDOM.render(element2, root);

// this was our custom react
