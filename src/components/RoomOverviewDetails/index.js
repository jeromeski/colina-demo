import React from "react";
import Container from "../../layout/Container";
import Row from "../../layout/Row";

const RoomOverviewDetails = () => {
	return (
		<div className="room-overview">
			<Container>
				<Row>
					<div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
						<div className="room-block room-aminities">
							<h2 className="title">Room amenities</h2>

							<div className="row">
								<div className="col-xs-6 col-sm-2">
									<figure>
										<figcaption>
											<span className="hotelicon hotelicon-air-condition"></span>
											<p>Aircondition</p>
										</figcaption>
									</figure>
								</div>
								<div className="col-xs-6 col-sm-2">
									<figure>
										<figcaption>
											<span className="hotelicon hotelicon-king-bed"></span>
											<p>1 Kingsize bed</p>
										</figcaption>
									</figure>
								</div>

								<div className="col-xs-6 col-sm-2">
									<figure>
										<figcaption>
											<span className="hotelicon hotelicon-guest"></span>
											<p>2 People</p>
										</figcaption>
									</figure>
								</div>
								<div className="col-xs-6 col-sm-2">
									<figure>
										<figcaption>
											<span className="hotelicon hotelicon-wifi"></span>
											<p>Internet</p>
										</figcaption>
									</figure>
								</div>
								<div className="col-xs-6 col-sm-2">
									<figure>
										<figcaption>
											<span className="hotelicon hotelicon-washer"></span>
											<p>Washer</p>
										</figcaption>
									</figure>
								</div>
								<div className="col-xs-6 col-sm-2">
									<figure>
										<figcaption>
											<span className="hotelicon hotelicon-roomservice"></span>
											<p>Room service</p>
										</figcaption>
									</figure>
								</div>
							</div>
						</div>
						<div className="room-block">
							<h2 className="title">Room overview</h2>
							<p>
								The Superior Rooms pay tribute to fashion and craftsmanship. The rooms are
								approximately 19m2 with views of Rue d'Alger and Jardin des Tuileries. The selection
								and pairing of materials has been carefully chosen to give you a cool experience.
								The super soft bed topper is simply extravagant! Every room is different but the
								colour palette uses unique and expertly matched hues. An openwork brass screen
								separates the bathroom from the bedroom. This original feature helps make every room
								your very own cosy and peaceful haven. Bathrobes, slippers and SOTHYS toiletries are
								provided in the bathroom to pamper you.
							</p>
						</div>
						<div className="room-block">
							<h2 className="title">House rules</h2>

							<div className="box">
								<div className="row">
									<div className="col-md-4">
										<p>
											<strong>Check-In</strong>
										</p>
									</div>
									<div className="col-md-8">
										<p>14:00 - 22:00</p>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="row">
									<div className="col-md-4">
										<p>
											<strong>Check-out</strong>
										</p>
									</div>
									<div className="col-md-8">
										<p>14:00 - 22:00</p>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="row">
									<div className="col-md-4">
										<p>
											<strong>Luggage storage</strong>
										</p>
									</div>
									<div className="col-md-8">
										<p>14:00 - 22:00</p>
									</div>
								</div>
							</div>

							<div className="box">
								<div className="row">
									<div className="col-md-4">
										<p>
											<strong>Cancellation/prepayment</strong>
										</p>
									</div>
									<div className="col-md-8">
										<p>
											Cancellation and prepayment policies vary according to room type. Please enter
											the dates of your stay and check the conditions of your required room.
										</p>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="row">
									<div className="col-md-4">
										<p>
											<strong>Children and extra beds</strong>
										</p>
									</div>
									<div className="col-md-8">
										<p>All children are welcome.</p>
										<p>
											One child under 6 years is charged EUR 50 per night when using existing beds.
										</p>
										<p>There is no capacity for extra beds in the room.</p>
										<p>
											Supplements are not calculated automatically in the total costs and will have
											to be paid for separately during your stay.{" "}
										</p>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="row">
									<div className="col-md-4">
										<p>
											<strong>Pets</strong>
										</p>
									</div>
									<div className="col-md-8">
										<p>Pets are not allowed.</p>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="row">
									<div className="col-md-4">
										<p>
											<strong>Additional info</strong>
										</p>
									</div>
									<div className="col-md-8">
										<p>Please note that the restaurant is closed each Sunday.</p>
										<p>The restaurant will also be closed during Christmas (25-26 December).</p>
										<p>Please note that parking spaces cannot be reserved or guaranteed.</p>
										<p>
											For a group booking more than 5 rooms up to 4 weeks prior to arrival
											cancellation is 100% free of charge, within 2 until 4 weeks 50% free of
											charge, and within 2 weeks the property will charge you in full. Please note
											that Ozo hotel always charges city tax prior to your arrival with the
											non-refundable rate or group booking.
										</p>
										<p>
											Please note that the credit card that is used for the booking needs to be
											present at check-in. When this credit card is not available please bring a
											photocopy of the credit card with authorization of the owner.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</div>
	);
};

export default RoomOverviewDetails;
