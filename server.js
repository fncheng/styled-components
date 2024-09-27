import { createServer } from 'vite';
// import { routes } from './src/routes';

async function startServer() {
  const vite = await createServer();
  await vite.listen(3000);
  console.log('Server is running at http://localhost:3000');
}

startServer();
