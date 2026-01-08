// // create an h1 element using js
// const element1 = document.createElement('h1');
// element1.textContent = 'Hiiiii testing 1233.....';
// element1.className = 'element';
// element1.id = 'first';
// //attach to DOM
// const root = document.getElementById('root');
// root.append(element1);
// //can we attach more properties
// element1.style.fontSize = '30px';
// element1.style.backgroundColor = 'orange';
// element1.style.color = 'white';
const React = {
  createElement: function (tag, attributes, children) {
    const element = document.createElement(tag);
    element.textContent = children;
    //iterate over properties in attribute object
    for (const key in attributes) {
      if (key == 'style') {
        Object.assign(element.style, attributes.style);
      } else {
        element[key] = attributes[key];
      }
    }
    return element;
  },
};
//react is a object that we created in which there exists a method named as createElement

const element1 = React.createElement(
  'h1',
  {
    className: 'element',
    id: 'first',
    style: { fontSize: '30px', backgroundColor: 'orange', color: 'white' },
  },
  'Hwllo guyssssss',
);
const element2 = React.createElement(
  'h2',
  {
    className: 'element',
    id: 'second',
    style: { fontSize: '28px', backgroundColor: 'yellow', color: 'green' },
  },
  'This is the second element',
);

// function createElement(tag, attributes, children) {
//   const element = document.createElement(tag);
//   element.textContent = children;
//   //iterate over properties in attribute object
//   for (const key in attributes) {
//     if (key == 'style') {
//       Object.assign(element.style, attributes.style);
//     } else {
//       element[key] = attributes[key];
//     }
//   }
//   return element;
// }
//object.assign - can copy properties of one object to properties of other object
root.append(element1);
root.append(element2);

//React is nothing but a JS object in which various methods are present like createElement
//React.createElement
