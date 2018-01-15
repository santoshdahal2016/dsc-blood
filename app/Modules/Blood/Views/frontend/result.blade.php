<!DOCTYPE html>
<html lang="en" class="noTouch">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>E-blood</title>

    <!-- Meta Tags -->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="pragma" content="no-cache">
    <meta name="google" content="notranslate">
    <meta name="format-detection" content="telephone=no">
    <meta name="language" content="en_EN">
    <meta name="robots" content="NOODP">
    <meta name="msnbot" content="NOODP">
    <meta name="googlebot" content="NOODP">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no">

    <!-- Icons -->
    <link rel="apple-touch-icon"
          href="http://www.onedayinmyworld.com/assets/images/static/favicon/apple-touch-icon-57x57.png" sizes="57x57">
    <link rel="apple-touch-icon"
          href="http://www.onedayinmyworld.com/assets/images/static/favicon/apple-touch-icon-60x60.png" sizes="60x60">
    <link rel="apple-touch-icon"
          href="http://www.onedayinmyworld.com/assets/images/static/favicon/apple-touch-icon-72x72.png" sizes="72x72">
    <link rel="apple-touch-icon"
          href="http://www.onedayinmyworld.com/assets/images/static/favicon/apple-touch-icon-76x76.png" sizes="76x76">
    <link rel="apple-touch-icon"
          href="http://www.onedayinmyworld.com/assets/images/static/favicon/apple-touch-icon-114x114.png"
          sizes="114x114">
    <link rel="apple-touch-icon"
          href="http://www.onedayinmyworld.com/assets/images/static/favicon/apple-touch-icon-120x120.png"
          sizes="120x120">
    <link rel="apple-touch-icon"
          href="http://www.onedayinmyworld.com/assets/images/static/favicon/apple-touch-icon-144x144.png"
          sizes="144x144">
    <link rel="apple-touch-icon"
          href="http://www.onedayinmyworld.com/assets/images/static/favicon/apple-touch-icon-152x152.png"
          sizes="152x152">

    <!-- Sharing -->
    <meta property="og:title" content="E-blood">
    <meta property="og:site_name" content="E-blood">
    <meta property="og:url" content="http://eblood.ga/">
    <meta property="og:description"
          content="The blood you donate gives someone another chance at life. one day that someone may be a close relative, a friend, a loved one - even you.">
    <meta property="og:type" content="website">
    <meta property="og:image"
          content="https://i.pinimg.com/736x/a7/2b/06/a72b068f55de6af3485c405efa404ef3--blood-drive-posters-blood-donation-posters.jpg">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
    <link rel="stylesheet" type="text/css" href="{{ url('/plugins/homepage/css/examples.css') }}"/>
    <style>

        header {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 15;
            display: -ms-flexbox;
            display: flex;
            height: 50px;
            width: 100%;
            background-color:#f31515;
            padding: 0 20px;
            visibility: hidden;
            opacity: 0; }
        header .backWrapper {
            position: absolute;
            top: 15px;
            left: 50%;
            width: 200px;
            margin-left: -100px;
            text-align: center;
            display: none; }
        header a {
            height: 100%;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -ms-flex-align: center;
            align-items: center; }
        header a.soundToggle {
            display: none; }
        header a.backToStories, header a.back {
            display: none;
            opacity: 0; }
        header a.backToStories svg, header a.back svg {
            width: 9px;
            height: 10px;
            margin-right: 12px;
            margin-top: -4px; }
        header nav {
            height: 100%;
            margin-left: auto; }
        header nav a {
            padding: 0 15px; }
        header nav a:last-child {
            padding-right: 0px;
            padding-top: 2px; }
        header nav .takeAction {
            display: none; }
        @media screen and (min-width: 699px) {
            header {
                padding: 0 40px; }
            header .backWrapper {
                display: block; }
            header nav .takeAction {
                display: -ms-inline-flexbox;
                display: inline-flex; } }
        @media screen and (min-width: 699px) and (orientation: landscape) {
            header .backWrapper {
                margin-left: 0;
                text-align: left; } }
        html.noTouch header a {
            opacity: 0.7;
            transition: opacity 0.5s; }
        html.noTouch header a:hover {
            opacity: 1; }
        html.noTouch header a.soundToggle {
            display: -ms-inline-flexbox;
            display: inline-flex; }
        html.noTouch header a.soundToggle.mute .soundOff {
            display: block; }
        html.noTouch header a.soundToggle.mute .soundOn {
            display: none; }
        html.noTouch header a.soundToggle .soundOff {
            display: none; }

        nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            vertical-align: baseline; }
        /* Style for our header texts
        * --------------------------------------- */
        h1 {
            font-size: 5em;
            font-family: arial, helvetica;
            color: #fff;
            margin: 0;
        }

        .intro p {
            color: #fff;
        }

        /* Centered texts in each section
        * --------------------------------------- */
        .section {
            text-align: center;
        }

        /* Overwriting styles for the navigation dots (to place it where we want)
        * --------------------------------------- */
        .fp-slidesNav.bottom {
            bottom: 25px;
        }

        /* Bottom menu
        * --------------------------------------- */
        #infoMenu li a {
            color: #fff;
        }

        #section2 h1 {
            color: #333;
        }

        .custom-icon {
            background: #666;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 100%;
            border: 6px solid #fff;
            box-shadow: 0 1px 10px rgba(0, 0, 0, 0.46);
            color: #fff;
            display: table-cell;
            font-size: 95px;
            height: 60px;
            padding: 30px;
            text-align: center;
            transition: .5s;
            vertical-align: middle;
            width: 60px;
        }

        .custom-icon:hover {
            background: rgba(0, 0, 0, 0.6);
        }

        .fix-editor {
            display: none;
        }

        .icon-wrapper {
            display: inline-block;
        }

        #help {
            background-color: rgb(33, 27, 6) !important;
        }

        #bloodtype {
            background-color: rgb(229, 229, 229) !important;

        }

        .blobs {
            -webkit-filter: url("#goo");
            filter: url("#goo");
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        @-webkit-keyframes blob-left-top-anim {
            0% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
            33% {
                -webkit-transform: scale(0.9) translate(-65px, 0);
                transform: scale(0.9) translate(-65px, 0);
            }
            62% {
                -webkit-transform: scale(0.7) translate(-65px, -65px);
                transform: scale(0.7) translate(-65px, -65px);
            }
            94% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
        }

        @keyframes blob-left-top-anim {
            0% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
            33% {
                -webkit-transform: scale(0.9) translate(-65px, 0);
                transform: scale(0.9) translate(-65px, 0);
            }
            62% {
                -webkit-transform: scale(0.7) translate(-65px, -65px);
                transform: scale(0.7) translate(-65px, -65px);
            }
            94% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
        }

        @-webkit-keyframes blob-right-top-anim {
            0% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
            33% {
                -webkit-transform: scale(0.9) translate(65px, 0);
                transform: scale(0.9) translate(65px, 0);
            }
            64% {
                -webkit-transform: scale(0.7) translate(65px, -65px);
                transform: scale(0.7) translate(65px, -65px);
            }
            96% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
        }

        @keyframes blob-right-top-anim {
            0% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
            33% {
                -webkit-transform: scale(0.9) translate(65px, 0);
                transform: scale(0.9) translate(65px, 0);
            }
            64% {
                -webkit-transform: scale(0.7) translate(65px, -65px);
                transform: scale(0.7) translate(65px, -65px);
            }
            96% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
        }

        @-webkit-keyframes blob-left-bottom-anim {
            0% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
            33% {
                -webkit-transform: scale(0.9) translate(-65px, 0);
                transform: scale(0.9) translate(-65px, 0);
            }
            66% {
                -webkit-transform: scale(0.7) translate(-65px, 65px);
                transform: scale(0.7) translate(-65px, 65px);
            }
            98% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
        }

        @keyframes blob-left-bottom-anim {
            0% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
            33% {
                -webkit-transform: scale(0.9) translate(-65px, 0);
                transform: scale(0.9) translate(-65px, 0);
            }
            66% {
                -webkit-transform: scale(0.7) translate(-65px, 65px);
                transform: scale(0.7) translate(-65px, 65px);
            }
            98% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
        }

        @-webkit-keyframes blob-right-bottom-anim {
            0% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
            33% {
                -webkit-transform: scale(0.9) translate(65px, 0);
                transform: scale(0.9) translate(65px, 0);
            }
            68% {
                -webkit-transform: scale(0.7) translate(65px, 65px);
                transform: scale(0.7) translate(65px, 65px);
            }
            100% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
        }

        @keyframes blob-right-bottom-anim {
            0% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
            33% {
                -webkit-transform: scale(0.9) translate(65px, 0);
                transform: scale(0.9) translate(65px, 0);
            }
            68% {
                -webkit-transform: scale(0.7) translate(65px, 65px);
                transform: scale(0.7) translate(65px, 65px);
            }
            100% {
                -webkit-transform: scale(1.1) translate(0, 0);
                transform: scale(1.1) translate(0, 0);
            }
        }

        .blob {
            position: absolute;
            background: #aa2222;
            left: 50%;
            top: 50%;
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            color: white;
            font-size: 40px;
            border-radius: 100%;
            margin-top: -50px;
            margin-left: -50px;
            -webkit-animation: blob-left-top-anim cubic-bezier(0.77, 0, 0.175, 1) 4s infinite;
            animation: blob-left-top-anim cubic-bezier(0.77, 0, 0.175, 1) 4s infinite;
        }

        .blob:nth-child(2) {
            -webkit-animation-name: blob-right-top-anim;
            animation-name: blob-right-top-anim;
        }

        .blob:nth-child(3) {
            -webkit-animation-name: blob-left-bottom-anim;
            animation-name: blob-left-bottom-anim;
        }

        .blob:nth-child(4) {
            -webkit-animation-name: blob-right-bottom-anim;
            animation-name: blob-right-bottom-anim;
        }

        .bg-danger {
            background-color: #ec1212 !important;
        }

        .lebal {
            color: antiquewhite;
            font-size: larger;
            font-weight: bolder;
        }

        #section0 {
            text-align: start !important;

        }

        .feature {

        }

        .feature-main {
            text-align: center;

        }

        .feature-main h3, .news-main h3, .member-top h3 {
            color: #fff;
            font-weight: 300;
            margin: 0;
            font-size: 3.2em;
        }

        .feature-main p, .news-main p, .member-top p {
            color: #fff;
            font-size: 18px;
            font-weight: 200;
            line-height: 1.4em;
            width: 73%;
            margin: 1em auto 0;
        }

        .feature-left {
            width: 16%;
            float: left;
        }

        .feature-right {
            width: 84%;
            float: right;
        }

        .feature-bottom {
            margin-top: 3%;
        }

        .feature-right h4 {
            color: #fff;
            font-size: 2.2em;
            font-weight: 500;
            margin: 0;
        }

        .feature-right {
            text-align: left;
        }

        .ftr-one {
            margin-top: 4em;
        }

        .feature-right p {
            color: #fff;
            font-size: 17px;
            font-weight: 500;
            line-height: 1.4em;
            margin-top: 1.2em;
        }

    </style>
    <link rel="stylesheet" href="{{ url('/plugins/homepage/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ url('/plugins/homepage/css/styles.css') }}">
</head>
<body>


<div id="siteWrapper">
    <header style="visibility: visible !important;opacity: 1;display: inline-flex;">
        <a href="{{url('/')}}">
            <svg width="113" height="20" xmlns="http://www.w3.org/2000/svg">
                <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
                <g>
                    <title>background</title>
                </g>
                <g>
                    <title>Blood in Cloud</title>
                    <text font-weight="200" font-weight="bold" stroke="#ffffff"
                          transform="matrix(0.5369700193405151,0,0,0.3765043020248413,5.556359767913818,5.952435491606593) "
                          xml:space="preserve" text-anchor="start"
                          font-family="'Courier New', Courier, monospace"
                          font-size="45" id="svg_1" y="27.995019" x="0.826193" stroke-width="0"
                          fill="#ffffff">E-BLOOD</text>
                </g>
            </svg>
        </a>

        <div class="backWrapper">
            <a class="backToStories frameTitle" href="{{url('/')}}">
                <!--?xml version="1.0" encoding="UTF-8"?-->
                <svg width="10px" height="18px" viewBox="0 0 5 9" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 45.2 (43514) - http://www.bohemiancoding.com/sketch -->
                    <title>arrow</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path d="M1.20710678,4.5 L4.85355339,0.853553391 L4.14644661,0.146446609 L0.146446609,4.14644661 L0.5,4.5 L0.146446609,4.85355339 L4.14644661,8.85355339 L4.85355339,8.14644661 L1.20710678,4.5 Z"
                              id="arrow" fill="#FFFFFF" fill-rule="nonzero"></path>
                    </g>
                </svg>
                <span>Back To Home</span>
            </a>
            <a class="back frameTitle" href="{{url('/')}}">
                <!--?xml version="1.0" encoding="UTF-8"?-->
                <svg width="10px" height="18px" viewBox="0 0 5 9" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 45.2 (43514) - http://www.bohemiancoding.com/sketch -->
                    <title>arrow</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path d="M1.20710678,4.5 L4.85355339,0.853553391 L4.14644661,0.146446609 L0.146446609,4.14644661 L0.5,4.5 L0.146446609,4.85355339 L4.14644661,8.85355339 L4.85355339,8.14644661 L1.20710678,4.5 Z"
                              id="arrow" fill="#FFFFFF" fill-rule="nonzero"></path>
                    </g>
                </svg>
                <span>Go Back</span>
            </a>
        </div>

        <nav>
            <a class="ignoreParse soundToggle" href="{{url('/')}}">
                <span class="soundOn"><!--?xml version="1.0" encoding="UTF-8"?-->
     <svg width="10px" height="7px" viewBox="0 0 10 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
     <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
     <title>Icon / Sound on</title>
     <desc>Created with Sketch.</desc>
     <defs></defs>
     <g id="Modules" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-/-Sound-on" fill="#FFFFFF">
            <g>
                <rect id="Rectangle"
                      transform="translate(0.500000, 6.000000) rotate(180.000000) translate(-0.500000, -6.000000) "
                      x="-1.11022302e-16" y="5" width="1" height="2.0200000000000955"></rect>
                <rect id="Rectangle-Copy"
                      transform="translate(3.500000, 4.500000) rotate(180.000000) translate(-3.500000, -4.500000) "
                      x="3" y="2" width="1" height="6.125714285714204"></rect>
                <rect id="Rectangle-Copy-2"
                      transform="translate(6.500000, 3.500000) rotate(180.000000) translate(-6.500000, -3.500000) "
                      x="6" y="0" width="1" height="2.1639999999999304"></rect>
                <rect id="Rectangle-Copy-3"
                      transform="translate(9.500000, 5.000000) rotate(180.000000) translate(-9.500000, -5.000000) "
                      x="9" y="3" width="1" height="6.680000000000039"></rect>
            </g>
        </g>
     </g>
     </svg></span>
                <span class="soundOff"><!--?xml version="1.0" encoding="UTF-8"?-->
     <svg width="10px" height="1px" viewBox="0 0 10 1" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
     <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
     <title>Icon / Sound off</title>
     <desc>Created with Sketch.</desc>
     <defs></defs>
     <g id="Modules" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon-/-Sound-off" fill="#FFFFFF">
            <g>
                <rect id="Rectangle" x="3" y="0" width="1" height="1"></rect>
                <rect id="Rectangle-Copy" x="6" y="0" width="1" height="1"></rect>
                <rect id="Rectangle-Copy-2" x="0" y="0" width="1" height="1"></rect>
                <rect id="Rectangle-Copy-3" x="9" y="0" width="1" height="1"></rect>
            </g>
        </g>
     </g>
     </svg></span>
            </a>
            <a class="frameTitle takeAction" style="color: white"
               href="{{url('/')}}"><span>Be Hero</span></a>
            <a class="frameTitle aboutProject" style="color: white"
               href="{{url('/')}}"><span>about the project</span></a>
        </nav>
    </header>


    <div class="pt-5 text-white bg-danger">
        <div class="container">
            <div class="row">
                <div class="col-md-12 align-self-baseline" style="padding-top: 10%">
                    <form class="w-100 border border-danger my-5" method="get" action="{{url('/search')}}">
                        {{ csrf_field() }}
                        <div class="form-group"><label class="lebal">Location</label>
                            <input type="search" name="address"
                                   class="form-control form-control-lg" placeholder="Location">
                            <small class="text-muted form-text"></small>
                        </div>
                        <div class="form-group"><label class="form-control-label lebal">Blood
                                Group</label><select class="form-control form-control-lg"
                                                     name="bloodgroup">
                                <option value="">All</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="O+">O+</option>
                                <option value="AB+">AB+</option>
                                <option value="A-">A-</option>
                                <option value="B-">B-</option>
                                <option value="O-">O-</option>
                                <option value="AB-">AB-</option>
                            </select></div>
                        <button type="submit" name="submit"
                                class="btn btn-block btn-lg btn-light text-muted text-center">Search
                        </button>
                    </form>
                </div>
                <br><br>
                <div class="col-md-5" style="padding-top: 20px"><img src="{{url('/images/play.png')}}"/>
                </div>
            </div>
        </div>
    </div>

    <div class="">
            <div class="row">
                <div class="col-md-12 m-0 p-0">
                    <table class="table table-hover table-reflow">
                        <thead>
                        <tr class="bg-info text-white">
                            <th>Name</th>
                            <th>Blood Group</th>
                            <th>Current Location</th>
                            <th>Contact No.</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Santosh dahal</td>
                            <td>B+</td>
                            <td>itahari-1, Suntosh Dahal</td>
                            <td><button class="btn btn-large btn-danger" >Approach</button></td>
                        </tr>


                        </tbody>
                    </table>
                </div>
            </div>
    </div>

</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.5.3/pixi.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>



    <!-- GA -->



</body>
</html>
