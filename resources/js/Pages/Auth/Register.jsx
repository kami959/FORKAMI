import { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [isAnimated, setIsAnimated] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    useEffect(() => {
        // Déclenche l'animation après le chargement
        setTimeout(() => setIsAnimated(true), 100);
    }, []);

    useEffect(() => {
        // Calcul simple de la force du mot de passe
        if (data.password) {
            let strength = 0;
            if (data.password.length >= 8) strength += 1;
            if (/[A-Z]/.test(data.password)) strength += 1;
            if (/[0-9]/.test(data.password)) strength += 1;
            if (/[^A-Za-z0-9]/.test(data.password)) strength += 1;
            setPasswordStrength(strength);
        } else {
            setPasswordStrength(0);
        }
    }, [data.password]);

    const getStrengthColor = () => {
        if (passwordStrength === 0) return 'bg-gray-300';
        if (passwordStrength === 1) return 'bg-red-500';
        if (passwordStrength === 2) return 'bg-orange-500';
        if (passwordStrength === 3) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const getStrengthLabel = () => {
        if (passwordStrength === 0) return '';
        if (passwordStrength === 1) return 'Faible';
        if (passwordStrength === 2) return 'Moyen';
        if (passwordStrength === 3) return 'Bon';
        return 'Fort';
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 p-6">
            <Head title="Inscription - Zenith Tasks" />

            <div className={`max-w-md w-full transition-all duration-700 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                {/* Logo et titre */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-cyan-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        <span className="text-2xl font-bold tracking-tighter text-white">Zenith<span className="text-cyan-400">Tasks</span></span>
                    </div>
                    <h2 className="text-xl text-gray-300 font-medium">Créer un nouveau compte</h2>
                </div>

                {/* Carte principale */}
                <div className="relative">
                    {/* Effets lumineux */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full filter blur-xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full filter blur-xl"></div>

                    {/* Carte avec cadre brillant */}
                    <div className="relative bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-px rounded-2xl">
                        <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                            <form onSubmit={submit}>
                                <div className="space-y-5">
                                    {/* Nom */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                            Nom
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                value={data.name}
                                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 rounded-lg text-white placeholder-gray-400 transition-colors"
                                                placeholder="Votre nom"
                                                autoComplete="name"
                                                autoFocus
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <InputError message={errors.name} className="mt-2 text-sm text-red-400" />
                                    </div>

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
                                                autoComplete="new-password"
                                                onChange={(e) => setData('password', e.target.value)}
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Indicateur de force du mot de passe */}
                                        {data.password && (
                                            <div className="mt-2">
                                                <div className="flex items-center justify-between mb-1">
                                                    <div className="flex-1 h-2 bg-gray-200/10 rounded-full mr-2">
                                                        <div
                                                            className={`h-full rounded-full transition-all ${getStrengthColor()}`}
                                                            style={{ width: `${passwordStrength * 25}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{getStrengthLabel()}</span>
                                                </div>
                                                <p className="text-xs text-gray-400">Minimum 8 caractères avec lettres, chiffres et symboles</p>
                                            </div>
                                        )}

                                        <InputError message={errors.password} className="mt-2 text-sm text-red-400" />
                                    </div>

                                    {/* Confirmation du mot de passe */}
                                    <div>
                                        <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-300 mb-1">
                                            Confirmer le mot de passe
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="password_confirmation"
                                                type="password"
                                                name="password_confirmation"
                                                value={data.password_confirmation}
                                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 rounded-lg text-white placeholder-gray-400 transition-colors"
                                                placeholder="••••••••"
                                                autoComplete="new-password"
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                            />
                                        </div>
                                        <InputError message={errors.password_confirmation} className="mt-2 text-sm text-red-400" />
                                    </div>

                                    {/* Bouton d'inscription */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-medium transition-all hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {processing ? 'Inscription en cours...' : "S'inscrire"}
                                    </button>
                                </div>
                            </form>

                            {/* Lien vers connexion */}
                            <div className="mt-6 text-center">
                                <span className="text-gray-400 text-sm">Déjà un compte ? </span>
                                <Link
                                    href={route('login')}
                                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    Se connecter
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}