import React from 'react';
import { graphql, Link } from 'gatsby';

import './blog-post.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default props => {
	const post = props.data.markdownRemark;

	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description}
			/>
			<header className="blog-header">
				<span className="blog-header__back">
					<Link to="/blog">Back to blog posts</Link>
				</span>
			</header>
			<main>
				<article className="blog-post">
					<header>
						<h1>{post.frontmatter.title}</h1>
						<small className="blog-post__date">{post.frontmatter.date}</small>
					</header>
					<div
						className="blog-post__content"
						dangerouslySetInnerHTML={{ __html: post.html }}
					/>
				</article>
			</main>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date(formatString: "DD MMMM, YYYY")
			}
			fields {
				slug
			}
		}
	}
`;
