import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './styles/style.css';

import Img1 from './imgs/image24.png'
import Img2 from './imgs/image25.png'
import Img3 from './imgs/image26.png'

const options = {
    responsive: {
        0: {
            items: 2,
        },
        590: {
            items: 3,
        },
        700: {
            items: 4,
        },
        1000: {
            items: 5,
        },
    }
}

function ComponentInstagram(){
    return (
        <section>
            <article className='article-instagram'>
                <header>
                    <h1>Instagram</h1>
                    <a>+Seguir</a>
                </header>

                <OwlCarousel className="owl-theme" dots={false} loop margin={-140} items="5" autoplay={true} {...options}>
                    
                    <div class="item">
                        <img src={Img1} alt="img"/>
                    </div>

                    <div class="item">
                        <img src={Img2} alt="img"/>                      
                    </div>

                    <div class="item">
                        <img src={Img3} alt="img"/>
                    </div>

                    <div class="item">
                        <img src={Img1} alt="img"/>
                    </div>

                    <div class="item">
                        <img src={Img2} alt="img"/>                      
                    </div>

                    <div class="item">
                        <img src={Img3} alt="img"/>
                    </div>

                </OwlCarousel>

            </article>

        </section>
    );
}

export default ComponentInstagram;