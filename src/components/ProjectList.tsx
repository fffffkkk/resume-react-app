import React, { FC } from 'react';

import { ReactComponent as FinderLogoIcon } from '@assets/icon/finder-vk-logo.svg';
import styles from '@styles/ProjectList.module.css';

const ProjectList: FC = ({}) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__project}>
				<h2>Проекты</h2>
				<div className={styles['section__project-right']}>
					<div className={styles['project__list-item']}>
						<div className={styles['list__item-info']}>
							<div className={styles['item__info-inner']}>
								<FinderLogoIcon className={styles['item__info-img']} />
							</div>
							<div className={styles['list__item-text']}>
								<h3 className={styles['item__info-title']}>FinderVK</h3>
								<p className={styles['item__info-subtitle']}>
									Приложение, позволяющее видеть кто зашел к тебе на страницу в
									VK.
								</p>
							</div>
						</div>
						<ul className={styles['list__item-topics']}>
							<li>React</li>
							<li>Html</li>
							<li>Css</li>
						</ul>
						<button className={styles['project__list-btn']}>
							Посмотреть проект
						</button>
					</div>
					<div className={styles['project__list-item']}>
						<div className={styles['list__item-info']}>
							<div className={styles['item__info-inner']}>
								<FinderLogoIcon className={styles['item__info-img']} />
							</div>
							<div className={styles['list__item-text']}>
								<h3 className={styles['item__info-title']}>FinderVK</h3>
								<p className={styles['item__info-subtitle']}>
									Приложение, позволяющее видеть кто зашел к тебе на страницу в
									VK.
								</p>
							</div>
						</div>
						<ul className={styles['list__item-topics']}>
							<li>React</li>
							<li>Html</li>
							<li>Css</li>
						</ul>
						<button className={styles['project__list-btn']}>
							Посмотреть проект
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default ProjectList;
