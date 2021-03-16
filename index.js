const interField = document.querySelector('#enter_field');
const addBtn = document.querySelector('#add_btn');
const list = document.querySelector('.list');


const getValue = () => {
   const value = interField.value.trim();

   value ? console.log(value) : console.error('You need write smth')
}

addBtn.addEventListener('click', getValue);

const show = () => {
   const template = `
<li class="element">
                  <button class='delete'>x</button>
                  <input type="checkbox" checked>
                  <span class=text>Дело номер раз</span>
               </li>
`;
   list.innerHTML = template;
}

show();