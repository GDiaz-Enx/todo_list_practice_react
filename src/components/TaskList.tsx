import { TaskItem } from "./TaskItem"

export function TaskList(
    {tasks, setCompleted, deleteTask}: {tasks: Todo[],
    setCompleted: (id: string, isChecked: boolean) => void, 
    deleteTask: (id:string) => void}
    ){
    return (
        <div>
            <ul className="list">
                {tasks.length === 0 && "No tasks founded"}
                {tasks.map(task => (
                    <TaskItem 
                        id={task.id} 
                        text={task.text} 
                        isCompleted={task.isCompleted}
                        setCompleted={setCompleted}
                        deleteTask={deleteTask}
                        />
                ))}
            </ul>
        </div>
        
    )
}
