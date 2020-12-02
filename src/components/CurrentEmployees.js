
import { useEffect, useState } from "react"
import Employee from "./Employee"
import axios from "axios"

function CurrentEmployees(props) {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
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
    },[])


    return (
        <div className="Parent backgroundimage5 flexcolumn ">
            <div className="whitebackground">
                <h1>EMPLOYEE LIST</h1>
                <div>
                    <div className="flexrow">
                        <p className="width100 border">ID:</p>
                        <p className="width100 border">USERNAME:</p>
                        <p className="width100 border">LAST NAME:</p>
                        <p className="width100 border">FIRST NAME:</p>
                        <p className="width100 border">POSITION:</p>
                    </div>
                {employees.map(employee => {
                    return <Employee key={employee.id} person={employee} />
                })}
                </div>
                <button onClick={() => props.navigation("manager")} className="logoutbutton1">RETURN</button>
                
                <button onClick={() => props.logout()} className="button2 logoutbuttoncorner">LOGOUT</button>
            </div>
        </div>

    );
}

export default CurrentEmployees;