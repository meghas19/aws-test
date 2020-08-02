import React, { Component } from "react";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import logo from "../../assets/images/logo.png";

import PageTitle from "../../components/PageTitle";
import { storage, auth, db } from "../../helpers/firebase";

export default class test extends Component {
	state = {
		registerNumber: 202000006,
		candidateName: "",
		category: "",
		gender: "",
		father_fname: "",
		father_lname: "",
		mother_fname: "",
		mother_lname: "",
		resultDate: "",
	};

	componentDidMount = () => {
		db
			.collection("users")
			.doc(auth.currentUser.uid)
			.get()
			.then((res) => {
				this.setState({
					candidateName: res.data().fname + " " + res.data().lname,
				});
				console.log("users WORKS", res.data());
				console.log("USER NAME", this.state.candidateName);
			}).catch = (err) => {
			console.log("error");
		};
		db
			.collection("Candidate_Profile")
			.doc(auth.currentUser.uid)
			.get()
			.then((res) => {
				this.setState({ category: res.data().category });
				this.setState({ gender: res.data().gender });
				this.setState({ father_fname: res.data().father_fname });
				this.setState({ father_lname: res.data().father_lname });
				this.setState({ mother_fname: res.data().mother_fname });
				this.setState({ mother_lname: res.data().mother_lname });

				console.log("Candidate_Profile WORKS", res.data());
			}).catch = (err) => {
			console.log("error");
		};

		db
			.collection("Global_Variables")
			.doc("result")
			.get()
			.then((res) => {
				this.setState({ resultDate: res.data().resultDate });

				console.log("Global_Variables WORKS", res.data());
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
													ELIGIBILITY CERTIFICATE
												</h2>
											</div>
										</Col>
									</Row>
								</div>

								<Row>
									<Col md={8}>
										<dl className="row mb-2 mt-3">
											<dt className="mb-4 col-sm-3 font-weight-bold">
												Roll No. :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.registerNumber}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Candidate Name :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.candidateName}
											</dd>

											<dt className="mb-4 col-sm-3 font-weight-bold">
												Category :
											</dt>
											<dd className="mb-4 col-sm-9 font-weight-normal">
												{this.state.category}
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
										</div>
									</Col>
								</Row>

								<Row>
									<div className="table-responsive">
										<table
											className="table mt-4 text-center"
											style={{ border: "2px solid #000" }}
										>
											<tr>
												<td
													colspan="3"
													className="font-weight-bold text-center"
													style={{
														border:
															"2px solid #000",
													}}
												>
													Paper 1 (For Classes I to V)
													Primary Stage
												</td>
											</tr>
											<tr>
												<td
													className="font-weight-bold"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Subject
												</td>
												<td
													className="font-weight-bold"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Maximum Marks
												</td>
												<td
													className="font-weight-bold"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Marks Obtained
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Child Development and
													Pedagogy
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Mathematics
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Environemtal Studies
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													<Row>
														<Col md={3}>
															Language 1:
														</Col>
														<Col md={9}>
															English
														</Col>
													</Row>
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													<Row>
														<Col md={3}>
															Language 2:
														</Col>
														<Col md={9}>
															Sikkimese
														</Col>
													</Row>
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Total
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													150
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													125
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Result
												</td>
												<td
													colspan="2"
													className="ml-8 font-weight-bold text-center font-size-16"
													style={{
														border:
															"1px solid #000",
													}}
												>
													QUALIFIED
												</td>
											</tr>
										</table>
									</div>
								</Row>

								<Row>
									<div className="table-responsive">
										<table
											className="table mt-4 mb-4 text-center"
											style={{ border: "2px solid #000" }}
										>
											<tr>
												<td
													colspan="3"
													className="font-weight-bold text-center"
													style={{
														border:
															"2px solid #000",
													}}
												>
													Paper 2 (For Classes VI to
													VIII) Elementary Stage
												</td>
											</tr>
											<tr>
												<td
													className="font-weight-bold"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Subject
												</td>
												<td
													className="font-weight-bold"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Maximum Marks
												</td>
												<td
													className="font-weight-bold"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Marks Obtained
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Child Development and
													Pedagogy
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Mathematics
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Science
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													<Row>
														<Col md={3}>
															Language 1:
														</Col>
														<Col md={9}>
															English
														</Col>
													</Row>
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													<Row>
														<Col md={3}>
															Language 2:
														</Col>
														<Col md={9}>
															Sikkimese
														</Col>
													</Row>
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													30
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													25
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Total
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													150
												</td>
												<td
													style={{
														border:
															"1px solid #000",
													}}
												>
													125
												</td>
											</tr>
											<tr>
												<td
													className="ml-8 font-weight-bold text-left"
													style={{
														border:
															"1px solid #000",
													}}
												>
													Result
												</td>
												<td
													colspan="2"
													className="ml-8 font-weight-bold text-center font-size-16"
													style={{
														border:
															"1px solid #000",
													}}
												>
													QUALIFIED
												</td>
											</tr>
										</table>
									</div>
								</Row>

								<Row>
									<Col md={8}>
										<dl className="row mb-2 mt-3">
											{/* <dt className="mb-8 col-sm-3 font-weight-bold">Examination held on :</dt>
                                            <dd className="mb-2 col-sm-9 font-weight-normal">#sh1001</dd> */}

											<dt className="mb-2 col-sm-3 font-weight-bold">
												Result Declared on :
											</dt>
											<dd className="mb-2 col-sm-9 font-weight-normal">
												{this.state.resultDate}
											</dd>

											<dt className="mb-2 col-sm-3 font-weight-bold">
												Dated :
											</dt>
											<dd className="mb-2 col-sm-9 font-weight-normal">
												{Date.now()}
											</dd>
										</dl>
									</Col>
									<Col md={4}>
										<div className="table-responsive text-center">
											<table
												className="table mt-2 table-centered"
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
															height: "100px",
														}}
													>
														<img
															src={logo}
															alt=""
															width="auto"
															height="100%"
														/>
														<br />
														Director (STET)
													</td>
												</tr>
											</table>
										</div>
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
