import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BlogPosts from '../../components/BlogPosts';

export default props => {
	return (
		<Layout>
			<SEO title="Blog" />
			<main className="blog">
				<header className="blog__header">
					<h1 className="blog__site-title">
						<Link to="/">Gustavo Porto</Link>
					</h1>
					<p>Personal blog</p>
				</header>
				<BlogPosts />
			</main>
		</Layout>
	);
};
