import styles from './Footer.module.css'

import * as BsIcons from 'react-icons/bs'

const Footer = () => {
  return (
    <div className={styles.footer_container} >
        <p>Rádio Alternativa &copy; 2023</p>
        <p>developed by: Rafael Fagundes</p>
        <div className={styles.social_icons} >
        <a href='https://www.instagram.com/rafael.fagundes.9028/'><BsIcons.BsInstagram/></a>
        <a href='https://www.facebook.com/rafael.fagundes.9028'><BsIcons.BsFacebook/></a>
        <a href='https://www.linkedin.com/in/rafael-fagundes-74aa49139/'><BsIcons.BsLinkedin/></a>
        </div>
    </div>
  )
}

export default Footer