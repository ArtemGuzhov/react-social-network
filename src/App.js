import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="left-column col-2">
              <NavBar />
            </div>
            <div className="right-column col-10">{routes}</div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
