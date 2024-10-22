
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import Dashboard from './Dashboard'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GoogleAuth/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
