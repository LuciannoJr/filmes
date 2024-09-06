import { FaStar, FaRegStar } from "react-icons/fa6";

export interface RatingProps {
  rating: number;
}

export default function StarRating({ rating }: RatingProps) {
  const numStars = Math.round(rating / 2);

  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  return (
    <div
      className="
        flex
        gap-1
        [&>svg]:text-yellow-400
    "
    >
      {fullStars.map((index) => (
        <FaStar key={index} />
      ))}
      {emptyStars.map((index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
}
