document.addEventListener('DOMContentLoaded', function() {
  const newUl = document.createElement('ul');
  
  newUl.innerHTML = '<li>телефон</li><li class="second">ноутбук</li><li>часы</li>';

  document.body.appendChild(newUl);

  const secondElement = document.getElementsByClassName('second')[0];

  if (secondElement) {
    secondElement.style.color = 'yellow';
    newUl.style.textDecoration = 'underline';
  }

  const newButton = document.createElement('button');
  newButton.textContent = 'изменить первый продукт';

  newButton.addEventListener('click', function() {
    const firstProduct = newUl.getElementsByTagName('li')[0];
    if (firstProduct) {
      firstProduct.textContent = 'смартфон';
    }
  });

  document.body.appendChild(newButton);

  const hideButton = document.createElement('button');
  hideButton.textContent = 'Скрыть третий продукт';

  hideButton.addEventListener('click', function() {
    const thirdElement = newUl.getElementsByTagName('li')[2]; 
    if (thirdElement) {
      thirdElement.classList.add('is-hidden'); 
    }
  });

  document.body.appendChild(hideButton);

  const lastButton = document.createElement('button');
  lastButton.textContent = 'добавить планшет';

  lastButton.addEventListener('click', function() {
    const createElement = document.createElement('li');
    createElement.textContent = 'планшет';
    newUl.appendChild(createElement);
  });

  document.body.appendChild(lastButton);
});
