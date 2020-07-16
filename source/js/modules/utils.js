const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const appendElement = (parent, component) => {
  const element = component.getElement();
  parent.appendChild(element);
};

const removeElement = (parent, component) => {
  const removedElement = component.getElement();
  parent.removeChild(removedElement);
};

export {createElement, appendElement, removeElement};
