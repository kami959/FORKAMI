import { useState, useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Déclenche l'animation après le chargement
        setTimeout(() => setIsAnimated(true), 100);
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 p-6">
            <Head title="Connexion - Zenith Tasks" />

            <div className={`max-w-md w-full transition-all duration-700 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                {/* Logo et titre */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-cyan-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        <span className="text-2xl font-bold tracking-tighter text-white">Zenith<span className="text-cyan-400">Tasks</span></span>
                    </div>
                    <h2 className="text-xl text-gray-300 font-medium">Connexion à votre compte</h2>
                </div>

                {/* Carte principale */}
                <div className="relative">
                    {/* Effets lumineux */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full filter blur-xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full filter blur-xl"></div>

                    {/* Carte avec cadre brillant */}
                    <div className="relative bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-px rounded-2xl">
                        <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                            {status && (
                                <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
                                    {status}
                                </div>
                            )}

                            <form onSubmit={submit}>
                                <div className="space-y-6">
                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 rounded-lg text-white placeholder-gray-400 transition-colors"
                                                placeholder="votre@email.com"
                                                autoComplete="username"
                                                autoFocus
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <InputError message={errors.email} className="mt-2 text-sm text-red-400" />
                                    </div>

                                    {/* Mot de passe */}
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                                            Mot de passe
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 rounded-lg text-white placeholder-gray-400 transition-colors"
                                                placeholder="••••••••"
                                                autoComplete="current-password"
                                                onChange={(e) => setData('password', e.target.value)}
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <InputError message={errors.password} className="mt-2 text-sm text-red-400" />
                                    </div>

                                    {/* Se souvenir de moi */}
                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center">
                                            <Checkbox
                                                name="remember"
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)}
                                                className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-500/50"
                                            />
                                            <span className="ms-2 text-sm text-gray-400">
                                                Se souvenir de moi
                                            </span>
                                        </label>

                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                            >
                                                Mot de passe oublié ?
                                            </Link>
                                        )}
                                    </div>

                                    {/* Bouton de connexion */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-medium transition-all hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {processing ? 'Connexion en cours...' : 'Se connecter'}
                                    </button>
                                </div>
                            </form>

                            {/* Lien vers inscription */}
                            <div className="mt-6 text-center">
                                <span className="text-gray-400 text-sm">Pas encore de compte ? </span>
                                <Link
                                    href={route('register')}
                                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    Créer un compte
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}