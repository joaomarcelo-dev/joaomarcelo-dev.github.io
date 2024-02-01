import './style.scss';


import logoTwitter from '/assets/icon_twitter.svg';
import logoIntagram from '/assets/icon_instagram.svg';
import logoLinkedin from '/assets/icon_linkedin.svg'


function Footer() {
  return (
    <footer id='footer'>
      <div className='box-color box-color-left'></div>

      <div className='networking'>
          <a href="https://twitter.com/joao_r35" target="_blank">
              <img src={logoTwitter} alt="logo do twitter" />
          </a>

          <a href="https://www.instagram.com/joao_marcelo_gtr35/" target="_blank">
              <img src={logoIntagram} alt="logo do instagram" />
          </a>

          <a href="https://www.linkedin.com/in/jo%C3%A3o-marcelo-a414b6265/" target="_blank">
              <img src={logoLinkedin} alt="logo do linkedi" />
          </a>
      </div>

      <div className='box-color box-color-rigth'></div>
    </footer>

  );
}


export default Footer;