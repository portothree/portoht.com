import React from 'react';

import github from '../../images/github.svg';
import profile from '../../images/profile.jpg';

import './style.scss';

const Profile = () => {
	return (
		<article className="profile">
			<img
				className="profile__photo"
				src={profile}
				alt="Me trying hard to look serious"
			/>
			<div className="profile__about-me">
				<h1>Gustavo Porto</h1>
				<p className="profile__description">
					I'm a very strong believer that accessibility is the baseline and not
					a feature for products.
				</p>
				<a
					className="profile__email"
					href="mailto:gus@p8s.co"
					target="_blank"
					rel="noopener noreferrer"
				>
					gus@p8s.co
				</a>
				<a
					className="profile__github"
					href="https://github.com/portothree"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="profile__github-logo"
						src={github}
						alt="Github logo"
					/>
					Github
				</a>
			</div>
		</article>
	);
};

export default Profile;
