import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EdutionCard = ({ education }) => {
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4 edu">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<a href={education.link} target="_blank">
								<h5 className="text-info">
									{education.schoolName}
								</h5>
							</a>
							<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
							<div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
							<p className="description mt-3">{education.desc}</p>
							<p className="description mt-3">GPA : {education.cpi}</p>
							</div>
							
							
							<b>{education.desc2}</b>
							<p>{education.descBullets}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EdutionCard;
