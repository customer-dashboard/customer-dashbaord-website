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
                  {parse(item.VideoLink)}
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
  );
}

export default VideoCard;
