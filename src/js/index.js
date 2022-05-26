const animTitle = document.getElementById('animTitle');
const animAO = document.getElementById('animAO');

const animationTitle = bodymovin.loadAnimation({
    container: animTitle,
    path: '../../src/resources/lotties/title.json',
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    name: "Title",
  });

  const animationAO = bodymovin.loadAnimation({
    container: animAO,
    path: '../../src/resources/lotties/ao.json',
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    name: "AO",
  });