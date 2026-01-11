// using react via CDN

// first element
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
  'Hello guyssssss',
);

// second element
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

// selecting root DOM node
const root = document.getElementById('root');

// rendering elements to DOM
ReactDOM.render(element1, root);
ReactDOM.render(element2, root); //This element2 will override the prev rendered element1 and replace it

// checking type of React
console.log(typeof React); // object
