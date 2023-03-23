import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">© Infospectrum {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
