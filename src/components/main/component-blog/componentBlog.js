import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './styles/styleBlog.scss';

import Img1 from './imgs/image44.png'
import Img2 from './imgs/image9.png'
import Img3 from './imgs/Rectangle63.png'
import Img4 from './imgs/image24.png'

function ComponentBlog(){
    return(
        <section>
            <article className='article-blog'>
                <h1>Categorias</h1>

                <OwlCarousel className="owl-theme" loop margin={-10} dots={true} items="4" autoplay={true} nav>
                    <div class="item">
                        <img src={Img1} alt="img-blog"/>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae</p>
                        <button>Ler artigo</button>
                    </div>

                    <div class="item">
                        <img src={Img2} alt="img-blog"/>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae</p>
                        <button>Ler artigo</button>
                    </div>

                    <div class="item">
                        <img src={Img3} alt="img-blog"/>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae</p>
                        <button>Ler artigo</button>
                    </div>

                    <div class="item">
                        <img src={Img4} alt="img-blog"/>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae</p>
                        <button>Ler artigo</button>
                    </div>

                    <div class="item">
                        <img src={Img1} alt="img-blog"/>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae</p>
                        <button>Ler artigo</button>
                    </div>

                    <div class="item">
                        <img src={Img2} alt="img-blog"/>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae</p>
                        <button>Ler artigo</button>
                    </div>

                    <div class="item">
                        <img src={Img3} alt="img-blog"/>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae</p>
                        <button>Ler artigo</button>
                    </div>

                    <div class="item">
                        <img src={Img4} alt="img-blog"/>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae</p>
                        <button>Ler artigo</button>
                    </div>

                </OwlCarousel>

            </article>

        </section>
    )
}

export default ComponentBlog;