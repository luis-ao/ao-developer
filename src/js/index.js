const animTitle = document.getElementById('animTitle');
const animTitlePhone = document.getElementById('animTitlePhone');
const animAO = document.getElementById('animAO');

const animationTitle = bodymovin.loadAnimation({
    container: animTitle,
    path: '../../src/resources/lotties/title.json',
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    name: "Title",
});
  const animationTitlePhone = bodymovin.loadAnimation({
    container: animTitlePhone,
    path: '../../src/resources/lotties/title-phone.json',
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