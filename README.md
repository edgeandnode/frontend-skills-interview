# Frontend Skills Interview Repo

Welcome to the Edge & Node Product Engineering Team's Frontend Skills Interview! The interview will be a Pair Programming interview lasting for about 50 minutes. We'll be using the Next.js app in this repository as our starting point and we'll be looking to extend it.

## Steps before the interview

Once the interview starts we expect you to be fully up and running with the app and able to contribute to the code instantly. So make sure you complete all of the steps below. If you get blocked on one of the steps or run into any issues please reach out to us at least a few days before the interview by sending an email to: `andras@edgeandnode.com` and `iain@edgeandnode.com`.

### ☑️ 1. Create an API key in [Subgraph Studio](https://thegraph.com/studio/)

The app is querying the [Graph Network Arbitrum Sepolia](https://thegraph.com/explorer/subgraphs/3xQHhMudr1oh69ut36G2mbzpYmYxwqCeU6wwqyCDCnqV?view=Query&chain=arbitrum-one) subgraph so we need an API key before running the app.

1. Go to [Subgraph Studio](https://thegraph.com/studio/)
2. Follow the instructions in [this video](https://youtu.be/q6J1dIk43wo?t=433) or written description!
3. Optional: It's a good idea to restrict your API key to the [Graph Network Arbitrum Sepolia](https://thegraph.com/explorer/subgraphs/3xQHhMudr1oh69ut36G2mbzpYmYxwqCeU6wwqyCDCnqV?view=Query&chain=arbitrum-one) subgraph. You can also set a spending limit of 1 USD on your key. There are 100k free queries per month that you can do with your API key but it's best to protect against racking up a bill due to compromising your key by setting the spend limit.

### ☑️ 2. Set up the repository on your machine

1. Fork the repo under your Github username.
2. Clone your forked repo.
3. The app is using Node.js `v22.13.1`, so make sure you have that version of Node.js installed. We recommend you to use `nvm`, `fnm` or similar to manage your Node versions.
4. The app is also using Bun `v1.1.29`. You can find instructions to install it [here](https://bun.sh/docs/installation#installing).
5. Install the repo by running:

```
bun i
```

6. Create a `.env` file in the root of the repository and add your API key like so:

```
API_KEY=fc...98
```

7. Run the app in development mode by running:

```
bun dev
```

### ☑️ 3. Make sure you have a wallet set up in your browser

1. [Metamask](https://metamask.io/download/) is preferred, but you can pick whatever you normally use.
2. The app is using the `Arbitrum Sepolia` testnet so add it to your preferred wallet. You can [follow](https://revoke.cash/learn/wallets/add-network/arbitrum-sepolia) this guide.

### ☑️ 4. Have [Zoom](https://www.zoom.com/) set up and enable screen-sharing

We'll be using Zoom for the video call and you will be asked to share your screen with your IDE and your browser. So please make sure Zoom is set up correctly and that [screen-sharing is enabled](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064868) properly.

### ☑️ 5. Play around with the app and the codebase

1. Try out the app. Click around and make sure you understand the user experience.
2. Look around the code and make sure you understand it! You can prepare questions to ask about the parts that don't make sense to you and we can start the interview with that.
3. Make sure you are familar with the technologies used in the app. Read up on the docs for [Next.js](https://nextjs.org/docs/app), [Wagmi](https://wagmi.sh/), [Viem](https://viem.sh/) and [Tanstack-Query](https://tanstack.com/query/latest/docs/framework/react/quick-start).

## During the interview

The interview will be a pair programming exercise. You will be asked to complete a task in the app together with the interviewer. You will be the "driver" while the interviewer will be the "navigator". The emphasis is not on knowing exactly what code to write but on your thinking and what questions you ask to solve the problems. You can use any resource you'd like but your best bet is to ask your inteviewer and work with them to complete the task. While solving the task, you might also be asked questions to gauge your understanding of general frontend development concepts, web security aspects and version control best practices.

The interview itself should take approximately 50 minutes and after you will have 10 minutes to ask questions about the role and the company.

---

## For developers of the repository

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### graphql-codegen

The app uses `graphql-codegen` to generate types for the GraphQL queries. If you edit the GraphQL queries in any of the `lib/queries/**/query.ts` files, you're going to need to run the following command to generate the new types:

```
bun codegen-gql
```

Be aware that the development server needs to run before running the command above. So make sure to start the app in dev mode first:

```
bun dev
```

### Wagmi CLI

The app uses [Wagmi CLI](https://wagmi.sh/cli/getting-started) to fetch the ABIs and generate code relating to the contract calls that are used in the app. In order to run the code generation, you will need an API key to Arbiscan. [Here's](https://docs.arbiscan.io/getting-started/viewing-api-usage-statistics) a description on how to obtain one. Once you have the key, add it to your `.env` file like so:

```
ARBISCAN_KEY=Q6...EJ
```

After this, you can run the following command to generate the code:

```
bun codegen-wagmi
```

If you need to add new contract calls using different contracts, you will need to edit the `wagmi.config.ts` file. You can find more information on how to use the configure the Wagmi CLI in the [docs](https://wagmi.sh/cli/getting-started#add-contracts-and-plugins).
