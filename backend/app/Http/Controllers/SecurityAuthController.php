<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class SecurityAuthController extends Controller
{

    public function login(Request $request)
    {
        // Validación de datos
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // Credenciales para autenticar al usuario
        $credentials = request(['email', 'password']);
        
        // Verificamos las credenciales del usuario
        if (!Auth::attempt($credentials)) {
            // Retornamos un mensaje de error
            return response()->json([
                'token' => null
            ], 401);
        }
        // Si las credenciales son correctas, generamos un token para el usuario
        $user = $request->user();
        $token = $user->createToken('authToken')->plainTextToken;
        // Retornamos solo el token en formato de texto plano
        return response()->json([
            'token' => $token
        ], 200);
    }

    public function logout(Request $request)
    {
        // Revocar el token de autenticación del usuario actual
        $request->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        // Retornar una respuesta exitosa
        return response()->json([
            'message' => 'Sesión cerrada exitosamente'
        ], 200);
    }

}
