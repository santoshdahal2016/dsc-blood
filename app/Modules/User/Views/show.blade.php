@extends( 'User::app' )
{{--{{ dd($user) }}--}}
@section('content-header')
    <section class="content-header">
        <h1>
            User
            <small>Show User</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="{{ url('/dashboard') }}"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">User</li>
        </ol>
    </section>
@endsection

@section('content')
        <div class="panel">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-responsive dataTable">
                            <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $user->id }}</td>
                                <td>{{ $user->name }}</td>
                                <td>{{ $user->email }}</td>
                                <td><a href="{{ url('/user_edit/'.$user->id) }}">
                                        <button class="btn btn-primary">Edit</button>
                                    </a> <a href="{{ url('/user_delete/'.$user->id) }}">
                                        <button class="btn btn-danger">Delete</button>
                                    </a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.col-md-12 -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.panel-body -->
        </div>
        <!-- /.class -->
@endsection