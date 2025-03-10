<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);


        // Disable foreign key checks to truncate tables
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        
        // Truncate existing data
        User::truncate();
        Project::truncate();
        Task::truncate();
        DB::table('project_user')->truncate();
        
        // Re-enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // Create users
        $user1 = User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password'),
        ]);

        $user2 = User::create([
            'name' => 'Jane Smith',
            'email' => 'jane@example.com',
            'password' => bcrypt('password'),
        ]);

        // Create a project owned by user1
        $project = Project::create([
            'title' => 'Sample Project',
            'description' => 'This is a sample project for demonstration.',
            'user_id' => $user1->id,
        ]);

        // Attach user2 as a collaborator (project_user pivot)
        DB::table('project_user')->insert([
            'project_id' => $project->id,
            'user_id' => $user2->id,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Create tasks for the project
        Task::create([
            'title' => 'Task 1',
            'description' => 'Complete the first task',
            'project_id' => $project->id,
            'completed' => false,
        ]);

        Task::create([
            'title' => 'Task 2',
            'description' => 'Review the project requirements',
            'project_id' => $project->id,
            'completed' => true,
        ]);
    }
}
