let fileInput = document.getElementById("file");
let image = document.getElementById("image");
let downloadButton = document.getElementById("download");
let aspectRatioBtns = document.querySelectorAll(".aspect-ratio-btns");
const rotateRightButton = document.getElementById("rotate-right");
const rotateLeftButton = document.getElementById("rotate-left");
const scaleXButton = document.getElementById("scale-X-button");
const scaleYButton = document.getElementById("scale-Y-button");
const previewButton = document.getElementById("preview");
const previewImage = document.getElementById("preview-image");
const options = document.querySelector(".options-btn");
let cropper = "";
let fileName = "";
let scaleXClick = false,
scaleYClick = false;
let rotateRightValue = -45,
rotateLeftValue = 45;

window.onload = () => {
    downloadButton.classList.add("hide");
    options.classList.add("hide");
    previewButton.classList.add("hide");
};