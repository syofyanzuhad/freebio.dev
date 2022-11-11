import fs from 'fs';
import { join } from 'path';
// import matter from 'gray-matter';
// import { IPost } from '@Types/post';

// type MdxType = 'BLOG' | 'PORTFOLIO' | 'PAGES';

// const blogPostsDirectory = 'src/blog';
// const portfolioDirectory = 'src/portfolio';
// const pagesDirectory = 'src/mdx-pages';

export function getUsers() {
    let dir = join(process.cwd(), 'src/data');
    // console.log(dir, 'dir'); 

	// switch (type) {
	// 	case 'BLOG':
	// 		dir = join(process.cwd(), blogPostsDirectory);
	// 		break;
	// 	case 'PORTFOLIO':
	// 		dir = join(process.cwd(), portfolioDirectory);
	// 		break;
	// 	case 'PAGES':
	// 		dir = join(process.cwd(), pagesDirectory);
	// 		break;
	// }

	return fs.readdirSync(dir);
}

export function getByUsername(username: string, fields: string[] = []) {
    // console.log(username, 'username');
	const realUsername = username.replace(/\.json$/, '');
	let fullPath = '';

	fullPath = join('src/data', `${realUsername}.json`);
	// console.log(fullPath, 'fullPath');
	// switch (type) {
	// 	case 'BLOG':
	// 		fullPath = join(blogPostsDirectory, `${realUsername}.json`);
	// 		break;
	// 	case 'PORTFOLIO':
	// 		fullPath = join(portfolioDirectory, `${realUsername}.json`);
	// 		break;
	// 	case 'PAGES':
	// 		fullPath = join(pagesDirectory, `${realUsername}.json`);
	// 		break;
	// }

	try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // console.log(fileContents, 'fileContents');
        
        const data = JSON.parse(fileContents);
        // console.log(data, 'data');
        // console.log(name, 'name');

		const items: any = {};
		fields.forEach((field) => {
			if (field === 'username') {
				items[field] = realUsername;
			}
			if (data[field]) {
				items[field] = data[field];
			}
		});

        // // Ensure only the minimal needed username is exposed
        // fields.forEach((field) => {
        //     if (field === 'username') {
        //         items[field] = realUsername;
        //     }
        //     if (field === 'name') {
        //         items[field] = name;
        //     }
        //     if (data[field]) {
        //         items[field] = data[field];
        //     }
        // });

		// const { data, content } = matter(fileContents);
		// const items: IPost | Record<string, string> = {};
		// fields.forEach((field) => {
		// 	if (field === 'username') {
		// 		items[field] = realUsername;
		// 	}
		// 	if (field === 'content') {
		// 		items[field] = content;
		// 	}
		// 	if (data[field]) {
		// 		items[field] = data[field];
		// 	}
		// });

        // console.log(items, 'items');
		return items;
	} catch {
		return null;
	}
}

export function getAllUsers(fields: string[] = []) {
    const users = getUsers();
	// console.log(users, 'users');
	
// 	const allUsers = users
// 		.map((username) => getByUsername(username, fields))
// 		// sort posts by date in descending order
// 		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
// 	return allUsers;
// }
	const usersData = users.map((user) => getByUsername(user, fields), []);
	// console.log(usersData, 'usersData');

	return usersData;
}
