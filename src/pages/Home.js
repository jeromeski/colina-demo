import React, { Fragment } from "react";
import FrontPageSlider from "../components/FrontPageSlider";
import MetaData from "../components/MetaData";
// import FrontPageSlider from "../components/FrontPageSlider";

import PlaceHolderParagraph from "../components/PlaceHolderParagraph";

const Home = () => {
	return (
		<Fragment>
			<MetaData title="Home Page" />
			<div>
				<FrontPageSlider />
				<PlaceHolderParagraph />
			</div>
		</Fragment>
	);
};

export default Home;
