import './App.css';
import Login from "./components/Login"
import Manager from "./components/Manager"
import EmployeePage from "./components/EmployeePage"
import CreateEmployee from "./components/CreateEmployee"
import CurrentEmployees from "./components/CurrentEmployees"
import ModifyTasks from "./components/ModifyTasks"
import { useState, useEffect } from "react"
import AddTasks from "./components/AddTask"
import { getEmployees } from "./components/localStorage"


function App() {
  useEffect(() => {
    let localEmployees = getEmployees()
    setEmployees(localEmployees)
  }, [])
  const [creds, setCreds] = useState({ username: null, password: null })
  const [loggedIn, setLoggedIn] = useState(false)
  const [page, setPage] = useState("manager")

  const [employees, setEmployees] = useState()

  const navigation = (page) => {
    setPage(page)
  }


  return (
    <div className="App">
      { page == "login" ? <Login navigation={navigation} /> : null}
      { page == "manager" ? <Manager navigation={navigation} /> : null}
      { page == "employee page" ? <EmployeePage navigation={navigation} /> : null}
      { page == "create employee" ? <CreateEmployee navigation={navigation} employees={employees} setEmployees={setEmployees} /> : null}
      { page == "current employees" ? <CurrentEmployees navigation={navigation} employees={employees} /> : null}
      { page == "modify tasks" ? <ModifyTasks navigation={navigation} /> : null}
      { page == "add task" ? <AddTasks navigation={navigation} /> : null}


      { }

    </div>
  );
}

export default App;
