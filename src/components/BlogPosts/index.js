import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<main className="blog-posts">
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<article className="blog-posts__post" key={node.id}>
					<header>
						<h2 className="blog-posts__title">
							<a href={node.fields.slug}>{node.frontmatter.title}</a>
						</h2>
						<small className="blog-posts__date">{node.frontmatter.date}</small>
					</header>
					<p className="blog-posts__description">
						{node.frontmatter.description}
					</p>
				</article>
			))}
		</main>
	);
};

export default BlogPosts;
