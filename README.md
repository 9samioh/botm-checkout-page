# Book of the Month — Checkout Page

## Overview

Hi! Thank you for taking the time to review my submission.
I put an overview here and also included comments in my code.

## Setup

npm install
npm run dev

## Approach

- I hardcoded the mock data for books and address in `src/data/checkoutData.ts`

- I created a mock api response to test my own UI in `src/api/checkout.ts`

- I optimized for mobile and dark mode. Global styles are defined in index.css, where I included theme colors matching Book of the Month's theme!
  I used modular CSS so that components could live cleanly with their stylesheet. Although it's not necessary here, it would be in larger applications.

- I used react hooks to manage the loading state so that the app would update accordingly. These live in the parent (Checkout Page) and are passed down to the children (Payment Summary)
  The parent page holds all the logic and states, while the children (BookItem, PaymentSummary, ConfirmationPopup) just display their piece of the UI.

- To clearly indicate the loading state, I changed the button color and text. I also disabled the button while loading to prevent multiple submissions during loading.

## Assumptions & Trade-offs

- I put prices in dollar amounts for readability, but it can cause rounding errors in the future.

- Since no real backend was provided for POST /api/checkout, I created a fake fetch function that's imitating the post response.
  This is just to test the UI locally before submitting.

- I also just used plain `fetch` instead of using a data-fetching library for simplicity since it's just a one time request

- I'm not sure what format the estimated shipping date will be returned in, so I just assumed it would be an ISO string

## What I'd do with more time

- With more time I'd work on a real API integration instead of the mocked endpoint
- On success there's no path forward after the order confirmation. I could create an onClose and a cleared flow after.
- I'd make this pass accessibillity standards
- Create component tests using something like React Testing Library

<img width="1214" height="757" alt="image" src="https://github.com/user-attachments/assets/20fafd5a-6613-4773-be2f-a0f5be831a55" />

