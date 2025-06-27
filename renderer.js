document.getElementById('drag1').ondragstart = (event) => {
  event.preventDefault()

  console.log("This is event in renderer.js: ", event)
  window.electron.dragIt('drag-and-drop-1.md')
}

const droppedFile = document.getElementById("droppedFile");


window.addEventListener('dragover', (event) => {
  event.preventDefault()

})

window.addEventListener('drop', (event) => {
  event.preventDefault()

  const fileName = event.dataTransfer.files[0].name

  console.log(fileName)
  droppedFile.innerText = fileName
})
