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

  // var data = JSON.stringify({"username":"thedragonslayer","password":"password"})

  const getEmployees = () => {

    // const axiosConfig = {
    //   headers: {
    //   'content-Type': 'application/json',
    //   "Accept": "/",
    //   "Cache-Control": "no-cache",
    //   "Cookie": document.cookie
    //   },
    //   credentials: "same-origin"
    //   };
    //   axios.defaults.withCredentials = true;
    //   axios.get('https://black-bear-back-end.herokuapp.com/api/users',
    //   axiosConfig)
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //   console.log(':(');
    //   });
    var config = {
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

  const navigation = (page) => {
    setPage(page)
  }


  return (
    <div className="App">

      { !loggedIn ? <Login setLoggedIn={setLoggedIn} navigation={navigation} /> : null}
      
      
      { loggedIn && page === "manager" ? <Manager navigation={navigation} /> : null}
      { loggedIn && page === "employee page" ? <EmployeePage navigation={navigation} /> : null}
      { loggedIn && page === "create employee" ? <CreateEmployee navigation={navigation} employees={employees} setEmployees={setEmployees} /> : null}
      { loggedIn && page === "current employees" ? <CurrentEmployees navigation={navigation} employees={employees} getEmployees={getEmployees} /> : null}
      { loggedIn && page === "modify tasks" ? <ModifyTasks navigation={navigation} /> : null}
      { loggedIn && page === "add task" ? <AddTasks navigation={navigation} /> : null}


      { }

    </div>
  );
}

export default App;
