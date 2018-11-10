const axios = require('axios')
const qs = require('qs')

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => 
    isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user => 
    window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
    
export const handleLogin = ({ username, password }) => {
    return axios.post('http://tmp.hjts.nl/gatsby/login.php', qs.stringify({
        username: username,
        password: password
    }), { headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }}).then(function(response) {
        setUser(response.data);
    }).catch(function(error) {
        console.error(error);
    })
}

export const isLoggedIn = () => {
    const user = getUser()
    
    return !!user.username
}

export const logout = callback => {
    setUser({})
    callback()
}

/*
CFPAT-c194da9a04a96c1ebdaf0fb0b0419c82507fe53b79efadf2a34cfa66fa1623fe

xkbbyf0hrrr0
content delivery api ce9dab6e5f51dcdd20a2545e7d7ebee2d6869f1962cc35c20e2f4f7b2954cf47
content preview api 5b9723fbb740248c9a1f56403726f114075308f6115f8dea596c216c38b4f100
*/