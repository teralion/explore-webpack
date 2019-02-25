import join from 'lodash/join';
import img from 'app/image.jpeg';
import css from 'app/index.css';

function getElement() {
  const elem = document.createElement('div');
  elem.innerHTML = join(['Valladolid', 'is in', 'Spain!'], ' ');

  let image = new Image();
  image.src = img;
  elem.appendChild(image);
  elem.classList.add(css.elem);

  return elem;
}

document.body.appendChild(getElement());