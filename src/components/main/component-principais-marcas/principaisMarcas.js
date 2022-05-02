import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './styles/stylePrincipaisMarcas.scss'

import Img1 from './imgs/image17.png'
import Img2 from './imgs/image18.png'
import Img3 from './imgs/image19.png'

function PrincipaisMarcas(){
    return(
        <section>

        <article className='principais-marcas'>

            <div className='principais-marcas-titulo'>
                <h1>Principais marcas</h1>
                <span>Ver todos</span>
            </div>

            <OwlCarousel className="owl-theme" loop margin={0} items="6" dots={false} nav>
                        <div className="item">
                            <div className="item-img-1">
                                <img src={Img1} alt="marcas-principais"/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-img-2">
                                <img src={Img2} alt="marcas-principais"/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-img-3">
                                <img src={Img3} alt="marcas-principais"/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-img-1">
                                <img src={Img1} alt="marcas-principais"/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-img-2">
                                <img src={Img2} alt="marcas-principais"/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-img-3">
                                <img src={Img3} alt="marcas-principais"/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-img-1">
                                <img src={Img1} alt="marcas-principais"/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-img-2">
                                <img src={Img2} alt="marcas-principais"/>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item-img-3">
                                <img src={Img3} alt="marcas-principais"/>
                            </div>
                        </div>

                    </OwlCarousel>

        </article>

    </section>
    )
}

export default  PrincipaisMarcas;