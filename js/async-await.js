'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let list = document.getElementById('list');
  let btn = document.getElementById('btn');

  btn.addEventListener('click', async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    users.forEach((user) => {
      const li = document.createElement('li');
      li.innerText = user.name;
      list.appendChild(li);
    });
  });
});
