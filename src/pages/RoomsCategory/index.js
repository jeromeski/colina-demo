import React, { Fragment } from "react";
import pageImg from "../../assets/images/header-1.jpg";
import Page from "../../layout/Page";
import PageHeader from "../../components/common/PageHeader";
import Container from "../../layout/Container";
import Row from "../../layout/Row";
import MainSection from "../../layout/MainSection";
import CardList from "../../components/common/CardList";
import roomCategories from "../../data/roomCategories";
import Card from "../../components/common/CardList/Card";
import Wrapper from "../../layout/Wrapper";
import Button from "../../components/common/Button";
import SectionHeader from "../../layout/SectionHeader";
import Stretcher from "../../components/common/Stretcher";
import facilities from "../../data/facilities";
import StretcherItem from "../../components/common/Stretcher/StretcherItem";

const RoomsCategory = () => {
	return (
		<Fragment>
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
			<Wrapper className="stretcher-wrapper">
				<SectionHeader>
					<Container>
						<h2 className="title">
							<span>Resort</span> facilities{" "}
							<Button className="btn btn-sm btn-clean-dark" title="Explore now">
								Explore more
							</Button>
						</h2>
						<p>With the best luxury spa, salon and fitness experiences</p>
					</Container>
				</SectionHeader>
				<Stretcher
					facilities={facilities()}
					resourceName="facility"
					itemComponent={StretcherItem}
				/>
			</Wrapper>
		</Fragment>
	);
};

export default RoomsCategory;
