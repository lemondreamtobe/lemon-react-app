import render from '@/helpers/render';
import './index.less';

function App() {
    return <div className="app">
        hello world
    </div>
}

export default App;


if (process.env.NODE_ENV === 'development') {

} else {
    render(<App />);
}


