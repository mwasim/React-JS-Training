function render(reactElement, containerDOMElement) {
  /* Your code here! */
  /*TOO:
        1. create a DOM element
        2. update properties
        3. put it in the container
    */

  //1. create a DOM element
  const domElement = document.createElement(reactElement.type);

  //2. update properties
  domElement.innerText = reactElement.children;
  //domElement.setAttribute(`href`, reactElement.props.href);
  for (const key in reactElement.props) {
    const value = reactElement.props[key];
    domElement.setAttribute(key, value);
  }

  //3. put it in the container
  containerDOMElement.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    id: `wikiLink`,
    "data-number": 25,
    href: "https://wikipedia.org/",
  },
  children: "Read more on Wikipedia",
};

const containerDOMElement = document.querySelector("#root");

render(reactElement, containerDOMElement);
