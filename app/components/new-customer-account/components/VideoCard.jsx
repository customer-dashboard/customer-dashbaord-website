import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import parse from 'html-react-parser';

function VideoCard({ CustomFieldsVideos }) {
  return (
      <Container>
        <Row>
            <Col md={12}>
              <div className="mb-5  text-center"><h2 >{parse(CustomFieldsVideos[0].Heading)}</h2></div>
            </Col>
          {CustomFieldsVideos.map((item, index) => {
            return (
              <>
                <Col md={6}>
                 <div>
                   <h3 className="text-center fw-600 app-color mb-4"> {parse(item.CardHeading)}</h3>
                 </div>
                 <div className="video_player">
                  {parse(item.VideoLink)}
                 </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
  );
}

export default VideoCard;
