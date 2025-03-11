import React from 'react';
import { Head, useForm, Link } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Edit({ auth, task, project }) {
    const { data, setData, put, processing, errors } = useForm({
        title: task.title || '',
        description: task.description || '',
        completed: task.completed || false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('tasks.update', task.id));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Modifier la tâche</h2>}
        >
            <Head title="Modifier la tâche" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <Link
                            href={route('tasks.index', project.id)}
                            className="text-blue-600 hover:underline"
                        >
                            &larr; Retour aux tâches
                        </Link>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold mb-6">Modifier la tâche: {task.title}</h1>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <InputLabel htmlFor="title" value="Titre" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="description" value="Description" />
                                    <TextArea
                                        id="description"
                                        className="mt-1 block w-full"
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="completed"
                                            checked={data.completed}
                                            onChange={e => setData('completed', e.target.checked)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Terminée</span>
                                    </label>
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ml-4"
                                        disabled={processing}
                                    >
                                        Mettre à jour la tâche
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