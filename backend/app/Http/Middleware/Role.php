<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Role
{

    public function handle(Request $request, Closure $next, $roles)
    {
        // Divide la cadena de roles permitidos en un array
        $allowedRoles = explode('|', $roles);

        // Obtiene el nombre del rol del usuario actual en minúsculas
        $roleName = strtolower($request->user()->role->name);

        // Si el rol del usuario es gerente, permite el acceso a todas las rutas
        if ($roleName == 'gerente') {
            return $next($request);
        }

        // Verifica si el nombre del rol del usuario está en la lista de roles permitidos
        if (!in_array($roleName, $allowedRoles)) {
            return abort(403, __('Sin autorización'));
        }

        return $next($request);
    }
}
