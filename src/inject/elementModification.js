/* eslint-disable no-unused-vars */

const removeElement = (element) => {
    // Removes an element from the document.
    element.parentNode.removeChild(element);
};

const debugHighLight = (element) => {
    // used for debugging to see whicht elements get manipulated
    element.style.border = 'solid red';
};

const blurElement = (element) => {
    // current non destructive manipulation strategy
    element.classList.add('blur');
};