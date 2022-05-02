import React from 'react'
import * as AiIcons from 'react-icons/ai';
import './styles/styleCadastrar.css'

import Img from './imgs/image2.png'

function ComponentCadastrar() {
    return (
        <section className="section-cadastrar">

            <img src={Img} alt="dog"></img>

            <article>
                <h1>Se inscreva para receber novidades e promoções</h1>
                <span className='input-icon'><AiIcons.AiOutlineMail /></span>
                <input type="text" placeholder="Digite seu nome"></input>

                <span className='input-icon'><AiIcons.AiOutlineUser /></span>
                <input type="email" placeholder="Digite seu e-mail"></input>
                <button>Enviar</button>
            </article>

        </section>
    )
}

export default ComponentCadastrar;