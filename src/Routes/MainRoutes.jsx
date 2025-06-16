import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Home"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div>Page Not found</div>} />
    </Routes>
  )
}

export default MainRoutes
