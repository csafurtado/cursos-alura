const taskListContainer = document.querySelector('.app__section-task-list');

const formTask = document.querySelector('.app__form-add-task');
const toggleFormTaskBtn = document.querySelector('.app__button--add-task');
const formLabel = document.querySelector('.app__form-label');

const areaTextoTarefa = document.querySelector('.app__form-textarea');
const cancelTaskBtn = document.querySelector('.app__form-footer__button--cancel');
const taskActiveDescription = document.querySelector('.app__section-active-task-description');

const localStorageTarefas = localStorage.getItem('tarefas');    // Vira uma lista de JSON (objetos), já que localStorage só salva em string


// Lista de teste de tarefas
let tarefas = localStorageTarefas ? JSON.parse(localStorageTarefas) : [] 

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

// Inicialização das variaveis
let tarefaSelecionada = null;
let itemtarefaSelecionada = null;

const selecionaTarefa = (tarefa, elementoTarefa) => {
    // Remove a classe de todos os items de tarefas para caso haja algum selecionado
    document.querySelectorAll('.app__section-task-list-item-active').forEach((button) => {
        button.classList.remove('app__section-task-list-item-active')
    })
    
    if (tarefaSelecionada == tarefa ) {
        tarefaSelecionada = null;
        itemtarefaSelecionada = null;

        taskActiveDescription.textContent = '';
    } else {
        tarefaSelecionada = tarefa;
        itemtarefaSelecionada = elementoTarefa;

        // Adiciona a classe de elemento selecionado e da tarefa clicada atualmente
        taskActiveDescription.textContent = tarefa.descricao;
        elementoTarefa.classList.add('app__section-task-list-item-active');
    }
}

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

    // Já adiciona o comportamento de mostrar esta tarefa 
    liNewTask.onclick = () => {
        selecionaTarefa(tarefa, liNewTask);
    }
    
    // Associa o comportamento de deixar a tarefa somente como concluída e não poder ser desmarcada
    const button = document.createElement('button');
    
    // Já adiciona o comportamento de marcar a tarefa como concluída no ícone de check (que é um svg)
    svgIcon.addEventListener('click', (evento) => {
        evento.stopPropagation();   // Evita que elementos pai ou filhos capturem este evento
        button.setAttribute('disabled', true);
        liNewTask.classList.add('app__section-task-list-item-complete');
    })
    
    if (tarefa.concluida) {
        button.setAttribute('disabled', true);
        liNewTask.classList.add('app__section-task-list-item-complete');
    }

    liNewTask.appendChild(svgIcon);
    liNewTask.appendChild(descTask);

    return liNewTask;
}

// Função que limpa a caixa de texto do formulario de adicionar tarefa
const limparForm = () => {
    areaTextoTarefa.value = ''; // Reseta o campo de escrita
}

// Função que permite adicionar a funcionalidade de adicionar tarefas
toggleFormTaskBtn.addEventListener('click', () => {
    formLabel.textContent = 'Adicionando Tarefa';
    formTask.classList.toggle('hidden');
});

// Função que irá salvar no localStorage a lista das tarefas no formato JSON só que em string
const updateLocalStorageTarefas = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função que coleta as tarefas já salvas anteriormente
function getSavedTasks() {
    savedTasks = localStorage.getItem('tarefa');

    savedTasks.forEach((task) => {
        taskItem = createTask(task);
        taskListContainer.appendChild(taskItem);
    });
}

// Adiciona o comportamento para de fato adicionar a tarefa ao hall de tarefas
formTask.addEventListener('submit', (evento) => {
    evento.preventDefault();    // Evita do form recarregar a página

    // Cria a task com base no que foi escrito na caixa de texto da tarefa
    const task = { 
        descricao: areaTextoTarefa.value,
        concluida: false,
    }

    limparForm();
    
    // Adiciona a tarefa criada para o hall das tarefas 
    tarefas.push(task);

    updateLocalStorageTarefas();

    const taskItem = createTask(task);
    taskListContainer.appendChild(taskItem);
});


cancelTaskBtn.addEventListener('click', () => {
    formTask.classList.toggle('hidden');
    limparForm();
});

// Coloca as tarefas na página
tarefas.forEach( (task) => {
    const taskItem = createTask(task);
    taskListContainer.appendChild(taskItem);
});



// // Forma de salvar dados do site dentro do próprio navegador DA MÁQUINA ATUAL
// localStorage.setItem('quantidade', '10');   // Salva um par de chave:valor 
// localStorage.getItem('quantidade');         // Coleta um valor de uma chave