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



