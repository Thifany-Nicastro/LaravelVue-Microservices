<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {

    }

    public function login(Request $request)
    {
        if (!auth()->attempt($request->all())) {
            return response([
                'message' => 'This User does not exist, check your details'
            ], Response::HTTP_UNAUTHORIZED);
        }

        return response([
            'user' => auth()->user(),
            'access_token' => auth()->user()->createToken('authToken')->accessToken
        ], Response::HTTP_OK);
    }
}
