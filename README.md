# Krantijyoti Women’s Run 2027

Responsive event website for Krantijyoti Women’s Run 2027, including the event artwork slider, registration links, event information, schedule, race categories, route notes, kit details, facilities and prize information.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and run for production

```sh
npm run build
npm start
```

The production build is written to `dist/` and is included in this repository as requested. It is a Next.js server build, not a standalone static website; deploy it with the project dependencies and a Node.js server. The API routes use the database configured through `DATABASE_URL`.

The registration buttons link to the official [Krantijyoti Women’s Run 2027 registration page](https://registrations.indiarunning.com/kranti_jyoti_womens_run_2027_59904).
