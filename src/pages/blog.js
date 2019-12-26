import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPosts from '../components/BlogPosts';

export default props => {
	return (
		<Layout>
			<SEO title="Blog" />
			<BlogPosts />
		</Layout>
	);
};
