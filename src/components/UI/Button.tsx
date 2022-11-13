import React, { FC } from 'react';

import styles from '@styles/Button.module.css';

interface ButtonProps {
	cls: string;
	children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ cls, children }) => {
	return <button className={`${styles.btn} ${cls}`}>{children}</button>;
};
export default Button;
