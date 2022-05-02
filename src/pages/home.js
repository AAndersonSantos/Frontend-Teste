import React from 'react'
import Header from '../components/header/header'
import ComponentCategorias from '../components/main/component-categorias/componentCategorias'
import CardOpcoes from '../components/main/component-vitrine-produtos/card-opcoes/cardOpcoes'
import ComponentPrincipaisMarcas from '../components/main/component-principais-marcas/principaisMarcas'
import ComponentParceirosAssinatura from '../components/main/component-parceiros-assinatura/parceirosAssinatura'
import ComponentBlog from '../components/main/component-blog/componentBlog'
import ComponentInstagram from '../components/main/component-instagram/componentInstagram'
import ComponentCadastrar from '../components/main/component-cadastrar/componentCadastrar'
import CardProdutos from '../components/main/component-vitrine-produtos/card-produtos/cardProdutos'
import Footer from '../components/footer/footer'


function Home() {
  return (
    <>
      < Header />
      < ComponentCategorias />
      < CardOpcoes />
      < CardProdutos />
      < ComponentPrincipaisMarcas />
      < ComponentParceirosAssinatura />
      < ComponentBlog />
      < ComponentInstagram />
      < ComponentCadastrar />
      < Footer />
    </>
  );
}

export default Home;
