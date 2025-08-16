let taskCount = 3; // 记录已有任务数量，用于生成唯一 id

function add_task() {
    const taskText = document.getElementById('taskInput').value;

    if (taskText.trim() === '') {
        alert('任务内容不能为空！');
        return;
    }

    const taskList = document.querySelector('.task-list');

    // 每个任务唯一 id
    taskCount++;
    const taskId = 'task' + taskCount;

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    taskItem.innerHTML = `
        <input type="checkbox" id="${taskId}" />
        <label class="checkmark" for="${taskId}"></label>
        <span class="task-text">${taskText}</span>
    `;

    // 添加到容器
    taskList.appendChild(taskItem);

    document.getElementById('taskInput').value = '';
}

document.getElementById('addTaskButton').addEventListener('click', add_task);