import React, { useState } from 'react'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'
import { MdPassword } from 'react-icons/md'
import PasswordInput from '../../components/passwordInput/PasswordInput'


const initialState = {
    password: "",
    confirmPassword: ""
}
const Reset = () => {
    const [formData, setFormData] = useState(initialState)
    const {password,confirmPassword} = formData

    const handleInputChange = () => { };
    const loginUser = () => { }
    return (
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>

                    <div className='--flex-center'>
                        <MdPassword size={35} color='#999' />
                    </div>
                    <h2>Reset Password</h2>

                    <form onSubmit={loginUser}>
                       
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

                        <button className='--btn --btn-primary --btn-block' type='submit'>
                           Reset Password
                        </button>

                        <div className={styles.links}>
                            <p>
                                <Link to='/'>- Home</Link>
                            </p>
                            <p>
                                <Link to='/login'>- Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default Reset