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
        $user = auth()->user();

        // Récupérer à la fois les projets possédés et ceux où l'utilisateur est collaborateur
        $ownedProjects = $user->ownedProjects()->latest()->get();
        $collaborativeProjects = $user->collaborativeProjects()->latest()->get();

        return Inertia::render('Projects', [
            'ownedProjects' => $ownedProjects,
            'collaborativeProjects' => $collaborativeProjects
        ]);
    }

    // Reste du contrôleur inchangé
    // ...
}