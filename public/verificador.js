import axios from "axios";

await (async () =>{
    let token = localStorage.getItem('token') 
    axios.post('/auth/', null,{'x-access-token': token})
        .then(response => {

        }).catch(error => {
            localStorage.removeItem('token')
            window.location.href = "https://google.com/"
          });
        
})