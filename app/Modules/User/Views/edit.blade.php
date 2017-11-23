@extends( 'User::app' )
@section('content-header')
    <div class="block-header">
        <div class="row">
            <div class="col-sm-6">
                <h2 class="align-left">
                    Users
                    <small>Edit Users</small>
                </h2>
            </div>
            <div class="col-sm-6 ">
                <ol class="breadcrumb breadcrumb-col-teal right">
                    <li><a href="{{ url('/dashboard') }}"><i class="material-icons">home</i> Home</a></li>
                    <li class="active">Users</li>
                </ol>
            </div>
        </div>


    </div>

@endsection
@section('content')
     
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                       Edit User
                    </h2>

                </div>
                @include('User::errors')
                <div class="body">
                   

                    {!! Form::model($user, ['method' => 'post','url' => '/user_edit/'.$user->id,'class'=>'']) !!}
                {{ csrf_field() }}
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
                                {!! Form::email('email', null, ['placeholder'=>'name','required'=>'required','class'=>'form-control']) !!}
                                <div class="help-info">*Required</div> </div>
                        </div>
                         
                            <label for="inputPassword3"   >Password</label>

                             <div class="form-group">
                            <div class="form-line">
                                {!! Form::password('password', ['placeholder'=>'password','required'=>'required','class'=>'form-control']) !!}
                                <div class="help-info">*Required</div></div>
                        </div>
                         
                            <label for="inputPasswordC3"   >Confirm Password</label>

                             <div class="form-group">
                            <div class="form-line">
                                <input type="password" required='required' class="form-control" name="password_confirmation" id="inputPasswordC3"
                                       placeholder="Confirm Password">
                                <div class="help-info">*Required</div></div>
                        </div>

                         
                           {!! Form::label('roles_id', 'Role:', ['class' => ' visible-ie8 visible-ie9']) !!}
                            <div class="form-group">
                            <div class="form-line">
                            {!! Form::select('roles_id',$all_roles, $selected_role, ['class' => 'form-control','required'=>'required']) !!}
                                <div class="help-info">*Required</div></div>
                        </div>
                    </div>
                    <!-- /.box-body -->

                        <button type="submit" class="btn btn-info ">Update User</button>

                    <!-- /.box-footer -->
                {!! Form::close() !!}
            </div>
        </div>
        <!-- /.col-md-6 -->
    </div>
    <!-- /.row -->
@endsection