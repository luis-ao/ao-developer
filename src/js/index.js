const animTitle = document.getElementById('animTitle');

const animationTitle = bodymovin.loadAnimation({
    container: animTitle,
    path: '../../src/resources/lotties/title.json',
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    name: "Title",
  });