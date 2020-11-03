import './App.css';
import Login from "./components/Login"
import Manager from "./components/Manager"
import Employee from "./components/Employee"
import CreateEmployee from "./components/CreateEmployee"
import CurrentEmployees from "./components/CurrentEmployees"
import ModifyTasks from "./components/ModifyTasks"
import { useState } from "react"
import AddTasks from './components/AddTask';

function App() {
  const [creds, setCreds] = useState({ username: null, password: null })
  const [loggedIn, setLoggedIn] = useState(false)
  const [page, setPage] = useState(0)

  const next = () => {
    if (page !== 5) {
      setPage(page + 1)
    } else {
      setPage(0)
    }
  }

  const prev = () => {
    if (page !== 0) {
      setPage(page - 1)
    } else {
      setPage(5)
    }
  }

  return (
    <div className="App">
      { page == 0 ? <Login /> : null }
      { page == 1 ? <Manager /> : null }
      { page == 2 ? <Employee /> : null }
      { page == 3 ? <CreateEmployee /> : null }
      { page == 4 ? <CurrentEmployees /> : null }
      { page == 5 ? <ModifyTasks /> : null }

    <button onClick={() => prev()}>prev</button>
    <button onClick={() => next()}>next</button>
    

    </div>
  );
}

export default App;
