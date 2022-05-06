const toggleTemasenuElement = document.getElementById('toggle_temasClases');
const mainTemasElement = document.getElementById('temasClases')

toggleTemasenuElement.addEventListener('click', ()=>{
    mainTemasElement.classList.toggle('temasClases--show')
}
)