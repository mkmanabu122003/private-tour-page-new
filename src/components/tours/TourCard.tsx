import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight } from "lucide-react";

interface TourCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  difficulty: string;
  image: string;
}

export const TourCard = ({
  id,
  title,
  description,
  duration,
  price,
  difficulty,
  image,
}: TourCardProps) => {
  return (
    <Link to={`/tours/${id}`} className="group card-elevated">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="text-label px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full">
            {difficulty}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="heading-card text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-body line-clamp-2">{description}</p>
        
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>Private</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">From</span>
            <p className="text-lg font-semibold text-foreground">{price}</p>
          </div>
          <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};
