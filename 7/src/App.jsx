import { useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Charusat from './pages/Charusat';
import CSE from './pages/CSE';
import Depstar from './pages/Depstar';
import './App.css';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            {isSidebarOpen && <SideBar />}

            <NavBar onToggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
            <div className={`flex-1 min-h-screen bg-gray-100 transition-all duration-300 pl-0 ${isSidebarOpen ? 'pl-64' : ''}`}>

                <main className="p-6 justify-center align-center ">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cse" element={<CSE />} />
                        <Route path="/charusat" element={<Charusat />} />
                        <Route path="/depstar" element={<Depstar />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
