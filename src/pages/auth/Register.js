
import React, { useEffect, useState } from 'react'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'
import { TiUserAddOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import { FaTimes } from 'react-icons/fa';
import { BsCheck2All } from "react-icons/bs"


const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const Register = () => {

    const [formData, setFormData] = useState(initialState)
    const [UpperCase, setUpperCase] = useState(false)
    const [Num, setNum] = useState(false)
    const [SChar, setSChar] = useState(false)
    const [PassLength, setPassLength] = useState(false)
    const XIcon = <FaTimes color='red' size={20} />
    const CheckIcon = <BsCheck2All color='green' size={20} />

    const switchIcon = (condition) => {
        if (condition) {
            return CheckIcon
        }
        return XIcon;
    }
    const { name, email, password, confirmPassword } = formData

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    };

    useEffect(() => {
        // check lower and uppercase
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
          setUpperCase(true)
        } else {
           setUpperCase(false)
        }
        //num
        if (password.match(/([0-9])/)) {
            setNum(true)
          } else {
             setNum(false)
          }
          //check password special character
        if(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
          setSChar(true)
        }else{
          setSChar(false)
        }
        //check password length
        if(password.length > 5){
           setPassLength(true)
        }else{
           setPassLength(false)
        }
    }, [password])

    const loginUser = () => { }
    return (
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>

                    <div className='--flex-center'>
                        <TiUserAddOutline size={35} />
                    </div>
                    <h2>Register</h2>
                    <form onSubmit={loginUser}>

                        <input type='text' placeholder='name'
                            required name='name' value={name} onChange={handleInputChange} />

                        <input type='email' placeholder='Email'
                            required name='email' value={email} onChange={handleInputChange} />

                        <PasswordInput
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            placeholder="password"
                        />

                        <PasswordInput
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleInputChange}
                            placeholder="confirm password"
                        />

                        {/**Password strength */}
                        <Card cardClass={styles.group}>
                            <ul className='form-list'>
                                <li>
                                    <span className={styles.indicator}>
                                        {switchIcon(UpperCase)}
                                        &nbsp; Lowercase & Uppercase
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.indicator}>
                                        {switchIcon(Num)}
                                        &nbsp; Number(0-9)
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.indicator}>
                                        {switchIcon(SChar)}
                                        &nbsp; Special Character(!@#$%^&*)
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.indicator}>
                                        {switchIcon(PassLength)}
                                        &nbsp; At least 6 characters
                                    </span>
                                </li>
                            </ul>
                        </Card>

                        <button className='--btn --btn-primary --btn-block' type='submit'>
                            Register
                        </button>
                    </form>

                    <span className={styles.register}>
                        <Link to='/'>Home</Link>
                        <p> &nbsp; Already have an account? &nbsp;</p>
                        <Link to='/login'>Login</Link>
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default Register