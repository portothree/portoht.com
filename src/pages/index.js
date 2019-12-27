import React from 'react';
import { Link } from 'gatsby';

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
								<Link className="main-header__link" to="/blog">
									Blog
								</Link>
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
