import React, { useState } from "react";
// import Form1 from "../other/Form"
// import { Row, Col } from 'reactstrap';
import {
	Row,
	Col,
	Card,
	CardBody,
	CustomInput,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Button,
} from "reactstrap";

// import Flatpickr from 'react-flatpickr';
// import Select from 'react-select';

// import PageTitle from '../../components/PageTitle';

import { Component } from "react";
import { Wizard, Steps, Step } from "react-albus";
import MaskedInput from "react-text-mask";
import FileUploader from "../../components/FileUploader";

import { render } from "react-dom";
import { storage, auth, db } from "../../helpers/firebase";
export default class ReportIssue extends Component {
	state = {
		to: "Admin",
		subject: "",
		body: "",
	};

	componentDidMount = () => {
		db
			.collection("Global_Variables")
			.doc("currentApplicationNumber")
			.get()
			.then((res) => {
				this.setState({ currentAppNumber: res.data().current });
				console.log("Application No.", this.state.currentAppNumber);
			}).catch = (err) => {
			console.log("error");
		};
	};

	sendData = (event) => {
		console.log("sendData function", this.state);

		event.preventDefault();
		try {
			var data = db.collection("Issues").doc();
			data.set({
				uid: auth.currentUser.uid,
				to: this.state.to,
				subject: this.state.subject,
				body: this.state.body,
			});
			alert("Issue Submitted");
			window.location.reload();
		} catch (error) {
			console.log("Issues");
			console.log(error);
			alert(error.message);
		}
	};

	render() {
		console.log(this.state);
		return (
			<div>
				<Row className="page-title align-items-center">
					<Col sm={4} xl={6}>
						<h4 className="mb-1 mt-0">Report Issue</h4>
					</Col>
				</Row>
				<Card>
					<CardBody>
						<div>
							<Form>
								{/* <h4 className="header-title mt-0 mb-4">Personal Details</h4> */}

								<FormGroup row>
									<Label for="exampleEmail" md={3}>
										To
									</Label>
									<Col md={9}>
										<Input
											type="text"
											name="to"
											id="to"
											placeholder="enter email"
											value={this.state.to}
											disabled
											onChange={(e) => {
												this.setState({
													to: e.target.value,
												});
												console.log(e.target.value);
											}}
										/>
									</Col>
								</FormGroup>

								<FormGroup row>
									<Label for="phone" md={3}>
										Subject
									</Label>
									<Col md={9}>
										<Input
											type="text"
											name="subject"
											id="subject"
											placeholder="Enter Subject"
											value={this.state.subject}
											onChange={(e) => {
												this.setState({
													subject: e.target.value,
												});
												console.log(e.target.value);
											}}
										/>
									</Col>
								</FormGroup>

								<FormGroup row>
									<Label for="phone" md={3}>
										Body
									</Label>
									<Col md={9}>
										<Input
											type="textarea"
											name="body"
											id="body"
											rows="10"
											placeholder="Enter Body of the message"
											value={this.state.body}
											onChange={(e) => {
												this.setState({
													body: e.target.value,
												});
												console.log(e.target.value);
											}}
										/>
									</Col>
								</FormGroup>

								<ul className="list-inline wizard mb-0">
									<li className="next list-inline-item float-right">
										<Button
											onClick={this.sendData}
											color="success"
										>
											Submit
										</Button>
									</li>
								</ul>
							</Form>
						</div>
					</CardBody>
				</Card>
			</div>
		);
	}
}
