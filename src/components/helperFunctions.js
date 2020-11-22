import axios from "axios"

export const login = (credentials) => {
    credentials = JSON.stringify(credentials)

    var config = {
        method: 'post',
        url: 'http://black-bear-back-end.herokuapp.com/api/login',
        headers: {
          "withCredentials": "true",
          'Content-Type': 'application/json'
        },
        data : credentials
      };
      
      axios(config)
      .then(function (response) {
        console.log(response);
        return true
      })
      .catch(function (error) {
        console.log(error);
        return false
      });
}
