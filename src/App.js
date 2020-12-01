import './App.css';
import axios from "axios"
import Login from "./components/Login"
import Manager from "./components/Manager"
import EmployeePage from "./components/EmployeePage"
import CreateEmployee from "./components/CreateEmployee"
import CurrentEmployees from "./components/CurrentEmployees"
import ModifyTasks from "./components/ModifyTasks"
import { useState } from "react"
import AddTasks from "./components/AddTask"



function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [page, setPage] = useState("manager")

  const [employees, setEmployees] = useState([])
  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState({})

  const getEmployees = () => {

    let config = {
      method: 'get',
      url: 'https://black-bear-back-end.herokuapp.com/api/users',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': document.cookie
      },
    };
    axios(config)
    .then(function (response) {
      console.log(response.data);
      setEmployees(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  const logout = () => {
    setLoggedIn(false);
  }

  const navigation = (page) => {
    setPage(page)
  }

  const getTasks = () => {
    let config
    if(user.position === "manager") {
      config = {
        method: 'get',
        url: 'https://black-bear-back-end.herokuapp.com/api/tasks',
        headers: {
          'Content-Type': 'application/json',
        },
      };
    } else {
      config = {
        method: 'get',
        url: `https://black-bear-back-end.herokuapp.com/api/tasks/user/${user.id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }
    axios(config)
    .then(function (response) {
      console.log(response.data);
      setTasks(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const markComplete = (id) => {
    let newTasks = [...tasks]
    for(const task of newTasks) {
      if(task.id === id) {
        task.completed = 1
        setTasks(newTasks)
        return
      }
    }
  }


  return (
    <div className="App">

      { !loggedIn ? <Login setUser={setUser} setLoggedIn={setLoggedIn} navigation={navigation} /> : null}
      
      
      { user.position === "manager" && page === "manager" ? <Manager logout={logout} navigation={navigation} /> : null}
      { user.position === "manager" && page === "create employee" ? <CreateEmployee logout={logout} navigation={navigation} employees={employees} setEmployees={setEmployees} /> : null}
      { user.position === "manager" && page === "current employees" ? <CurrentEmployees logout={logout} navigation={navigation} employees={employees} getEmployees={getEmployees} /> : null}
      { user.position === "manager" && page === "modify tasks" ? <ModifyTasks deleteTask={deleteTask} logout={logout} navigation={navigation} tasks={tasks} getTasks={getTasks} /> : null}
      { user.position === "manager" && page === "add task" ? <AddTasks logout={logout} navigation={navigation} /> : null}

      { user.position === "employee" ? <EmployeePage tasks={tasks} getTasks={getTasks} logout={logout} markComplete={markComplete} /> : null}

      { }

    </div>
  );
}

export default App;
