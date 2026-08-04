import "./Loader.css";

function Loader() {
  return (
    <div className="loader-grid">

      {Array.from({ length: 8 }).map((_, index) => (
        <div
          className="loader-card"
          key={index}
        />
      ))}

    </div>
  );
}

export default Loader;