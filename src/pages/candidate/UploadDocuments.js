import React, { Component } from "react";
import {
	Row,
	Col,
	Card,
	CardBody,
	Button,
	FormGroup,
	Label,
	Input,
} from "reactstrap";
import logo from "../../assets/images/logo.png";

import PageTitle from "../../components/PageTitle";
import { storage, auth, db } from "../../helpers/firebase";

export default class test extends Component {
	state = {
		file0: [],
		file1: [],
		file2: [],
		file3: [],
		file4: [],
		file5: [],
		uid: "",
	};

	componentDidMount = () => {
		this.state.uid = localStorage.getItem("uid");
		console.log(this.state.uid);
	};

	upload0 = () => {
		// alert(this.state.file, this.state.file.name);
		const uploadTask = storage
			.ref(`${this.state.uid}/${this.state.file0.name}`)
			.put(this.state.file0);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// progress function ...
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				// this.setState({ progress });
				console.log(progress);
			},
			(error) => {
				// Error function ...
				console.log(error);
			},
			() => {
				// complete function ...
				storage
					.ref(this.state.uid)
					.child(this.state.file0.name)
					.getDownloadURL()
					.then((url) => {
						console.log("url", url);
					});
			}
		);
	};

	upload1 = () => {
		// alert(this.state.file, this.state.file.name);
		const uploadTask = storage
			.ref(`${this.state.uid}/${this.state.file1.name}`)
			.put(this.state.file1);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// progress function ...
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				// this.setState({ progress });
				console.log(progress);
			},
			(error) => {
				// Error function ...
				console.log(error);
			},
			() => {
				// complete function ...
				storage
					.ref(this.state.uid)
					.child(this.state.file1.name)
					.getDownloadURL()
					.then((url) => {
						alert("url", url);
					});
			}
		);
	};

	upload2 = () => {
		// alert(this.state.file, this.state.file.name);
		const uploadTask = storage
			.ref(`${this.state.uid}/${this.state.file2.name}`)
			.put(this.state.file2);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// progress function ...
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				// this.setState({ progress });
				console.log(progress);
			},
			(error) => {
				// Error function ...
				console.log(error);
			},
			() => {
				// complete function ...
				storage
					.ref(this.state.uid)
					.child(this.state.file2.name)
					.getDownloadURL()
					.then((url) => {
						alert("url", url);
					});
			}
		);
	};

	upload3 = () => {
		// alert(this.state.file, this.state.file.name);
		const uploadTask = storage
			.ref(`${this.state.uid}/${this.state.file3.name}`)
			.put(this.state.file3);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// progress function ...
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				// this.setState({ progress });
				console.log(progress);
			},
			(error) => {
				// Error function ...
				console.log(error);
			},
			() => {
				// complete function ...
				storage
					.ref(this.state.uid)
					.child(this.state.file3.name)
					.getDownloadURL()
					.then((url) => {
						alert("url", url);
					});
			}
		);
	};

	upload4 = () => {
		// alert(this.state.file, this.state.file.name);
		const uploadTask = storage
			.ref(`${this.state.uid}/${this.state.file4.name}`)
			.put(this.state.file4);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// progress function ...
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				// this.setState({ progress });
				console.log(progress);
			},
			(error) => {
				// Error function ...
				console.log(error);
			},
			() => {
				// complete function ...
				storage
					.ref(this.state.uid)
					.child(this.state.file4.name)
					.getDownloadURL()
					.then((url) => {
						alert("url", url);
					});
			}
		);
	};

	upload5 = () => {
		// alert(this.state.file, this.state.file.name);
		const uploadTask = storage
			.ref(`${this.state.uid}/${this.state.file5.name}`)
			.put(this.state.file5);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// progress function ...
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				// this.setState({ progress });
				console.log(progress);
			},
			(error) => {
				// Error function ...
				console.log(error);
			},
			() => {
				// complete function ...
				storage
					.ref(this.state.uid)
					.child(this.state.file5.name)
					.getDownloadURL()
					.then((url) => {
						alert("url", url);
					});
			}
		);
	};

	render() {
		return (
			<React.Fragment>
				<h3 className="m-0 mt-4 mb-4 text-center font-weight-bold">
					Documents Upload
				</h3>
				<Row>
					<Col>
						<Card>
							<CardBody>
								<FormGroup row>
									<Label for="cert10" md={3}>
										10th Standard Certificate / Marks sheet
									</Label>
									<Col md={6}>
										<Input
											type="file"
											name="cert10"
											id="cert10"
											onChange={(e) =>
												this.setState({
													file0: e.target.files[0],
												})
											}
										/>
									</Col>
									<Col md={3}>
										<button
											className="btn btn-primary"
											type="submit"
											onClick={this.upload0}
										>
											{" "}
											Upload
										</button>
									</Col>
								</FormGroup>

								<FormGroup row>
									<Label for="cert12" md={3}>
										12th Standard Certificate / Marks sheet
									</Label>
									<Col md={6}>
										<Input
											type="file"
											name="cert12"
											id="cert12"
											onChange={(e) =>
												this.setState({
													file1: e.target.files[1],
												})
											}
										/>
									</Col>
									<Col md={3}>
										<button
											className="btn btn-primary"
											type="submit"
											onClick={this.upload1}
										>
											{" "}
											Upload
										</button>
									</Col>
								</FormGroup>

								<FormGroup row>
									<Label for="certdeg1" md={3}>
										Degree 1 Certificate / Marks sheet
									</Label>
									<Col md={6}>
										<Input
											type="file"
											name="certdeg1"
											id="certdeg1"
											onChange={(e) =>
												this.setState({
													file2: e.target.files[2],
												})
											}
										/>
									</Col>
									<Col md={3}>
										<button
											className="btn btn-primary"
											type="submit"
											onClick={this.upload2}
										>
											{" "}
											Upload
										</button>
									</Col>
								</FormGroup>

								<FormGroup row>
									<Label for="cert10" md={3}>
										Degree 2 Certificate / Marks sheet
									</Label>
									<Col md={6}>
										<Input
											type="file"
											name="certdeg2"
											id="certdeg2"
											onChange={(e) =>
												this.setState({
													file3: e.target.files[3],
												})
											}
										/>
									</Col>
									<Col md={3}>
										<button
											className="btn btn-primary"
											type="submit"
											onClick={this.upload3}
										>
											{" "}
											Upload
										</button>
									</Col>
								</FormGroup>

								<FormGroup row>
									<Label for="photo" md={3}>
										Photograph
									</Label>
									<Col md={6}>
										<Input
											type="file"
											name="photo"
											id="photo"
											onChange={(e) =>
												this.setState({
													file4: e.target.files[4],
												})
											}
										/>
									</Col>
									<Col md={3}>
										<button
											className="btn btn-primary"
											type="submit"
											onClick={this.upload4}
										>
											{" "}
											Upload
										</button>
									</Col>
								</FormGroup>

								<FormGroup row>
									<Label for="sign" md={3}>
										Signature
									</Label>
									<Col md={6}>
										<Input
											type="file"
											name="sign"
											id="sign"
											onChange={(e) =>
												this.setState({
													file5: e.target.files[5],
												})
											}
										/>
									</Col>
									<Col md={3}>
										<button
											className="btn btn-primary"
											type="submit"
											onClick={this.upload0}
										>
											{" "}
											Upload
										</button>
									</Col>
								</FormGroup>

								{/* <hr style={{ border: '1px solid' }} /> */}
								{/* <td style={{border: "1px solid #000"}}>24/07/2020</td> */}

								{/* <div className="mt-5 mb-1">
                                    <div className="text-right d-print-none">
                                        <Button
                                            color="primary"
                                            onClick={(e) => {
                                                window.print();
                                            }}>
                                            <i className="uil uil-print mr-1"></i> Print
                                        </Button>
                                        <a href="/" className="btn btn-info ml-1">
                                            Submit
                                        </a>
                                    </div>
                                </div> */}
							</CardBody>
						</Card>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}
