import React from 'react';

import SEO from '../components/seo';
import Profile from '../components/Profile';
import './styles.scss';

const IndexPage = props => {
	return (
		<>
			<SEO title="Home" />
			<header className="main-header">
				<nav>
					<ul className="main-header__list">
						<li>
							<span>
								<a className="main-header__link" href="/blog">
									Blog
								</a>
							</span>
						</li>
					</ul>
				</nav>
			</header>
			<main className="home" role="main">
				<Profile />
			</main>
		</>
	);
};

export default IndexPage;
