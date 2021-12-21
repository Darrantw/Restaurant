import loadMe from "./load"
import createMenu from "./menu";
import createHome from "./home";
import './styles.css';
import createContactPage from "./contact";

function start() {
  console.log('Hi again');
  loadMe();
  let contentDiv = document.getElementById('content');
  let menuBtn = document.getElementById('menu');
  let contactBtn = document.getElementById('contact');
  let homeBtn = document.getElementById('home');

  let newDiv = document.createElement('div');
  newDiv.innerHTML = 'newDiv';

  // menuBtn.onclick = function() {
  //   contentDiv.appendChild(newDiv);
  // };
  createMenu();
  createHome();
  createContactPage();
  let active = 'home';
  let home = document.getElementById('homeId');
  let menu = document.getElementById('menuId');
  menu.classList.add('hidden');
  let contact = document.getElementById('contactId')
  contact.classList.add('hidden');


  menuBtn.onclick = function() {
     home.classList.add('hidden');
     contact.classList.add('hidden');
     menu.classList.remove('hidden');
  };

  contactBtn.onclick = function() {
      menu.classList.add('hidden');
      home.classList.add('hidden');
      contact.classList.remove('hidden');
  };

  homeBtn.onclick = function() {
    menu.classList.add('hidden');
    contact.classList.add('hidden');
    home.classList.remove('hidden');
}
}


window.onload = start();
