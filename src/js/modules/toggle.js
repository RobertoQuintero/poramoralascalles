const toggleButton = document.getElementById('toggle-button'),
      mainMenu = document.getElementById('main-menu')

toggleButton.addEventListener('click',()=>{
  mainMenu.classList.toggle('show')
})
