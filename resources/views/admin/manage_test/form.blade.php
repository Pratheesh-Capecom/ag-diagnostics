

<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Test Name *</label>
    <div class="col-10">
        {!! Form::text('test', null, ['class' => 'form-control', 'autocomplete' => 'off','required']) !!}
    </div>
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Test Code *</label>
    <div class="col-10">
        {!! Form::text('test_code', null, ['class' => 'form-control', 'autocomplete' => 'off','required']) !!}
    </div>
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Alias Name *</label>
    <div class="col-10">
        {!! Form::text('alias_name', null, ['class' => 'form-control', 'autocomplete' => 'off','required']) !!}
    </div>
</div>

<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Pre Instruction *</label>
    <div class="col-10">
        {!! Form::text('pre_instruction', null, ['class' => 'form-control','id'=>'pre_instruction', 'autocomplete' => 'off','required']) !!}
    </div>
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Report Delivery *</label>
    <div class="col-10">
        {!! Form::text('report_delivery', null, ['class' => 'form-control','id'=>'report_delivery', 'autocomplete' => 'off','required']) !!}
    </div>
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Category Name *</label>
    <div class="col-10">
        {{ Form::select('category_id', $category, null, array('class'=>'form-control', 'placeholder'=>'Please select ...' ,'required')) }}
    </div>
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Type *</label>
    <div class="col-10">
        {!!Form::select('type',[ 'Home Visit'=> 'Home Visit', 'Center Visit'=> 'Center Visit'],null,['class' => 'form-control'])!!}
    </div>
</div>

{{-- <div class="row mb-3">
    <label class="col-2 text-end col-form-label">Type</label>
    <div class="col-10">
    <select class="form-control" name="visit">                                    
        <option selected value="Home Visit">Home Visit</option>
        <option value="Center Visit">Center Visit</option>
    </select>
    </div>
</div> --}}

<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Home Collection *</label>
  
    <label class="col-2 text-end col-form-label">Yes</label>
    {{Form::radio('home_collection', 1,null, ['class' => 'form-check-input','id' => 'home_collection_yes','required' ])}}

    <label class="col-2 text-end col-form-label">No</label>
    {{Form::radio('home_collection', 0,null, ['class' => 'form-check-input','id' => 'home_collection_no','required' ])}}
    
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Description *</label>
    <div class="col-10">
        {!! Form::textarea('description', null, ['class' => 'form-control',  'autocomplete' => 'off','required']) !!}
    </div>
</div>

<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Status</label>
    <input type="hidden" name="status" value="0" checked="checked">
    <div class="col-10">
        {{-- {!! Form::checkbox('status',1,null, ['checked' => 'checked']) !!} --}}
        @if(isset($test))
            @if($test->status)
                <input type="checkbox" id="status" name="status" value="1" checked="checked">
            @else
                <input type="checkbox" id="status" name="status" value="0" >
            @endif
        @else
            <input type="checkbox" id="status" name="status" value="1" checked="checked">
        @endif
    </div>
</div>

@section('scripts')
    <script type="text/javascript">
       




       $(document).ready(function() {
            $('#status').click(function() {
                if (!$(this).is(':checked')) {
                    $(this).val(0);
                // return confirm("Are you sure?");
                }
                else if($(this).is(':checked')) {
                    $(this).val(1);
                // return confirm("Are you sure111?");
                }
            });
        });
        
   
    </script>  
@endsection

