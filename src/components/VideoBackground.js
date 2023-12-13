import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // fetch trailer video

  // useMovieTrailer(movieId);

  return (
    <div className=" ">
      <iframe
        className=" aspect-video  "
        width="1730"
        height="835"
        src={
          "https://www.youtube.com/embed/qZ40Z62tcXM?si=6T6gU2XAabFO5R6w" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
