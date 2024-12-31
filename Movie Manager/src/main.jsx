import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import Page from './Page/Page.jsx'
import Watchlist from './Playlist/Watchlist.jsx'
import Search from './Search/Search.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Home />}></Route>
          <Route path='watchlist' element={<Watchlist />}></Route>
          <Route path='page/:imdbid' element={<Page />}></Route>
          <Route path='search' element={<Search/>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
