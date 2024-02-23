const PropertyVideo = ({ embedId }) => {
  return (
    <div>
      <h2 className=" text-xl font-bold">Property Details Video</h2>
      <div className="video-responsive">
        <iframe
          width="500px"
          height="410px"
          src={`https://www.youtube.com/embed/${embedId}`}
          //   frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Real estate Video"
        ></iframe>
      </div>
    </div>
  );
};

export default PropertyVideo;
