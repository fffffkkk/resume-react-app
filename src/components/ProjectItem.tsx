import React, { FC } from 'react';

import { ReactComponent as FinderLogoIcon } from '@assets/icon/finder-vk-logo.svg';
import Button from '@UI/Button';
import styles from '@styles/ProjectItem.module.css';

interface ProjectItemProps {
	data: { title: string, desc: string, topics: string[] };
}

const ProjectItem: FC<ProjectItemProps> = ({ data }) => {
	return (
		<div className={styles['project__list-item']}>
			<div className={styles['list__item-info']}>
				<div className={styles['item__info-inner']}>
					<FinderLogoIcon className={styles['item__info-img']} />
				</div>
				<div className={styles['list__item-text']}>
					<h3 className={styles['item__info-title']}>{data.title}</h3>
					<p className={styles['item__info-subtitle']}>{data.desc}</p>
				</div>
			</div>
			<ul className={styles['list__item-topics']}>
				{data.topics.map((topic) => (
					<li key={topic}>{topic}</li>
				))}
			</ul>
			<Button cls={styles['project__list-btn']}>Посмотреть проект</Button>
		</div>
	);
};
export default ProjectItem;
