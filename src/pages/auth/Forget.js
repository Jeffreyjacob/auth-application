import React, { useState } from 'react'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'

const Forgot = () => {
    const [email, setEmail] = useState("")

    const handleInputChange = () => { };
    const loginUser = () => { }
    return (
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>

                    <div className='--flex-center'>
                        <AiOutlineMail size={35} color='#999' />
                    </div>
                    <h2>Forgot Password</h2>

                    <form onSubmit={loginUser}>
                        <input type='email' placeholder='Email'
                            required name='email' value={email} onChange={handleInputChange} />

                        <button className='--btn --btn-primary --btn-block' type='submit'>
                            Get Reset Email
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

export default Forgot