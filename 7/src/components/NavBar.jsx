import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = ({ onToggleSidebar, isOpen }) => {
    return (
        <nav className="flex items-center justify-between p-4 bg-blue-500 text-white fixed top-0 left-0 right-0 z-50 shadow-md h-16">
            {/* Icon Button */}
            <button onClick={onToggleSidebar} className="p-2">
                {isOpen ? (
                    <XMarkIcon className="h-6 w-6 text-white" />
                ) : (
                    <Bars3Icon className="h-6 w-6 text-white" />
                )}
            </button>

            {/* Centered App Name */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold">
                MyApp
            </div>

            {/* Placeholder div to keep layout balanced */}
            <div className="w-6"></div>
        </nav>
    );
};

export default NavBar;
