import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Sobre mi</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h2 className="color_sec py-4">{dataabout.title}</h2>
            <h3>{dataabout.title2}</h3>
            <h3>{dataabout.title3}</h3>


          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <h2><p>{dataabout.aboutme}</p></h2>
            </div>
          </Col>
        </Row>
        
        <Row className="sec_sp">
          <Col lg="5">
            <h1 className="color_sec py-4">Habilidades</h1>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h1 className="progress-title">{data.name}</h1>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
        <Col lg="5">
            <h3>También conocimiento de:</h3>
          </Col>
        
          <Col lg="6.5">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <center><h3 className="service__title">{data.title}</h3></center>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
