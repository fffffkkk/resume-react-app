import React, { FC } from 'react';

import styles from '@styles/Experience.module.css';

const Experience: FC = ({}) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__experience}>
				<h2>Опыт</h2>
				<div className={styles['section__experience-right']}>
					<p className={styles.experience__text}>
						На данный момент учавствую в командной разработке FinderVK.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Experience;
