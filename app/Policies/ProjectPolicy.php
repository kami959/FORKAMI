<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ProjectPolicy
{
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Project $project): bool
    {
        return $project->hasAccess($user);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Project $project): bool
    {
        return $project->hasAccess($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Project $project): bool
    {
        // Seul le propriétaire peut supprimer un projet
        return $user->id === $project->user_id;
    }

    /**
     * Determine whether the user can manage collaborators.
     */
    public function manageCollaborators(User $user, Project $project): bool
    {
        // Seul le propriétaire peut gérer les collaborateurs
        return $user->id === $project->user_id;
    }
}