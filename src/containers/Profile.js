import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Profile = ()=>{
    const [info, setinfo]=useState({
        email: "",
        password: "",
        name: ""
    })
    const navigate = useNavigate()
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
    const change = async (e) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }
        const {data} = await axios.post("http://127.0.0.1:8000/api/accounts/user/update/", e, config)
    }

    const changeValue =(e)=>{
        e.preventDefault()
        change(info)
        navigate("/home")
    }
    return <div className="auth_main_main">
        <form className='auth__form' onSubmit={e => changeValue(e)}>
                <div className='auth__form__group'>
                    <input
                        className='auth__form__input auth_main_main__input'
                        type='text'
                        placeholder='name'
                        name='name'
                        value={info?.name}
                        onChange={onChange}
                    />
                </div>
                <div className='auth__form__group'>
                    <input 
                        className='auth__form__input  auth_main_main__input'
                        type='email'
                        placeholder='Email'
                        name='email' 
                        value={info?.email}
                        onChange={onChange}
                    />
                </div>
                <div className='auth__form__group'>
                    <input 
                        className='auth__form__input  auth_main_main__input'
                        type='text'
                        placeholder='Password'
                        name='password' 
                        value={info?.password}
                        onChange={onChange}
                    />
                </div>
                <button className='auth__form__button auth_main_btn' >Edit</button>
            </form>
    </div>
}
export default Profile