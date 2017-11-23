@extends( 'User::app' )
@section('content-header')
    <style>
        .btn-circle-lg {
            border: none;
            outline: none !important;
            overflow: hidden;
            width: 110px;
            height: 110px;
            -webkit-border-radius: 50% !important;
            -moz-border-radius: 50% !important;
            -ms-border-radius: 50% !important;
            border-radius: 50% !important;
        }

         a:hover {
            text-decoration: none;
        }

        .textcolorchange{
            font-family: monospace;
            font-size: 16px;
            color: #fff;
        }
        .black{
            color: #555555 !important;
        }

    </style>
    <div class="container-fluid">
        <div class="block-header">
            <h2>DASHBOARD</h2>
        </div>

@endsection

@section('content')



@endsection


@section('scripts')
    <script src="{{ url('/plugins/jquery-countto/jquery.countTo.js')}}"></script>
    <script src="{{ url('/js/pages/index.js')}}"></script>
@endsection

