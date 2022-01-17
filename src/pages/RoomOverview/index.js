import React, { Fragment } from "react";
import PageHeader from "../../components/common/PageHeader";
import Page from "../../layout/Page";
import pageHeaderBg from "../../assets/images/header-1.jpg";
import Wrapper from "../../layout/Wrapper";
import SectionHeader from "../../layout/SectionHeader";
import Container from "../../layout/Container";
import SectionHeaderContent from "../../layout/SectionHeader/SectionHeaderContent";
import Stretcher from "../../components/common/Stretcher";
import StretcherItem from "../../components/common/Stretcher/StretcherItem";
import Row from "../../layout/Row";
import CardList from "../../components/common/CardList";
import facilities from "../../data/facilities";
import CardTwo from "../../components/common/CardList/CardTwo";
import places from "../../data/places";
import blogShortInfo from "../../data/blogShortInfo";
import CardThree from "../../components/common/CardList/CardThree";
import MainSection from "../../layout/MainSection";
import RoomOverviewDetails from "../../components/RoomOverviewDetails";

const content1 = {
	heading1: "Resort",
	heading2: "facilities",
	btnTitle: "Explore more",
	desc: "With the best luxury spa, salon and fitness experiences."
};

const content2 = {
	heading1: "Near",
	heading2: "by",
	btnTitle: "View all",
	desc: "Here's a selection of ionic sites related to art, fashion and design."
};

const content3 = {
	heading1: "Latest News",
	heading2: "",
	btnTitle: "Explore More",
	desc: "Events, place to go, tour info & more"
};

const RoomOverview = () => {
	return (
		<Fragment>
			<Page>
				<PageHeader
					bgPageHeaderImg={pageHeaderBg}
					title="Luxury Apartment"
					subTitle="Available from €199 per night."
				/>
				<MainSection className="room">
					<RoomOverviewDetails />
				</MainSection>
			</Page>
			<Wrapper className="blog blog-widget">
				<SectionHeader>
					<Container>
						<SectionHeaderContent content={content3} />
					</Container>
				</SectionHeader>
				<Container>
					<Row>
						<CardList cards={blogShortInfo()} resourceName="card" itemComponent={CardThree} />
					</Row>
				</Container>
			</Wrapper>
			<Wrapper className="stretcher-wrapper">
				<SectionHeader>
					<Container>
						<SectionHeaderContent content={content1} />
					</Container>
				</SectionHeader>
				<Stretcher
					facilities={facilities()}
					resourceName="facility"
					itemComponent={StretcherItem}
				/>
			</Wrapper>
			<Wrapper className="cards">
				<SectionHeader className="section-header">
					<Container>
						<SectionHeaderContent content={content2} />
					</Container>
				</SectionHeader>
				<Container>
					<Row>
						<CardList cards={places()} resourceName="card" itemComponent={CardTwo} />
					</Row>
				</Container>
			</Wrapper>
		</Fragment>
	);
};

export default RoomOverview;
