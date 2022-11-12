import React, { FC } from 'react';

import styles from '@styles/About.module.css';

const About: FC = ({}) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__about}>
				<h2>Обо мне</h2>
				<div className={styles['section__about-right']}>
					<p className={styles.about__text}>
						Студент 2 курса Брянского Государственного Tехнического Универа.
						<br />
						<br />
						Увлекаюсь frontend(на react + ts + redux/toolkit) и немного
						backend(на python) разработкой. Сейчас начал изучать мобильную
						разработку на react native.
					</p>
					<div className={styles.about__card}>
						<ul className={styles['about__card-list']}>
							<li className={styles['card__list-item']}>
								<p>Локация</p>
								<span>Россия, Брянск</span>
							</li>
							<li className={styles['card__list-item']}>
								<p>Резюме</p>
								<span>Fix: Модальное окно</span>
							</li>
							<li className={styles['card__list-item']}>
								<p>Почта</p>
								<span>alexuppereks@gmail.com</span>
							</li>
							<a
								href='https://github.com/fffffkkk'
								target='_blank'
								className={styles['card__list-item']}
							>
								<p>GitHub</p>
								Ссылка на мой GitHub
							</a>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;
