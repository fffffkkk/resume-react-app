import React, { FC } from 'react';

import styles from '@styles/Stack.module.css';
import { ReactComponent as HtmlIcon } from '@assets/icon/html-svgrepo-com.svg';
import { ReactComponent as CssIcon } from '@assets/icon/css-svgrepo-com.svg';
import { ReactComponent as JSIcon } from '@assets/icon/javascript-logo-svgrepo-com.svg';
import { ReactComponent as FirebaseIcon } from '@assets/icon/firebase-svgrepo-com.svg';
import { ReactComponent as ReactIcon } from '@assets/icon/react-svgrepo-com.svg';
import { ReactComponent as SassIcon } from '@assets/icon/sass-svgrepo-com.svg';
import { ReactComponent as TSIcon } from '@assets/icon/typescript-logo-svgrepo-com.svg';
import { ReactComponent as ViteIcon } from '@assets/icon/vitejs-svgrepo-com.svg';

const Stack: FC = ({}) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__stack}>
				<h2>Технологии</h2>
				<div className={styles['section__stack-right']}>
					<div className={styles.stack__item}>
						<HtmlIcon className={styles['stack__item-icon']} />
						<p className={styles['stack__item-desc']}>Html5</p>⭐⭐⭐⭐⭐
					</div>
					<div className={styles.stack__item}>
						<CssIcon className={styles['stack__item-icon']} />
						<p className={styles['stack__item-desc']}>Css3</p>⭐⭐⭐⭐⭐
					</div>
					<div className={styles.stack__item}>
						<JSIcon className={styles['stack__item-icon']} />
						<p className={styles['stack__item-desc']}>JS</p>⭐⭐⭐
					</div>
					<div className={styles.stack__item}>
						<FirebaseIcon className={styles['stack__item-icon']} />
						<p className={styles['stack__item-desc']}>Firebase</p>⭐⭐⭐
					</div>
					<div className={styles.stack__item}>
						<ReactIcon className={styles['stack__item-icon']} />
						<p className={styles['stack__item-desc']}>React</p>⭐⭐⭐⭐
					</div>
					<div className={styles.stack__item}>
						<SassIcon className={styles['stack__item-icon']} />
						<p className={styles['stack__item-desc']}>Sass</p>⭐⭐⭐
					</div>
					<div className={styles.stack__item}>
						<TSIcon className={styles['stack__item-icon']} />
						<p className={styles['stack__item-desc']}>TS</p>⭐⭐⭐⭐
					</div>
					<div className={styles.stack__item}>
						<ViteIcon className={styles['stack__item-icon']} />
						<p className={styles['stack__item-desc']}>Vite</p>⭐⭐
					</div>
				</div>
			</div>
		</section>
	);
};
export default Stack;
