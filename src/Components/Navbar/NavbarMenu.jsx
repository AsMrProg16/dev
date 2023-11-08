import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarMenu() {
  return (
    <div className='header'>
      <div className='css-tctv7l'>
        <div className='css-heonw3'>
          <a className="rx_title">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" height="20" />
              <Link to='/'>
                <span className="rx_css">React</span>
              </Link>
          </a>
          <nav className="nav_title_css">
            <a className="nav_item_css">
              <Link to='/docs'>
                Docs
              </Link>
            </a>
            <a className="nav_item_css">
              <Link to='/tutorial'>
                Tutorial
              </Link>
            </a>
            <a className="nav_item_css">
              <Link to='/blog'>
                Blog
              </Link>
            </a>
            <a className="nav_item_css">
              <Link to='/community'>
                Community
              </Link>
            </a>
          </nav>
          <form className="form_css">
            <span className="algolia-autocomplete">
              <input type="search" placeholder="Search" aria-label="Search docs" 
                className="css-7dpbpx ds-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-labelledby="algolia-doc-search" aria-owns="algolia-autocomplete-listbox-0" dir="auto" />
            </span>
          </form>
          <div className="menu_item">
            <a className="css_item_menu">
              <Link to='/version'>
                v18.2.0
              </Link>
            </a>
            <a className="languages_css">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path>
                <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " className="css_fill"></path>
              </svg> 
              <a className="css_langues">
                <Link to='/languges'>
                  Languages
                </Link>
             </a>
            </a>
            <a href="https://github.com/facebook/react/" target="_blank"  className="css_git">
              GitHub
              <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css_svg">
                <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
              </svg>
            </a>
          </div>
      </div>
    </div>
  </div>
  )
}