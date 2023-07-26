const MovieAttributes = ({ description, language, releaseStatus }) => {
  return (
    <>
      <span className="badge rounded-pill text-bg-danger m-1">
        {description}
      </span>
      <span className="badge rounded-pill text-bg-secondary m-1">
        {language}
      </span>
      <span className="badge rounded-pill text-bg-secondary m-1">
        {releaseStatus}
      </span>
    </>
  );
};

export default MovieAttributes;
