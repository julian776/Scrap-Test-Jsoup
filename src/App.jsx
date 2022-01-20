import MovieList from './components/MovieList'
import getMovies from './utils/getMovies'

function App () {

  getMovies()
  /*
  useEffect(() => {
    const ws = new WebSocket('ws://' + 'localhost:8080' + '')
    socket.onmessage = function (m) {
      const data = JSON.parse(m.data)
      dispatch(moviesLoad(data))
      console.log('Got message: ' + data.type)
    }
  }, [])
  */

  return (
    <div className='App'>
      <img className='page-icon' src="https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/cuevana3.png" alt="cuevana" srcset="" />
      <MovieList />
    </div>
  )
}

export default App

