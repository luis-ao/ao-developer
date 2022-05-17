const animWeb = document.getElementById('animWeb');

const animationWeb = bodymovin.loadAnimation({
    container: animWeb,
    path: '../../src/web-dev.json',
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    name: "Hello World",
  })