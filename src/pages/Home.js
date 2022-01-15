import React, { Fragment } from "react";
import MetaData from "../components/MetaData";
// import FrontPageSlider from "../components/FrontPageSlider";

import PlaceHolderParagraph from "../components/PlaceHolderParagraph";

const Home = () => {
	return (
		<Fragment>
			<MetaData title="Home Page" />
			<div>

				<PlaceHolderParagraph />
			</div>
		</Fragment>
	);
};

export default Home;
