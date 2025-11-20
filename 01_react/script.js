// create an h1 element using JS

function createElement(tag, attributes, children) {
  const element = document.createElement(tag);
  element.textContent = children;
  for (const key in attributes) {
    if (key === 'style') {
      Object.assign(element.style.attributes.style);
    } else {
      element[key] = attributes[key];
    }
  }
  return element;
}
const element1 = createElement(
  'h1',
  { className: 'element', id: 'first' },
  'hiii bhai kya haal chaal',
);

// const element1 = document.createElement('h1');
// element1.textContent = 'Hiiiiiiiiii';
// element1.className = 'element';
// element1.id = 'first';
// // element1.style.color = 'orange';
// // element1.style.backgroundColor = 'brown';
// // element1.style.fontSize = '30px';

// const element2 = document.createElement('h1');
// element2.textContent = 'software should be beautiful';
// element2.className = 'element';
// element2.id = 'second';
// element2.style.color = 'blue';
// element2.style.backgroundColor = 'orange';
// element2.style.fontSize = '28px';

const root = document.getElementById('root');
root.append(element1);
// root.append(element2);
