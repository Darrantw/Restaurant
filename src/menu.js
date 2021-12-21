import Pizza from './pizza.jpeg'

export default function createMenu() {
  const menuList = document.createElement('ul')
  const item1 = document.createElement('li');
  const item2 = document.createElement('li');
  const item3 = document.createElement('li');
  const item4 = document.createElement('li');
  const item5 = document.createElement('li');
  const item6 = document.createElement('li');
  const item7 = document.createElement('li');

  menuList.setAttribute('id', 'menuId');

  item1.innerHTML = 'Pizza';
  let item1Pic = document.createElement('img');
  item1Pic.src = Pizza;
  item1.appendChild(item1Pic);
  item2.innerHTML = 'Pasta';
  item3.innerHTML = 'Risotto';
  item4.innerHTML = 'Lasagna';
  item5.innerHTML = 'Beef Carpaccio';
  item6.innerHTML = 'Chicken Milanese';
  item7.innerHTML = 'Fish';

  menuList.appendChild(item1);
  menuList.appendChild(item2);
  menuList.appendChild(item3);
  menuList.appendChild(item4);
  menuList.appendChild(item5);
  menuList.appendChild(item6);
  menuList.appendChild(item7);

  let main = document.getElementById('mainId');
  main.appendChild(menuList);
}
   