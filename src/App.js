import './App.css';
import {Users} from './components'
//, Posts, Comments

function App() {
    return (
        <div>
            <div className={'users_posts'}>
                <Users/>
                {/*<Posts/>*/}
            </div>
            {/*<Comments/>*/}
        </div>
    );
}

export default App;
