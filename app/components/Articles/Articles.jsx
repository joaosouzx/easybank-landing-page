import './Articles.css';

const articles = [
  { title: 'Receive money in any currency with no fees', description: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...', image: 'image-currency.jpg', author: 'Claire Robinson' },
  { title: 'Treat yourself without worrying about money', description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...', image: 'image-restaurant.jpg', author: 'Wilson Hutton' },
  { title: 'Take your Easybank card wherever you go', description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you...', image: 'image-plane.jpg', author: 'Wilson Hutton' },
  { title: 'Our invite-only Beta accounts are now live!', description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...', image: 'image-confetti.jpg', author: 'Claire Robinson' }
]

export default function Articles() {
  return (
    <div className='container articles flex flex-col justify-center'>
      <h1>Latest Articles</h1>
      <div className="flex flex-col lg:flex-row gap-x-5 gap-y-7">
        {articles.map((article, index) => (
          <div key={index} className="article flex-1">
            <img src={`/${article.image}`} alt={article.title} />
            <div>
              <p>By {article.author}</p>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}