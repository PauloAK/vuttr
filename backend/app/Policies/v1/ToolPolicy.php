<?php

namespace App\Policies\v1;

use App\Models\Tool;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ToolPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Tool  $tool
     * @return mixed
     */
    public function delete(User $user, Tool $tool)
    {
        return $user->id === $tool->user_id;
    }
}
