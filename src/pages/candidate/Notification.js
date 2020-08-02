// @flow
import React, { Component } from "react";
import {
	Row,
	Col,
	Card,
	CardBody,
	Progress,
	UncontrolledTooltip,
	Button,
} from "reactstrap";

import { storage, auth, db } from "../../helpers/firebase";

class Projects extends Component {
	state = {
		notificationVar: [],
		new: "",
	};

	componentDidMount() {
		db.collection("Notifcations")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					var data = {
						subject: doc.data().subject,
						body: doc.data().body,
					};

					this.state.notificationVar.push(data);
				});
				let content = this.state.notificationVar.map((elem, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td className="font-weight-bold">{elem.subject}</td>
						<td>{elem.body}</td>
					</tr>
				));
				this.setState({ new: content });
				console.log("componentDidMount", this.state.notificationVar);
			});
	}

	render() {
		return (
			<>
				<Row className="page-title">
					<Col md={3} xl={6}>
						<h4 className="mb-1 mt-0">Notifications</h4>
					</Col>
				</Row>

				<Card>
					<CardBody>
						<Row>
							{console.log(
								"notificationVar",
								this.state.notificationVar
							)}

							<table class="table thead-dark table-striped">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Subject</th>
										<th scope="col">Body</th>
										{/* <th scope="col">Handle</th> */}
									</tr>
								</thead>
								<tbody>{this.state.new}</tbody>
							</table>
						</Row>
					</CardBody>
				</Card>
			</>
		);
	}
}

export default Projects;
