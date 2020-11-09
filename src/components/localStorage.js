

const ls = window.localStorage


export const setEmployees = (data) => {
    ls.setItem("Employees", JSON.stringify(data))
}

export const getEmployees = () => {
    if (ls.getItem("Employees")) {
        console.log("testing", ls.getItem("Employees"))
        return JSON.parse(ls.getItem("Employees"))
    }
    else {
        return []
    }
}