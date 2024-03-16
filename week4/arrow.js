const tasks = {
        tasks: [
            { text: 'Alışveriş yap', completed: true },
            { text: 'Temizlik yap', completed: false },
            { text: 'Ödev yap', completed: false }
        ],
        getTasksToDo() {
            return this.tasks.filter(task => !task.completed).map(task => task.text);
        },
        getTasksToDoTR() {
                return this.tasks.filter(task => task.completed===false);
            }
       
    };
    
    console.log(tasks.getTasksToDo()); // Alışveriş yap, Temizlik yap, Ödev yap
    console.log(tasks.getTasksToDoTR()); // Alışveriş yap, Temizlik yap, Ödev yap
