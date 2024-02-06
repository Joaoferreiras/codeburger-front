import axios from 'axios'

const apiCodeBurger = axios.create({
    baseURL: 'https://devclubburger-production.up.railway.app/'
    //http://localhost:3001
})

apiCodeBurger.interceptors.request.use(async config =>{
    const userData = await localStorage.getItem('codeburger:userInfo')
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`
    return config 
})

export default apiCodeBurger