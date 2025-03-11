<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Afficher la liste des projets
     */
    public function index()
    {
        $projects = Project::where('user_id', auth()->id())->latest()->get();

        return Inertia::render('Projects', [
            'projects' => $projects
        ]);
    }

    /**
     * Afficher le formulaire de création
     */
    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    /**
     * Enregistrer un nouveau projet
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $project = new Project();
        $project->title = $validated['title'];
        $project->description = $validated['description'];
        $project->user_id = auth()->id();
        $project->save();

        return redirect()->route('projects.index')
            ->with('message', 'Projet créé avec succès.');
    }

    /**
     * Afficher le formulaire d'édition
     */
    public function edit(Project $project)
    {
        $this->authorize('update', $project);

        return Inertia::render('Projects/Edit', [
            'project' => $project
        ]);
    }

    /**
     * Mettre à jour un projet
     */
    public function update(Request $request, Project $project)
    {
        $this->authorize('update', $project);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $project->title = $validated['title'];
        $project->description = $validated['description'];
        $project->save();

        return redirect()->route('projects.index')
            ->with('message', 'Projet mis à jour avec succès.');
    }

    /**
     * Supprimer un projet
     */
    public function destroy(Project $project)
    {
        $this->authorize('delete', $project);

        $project->delete();

        return redirect()->route('projects.index')
            ->with('message', 'Projet supprimé avec succès.');
    }
}