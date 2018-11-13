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