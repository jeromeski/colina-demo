import React, { useState } from "react";
import "./index.css";

const Subscribe = () => {
	const [email, setEmail] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};
	return (
		<section className="subscribe">
			<div className="container">
				<div className="box">
					<h2 className="title">Subscribe</h2>
					<div className="text">
						<p>& receive free premium gifts</p>
					</div>
					<div className="form-group" onSubmit={handleSubmit}>
						<input
							type="text"
							value={email}
							placeholder="Subscribe"
							className="form-control"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button type="submit" className="btn btn-sm btn-main">
							Go
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
