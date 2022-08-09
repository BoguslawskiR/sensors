import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const prepareWorker = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    await worker.start()
  }
} 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

prepareWorker().then(() => {
  console.log('RENDER');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

