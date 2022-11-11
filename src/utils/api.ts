import fs from 'fs';
import { join } from 'path';

export function getUsers() {
    let dir = join(process.cwd(), 'src/data');

	return fs.readdirSync(dir);
}

export function getByUsername(username: string, fields: string[] = []) {
    // console.log(username, 'username');
	const realUsername = username.replace(/\.json$/, '');
	let fullPath = '';

	fullPath = join('src/data', `${realUsername}.json`);

	try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        const data = JSON.parse(fileContents);

		const items: any = {};
		fields.forEach((field) => {
			if (field === 'username') {
				items[field] = realUsername;
			}
			if (data[field]) {
				items[field] = data[field];
			}
		});

		return items;
	} catch {
		return null;
	}
}

export function getAllUsers(fields: string[] = []) {
    const users = getUsers();
	const usersData = users.map((user) => getByUsername(user, fields), []);

	return usersData;
}
