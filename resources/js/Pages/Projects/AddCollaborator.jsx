import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';



export default function AddCollaborator({ auth, project, availableUsers }) {
    const { data, setData, post, processing, errors } = useForm({
        user_id: '',
    });

    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = availableUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('projects.collaborators.store', project.id));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ajouter un collaborateur</h2>}
        >
            <Head title="Ajouter un collaborateur" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <Link
                            href={route('projects.collaborators.index', project.id)}
                            className="text-blue-600 hover:underline"
                        >
                            &larr; Retour aux collaborateurs
                        </Link>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold mb-6">Ajouter un collaborateur à: {project.title}</h1>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Rechercher par nom ou email..."
                                        className="w-full px-4 py-2 border rounded-md"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <InputError message={errors.user_id} className="mt-2" />

                                    {filteredUsers.length === 0 ? (
                                        <div className="text-center py-8 text-gray-500 bg-gray-50 rounded">
                                            Aucun utilisateur trouvé.
                                        </div>
                                    ) : (
                                        <div className="space-y-2 max-h-96 overflow-y-auto">
                                            {filteredUsers.map((user) => (
                                                <div
                                                    key={user.id}
                                                    className={`p-4 rounded flex items-center cursor-pointer ${data.user_id === user.id ? 'bg-blue-50 border border-blue-300' : 'bg-gray-50 hover:bg-gray-100'}`}
                                                    onClick={() => setData('user_id', user.id)}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="user_id"
                                                        value={user.id}
                                                        checked={data.user_id === user.id}
                                                        onChange={() => setData('user_id', user.id)}
                                                        className="mr-3"
                                                    />
                                                    <div className="rounded-full bg-green-500 text-white h-10 w-10 flex items-center justify-center">
                                                        {user.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium">{user.name}</div>
                                                        <div className="text-sm text-gray-500">{user.email}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ml-4"
                                        disabled={processing || !data.user_id}
                                    >
                                        Ajouter le collaborateur
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}