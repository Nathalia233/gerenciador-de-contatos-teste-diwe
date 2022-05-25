//const { default: axios } = require("axios")

const { default: axios } = require("axios")

const url = "https://contacts-api.prd.parceirodaconstrucao.com.br"
const urlLogin = "https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login"
const urlAdd = "https://contacts-api.prd.parceirodaconstrucao.com.br/contacts"
const urlId = "https://contacts-api.prd.parceirodaconstrucao.com.br/contacts/:id"

const NewUsers = { 
    name: "Glauber",
    email: "glauber.castro@diwe.com.br",
    mobile: "00999999999"
}

const User ={
    email: "user@diwe.com.br",
    password: "Mob20we23##"
}

function login(){
    axios.post(urlLogin, User)
        .then(response => {
            window.localStorage.getItem('password');
            console.log(response.data)
        })
        .catch(error => console.error(error))
}

function getUsers(){
    axios.get(url)
        .then(response =>{
            window.localStorage.getItem('password');
            apiResult.textContent = JSON.stringify(response.data) 
        })
        .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${urlId}/${id}`)
        .then(response=>{
            const data = response.data
            name.textContent = data.name
            email.textContent = data.email
            mobile.textContent = data.mobile
        })
        .catch(error => console.error(error))
}

function UpdateUser(id){
    axios.put(`${url}/${id}`, UserUpdated)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

function addUsers(NewUsers){
    axios.post(urlAdd, NewUsers)
        .then(response =>{
            console.log(response)
        })
        .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${urlId}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

login(User)
getUsers()
getUser()
addUsers(NewUsers)
UpdateUser()
deleteUser()