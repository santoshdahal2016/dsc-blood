@extends( 'User::app' )
@section('content-header')
    <div class="block-header">
        <div class="row">
            <div class="col-sm-6">
                <h2 class="align-left">
                    Api Settings
                    <small></small>
                </h2>
            </div>
            <div class="col-sm-6 ">
                <ol class="breadcrumb breadcrumb-col-teal right">
                    <li><a href="{{ url('/dashboard') }}"><i class="material-icons">home</i> Home</a></li>
                    <li class="active">Api Settings</li>
                </ol>
            </div>
        </div>


    </div>


@endsection


@section('content')

    @include('Apisettings::apisettings.partials.passwordclient')

    <div id="app" >
        <passport-clients></passport-clients>

        <passport-personal-access-tokens></passport-personal-access-tokens>
    </div>
@endsection


@section('scripts')
    <script src="{{ asset('js/app.js') }}"></script>

    <script>
        $('.action-link').click(function () {
            var client_name = $(this).closest('tr').find('.api_client_name').text().trim();
            $('#update-client-name').val(client_name);
            var client_id=$(this).closest('tr').find('.api_client_id').text().trim();
            $('#update-client-id').val(client_id);
            console.log(client_id);

        });

        $(".text-danger").on("click", function () {
            return confirm("Do you want to delete?");
        });

    </script>
@endsection