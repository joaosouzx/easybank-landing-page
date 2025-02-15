import InviteButton from '../InviteButton/InviteButton';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col lg:flex-row justify-center items-center">
        <div className='flex-auto'>
          <img className='footer-logo' src='/logo.svg' alt='Logo' />
          <div className='footer-socials'>
            <img src="/icon-facebook.svg" alt="facebook" />
            <img src="/icon-youtube.svg" alt="youtube" />
            <img src="/icon-twitter.svg" alt="twitter" />
            <img src="/icon-pinterest.svg" alt="pinterest" />
            <img src="/icon-instagram.svg" alt="instagram" />
          </div>
        </div>
        <div className="flex-1">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex-auto">
          <InviteButton />
          <p>&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}