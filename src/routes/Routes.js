import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

// layout HOC
import withLayout from "../components/Layout";
import { allFlattenRoutes as routes } from "./index";

import { db } from "../helpers/firebase";

const Routes = () => {
	const [isKeyAnswerAvailable, setIsKeyAnswerAvailable] = useState(false);
	const [isAdmitCardAvailable, setAdmitCardAvailable] = useState(false);
	const [isResultAvailable, setIsResultAvailable] = useState(false);

	useEffect(() => {
		var docRef = db
			.collection("Global_Variables")
			.doc("keyAnswersAvailable");

		docRef
			.get()
			.then(function (doc) {
				if (doc.exists) {
					// console.log(
					// 	"Document data:",
					// 	doc.data().isKeyAnswerAvailable
					// );
					setIsKeyAnswerAvailable(doc.data().isKeyAnswerAvailable);
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch(function (error) {
				console.log("Error getting document:", error);
			});
		var docRef = db
			.collection("Global_Variables")
			.doc("admitCardAvailable");

		docRef
			.get()
			.then(function (doc) {
				if (doc.exists) {
					console.log(
						"Document data:",
						doc.data().isKeyAnswerAvailable
					);
					isAdmitCardAvailable(doc.data().isAdmitCardAvailable);
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch(function (error) {
				console.log("Error getting document:", error);
			});
		var docRef = db
			.collection("Global_Variables")
			.doc("keyAnswersAvailable");

		docRef
			.get()
			.then(function (doc) {
				if (doc.exists) {
					console.log("Document data:", doc.data().isResultAvailable);
					setIsResultAvailable(doc.data().isResultAvailable);
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch(function (error) {
				console.log("Error getting document:", error);
			});
	}, []);

	return (
		<BrowserRouter>
			<Switch>
				{routes.map((route, index) => {
					// console.log("route is here", route.name);
					if (
						(route.name === "Key Answers" &&
							isKeyAnswerAvailable === false) ||
						(route.name === "Admit Card" &&
							isKeyAnswerAvailable === false) ||
						(route.name === "Result" && isResultAvailable === false)
					) {
						// console.log("fall here");
						return (
							!route.children && (
								<route.route
									key={index}
									path={route.path}
									roles={route.roles}
									exact={route.exact}
									component={withLayout((props) => {
										return <h1>Opps! No Data Found </h1>;
									})}
								></route.route>
							)
						);
					} else {
						return (
							!route.children && (
								<route.route
									key={index}
									path={route.path}
									roles={route.roles}
									exact={route.exact}
									component={withLayout((props) => {
										return <route.component {...props} />;
									})}
								></route.route>
							)
						);
					}
				})}
			</Switch>
		</BrowserRouter>
	);
};
// rendering the router with layout

export default Routes;
