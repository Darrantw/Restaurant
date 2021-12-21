export default function createHome(){
    let homeText = document.createElement('p');
    homeText.setAttribute('id', 'homeId');
    homeText.innerHTML = 'This is the text see upon loading and when tabbing back to home.'
    let content = document.getElementById('content');
    content.appendChild(homeText);
}