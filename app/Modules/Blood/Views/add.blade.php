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
                    {!! Form::open(array('route' => 'blood.add','method'=>'POST','files'=>'true')) !!}
                    <div class="box-body">

                        <label for="inputName3"   >Name</label>

                        <div class="form-group">
                            <div class="form-line">
                                {!! Form::text('name', null, ['placeholder'=>'name','required'=>'required','class'=>'form-control']) !!}
                                <div class="help-info">*Required</div></div>
                        </div>

                        <label for="inputEmail3"   >Email</label>

                        <div class="form-group">
                            <div class="form-line">
                                {!! Form::text('phone', null, ['placeholder'=>'phone','required'=>'required','class'=>'form-control']) !!}
                                <div class="help-info">*Required</div> </div>
                        </div>

                        {!! Form::submit('Upload',['class'=>'btn btn-primary']) !!}
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>


@endsection

@section('scripts')

@endsection



