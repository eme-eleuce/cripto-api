import React from "react";
import Foto from '../../cosas/trade.png'
import './signup.css';

const SignUp = () => {

    return (

        <div className="signup">
           <div className='container'>
                
                <div className='left'>
                    <img src={Foto} alt='' />
                </div>

                
                <div className='right'>
                    <h2>Gana ingresos pasivos en Cripto.</h2>
                    <p>Compra, haz trading y holdea más de 600 criptomonedas en Binance.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn' onClick={()=> window.open('https://www.binance.com/en', "_blank")}>Aprende más</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp;