import { Image } from "react-bootstrap";
// import FreeShippingImage from '../../../assets/images/Checkout Compressed Images/free shipping bar image.png';
// import StreamlineProfile from "../../../assets/images/NewDataImages/Multi address capability.png";
import { Zoom } from "react-awesome-reveal";
function TabFourth() {
  return (
    <>
      <Zoom direction="top" delay={1}>
        <Image
          width="100%"
          height="100%"
          src="https://mandasa1.b-cdn.net/CustLo/Home%20Page%20Images/edit%20profile.png"
          alt="customer account custom fields edit page"
          title="customer account custom fields edit page"
        />
      </Zoom>
    </>
  );
}

export default TabFourth;
