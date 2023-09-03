import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/img/logo.png" alt="Basil's Boots Logo" className={styles.logo} />
      </footer>
    </>
  )
}
