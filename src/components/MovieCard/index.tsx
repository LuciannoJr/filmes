/* eslint-disable @next/next/no-img-element */
import StarRating from "../StarRating";

export interface MovieProps {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export default function MovieCard({
  title,
  overview,
  poster_path,
  vote_average,
}: MovieProps) {
  return (
    <>
      <li
        className="
            group
            text-white
            w-full
            h-full
            rounded-lg 
            overflow-hidden
            relative
      "
      >
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
            className="
              w-full 
              h-full 
              object-cover 
              opacity-100 
              transition-opacity 
              duration-[.6s] 
              group-hover:opacity-50 
              group-hover:cursor-pointer
            "
          />
        </div>
        <div
          className="
            absolute
            bottom-0
            bg-gradient-to-t from-[#00000000] to-[#000000] to-90%
            w-full
            flex
            flex-col
            justify-end
            p-[0.625rem]
        "
        >
          <p className="text-[#f1f5f9]">{title}</p>

          {vote_average > 0 && <StarRating rating={vote_average} />}

          <div
            className="
              hidden-content
              text-[#f1f5f9]
              text-xs
              mt-2
              h-0
              opacity-0
              group-hover:opacity-100
              group-hover:h-[6.25rem]
              transition-all
              duration-[.6s]
          "
          >
            {overview && (
                <p className="pb-2">
                  {overview.length > 100
                    ? `${overview.substring(0, 100)}...`
                    : overview}
                </p>
            )}

            <button className="font-bold">Ver Mais</button>
          </div>
        </div>
      </li>
    </>
  );
}
