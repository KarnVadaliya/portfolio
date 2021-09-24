import React, {useState, createRef} from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Col
} from "reactstrap"; 

import ColorThief from "colorthief";

import { Fade } from 'react-reveal';

const CertificationCard = ({data}) => {
    return ( 
        <Fade left duration={1000} distance="40px">
            <div>
                <a href={data.link} target="_blank"><img src={data.name} className="certificateIcon" alt=""/></a>
            </div>
		</Fade>
     );
}
 
export default CertificationCard;