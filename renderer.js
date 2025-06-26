document.getElementById('drag1').ondragstart = (event) => {
  event.preventDefault()

  console.log("This is event in renderer.js: ", event)
  window.electron.dragIt('drag-and-drop-1.md')
}

document.getElementById('drag2').ondragstart = (event) => {
  event.preventDefault()

  console.log("This is event in renderer.js: ", event)
  window.electron.dragIt('drag-and-drop-2.md')
}