import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './styles/styleCategorias.css';

import Img1 from './imgs/image40.png'
import Img2 from './imgs/image41.png'
import Img3 from './imgs/image42.png'
import Img4 from './imgs/image43.png'

const options = {
    responsive: {
        
        0: {
            items: 1,
            margin: 0
        },
        650: {
            items: 2,
            margin: 0
        },
        911: {
            items: 3,
            margin: -10
        },
        1300: {
            items: 4,

        }
    },
};


function ComponentCategorias() {

    return (
        <section>
            <article className='article-categorias'>
                <h1>Categorias</h1>

                <OwlCarousel className="owl-theme" dots={false} loop items="4" margin={-10} autoplay={true} nav {...options}>
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