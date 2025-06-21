import data from '../../data/Article.json';
import './Article.css';

function Articles() {
  return (
    <section className="articles">
      <h2 className="glow-text" >Latest Nebulix Articles</h2>
      <div className="article-list">
        {data.map((article, index) => (
          <div key={index} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
