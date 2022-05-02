import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './styles/styleParceirosAssinaturas.scss';

import Img1 from './imgs/image45.png'
import Img2 from './imgs/pexels-pixabay-220938-removebg-preview 1.png'

function ParceirosAssinatura(){
    return(
        <section className='parceiros-assinatura'>

            <article className='article-parceiros'>

            <OwlCarousel className="owl-theme" loop items="1" autoplay={true}>
                    <div className="item">
                        <div className='item-text'>
                            <h2>Parceiros</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <button>Confira</button>
                        </div>
                        <img src={Img1} alt="img-parceiros"/>
                    </div>

                    <div className="item">
                        <div className='item-text'>
                            <h2>Parceiros</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <button>Confira</button>
                        </div>
                        <img src={Img1} alt="img-parceiros"/>
                    </div>

                    <div className="item">
                        <div className='item-text'>
                            <h2>Parceiros</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <button>Confira</button>
                        </div>
                        <img src={Img1} alt="img-parceiros"/>
                    </div>
                </OwlCarousel>

            </article>

            <article className='article-assinatura'>

                <div className='item-text'>
                    <h2>Assinatura Cãoselheiro</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.</p>
                    <button>Saiba mais</button>
                </div>
                <div className='item-img'>
                    <img src={Img2} alt="img-assinatura"/>
                </div>
                
            </article>

        </section>
    )
}

export default ParceirosAssinatura;