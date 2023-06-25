export function TaskItem(
    {id, text, isCompleted, setCompleted, deleteTask}: 
    {id:string, text:string, isCompleted:boolean,
        setCompleted: (id: string, isChecked: boolean) => void, 
        deleteTask: (id:string) => void}){
    return (
        <li key={id}>
            <label>
                <input type="checkbox" 
                checked={isCompleted} 
                onChange={e => setCompleted(id, e.target.checked )}
                />
                {text}
            </label>
            <button className="btn btn-delete" 
            onClick={() => deleteTask(id)}
            >Delete</button>
        </li>
        )
}
