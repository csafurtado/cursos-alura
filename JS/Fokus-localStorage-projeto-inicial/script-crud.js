const taskListContainer = document.querySelector('.app__section-task-list');

const formTask = document.querySelector('.app__form-add-task');
const toggleFormTaskBtn = document.querySelector('.app__button--add-task');
const formLabel = document.querySelector('.app__form-label');

const areaTextoTarefa = document.querySelector('.app__form-textarea');
const cancelTaskBtn = document.querySelector('.app__form-footer__button--cancel');
const taskActiveDescription = document.querySelector('.app__section-active-task-description');

const localStorageTarefas = localStorage.getItem('tarefas');    // Vira uma lista de JSON (objetos), já que localStorage só salva em string


// Lista de teste de tarefas
let tarefas = localStorageTarefas ? JSON.parse(localStorageTarefas) : [];

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

// Inicialização das variaveis relacionadas a tarefas
let tarefaSelecionada = null;
let itemtarefaSelecionada = null;

let tarefaEmEdicao = null;
let paragrafoEmEdicao = null;

const selecionaTarefa = (tarefa, elementoTarefa) => {
    // Remove a classe de todos os items de tarefas para caso haja algum selecionado
    document.querySelectorAll('.app__section-task-list-item-active').forEach((button) => {
        button.classList.remove('app__section-task-list-item-active')
    })
    
    // Se a tarefa já estiver selecionada, deseleciona, senão, seleciona-a
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

// Função para selecionar uma tarefa para edição, sendo diferente de só uma seleção 
const selecionaTarefaParaEdicao = (task, paragrafoTask) => {
    // Se a tarefa já tenha sido aberta para edição e se é clicado para editá-la novamente, o form fecha
    if (tarefaEmEdicao == task) {
        limparForm();
        return;
    }

    console.log("alou");

    // Abre o form com as características da edição já com o nome da tarefa preenchido em sua área de texto
    formLabel.textContent = "Editando tarefa";

    tarefaEmEdicao = task;
    paragrafoEmEdicao = paragrafoTask;
    areaTextoTarefa.value = task.descricao;

    formTask.classList.remove('hidden');
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
    
    // Associa o comportamento de editar a tarefa com um botão que será criado
    const buttonEditar = document.createElement('button');
    buttonEditar.classList.add('app__button-edit');

    // Cria um ícone de edição para juntá-lo ao botão
    const imgIconeEdicao = document.createElement('img');
    imgIconeEdicao.src = './imagens/edit.png';

    buttonEditar.appendChild(imgIconeEdicao);

    buttonEditar.addEventListener('click', (evento) => {
        evento.stopPropagation();
        selecionaTarefaParaEdicao(tarefa, descTask);
    })

    // Já adiciona o comportamento de marcar a tarefa como concluída no ícone de check (que é um svg)
    svgIcon.addEventListener('click', (evento) => {
        evento.stopPropagation();   // Evita que elementos pai ou filhos capturem este evento
        buttonEditar.setAttribute('disabled', true);
        liNewTask.classList.add('app__section-task-list-item-complete');
    })
    
    if (tarefa.concluida) {
        buttonEditar.setAttribute('disabled', true);
        liNewTask.classList.add('app__section-task-list-item-complete');
    }

    liNewTask.appendChild(svgIcon);
    liNewTask.appendChild(descTask);
    liNewTask.appendChild(buttonEditar);

    return liNewTask;
}

// Função que limpa a caixa de texto do formulario de adicionar tarefa
const limparForm = () => {
    tarefaEmEdicao = null;
    paragrafoEmEdicao = null;

    areaTextoTarefa.value = ''; // Reseta o campo de escrita
    formTask.classList.add('hidden');
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

    // Verifica se é uma edição de tarefa ou a adição de uma nova
    if (tarefaEmEdicao) {
        tarefaEmEdicao.descricao = areaTextoTarefa.value;
        paragrafoEmEdicao.textContent = areaTextoTarefa.value;
    } else {
        // Cria a task com base no que foi escrito na caixa de texto da tarefa
        const task = { 
            descricao: areaTextoTarefa.value,
            concluida: false,
        }

        // Adiciona a tarefa criada para o hall das tarefas, cria o elemento dela e adiciona ela para a lista de tarefas
        tarefas.push(task);
        const taskItem = createTask(task);
        taskListContainer.appendChild(taskItem);
    }

    // Atualiza o localStorage para registrar a nova tabela criada/editada e fecha o form
    updateLocalStorageTarefas();
    limparForm();
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