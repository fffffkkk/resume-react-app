import { getDatabase, ref, onValue, set } from 'firebase/database';

import { database } from '@/firebase';

export const ProjectService = {
	async getAllProject(projectId: string) {
		onValue(ref(database, 'posts/' + projectId), (snapshot) => {
			return snapshot.val();
		});
	},
	async addNewProject(
		projectId: string,
		title: string,
		desc: string,
		topics: string[]
	) {
		set(ref(database, 'projects/' + projectId), {
			title: title,
			desc: desc,
			topics: topics,
		});
	},
};
