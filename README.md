# NextJS + Typescript Starter Template (opinionated)

Every time I create a NextJS project, I find that some time is spent in migrating to TypeScript and installing common packages that I use most of the time. This is an opinionated NextJS starter template that I made for my ease of use so that I can start the development process quicker.

The starter template includes, out of the box:
* Typescript support
* Common packages (`axios`, `formik`, `yup`)
* Material UI (`@material-ui/core` and `@material-ui/lab`)
* FontAwesome Icons
* Opinionated `Layout`, `Header` and `Footer` components

## Getting Started

* Clone the repo
* Run `yarn` or `npm install` to install the packages
* Modify the `"dev": "next dev -p 1337",` command in `package.json`. The default `port` is specified to be `1337`.
* Run `yarn dev` or `npm run dev`
* The development server should be accessible at `http://localhost:1337` if you didn't change anything, or `http://localhost:${PORT}` if you changed the `PORT` to something else.


[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
