const SideBar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 h-[calc(100vh-64px)] fixed top-16 left-0 z-40 overflow-y-auto">
            <ul className="p-4 space-y-2">
                <li><a href="/" className="hover:text-blue-400">Home</a></li>
                <li><a href="/charusat" className="hover:text-blue-400">Charusat</a></li>
                <li><a href="/depstar" className="hover:text-blue-400">Depstar</a></li>
                <li><a href="/cse" className="hover:text-blue-400">CSE</a></li>
            </ul>
        </div>
    );
};

export default SideBar;
