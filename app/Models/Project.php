<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'user_id',
    ];

    /**
     * Récupérer l'utilisateur qui possède ce projet
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Récupérer les tâches associées à ce projet
     */
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    /**
     * Récupérer les collaborateurs associés à ce projet
     */
    public function collaborators()
    {
        return $this->belongsToMany(User::class, 'project_user')->withTimestamps();
    }

    /**
     * Vérifier si un utilisateur a accès à ce projet
     * (soit comme propriétaire, soit comme collaborateur)
     */
    public function hasAccess(User $user)
    {
        return $this->user_id === $user->id || $this->collaborators->contains($user->id);
    }
}