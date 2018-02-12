var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '#bar-2'
}).setTween('#semilla',1,{display: 'block'})
.addTo(controller);
