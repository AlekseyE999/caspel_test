import { useEffect, useState } from "react";
import TasksTable from "../components/TasksTable";
import AddTaskAction from "../components/actions/AddTaskAction";
import SetFiltersAction from "../components/actions/SetFiltersAction";
import UpdateTasksAction from "../components/actions/UpdateTasksAction";
import { startData } from "../startData";

const TablePage = () => {

    console.log("UserTable");

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState({});
    const [tasksSession, setTasksSession] = useState(startData);



    useEffect(() => {

        
        if(!sessionStorage.length)
        {
            sessionStorage.setItem("tasksSession", JSON.stringify(startData))          
        }

        setTasksSession(JSON.parse(sessionStorage.getItem("tasksSession")))

    }, []);

    useEffect(() => {

        setTasks(tasksSession.map((task, index)=> 
        {
            return {...task, id:index+1}
        }))


    }, [tasksSession]);

    
    const addTask = (task) => {

        if(!task.name || !task.date || !task.someNumber)
        {
            return false
        }

        let tasksInfo = tasksSession
        tasksInfo.push(task)
        console.log(tasksInfo)
        sessionStorage.setItem("tasksSession", JSON.stringify(tasksInfo))

        let info = JSON.parse(sessionStorage.getItem("tasksSession"));

        

        setTasks(info.map((task, index)=> 
        {
            return {...task, id:index+1}
    
        }))
    }
    


    const deleteTask = (index) => {

        let tasksInfo = tasksSession;
        tasksInfo.splice(index,1)
        sessionStorage.setItem("tasksSession", JSON.stringify(tasksInfo))
        setTasksSession(JSON.parse(sessionStorage.getItem("tasksSession")))

    }


    

    const updateTask = (update) => {

        console.log(update);

        let tasksInfo = tasksSession;
        tasksInfo[update.id].name=update.name
        tasksInfo[update.id].date=update.date       
        tasksInfo[update.id].someNumber=update.someNumber
        sessionStorage.setItem("tasksSession", JSON.stringify(tasksInfo))
        setTasksSession(JSON.parse(sessionStorage.getItem("tasksSession")))

        return true
    }

    

    return (
        <div className="UserTable">
            <div className="container">
                <div className="d-flex">
                    <AddTaskAction  addTask={addTask}/>
                    <UpdateTasksAction updateTask={updateTask}/>
                </div>
                <TasksTable tasks={tasks} deleteTask={deleteTask} />
            </div>
        </div>
    );
}

export default TablePage;