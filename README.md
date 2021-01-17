## 專案描述

首次嘗試 Next.js，利用 `useEffect`、`getServerSideProps`、`getStaticProps` 更具體觀察 `CSR`、`SSR`、`SSG` 在網頁上的呈現差異。

## 啟動專案

### 環境

- Node.js 至少要 v10.13
- 首次啟動需 `npm i`，安裝相關 package

### 指令

- `npm run dev` => `next dev` : starts the application in **development mode with hot-code** reloading, error reporting, and more. The application will start at http://localhost:3000 by default.
- `npm run build` => `next build` : creates **an optimized production build** of your application. The output displays information about each route.
- `npm run start` => `next start` : starts the application in **production mode**. The application should be compiled with `next build` first. The application will start at http://localhost:3000 by default.

_p.s. 如果採用 `npm run dev` 是無法觀察出 SSR / SSG 的差異，需要使用 `npm run start` 才能觀察出差異。_

## 畫面結果

![](https://i.imgur.com/RRjGX0z.png)

## 參考文件

- [Next 官方文件：Next.js CLI](https://nextjs.org/docs/api-reference/cli)
- [Next 官方文件：Pages](https://nextjs.org/docs/basic-features/pages)
- [Next 官方文件：Data Fetching](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)
