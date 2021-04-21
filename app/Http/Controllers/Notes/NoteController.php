<?php

namespace App\Http\Controllers\Notes;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function store()
    {
    $subject =\App\Models\Subject::findOrFail(request('subject'));
       $note= Note::create([
            'subject_id' =>$subject->id,
            'title' => request('title'),
            'slug' => \Str::slug(request('slug')),
            'description' => request('description'),
        ]);

        return response()->json([
            'message' =>'Note was created successfully.',
            'note' =>$note,
        ]);

    }
}
