document.getElementById('drag1').ondragstart = (event) => {
  event.preventDefault()

  console.log("This is event in renderer.js: ", event)
  window.electron.dragIt('drag-and-drop-1.md')
}

const dropZone = document.getElementById('dropZone')
const droppedFile = document.getElementById("droppedFile");

dropZone.ondragover = (event) => {
  event.preventDefault();
  console.log(event);
  event.dataTransfer.dropEffect = 'copy';
}

dropZone.ondrop = (event) => {
  event.preventDefault();

  const droppedFileName = event.dataTransfer.files[0].name;

  console.log(droppedFileName);
  droppedFile.innerText = droppedFileName
}

