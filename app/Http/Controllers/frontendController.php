<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hamcrest\Core\AllOf;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\BinaryOp\Identical;

use function GuzzleHttp\Promise\all;

class frontendController extends Controller
{
  public function homePage(){
    $users=User::latest()->withTrashed()->limit(10)->get();
    // return $users;
    return view('home',compact('users'));
  }

  public function create(){
    return view('create');
  }

  public function saveUser(){
    $name=request('name');
    $email=request('email');
    $mobile=request('mobile');
    $status=request('status');


    user::create([
        'name'=>$name,
    'email'=>$email,
    'mobile'=>$mobile,
    'status'=>$status,
]);
     
    return redirect()->route('home')
    ->with('success','User created successfully.');


  }

  public function editUser($userId){
    $user=User::find(decrypt($userId));
    return view('edit',compact('user'));
  }

  public function saveEdit(){
     $user_id=request('user_id');
     $user=user::find($user_id);
     
      $name=request('name');
    $email=request('email');
    $mobile=request('mobile');
    $status=request('status');
     $user->update([
        'name'=>$name,
        'email'=>$email,
        'mobile'=>$mobile,
        'status'=>$status,
     ]);
     return redirect()->route('home')
     ->with('success','updated successfully.');
  }

  public function delete($userId){
    $user=User::find(decrypt($userId));
    if($user != null){
      $user->delete();
      return  redirect()->route('home')
    ->with('success','deleted successfully.');
    }
  }

  public function forceDelete($userId){
    $user=User::find(decrypt($userId));
    if($user != null){
      $user->forceDelete();
      return  redirect()->route('home')
    ->with('success','forceDeleted completed successfully.');
    }
  }

  public function activateUser($userId){
      $user=User::withTrashed()->find(decrypt($userId));
      if($user != null){
        $user->restore();
        return  redirect()->route('home')
      ->with('success','Activated successfully.');
      }else
      return redirect()->route('home')->with(['sucess'=> 'Wrong ID!!']);
  }
}
