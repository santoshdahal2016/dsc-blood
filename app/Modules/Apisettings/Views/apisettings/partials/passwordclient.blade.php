
<div   tabindex="-1" role="dialog" id="myModal" class="modal fade" >
    <div class="modal-dialog" role="document">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 id="defaultModalLabel" class="modal-title">Create Password Grant Client</h4>
            </div>
            <div class="modal-body">




                    <form method="post" action="/apisettings_create" data-v-38e609cb="" role="form" class="">
                        {{ csrf_field() }}

                            <label data-v-38e609cb="" >Name</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input data-v-38e609cb="" id="create-client-name" type="text" placeholder="Name of Password Grant Client" name="create-client-name" class="form-control">
                                   </div></div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

            </div>
        </div>

    </div>
</div>
<div id="editModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Edit Password Grant Client</h4>
            </div>
            <div class="modal-body">
                <div data-v-38e609cb="" class="modal-body"><!---->
                    <form method="post" action="/apisettings_update" data-v-38e609cb="" role="form" >
                        {{ csrf_field() }}


                            <label data-v-38e609cb="" >Name</label>
                            <div class="form-group">
                                <div class="form-line">

                                <input data-v-38e609cb="" id="update-client-name" type="text" name="update-client-name" value="" class="form-control">
                                   </div></div>
                        <input type="hidden" id="update-client-id" name="update-client-id" value="">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

            </div>
        </div>

    </div>
</div>

<div data-v-38e609cb="" class="panel panel-default">
    <div data-v-38e609cb="" class="panel-heading">
        <div data-v-38e609cb="" style="display: flex; justify-content: space-between; align-items: center;"><span data-v-38e609cb="">
                    Password Grant Clients
                </span>   <a  data-toggle="modal" data-target="#myModal">
                New Password Client</a>
        </div>
    </div>
    <div data-v-38e609cb="" class="panel-body">
        @if(!empty($passports[0]->id))
            <table data-v-38e609cb="" class="table table-borderless m-b-none"><thead data-v-38e609cb=""><tr data-v-38e609cb=""><th data-v-38e609cb="">Client ID</th> <th data-v-38e609cb="">Name</th> <th data-v-38e609cb="">Secret</th> <th data-v-38e609cb=""></th> <th data-v-38e609cb=""></th></tr></thead>
                <tbody data-v-38e609cb="">
                @foreach($passports as $passport)
                    <tr data-v-38e609cb=""><td data-v-38e609cb="" class="api_client_id" style="vertical-align: middle;">
                            {{ $passport->id }}
                        </td> <td data-v-38e609cb="" class="api_client_name" style="vertical-align: middle;">
                            {{$passport->name }}
                        </td> <td data-v-38e609cb="" style="vertical-align: middle;"><code data-v-38e609cb="">

                                {{$passport->secret}}</code></td>
                        <td data-v-38e609cb="" style="vertical-align: middle;"><a  data-toggle="modal" data-target="#editModal" data-v-38e609cb="" class="action-link">
                                Edit
                            </a></td> <td data-v-38e609cb="" style="vertical-align: middle;"><a href="{{ url('/apisettings_delete/'.$passport->id) }}"data-v-38e609cb="" class="action-link text-danger">
                                Delete
                            </a></td></tr>
                @endforeach
                </tbody>
            </table>
        @else
            <p data-v-38e609cb="" class="m-b-none">
                You have not created any Password clients.
            </p> <!---->
        @endif
        @if(!empty($passports->links()))
            {{ $passports->links() }}
        @endif
    </div>
</div>