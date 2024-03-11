<?php

namespace App\Http\Controllers;

use App\Models\UserReg;
use Exception;
use Illuminate\Http\Request;

use Psy\Readline\Hoa\Console;

class UserController extends Controller
{
    //
    public function store(Request $request)
{
    // $validatedData = $request->validate([
    //     'email' => 'required|email',
    //     'name' => 'required|string|max:255',
    //     'password' => 'required|string|min:6',
    //     'age'=> 'required|integer',
        
    //     'profpic'=> 'image|mimes:jpeg,png,jpg,gif,svg',
    //     'userroll' => 'required|string|max:255',

    // ]);
    $validatedData = $request->validate([
        'email' => 'email',
        'name' => 'string|max:255',
        'password' => 'string|min:6',
        'userroll' => 'string|max:255',

    ]);

    // Get the contents of the image file
    // $request->validate([
    //     'profpic' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    // ]);
    // $imageData = file_get_contents($request->file('profpic')->getRealPath());
    //$validatedData['profpic'] = $imageData;
    // // Hash the password before storing it in the database
     $validatedData['password'] = bcrypt($validatedData['password']);

    // Create a new student with the hashed password
    try{
        $userreg = UserReg::create($validatedData);
        if($userreg)
           {
               return response()->json([
                   'status'=>200,
                   'Msg'=>'Data added success'
               ],200);
           }
           else{
               return response()->json([
                   'status'=>500,
                   'Msg'=>'Insertion failed'
               ],500);
             }
    }
    catch (Exception $e) {
        // Handle generic exception
        return response()->json(['errors.generic', ['message' => $e->getMessage()]], 500);
    }
    
    // Additional logic...

   // return response()->json($userreg['profpic'], 201);
    //return response()->json($stud, 201);
}
public function login(Request $request)
    {
        // $validatedData = $request->validate([
        //     'email' => 'email',
            
        //     'password' => 'string|min:6',
        $email = $request->input('email');
        $password = $request->input('password');  
     

        $user = UserReg::where('email', $email)->where('password', $password)->first();
        if($user->profpic!=null)
        {
            $user->profpic = base64_encode($user->profpic);
        }
     else
     {
        $user->profpic =null; 
     }

    if (!$user) {
        // User found
        //  return $user;
        return response()->json(['error' => 'User not found']);
        //return response()->json([ $user->userroll], 406);
        //return response()->json([$user], 406);
    }
    return response()->json( $user);
    // } else {
    //     // User not found
        
    // }
    }
    public function getUser($id)
    {
        
        $user = UserReg::find( $id);
         $user->profpic = base64_encode($user->profpic);

        if (!$user) {
           
            
            return response()->json(['error' => 'User not found'], 404);
        } 
        return response()->json($user);
        
    }

    public function update(Request $request, $id)
    {
       
        
        $user=UserReg::find($id);
  
        $user->update($request->all());
        $user=UserReg::find($id);
        if($user->profpic!=null)
        {
            $user->profpic = base64_encode($user->profpic);
        }
     else
     {
        $user->profpic =null; 
     }
        return response( )->json($user);
        
    }

     public function profileLeft()
    {
       $users=UserReg::take(4)->get();
    
       foreach ($users as $user) {
        if ($user->profpic != null) {
            $user->profpic = base64_encode($user->profpic);
        } else {
            $user->profpic = null;
        }
    }
    
         return response()->json($users);  
    }
    public function profileMiddle()
    {
       
       $users = UserReg::whereBetween('id', [2, 6])->get();
       foreach ($users as $user) {
        if ($user->profpic != null) {
            $user->profpic = base64_encode($user->profpic);
        } else {
            $user->profpic = null;
        }
    }
    
         return response()->json($users);  
    }

    public function profileRight()
    {
       
       $users = UserReg::whereBetween('id', [2, 6])->inRandomOrder()->get();
       foreach ($users as $user) {
        if ($user->profpic != null) {
            $user->profpic = base64_encode($user->profpic);
        } else {
            $user->profpic = null;
        }
    }
    
         return response()->json($users);  
    }
}