import React, { FC, useEffect, useState } from 'react';

import { useFetch } from '@/hooks/useFetch';
import styles from '@styles/ProjectList.module.css';
import Button from '@UI/Button';
import { ProjectService } from '@services/ProjectService';
import ProjectItem from './ProjectItem';

const initialDataState = [
	{
		title: 'FinderVK 🚀',
		desc: 'Приложение, позволяющее просматривать, кто посещал твою страницу VK.',
		topics: ['React', 'Html', 'Sass', 'TS', 'Vite'],
	},
	{
		title: 'Resume site',
		desc: 'Сайт с моим резюме.',
		topics: ['React', 'Html', 'Css', 'TS', 'Vite'],
	},
];

const ProjectList: FC = ({}) => {
	const [data, setData] = useState(initialDataState);
	const isAdmin = true;
	console.log('1');
	const [createNewProject, createIsLoading, createError] = useFetch(
		async () => {
			await ProjectService.addNewProject(
				'1',
				'Мой новый проект',
				'Это мой новый проект',
				['1', '2']
			);
		}
	);
	console.log('1');

	useEffect(() => {
		createNewProject(); // FIX THIS
	}, []);

	return (
		<section className={styles.section}>
			<div className={styles.section__project}>
				<div>
					<h2>Проекты</h2>
					{isAdmin && (
						<Button cls={styles['btn-admin']}>
							Добавить проект в портфолио
						</Button>
					)}
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
