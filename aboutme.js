function coordinate(event) {
  let x = event.clientX;
  let y = event.clientY;
  let clientWidth = document.getElementById('bgs').clientWidth;
  let clientHeight = document.getElementById('bgs').clientHeight;

  if (clientWidth >= 1200) {
    Xpos = x/clientWidth;
    Ypos = y/clientHeight;
    document.getElementById("circle").setAttribute('cx', x);
    document.getElementById("circle").setAttribute('cy', y);

  }

  document.getElementById("X").innerText  = Xpos*100;
  document.getElementById("Y").innerText  = Ypos*100;

  document.getElementById("gr1").style  = "background-image: radial-gradient(at " + Math.round(88 - (50*Xpos)) + "% " + Math.round(22 - (20*Ypos)) + "%, hsla(269,80%,75%,1) 0px, transparent 50%);"

  document.getElementById("gr2").style  = "background-image: radial-gradient(at " + Math.round(25 + (75*Xpos)) + "% " + Math.round(98 - (10*Ypos)) + "%, hsla(240,71%,64%,1) 0px, transparent 50%);"
}
