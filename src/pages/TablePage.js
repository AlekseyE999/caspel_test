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
        sessionStorage.setItem("tasksSession", JSON.stringify(tasksInfo))

        let info = JSON.parse(sessionStorage.getItem("tasksSession")); 

        setTasks(info.map((task, index)=> 
        {
            return {...task, id:index+1}
    
        }))
    }
    
    const deleteTask = (index) => {

        let tasksInfo = tasksSession;
        tasksInfo.splice(index-1,1)
        sessionStorage.setItem("tasksSession", JSON.stringify(tasksInfo))
        setTasksSession(JSON.parse(sessionStorage.getItem("tasksSession")))

    }

    const updateTask = (update, index) => {

        if(!update.name || !update.date || !update.someNumber)
        {
            return false
        }

        let tasksInfo = tasksSession;
        tasksInfo[index-1].name=update.name
        tasksInfo[index-1].date=update.date       
        tasksInfo[index-1].someNumber=update.someNumber
        sessionStorage.setItem("tasksSession", JSON.stringify(tasksInfo))
        setTasksSession(JSON.parse(sessionStorage.getItem("tasksSession")))

        return true
    }

    const passFilter = (task) =>
        (!filter.name || (task.name.includes(filter.name))) &&
        (!filter.date || (task.date == filter.date)) &&
        (!filter.someNumber || (task.someNumber == filter.someNumber))

    const inputStyle = {
        marginLeft: '8%'
    }

    return (
        <div className="UserTable">
            <div className="container">
                <div className="d-flex">
                    <AddTaskAction  addTask={addTask}/>
                     <div style={inputStyle}> <input onChange={e => {setFilter({...filter, name: e.target.value}); console.log(filter)}}  placeholder="Поиск по имени" className="border border-1 m-1"/></div>
                     <div  style={inputStyle}>Поиск по дате <input  onChange={e => setFilter({...filter, date: e.target.value})} type="date" className="border border-1 m-1"/></div>
                     <div style={inputStyle}> <input onChange={e => setFilter({...filter, someNumber: e.target.value})}placeholder="Поиск по числу" type="number" className="border border-1 m-1"/></div>
                </div>
                <TasksTable tasks={tasks.filter((task) =>  passFilter(task))} deleteTask={deleteTask} updateTask={updateTask} filter={filter}/>
                
            </div>
        </div>
    );
}

export default TablePage;