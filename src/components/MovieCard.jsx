export const MovieCard = ({ movie }) => {
  return (
    <div className="mr-5 w-60 h-60">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt={movie?.title}
        className="h-full w-60"
      />

      <div className="w-60"></div>
    </div>
  );
};
