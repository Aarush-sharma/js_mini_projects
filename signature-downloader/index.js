let page = document.createElement("canvas");
let color = document.getElementById("color-picker");
let size = document.getElementById("size-picker");
let change = document.querySelector("#submit");
document.querySelector(".main").appendChild(page);

//adding functionality to the canvas

let canvas = page.getContext("2d");
let active = false;
let x = 0;
let y = 0;
page.addEventListener("mousedown", (Event) => {
  active = true;
  [x, y] = [Event.offsetX, Event.offsetY];
});

page.addEventListener("mousemove", (Event) => {
  if (active != true) return;
  else canvas.beginPath();
  canvas.moveTo(x, y);
  canvas.lineTo(Event.offsetX, Event.offsetY);
  canvas.strokeStyle = color.value;
  canvas.lineWidth = size.value;
  canvas.lineCap = "round";
  canvas.stroke();
  [x, y] = [Event.offsetX, Event.offsetY];
});

page.addEventListener("mouseup", () => {
  active = false;
});

page.addEventListener("mouseout", () => {
  active = false;
});

// adding buttons to download and reset canvas

const downloadButton = document.createElement("Button");
document.querySelector(".btns").appendChild(downloadButton);
downloadButton.innerText = "Download canvas";
downloadButton.classList.add("download");

downloadButton.addEventListener("click", () => {
  const dataURL = page.toDataURL("image/jpg");
  const link = document.createElement("a");
  link.download = "canvas_image.jpg";
  link.href = dataURL;
  link.click();
});

const reset = document.createElement("Button");
document.querySelector(".btns").appendChild(reset);
reset.innerText = "Reset canvas";
reset.addEventListener("click", () => {
  canvas.reset();
});
reset.classList.add("download");

// creating basic menu to manipulate canvas

let cansize = document.querySelector("#canvas-size");
let pageWidth = 700;
let pageHeight = 500;
page.width = pageWidth;
page.height = pageHeight;
const changer = () => {
  const selectedSize = cansize.value.split("x");
  pageWidth = parseInt(selectedSize[0]);
  pageHeight = parseInt(selectedSize[1]);
  page.width = pageWidth;
  page.height = pageHeight;
};
cansize.addEventListener("click", () => {
  changer();
});
