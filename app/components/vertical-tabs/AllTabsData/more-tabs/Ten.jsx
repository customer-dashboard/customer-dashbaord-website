import { Image } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
function Ten() {
  return (
    <>
      <Zoom direction="top" delay={1}>
        <Image
          width="100%"
          height="100%"
          src="https://mandasa1.b-cdn.net/CustLo/Home%20Page%20Images/pramotion%20banner%201.png"
          alt="Shopify customer account banners"
          title="Shopify customer account promotional banners"
        />
      </Zoom>
    </>
  );
}

export default Ten;
