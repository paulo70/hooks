import React, { useState, useEffect, useMemo, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const Post = ({post, handleTitle}) => {
  console.log('child')
  return (
    <ul>
      <li onClick={() => handleTitle(post.title)}>{post.title}</li>
      <li>{post.body}</li>
    </ul>
  )
}

function App() {
  const [ posts, setPosts ] = useState([])
  const [ value, setValue ] = useState('')

  const input = useRef(null)

  console.log('father')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r))
  },[])

  const handleTitle = (value) => {
    setValue(value)
  } 

  useEffect(() => {
    input.current.focus()
  },[value]) 

  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className='App-logo' alt="logo"/>
        <p>
          <input type='search' ref={input} value = {value} onChange={(e) => setValue(e.target.value)}/>
        </p>

        { useMemo(() => {
          return posts.length > 0 && 
            posts.map((post, index) => {
              return <Post post= {post} key={index} handleTitle={handleTitle}/>
            })
          },[posts])
        }

        {posts.length <= 0 && (<h3>Not post yet</h3>) }
      </header>
    </div>
  );
}

export default App;
