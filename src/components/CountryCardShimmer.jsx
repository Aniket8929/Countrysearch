import "./CountryCardShimmer.css"
const CountryCardShimmer = () => {
  return (
    <div className="country-card shimmer">
      <div className="country-flag shimmer-bg"></div>

      <div className="country-info">
        <div className="shimmer-line title"></div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line small"></div>
      </div>
    </div>
  );
};

export default CountryCardShimmer;
