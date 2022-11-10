import React, { FC } from 'react';

import styles from '@styles/Home.module.css';
import { Profile, About, Experience, ProjectList } from '@/components';

const Home: FC = ({}) => {
	return (
		<div className={styles.container}>
			<Profile />
			<div className={styles.container__sections}>
				<About />
				<Experience />
				<ProjectList />
			</div>
		</div>
	);
};
export default Home;
