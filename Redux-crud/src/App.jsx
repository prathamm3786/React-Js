import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddUser from "./Pages/AddUser"
import ViewUsers from "./Pages/ViewUsers"
import EditUsers from "./Pages/EditUsers"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/view" element={<ViewUsers />} />
        <Route path="/edit" element={<EditUsers />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
