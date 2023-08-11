'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}

{
  const opens = document.querySelectorAll('section > a');
  const pgs = document.querySelectorAll('.personalgamescore');


  opens.forEach(clickedopen => {
    clickedopen.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById(clickedopen.dataset.id).classList.toggle('appear');
    });
  });
}