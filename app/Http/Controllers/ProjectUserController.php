<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectUserController extends Controller
{
    /**
     * Afficher la liste des collaborateurs pour un projet
     */
    public function index(Project $project)
    {
        $this->authorize('view', $project);

        $collaborators = $project->collaborators;
        $project->load('user'); // Chargement du propriétaire du projet

        return Inertia::render('Projects/Collaborators', [
            'project' => $project,
            'collaborators' => $collaborators,
            'owner' => $project->user
        ]);
    }

    /**
     * Afficher le formulaire pour ajouter des collaborateurs
     */
    public function create(Project $project)
    {
        $this->authorize('update', $project);

        // Rechercher les utilisateurs qui ne sont pas déjà collaborateurs
        $currentCollaborators = $project->collaborators->pluck('id')->toArray();
        $currentCollaborators[] = $project->user_id; // Ajouter le propriétaire

        $availableUsers = User::whereNotIn('id', $currentCollaborators)->get();

        return Inertia::render('Projects/AddCollaborator', [
            'project' => $project,
            'availableUsers' => $availableUsers
        ]);
    }

    /**
     * Ajouter un collaborateur au projet
     */
    public function store(Request $request, Project $project)
    {
        $this->authorize('update', $project);

        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        // Vérifier si l'utilisateur n'est pas déjà collaborateur
        if (!$project->collaborators->contains($validated['user_id'])) {
            $project->collaborators()->attach($validated['user_id']);
        }

        return redirect()->route('projects.collaborators.index', $project->id)
            ->with('message', 'Collaborateur ajouté avec succès.');
    }

    /**
     * Supprimer un collaborateur du projet
     */
    public function destroy(Project $project, User $user)
    {
        $this->authorize('update', $project);

        $project->collaborators()->detach($user->id);

        return redirect()->route('projects.collaborators.index', $project->id)
            ->with('message', 'Collaborateur retiré avec succès.');
    }
}