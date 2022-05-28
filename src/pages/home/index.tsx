import { useState, useEffect } from "react";
import style from './index.module.less';
import Logo from '@/images/logo.svg';
import { observer } from 'mobx-react-lite'
import counterStore from "../../store/count";
import { Link } from "react-router-dom";
import toast from "@/helpers/toast";

function App() {
    const [c, setC] = useState(18);

    useEffect(() => {
        console.log('current c -> ', c);
        toast('c 变成了' + c)
    }, [c]);

    return (
        <div className={`${style.App} ${c % 2 === 0 ? style.red : style.blue}`}>
            <img src={Logo} className={style.logo} alt="logo" />
            <h1>I am Lemon brother, I am {c} years old.</h1>
            <button onClick={() => setC(i => ++i)}>add</button>
            <button onClick={() => setC(i => --i)}>minus</button>
            <h1>store counter {counterStore.count}</h1>
            <button onClick={() => counterStore.increment()}>add</button>
            <button onClick={() => counterStore.decrement()}>minus</button>
            <h1>
                <Link to="/login">Go to Login</Link>
            </h1>
        </div>
    );
}

export default observer(App);

