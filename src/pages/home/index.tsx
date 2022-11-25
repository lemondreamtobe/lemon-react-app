// @ts-nocheck
import React, { useState, useEffect, useDeferredValue, useTransition } from "react";
import style from './index.module.less';
// import { observer } from 'mobx-react-lite'

const mockDataArray = new Array(4000).fill(1)
function ShowText({ query }) {
    const text = 'asdfghjk'
    let children
    if (text.indexOf(query) > 0) {
        /* 找到匹配的关键词 */
        const arr = text.split(query)
        children = <div>{arr[0]}<span style={{ color: 'pink' }} >{query}</span>{arr[1]} </div>
    } else {
        children = <div>{text}</div>
    }
    return <div>{children}</div>
}
/* 列表数据 */
function List({ query }) {
    console.log('List渲染')
    return <div className="list">
        {query}
    </div>
}

const NewList = React.memo(List)

function App() {
    const [c, setC] = useState(18);
    const [isPending, startTransition] = useTransition();
    const deferValue = useDeferredValue(c);
    debugger
    useEffect(() => {
        console.log('current c -> ', c);
        // toast('c 变成了' + c)
        debugger

        return () => {
            console.log('destroy c -> ', c);
            debugger

        }
    }, [c]);

    return (
        <div className={`${style.App} ${c % 2 === 0 ? style.red : style.blue}`}>
            <button onClick={() => setC(i => ++i)}>add{c}</button>
            <button id="b2" onClick={() => startTransition(() => {
                setC(i => ++i)
            })}>{isPending ? 'pending...' : ''}transition{c}</button>
            <NewList query={deferValue} />
        </div>
    );
}
constructor
export default App;

