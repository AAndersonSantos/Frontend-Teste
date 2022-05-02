import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Imagem from "./imgs/image48.png"
import "./styles/styleSwiper.css";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";

function Teste() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper">

        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%">
          <img src={Imagem} alt="Banner"></img>
        </div>

        <SwiperSlide>
          <div className="slide-title" data-swiper-parallax="-300"> As melhores guias para os melhores passeios. </div>
          <div className="slide-btn" data-swiper-parallax="-100"> <button>Confira</button> </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-title" data-swiper-parallax="-300"> As melhores guias para os melhores passeios. </div>
          <div className="slide-btn" data-swiper-parallax="-100"> <button>Confira</button> </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default Teste;