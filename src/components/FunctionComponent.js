import React, {useEffect, useState} from 'react';

const FunctionComponent = (props) => {
    const {ssss} = props;
    console.log('constructor');
    const [state, setState] = useState({a:0, b:25});
    const inc = () => {
        setState({...state, a: state.a+1})
    }

    useEffect(()=>{
        console.log('componentDidMount');
        return () => {
            console.log('componentWillUnmount');
        }
    },[])

    useEffect(()=>{
        console.log('componentDidUpdate');
    },[props, state])

    return (
        <div>
            {console.log('render')}
            Hello from Function Component
            <div>d:{ssss}</div>
            <div>A: {state.a}</div>
            <div>B: {state.b}</div>
            <button onClick={()=>this.inc()}>Inc</button>
        </div>
    );
};

export {FunctionComponent};