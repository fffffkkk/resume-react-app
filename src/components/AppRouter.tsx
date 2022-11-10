import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Registration from '@pages/Registration';

const AppRouter: FC = ({}) => {
	return (
		<Routes>
			<Route path='/reg' element={<Registration />} />
			<Route path='/' element={<Home />} />
		</Routes>
	);
};
export default AppRouter;
