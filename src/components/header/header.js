import React, { useState, useEffect } from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';
import * as GoIcons from 'react-icons/go';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import logo from "./imgs/image 4.png"
import Swiper from "../swiper/swiper"
import './styles/styleHeader.scss'
//import '.././variaveis-style-scss/variaveis.scss'

function Header() {

    const [nome, setNome] = useState('');
  
    const handleChange = e => setNome(e.target.value);

    useEffect(() => {
        document.body.style.backgroundColor = "#ffffff"
    })

  return (
    <header>

            <div className='header-informacoes'>
                <div className='informacoes'>
                    <div className='informacoes-icon'><AiIcons.AiOutlineSafetyCertificate /></div><p>Compra <span>100% segura</span></p>
                </div>
                <div className='informacoes'>
                    <div className='informacoes-icon'><BsIcons.BsTruck /></div><p><span>Frete grátis</span> acima de R$ 200</p>
                </div>
                <div className='informacoes'>
                    <div className='informacoes-icon'><ImIcons.ImCreditCard /></div><p><span>Parcele</span> suas compras</p>
                </div>
            </div>

            <nav>  
                <div className='nav-logo'> <img src={logo} alt="logo"></img></div>
                <input placeholder='O que você está buscando?'></input>
                <span className='input-icon'><BsIcons.BsSearch /></span>
                <div className='nav-opcoes'>
                    <div className='nav-icon'><GoIcons.GoPackage /></div>
                    <div className='nav-icon'><BsIcons.BsHeart /></div>
                    <div className='nav-icon'><FaIcons.FaRegUserCircle /></div>
                    <div className='nav-icon'><BsIcons.BsCart3 /></div>
                </div>
            </nav>

            <div className='nav-menu'>
                <div className='nav-menu-titulo'>
                    <label><input type="checkbox" value="1" onChange={handleChange} checked={nome === '1'}/><span>Brincar</span></label>
                </div>
                <div className='nav-menu-titulo'>
                    <label><input type="checkbox" value="2" onChange={handleChange} checked={nome === '2'}/><span>Morder</span></label>
                </div>
                <div className='nav-menu-titulo'>
                    <label><input type="checkbox" value="3" onChange={handleChange} checked={nome === '3'}/><span>Comer</span></label>
                </div>
                <div className='nav-menu-titulo'>
                    <label><input type="checkbox" value="4" onChange={handleChange} checked={nome === '4'}/><span>Passear</span></label>
                </div>
                <div className='nav-menu-titulo'>
                    <label><input type="checkbox" value="5" onChange={handleChange} checked={nome === '5'}/><span>Casa e Conforto</span></label>
                </div>
                <div className='nav-menu-titulo'>
                    <label><input type="checkbox" value="6" onChange={handleChange} checked={nome === '6'}/><span>Educação</span></label>
                </div>
                <div className='nav-menu-titulo'>
                    <label><input type="checkbox" value="7" onChange={handleChange} checked={nome === '7'}/><span>Ofertas</span></label>
                </div>
                <div className='nav-menu-titulo'>
                    <label><input type="checkbox" value="8" onChange={handleChange} checked={nome === '8'}/><span className='menu-titulo-icon'><CgIcons.CgCrown /></span><span>Coleção de outono</span></label>
                </div>
            </div>

            <Swiper />

    </header>
  );
}

export default Header;
