<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="plugins/images/favicon.png">
    <!-- Bootstrap Core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Menu CSS -->
    <!-- animation CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    <!-- Custom CSS -->
    <link href="{{ asset('css/login.css') }}" rel="stylesheet">
    <!-- color CSS -->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <title>BloodInCloud Login</title>
    <style>
        .login-register {
            background: url(https://i.ytimg.com/vi/GDmZLU-GelQ/maxresdefault.jpg) no-repeat center center / cover !important;

        }
    </style>
</head>
<body>
<!-- Preloader -->
<div class="preloader">
    <div class="cssload-speeding-wheel"></div>
</div>
<section id="wrapper" class="row login-register" style="    margin-right: 0px;margin-left: 0px;">
    <div class="col-md-6 align-middle col-md-offset-1 col-sm-5 "
         style="vertical-align: middle;display: inline-block;    text-align-last: center;">
        <h1 id="Nepal_z423" class="align-middle" style="    font-size: 400%;
    color: #000000;
    line-height: unset;
    font-family: fantasy;
    letter-spacing: 5px;
    padding-top: 45%;
    font-weight: 600;">

        </h1>
        <script src="//widget.time.is/en.js"></script>
        <script>
            time_is_widget.init({
                Nepal_z423: {
                    template: "TIME<br>DATE",
                    time_format: "12hours:minutesAMPM",
                    date_format: "dayname , monthname",
                    coords: "28.0000000,84.0000000"
                }
            });
        </script>

    </div>
    <div class="    login-box login-sidebar">
        <div class="white-box">
            @if (!empty($errors->all()))

                @foreach ($errors->all() as $error)
                    <div style="background:#f44336; padding:20px; color:#fff; text-align:center;">
                        Warning: {{ $error }} </div>
                @endforeach


        @endif

        <form class="form-horizontal form-material" id="loginform" method="post" action="{{ url('/login') }}">
            {{ csrf_field() }}
            <a href="javascript:void(0)" class="text-center db">BloodinCloud</a>

            <div class="form-group m-t-40">
                <div class="col-xs-12">
                    <input class="form-control" type="text" id="email" name="email" placeholder="Email"
                           required="required"/>

                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12">
                    <input class="form-control" type="password" id="password" placeholder="Password" name="password"
                           required="required"/>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12">
                    <div class="checkbox checkbox-primary pull-left p-t-0">
                        <input type="checkbox" id="checkbox-signup" name="_remember_me" value="on"/>

                        <label for="checkbox-signup"> Remember me </label>
                    </div>
                    <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right"><i
                                class="fa fa-lock m-r-5"></i> Forgot pwd?</a></div>
            </div>
            <div class="form-group text-center m-t-20">
                <div class="col-xs-12">
                    <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" id="_submit"
                            name="_submit" type="submit">Log In
                    </button>
                </div>
            </div>

        </form>
        <form class="form-horizontal" id="recoverform" method="post" action="{{ url('/login') }}">
            <div class="form-group ">
                <div class="col-xs-12">
                    <h3>Recover Password</h3>
                    <p class="text-muted">Enter your Username and instructions will be sent to your email! </p>
                </div>
            </div>
            <div class="form-group ">
                <div class="col-xs-12">
                    <input class="form-control" type="text" id="username" name="username" placeholder="username"
                           required="required">
                </div>
            </div>
            <div class="form-group text-center m-t-20">
                <div class="col-xs-12">
                    <button class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
                            type="submit">Reset
                    </button>
                </div>
            </div>
        </form>


    </div>
    </div>
</section>
<!-- /#wrapper -->
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script><!-- Menu Plugin JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/metisMenu/2.7.1/metisMenu.js"></script><!--slimscroll JavaScript -->
<script src="{{ asset('js/jquery.slimscroll.js') }}"></script>
<!--Wave Effects -->
<script src="{{ asset('js/waves.js') }}"></script>
<!-- Custom Theme JavaScript -->
<script src="{{ asset('js/custom.min.js') }}"></script>
<!--Style Switcher -->
<link href="{{ url('/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css') }}" rel="stylesheet"/>
</body>
</html>
