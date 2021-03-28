import React, { useState, useEffect, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

const Post = ({post}) => {
  console.log('child')
  return (
    <ul>
      <li>{post.title}</li>
      <li>{post.body}</li>
    </ul>
  )
}

function App() {
  const [ posts, setPosts ] = useState([])
  const [ value, setValue ] = useState('')

  console.log('father')

  useEffect(() => {

    setTimeout(() =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r))
    },5000)
  },[])

  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className='App-logo' alt="logo"/>
        <p>
          <input type='search' value = {value} onChange={(e) => setValue(e.target.value)}/>
        </p>

        { useMemo(() => {
          return posts.length > 0 && 
            posts.map((post, index) => {
              return <Post post= {post} key={index}/>
            })
          },[posts])
        }

        {posts.length <= 0 && (<h3>Not post yet</h3>) }
      </header>
    </div>
  );
}

export default App;
