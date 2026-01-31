import React from 'react'
import AppContext from './AppContext'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const AppState = (props) => {

    const url = import.meta.env.VITE_API_URL;
    const[Users,setUsers] = useState([])
    const data = 10;
    useEffect(()=>{
        const fetchUser = async() =>{
            const api = await axios.get(`${url}/alluser`,{
                headers:{
                    "Content-Type":"Application/json"
                },
                withCredentials: true
            })
            console.log(api.data);
            setUsers(api.data.alluser);
        }
        fetchUser();
    },[])

    //register User
    const register = async(name,email,password) =>{
            const api = await axios.post(`${url}/register`,
                {name,email,password},{
                headers:{
                    "Content-Type":"Application/json"
                },
                withCredentials: true
            })
          alert(api.data.message);
          return api.data;
        }
         const login = async(email,password) =>{
            const api = await axios.post(`${url}/login`,
                {email,password},{
                headers:{
                    "Content-Type":"Application/json"
                },
                withCredentials: true
            })
          alert(api.data.message);
          return api.data;
        }


  return (
   <AppContext.Provider value={{Users,register,login}}>
    {
        props.children
    }
   </AppContext.Provider>
  )
}

export default AppState