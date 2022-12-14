import React, { FC, useEffect, useState } from 'react';

import Button from '@UI/Button';
import ProjectItem from '@components/ProjectItem';
import styles from '@styles/ProjectList.module.css';
import { projects } from '@/utils/data';

const ProjectList: FC = ({}) => {
	const [data, setData] = useState(projects); // Feature


	return (
		<section className={styles.section}>
			<div className={styles.section__project}>
				<div>
					<h2>Проекты</h2>
				</div>
				<div className={styles['section__project-right']}>
					{data.map((item) => (
						<ProjectItem key={item.title} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};
export default ProjectList;
