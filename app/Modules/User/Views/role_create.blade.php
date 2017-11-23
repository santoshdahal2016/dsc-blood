@extends( 'User::app' )
@section('content-header')
    <div class="block-header">
        <div class="row">
            <div class="col-sm-6">
                <h2 class="align-left">
                    Roles
                    <small>Create Role</small>
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
@section('styles')
    <link rel="stylesheet" href="{{ asset('assets/plugins/select2/select2.min.css') }}">
@endsection

@section('content')
 
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        New Role
                    </h2>

                </div>
                @include('User::errors')
                <div class="body">
                  
                    <form  action="{{ url('/role_create/') }}" method="post">
                    {{ csrf_field() }}
                    <div class="box-body">
                     
                            <label for="inputName3" >Name</label>

                             <div class="form-group">
                            <div class="form-line">
                                <input type="text" required='required'  class="form-control" name="name" id="inputName3" placeholder="Name" value="{{ old('name') }}">
                                <div class="help-info">*Required</div></div>
                        </div>
                     
                            <label for="inputEmail3" >Display name</label>

                             <div class="form-group">
                            <div class="form-line">
                                <input type="text" required='required'  class="form-control" name="display_name" id="inputName3" placeholder="Display Name" value="{{ old('name') }}">

                                <div class="help-info">*Required</div></div>
                        </div>
                     
                            <label for="inputPassword3" >Description</label>

                             <div class="form-group">
                            <div class="form-line">
                                <input type="text" required='required'  class="form-control" name="description" id="inputName3" placeholder="Description" value="{{ old('name') }}">
                                <div class="help-info">*Required</div>
                            </div>
                        </div>
                     
                            <label for="permission_list" >Attach Permissions:</label>

                             <div class="form-group">
                            <div class="form-line">
                                {!! Form::select('permission_list[]',$drop_perms, null, ['id' => 'optgroup', 'class' => 'ms', 'multiple','required'=>'required']) !!}
                                <div class="help-info">*Required</div>
                            </div>
                        </div>

                    </div>
                    <!-- /.box-body -->
                        <button type="submit" class="btn btn-info ">Add Role</button>

                    <!-- /.box-footer -->
                </form>
            </div>
        </div>
        <!-- /.col-md-6 -->
    </div>
    <!-- /.row -->
@endsection

@section('scripts')
<script  src="{{ asset('assets/plugins/select2/select2.full.min.js') }}"></script>
    <script type="text/javascript">
        $("#permission_list").select2({
            placeholder: 'Choose Permissions'
        });

    </script>

@endsection