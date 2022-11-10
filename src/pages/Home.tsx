import React, { FC } from 'react';

import styles from '@styles/Home.module.css';
import { Profile, About, Experience, ProjectList, Stack } from '@/components';

const Home: FC = ({}) => {
	return (
		<div className={styles.container}>
			<Profile />
			<div className={styles.container__sections}>
				<About />
				<Stack />
				<ProjectList />
				<Experience />
			</div>
		</div>
	);
};
export default Home;
