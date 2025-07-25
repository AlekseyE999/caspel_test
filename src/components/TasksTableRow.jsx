import deleteIcon from "../img/delete-logo.webp";
import UpdateTasksAction from "./actions/UpdateTasksAction";
import "../css/column.css"

const TasksTableRow = ({task, deleteTask, index, updateTask}) => {

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };

    return (
            <tr>
                <td width="10%">{task.id}</td>
                <td width="20%">{task.name}</td>
                <td width="30%">{new Date(task.date).toLocaleString("ru", options)}</td>
                <td width="15%">{task.someNumber}</td>
                <td width="20%">
                    <button onClick={()=> deleteTask(task.id)}>
                        <img src={deleteIcon} width="20%" height="20%"/>
                    </button>
                    <UpdateTasksAction updateTask={updateTask} index={task.id} task={task}/>
                </td>
            </tr>
    );
}

export default TasksTableRow