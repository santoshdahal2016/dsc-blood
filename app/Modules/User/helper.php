<?php
/**
 *    User Helper
 */

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * Get the current active menu items
 * @return array Active menus
 */
function get_active_menu_items()
{
    $request = Route::current();

    switch ($request->uri) {
        case 'dashboard':
            $active_menu_items = ['main_menu' => 1, 'sub_menu' => 10];
            break;

        case 'organizer':
            $active_menu_items = ['main_menu' => 1, 'sub_menu' => 11];
            break;

        case 'advertiser':
            $active_menu_items = ['main_menu' => 1, 'sub_menu' => 12];
            break;

        case 'ad':
            $active_menu_items = ['main_menu' => 1, 'sub_menu' => 13];
            break;

        case 'user':
            $active_menu_items = ['main_menu' => 2, 'sub_menu' => 21];
            break;

        case 'role':
            $active_menu_items = ['main_menu' => 2, 'sub_menu' => 22];
            break;

        case 'permission':
            $active_menu_items = ['main_menu' => 2, 'sub_menu' => 23];
            break;

        case 'event':
            $active_menu_items = ['main_menu' => 3, 'sub_menu' => 31];
            break;

        case 'question':
            $active_menu_items = ['main_menu' => 3, 'sub_menu' => 32];
            break;

        case 'prize':
            $active_menu_items = ['main_menu' => 3, 'sub_menu' => 33];
            break;

        case 'lottery_entry':
            $active_menu_items = ['main_menu' => 3, 'sub_menu' => 34];
            break;
        case 'sms_record':
            $active_menu_items = ['main_menu' => 3, 'sub_menu' => 35];
            break;
        case 'email_record':
            $active_menu_items = ['main_menu' => 3, 'sub_menu' => 36];
            break;

        case 'category':
            $active_menu_items = ['main_menu' => 4, 'sub_menu' => 40];
            break;

        case 'sms_package':
            $active_menu_items = ['main_menu' => 4, 'sub_menu' => 41];
            break;

        case 'admin_setting':
            $active_menu_items = ['main_menu' => 4, 'sub_menu' => 42];
            break;

        case 'apisettings':
            $active_menu_items = ['main_menu' => 4, 'sub_menu' => 43];
            break;
        case 'sms_credential_edit':
            $active_menu_items = ['main_menu' => 4, 'sub_menu' => 44];
            break;
        case 'email_credential_edit':
            $active_menu_items = ['main_menu' => 4, 'sub_menu' => 45];
            break;

        case 'reports/events':
            $active_menu_items = ['main_menu' => 5, 'sub_menu' => 51];
            break;

        default:
            $active_menu_items = ['main_menu' => '', 'sub_menu' => ''];
            break;
    }

    return $active_menu_items;
}