@extends('admin.manage_package.layout')

@section('admin_master_content')
    
    <div class="card custom table-card">
        <div class="card-header">
            <div class="card-title">
                Manage Package List
            </div>
           
            <a href="{{ route('manage_package.create') }}" class="btn btn-primary ms-3">
                <i class="fa fa-plus me-2" aria-hidden="true"></i>
                Add New
            </a>
        </div>
        <div class="card-body"> 
            <table class="table table-bordered table-centered m-0 tr-sm table-hover" id="data-table">
                <thead> 
                    <tr>
                        <th>S.No </th>
                        <th>Package Name</th>
                        <th>Package Code</th>
                        <th>Alias Name</th>
                        <th>Organ</th>
                        <th>Specialty</th>
                        <th>Condition</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
@endsection
@section('scripts')
    <script type="text/javascript">
        $(function () {
            var table = $('#data-table').DataTable({
                lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
                processing: true,
                responsive: true,
                serverSide: true,
                ajax: "{{ route('manage_package.index') }}",
                columns: [
                    {data: 'DT_RowIndex', name: 'id',orderable: false, searchable: false},
                    {data:"package", name : "package"},
                    {data:"package_code", name : "package_code"},
                    {data:"alias_name", name : "alias_name"},
                    {data:"organ.organs", name : "organ.organs"},
                    {data:"specialty.speciality", name : "specialty.speciality"},
                    {data:"condition.condition", name : "condition.condition"},
                    {data:"status", name : "status"},
                    {data:"action", name : "action"},
                    
                ],
            });
        });
        
        function statuschange(val,id)
        {


            var form =  $(this).closest("form");
                var name = $(this).data("name");
                event.preventDefault();
                swal({
                    text: "Are you sure want to change status?",
                    icon: "warning",
                    buttons: {
                        cancel: {
                            text: "Cancel",
                            value: null,
                            visible: true,
                            className: "btn-light rounded-pill btn",
                            closeModal: true,
                        },
                        confirm: {
                            text: "Yes! Change",
                            value: true,
                            visible: true,
                            className: "btn btn-danger rounded-pill",
                            closeModal: true
                        }
                    },
                }).then((isConfirm) => {
                    if (isConfirm) {
                        var url = '{{ route("manage_package.status", ":id") }}';
                        url = url.replace(':id',id);
                        $.ajax({
                        type: "GET",
                        url: url,
                        data: { val: val, id : id} ,
                        success: function(resultData){
                            toastr.success("{{ Session::get('message', 'Status Successfully Updated') }}");
                            $('#data-table').DataTable().ajax.reload();
                            
                        }
                    });
                    }
                });




           
        }
    </script>  
@endsection