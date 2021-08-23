import React from "react";

import { Card, CardBody, Col, Button, CardText } from "reactstrap";

import { Fade } from "react-reveal";

import abc from '../assets/files/Resume_Karn_Vadaliya.pdf';


const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade bottom duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4 pro">
					<CardBody>
						<div className="d-flex">
							<div className="pl-2">
								<h4 className="text-info">{data.name}</h4>
								<CardText className="description">
								<p className="description">{data.timeframe}</p>
									<ul>
										{
											data.descBullets ? 
											data.descBullets.map((desc) => {
												return <li key={desc}>{desc}</li>
											}) : null
										}
									</ul>
								</CardText>
							</div>
						</div>
					</CardBody>
					<div className="d-flex pl-5" style={{marginBottom:"20px"}}>
									{data.github ? (
										<Button
											className="btn-icon"
											color="github"
											href={data.github}
											target="_blank"
										>
											<span className="btn-inner--icon">
												<i className="fa fa-github" />
											</span>
										</Button>
									) : null}
									{data.link ? (
										<Button
											className="btn-icon"
											color="success"
											href={data.link}
											target="_blank"
										>
											<span className="btn-inner--icon">
												<i className="fa fa-arrow-right mr-2" />
											</span>
											<span className="nav-link-inner--text ml-1">
												Demo
											</span>
										</Button>
									) : null}
								</div>
								<div></div>
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
