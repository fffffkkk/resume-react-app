import React, { FC } from 'react';

import styles from '@styles/Profile.module.css';
import AvatarImg from '@assets/img/img-profile.jpg';
import Button from '@UI/Button';

const Profile: FC = ({}) => {
	return (
		<main className={styles.main}>
			<div className={styles.main__cover}></div>
			<div className={styles.main__user}>
				<div className={styles['main__user-info']}>
					<img
						className={styles['main__user-img']}
						src={AvatarImg}
						alt='avatar-img'
					/>
					<div className={styles['main__user-text']}>
						<h1 className={styles['user__text-title']}>Алексей Устинов</h1>
						<p className={styles['user__text-subtitle']}>
							Начинающий React разработчик
						</p>
					</div>
				</div>
				<a
					href='https://bryansk.hh.ru/resume/dcabca33ff0b4cb8140039ed1f777279506b65'
					target='_blank'
				>
					<Button cls={styles.main__btn}>Открыть резюме</Button>
				</a>
			</div>
		</main>
	);
};
export default Profile;
