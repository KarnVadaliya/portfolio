import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src={prof.avatar_url} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                        Reach out to me!
                      </h2>
                      <p className="lead text-white mt-3">
                        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL QUERIES
                      </p>
                      <p className="text-white mt-3">
                          {prof.bio}
                      </p>
                      <a href="https://www.google.com/maps/place/Boston,+MA/@42.3140089,-71.2504676" target="_blank">
                      <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                        <i className="ni ni-pin-3 text-info mr-4" />
                        {prof.location}
                        </div>
                        </a>
                        <br></br>
                        <br></br>
                        <SocialLinks />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;