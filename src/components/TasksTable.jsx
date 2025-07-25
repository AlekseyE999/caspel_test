import TasksTableRow from "./TasksTableRow.jsx";

const TasksTable = ({tasks, deleteTask, updateTask}) => {

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
                        tasks.map((task, i) => <TasksTableRow task={task} index={i} deleteTask={deleteTask} updateTask={updateTask} />)
                    }
                </tbody>
            </table>
        </div>

    );
}

export default TasksTable;