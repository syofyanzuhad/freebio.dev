<p align='center'>
    <img src="https://img.shields.io/badge/hacktoberfest-2022-blueviolet" alt="Hacktober Badge"/>
    <img src="https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99" alt="Star Badge"/>
 	<a href="https://github.com/syofyanzuhad/freebio.dev" >
		<img src="https://img.shields.io/badge/Contributions-welcome-violet.svg?style=flat&logo=git" alt="Contributions" />
	</a>
</p>

<p align='center'>
  <a href='https://github.com/syofyanzuhad/freebio.dev'>
	  <img src='https://visitor-badge.glitch.me/badge?page_id=syofyanzuhad.freebio.dev'>
	</a>
	<a href="https://github.com/syofyanzuhad/freebio.dev/pulls">
		<img src="https://img.shields.io/github/issues-pr/syofyanzuhad/freebio.dev" alt="Pull Requests Badge"/>
	</a>
  <a href="https://github.com/syofyanzuhad/freebio.dev/graphs/contributors">
		<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/syofyanzuhad/freebio.dev?color=2b9348">
	</a>
  <a href='https://github.com/syofyanzuhad/freebio.dev'>
		<img src='https://img.shields.io/github/forks/syofyanzuhad/freebio.dev'>
	</a>
  <a href='https://github.com/syofyanzuhad/freebio.dev'>
		<img src='https://img.shields.io/github/stars/syofyanzuhad/freebio.dev'>
	</a>
</p>

**Demo:**

<img width="316" alt="Screenshot 2022-08-07 at 3 03 22 AM" src="https://raw.githubusercontent.com/syofyanzuhad/freebio.dev/main/public/example.jpg?token=GHSAT0AAAAAABZTHWUUG3GU7FPF7IGRZOAKY3RCWZA">


**Awesome Performance:**

<img width="916" alt="Screenshot 2022-08-07 at 3 03 22 AM" src="https://raw.githubusercontent.com/syofyanzuhad/freebio.dev/main/public/Screenshot%20from%202022-11-14%2010-36-38.png">

** DEV Domain: [freebio.dev](freebio.dev)**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### 1. **First, clone it:**
```bash
git clone https://github.com/syofyanzuhad/freebio.dev.git
```

### 2. **Then, install and run it locally:**
```bash
npm install && npm run dev
# or
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open `src` and You can start add your data by copy the `data/default.json` and edit it to `data/[username].json`. The page auto-updates as you edit the file.

After You send the PR, then the page will appear on [freebio.dev/username](freebio.dev)

Sample json format on [default.json](https://github.com/syofyanzuhad/freebio.dev/blob/main/src/data/default.json):
```json
{
  "username": "default",
  "name": "Syofyan Zuhad",
  "bio": "Web Artisan",
  "description": "Syofyan Zuhad - Software Engineer",
  "avatar_url": "https://github.com/syofyanzuhad.png",
  "socials": [
    {
      "name": "twitter",
      "href": "https://twitter.com/syofyan_zuhad",
      "icon": "tw"
    },
    {
      "name": "instagram",
      "href": "https://www.instagram.com/syofyan_zuhad",
      "icon": "ig"
    },
    {
      "name": "linkedin",
      "href": "https://www.linkedin.com/in/syofyan-zuhad",
      "icon": "li"
    },
    {
      "name": "telegram",
      "href": "https://t.me/syofyan_zuhad",
      "icon": "tg"
    }
  ],
  "links": [
    {
      "id": 1,
      "href": "https://github.com/syofyanzuhad/freebio.dev",
      "title": "Make your own bio"
    },
    {
      "id": 2,
      "href": "https://github.com/syofyanzuhad",
      "title": "Check me on Github"
    },
    {
      "id": 3,
      "href": "https://www.buymeacoffee.com/syofyanzuhad",
      "title": "Buy me a coffee"
    },
    {
      "id": 4,
      "href": "https://trakteer.id/syofyanzuhad/tip",
      "title": "Trakteer me"
    },
    {
      "id": 5,
      "href": "/donate",
      "title": "Donate"
    }
  ]
}
```

You can check your bio link page by accessing [http://localhost:3000/username](http://localhost:3000/username) on your browser.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


### 3. **Finally, send it as Pull-request to the main repo.**

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
