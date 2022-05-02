import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as IoIcons from 'react-icons/io';
import './styles/styleCardOpcoes.scss';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="btn-nextArrow" onClick={onClick}><IoIcons.IoIosArrowForward /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="btn-prevArrow" onClick={onClick}><IoIcons.IoIosArrowBack /></div>
    );
}

function CardOpcoes() {

    const [nome, setNome] = useState('1');

    const handleChange = e => setNome(e.target.value);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className="section-opcoes">

            <h1>Meu cachorro...</h1>

            <Slider className="slide-opcoes" {...settings}>

                <div className="opcoes">
                    <label><input type="checkbox" value="1" onChange={handleChange} checked={nome === '1'} /><span>É Agitado</span></label>
                </div>
                <div className="opcoes">
                    <label><input type="checkbox" value="2" onChange={handleChange} checked={nome === '2'} /><span>Morde</span></label>
                </div>
                <div className="opcoes">
                    <label><input type="checkbox" value="3" onChange={handleChange} checked={nome === '3'} /><span>Late muito</span></label>
                </div>
                <div className="opcoes">
                    <label><input type="checkbox" value="4" onChange={handleChange} checked={nome === '4'} /><span>É Ansioso</span></label>
                </div>
                <div className="opcoes">
                    <label><input type="checkbox" value="5" onChange={handleChange} checked={nome === '5'} /><span>É estressado</span></label>
                </div>

            </Slider>

        </section >
    );
}

export default CardOpcoes;
