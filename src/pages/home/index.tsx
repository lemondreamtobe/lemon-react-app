import { useState, useEffect } from "react";
import style from './index.module.less';
import logo from '@/images/logo.svg';
import { observer } from 'mobx-react-lite'
import counterStore from "../../store/count";
import { Link } from "react-router-dom";
import toast from "@/helpers/toast";
import Hello from "@/components/hello";

function App() {
    const [c, setC] = useState(0);

    useEffect(() => {
        console.log('current c -> ', c);
        toast('c 变成了' + c)
    }, [c]);

    useEffect(() => {
        console.log('hello world~')
    }, []);

    return (
        <div className={`${style.App} ${c % 2 === 0 ? style.red : style.blue}`}>
            <img src={logo} className={style.logo} alt="logo" />
            <h1>I am Lemon brother {c}</h1>
            <button onClick={() => setC(i => ++i)}>add</button>
            <button onClick={() => setC(i => --i)}>minus</button>
            <h1>store counter {counterStore.count}</h1>
            <button onClick={() => counterStore.increment()}>add</button>
            <button onClick={() => counterStore.decrement()}>minus</button>
            <br />
            <Link to="/login">Go to Login for id:{id}</Link>
            <Hello id={id} />
            
        </div>
    );
}

export default observer(App);

