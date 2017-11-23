@extends( 'User::app' )
@section('content-header')
    <div class="block-header">
        <div class="row">
            <div class="col-sm-6">
                <h2 class="align-left">
                    Roles
                    <small>Manage Roles</small>
                </h2>
            </div>
            <div class="col-sm-6 ">
                <ol class="breadcrumb breadcrumb-col-teal right">
                    <li><a href="{{ url('/dashboard') }}"><i class="material-icons">home</i> Home</a></li>
                    <li class="active">Roles</li>
                </ol>
            </div>
        </div>


    </div>

@endsection

@section('content')
    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h3 class="box-title"><a href="{{ url('/role_create') }}"><button class="btn btn-sm btn-success">Add Role</button>
                            <!-- /.btn --></a></h3>

                </div>
                <div class="body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                            <thead>

                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Display Name</th>
                                <th>Description</th>
                                <th>Permissions</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Display Name</th>
                                <th>Description</th>
                                <th>Permissions</th>
                                <th>Action</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            @foreach($role as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{ $item->name }}</td>
                                    <td>{{ $item->display_name }}</td>
                                    <td>{{ $item->description}}</td>
                                    <td>
                                        <ul>
                                            <?php $permissions = $item->perms()->get(); ?>
                                            @if(!empty($permissions))
                                                @foreach($permissions as $role_perm)
                                                    <li>{{ $role_perm->display_name }}</li>
                                                @endforeach
                                            @else
                                                {{ '-' }}
                                            @endif
                                        </ul>
                                    </td>
                                    <td><a href="{{ url('/role_edit/'.$item->id) }}">
                                            <button class="btn btn-primary">Edit</button>
                                        </a> <a href="{{ url('/role_delete/'.$item->id) }}">
                                            <button class="btn btn-danger">Delete</button>
                                        </a></td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')

@endsection


