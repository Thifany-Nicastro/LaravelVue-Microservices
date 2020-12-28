<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait Fileable 
{
    public function storeFile(Request $request, $fieldName, $directory)
    {
        if (!$request->hasFile($fieldName)) {
            return null;
        }

        // if (!$request->file($fieldname)->isValid()) {
        //     return response()->json([
        //         'message' => 'File is not valid'
        //     ], Response::HTTP_UNPROCESSABLE_ENTITY);
        // }

        $file = $request->file($fieldName);
        $fileName = time().'_'.$file->getClientOriginalName();
        $url = $file->storeAs($directory, $fileName, 'public');

        return $url;
    }
}