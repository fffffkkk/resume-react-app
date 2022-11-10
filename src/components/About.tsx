import React, { FC } from 'react';

import styles from '@styles/About.module.css';

const About: FC = ({}) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__about}>
				<h2>About me</h2>
				<div className={styles['section__about-right']}>
					<p className={styles['about__text']}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
						modi eos assumenda et fuga placeat esse corrupti vel perspiciatis
						architecto odit fugiat, debitis repellendus quia, libero qui. Autem
						fugit, architecto facere dolores vel quas esse ex rem minima sed
						distinctio.
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
						delectus voluptates perspiciatis quos deleniti, id deserunt modi
						magni aperiam dolore.
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
							<li className={styles['card__list-item']}>
								<p>Вконтакте</p>
								<a target='_blank' href='https://vk.com/id665485247'>
									Ссылка на мой VK
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;
