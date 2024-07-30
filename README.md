# README

## About the Application
This is an experimental [Next.js](https://nextjs.org/)  blog app bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The application is designed to create, read, update and delete blog posts.

### Technologies Used
* Next.js
* Tanstack query 
* react-hook-form 
* Prisma as an ORM 
* Prisma client 
* PostgreSQL database
* Lucide icons 
* daisy ui
* Cypress for unit and end-to-end testing

### Requirements to Run the Application
You'll need the following installed

* Node.js version: 20.10.0
* npm version: 10.2.3
* PostgreSQL needs to be installed
  * PostgreSQL - `brew install postgresql` or `sudo apt-get install postgresql`

## Getting Started

First, set up the database:

```bash
npx prisma migrate dev
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
