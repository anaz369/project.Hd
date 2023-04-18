<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Users Details</h1>
    @if(session()->has('success'))<h5>{{session()->get('success')}}</h5>@endif
    <a class="btn btn-primary" style="float: right;
    margin: 14px 90px;" href="{{route('create')}}">Add new</a>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  @foreach($users as $user)
    <tbody>
    <tr>
      <th scope="row">{{$loop->iteration}}</th>
      <td>{{$user->name}}</td>
      <td>{{$user->email}}</td>
      <td>{{$user->mobile}}</td>
      <td>@if($user->trashed()) Trashed @else {{$user->status_text}} @endif</td>
      <td>
        <a class="btn btn-secondary" href="{{route('edit.user',encrypt($user->id))}}">edit</a> 
        <a class="btn btn-info" href="{{route('delete.user',encrypt($user->id))}}">delete</a>
        @if($user->trashed())<a class="btn btn-success" href="{{route('activate.user',encrypt($user->id))}}">Activate</a>@endif
        <a class="btn btn-danger  " href="{{route('forcedelete.user',encrypt($user->id))}}">forcedelete</a>
      </td>
    </tr>
  </tbody>
  @endforeach

</table>
  </body>
</html>

