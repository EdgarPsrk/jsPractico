
import Model from './modelmio.js';
import View from './viewmio.js';

document.addEventListener('DOMContentLoaded', () => {
  const model = new Model();
  const view = new View();
  model.setView(view);
  view.setModel(model);

  view.render();
});