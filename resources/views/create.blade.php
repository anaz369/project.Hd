@extends('welcome')
@section('content')
<h3>Creat new user</h3>
<form action="{{route('save.user')}}" method="post">
    @csrf
    <p></p>
<div class="form-group">
    <label >Name</label>
    <input type="text" name="name" class="form-control" placeholder="Enter name">
  </div>
  <div class="form-group">
    <label >Email address</label>
    <input type="email" class="form-control" name="email" id="exampleInputEmail1" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label >Mobile</label>
    <input type="number"  name="mobile" class="form-control"  placeholder="Mobile">
  </div>
  <div class="form-group">
  <label >Status</label>
    <select type="" class="form-control" id="exampleCheck1" name="status">
        <option value="1">Active</option>
        <option value="0">inactive</option>
    </select>
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
@endsection
