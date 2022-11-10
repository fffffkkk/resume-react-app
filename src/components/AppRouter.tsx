import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Registration from '@pages/Registration';

const AppRouter: FC = ({}) => {
	return (
		<Routes>
			<Route path='/' element={<Registration />} />
			<Route path='/home' element={<Home />} />
		</Routes>
	);
};
export default AppRouter;
