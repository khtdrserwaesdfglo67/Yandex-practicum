function setup() {
  let canvas = {
    width: getComputedStyle(document.querySelector('.widget')).width.replace(
      'px',
      ''
    ),
    height: matchMedia('(orientation: landscape)').matches
      ? (getComputedStyle(document.querySelector('.widget')).width.replace(
          'px',
          ''
        ) *
          9) /
        16
      : (getComputedStyle(document.querySelector('.widget')).width.replace(
          'px',
          ''
        ) *
          16) /
        9,
  };

  createCanvas(canvas.width, canvas.height, document.querySelector('.canvas'));
  background(153);
  let button = select('button');
  button.mousePressed(() => {
    clear();
    background(153);
  });
}

function draw() {
  let size = select('.brush-size input[type=radio]:checked').value();
  let color = select('.color input[type=color]').value();
  if (mouseIsPressed) {
    stroke('rgba(0, 0, 0, 0)');
    fill(color);
    ellipse(mouseX, mouseY, size, size);
  }
}

function windowResized() {
  let canvas = {
    width: getComputedStyle(document.querySelector('.widget')).width.replace(
      'px',
      ''
    ),
    height: matchMedia('(orientation: landscape)').matches
      ? (getComputedStyle(document.querySelector('.widget')).width.replace(
          'px',
          ''
        ) *
          9) /
        16
      : (getComputedStyle(document.querySelector('.widget')).width.replace(
          'px',
          ''
        ) *
          16) /
        9,
  };
  resizeCanvas(canvas.width, canvas.height);
  background(153);
}

(function setButtonColor() {
  const button = document.querySelector('.color-button');
  const colorInput = document.querySelector('.color input[type=color]');
  const color = colorInput.value;
  colorInput.addEventListener('input', () => {
    button.style.backgroundColor = colorInput.value;
  });
})();
