import React from 'react';
import { certificates } from "../portfolio";
import {
    Container,
    Row,
} from "reactstrap";

import { Fade } from 'react-reveal';

import CertificationCard from "../components/CertificationCard";

const Certification = () => {
    return ( 
        <section className="section section-md">
            <Container>
              <Fade up duration={1000} distance="40px">
              <div className="d-flex p-4">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-paper-diploma text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-info">Certifications</h4>
                    </div>
                </div>
                <Row className="d-flex align-items-center" >

                    {
                        certificates.map((data, i) => {
                            return <CertificationCard key={i} data={data} />
                        })
                    }
                </Row>
              </Fade>
            </Container>
          </section>
     );
}
 
export default Certification;