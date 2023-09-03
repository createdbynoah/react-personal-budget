import ReactDOM from 'react-dom/client';

import './index.css';

// don't use .js extension when importing .js files in React
import App from './App';

// defining the entry point of the React app, where it should be loaded
const root = ReactDOM.createRoot(document.getElementById('root'));

// tell React WHAT to render in the above-defined entry point
root.render(<App />);
