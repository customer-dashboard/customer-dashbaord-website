import { Image } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
function TabOne() {
  return (
    <>
      <Zoom direction="top" delay={1}>
        <Image
          width="100%"
          height="100%"
          src="https://mandasa1.b-cdn.net/CustLo/Home%20Page%20Images/profile.png"
          alt="shopify customer account custom fields"
          title="shopify customer account custom fields"
        />
      </Zoom>
    </>
  );
}

export default TabOne;
