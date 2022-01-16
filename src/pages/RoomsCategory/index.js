import React, { Fragment } from "react";
import pageImg from "../../assets/images/header-1.jpg";
import Page from "../../layout/Page";
import PageHeader from "../../components/common/PageHeader";
import Container from "../../layout/Container";
import Row from "../../layout/Row";
import MainSection from "../../layout/MainSection";
import CardList from "../../components/common/CardList";
import roomCategories from "../../data/roomCategories";
import CardOne from "../../components/common/CardList/CardOne";
import Wrapper from "../../layout/Wrapper";
import SectionHeader from "../../layout/SectionHeader";
import Stretcher from "../../components/common/Stretcher";
import facilities from "../../data/facilities";
import StretcherItem from "../../components/common/Stretcher/StretcherItem";
import SectionHeaderContent from '../../layout/SectionHeader/SectionHeaderContent';
// import CardListTwo from '../../components/common/CardListTwo';
import places from "../../data/places";
import CardTwo from '../../components/common/CardList/CardTwo';

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
							<CardList cards={roomCategories()} resourceName="card" itemComponent={CardOne} />
						</Row>
					</Container>
				</MainSection>
			</Page>
			<Wrapper className="stretcher-wrapper">
				<SectionHeader>
					<Container>
						<SectionHeaderContent content={content1}/>
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
            <SectionHeaderContent content={content2}/>
          </Container>
        </SectionHeader>
        <Container>
          <Row>
            <CardList 
              cards={places()}
              resourceName="card"
              itemComponent={CardTwo}
            />
          </Row>
        </Container>
      </Wrapper>
		</Fragment>
	);
};

export default RoomsCategory;

/*
<div className="section-header">
					<div className="container">
						<h2 className="title">
							<span>Near</span> by{" "}
							<a href="#" className="btn btn-sm btn-clean-dark">
								View all
							</a>
						</h2>
						<p>Here's a selection of ionic sites related to art, fashion and design.</p>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-8">
							<figure className="">
								<figcaption style="background-image:url(assets/images/activity-1.jpg)">
									<img src="assets/images/activity-1.jpg" alt="" />
								</figcaption>
								<a href="#" className="btn btn-clean" onclick="">
									Museums
								</a>
							</figure>
						</div>

						<div className="col-xs-6 col-md-4">
							<figure className="">
								<figcaption style="background-image:url(assets/images/activity-2.jpg)">
									<img src="assets/images/activity-2.jpg" alt="" />
								</figcaption>
								<a href="#" className="btn btn-clean">
									Nightlife
								</a>
							</figure>
						</div>

						<div className="col-xs-6 col-md-4">
							<figure>
								<figcaption style="background-image:url(assets/images/activity-3.jpg)">
									<img src="assets/images/activity-3.jpg" alt="" />
								</figcaption>
								<a href="#" className="btn btn-clean">
									Food &amp; drink
								</a>
							</figure>
						</div>

						<div className="col-xs-6 col-md-4">
							<figure className="">
								<figcaption style="background-image:url(assets/images/activity-4.jpg)">
									<img src="assets/images/activity-4.jpg" alt="" />
								</figcaption>
								<a href="#" className="btn btn-clean">
									Shopping
								</a>
							</figure>
						</div>

						<div className="col-xs-6 col-md-4">
							<figure className="">
								<figcaption style="background-image:url(assets/images/activity-5.jpg)">
									<img src="assets/images/activity-5.jpg" alt="" />
								</figcaption>
								<a href="#" className="btn btn-clean">
									The City
								</a>
							</figure>
						</div>
					</div>
				</div>
*/ 

