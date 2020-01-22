@extends( 'User::app' )
@section('content-header')
    <div class="block-header">
        <div class="row">
            <div class="col-sm-6">
                <h2 class="align-left">
                    Users
                    <small>Create Users</small>
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
    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        New User
                    </h2>

                </div>
                @include('User::errors')
                <div class="body">


                    <form  action="{{ url('/user_create/') }}" method="post">
                    {{ csrf_field() }}
                    <div class="box-body">
                    
                            <label for="inputName3"  >Name</label>

                            <div class="form-group">
                            <div class="form-line">
                                <input type="text" required='required' class="form-control" name="name" id="inputName3" placeholder="Name" value="{{ old('name') }}">
                                <div class="help-info">*Required</div></div>
                        </div>
                    
                            <label for="inputEmail3"  >Email</label>

                            <div class="form-group">
                            <div class="form-line">
                                <input type="email"required='required'  class="form-control" name="email" id="inputEmail3" placeholder="Email" value="{{ old('email') }}">
                                <div class="help-info">*Required</div> </div>
                        </div>


                                                    <label for="inputEmail3"  >Phone Number</label>

                            <div class="form-group">
                            <div class="form-line">
                                <input type="text"required='required'  class="form-control" name="phone" id="idphone3" placeholder="Phone" value="{{ old('phone') }}">
                                <div class="help-info">*Required</div> </div>
                        </div>
                    
                    
                            <label for="inputPassword3"  >Password</label>

                            <div class="form-group">
                            <div class="form-line">
                                <input type="password" required='required' class="form-control" name="password" id="inputPassword3"
                                       placeholder="Password" >
                                <div class="help-info">*Required</div></div>
                        </div>
                    
                            <label for="inputPasswordC3"  >Confirm Password</label>

                            <div class="form-group">
                            <div class="form-line">
                                <input type="password" required='required' class="form-control" name="password_confirmation" id="inputPasswordC3"
                                       placeholder="Confirm Password">
                                <div class="help-info">*Required</div></div>
                        </div>

                    
                           {!! Form::label('roles_id', 'Role:', ['class' => ' visible-ie8 visible-ie9']) !!}
                           <div class="form-group">
                            <div class="form-line">
                            {!! Form::select('roles_id',$all_roles, 'Choose Role', ['class' => 'form-control','required'=>'required']) !!}
                                <div class="help-info">*Required</div></div>
                        </div>
                    </div>
                    <!-- /.box-body -->

                        <button type="submit" class="btn btn-info ">Add User</button>

                    <!-- /.box-footer -->
                </form>

        </div>
        <!-- /.col-md-6 -->
    </div>    </div>
    </div>
        <!-- /.row -->
@endsection