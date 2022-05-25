const animContact = document.getElementById('animContact');

const animationContact = bodymovin.loadAnimation({
    container: animContact,
    path: '../../src/resources/lotties/contact.json',
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    name: "Contacto",
  });