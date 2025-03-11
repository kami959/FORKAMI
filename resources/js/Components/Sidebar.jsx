import { Link, usePage } from "@inertiajs/react";
import { FaTachometerAlt, FaTasks, FaUsers, FaProjectDiagram, FaCalendarAlt, FaSignOutAlt, FaCog } from "react-icons/fa";

const Sidebar = () => {
    const { url } = usePage();

    return (
        <nav className="fixed top-0 left-0 h-screen w-20 hover:w-72 bg-gradient-to-b from-slate-900 via-indigo-950 to-purple-900 transition-all duration-300 ease-in-out overflow-hidden group shadow-2xl z-50">
            <ul className="flex flex-col h-full">
                {/* Logo Section */}
                <li className="w-full h-20 flex items-center justify-center bg-slate-900/95">
                    <Link href="/" className="flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-full shadow-lg transform transition-transform hover:scale-110">
                        <FaTachometerAlt className="text-3xl text-white" />
                    </Link>
                </li>

                {/* Menu Items */}
                <div className="space-y-2 px-2 py-4 flex-grow">
                    <li className="w-full menu-item">
                        <Link href="/dashboard" className={`flex items-center p-3 text-white hover:bg-cyan-500/50 rounded-xl transition-all duration-300 group ${url === "/dashboard" ? "bg-cyan-500/50" : ""}`}>
                            <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/30 rounded-full mr-4">
                                <FaTachometerAlt className="text-2xl text-cyan-200" />
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">Tableau de Bord</span>
                        </Link>
                    </li>
                    <li className="w-full menu-item">
                        <Link href="/task" className={`flex items-center p-3 text-white hover:bg-cyan-500/50 rounded-xl transition-all duration-300 group ${url === "/tasks" ? "bg-cyan-500/50" : ""}`}>
                            <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/30 rounded-full mr-4">
                                <FaTasks className="text-2xl text-cyan-200" />
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">Mes Tâches</span>
                        </Link>
                    </li>
                    <li className="w-full menu-item">
                        <Link href="/projects" className={`flex items-center p-3 text-white hover:bg-cyan-500/50 rounded-xl transition-all duration-300 group ${url === "/projects" ? "bg-cyan-500/50" : ""}`}>
                            <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/30 rounded-full mr-4">
                                <FaProjectDiagram className="text-2xl text-cyan-200" />
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">Projets</span>
                        </Link>
                    </li>
                    <li className="w-full menu-item">
                        <Link href="/calendar" className={`flex items-center p-3 text-white hover:bg-cyan-500/50 rounded-xl transition-all duration-300 group ${url === "/calendar" ? "bg-cyan-500/50" : ""}`}>
                            <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/30 rounded-full mr-4">
                                <FaCalendarAlt className="text-2xl text-cyan-200" />
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">Calendrier</span>
                        </Link>
                    </li>
                    <li className="w-full menu-item">
                        <Link href="/users" className={`flex items-center p-3 text-white hover:bg-cyan-500/50 rounded-xl transition-all duration-300 group ${url === "/users" ? "bg-cyan-500/50" : ""}`}>
                            <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/30 rounded-full mr-4">
                                <FaUsers className="text-2xl text-cyan-200" />
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">Gestion des Utilisateurs</span>
                        </Link>
                    </li>
                    <li className="w-full menu-item">
                        <Link href="/settings" className={`flex items-center p-3 text-white hover:bg-cyan-500/50 rounded-xl transition-all duration-300 group ${url === "/settings" ? "bg-cyan-500/50" : ""}`}>
                            <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/30 rounded-full mr-4">
                                <FaCog className="text-2xl text-cyan-200" />
                            </div>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">Paramètres</span>
                        </Link>
                    </li>
                </div>

                {/* Profile Section */}
                <li className="w-full bg-slate-900/95 p-4 flex items-center">
                    <div className="relative mr-4">
                        <img src="/api/placeholder/50/50" alt="Profile" className="w-12 h-12 rounded-full border-3 border-cyan-500 object-cover" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-semibold text-white">kami</p>
                        <p className="text-xs text-cyan-300">Gestionnaire de Projet</p>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
