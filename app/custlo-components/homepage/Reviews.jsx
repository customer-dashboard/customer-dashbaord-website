import { Col, Row } from "react-bootstrap";
import { merchantReviews } from "~/middleware/testimonialData";

function Reviews() {
  const groupedSlides = [];
  for (let i = 0; i < merchantReviews.length; i += 2) {
    groupedSlides.push(merchantReviews.slice(i, i + 2));
  }
  const starIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 18" fill="none">
<path d="M9.16054 0.915543C9.4371 0.0644028 10.6412 0.0644016 10.9178 0.915542L12.4244 5.55251C12.5481 5.93315 12.9028 6.19087 13.303 6.19087L18.1786 6.19087C19.0736 6.19087 19.4457 7.33607 18.7217 7.8621L14.7772 10.7279C14.4534 10.9632 14.3179 11.3801 14.4416 11.7608L15.9483 16.3978C16.2248 17.2489 15.2506 17.9567 14.5266 17.4306L10.5822 14.5648C10.2584 14.3296 9.81994 14.3296 9.49615 14.5648L5.55171 17.4306C4.82768 17.9567 3.85352 17.2489 4.13007 16.3978L5.63671 11.7608C5.76039 11.3801 5.6249 10.9632 5.30111 10.7279L1.35667 7.8621C0.632644 7.33607 1.00474 6.19087 1.89968 6.19087L6.77528 6.19087C7.17551 6.19087 7.53022 5.93315 7.6539 5.55251L9.16054 0.915543Z" fill="#FFC94B"/>
</svg>
  return (
    <>
      <section className="custolo_marchant_reviews pt-5 pb-5">
        <div className="reviews_wraper">
          <div className="container">
            <div className="reviews_content">
              <h1 className="font-alverata-normal mb-4 text-center mb-5">
                Meet the people{" "}
                <span className="gradient-text">thriving with Custlo</span>
              </h1>

              <Row>
                {groupedSlides.map((group, index) => (
                  <Col lg={4} key={index} className="slide-group">
                    {group.map((item) => (
                      <div key={item.id} className="slide-card">
                        <h4>{item.name}</h4>
                        <div className="stars__">{starIcon}{starIcon}{starIcon}{starIcon}{starIcon}</div>
                        <p dangerouslySetInnerHTML={{ __html: item.para }} />
                        <small>{item.time}</small>
                      </div>
                    ))}
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
