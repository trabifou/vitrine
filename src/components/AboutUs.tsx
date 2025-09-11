import React from 'react';
import './AboutUs.css';

interface Article {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  icon: string;
}

const AboutUs: React.FC = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "Notre Histoire",
      subtitle: "Plus de 10 ans d'expérience",
      content: "Depuis notre création, nous nous sommes engagés à fournir des solutions innovantes et de qualité supérieure. Notre parcours a commencé avec une vision simple : transformer les idées créatives en réalités tangibles qui dépassent les attentes de nos clients.",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Notre Mission",
      subtitle: "Excellence et innovation",
      content: "Nous nous efforçons de repousser les limites de la créativité et de la technologie pour offrir des expériences exceptionnelles. Chaque projet est une opportunité de créer quelque chose d'unique qui reflète la vision et les valeurs de nos clients.",
      icon: "🚀"
    },
    {
      id: 3,
      title: "Notre Équipe",
      subtitle: "Des experts passionnés",
      content: "Notre équipe multidisciplinaire réunit des talents créatifs, techniques et stratégiques. Chaque membre apporte son expertise unique pour garantir que vos projets bénéficient des meilleures compétences et de l'attention qu'ils méritent.",
      icon: "👥"
    },
    {
      id: 4,
      title: "Notre Vision",
      subtitle: "L'avenir numérique",
      content: "Nous envisageons un avenir où la technologie et la créativité se combinent harmonieusement pour créer des expériences mémorables. Notre objectif est de rester à la pointe de l'innovation tout en conservant une approche humaine et personnalisée.",
      icon: "🔮"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">À Propos de Nous</h2>
          <p className="section-subtitle">
            Découvrez qui nous sommes et ce qui nous anime
          </p>
        </div>
        
        <div className="articles-grid">
          {articles.map((article, index) => (
            <article key={article.id} className={`article-card article-${index + 1}`}>
              <div className="article-icon">
                <span>{article.icon}</span>
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <h4 className="article-subtitle">{article.subtitle}</h4>
                <p className="article-text">{article.content}</p>
              </div>
              <div className="article-number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </article>
          ))}
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Projets réalisés</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Clients satisfaits</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support disponible</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Années d'expérience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;