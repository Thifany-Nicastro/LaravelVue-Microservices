<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;
use App\Models\Role;

class PermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = Permission::all();
        $admin = Role::whereName('Admin')->first();
        $editor = Role::whereName('Editor')->first();
        $viewer = Role::whereName('Viewer')->first();

        foreach ($permissions as $permission) {
            $admin->permissions()->attach($permission);

            if ($permission->name != 'edit_roles') {
                $editor->permissions()->attach($permission);
            }

            if (str_contains($permission->name, 'view')) {
                $viewer->permissions()->attach($permission);
            }
        }
    }
}
