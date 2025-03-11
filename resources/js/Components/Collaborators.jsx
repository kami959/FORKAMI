import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Collaborators({ auth, project, collaborators, owner, flash }) {
    const handleRemove = (userId) => {
        if (confirm('Êtes-vous sûr de vouloir retirer ce collaborateur?')) {
            Inertia.delete(route('projects.collaborators.destroy', [project.id, userId]));
        }
    };

    const isOwner = auth.user.id === owner.id;

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Collaborateurs - {project.title}</h2>}
        >
            <Head title={`Collaborateurs - ${project.title}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <Link
                            href={route('projects.index')}
                            className="text-blue-600 hover:underline"
                        >
                            &larr; Retour aux projets
                        </Link>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {flash.message && (
                                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                                    {flash.message}
                                </div>
                            )}

                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold">Collaborateurs du projet: {project.title}</h1>
                                {isOwner && (
                                    <Link
                                        href={route('projects.collaborators.create', project.id)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        Ajouter un collaborateur
                                    </Link>
                                )}
                            </div>

                            <div className="mb-6">
                                <h2 className="text-lg font-medium mb-2">Propriétaire</h2>
                                <div className="bg-gray-100 p-4 rounded flex items-center">
                                    <div className="rounded-full bg-blue-500 text-white h-10 w-10 flex items-center justify-center">
                                        {owner.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-medium">{owner.name}</div>
                                        <div className="text-sm text-gray-500">{owner.email}</div>
                                    </div>
                                    <div className="ml-auto bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
                                        Propriétaire
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-lg font-medium mb-2">Collaborateurs</h2>
                            {collaborators.length === 0 ? (
                                <div className="text-center py-8 text-gray-500 bg-gray-50 rounded">
                                    Aucun collaborateur pour ce projet.
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {collaborators.map((collaborator) => (
                                        <div key={collaborator.id} className="bg-gray-50 p-4 rounded flex items-center">
                                            <div className="rounded-full bg-green-500 text-white h-10 w-10 flex items-center justify-center">
                                                {collaborator.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="ml-4">
                                                <div className="font-medium">{collaborator.name}</div>
                                                <div className="text-sm text-gray-500">{collaborator.email}</div>
                                            </div>
                                            {isOwner && (
                                                <button
                                                    onClick={() => handleRemove(collaborator.id)}
                                                    className="ml-auto text-red-600 hover:text-red-900"
                                                >
                                                    Retirer
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}