import React, {useState} from 'react';

import {getAllPostsByUserId} from "./services/users.api.service";
import {IPostModel} from "./models/IPostModel";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

import './App.css';

function App() {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    const postsOfCurrentUser = (userId: number) => {
        getAllPostsByUserId(userId).then(({data}) => setPosts([...data.posts]));
    }

    return (
        <div className={'flex'}>
            <Users postsOfCurrentUser={postsOfCurrentUser}/>
            <Posts posts={posts}/>
        </div>
    );
}

export default App;
