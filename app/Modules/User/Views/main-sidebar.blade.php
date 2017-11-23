
<section>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
        <!-- User Info -->
        <div class="user-info">
            <div class="image">
                <img src="{{ url('/images/user.png') }}" width="48" height="48" alt="User">
            </div>
            <div class="info-container">
                <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{{ isset(Auth::user()->name) ? Auth::user()->name : Auth::user()->email }}}</div>
                <div class="email">{{{ isset(Auth::user()->name) ? Auth::user()->email : Auth::user()->email }}}</div>
                <div class="btn-group user-helper-dropdown">
                    <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                    <ul class="dropdown-menu pull-right">
                        {{--<li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">person</i>Profile</a></li>--}}
                        {{--<li role="seperator" class="divider"></li>--}}
                        {{--<li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">group</i>Followers</a></li>--}}
                        {{--<li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">shopping_cart</i>Sales</a></li>--}}
                        {{--<li><a href="javascript:void(0);" class=" waves-effect waves-block"><i class="material-icons">favorite</i>Likes</a></li>--}}
                        {{--<li role="seperator" class="divider"></li>--}}
                        <li><a href="{{ url('/logout') }}" class=" waves-effect waves-block"><i class="material-icons">input</i>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- #User Info -->
        <!-- Menu -->
        <div class="menu">
            <ul class="list">
                <?php $menus = get_active_menu_items(); ?>
                <li class="header">MAIN NAVIGATION</li>

                    @ability('admin','user_index')
                    <li class="{{ (($menus['main_menu'] == 2)?'active' :'') }} ">
                        <a href="javascript:void(0);" class=" menu-toggle">
                            <i class="material-icons">group</i><span>Users</span>

                        </a>
                        <ul class="ml-menu">
                            @ability('admin', 'user_index')
                            <li class="{{ (($menus['sub_menu'] == 21)?'active' :'') }}">
                                <a href="{{ url('/user') }}"> Users</a></li>
                            @endability
                            @ability('admin', 'user_role_index')
                            <li class="{{ (($menus['sub_menu'] == 22)?'active' :'') }}">
                                <a href="{{ url('/role') }}"> Roles</a></li>
                            @endability
                            @ability('admin', 'user_permission_index')
                            <li class="{{ (($menus['sub_menu'] == 23)?'active' :'') }}">
                                <a href="{{ url('/permission') }}"> Permissions</a></li>
                            @endability
                        </ul>
                    </li>
                    @endability


            </ul>
        </div>

        <!-- #Menu -->
        <!-- Footer -->
        <div class="legal">
            <div class="copyright">
                &copy; 2016 <?php if (date('Y') > 2016) echo " - " . date('Y'); ?> <a href="http://suntos.com.np">bloodincloud.com</a>
            </div>
            <div class="version">
                <b>Version: </b> 0.1.1| Product of <strong><a href="http://suntos.com.np">BloodinCloud</a></strong>
            </div>
        </div>
        <!-- #Footer -->
    </aside>
</section>