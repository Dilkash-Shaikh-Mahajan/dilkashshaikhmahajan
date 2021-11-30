import React, { Component } from "react";

class GoogleAd extends Component {
	googleInit = null;

	componentDidMount() {
		this.googleInit = setTimeout(() => {
			if (typeof window !== "undefined")
				(window.adsbygoogle = window.adsbygoogle || []).push({});
		}, 100);
	}

	componentWillUnmount() {
		if (this.googleInit) clearTimeout(this.googleInit);
	}

	render() {
		return (
			<>
				<ins
					class='adsbygoogle'
					style={{ display: "block" }}
					data-ad-client='ca-pub-9213691122273422'
					data-ad-slot='8170253653'
					data-ad-format='auto'
					data-full-width-responsive='true'
				></ins>
			</>
		);
	}
}

export default GoogleAd;
