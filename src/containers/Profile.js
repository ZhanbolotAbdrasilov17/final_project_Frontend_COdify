import axios from "axios"
import { useEffect, useState } from "react"

const Profile = ()=>{
    const [info, setinfo]=useState({
        email: "",
        password: "",
        name: ""
    })
    useEffect(()=>{
        const getinfo = async ()=>{
            const {data} = await axios.get("http://127.0.0.1:8000/api/accounts/user/info/", {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setinfo(data)
        }
        getinfo()
    }, [])
    const onChange = (e)=>{
        const value = e.target.value
        setinfo({
            ...info,
            [e.target.name]: value
        })
    }
    const change= async (e)=>{
const config = {
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
}
        const {data} = await axios.post("http://127.0.0.1:8000/api/accounts/user/update/", 
               
                e, config
            )
        }
    const changeValue =(e)=>{
        e.preventDefault()
        change(info)
    }
    return <div>
        <form className='auth__form' onSubmit={e => changeValue(e)}>
        <div className='auth__form__group'>
                    <input
                        className='auth__form__input'
                        type='text'
                        placeholder='name'
                        name='name'
                        value={info?.name}
                        onChange={onChange}
                    />
                </div>
                <div className='auth__form__group'>
                    <input 
                        className='auth__form__input'
                        type='email'
                        placeholder='Email'
                        name='email' 
                        value={info?.email}
                        onChange={onChange}
                    />
                </div>
                
                <button className='auth__form__button'>Редактировать</button>
            </form>
    </div>
}
export default Profile