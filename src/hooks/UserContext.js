import React, { createContext, useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'


const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    const putUserData = async userInfo => {
        setUserData(userInfo)

        await localStorage.setItem('codeburger:userInfo', JSON.stringify(userInfo))
    }
        useEffect(() => {
            const loadUserData = async () => {
                const clientInfo = await localStorage.getItem('codeburger:userInfo')

                if(clientInfo){
                    setUserData(JSON.parse(clientInfo))
                }
                

            }
            loadUserData()
        }, [])


        const logout = async ()=>{
            await localStorage.removeItem('codeburger:userInfo')

        }
    

    return (
        <UserContext.Provider value={{ putUserData, userData, logout }}>{children}</UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser most be used with UserContext')
    }

    return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}