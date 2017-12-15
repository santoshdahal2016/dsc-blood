@extends( 'User::app' )
@section('content-header')
    <div class="block-header">
        <div class="row">
            <div class="col-sm-6">
                <h2 class="align-left">
                    Blood
                    <small>Manage Blood</small>
                </h2>
            </div>
            <div class="col-sm-6 ">
                <ol class="breadcrumb breadcrumb-col-teal right">
                    <li><a href="{{ url('/dashboard') }}"><i class="material-icons">home</i> Home</a></li>
                    <li >Blood</li><li class="active">Import</li>
                </ol>
            </div>
        </div>


    </div>

@endsection

@section('content')
    @include('User::errors')
    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h3 class="box-title">Import Blood From File</h3>

                </div>
                <div class="body">
                    {!! Form::open(array('route' => 'blood.import','method'=>'POST','files'=>'true')) !!}
                    <div class="box-body">
                        <label for="inputName3" >Select File</label>

                        <div class="form-group">
                            <div class="form-line">
                                {!! Form::file('file', array('class' => 'form-control')) !!}
                                {!! $errors->first('file', '<p class="alert alert-danger">:message</p>') !!}
                                <div class="help-info">*Required</div>
                            </div>
                        </div>
                            {!! Form::submit('Upload',['class'=>'btn btn-primary']) !!}
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                </div>
                <div class="body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                            <thead>

                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Blood Group</th>
                                {{--<th>Action</th>--}}
                            </tr>
                            </thead>
                            @foreach($bloods as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{ $item->name }}</td>
                                    <td>{{ $item->phone }}</td>
                                    <td>
                                        {{ $item->blood_group }}
                                    </td>
                                    {{--<td><a href="{{ url('/user_edit/'.$user->id) }}">--}}
                                            {{--<button class="btn btn-primary">Edit</button>--}}
                                        {{--</a> <a href="{{ url('/user_delete/'.$user->id) }}">--}}
                                            {{--<button class="btn btn-danger">Delete</button>--}}
                                        {{--</a></td>--}}
                                </tr>
                            @endforeach
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Blood Group</th>
                                {{--<th>Action</th>--}}
                            </tr>
                            </tfoot>
                            <tbody>

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



