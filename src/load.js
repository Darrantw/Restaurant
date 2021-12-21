import menuFunc from "./menu";

export default function loadMe() {
  console.log('Hi from load');
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createMain())
  content.appendChild(createFooter())
  // content.appendChild(createHeader());
}

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  const menu = document.createElement('button');
  const home = document.createElement('button');
  const contact = document.createElement('button');

  title.innerHTML = "Darran's Deconstructed Dinners";
  title.style.margin = '0, auto';

  menu.innerHTML = 'Menu';
  menu.setAttribute('id', 'menu');
  home.innerHTML = 'Home';
  home.setAttribute('id', 'home');
  contact.innerHTML = 'Contact';
  contact.setAttribute('id', 'contact');

  header.appendChild(title);
  header.appendChild(menu);
  header.appendChild(home);
  header.appendChild(contact);

  return header;
};

function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'mainId')
  main.style.backgroundColor = 'blue';
  main.innerHTML = '';

  return main;
};


function createFooter() {
  const footer = document.createElement('footer');
  footer.style.backgroundColor = 'black'
  footer.innerHTML = 'This is the footer';

  return footer;
};