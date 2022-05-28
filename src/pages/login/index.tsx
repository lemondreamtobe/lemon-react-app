
import Hello from '@/components/hello';
import { Link } from 'react-router-dom';
import style from './index.module.less';

export default function Login() {
    return <div className={style.Login}>
        <Hello />
        <Link to="/">Go to Home</Link>
    </div>
}