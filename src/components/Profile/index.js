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
					As a software engineer, I prioritize accessibility as the foundation of all products, not just a feature. I'm committed to developing inclusive solutions, from assistive technologies to user-centered design, to ensure software is functional and accessible to all.
				</p>
				<a
					className="profile__email"
					href="mailto:gus@portothr.ee"
					target="_blank"
					rel="noopener noreferrer"
				>
					gus@portothr.ee
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
