import LazyLoad from "react-lazy-load";
function PlayerComponent() {
  return (
    <div>
      <LazyLoad
      >
       <iframe width="100%" height="400px"  src="https://www.youtube.com/embed/LZLodz64occ?si=NTPZEqyiXdxsdwrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
      </LazyLoad>
    </div>
  );
}
export default PlayerComponent;
