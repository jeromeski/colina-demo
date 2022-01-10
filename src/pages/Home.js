import React, { Fragment } from "react";
import MetaData from "../components/MetaData";

import PlaceHolderParagraph from "../components/PlaceHolderParagraph";
import Header from "../layout/Header/index.js";
// import { getClientWidth } from "../utilities/getClientWidth";

const Home = () => {
	return (
		<Fragment>
			<MetaData title="Home Page" />
			<div className="wrapper">
				<Header />
			</div>
			<div>
				<PlaceHolderParagraph />
			</div>
		</Fragment>
	);
};

export default Home;
