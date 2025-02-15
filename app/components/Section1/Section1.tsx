import Image from "next/image";
import InviteButton from "../InviteButton/InviteButton";
import './Section1.css';

export default function Section1() {
  return (
    <div style={{ background: 'hsl(0, 0%, 100%)' }}>
      <section className="sec1 flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1 order-2 lg:order-1">
          <div className="sec1-content">
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <InviteButton />
          </div>
        </div>
        <div className="flex-1 order-1 lg:order-2 bg-desktop">
          <div className="sec1-content2"></div>
        </div>
      </section>
    </div>
  )
}