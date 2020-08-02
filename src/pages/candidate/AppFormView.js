import React, { Component } from "react";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import logo from "../../assets/images/logo.png";

import PageTitle from "../../components/PageTitle";
import { storage, auth, db } from "../../helpers/firebase";

export default class test extends Component {
	state = {
		registerNumber: 0,
		candidateName: "",
		category: "",
		gender: "",
		father_fname: "",
		father_lname: "",
		mother_fname: "",
		mother_lname: "",
		resultDate: "",

		currentAppNumber: "202000006",
		email: "",
		phone: "",
		dob: "",
		address: "",
		State: "",
		district: "",
		pincode: "",
		disability: "",
		disability_type: "",
		binDis: false,
		reappearing: "",
		binReapper: false,
		reappearNumber: "",

		paymentStatus: "",

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
	};

	componentDidMount = () => {
		var uidVar = localStorage.getItem("uid");
		this.setState({ uid: uidVar });
		console.log("USER ID", this.state.uid);
		db
			.collection("users")
			.doc(localStorage.getItem("uid"))
			.get()
			.then((res) => {
				this.setState({
					currentAppNumber: res.data().currentAppNumber,
				});
				this.setState({ fname: res.data().fname });
				this.setState({ email: res.data().email });
				this.setState({ phone: res.data().phone });

				console.log("users WORKS", res.data());
			}).catch = (err) => {
			console.log("error");
		};
		db
			.collection("Candidate_Profile")
			.doc(localStorage.getItem("uid"))
			.get()
			.then((res) => {
				this.setState({ father_fname: res.data().father_fname });
				this.setState({ father_lname: res.data().father_lname });
				this.setState({ mother_fname: res.data().mother_fname });
				this.setState({ mother_lname: res.data().mother_lname });
				this.setState({ gender: res.data().gender });
				this.setState({ dob: res.data().dob });
				this.setState({ address: res.data().address });
				this.setState({ category: res.data().category });
				this.setState({ State: res.data().State });
				this.setState({ district: res.data().district });
				this.setState({ pincode: res.data().pincode });

				console.log("Candidate_Profile WORKS", res.data());
			}).catch = (err) => {
			console.log("error");
		};
		db
			.collection("Candidate_Exam_Details")
			.doc(localStorage.getItem("uid"))
			.get()
			.then((res) => {
				this.setState({ disability: res.data().disability });
				this.setState({ disability_type: res.data().disability_type });
				this.setState({ paper: res.data().paper });
				this.setState({ language1: res.data().language1 });
				this.setState({ language2: res.data().language2 });
				this.setState({ paper2subj: res.data().paper2subj });
				this.setState({ center1: res.data().center1 });
				this.setState({ center2: res.data().center2 });
				this.setState({ center3: res.data().center3 });

				console.log("Candidate_Exam_Details WORKS", res.data());
			}).catch = (err) => {
			console.log("error");
		};
		db
			.collection("Candidate_Education")
			.doc(localStorage.getItem("uid"))
			.get()
			.then((res) => {
				this.setState({ board10: res.data().board10 });
				this.setState({ reg10: res.data().reg10 });
				this.setState({ yop10: res.data().yop10 });
				this.setState({ marks10: res.data().marks10 });
				this.setState({ board12: res.data().board12 });
				this.setState({ reg12: res.data().reg12 });
				this.setState({ yop12: res.data().yop12 });
				this.setState({ marks12: res.data().marks12 });
				this.setState({ nameofdeg1: res.data().nameofdeg1 });
				this.setState({ boarddeg1: res.data().boarddeg1 });
				this.setState({ degree1status: res.data().degree1status });
				this.setState({ regdeg1: res.data().regdeg1 });
				this.setState({ yopdeg1: res.data().yopdeg1 });
				this.setState({ marksdeg1: res.data().marksdeg1 });
				this.setState({ degree2present: res.data().degree2present });
				this.setState({ nameofdeg2: res.data().nameofdeg2 });
				this.setState({ boarddeg2: res.data().boarddeg2 });
				this.setState({ degree2status: res.data().degree2status });
				this.setState({ regdeg2: res.data().regdeg2 });
				this.setState({ yopdeg2: res.data().yopdeg2 });
				this.setState({ marksdeg2: res.data().marksdeg2 });

				console.log("Candidate_Education WORKS", res.data());
			}).catch = (err) => {
			console.log("error");
		};
	};

	render() {
		return (
			<React.Fragment>
				<Row className="page-title d-print-none">
					<Col md={12}>
						<PageTitle
							breadCrumbItems={[
								{ label: "Pages", path: "/pages/invoice" },
								{
									label: "Invoice",
									path: "/pages/invoice",
									active: true,
								},
							]}
							title={"Result"}
						/>
					</Col>
				</Row>

				<Row>
					<Col>
						<Card>
							<CardBody>
								<div className="clearfix">
									<Row>
										<Col md={2}>
											<div className="m-0 mt-2 mb-4 text-center font-weight-bold">
												<img
													src={logo}
													alt=""
													height="80"
												/>
												{/* <h4 className="m-0 d-inline align-middle">Shreyu</h4> */}
												{/* <address className="pl-2 mt-2">
                                                {invoiceDetail.address.line_1}<br />
                                                {invoiceDetail.address.city}, {invoiceDetail.address.state} {invoiceDetail.address.zip}<br />
                                                <abbr title="Phone">P:</abbr> {invoiceDetail.address.phone}
                                            </address> */}
											</div>
										</Col>

										<Col md={10}>
											<div>
												{/* <h4 className="m-0 d-inline align-middle">SIKKIM HUMAN RESOURCE DEVELOPMENT DEPARTMENT</h4> */}
												<h4 className="m-0 mt-4 text-center">
													SIKKIM HUMAN RESOURCE
													DEVELOPMENT DEPARTMENT
												</h4>
												<h3 className="m-0 mt-2 mb-2 text-center font-weight-bold">
													SIKKIM TEACHER ELIGIBILITY
													TEST - JULY 2020
												</h3>
												{/* <h4 className="m-0 d-print-none font-size-20 text-center">(STET - JULY 2020)</h4> */}
												{/* <dl className="row mb-2 mt-3">
                                                <dt className="col-sm-3 font-weight-normal">Invoice Number :</dt>
                                                <dd className="col-sm-9 font-weight-normal">#sh1001</dd>

                                                <dt className="col-sm-3 font-weight-normal">Invoice Date :</dt>
                                                <dd className="col-sm-9 font-weight-normal">Jul 17, 2019</dd>

                                                <dt className="col-sm-3 font-weight-normal">Due Date :</dt>
                                                <dd className="col-sm-9 font-weight-normal">Jul 27, 2019</dd>
                                            </dl> */}
											</div>
										</Col>
									</Row>
								</div>

								<hr style={{ border: "1px solid" }} />
								{/* <td style={{border: "1px solid #000"}}>24/07/2020</td> */}

								<div className="clearfix">
									<Row>
										<Col md={12}>
											<div>
												{/* <h4 className="m-0 d-inline align-middle">SIKKIM HUMAN RESOURCE DEVELOPMENT DEPARTMENT</h4> */}
												{/* <h4 className="m-0 mt-4 text-center">SIKKIM HUMAN RESOURCE DEVELOPMENT DEPARTMENT</h4> */}
												<h2 className="m-0 mt-2 mb-4 text-center font-weight-bold">
													APPLICATION FORM
												</h2>
											</div>
										</Col>
									</Row>
								</div>

								<h3 className="m-0 mt-4 mb-4 text-center font-weight-bold">
									PERSONAL DETAILS
								</h3>

								<Row>
									<Col md={8}>
										<dl className="row mb-2 mt-3">
											<dt className="mb-4 col-sm-3 font-weight-bold">
												Application No. :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.currentAppNumber}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Candidate Name :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.fname}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Email :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.email}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Phone No. :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.phone}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Gender :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.gender}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Father's Name :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.father_fname +
													" " +
													this.state.father_lname}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Mother's Name :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.mother_fname +
													" " +
													this.state.mother_lname}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Category :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.category}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Date of Birth :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.dob}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Disability :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.disability}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Disability Type :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.disability_type}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Reappearing :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.reappearing}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Previous Application No. :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.reappearNumber}
											</dd>
										</dl>
									</Col>
									<Col md={4}>
										<div className="table-responsive text-center">
											<table
												className="table mt-4 table-centered"
												style={{
													border: "2px solid #000",
												}}
											>
												<tr>
													<td
														className="md-2 font-weight-bold"
														style={{
															border:
																"1px solid #000",
															height: "230px",
														}}
													>
														Photograph
														<br />
														<img
															src={logo}
															alt=""
															width="auto"
															height="100%"
														/>
													</td>
												</tr>
											</table>
											<table
												className="table mt-4 table-centered"
												style={{
													border: "2px solid #000",
												}}
											>
												<tr>
													<td
														className="md-2 font-weight-bold"
														style={{
															border:
																"1px solid #000",
															height: "150px",
														}}
													>
														Signature
														<br />
														<img
															src={logo}
															alt=""
															width="auto"
															height="100%"
														/>
													</td>
												</tr>
											</table>
										</div>
									</Col>
								</Row>

								<Row>
									<Col>
										<dl className="row mb-2 mt-3">
											<dt className="mb-4 col-sm-3 font-weight-bold">
												Address :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.address}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												District :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.district}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												State :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.State}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Pin Code :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.pincode}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Gender :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.gender}
											</dd>
										</dl>
									</Col>
								</Row>

								<Row>
									<Col>
										<dl className="row mb-2 mt-3">
											<dt className="mb-4 col-sm-3 font-weight-bold">
												Payment Status :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.paymentStatus}
											</dd>
										</dl>
									</Col>
								</Row>

								<h3 className="m-0 mt-4 mb-4 text-center font-weight-bold">
									EDUCATIONAL DETAILS
								</h3>

								<Row>
									<Col>
										<dl className="row mb-2 mt-3">
											<dt className="mb-4 col-sm-3 font-weight-bold">
												10th standard board :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.board10}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												10th standard register no. :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.reg10}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												10th standard year of passout :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.yop10}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												10th standard percentage :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.marks10}
											</dd>

											<br />

											<dt className="mb-4 col-sm-3 font-weight-bold">
												12th standard board :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.board12}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												12th standard register no. :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.reg12}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												12th standard year of passout :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.yop12}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												12th standard percentage :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.marks12}
											</dd>

											<br />

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 1 name :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.nameofdeg1}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 1 board :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.boarddeg1}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 1 completetion :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.degree1status}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 1 register no. :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.regdeg1}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 1 year of passout :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.yopdeg1}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 1 percentage :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.marksdeg1}
											</dd>

											<br />

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 2 name :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.nameofdeg2}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 2 board :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.boarddeg2}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 2 completetion :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.degree2status}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 2 register no. :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.regdeg2}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 2 year of passout :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.yopdeg2}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Degree 2 percentage :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.marksdeg2}
											</dd>

											<br />
										</dl>
									</Col>
								</Row>

								<h3 className="m-0 mt-4 mb-4 text-center font-weight-bold">
									TEST DETAILS
								</h3>

								<Row>
									<Col>
										<dl className="row mb-2 mt-3">
											<dt className="mb-4 col-sm-3 font-weight-bold">
												Papers :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.papers}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Language 1 :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.language1}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Language 2:
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.language2}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Paper 2 Subjects :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.paper2subj}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Preferred Location 1 :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.center1}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Preferred Location 2 :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.center2}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Preferred Location 3 :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.center3}
											</dd>
										</dl>
									</Col>
								</Row>

								<div className="mt-5 mb-1">
									<div className="text-right d-print-none">
										<Button
											color="primary"
											onClick={(e) => {
												window.print();
											}}
										>
											<i className="uil uil-print mr-1"></i>{" "}
											Print
										</Button>
										<a
											href="/"
											className="btn btn-info ml-1"
										>
											Submit
										</a>
									</div>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}
