import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome({ auth }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head title="Zenith Tasks - Organisation et productivité" />

            {/* Main container */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">

                {/* Navbar */}
                <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-cyan-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                            <span className="text-2xl font-bold tracking-tighter">Zenith<span className="text-cyan-400">Tasks</span></span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#fonctionnalites" className="text-gray-300 hover:text-white transition">Fonctionnalités</a>
                            <a href="#temoignages" className="text-gray-300 hover:text-white transition">Témoignages</a>
                        </div>

                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-medium transition-all"
                                >
                                    Tableau de bord
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-white hover:text-cyan-300 transition hidden md:block"
                                    >
                                        Connexion
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-medium transition-all"
                                    >
                                        Démarrer gratuitement
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-xl">
                                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                                    Simplifiez votre <span className="text-cyan-400">organisation</span> quotidienne
                                </h1>
                                <p className="text-xl text-gray-300 mb-8">
                                    Zenith Tasks combine gestion de tâches intuitive, collaboration en temps réel et analyses avancées pour maximiser votre productivité.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={route('register')}
                                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                                    >
                                        Essayer gratuitement
                                    </Link>
                                    <a
                                        href="#demo"
                                        className="px-8 py-4 bg-white/10 border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all"
                                    >
                                        Voir la démo
                                    </a>
                                </div>

                                <div className="mt-12 flex items-center gap-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 border-2 border-indigo-900 flex items-center justify-center text-xs font-bold">
                                                {i}K+
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold">+15 000 utilisateurs</div>
                                        <div className="text-gray-400">nous font confiance</div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/30 rounded-full filter blur-3xl"></div>
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl"></div>

                                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-2xl border border-white/10 shadow-xl">
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4">
                                        <div className="bg-gradient-to-r from-green-400 to-cyan-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                                            + 40% de productivité
                                        </div>
                                    </div>

                                    <div className="bg-slate-950 rounded-xl overflow-hidden">
                                        <div className="border-b border-white/10 p-3 flex justify-between items-center">
                                            <div className="flex space-x-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="text-xs text-gray-400">zenith-tasks.app</div>
                                        </div>

                                        <div className="p-6">
                                            <div className="mb-6 flex justify-between items-center">
                                                <div>
                                                    <h3 className="text-xl font-bold">Aujourd'hui</h3>
                                                    <p className="text-gray-400 text-sm">3 tâches restantes</p>
                                                </div>
                                                <div className="bg-indigo-600/30 text-indigo-400 text-xs px-3 py-1 rounded-full">
                                                    Cette semaine
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                {[
                                                    { label: "Réunion d'équipe", time: "09:00", completed: true },
                                                    { label: "Finaliser présentation client", time: "14:00", completed: false },
                                                    { label: "Mise à jour documentation", time: "16:30", completed: false },
                                                    { label: "Planifier sprint suivant", time: "17:00", completed: false }
                                                ].map((task, i) => (
                                                    <div key={i} className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                                        <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${task.completed ? 'bg-cyan-500' : 'border-2 border-gray-500'}`}>
                                                            {task.completed && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>{task.label}</span>
                                                        <span className="text-gray-500 text-sm">{task.time}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button className="mt-6 w-full py-3 rounded-lg border border-dashed border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-colors text-sm">
                                                + Ajouter une nouvelle tâche
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="fonctionnalites" className="py-20 px-6 bg-slate-950/50">
                    <div className="container mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
                                Fonctionnalités
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Tout ce dont vous avez besoin pour rester organisé</h2>
                            <p className="text-gray-400 text-lg">
                                Une suite complète d'outils conçus pour améliorer votre productivité et vous aider à atteindre vos objectifs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                                    title: "Gestion de tâches intuitive",
                                    description: "Créez, organisez et suivez vos tâches avec une interface simple et puissante."
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />,
                                    title: "Planification avancée",
                                    description: "Visualisez votre emploi du temps avec des vues quotidiennes, hebdomadaires et mensuelles."
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
                                    title: "Collaboration en temps réel",
                                    description: "Travaillez facilement avec votre équipe, partagez des tâches et communiquez efficacement."
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />,
                                    title: "Tableaux de bord et rapports",
                                    description: "Suivez vos progrès avec des analyses détaillées et des visualisations personnalisables."
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />,
                                    title: "Rappels intelligents",
                                    description: "Recevez des notifications personnalisées pour ne jamais manquer une échéance importante."
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />,
                                    title: "Sécurité avancée",
                                    description: "Vos données sont protégées avec un chiffrement de bout en bout et des sauvegardes automatiques."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="bg-slate-900/50 border border-white/5 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/5 hover:border-cyan-500/20 transition-all group">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                            {feature.icon}
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* CTA Section */}
                <section className="py-20 px-6">
                    <div className="container mx-auto">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-1">
                            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full"></div>
                                <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white rounded-full"></div>
                                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white rounded-full"></div>
                            </div>

                            <div className="relative bg-slate-900/90 rounded-2xl p-12 md:p-16 backdrop-blur-sm text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre productivité ?</h2>
                                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                    Rejoignez des milliers d'utilisateurs satisfaits et découvrez comment Zenith Tasks peut vous aider à accomplir davantage.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        href={route('register')}
                                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                                    >
                                        Commencer gratuitement
                                    </Link>
                                    <a
                                        href="#contact"
                                        className="px-8 py-4 bg-white/10 border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all"
                                    >
                                        Contacter l'équipe
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
