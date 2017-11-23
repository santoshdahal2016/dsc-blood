<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>BloodinCloud | Secure Blood Search Engine</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <link rel="stylesheet" href="{{ url('/assets/plugins/datepicker/datepicker3.css') }}">
    <link rel="stylesheet"
          href="{{ url('/plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css') }}"/>

    <link rel="stylesheet" href="{{ url('/assets/styles/bootstrap-datetimepicker.min.css') }}"/>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet"
          type="text/css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
    <link href="{{ url('/plugins/sweetalert/sweetalert.css') }}" rel="stylesheet">

    <!-- Bootstrap Core Css -->
    <link href="{{ url('/plugins/bootstrap/css/bootstrap.css') }}" rel="stylesheet">

    <!-- Waves Effect Css -->
    <link href="{{ url('/plugins/node-waves/waves.css') }}" rel="stylesheet"/>

    <link href="{{ url('plugins/animate-css/animate.css') }}" rel="stylesheet"/>
    <link href="{{ url('/plugins/dropzone/dropzone.css') }}" rel="stylesheet"/>
    <!-- Dropzone Css -->
    <link href="{{ url('/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css') }}" rel="stylesheet"/>
    <link href="{{ url('/plugins/multi-select/css/multi-select.css') }}" rel="stylesheet"/>
    <link href="{{ url('/plugins/jquery-spinner/css/bootstrap-spinner.css') }}" rel="stylesheet"/>
    <link href="{{ url('/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css') }}" rel="stylesheet"/>
    <link href="{{ url('/plugins/bootstrap-select/css/bootstrap-select.css') }}" rel="stylesheet"/>
    <link href="{{ url('/plugins/nouislider/nouislider.min.css') }}" rel="stylesheet"/>
    <link href="{{ url('/plugins/waitme/waitMe.css') }}" rel="stylesheet"/>
    <link href="{{ url('/plugins/jquery-datatable/extensions/ColVis/css/dataTables.colVis.css') }}" rel="stylesheet"/>

    <!-- Custom Css -->
    <link href="{{ url('/css/style.css') }}" rel="stylesheet">
    <link href="{{ url('/css/circle.css') }}" rel="stylesheet">
    <link href="{{ url('/plugins/sweetalert/sweetalert.css') }}" rel="stylesheet">

    <!-- AdminBSB Themes. You can choose a theme from css/themes instead of get all themes -->
    <link href="{{ url('/css/themes/all-themes.css') }}" rel="stylesheet"/>

    <!-- Animation Css -->

    <link href="{{ url('/plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css') }}" rel="stylesheet"/>

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-notify/0.2.0/css/bootstrap-notify.min.css"
          integrity="sha256-xs2k744k81ISIOyl14txiKpaRncakLx29JiAve4063w=" crossorigin="anonymous"/>

    <link type="text/css" href="//gyrocode.github.io/jquery-datatables-checkboxes/1.2.9/css/dataTables.checkboxes.css"
          rel="stylesheet"/>


    @yield('styles')

</head>
<body class="theme-red">
<div class="page-loader-wrapper">
    <div class="loader">
        <div class="preloader pl-size-xl">
            <div class="spinner-layer pl-green">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        <p style="color: red !important;">Please wait...</p>
    </div>
</div>

<div class="overlay"></div>

<div class="search-bar">
    <div class="search-icon">
        <i class="material-icons">search</i>
    </div>
    <input type="text" placeholder="START TYPING...">
    <div class="close-search">
        <i class="material-icons">close</i>
    </div>
</div>


@include('User::main-header')
@include('User::main-sidebar')

<section class="content">
    <div class="container-fluid">
        @yield('content-header')
        @yield('content')
    </div>
</section>

<script src="{{ url('/assets/plugins/jQuery/jQuery-2.2.0.min.js') }}"></script>
<script src="{{ url('/assets/dist/js/jquery-ui.min.js') }}"></script>
<script src="{{ url('/assets/bootstrap/js/bootstrap.min.js') }}"></script>


<script src="{{ url('/js/tinysort.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js"></script>
<script src="{{ url('/assets/plugins/daterangepicker/daterangepicker.js') }}"></script>
<script src="{{ url('/assets/plugins/datepicker/bootstrap-datepicker.js') }}"></script>
<script src="{{ url('/assets/plugins/slimScroll/jquery.slimscroll.min.js') }}"></script>
<script src="{{ url('/assets/plugins/fastclick/fastclick.js') }}"></script>
<script src="{{ url('/assets/scripts/bootstrap-datetimepicker.min.js') }}"></script>
<script src="{{ url('/plugins/node-waves/waves.js') }}"></script>


{{--<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>--}}
{{--<script src="https://cdn.datatables.net/select/1.2.3/js/dataTables.select.min.js"></script>--}}

{{--<script src="{{ url('/plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js') }}"></script>--}}
{{--<script src="https://cdn.datatables.net/buttons/1.4.2/js/dataTables.buttons.min.js"></script>--}}
{{--<script src="{{ url('/plugins/jquery-datatable/extensions/export/buttons.flash.min.js') }}"></script>--}}

{{--<script src="{{ url('/plugins/jquery-datatable/extensions/export/buttons.flash.min.js') }}"></script>--}}
{{--<script src="{{ url('/plugins/jquery-datatable/extensions/export/buttons.flash.min.js') }}"></script>--}}
{{--<script src="{{ url('/plugins/jquery-datatable/extensions/export/buttons.flash.min.js') }}"></script>--}}
{{--<script src="{{ url('/plugins/jquery-datatable/extensions/export/jszip.min.js') }}"></script>--}}
{{--<script src="{{ url('/plugins/jquery-datatable/extensions/export/pdfmake.min.js') }}"></script>--}}
{{--<script src="{{ url('/plugins/jquery-datatable/extensions/export/vfs_fonts.js') }}"></script>--}}
{{--<script src="{{ url('/plugins/jquery-datatable/extensions/export/buttons.html5.min.js') }}"></script>--}}
{{--<script src="{{ url('/plugins/jquery-datatable/extensions/export/buttons.print.min.js') }}"></script>--}}


<link rel="stylesheet" type="text/css"
      href="https://cdn.datatables.net/v/bs/jszip-2.5.0/dt-1.10.16/b-1.4.2/b-colvis-1.4.2/b-flash-1.4.2/b-html5-1.4.2/b-print-1.4.2/r-2.2.0/sl-1.2.3/datatables.min.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>
<script type="text/javascript"
        src="https://cdn.datatables.net/v/bs/jszip-2.5.0/dt-1.10.16/b-1.4.2/b-colvis-1.4.2/b-flash-1.4.2/b-html5-1.4.2/b-print-1.4.2/r-2.2.0/sl-1.2.3/datatables.min.js"></script>



{{--<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.16/b-1.4.2/b-colvis-1.4.2/b-flash-1.4.2/b-html5-1.4.2/b-print-1.4.2/cr-1.4.1/fc-3.2.3/fh-3.1.3/kt-2.3.2/r-2.2.0/rg-1.0.2/rr-1.2.3/sc-1.4.3/sl-1.2.3/datatables.min.css"/>--}}
{{--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>--}}
{{--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>--}}
{{--<script type="text/javascript" src="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.16/b-1.4.2/b-colvis-1.4.2/b-flash-1.4.2/b-html5-1.4.2/b-print-1.4.2/cr-1.4.1/fc-3.2.3/fh-3.1.3/kt-2.3.2/r-2.2.0/rg-1.0.2/rr-1.2.3/sc-1.4.3/sl-1.2.3/datatables.min.js"></script>--}}

<script src="{{ url('/assets/plugins/datatables/dataTables.bootstrap.js') }}"></script>

    <script src="{{ url('/js/pages/tables/jquery-datatable.js') }}"></script>
    <script type="text/javascript"
            src="//gyrocode.github.io/jquery-datatables-checkboxes/1.2.9/js/dataTables.checkboxes.min.js"></script>



<script src="{{ url('/plugins/jquery-slimscroll/jquery.slimscroll.js') }}"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="{{ url('/plugins/node-waves/waves.js') }}"></script>
<script src="{{ url('/plugins/bootstrap-tagsinput/bootstrap-tagsinput.js') }}"></script>
<script src="{{ url('/plugins/jquery-spinner/js/jquery.spinner.js') }}"></script>
<script src="{{ url('/plugins/multi-select/js/jquery.multi-select.js') }}"></script>
<script src="{{ url('/plugins/jquery-inputmask/jquery.inputmask.bundle.js') }}"></script>
<script src="{{ url('/plugins/dropzone/dropzone.js') }}"></script>
<script src="{{ url('/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js') }}"></script>
<script src="{{ url('/plugins/bootstrap-select/js/bootstrap-select.js') }}"></script>
<script src="{{ url('/js/bootstrap-notify.min.js') }}"></script>
<script src="https://cdn.rawgit.com/learn-electronics/cdn/cba9aded/pagination.js"></script>
<script src="{{ url('/plugins/highcharts/highcharts.js') }}"></script>
<script src="{{ url('/plugins/highcharts/highcharts-3d.js') }}"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/list.pagination.js/0.1.1/list.pagination.min.js"></script>
<script src="{{ url('/plugins/list.js/dist/list.min.js') }}"></script>
<script src="{{ url('/plugins/dynamiclist/jquery.dynamiclist.js') }}"></script>

@yield('scripts')
<script src="{{ url('/plugins/sweetalert/sweetalert.min.js') }}"></script>
<!-- Autosize Plugin Js -->
<script src="{{ url('/plugins/autosize/autosize.js') }}"></script>
<!-- Moment Plugin Js -->
<script src="{{ url('/plugins/momentjs/moment.js') }}"></script>
<!-- Bootstrap Material Datetime Picker Plugin Js -->
<script src="{{ url('/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js') }}"></script>
<script src="{{ url('/plugins/jquery-validation/jquery.validate.js') }}"></script>
<script src="{{ url('/plugins/jquery-steps/jquery.steps.js') }}"></script>

<script src="{{ url('/js/admin.js') }}"></script>
<script src="{{ url('/js/pages/forms/form-wizard.js') }}"></script>
<script src="{{ url('/js/pages/forms/basic-form-elements.js') }}"></script>


<script src="{{ url('/js/pages/ui/dialogs.js') }}"></script>
<script src="{{ url('/js/demo.js') }}"></script>


<script src="{{ url('/plugins/nouislider/nouislider.js') }}"></script>


<script src="{{ url('/js/pages/forms/advanced-form-elements.js') }}"></script>

</body>

</html>

