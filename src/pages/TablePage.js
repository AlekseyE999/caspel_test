import { useEffect, useState } from "react";
import TasksTable from "../components/TasksTable";
import AddTaskAction from "../components/actions/AddTaskAction";
import { startData } from "../startData";

const TablePage = () => {

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

    const updateTask = (update, index) => {

        console.log(update);

        if(!update.name || !update.date || !update.someNumber)
        {
            return false
        }

        let tasksInfo = tasksSession;
        tasksInfo[index].name=update.name
        tasksInfo[index].date=update.date       
        tasksInfo[index].someNumber=update.someNumber
        sessionStorage.setItem("tasksSession", JSON.stringify(tasksInfo))
        setTasksSession(JSON.parse(sessionStorage.getItem("tasksSession")))

        return true
    }

    return (
        <div className="UserTable">
            <div className="container">
                <div className="d-flex">
                    <AddTaskAction  addTask={addTask}/>
                </div>
                <TasksTable tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
            </div>
        </div>
    );
}

export default TablePage;