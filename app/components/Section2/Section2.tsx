import './Section2.css';

export default function Section2() {
  return (
    <div>
      <section className="sec2 flex flex-col justify-center items-center">
        <div className="container">
          <h1>Why choose Easybank?</h1>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <div className="container sec2-items flex flex-col lg:flex-row items-center justify-center">
          <div className="flex-1">
            <img src="/icon-online.svg" alt="icon-online" />
            <h2 className='mt-5 mb-4'>Online Banking</h2>
            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          <div className="flex-1">
            <img src="/icon-budgeting.svg" alt="icon-budgeting" />
            <h2 className='mt-5 mb-4'>Simple Budgeting</h2>
            <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
          </div>
          <div className="flex-1">
            <img src="/icon-onboarding.svg" alt="icon-onboarding" />
            <h2 className='mt-5 mb-4'>Fast Onboarding</h2>
            <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </div>
          <div className="flex-1">
            <img src="/icon-api.svg" alt="icon-api" />
            <h2 className='mt-5 mb-4'>Open API</h2>
            <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
          </div>
        </div>
      </section>
    </div>
  )
}