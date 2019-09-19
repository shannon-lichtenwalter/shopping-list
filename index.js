'use strict';

function addItem() {
  $('form').submit(function () {
    event.preventDefault();
    console.log($('input').val());
    let newItem = $('input').val();
    // I want to make it a list item and add the same classes
    $('ul').append(`
    <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    $('input').val('');
  });
}

$(addItem);
