let inputValue = document.getElementById('taskInput');
let addButton = document.getElementById("addButton");
let taskCount = 1;

addButton.addEventListener('click', () =>
{    
    let newTodoTask = inputValue.value;

    if(newTodoTask !== '')
    {
        let newRow = document.createElement('tr');
        let numberCell = document.createElement('td');
        numberCell.textContent = `#${taskCount}`;
        newRow.appendChild(numberCell);

        let todoTaskCell = document.createElement('td');
        let inputTask = document.createElement('input');
        inputTask.value = inputValue.value;
        inputTask.classList.add('newTaskInput');
        inputTask.disabled = true;
        todoTaskCell.appendChild(inputTask);
        newRow.appendChild(todoTaskCell);

        let statusCell = document.createElement('td');
        let statusButton = document.createElement('button');
        statusButton.textContent = 'Todo';
        statusButton.setAttribute('id', 'statusButton');
        statusButton.classList.add('button-status');
        statusCell.appendChild(statusButton);
        newRow.appendChild(statusCell);

        statusButton.addEventListener('click', () => 
        {
            switch(statusButton.innerText)
            {
                case 'Todo':
                    statusButton.innerText = 'In Progress'; 
                    break;
                case 'In Progress':
                    statusButton.innerText = 'Complete';
                    break;
                case 'Complete':
                    statusButton.innerText = 'Todo';
                    break;
                }
        });

        let editCell = document.createElement('td');
        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        editButton.classList.add('edit-button');
        editCell.appendChild(editButton);
        newRow.appendChild(editCell);

        inputTask.addEventListener('keydown', (event)=> 
        {
            if(event.key === 'Enter')
            {
                inputTask.disabled = true;
            }
        })

        editButton.addEventListener('click', ()=>
        {
            inputTask.disabled = false;
        })

        let removeCell = document.createElement('td');
        let removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        removeButton.classList.add('remove-button');
        removeCell.appendChild(removeButton);
        newRow.appendChild(removeCell);

        removeButton.addEventListener('click', ()=>
        {
            let row = removeButton.closest('tr');
            row.remove();
            taskCount--;
        })


        let taskList = document.querySelector('.task-container');
        taskList.appendChild(newRow);

        taskCount++;

        inputValue.value = '';
    }
});

inputValue.addEventListener('keydown', (event) => 
    {
        if (event.key === 'Enter') 
        {
            // Simulate click on addButton
            addButton.click();
        }
    });

