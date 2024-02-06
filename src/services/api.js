import axios from 'axios'

const apiCodeBurger = axios.create({
    baseURL: 'http://localhost:3001'
    //https://devclubburger-production.up.railway.app/
})

apiCodeBurger.interceptors.request.use(async config =>{
    const userData = await localStorage.getItem('codeburger:userInfo')
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`
    return config 
})

export default apiCodeBurger