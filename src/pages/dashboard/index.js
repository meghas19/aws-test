import React, { Component } from "react";
import {
	Row,
	Col,
	UncontrolledButtonDropdown,
	DropdownMenu,
	DropdownItem,
	DropdownToggle,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import {
	ChevronDown,
	Mail,
	Printer,
	File,
	Users,
	Image,
	ShoppingBag,
} from "react-feather";

import { getLoggedInUser } from "../../helpers/authUtils";
import Loader from "../../components/Loader";
import OverviewWidget from "../../components/OverviewWidget";

import Statistics from "./Statistics";
import RevenueChart from "./RevenueChart";
import TargetChart from "./TargetChart";
import SalesChart from "./SalesChart";
import Orders from "./Orders";
import Performers from "./Performers";
import Tasks from "./Tasks";
import Chat from "./Chat";

class Dashboard extends Component {
	constructor(props) {
		super(props);

		var oneWeekAgo = new Date();
		oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

		this.state = {
			user: getLoggedInUser(),
			filterDate: [oneWeekAgo, new Date()],
		};
	}

	render() {
		return (
			<React.Fragment>
				<div style={{ textAlign: "center" }}>
					<h1>Welcome to Home </h1>
				</div>
			</React.Fragment>
		);
	}
}

export default Dashboard;
