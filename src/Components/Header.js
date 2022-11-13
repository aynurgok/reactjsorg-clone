import React from 'react'
import {Language, Search, Opener} from '../Images/index'
function Header() {
  return(
     <div className='header'>
      <div className='container'>
          <div className='logo'>
              <a href='#'>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width={30}></img>
              </a>
              <h2>React</h2>
          </div>
          <nav id='main-menu'>
              <a href='#'>Docs</a>
              <a href='#'>Tutorial</a>
              <a href='#'>Blog</a>
              <a href='#'>Community</a>
          </nav>
          <div className='search-area'>
            <Search/>
            <input type="search" placeholder="Search" ></input>
          </div>
            
          <div id='menu'>
            <a>v18.2.0</a>
            <a href='#'>
              <Language/>
              <span>Languages</span>
            </a>
            <a href='#'>
              <span>Github</span>
              <Opener/>
            </a>
          </div>
        </div>
     </div>
  );
}
export default Header
