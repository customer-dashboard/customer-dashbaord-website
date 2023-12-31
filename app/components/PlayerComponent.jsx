import LazyLoad from "react-lazy-load";
function PlayerComponent() {
  return (
    <div>
      <LazyLoad
      >
        <iframe
          width="100%"
          height="410"
          src="https://www.youtube.com/embed/DxVR1_1YASk"
          title="Customer Dashboard Pro - Shopify App"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </LazyLoad>
    </div>
  );
}
export default PlayerComponent;
