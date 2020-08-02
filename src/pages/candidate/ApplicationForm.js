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
export default class ApplicationForm extends Component {
	state = {
		currentAppNumber: "",
		fname: "",
		lname: "",
		email: "",
		father_fname: "",
		father_lname: "",
		mother_fname: "",
		mother_lname: "",
		phone: "",
		gender: "",
		dob: "",
		address: "",
		category: "",
		State: "",
		district: "",
		pincode: "",
		disability: "",
		disability_type: "",
		binDis: false,
		reappearing: "",
		binReapper: false,
		reappearNumber: "",

		board10: "",
		reg10: "",
		yop10: "",
		marks10: "",
		// cert10: '',
		board12: "",
		reg12: "",
		yop12: "",
		marks12: "",
		cert12: "",
		nameofdeg1: "",
		boarddeg1: "",
		degree1status: "",
		binDeg1: false,
		regdeg1: "",
		yopdeg1: "",
		marksdeg1: "",
		certdeg1: "",

		degree2present: "",
		binDeg2pres: false,
		nameofdeg2: "",
		boarddeg2: "",
		degree2status: "",
		binDeg2: true,
		regdeg2: "",
		yopdeg2: "",
		marksdeg2: "",
		certdeg2: "",

		papers: "",
		binPaper2: false,
		language1: "",
		language2: "",
		paper2subj: "",
		center1: "",
		center2: "",
		center3: "",

		cities: [],

		offline: false,
		online: true,
	};

	connectionCheck = () => {
		var that = this;
		console.log("here");
		window.addEventListener(
			"online",
			function (e) {
				console.log("online");
				that.setState({ online: true, offline: false });
			},
			false
		);

		window.addEventListener(
			"offline",
			function (e) {
				console.log("offline");
				that.setState({ offline: true, online: false });
			},
			false
		);
	};

	componentDidMount = () => {
		db
			.collection("Global_Variables")
			.doc("currentApplicationNumber")
			.get()
			.then((res) => {
				this.setState({ currentAppNumber: res.data().current });
				console.log(
					"Current application number",
					this.state.currentAppNumber
				);
			}).catch = (err) => {
			console.log("error");
		};
		db
			.collection("users")
			.doc(localStorage.getItem("uid"))
			.get()
			.then((res) => {
				this.setState({ fname: res.data().fname });
				this.setState({ lname: res.data().lname });
				this.setState({ email: res.data().email });
				this.setState({ phone: res.data().phone });
				console.log(
					"Current application number",
					this.state.currentAppNumber
				);
			}).catch = (err) => {
			console.log("error");
		};
		this.connectionCheck();
	};

	// reappearingFunc = () => {
	// 	var uidVar = localStorage.getItem("uid");
	// 	this.setState({ uid: uidVar });
	// 	console.log("USER ID", this.state.uid);
	// 	db
	// 		.collection("Candidate_Profile")
	// 		.doc(localStorage.getItem("uid"))
	// 		.get()
	// 		.then((res) => {
	// 			// this.setState({ currentAppNumber: res.data().current });
	// 			console.log("Candidate_Profile WORKS", res.data());
	// 		}).catch = (err) => {
	// 		console.log("error");
	// 	};
	// 	db
	// 		.collection("Candidate_Exam_Details")
	// 		.doc(localStorage.getItem("uid"))
	// 		.get()
	// 		.then((res) => {
	// 			// this.setState({ currentAppNumber: res.data().current });
	// 			console.log("Candidate_Exam_Details WORKS", res.data());
	// 		}).catch = (err) => {
	// 		console.log("error");
	// 	};
	// 	db
	// 		.collection("Candidate_Education")
	// 		.doc(localStorage.getItem("uid"))
	// 		.get()
	// 		.then((res) => {
	// 			// this.setState({ currentAppNumber: res.data().current });
	// 			console.log("Candidate_Education WORKS", res.data());
	// 		}).catch = (err) => {
	// 		console.log("error");
	// 	};
	// };
	sendData = (event) => {
		console.log("sendData function", this.state);

		event.preventDefault();

		if (this.state.online) {
			db.enableNetwork().then(() => {
				// Do online actions=>
				try {
					var data = db
						.collection("Candidate_Profile")
						.doc(localStorage.getItem("uid"));
					data.set({
						father_fname: this.state.father_fname,
						father_lname: this.state.father_lname,
						mother_fname: this.state.mother_fname,
						mother_lname: this.state.mother_lname,
						gender: this.state.gender,
						dob: this.state.dob,
						address: this.state.address,
						category: this.state.category,
						State: this.state.State,
						district: this.state.district,
						pincode: this.state.pincode,
					});

					window.location.reload();
				} catch (error) {
					console.log("Candidate_Profile");
					console.log(error);
					alert(error.message);
				}
				try {
					var data = db
						.collection("Candidate_Exam_Details")
						.doc(localStorage.getItem("uid"));
					data.set({
						disability: this.state.disability,
						disability_type: this.state.disability_type,
						papers: this.state.papers,
						language1: this.state.language1,
						language2: this.state.language2,
						paper2subj: this.state.paper2subj,
						center1: this.state.center1,
						center2: this.state.center2,
						center3: this.state.center3,
					});

					window.location.reload();
				} catch (error) {
					console.log("Candidate_Exam_Details");
					console.log(error);
					alert(error.message);
				}
				try {
					var data = db
						.collection("Candidate_Education")
						.doc(localStorage.getItem("uid"));
					data.set({
						board10: this.state.board10,
						reg10: this.state.reg10,
						yop10: this.state.yop10,
						marks10: this.state.marks10,

						board12: this.state.board12,
						reg12: this.state.reg12,
						yop12: this.state.yop12,
						marks12: this.state.marks12,

						nameofdeg1: this.state.nameofdeg1,
						boarddeg1: this.state.boarddeg1,
						degree1status: this.state.degree1status,
						regdeg1: this.state.regdeg1,
						yopdeg1: this.state.yopdeg1,
						marksdeg1: this.state.marksdeg1,

						degree2present: this.state.degree2present,
						nameofdeg2: this.state.nameofdeg2,
						boarddeg2: this.state.boarddeg2,
						degree2status: this.state.degree2status,
						regdeg2: this.state.regdeg2,
						yopdeg2: this.state.yopdeg2,
						marksdeg2: this.state.marksdeg2,
					});

					window.location.reload();
				} catch (error) {
					console.log("Candidate_Education");
					console.log(error);
					alert(error.message);
				}
				try {
					var data = db
						.collection("Payment")
						.doc(localStorage.getItem("uid"));
					data.set({
						payment_id: "",
						order_id: "",
						payment_status: false,
					});
					db.collection("Admin_Exam_Centre")
						.get()
						.then((querySnapshot) => {
							querySnapshot.forEach((doc) => {
								if (doc.data().centerCity === undefined) {
								} else {
									this.state.cities.push(
										doc.data().centerCity
									);
								}
							});
						});

					window.location.reload();
				} catch (error) {
					console.log("Payment");
					console.log(error);
					alert(error.message);
				}
				alert("Data saved into database");
			});
		} else {
			db.disableNetwork().then(() => {
				// Do offline actions
				try {
					var data = db
						.collection("Candidate_Profile")
						.doc(localStorage.getItem("uid"));
					data.set({
						father_fname: this.state.father_fname,
						father_lname: this.state.father_lname,
						mother_fname: this.state.mother_fname,
						mother_lname: this.state.mother_lname,
						gender: this.state.gender,
						dob: this.state.dob,
						address: this.state.address,
						category: this.state.category,
						State: this.state.State,
						district: this.state.district,
						pincode: this.state.pincode,
					});

					// window.location.reload();
				} catch (error) {
					console.log("Candidate_Profile");
					console.log(error);
					alert(error.message);
				}
				try {
					var data = db
						.collection("Candidate_Exam_Details")
						.doc(localStorage.getItem("uid"));
					data.set({
						disability: this.state.disability,
						disability_type: this.state.disability_type,
						papers: this.state.papers,
						language1: this.state.language1,
						language2: this.state.language2,
						paper2subj: this.state.paper2subj,
						center1: this.state.center1,
						center2: this.state.center2,
						center3: this.state.center3,
					});

					// window.location.reload();
				} catch (error) {
					console.log("Candidate_Exam_Details");
					console.log(error);
					alert(error.message);
				}
				try {
					var data = db
						.collection("Candidate_Education")
						.doc(localStorage.getItem("uid"));
					data.set({
						board10: this.state.board10,
						reg10: this.state.reg10,
						yop10: this.state.yop10,
						marks10: this.state.marks10,

						board12: this.state.board12,
						reg12: this.state.reg12,
						yop12: this.state.yop12,
						marks12: this.state.marks12,

						nameofdeg1: this.state.nameofdeg1,
						boarddeg1: this.state.boarddeg1,
						degree1status: this.state.degree1status,
						regdeg1: this.state.regdeg1,
						yopdeg1: this.state.yopdeg1,
						marksdeg1: this.state.marksdeg1,

						degree2present: this.state.degree2present,
						nameofdeg2: this.state.nameofdeg2,
						boarddeg2: this.state.boarddeg2,
						degree2status: this.state.degree2status,
						regdeg2: this.state.regdeg2,
						yopdeg2: this.state.yopdeg2,
						marksdeg2: this.state.marksdeg2,
					});

					// window.location.reload();
				} catch (error) {
					console.log("Candidate_Education");
					console.log(error);
					alert(error.message);
				}
				try {
					var data = db
						.collection("Payment")
						.doc(localStorage.getItem("uid"));
					data.set({
						payment_id: "",
						order_id: "",
						payment_status: false,
					});

					// window.location.reload();
				} catch (error) {
					console.log("Payment");
					console.log(error);
					alert(error.message);
				}
				alert(
					"Data saved into cache. Do not close the browser till stable internet connection"
				);
			});
		}
	};

	// handleToggleClick() {
	//   this.setState(state => ({
	//     showWarning: !state.showWarning
	//   }));
	// }

	// disabilityType = (props) =>
	// {
	//   if(props.state.disability==="Yes")
	//     return <h1>disabled</h1>
	// }

	render() {
		const { State, region } = this.state;
		console.log(this.state);
		return (
			<div>
				<Row className="page-title align-items-center">
					<Col sm={4} xl={6}>
						<h4 className="mb-1 mt-0">
							Candidate Application Form
						</h4>
					</Col>
				</Row>
				<Card>
					<CardBody>
						<Wizard>
							<Steps>
								<Step
									id="login"
									render={({ next }) => (
										<Form>
											<h4 className="header-title mt-0 mb-4">
												Personal Details
											</h4>
											{/* 
											<FormGroup
												onChange={(e) => {
													this.setState({
														reappearing:
															e.target.value,
													});
													if (
														this.state
															.reappearing ===
														"Yes"
													)
														this.setState({
															binReapper: true,
														});
													if (
														this.state
															.reappearing ===
														"No"
													)
														this.setState({
															binReapper: false,
														});
													console.log(e.target.value);
												}}
											>
												<Row>
													<Col md={3}>
														<Label>
															Reappearing
															Candidate?
														</Label>
													</Col>
													<Col md={9}>
														<Row>
															<Col md={6}>
																<Input
																	type="radio"
																	onClick={
																		this
																			.state
																			.reappearingFunc
																	}
																/>
																Yes
															</Col>
															<Col md={6}>
																<Input
																	type="radio"
																	name="reappearing"
																	value="No"
																/>
																No
															</Col>
															{/* <Col md={6}>
																<Input
																	type="text"
																	name="select"
																	id="reappering"
																	disabled={
																		this
																			.state
																			.binReapper
																	}
																	placeholder={
																		this
																			.state
																			.binReapper
																			? ""
																			: "Enter Previous Application Number"
																	}
																	value={
																		this
																			.state
																			.reappearNumber
																	}
																	onChange={(
																		e
																	) => {
																		this.setState(
																			{
																				reappearNumber:
																					e
																						.target
																						.value,
																			}
																		);
																		console.log(
																			e
																				.target
																				.value
																		);
																	}}
																></Input>
															</Col> */}
											{/* </Row>
													</Col>
												</Row>
											</FormGroup> */}

											<FormGroup row>
												<Label for="fname" md={3}>
													Candidate First Name
												</Label>
												<Col md={9}>
													<Row>
														<Col md={6}>
															<Input
																type="text"
																name="fname"
																id="fname"
																placeholder="Enter first name"
																value={
																	this.state
																		.fname
																}
																onChange={(
																	e
																) => {
																	this.setState(
																		{
																			fname:
																				e
																					.target
																					.value,
																		}
																	);
																	console.log(
																		e.target
																			.value
																	);
																}}
															/>
														</Col>
														<Col md={6}>
															<Input
																type="text"
																name="lname"
																id="lname"
																placeholder="Enter last name"
																value={
																	this.state
																		.lname
																}
																onChange={(
																	e
																) => {
																	this.setState(
																		{
																			lname:
																				e
																					.target
																					.value,
																		}
																	);
																	console.log(
																		e.target
																			.value
																	);
																}}
															/>
														</Col>
													</Row>
												</Col>
											</FormGroup>

											<FormGroup row>
												<Label
													for="exampleEmail"
													md={3}
												>
													Email
												</Label>
												<Col md={9}>
													<Input
														type="email"
														name="email"
														id="exampleEmail"
														placeholder="enter email"
														value={this.state.email}
														onChange={(e) => {
															this.setState({
																email:
																	e.target
																		.value,
															});
															console.log(
																e.target.value
															);
														}}
													/>
												</Col>
											</FormGroup>

											<FormGroup row>
												<Label for="phone" md={3}>
													Phone Number
												</Label>
												<Col md={9}>
													<Input
														type="text"
														name="phone"
														id="phone"
														placeholder="enter phone number"
														value={this.state.phone}
														onChange={(e) => {
															this.setState({
																phone:
																	e.target
																		.value,
															});
															console.log(
																e.target.value
															);
														}}
													/>
												</Col>
											</FormGroup>

											<FormGroup row>
												<Label for="fname" md={3}>
													Father's Name
												</Label>
												<Col md={9}>
													<Row>
														<Col md={6}>
															<Input
																type="text"
																name="father_fname"
																id="father_fname"
																placeholder="Enter father's first name"
																value={
																	this.state
																		.father_fname
																}
																onChange={(
																	e
																) => {
																	this.setState(
																		{
																			father_fname:
																				e
																					.target
																					.value,
																		}
																	);
																	console.log(
																		e.target
																			.value
																	);
																}}
															/>
														</Col>
														<Col md={6}>
															<Input
																type="text"
																name="father_lname"
																id="father_lname"
																placeholder="Enter father's last name"
																value={
																	this.state
																		.father_lname
																}
																onChange={(
																	e
																) => {
																	this.setState(
																		{
																			father_lname:
																				e
																					.target
																					.value,
																		}
																	);
																	console.log(
																		e.target
																			.value
																	);
																}}
															/>
														</Col>
													</Row>
												</Col>
											</FormGroup>

											<FormGroup row>
												<Label for="fname" md={3}>
													Mother's Name
												</Label>
												<Col md={9}>
													<Row>
														<Col md={6}>
															<Input
																type="text"
																name="mother_fname"
																id="mother_fname"
																placeholder="Enter mother's first name"
																value={
																	this.state
																		.mother_fname
																}
																onChange={(
																	e
																) => {
																	this.setState(
																		{
																			mother_fname:
																				e
																					.target
																					.value,
																		}
																	);
																	console.log(
																		e.target
																			.value
																	);
																}}
															/>
														</Col>
														<Col md={6}>
															<Input
																type="text"
																name="mother_lname"
																id="mother_lname"
																placeholder="Enter mother's last name"
																value={
																	this.state
																		.mother_lname
																}
																onChange={(
																	e
																) => {
																	this.setState(
																		{
																			mother_lname:
																				e
																					.target
																					.value,
																		}
																	);
																	console.log(
																		e.target
																			.value
																	);
																}}
															/>
														</Col>
													</Row>
												</Col>
											</FormGroup>

											<FormGroup
												onChange={(e) => {
													this.setState({
														gender: e.target.value,
													});
													console.log(e.target.value);
												}}
											>
												<Row>
													<Col md={3}>
														<Label>Gender</Label>
													</Col>
													<Col md={9}>
														<Row>
															<Col md={4}>
																<Input
																	type="radio"
																	name="gender"
																	value="male"
																/>
																Male
															</Col>
															<Col md={4}>
																<Input
																	type="radio"
																	name="gender"
																	value="female"
																/>
																Female
															</Col>
															<Col md={4}>
																<Input
																	type="radio"
																	name="gender"
																	value="transgender"
																/>
																Transgender
															</Col>
														</Row>
													</Col>
												</Row>
											</FormGroup>

											<FormGroup row>
												<Label for="exampleDate" md={3}>
													Date of Birth
												</Label>
												<Col md={9}>
													<Input
														type="date"
														name="dob"
														id="dob"
														placeholder="enter dob"
														value={this.state.dob}
														onChange={(e) => {
															this.setState({
																dob:
																	e.target
																		.value,
															});
															console.log(
																e.target.value
															);
														}}
													/>
												</Col>
											</FormGroup>

											<FormGroup row>
												<Label
													for="exampleSelect"
													md={3}
												>
													Category
												</Label>
												<Col md={9}>
													<Input
														type="select"
														name="select"
														id="exampleSelect"
														placeholder="enter category"
														value={
															this.state.category
														}
														onChange={(e) => {
															this.setState({
																category:
																	e.target
																		.value,
															});
															console.log(
																e.target.value
															);
														}}
													>
														<option></option>
														<option>GM</option>
														<option>OBC</option>
														<option>SC</option>
														<option>ST</option>
													</Input>
												</Col>
											</FormGroup>

											<FormGroup row>
												<Label for="exampleText" md={3}>
													Address
												</Label>
												<Col md={9}>
													<Input
														type="textarea"
														name="address"
														id="address"
														rows="4"
														placeholder="enter address"
														value={
															this.state.address
														}
														onChange={(e) => {
															this.setState({
																address:
																	e.target
																		.value,
															});
															console.log(
																e.target.value
															);
														}}
													/>
												</Col>
											</FormGroup>

											<FormGroup row>
												<Label for="District" md={3}>
													District
												</Label>
												<Col md={9}>
													<Input
														type="text"
														name="district"
														id="district"
														placeholder="enter district"
														value={
															this.state.district
														}
														onChange={(e) => {
															this.setState({
																district:
																	e.target
																		.value,
															});
															console.log(
																e.target.value
															);
														}}
													/>
												</Col>
											</FormGroup>

											<FormGroup row>
												<Label for="State" md={3}>
													State
												</Label>
												<Col md={9}>
													<Input
														type="text"
														name="State"
														id="State"
														placeholder="enter State"
														value={this.state.State}
														onChange={(e) => {
															this.setState({
																State:
																	e.target
																		.value,
															});
															console.log(
																e.target.value
															);
														}}
													/>
												</Col>
											</FormGroup>

											<FormGroup row>
												<Label for="pincode" md={3}>
													PIN Code
												</Label>
												<Col md={9}>
													<Input
														type="text"
														name="pincode"
														id="pincode"
														placeholder="enter pin code"
														value={
															this.state.pincode
														}
														onChange={(e) => {
															this.setState({
																pincode:
																	e.target
																		.value,
															});
															console.log(
																e.target.value
															);
														}}
													/>
												</Col>
											</FormGroup>

											<FormGroup
												onChange={(e) => {
													this.setState({
														disability:
															e.target.value,
													});
													if (
														this.state
															.disability ===
														"Yes"
													)
														this.setState({
															binDis: true,
														});
													if (
														this.state
															.disability === "No"
													)
														this.setState({
															binDis: false,
														});
													console.log(e.target.value);
												}}
											>
												<Row>
													<Col md={3}>
														<Label>
															If differently
															abled?
														</Label>
													</Col>
													<Col md={9}>
														<Row>
															<Col md={3}>
																<Input
																	type="radio"
																	name="disability"
																	value="Yes"
																/>
																Yes
															</Col>
															<Col md={3}>
																<Input
																	type="radio"
																	name="disability"
																	value="No"
																/>
																No
															</Col>
															<Col md={6}>
																<Input
																	type="select"
																	name="select"
																	id="disabilityType"
																	disabled={
																		this
																			.state
																			.binDis
																	}
																	placeholder="enter disability type"
																	value={
																		this
																			.state
																			.disability_type
																	}
																	onChange={(
																		e
																	) => {
																		this.setState(
																			{
																				disability_type:
																					e
																						.target
																						.value,
																			}
																		);
																		console.log(
																			e
																				.target
																				.value
																		);
																	}}
																>
																	<option></option>
																	<option>
																		Hearing
																		impaired
																	</option>
																	<option>
																		Blindness/Low
																		vision
																	</option>
																	<option>
																		Locomotor
																		Disability
																	</option>
																	{/* <option></option> */}
																</Input>
															</Col>
														</Row>
													</Col>
												</Row>
											</FormGroup>

											<ul className="list-inline wizard mb-0">
												<li className="next list-inline-item float-right">
													<Button
														onClick={next}
														color="success"
													>
														Next
													</Button>
												</li>
											</ul>
										</Form>
									)}
								/>
								<Step
									id="gandalf"
									render={({ next, previous }) => (
										<Form>
											<h4 className="header-title mt-0 mb-4">
												Education Details
											</h4>

											<div id="class10">
												<h5 className="header-title mt-7 mb-2">
													10th Standard / Secondary
													School
												</h5>
												<FormGroup row>
													<Label for="board10" md={3}>
														University / Board
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="board10"
															id="board10"
															placeholder="enter board"
															value={
																this.state
																	.board10
															}
															onChange={(e) => {
																this.setState({
																	board10:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>
												<FormGroup row>
													<Label for="reg10" md={3}>
														Register No.
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="reg10"
															id="reg10"
															placeholder="enter register no."
															value={
																this.state.reg10
															}
															onChange={(e) => {
																this.setState({
																	reg10:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>
												<FormGroup row>
													<Label
														for="exampleSelect"
														md={3}
													>
														Year of Pass out
													</Label>
													<Col md={9}>
														<Input
															type="select"
															name="yop10"
															id="yop10"
															placeholder="enter year of pass out"
															value={
																this.state.yop10
															}
															onChange={(e) => {
																this.setState({
																	yop10:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														>
															<option></option>
															<option>
																1981
															</option>
															<option>
																1982
															</option>
															<option>
																1983
															</option>
															<option>
																1984
															</option>
															<option>
																1985
															</option>
															<option>
																1986
															</option>
															<option>
																1987
															</option>
															<option>
																1988
															</option>
															<option>
																1989
															</option>
															<option>
																1990
															</option>
															<option>
																1991
															</option>
															<option>
																1992
															</option>
															<option>
																1993
															</option>
															<option>
																1994
															</option>
															<option>
																1995
															</option>
															<option>
																1996
															</option>
															<option>
																1997
															</option>
															<option>
																1998
															</option>
															<option>
																1999
															</option>
															<option>
																2000
															</option>
															<option>
																2001
															</option>
															<option>
																2002
															</option>
															<option>
																2003
															</option>
															<option>
																2004
															</option>
															<option>
																2005
															</option>
															<option>
																2006
															</option>
															<option>
																2007
															</option>
															<option>
																2008
															</option>
															<option>
																2009
															</option>
															<option>
																2010
															</option>
															<option>
																2011
															</option>
															<option>
																2012
															</option>
															<option>
																2013
															</option>
															<option>
																2014
															</option>
															<option>
																2015
															</option>
															<option>
																2016
															</option>
															<option>
																2017
															</option>
															<option>
																2018
															</option>
															<option>
																2019
															</option>
															<option>
																2020
															</option>
														</Input>
													</Col>
												</FormGroup>
												<FormGroup row>
													<Label for="marks10" md={3}>
														Percentage
													</Label>
													<Col md={9}>
														<MaskedInput
															mask={[
																/\d/,
																/\d/,
																".",
																/\d/,
																/\d/,
																"%",
															]}
															placeholder="__.__%"
															className="form-control"
															value={
																this.state
																	.marks10
															}
															onChange={(e) => {
																this.setState({
																	marks10:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>
												// FileUpload Here //gcuvbk
												<FormGroup row>
													<Label for="cert10" md={3}>
														Certificate / Marks
														sheet
													</Label>
													<Col md={9}>
														<Input
															type="file"
															name="cert10"
															id="cert10"
															onChange={
																this
																	.cert10_handleChange
															}
														/>
													</Col>
												</FormGroup>
											</div>

											<div id="class12">
												<h5 className="header-title mt-7 mb-2">
													12th Standard / Senior
													Secondary School
												</h5>
												<FormGroup row>
													<Label for="board12" md={3}>
														University / Board
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="board12"
															id="board12"
															placeholder="enter board"
															value={
																this.state
																	.board12
															}
															onChange={(e) => {
																this.setState({
																	board12:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>
												<FormGroup row>
													<Label for="reg12" md={3}>
														Register No.
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="reg12"
															id="reg12"
															placeholder="enter register no."
															value={
																this.state.reg12
															}
															onChange={(e) => {
																this.setState({
																	reg12:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>
												<FormGroup row>
													<Label for="yop12" md={3}>
														Year of Pass out
													</Label>
													<Col md={9}>
														<Input
															type="select"
															name="yop12"
															id="yop12"
															placeholder="enter year of pass out"
															value={
																this.state.yop12
															}
															onChange={(e) => {
																this.setState({
																	yop12:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														>
															<option></option>
															<option>
																1981
															</option>
															<option>
																1982
															</option>
															<option>
																1983
															</option>
															<option>
																1984
															</option>
															<option>
																1985
															</option>
															<option>
																1986
															</option>
															<option>
																1987
															</option>
															<option>
																1988
															</option>
															<option>
																1989
															</option>
															<option>
																1990
															</option>
															<option>
																1991
															</option>
															<option>
																1992
															</option>
															<option>
																1993
															</option>
															<option>
																1994
															</option>
															<option>
																1995
															</option>
															<option>
																1996
															</option>
															<option>
																1997
															</option>
															<option>
																1998
															</option>
															<option>
																1999
															</option>
															<option>
																2000
															</option>
															<option>
																2001
															</option>
															<option>
																2002
															</option>
															<option>
																2003
															</option>
															<option>
																2004
															</option>
															<option>
																2005
															</option>
															<option>
																2006
															</option>
															<option>
																2007
															</option>
															<option>
																2008
															</option>
															<option>
																2009
															</option>
															<option>
																2010
															</option>
															<option>
																2011
															</option>
															<option>
																2012
															</option>
															<option>
																2013
															</option>
															<option>
																2014
															</option>
															<option>
																2015
															</option>
															<option>
																2016
															</option>
															<option>
																2017
															</option>
															<option>
																2018
															</option>
															<option>
																2019
															</option>
															<option>
																2020
															</option>
														</Input>
													</Col>
												</FormGroup>
												<FormGroup row>
													<Label for="marks12" md={3}>
														Percentage
													</Label>
													<Col md={9}>
														<MaskedInput
															mask={[
																/\d/,
																/\d/,
																".",
																/\d/,
																/\d/,
																"%",
															]}
															placeholder="__.__%"
															className="form-control"
															value={
																this.state
																	.marks12
															}
															onChange={(e) => {
																this.setState({
																	marks12:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>
												// FileUpload Here
												<FormGroup row>
													<Label for="cert12" md={3}>
														Certificate / Marks
														sheet
													</Label>
													<Col md={9}>
														<Input
															type="file"
															name="cert12"
															id="cert12"
															// placeholder="enter register no."
															value={
																this.state
																	.cert12
															}
															onChange={(e) => {
																this.setState({
																	cert12:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>
											</div>

											<div id="degree1">
												<h5 className="header-title mt-7 mb-2">
													Degree1
												</h5>

												<FormGroup row>
													<Label for="degree" md={3}>
														Degree Name
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="nameofdeg1"
															id="nameofdeg1"
															placeholder="enter name of the degree"
															value={
																this.state
																	.nameofdeg1
															}
															onChange={(e) => {
																this.setState({
																	nameofdeg1:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>

												<FormGroup row>
													<Label
														for="boarddeg1"
														md={3}
													>
														University / Board
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="boarddeg1"
															id="boarddeg1"
															placeholder="enter board"
															value={
																this.state
																	.boarddeg1
															}
															onChange={(e) => {
																this.setState({
																	boarddeg1:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>

												<FormGroup
													onChange={(e) => {
														this.setState({
															degree1status:
																e.target.value,
														});
														if (
															this.state
																.degree1status ===
															"Passed"
														)
															this.setState({
																binDeg1: true,
															});
														if (
															this.state
																.degree1status ===
															"Appearing"
														)
															this.setState({
																binDeg1: false,
															});
														console.log(
															e.target.value
														);
													}}
												>
													<Row>
														<Col md={4}>
															<Label>
																Status
															</Label>
														</Col>
														<Col md={8}>
															<Row>
																<Col md={6}>
																	<Input
																		type="radio"
																		name="degree1status"
																		value="Passed"
																	/>
																	Passed
																</Col>
																<Col md={6}>
																	<Input
																		type="radio"
																		name="degree1status"
																		value="Appearing"
																	/>
																	Appearing
																</Col>
															</Row>
														</Col>
													</Row>
												</FormGroup>

												<FormGroup row>
													<Label for="regdeg1" md={3}>
														Register No.
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="regdeg1"
															id="regdeg1"
															placeholder="enter register no."
															disabled={
																this.state
																	.binDeg1
															}
															value={
																this.state
																	.regdeg1
															}
															onChange={(e) => {
																this.setState({
																	regdeg1:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>

												<FormGroup row>
													<Label for="yopdeg1" md={3}>
														Year of Pass out
													</Label>
													<Col md={9}>
														<Input
															type="select"
															name="yopdeg1"
															id="yopdeg1"
															placeholder="enter year of pass out"
															disabled={
																this.state
																	.binDeg1
															}
															value={
																this.state
																	.yopdeg1
															}
															onChange={(e) => {
																this.setState({
																	yopdeg1:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														>
															<option></option>
															<option>
																1981
															</option>
															<option>
																1982
															</option>
															<option>
																1983
															</option>
															<option>
																1984
															</option>
															<option>
																1985
															</option>
															<option>
																1986
															</option>
															<option>
																1987
															</option>
															<option>
																1988
															</option>
															<option>
																1989
															</option>
															<option>
																1990
															</option>
															<option>
																1991
															</option>
															<option>
																1992
															</option>
															<option>
																1993
															</option>
															<option>
																1994
															</option>
															<option>
																1995
															</option>
															<option>
																1996
															</option>
															<option>
																1997
															</option>
															<option>
																1998
															</option>
															<option>
																1999
															</option>
															<option>
																2000
															</option>
															<option>
																2001
															</option>
															<option>
																2002
															</option>
															<option>
																2003
															</option>
															<option>
																2004
															</option>
															<option>
																2005
															</option>
															<option>
																2006
															</option>
															<option>
																2007
															</option>
															<option>
																2008
															</option>
															<option>
																2009
															</option>
															<option>
																2010
															</option>
															<option>
																2011
															</option>
															<option>
																2012
															</option>
															<option>
																2013
															</option>
															<option>
																2014
															</option>
															<option>
																2015
															</option>
															<option>
																2016
															</option>
															<option>
																2017
															</option>
															<option>
																2018
															</option>
															<option>
																2019
															</option>
															<option>
																2020
															</option>
														</Input>
													</Col>
												</FormGroup>

												<FormGroup row>
													<Label
														for="marksdeg1"
														md={3}
													>
														Percentage
													</Label>
													<Col md={9}>
														<MaskedInput
															mask={[
																/\d/,
																/\d/,
																".",
																/\d/,
																/\d/,
																"%",
															]}
															placeholder="__.__%"
															disabled={
																this.state
																	.binDeg1
															}
															className="form-control"
															value={
																this.state
																	.marksdeg1
															}
															onChange={(e) => {
																this.setState({
																	marksdeg1:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>

												<FormGroup row>
													<Label
														for="certdeg1"
														md={3}
													>
														Certificate / Marks
														sheet
													</Label>
													<Col md={9}>
														<Input
															type="file"
															name="certdeg1"
															id="certdeg1"
															disabled={
																this.state
																	.binDeg1
															}
															// placeholder="enter register no."
															value={
																this.state
																	.certdeg1
															}
															onChange={(e) => {
																this.setState({
																	certdeg1:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>
											</div>

											<FormGroup
												onChange={(e) => {
													this.setState({
														degree2present:
															e.target.value,
													});
													if (
														this.state
															.degree2present ===
														"Yes"
													)
														this.setState({
															binDeg2pres: true,
														});
													if (
														this.state
															.degree2present ===
														"No"
													)
														this.setState({
															binDeg2pres: false,
														});
													console.log(e.target.value);
												}}
											>
												<Row>
													<Col md={4}>
														<Label>
															Add Another Degree
															Details?
														</Label>
													</Col>
													<Col md={8}>
														<Row>
															<Col md={6}>
																<Input
																	type="radio"
																	name="degree2present"
																	value="Yes"
																/>
																Yes
															</Col>
															<Col md={6}>
																<Input
																	type="radio"
																	name="degree2present"
																	value="No"
																/>
																No
															</Col>
														</Row>
													</Col>
												</Row>
											</FormGroup>

											<div id="degree2">
												<h5 className="header-title mt-7 mb-2">
													Degree 2
												</h5>

												<FormGroup row>
													<Label for="degree" md={3}>
														Degree Name
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="nameofdeg2"
															id="nameofdeg2"
															placeholder={
																this.state
																	.binDeg2pres
																	? ""
																	: "enter name of the degree"
															}
															disabled={
																this.state
																	.binDeg2pres
															}
															value={
																this.state
																	.nameofdeg2
															}
															onChange={(e) => {
																this.setState({
																	nameofdeg2:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>

												<FormGroup row>
													<Label
														for="boarddeg2"
														md={3}
													>
														University / Board
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="boarddeg2"
															id="boarddeg2"
															placeholder={
																this.state
																	.binDeg2pres
																	? ""
																	: "enter board"
															}
															disabled={
																this.state
																	.binDeg2pres
															}
															value={
																this.state
																	.boarddeg2
															}
															onChange={(e) => {
																this.setState({
																	boarddeg2:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>

												<FormGroup
													disabled={
														this.state.binDeg2pres
													}
													onChange={(e) => {
														this.setState({
															degree2status:
																e.target.value,
														});
														if (
															this.state
																.degree2status ===
															"Passed"
														)
															this.setState({
																binDeg2: true,
															});
														if (
															this.state
																.degree2status ===
															"Appearing"
														)
															this.setState({
																binDeg2: false,
															});
														console.log(
															e.target.value
														);
													}}
												>
													<Row>
														<Col md={4}>
															<Label>
																Status
															</Label>
														</Col>
														<Col md={8}>
															<Row>
																<Col md={6}>
																	<Input
																		type="radio"
																		name="degree2status"
																		value="Passed"
																		disabled={
																			this
																				.state
																				.binDeg2pres
																		}
																	/>
																	Passed
																</Col>
																<Col md={6}>
																	<Input
																		type="radio"
																		name="degree2status"
																		value="Appearing"
																		disabled={
																			this
																				.state
																				.binDeg2pres
																		}
																	/>
																	Appearing
																</Col>
															</Row>
														</Col>
													</Row>
												</FormGroup>

												<FormGroup row>
													<Label for="regdeg2" md={3}>
														Register No.
													</Label>
													<Col md={9}>
														<Input
															type="text"
															name="regdeg2"
															id="regdeg2"
															placeholder={
																this.state
																	.binDeg2pres
																	? ""
																	: "enter register no"
															}
															disabled={
																this.state
																	.binDeg2 ||
																this.state
																	.binDeg2pres
															}
															value={
																this.state
																	.regdeg2
															}
															onChange={(e) => {
																this.setState({
																	regdeg2:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>

												<FormGroup row>
													<Label for="yopdeg2" md={3}>
														Year of Pass out
													</Label>
													<Col md={9}>
														<Input
															type="select"
															name="yopdeg2"
															id="yopdeg2"
															placeholder={
																this.state
																	.binDeg2pres
																	? ""
																	: "enter year of pass out"
															}
															disabled={
																this.state
																	.binDeg2 ||
																this.state
																	.binDeg2pres
															}
															value={
																this.state
																	.yopdeg2
															}
															onChange={(e) => {
																this.setState({
																	yopdeg2:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														>
															<option></option>
															<option>
																1981
															</option>
															<option>
																1982
															</option>
															<option>
																1983
															</option>
															<option>
																1984
															</option>
															<option>
																1985
															</option>
															<option>
																1986
															</option>
															<option>
																1987
															</option>
															<option>
																1988
															</option>
															<option>
																1989
															</option>
															<option>
																1990
															</option>
															<option>
																1991
															</option>
															<option>
																1992
															</option>
															<option>
																1993
															</option>
															<option>
																1994
															</option>
															<option>
																1995
															</option>
															<option>
																1996
															</option>
															<option>
																1997
															</option>
															<option>
																1998
															</option>
															<option>
																1999
															</option>
															<option>
																2000
															</option>
															<option>
																2001
															</option>
															<option>
																2002
															</option>
															<option>
																2003
															</option>
															<option>
																2004
															</option>
															<option>
																2005
															</option>
															<option>
																2006
															</option>
															<option>
																2007
															</option>
															<option>
																2008
															</option>
															<option>
																2009
															</option>
															<option>
																2010
															</option>
															<option>
																2011
															</option>
															<option>
																2012
															</option>
															<option>
																2013
															</option>
															<option>
																2014
															</option>
															<option>
																2015
															</option>
															<option>
																2016
															</option>
															<option>
																2017
															</option>
															<option>
																2018
															</option>
															<option>
																2019
															</option>
															<option>
																2020
															</option>
														</Input>
													</Col>
												</FormGroup>

												<FormGroup row>
													<Label
														for="marksdeg2"
														md={3}
													>
														Percentage
													</Label>
													<Col md={9}>
														<MaskedInput
															mask={[
																/\d/,
																/\d/,
																".",
																/\d/,
																/\d/,
																"%",
															]}
															placeholder={
																this.state
																	.binDeg2pres
																	? ""
																	: "__.__%"
															}
															disabled={
																this.state
																	.binDeg2 ||
																this.state
																	.binDeg2pres
															}
															className="form-control"
															value={
																this.state
																	.marksdeg2
															}
															onChange={(e) => {
																this.setState({
																	marksdeg2:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>

												<FormGroup row>
													<Label
														for="certdeg2"
														md={3}
													>
														Certificate / Marks
														sheet
													</Label>
													<Col md={9}>
														<Input
															type="file"
															name="certdeg2"
															id="certdeg2"
															disabled={
																this.state
																	.binDeg2 ||
																this.state
																	.binDeg2pres
															}
															// placeholder="enter register no."
															value={
																this.state
																	.certdeg2
															}
															onChange={(e) => {
																this.setState({
																	certdeg2:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														/>
													</Col>
												</FormGroup>
											</div>

											<ul className="list-inline wizard mb-0">
												<li className="previous list-inline-item">
													<Button
														onClick={previous}
														color="info"
													>
														Previous
													</Button>
												</li>
												<li className="next list-inline-item float-right">
													<Button
														onClick={next}
														color="success"
													>
														Next
													</Button>
												</li>
											</ul>
										</Form>
									)}
								/>
								<Step
									id="dumbledore"
									render={({ next, previous }) => (
										<Form>
											<h4 className="header-title mt-0 mb-4">
												Test Details
											</h4>

											<FormGroup>
												<Row>
													<Col md={4}>
														<Label>
															Select Papers
														</Label>
													</Col>
													<Col md={8}>
														<Input
															type="select"
															name="papers"
															id="papers"
															placeholder="Select papers"
															value={
																this.state
																	.papers
															}
															onChange={(e) => {
																this.setState({
																	papers:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
																if (
																	this.state
																		.papers ===
																	"Paper 1"
																)
																	this.setState(
																		{
																			binPaper2: false,
																		}
																	);
																else
																	this.setState(
																		{
																			binPaper2: true,
																		}
																	);
															}}
														>
															<option></option>
															<option>
																Paper 1
															</option>
															<option>
																Paper 2
															</option>
															<option>
																Both
															</option>
															{/* <option></option> */}
														</Input>
													</Col>
												</Row>
											</FormGroup>

											<FormGroup
												disabled={this.state.binPaper2}
												onChange={(e) => {
													this.setState({
														paper2subj:
															e.target.value,
													});
													console.log(e.target.value);
												}}
											>
												<Row>
													<Col md={4}>
														<Label>
															Select Paper 2
															Subject
														</Label>
													</Col>
													<Col md={8}>
														<Row>
															<Col md={6}>
																<Input
																	type="radio"
																	name="paper2subj"
																	value="Maths_Science"
																	disabled={
																		this
																			.state
																			.binPaper2
																	}
																/>
																Mathematics and
																Science
															</Col>
															<Col md={6}>
																<Input
																	type="radio"
																	name="paper2subj"
																	value="Social_Science"
																	disabled={
																		this
																			.state
																			.binPaper2
																	}
																/>
																Social Science
															</Col>
														</Row>
													</Col>
												</Row>
											</FormGroup>

											<FormGroup>
												<Row>
													<Col md={4}>
														<Label>
															Select Language 1
														</Label>
													</Col>
													<Col md={8}>
														<Input
															type="select"
															name="language1"
															id="language1"
															placeholder="Select language 1"
															value={
																this.state
																	.language1
															}
															onChange={(e) => {
																this.setState({
																	language1:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														>
															<option></option>
															<option>
																Nepali
															</option>
															<option>
																Bhutia
															</option>
															<option>
																Lepcha
															</option>
															<option>
																Hindi
															</option>
															<option>
																Limboo
															</option>
															{/* <option></option> */}
														</Input>
													</Col>
												</Row>
											</FormGroup>

											<FormGroup>
												<Row>
													<Col md={4}>
														<Label>
															Select Language 2
														</Label>
													</Col>
													<Col md={8}>
														<Input
															type="select"
															name="language2"
															id="language2"
															placeholder="Select language 2"
															value={
																this.state
																	.language2
															}
															onChange={(e) => {
																this.setState({
																	language2:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														>
															<option></option>
															<option
																disabled={
																	this.state
																		.language1 ===
																	"Nepali"
																}
															>
																Nepali
															</option>
															<option
																disabled={
																	this.state
																		.language1 ===
																	"Bhutia"
																}
															>
																Bhutia
															</option>
															<option
																disabled={
																	this.state
																		.language1 ===
																	"Lepcha"
																}
															>
																Lepcha
															</option>
															<option
																disabled={
																	this.state
																		.language1 ===
																	"Hindi"
																}
															>
																Hindi
															</option>
															<option
																disabled={
																	this.state
																		.language1 ===
																	"Limboo"
																}
															>
																Limboo
															</option>
															{/* <option></option> */}
														</Input>
													</Col>
												</Row>
											</FormGroup>

											<FormGroup>
												<Row>
													<Col md={4}>
														<Label>
															Exam Center 1st
															Preference
														</Label>
													</Col>
													<Col md={8}>
														<Input
															type="select"
															name="center1"
															id="center1"
															placeholder="Select center 1"
															value={
																this.state
																	.center1
															}
															onChange={(e) => {
																this.setState({
																	center1:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														>
															<option></option>
															<option>
																center1
															</option>
															<option>
																center2
															</option>
															<option>
																center3
															</option>
															{/* <option></option> */}
														</Input>
													</Col>
												</Row>
											</FormGroup>

											<FormGroup>
												<Row>
													<Col md={4}>
														<Label>
															Exam Center 2nd
															Preference
														</Label>
													</Col>
													<Col md={8}>
														<Input
															type="select"
															name="center2"
															id="center2"
															placeholder="Select center 2"
															value={
																this.state
																	.center2
															}
															onChange={(e) => {
																this.setState({
																	center2:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														>
															<option></option>
															<option>
																center1
															</option>
															<option>
																center2
															</option>
															<option>
																center3
															</option>
															{/* <option></option> */}
														</Input>
													</Col>
												</Row>
											</FormGroup>

											<FormGroup>
												<Row>
													<Col md={4}>
														<Label>
															Exam Center 3rd
															Preference
														</Label>
													</Col>
													<Col md={8}>
														<Input
															type="select"
															name="center3"
															id="center3"
															placeholder="Select center 3"
															value={
																this.state
																	.center3
															}
															onChange={(e) => {
																this.setState({
																	center3:
																		e.target
																			.value,
																});
																console.log(
																	e.target
																		.value
																);
															}}
														>
															<option></option>
															<option>
																center1
															</option>
															<option>
																center2
															</option>
															<option>
																center3
															</option>
															{/* <option></option> */}
														</Input>
													</Col>
												</Row>
											</FormGroup>

											<ul className="list-inline wizard mb-0">
												<li className="previous list-inline-item">
													<Button
														onClick={previous}
														color="info"
													>
														Previous
													</Button>
												</li>

												<li className="next list-inline-item float-right">
													<Button
														onClick={next}
														color="success"
													>
														Next
													</Button>{" "}
												</li>
											</ul>
										</Form>
									)}
								/>
								<Step
									id="demo1"
									render={({ next, previous }) => (
										<Form>
											<h4 className="header-title mt-0 mb-4">
												Photo and Sign
											</h4>

											<React.Fragment>
												<Row>
													<Col>
														<Card>
															<CardBody>
																<h4 className="header-title mt-0 mb-1">
																	Passport
																	size photo
																	Upload
																</h4>
																<p className="sub-header">
																	(3 kb – 40
																	kb (140
																	pixel height
																	X 110 pixel
																	) JPG format
																	)
																</p>

																<FileUploader
																	value={
																		this
																			.state
																			.photo
																	}
																	onFileUpload={(
																		files
																	) => {
																		this.setState(
																			{
																				photo:
																					files[0],
																			}
																		);
																		console.log(
																			files[0]
																		);
																		// console.log(files);
																	}}
																/>
															</CardBody>
														</Card>
													</Col>
												</Row>
											</React.Fragment>

											<React.Fragment>
												<Row>
													<Col>
														<Card>
															<CardBody>
																<h4 className="header-title mt-0 mb-1">
																	Signature
																	Upload
																</h4>
																<p className="sub-header">
																	(1 kb – 40
																	kb (110
																	pixel height
																	X 140 pixel)
																	JPG format)
																</p>

																<FileUploader
																	value={
																		this
																			.state
																			.sign
																	}
																	onFileUpload={(
																		files
																	) => {
																		this.setState(
																			{
																				sign:
																					files[0],
																			}
																		);
																		console.log(
																			files[0]
																		);
																		// console.log(files);
																	}}
																/>
															</CardBody>
														</Card>
													</Col>
												</Row>
											</React.Fragment>

											<ul className="list-inline wizard mb-0">
												<li className="previous list-inline-item">
													<Button
														onClick={previous}
														color="info"
													>
														Previous
													</Button>
												</li>

												<li className="next list-inline-item float-right">
													<Button
														onClick={next}
														color="success"
													>
														Next
													</Button>{" "}
												</li>
											</ul>
										</Form>
									)}
								/>

								<Step
									id="demo2"
									render={({ previous }) => (
										<Row>
											<Col sm={12}>
												<div className="text-center">
													<h2 className="mt-0">
														<i className="mdi mdi-check-all"></i>
													</h2>
													<h3 className="mt-0">
														Declaration
													</h3>

													<p className="w-75 mb-2 mx-auto">
														I hereby declare that
														the information given in
														this application is true
														and correct to the best
														of my knowledge and
														belief. In case any
														information given in
														this application proves
														to be false or
														incorrect, I shall be
														responsible for the
														consequences. I also
														declare that if any
														information provided by
														me is found false, my
														candidature may be
														rejected at any point of
														time.
													</p>

													<div className="mb-3">
														<CustomInput
															type="checkbox"
															id="exampleCustomCheckbox"
															label="I agree with all the Terms and Conditions"
														/>
													</div>
												</div>
											</Col>

											<Col sm={12}>
												<ul className="list-inline wizard mb-0">
													<li className="previous list-inline-item">
														<Button
															onClick={previous}
															color="info"
														>
															Previous
														</Button>
													</li>
													<li className="next list-inline-item float-right">
														<Button
															onClick={
																this.sendData
															}
															color="success"
														>
															Submit
														</Button>
													</li>
												</ul>
											</Col>
										</Row>
									)}
								/>
							</Steps>
						</Wizard>
					</CardBody>
				</Card>
			</div>
		);
	}
}
