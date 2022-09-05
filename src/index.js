import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Router>
    <App />
</Router>
)
