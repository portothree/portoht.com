import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Profile from '../components/Profile';

const IndexPage = props => {
	return (
		<Layout>
			<SEO title="Home" />
			<Profile />
		</Layout>
	);
};

export default IndexPage;
