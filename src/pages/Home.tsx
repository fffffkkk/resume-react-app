import React, { FC } from 'react';

import styles from '@styles/Home.module.css';
<<<<<<< HEAD
import { Profile, About, Experience, ProjectList, Stack } from '@/components';
=======
import { Profile, About, Experience, ProjectList } from '@/components';
>>>>>>> dev

const Home: FC = ({}) => {
	return (
		<div className={styles.container}>
			<Profile />
			<div className={styles.container__sections}>
				<About />
<<<<<<< HEAD
				<Stack />
				<ProjectList />
				<Experience />
=======
				<Experience />
				<ProjectList />
>>>>>>> dev
			</div>
		</div>
	);
};
export default Home;
