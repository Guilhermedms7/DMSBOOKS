import React from 'react';
import AppStore from './images/app-store.png';
import PlayStore from './images/play-store.png';

function Footer() {
  return (
    <footer style={styles.grayBackground}>
      <div style={styles.pageInnerContent}>
        <div style={styles.downloadOptions}>
          <p style={styles.boldText}>Baixe nosso aplicativo</p>
          <p style={styles.normalText}>Baixe nosso aplicativo para Android e IOS</p>
          <div style={styles.downloadImages}>
            <img src={AppStore} alt="App Store" style={styles.storeImage} />
            <img src={PlayStore} alt="Play Store" style={styles.storeImage} />
          </div>
        </div>

        <div style={styles.logoFooter}>
          <h1 style={styles.logo}>DMS<span style={styles.logoSpan}>BOOKS</span></h1>
          <p style={styles.footerText}>Livros de todos os tipos, serviço excepcional bem-vindo à nossa loja.</p>
        </div>

        <div style={styles.linksFooter}>
          <h3>Criadores e contato</h3>
          <ul style={styles.linksList}>
            <li>Guilherme Damasceno</li>
            <li>guilhermedamascenooliveira@gmail.com</li>
            <li>Lucas Domingues</li>
            <li>lucas.domingues568@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr style={styles.hr} />

      <div style={styles.copyright}>
        <p>Copyright 2024 - DMSBOOKS - todos direitos reservados</p>
      </div>
    </footer>
  );
}

const styles = {
  grayBackground: {
    backgroundColor: '#2c2c2c',
    color: '#8f8f8f',
    padding: '3rem 0',
    marginTop: '30px', // Distância do conteúdo acima do footer
  },
  
  pageInnerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },
  downloadOptions: {
    flex: '1 1 250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 0.5rem',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  normalText: {
    color: '#fff',
  },
  downloadImages: {
    display: 'flex',
    marginTop: '0.5rem',
  },
  storeImage: {
    width: '150px',
    marginRight: '5px',
  },
  logoFooter: {
    flex: '2 1 280px',
    margin: '0 0.5rem',
  },
  logo: {
    color: '#ff5800',
    fontSize: '2rem', // Aumenta o tamanho do texto do logo
  },
  logoSpan: {
    color: '#fff',
  },
  footerText: {
    color: '#fff',
    marginTop: '0.5rem',
    fontSize: '0.9rem',
  },
  linksFooter: {
    flex: '1 5 310px',
    margin: '0 0.5rem',
  },
  linksList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    fontSize: '0.9rem',
  },
  hr: {
    border: '0',
    borderTop: '1px solid #8f8f8f',
    margin: '1rem 0',
  },
  copyright: {
    color: '#fff',
    padding: '1rem 0',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  
  '@media (max-width: 768px)': {
    logo: {
      fontSize: '1.5rem',
    },
    storeImage: {
      width: '120px',
    },
  },
  '@media (max-width: 480px)': {
    logo: {
      fontSize: '1.2rem',
    },
    storeImage: {
      width: '100px',
    },
    downloadOptions: {
      marginBottom: '2rem',
    },
  },
};

export default Footer;
