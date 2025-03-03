import { Outlet } from 'react-router-dom'
import '../styles/app.css'
//import Header from './layout/Header'
function App() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App