<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Récupérer les projets dont l'utilisateur est propriétaire
     */
    public function ownedProjects()
    {
        return $this->hasMany(Project::class);
    }

    /**
     * Récupérer les projets sur lesquels l'utilisateur collabore
     */
    public function collaborativeProjects()
    {
        return $this->belongsToMany(Project::class, 'project_user')->withTimestamps();
    }

    /**
     * Récupérer tous les projets auxquels l'utilisateur a accès
     * (combinaison des projets possédés et collaboratifs)
     */
    public function getAllAccessibleProjects()
    {
        $ownedProjectIds = $this->ownedProjects()->pluck('id');
        $collaborativeProjectIds = $this->collaborativeProjects()->pluck('id');

        $allProjectIds = $ownedProjectIds->merge($collaborativeProjectIds);

        return Project::whereIn('id', $allProjectIds)->get();
    }
}