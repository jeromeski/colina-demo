import React from "react";
import pageImg from "../../assets/images/header-1.jpg";
import Page from "../../layout/Page";
import PageHeader from "../../components/common/PageHeader";
import Container from "../../layout/Container";
import Row from "../../layout/Row";
import MainSection from "../../layout/MainSection";
import CardList from "../../components/common/CardList";
import roomCategories from "../../data/roomCategories";
import Card from "../../components/common/CardList/Card";

const RoomsCategory = () => {
	return (
		<Page>
			<PageHeader
				bgPageHeaderImg={pageImg}
				title={"Rooms & Suites"}
				subTitle={"At home while on the road. "}
			/>
			<MainSection className="rooms rooms-category">
				<Container>
					<Row>
						<CardList cards={roomCategories()} resourceName="card" itemComponent={Card} />
					</Row>
				</Container>
			</MainSection>
		</Page>
	);
};

export default RoomsCategory;
