<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        return response([
            'user' => User::create($request->all())
        ], Response::HTTP_CREATED);
    }

    public function login(Request $request)
    {
        if (auth()->attempt($request->all())) {
            return response([
                'user' => auth()->user(),
                'access_token' => auth()->user()->createToken('authToken')->accessToken
            ], Response::HTTP_OK);
        }

        return response([
            'message' => 'This User does not exist, check your details'
        ], Response::HTTP_UNAUTHORIZED);
    }
}
