// @ts-nocheck
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home';
import reportWebVitals from './reportWebVitals';

async function render() {
    const run = () => {
        const root = ReactDOM.createRoot(document.getElementById('root')!);
        root.render(
            <App />
        );
    }

    try {
    } catch (err) {

    } finally {
        run()
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


if (process.env.NODE_ENV === 'development') {
    require('./mock/index');
    const VConsole = require('vconsole');
    var vConsoler = new VConsole();
    console.log('development')
}
render();



