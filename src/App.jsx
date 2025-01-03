import './App.css'
import LoginPage from "./pages/login"
import MembershipPage from "./pages/membershipPage";
import AdminPage from "./pages/admin";
import PlanYourExpriences from "./pages/planExperience";
import PreviousBookings from './pages/previousBooking';
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/membership' element={<MembershipPage /> } />
        <Route path='/membership/plan_experiences' element={<PlanYourExpriences />} />
        <Route path='/membership/previous_booking' element={<PreviousBookings />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;