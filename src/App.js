import './App.module.css';
import {Posts, UserInfo, Users} from "./components";
import {useState} from "react";

const App = () => {
    const [user, setUser] = useState(null);
    const [userIdForPosts, setUserIdForPosts] = useState(null);
  return (
      <div>
          <div>
        <Users setUser={setUser}/>
              {user && <UserInfo user={user} setUserIdForPosts={setUserIdForPosts}/>}
      </div>
          {userIdForPosts && <Posts userIdForPosts={userIdForPosts}/>}
      </div>
  );
}

export default App;