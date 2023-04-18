@extends('welcome')
@section('content')
<h3>edit existing user</h3>
<form action="{{route('save.edit')}}" method="post">
    @csrf
    <p></p>
  <input type="hidden" name="user_id" value="{{$user->id}}" >
<div class="form-group">
    <label >Name</label>
    <input type="text" name="name" class="form-control" value="{{$user->name}}" placeholder="Enter name">
  </div>
  <div class="form-group">
    <label >Email address</label>
    <input type="email" class="form-control" name="email" id="exampleInputEmail1" value="{{$user->email}}" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label >Mobile</label>
    <input type=""  name="mobile" class="form-control" value="{{$user->mobile}}"  placeholder="Mobile">
  </div>
  <div class="form-group">
  <label >Status</label>
    <select type="" class="form-control" id="exampleCheck1" name="status">
        <option value="1" @if($user->staus==1) selected='selected'@endif >Active</option>
        <option value="0" @if($user->staus==0) selected='selected'@endif >inactive</option>
    </select>
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
@endsection
