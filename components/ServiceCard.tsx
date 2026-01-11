interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <div className="card-content">
        <div className="flip-card-inner">
          <div className="flip-card-front"></div>
          <div className="flip-card-back">
            <h3>{title}</h3>
          </div>
        </div>

        <div className="flip-card-inner">
          <div className="flip-card-front"></div>
          <div className="flip-card-back">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
