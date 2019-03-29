


class DomManager {
  constructor(root = document.body) {
    // dom elements register here
    this.elements = new ElementsQueue();
    this.root = root;
  }

  registerShadowDomElements() {
    // add elements efficiently 

  }

  resolveDifferences() {
    // efficiently resovle shadow dom vs regular dom
  }

  updateDom() {
    // update the real dom with minimal required changes
  }

  resolver()

  createElement = (el, parent, properties = {}) => {
    let parentNode = this.findParent(el);
    let shadow = parentNode.attachShadow({ mode: 'open' });
    let shadowEl = shadow.createElement(el, properties);
    shadow.appendChild(shadowEl);
  }
}


export const createElement = (el, parent, properties = {}) => {
  this.findParent
}

export default DomManager

