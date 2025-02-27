import React, { useState } from 'react'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'
import { GrInsecure } from 'react-icons/gr'

const LoginWithCode = () => {
    const [loginCode, setLoginCode] = useState("")
    const loginUser = () => { }
    return (
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>

                    <div className='--flex-center'>
                        <GrInsecure size={35} color='#999' />
                    </div>
                    <h2>Enter Access Code</h2>

                    <form onSubmit={loginUser}>
                        <input
                            type='text'
                            placeholder='Access Code'
                            required name='accessCode'
                            value={loginCode}
                            onChange={(e)=> setLoginCode(e.target.value)} />

                        <button className='--btn --btn-primary --btn-block' type='submit'>
                            Proceed To Login
                        </button>
                         <span className='--flex-center'>
                            Check your email for login access code 
                         </span>
                        <div className={styles.links}>
                            <p>
                                <Link to='/'>- Home</Link>
                            </p>
                            <p className='v-link --color-primary'>
                               <b>Resend Code</b>
                            </p>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default LoginWithCode