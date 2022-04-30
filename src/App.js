import css from './App.module.css'
// import {Users, SingleUser} from './components';

import {useState, useEffect} from 'react';
import {Form1} from './components/Form1/Form1'

function App() {
    const [singleUser, setSingleUser] = useState(null)
  return (
      <div>
          {/*{singleUser && <SingleUser user={singleUser}/>}*/}
          {/*<Users getUser={setSingleUser}/>*/}
          <Form1/>
      </div>
  );
}

export default App;