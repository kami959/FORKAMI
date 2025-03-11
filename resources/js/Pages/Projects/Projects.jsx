import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ProjectsList from '@/Components/ProjectsList';
import { Link } from '@inertiajs/inertia-react';


export default function Projects({ auth, ownedProjects, collaborativeProjects, flash }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Projets</h2>}
        >
            <Head title="Projets" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {flash.message && (
                                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                                    {flash.message}
                                </div>
                            )}

                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold">Mes projets</h1>
                                <Link
                                    href={route('projects.create')}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Nouveau projet
                                </Link>
                            </div>

                            <h2 className="text-xl font-semibold mb-2">Mes projets</h2>
                            <ProjectsList projects={ownedProjects} isOwner={true} />

                            {collaborativeProjects.length > 0 && (
                                <>
                                    <h2 className="text-xl font-semibold mt-8 mb-2">Projets collaboratifs</h2>
                                    <ProjectsList projects={collaborativeProjects} isOwner={false} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}