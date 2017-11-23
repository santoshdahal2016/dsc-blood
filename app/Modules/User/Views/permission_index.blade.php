@extends( 'User::app' )
@section('content-header')
    <div class="block-header">
        <div class="row">
            <div class="col-sm-6">
                <h2 class="align-left">
                    Permissions
                    <small>Manage Permissions</small>
                </h2>
            </div>
            <div class="col-sm-6 ">
                <ol class="breadcrumb breadcrumb-col-teal right">
                    <li><a href="{{ url('/dashboard') }}"><i class="material-icons">home</i> Home</a></li>
                    <li class="active">Permissions</li>
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
                    <h3 class="box-title"><a href="{{ url('/permission_create') }}"><button class="btn btn-sm btn-success">Add Permission</button>
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

                                <th>Action</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Display Name</th>
                                <th>Description</th>

                                <th>Action</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            @foreach($permission as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{ $item->name }}</td>
                                    <td>{{ $item->display_name }}</td>
                                    <td>{{ $item->description}}</td>
                                    <td><a href="{{ url('/permission_edit/'.$item->id) }}">
                                            <button class="btn btn-primary">Edit</button>
                                        </a> <a href="{{ url('/permission_delete/'.$item->id) }}">
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



