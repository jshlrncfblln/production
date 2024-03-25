import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Properties from './pages/Properties'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './realtor/Dashboard'
import Manage from './realtor/Manage-Property'
import Inbox from './realtor/Inbox'
import Settings from './realtor/Settings'
import { BiMessageDetail } from "react-icons/bi"
import { Profiler, useState } from 'react'
import Contact from './components/Contact'
import Layout from './components/DashboardSidebar'
import ManageProperty from './realtor/Manage-Property'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import Register from './pages/Register'
import MatchUp from './pages/MatchUp'
import PropertyDetails from './pages/PropertyDetails'
import ResultSection from './components/ResultSection'
import Profile from "./pages/ProfileSettings"
function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const [isOpenContactModal, setIsOpenContactModal] = useState(false);
  const location = useLocation();

  const toggleContactModal = () => {
    setIsOpenContactModal(!isOpenContactModal);
  };

  // Check if the current route is under the Realtor section
  const isRealtorRoute = location.pathname.startsWith('/realtor');

  return (
    <main>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/matching" element={<MatchUp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/realtor/*" element={<RealtorRoutes />} />
          <Route path="/" element={<ResultSection />} />
          <Route path="/details/:id" element={<PropertyDetails />} />
          <Route path="/user-profile-settings" element={<Profile />} />
          

        </Routes>
        {!isRealtorRoute && (
          <div className="fixed bottom-4 right-4">
            <button
              onClick={toggleContactModal}
              className="flex items-center bg-sky-500 hover:bg-sky-700 text-white rounded-full py-4 px-5 shadow-lg"
            >
              <BiMessageDetail className="text-xl mr-2" />
              Contact
            </button>
          </div>
        )}
        <Contact
          isOpen={isOpenContactModal}
          onClose={() => setIsOpenContactModal(false)}
        />
      </div>
    </main>
  );
}

function RealtorRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage-property" element={<Manage />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;


