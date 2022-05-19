const animWeb = document.getElementById('animWeb');

const animationWeb = bodymovin.loadAnimation({
    container: animWeb,
    path: '../../src/resources/lotties/web-dev.json',
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    name: "Diseño Web",
  })