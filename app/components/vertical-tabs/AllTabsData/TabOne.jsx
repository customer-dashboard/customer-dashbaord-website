import { Image } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
function TabOne() {
  return (
    <>
      <Zoom direction="top" delay={1}>
        <Image
          width="100%"
          height="100%"
          src="https://mandasa1.b-cdn.net/customer%20dashboard%20website/my%20profile.png"
          alt="shopify checkout extension pro upsell and cross-sell"
          title="shopify checkout upsell and cross-sell"
        />
      </Zoom>
    </>
  );
}

export default TabOne;
