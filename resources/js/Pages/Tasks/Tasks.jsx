import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TasksList from '@/Components/TasksList';
import { Link } from '@inertiajs/inertia-react';

export default function Tasks({ auth, tasks, project, flash }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tâches - {project.title}</h2>}
        >
            <Head title={`Tâches - ${project.title}`} />

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
                                <h1 className="text-2xl font-bold">Tâches du projet: {project.title}</h1>
                                <Link
                                    href={route('tasks.create', project.id)}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Nouvelle tâche
                                </Link>
                            </div>

                            <TasksList tasks={tasks} projectId={project.id} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}