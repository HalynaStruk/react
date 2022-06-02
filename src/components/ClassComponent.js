import {Component} from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {a:0, b:25}
        console.log('constructor'); // 1-ий спрацьовує constructor
    }

    componentDidMount() {
        console.log('componentDidMount'); // 3-ий спрацьовує componentDidMount
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.a === 5) {
            return 'Snapshot'
        }
        return null; // ця функція має щось повертати(хоча б null)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // виконується перед оновленням чогось(тобто якщо щось змінилось можна відслідкувати в componentDidUpdate)

        console.log('componentDidUpdate'); // якщо щось оновилось спрацьовує ще раз render і тоді вже componentDidUpdate
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
    }

    componentWillUnmount() { // виконується коли компонента помре
        console.log('componentWillUnmount');
    }

    inc (){
        this.setState(prev=>({a:prev.a+1}))
    }
    render() { // render буде запускатись, коли зявиться New props, або коли буде сетатись setState, або оновиться сторінка
        console.log('render'); // 2-ий спрацьовує render
        return (
            <div>
                Hello from Class Component
                <div>d:{this.props.ssss}</div>
                <div>A: {this.state.a}</div>
                <div>B: {this.state.b}</div>
                <button onClick={()=>this.inc()}>Inc</button>
            </div>
        )
    }
}

export {ClassComponent};