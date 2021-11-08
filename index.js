const taskInput = document.getElementById('input');
const taskButton = document.getElementById('addBtn');
const taskTable = document.getElementById('mytask_table');

function addTask() {
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td> <input type="checkbox" onclick="completar()" /> </td>
        <td style="flex-grow: 2"> ${taskInput.value} </td>
        <td onclick="borrar()"> <i class="fas fa-trash-alt"></i></td>
    `;

    taskTable.appendChild(fila);

};


taskButton.addEventListener('click', function(e){
    e.preventDefault();
    if(taskInput.value === "") {
        validacion('Introduce una tarea', 'fallo');
    } else {
        addTask();
        validacion('¡Tarea añadida con éxito!', 'exito');
    }
    e.target.reset();
});


function borrar(event) {
  this.event.target.parentElement.parentElement.remove();
}

function validacion(mensaje, clase) {
    const divText = document.createElement('div');
    divText.className = clase;
    divText.appendChild(document.createTextNode(mensaje));

    const divTitle = document.querySelector('th');

    divTitle.insertBefore(divText, null);
    
    setTimeout(function() {
        document.querySelector(`.${clase}`).remove();
    }, 3000);

}

function completar(event) {
    if(this.event.target.checked) {
        this.event.target.parentElement.parentElement.classList.add('done');
    } else {
        this.event.target.parentElement.parentElement.classList.remove('done');
    }
}