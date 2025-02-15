import Image from 'next/image';
import InviteButton from '../InviteButton/InviteButton';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col lg:flex-row justify-center items-center">
        <div className='flex-auto'>
          <Image className='footer-logo' src='/logo.svg' width={139} height={20} alt='Logo' />
          <div className='footer-socials'>
            <Image src="/icon-facebook.svg" width={20} height={20} alt="facebook" />
            <Image src="/icon-youtube.svg" width={20} height={20} alt="youtube" />
            <Image src="/icon-twitter.svg" width={20} height={20} alt="twitter" />
            <Image src="/icon-pinterest.svg" width={20} height={20} alt="pinterest" />
            <Image src="/icon-instagram.svg" width={20} height={20} alt="instagram" />
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