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
                @if(Session::has('message'))
                    <div class="alert alert-success"><span class="glyphicon glyphicon-ok"></span><em> {!! session('message') !!}</em></div>
                @endif
                <div class="header">
                    <h3 class="box-title">Add Data</h3>

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

                        <label for="inputEmail3"   >Phone</label>

                        <div class="form-group">
                            <div class="form-line">
                                {!! Form::text('phone', null, ['placeholder'=>'phone','required'=>'required','class'=>'form-control']) !!}
                                <div class="help-info">*Required</div> </div>
                        </div>

                        <label for="inputEmail3"   >Weight</label>

                        <div class="form-group">
                            <div class="form-line">
                                {!! Form::text('weight', null, ['placeholder'=>'weight in kg','required'=>'required','class'=>'form-control']) !!}
                                <div class="help-info">*Required</div> </div>
                        </div>


                        <label for="inputEmail3"   >Date of Birth</label>

                        <div class="form-group">
                            <div class="form-line">
                                {!! Form::text('date_of_birth', null, ['placeholder'=>'2053-09-23','id'=>'nepaliDate5','required'=>'required','class'=>'form-control']) !!}
                                <div class="help-info">*Required</div> </div>
                        </div>


                        <div class="form-group ">
                            <div class="select-style">
                                <select class="form-control" name="blood" required>
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="O+">O+</option>
                                    <option value="AB+">AB+</option>
                                    <option value="A-">A-</option>
                                    <option value="B-">B-</option>
                                    <option value="O-">O-</option>
                                    <option value="AB-">AB-</option>
                                    <option value="UNKNOWN">UNKNOWN</option>
                                </select>
                            </div>
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
    <script type="text/javascript" src="http://sajanmaharjan.com.np/nepali.datepicker/nepali.datepicker.v2.2.min.js"></script>
    <link rel="stylesheet" type="text/css" href="http://sajanmaharjan.com.np/nepali.datepicker/nepali.datepicker.v2.2.min.css" />
<script>
    $(document).ready(function(){
        $('#nepaliDate5').nepaliDatePicker({
            npdMonth: true,
            npdYear: true,
            npdYearCount: 100
        });
    });

</script>
@endsection



