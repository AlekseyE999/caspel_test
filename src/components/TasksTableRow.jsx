import React from "react";
import deleteIcon from "../img/delete-logo.webp";
import updateIcon from "../img/update-logo.png"

const TasksTableRow = ({task, deleteTask, index, updateTask}) => {

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };

    return (
            <tr>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{new Date(task.date).toLocaleString("ru", options)}</td>
                <td>{task.someNumber}</td>
                <td width="20%">
                    <button  width="10%" height="10%" onClick={()=> deleteTask(index)}>
                        <img src={deleteIcon} width="20%" height="20%"/>
                    </button>
                    <button  width="20%" height="20%" onClick={()=> updateTask(index)}>
                        <img src={updateIcon} width="20%" height="20%"/>
                    </button>
                    
                </td>
            </tr>
    );
}

export default TasksTableRow