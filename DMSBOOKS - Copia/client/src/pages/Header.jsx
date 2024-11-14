import React from 'react';
import { Link } from 'react-router-dom'; 
import Raposa from "./images/Raposaicon.png";
import Carrinho from "./images/cart.png";
import Lupa from "./images/lupa.png";

function Header() {
  return (
    <header style={styles.navbar}>
      <div style={styles.headerInnerContent}>
        <div style={styles.logoContainer}>
          <img src={Raposa} alt="Ícone de Raposa" style={styles.logoIcon} />
          <Link to="/" style={styles.logoLink}> 
            <h1 style={styles.logo}>DMS<span style={styles.logoSpan}>BOOKS</span></h1>
          </Link>
        </div>
        <div style={styles.searchContainer}>
          <input
            type="search"
            placeholder="Digite o que você procura"
            style={styles.searchInput}
          />
          <img src={Lupa} alt="Ícone de Lupa" style={styles.searchIcon} />
        </div>
        <nav>
          <ul style={styles.navList}>
            <li><Link style={styles.botaoBranco} to="/">Home</Link></li>
            <li><Link style={styles.botaoBranco} to="/produtos">Produtos</Link></li>
            <li><Link style={styles.botaoBranco} to="/sobre">Sobre</Link></li>
            <li><Link style={styles.botaoBranco} to="/contato">Contato</Link></li>
            <li><Link style={styles.botaoBranco} to="/conta">Conta</Link></li>
          </ul>
        </nav>
        <div style={styles.navIconContainer}>
          <Link to="/carrinho">
            <img src={Carrinho} style={styles.icon} alt="Carrinho" />
          </Link>
        </div>
      </div>
    </header>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#2c2c2c',
    position: 'sticky',
    top: '0',
    boxShadow: '10px 0px 10px #2c2c2c',
    zIndex: 99,
    overflow: 'hidden',
  },
  headerInnerContent: {
    maxWidth: '1300px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoIcon: {
    width: '30px',
    marginRight: '10px',
  },
  logoLink: {
    textDecoration: 'none',
  },
  logo: {
    color: '#ff5800',
    display: 'flex',
    alignItems: 'center',
  },
  logoSpan: {
    color: '#fff',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    marginLeft: '20px',
  },
  searchInput: {
    padding: '9px',
    width: '100%',
    borderRadius: '5px',
    paddingRight: '30px',
  },
  searchIcon: {
    position: 'absolute',
    right: '10px',
    width: '20px',
    cursor: 'pointer',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    paddingLeft: '1rem',
    margin: '0',
    flexWrap: 'wrap',
  },
  botaoBranco: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '1.5rem',
  },
  navIconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '30px',
    cursor: 'pointer',
    marginLeft: '1rem',
  },
  '@media (max-width: 768px)': {
    logo: {
      fontSize: '1.5rem',
      justifyContent: 'center',
    },
    searchInput: {
      padding: '7px',
    },
    navList: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    botaoBranco: {
      margin: '0.5rem 0',
    },
  },
  '@media (max-width: 480px)': {
    logo: {
      fontSize: '1.2rem',
    },
    searchInput: {
      padding: '5px',
    },
    navList: {
      alignItems: 'center',
    },
  },
};

export default Header;
