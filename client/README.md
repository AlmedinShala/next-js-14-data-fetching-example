This is a NextJs 14 project which examples data fetching on server and client.

## Getting Started

```bash
cd /client -- npm install && npm run app-dev
cd /server -- npm install && npm run dev
```


To fully use the capabilities of nextjs we're supposed to fetch the data on the server-side and show some UI to the user as early as possible. We fetch the data in server side and pass it on to any client component via Context. Note: client components should be as far as possible on the component tree so that we're able to show some UI to the user from the server components and then when the data is ready we hydrate the UI onto the client components. 

On this example you see the data fetching happening on the server side and the data which is to be used multiple times is set into a context and then that context is called in two different client components for demonstration.
