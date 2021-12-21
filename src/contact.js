export default function createContactPage() {
  let contactPage = document.createElement('div');
  let subheading = document.createElement('h2');
  let ramble = document.createElement('p');

  contactPage.setAttribute('id', 'contactId');

  subheading.innerHTML = 'Getting in touch with us';
  ramble.innerHTML = `If you would like to contact us about any relevant issue(for instance: becoming a supplier, investing, events, enquiring about a postiton) feel free to do so by any of the following methods:
  
  email twitter facebook googlereviews`;

  let main = document.getElementById('mainId');
  contactPage.appendChild(subheading);
  contactPage.appendChild(ramble);
  main.appendChild(contactPage);
}