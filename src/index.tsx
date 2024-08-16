import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import App from 'App';
// import { router } from './presentation/routers/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// document.body.style.position = 'relative';
root.render(
   <App/>
);

reportWebVitals();
