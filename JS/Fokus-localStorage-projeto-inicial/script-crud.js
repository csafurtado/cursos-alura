const taskListContainer = document.querySelector('.app__section-task-list');


// Lista de teste de tarefas
let tarefas = [
    {
        descricao: 'Tarefa Concluída',
        concluida: true,
    },
    {
        descricao: 'Tarefa Pendente',
        concluida: false,
    }
]

// Cria uma string que representa o elemento svg
const taskIconSvg = `
<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF" />
    <path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#01080E" />
</svg>
`;

// Função que cria uma nova tarefa no site (cria um elemento de tarefa)
function createTask(tarefa) {
    const liNewTask = document.createElement('li');
    liNewTask.classList.add('app__section-task-list-item');

    const svgIcon = document.createElement('svg');
    svgIcon.innerHTML = taskIconSvg;

    // Descrição da tarefa
    const descTask = document.createElement('p');
    descTask.classList.add('app__section-task-list-item-description');

    descTask.textContent = tarefa.descricao;

    liNewTask.appendChild(svgIcon);
    liNewTask.appendChild(descTask);

    return liNewTask;
}

tarefas.forEach( (task) => {
    const taskItem = createTask(task);
    taskListContainer.appendChild(taskItem);
})