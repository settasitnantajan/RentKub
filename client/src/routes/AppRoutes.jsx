
import { BrowserRouter, Routes, Route } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} />



      
    </Routes>
  </BrowserRouter>
  )
}
export default AppRoutes