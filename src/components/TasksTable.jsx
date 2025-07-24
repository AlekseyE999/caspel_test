import React, { useEffect, useState } from "react";
import TasksTableRow from "./TasksTableRow.jsx";

const TasksTable = ({tasks, deleteTask, updateTask}) => {

    console.log("Table");

    return (

        <div className="TasksTable">
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>№</th>
                        <th>Имя</th>
                        <th>Дата</th>
                        <th>Число</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, i) => <TasksTableRow task={task} index={i} deleteTask={deleteTask} updateTask={updateTask} key={task.id} />)
                    }
                </tbody>
            </table>
        </div>

    );
}

export default TasksTable;