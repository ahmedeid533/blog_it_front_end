import React from 'react';

function Banner(props) {
	return (
		<div className="heading-page header-text">
			<section className="page-heading">
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="text-content">
					<h4>{props.h1}</h4>
					<h2>{props.h2}</h2>
					</div>
				</div>
				</div>
			</div>
			</section>
		</div>
	)
}

export default Banner;
