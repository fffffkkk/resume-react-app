import { useState } from 'react';

export const useFetch = (callback: () => void) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const fetching = async (...args: []) => {
		try {
			setIsLoading(true);
			await callback(...args);
		} catch (error) {
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return [fetching, isLoading, error];
};
