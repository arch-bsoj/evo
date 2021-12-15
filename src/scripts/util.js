function create(tag, clss, id){
  const element = document.createElement(tag);
  element.className = clss;
  if(id) element.id = id;
  return element;
}
function createInput(clss, label, type, id, {value, placeholder, list}) {

  const input = create('input', clss + "-input");
  if(type) input.type = type;
  if(list) input.setAttribute('list', list);
  input.id = id;
  if(value) input.value = value;
  if(placeholder) input.setAttribute('placeholder', placeholder)

  if(label){
    const content = create('label', clss + "-content");
    const lbl = create('span', clss + "-label");
    lbl.textContent = label;
    insertChildren(content, [lbl, input]);
    return content;
  }

  return input;
}

function toggle(node = new HTMLElement()) {
  node.classList.toggle('visible');
}

function camelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}


function insertChildren(parent = HTMLElement, child = []){
  child.every(node => parent.appendChild(node))
}


export {
  create,
  createInput,
  toggle,
  insertChildren,
  camelCase
}