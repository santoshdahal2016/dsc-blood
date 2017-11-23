@extends( 'User::app' )
@section('content-header')
    <div class="block-header">
        <div class="row">
            <div class="col-sm-6">
                <h2 class="align-left">
                    Permissions
                    <small>Edit Permission</small>
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
@section('styles')
    <link rel="stylesheet" href="{{ asset('assets/plugins/select2/select2.min.css') }}">
@endsection

@section('content')
<div class="row">
   
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Edit Permission
                    </h2>

                </div>
                @include('User::errors')
                <div class="body">
                   

                    {!! Form::model($permission, ['method' => 'post','url' => '/permission_edit/'.$permission->id,'class'=>'']) !!}
            {{ csrf_field() }}
            <div class="box-body">
               
                    <label for="inputName3" >Name</label>

                   <div class="form-group">
                            <div class="form-line">
                        {!! Form::text('name', null, ['placeholder'=>'name','class'=>'form-control','required'=>'required']) !!}
                                <div class="help-info">*Required</div></div>
                </div>
               
                    <label for="inputEmail3" >Display Name</label>

                   <div class="form-group">
                            <div class="form-line">
                        {!! Form::text('display_name', null, ['placeholder'=>'Display Name','class'=>'form-control','required'=>'required']) !!}
                                <div class="help-info">*Required</div></div>
                </div>
               
                    <label for="inputEmail3" >Description</label>

                   <div class="form-group">
                            <div class="form-line">
                        {!! Form::text('description', null, ['placeholder'=>'Description','class'=>'form-control','required'=>'required']) !!}
                                <div class="help-info">*Required</div></div>
                </div>

               
                    <label for="roles_list" >Attach Role/s</label>

                   <div class="form-group">
                            <div class="form-line">
                        {!! Form::select('roles_list[]',$drop_roles, $select_roles, ['id' => 'optgroup','class' => 'ms', 'multiple','required'=>'required']) !!}
                                <div class="help-info">*Required</div> </div>
                </div>
            </div>
            <!-- /.box-body -->
           
                <button type="submit" class="btn btn-info ">Update Permission</button>
          
            <!-- /.box-footer -->
            {!! Form::close() !!}
        </div>
    </div>
    <!-- /.col-md-6 -->
</div>
<!-- /.row -->
@endsection

@section('scripts')
<script  src="{{ asset('assets/plugins/select2/select2.full.min.js') }}"></script>
    <script type="text/javascript">
        $("#roles_list").select2({
            placeholder: 'Choose Roles'
        });

    </script>

@endsection