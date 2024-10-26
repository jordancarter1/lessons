document.addEventListener('DOMContentLoaded', function() {
    const contentElement = document.getElementsByClassName('content')[0];

    const changeButtonContent = document.getElementsByClassName('changeContentButton')[0];
    changeButtonContent.addEventListener('click', function() {
        contentElement.innerHTML = 'Содержимое изменено!';
    });

    const replaceElementContent = document.getElementsByClassName('replaceElementButton')[0];
    replaceElementContent.addEventListener('click', function() {
        contentElement.outerHTML = '<div class="content">viperrviperrviperr</div>';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const openModal = document.getElementsByClassName('modal-button')[0];

    openModal.addEventListener('click', function() {
        const userResponse = prompt('вайперр?');
        if (userResponse !== null) {
            alert(`вайперр: ${userResponse}`);
        } else {
            alert('вы не вайперр');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        console.log(inputField.value); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const resultList = document.getElementById('searchList');

    searchForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const query = searchInput.value.trim();
        resultList.innerHTML = '';

        if(query) {
            try {
                const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
                const data = await response.json();

                if (data.products && data.products.length > 0) {
                    data.products.forEach(product => {
                        const listItem = document.createElement('li');
                        listItem.textContent = `${product.title} - $${product.price}`;
                        resultList.appendChild(listItem);
                    });
                } else {
                    resultList.innerHTML = '<li>Товары не найдены</li>';
                }
            } catch (error) {
                resultList.innerHTML = '<li>Ошибка при поиске товаров</li>';
                console.error("Ошибка запроса:", error);
            }
        }
    });
});