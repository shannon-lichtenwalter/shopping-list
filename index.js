'use strict';

function addItem() {
  $('form').submit(function () {
    event.preventDefault();
    // console.log($('input').val());
    let newItem = $('input').val();
    // I want to make it a list item and add the same classes and buttons and styles
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

function checkItem() {
  $('ul').on('click', '.shopping-item-toggle', function () {
    console.log($(event.target));
    $(event.target).closest('li').children('span').toggleClass('shopping-item__checked');
    //add to the span that is the direct descendent of the list (which is the parent list of the clicked button)
  });
}














$(addItem);
$(checkItem);
