import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './styles/styleCategorias.css';

import Img1 from './imgs/image40.png'
import Img2 from './imgs/image41.png'
import Img3 from './imgs/image42.png'
import Img4 from './imgs/image43.png'

function ComponentCategorias() {

    return (
        <section>
            <article className='article-categorias'>
                <h1>Categorias</h1>

                <OwlCarousel className="owl-theme" dots={false} loop margin={-10} items="4" autoplay={true} nav>
                    <div class="item-theme-1">
                        <img src={Img1} alt="categorias"/>
                        <h2>Brinquedos</h2>
                    </div>

                    <div class="item-theme-1">
                        <img src={Img2} alt="categorias"/>
                        <h2>Petiscos</h2>
                    </div>

                    <div class="item-theme-1">
                        <img src={Img3} alt="categorias"/>
                        <h2>Guias</h2>
                    </div>

                    <div class="item-theme-1">
                        <img src={Img4} alt="categorias"/>
                        <h2>Higiene</h2>
                    </div>

                    <div class="item-theme-1">
                        <img src={Img1} alt="categorias"/>
                        <h2>Brinquedos</h2>
                    </div>

                    <div class="item-theme-1">
                        <img src={Img2} alt="categorias"/>
                        <h2>Petiscos</h2>
                    </div>

                    <div class="item-theme-1">
                        <img src={Img3} alt="categorias"/>
                        <h2>Guias</h2>
                    </div>

                    <div class="item-theme-1">
                        <img src={Img4} alt="categorias"/>
                        <h2>Higiene</h2>
                    </div>

                </OwlCarousel>

            </article>

        </section>
    )
}
export default ComponentCategorias;