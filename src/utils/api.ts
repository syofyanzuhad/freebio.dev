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

export function getPathsObject() {
	const users = getUsers();
	const paths = users.map((user) => {
		return {
			username: user.replace(/\.json$/, ''),
			// get last modified date
			lastMod: fs.statSync(join('src/data', user)).mtime.getTime(),
		};
	});

	return paths;
};

export function formatDate(date: string | number | Date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};