import React from 'react'
import * as AiIcons from 'react-icons/ai';
import './styles/styleFooter.css'

function Footer(){
    return(
        <footer>
            <section className='container-sobre'>

                <h1>Nos siga nas nossas redes sociais</h1>
                <div className="redes-sociais">
                    <span><AiIcons.AiFillFacebook /></span>
                    <span><AiIcons.AiFillInstagram /></span>
                    <span><AiIcons.AiFillYoutube /></span>
                </div>

                <h2>Sobre O Cãoselheiro</h2>
                <p>
                    Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para 
                    contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios 
                    são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento
                    animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. 
                    Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus 
                    idealizadores. Fique à vontade!
                </p>

            </section>

            <section className='container-informacoes'>
                <div>
                    <h2>Assinatura</h2>
                    <h2>Parceiros</h2>
                </div>
                <div>
                    <h2>Institucional</h2>
                    <a>Quem somos</a>
                    <a>Política de privacidade</a>
                    <a>Política comercial</a>
                    <a>Política de devolução</a>
                    <a>Regras de frete</a>
                </div>
                <div>
                    <h2>Atendimento</h2>
                    <a>Fale conosco</a>
                    <a>Trabalhe conosco</a>
                </div>
            </section>

        </footer>
    )
}

export default Footer;