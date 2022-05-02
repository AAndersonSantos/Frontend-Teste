import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';
import * as BsIcons from 'react-icons/bs';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './styles/styleCardProdutos.scss';

Modal.setAppElement('#root');

function CardProdutos() {

    const options = {
        responsive: {
            0: {
                items: 1,
            },

            400: {
                items: 1,
            },

            800: {
                items: 2,
            },

            1000: {
                items: 4,
            },

            1400: {
                items: 4,
            },
        }
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [posts, setPosts] = useState([]);

    const [state, setState] = useState({
        productName: "",
        price: "",
        descriptionShort: "",
        photo: ""
    });

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(id) {

        setIsOpen(true);

        axios.get(`https://my-json-server.typicode.com/AAndersonSantos/mockjson/products/${id}`)
            .then((res) => {

                setState({
                    productName: res.data.productName,
                    price: new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(res.data.price / 100),
                    descriptionShort: res.data.descriptionShort,
                    photo: res.data.photo
                })

            }).catch((err) => {
                console.log(err.response)
        })

    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/AAndersonSantos/mockjson/products").then((res) => {
            setPosts(res.data)
            console.log(res);
        }).catch((err) => {
            console.log(err.response)
        })

    }, [])

    return (

        <section>

            <div className='card-produtos'>
                {posts.length && (
                    <OwlCarousel className="owl-theme" loop margin={-15} items="7" nav {...options}>
                        {posts.map((post, key) =>
                            <div className="item" onClick={() => openModal(post.id)} key={key}>
                                <div className='icon'><BsIcons.BsHeart /></div>
                                <div className="desconto"><p>40% off</p></div>
                                <img src={post.photo} alt="img-produto"></img>
                                <div className="nome-produto"><h2>{post.productName}</h2></div>
                                <p className="preco-anterior">De R$ 96,69</p>
                                <p className="preco-atual">Por R${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(post.price / 100)}</p>
                                <div className="assinantes">
                                    <p>R$ 85,69</p>
                                    <span>Para assinantes</span>
                                </div>
                                <button>Adicionar</button>
                            </div>
                        )}
                    </OwlCarousel>
                )}
                <span className="ver-todos">Ver todos</span>
            </div>

            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                overlayClassName="Overlay">

                <button onClick={closeModal}>X</button>
                <img src={state.photo} alt="img-produto"></img>  
                <div className="modal-descricao">
                    <h1>{state.productName}</h1>
                    <p className="modal-preco">R$ {state.price}</p>
                    <p className="modal-descricao-produto">{state.descriptionShort}</p>
                    <p className="modal-detahes">Veja mais detalhes do produto</p>
                </div>

            </Modal>
        </section>
    );
}

export default CardProdutos; 