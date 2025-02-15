import Image from "next/image";
import './Header.css'
import InviteButton from "../InviteButton/InviteButton";

export default function Header() {
  return (
    <div className="header flex justify-evenly items-center">
      <div className="flex-none">
        <Image src={'/logo.svg'} width={139} height={20} alt="easybank"/>
      </div>
      <div className="flex-none">
        <ul className="flex flex-row justify-center">
          <li className="header-links">Home</li>
          <li className="header-links">About</li>
          <li className="header-links">Contact</li>
          <li className="header-links">Blog</li>
          <li className="header-links">Careers</li>
        </ul>
      </div>
      <div className="flex-none">
        <InviteButton />
      </div>
    </div>
  )
}