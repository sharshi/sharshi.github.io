window.addEventListener("DOMContentLoaded", () => {
  const list = ['Projects', 'Skills', 'Contact'];

  const listElements = list.map(el => {
    return `<li>
      <a href="#${el.toLowerCase()}" class="col-12-xsmall button">
        ${el}
      </a>
    </li>`
  });

  document.getElementById('menu-list').innerHTML = listElements.join('');
});
