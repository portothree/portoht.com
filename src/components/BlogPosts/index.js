import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import './style.scss';

const BlogPosts = () => {
	const data = useStaticQuery(graphql`
		query BlogPosts {
			allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
				edges {
					node {
						id
						frontmatter {
							title
							description
							date(formatString: "DD MMMM, YYYY")
						}
					}
				}
			}
		}
	`);

	return (
		<div className="blog-posts">
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<article className="blog-posts__post" key={node.id}>
					<header>
						<h3 className="blog-posts__title">
							<Link to="">{node.frontmatter.title}</Link>
						</h3>
						<small className="blog-posts__description">
							{node.frontmatter.date}
						</small>
					</header>
					<p>{node.frontmatter.description}</p>
				</article>
			))}
		</div>
	);
};

export default BlogPosts;
