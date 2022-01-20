import MovieList from './components/MovieList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import getSections from './utils/getSections'


function App () {
  getSections()
  
  return (
    <div className='App'>
      <img className='page-icon' src="https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/cuevana3.png" alt="cuevana" srcset="" />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/section/:id' element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

