import axios from "axios"

export const login = (credentials) => {
    credentials = JSON.stringify(credentials)

    const axiosConfig = {
      headers: {
      'content-Type': 'application/json',
      "Accept": "/",
      "Cache-Control": "no-cache",
      },
      credentials: "same-origin",
      data: credentials
      };
      axios.defaults.withCredentials = true;
      axios.get('/url',
      axiosConfig)
      .then((res) => {
      // Some result here
      })
      .catch((err) => {
      console.log(':(');
      });

    // var config = {
    //     method: 'post',
    //     url: 'http://black-bear-back-end.herokuapp.com/api/login',
    //     headers: {
    //       "withCredentials": "true",
    //       'Content-Type': 'application/json'
    //     },
    //     data : credentials
    //   };
      
    //   axios(config)
    //   .then(function (response) {
    //     console.log(response);
    //     return true
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     return false
    //   });
}
