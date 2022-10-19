

<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Package Name *</label>
    <div class="col-10">
        {!! Form::text('package', null, ['class' => 'form-control', 'autocomplete' => 'off','required']) !!}
    </div>
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Package Code *</label>
    <div class="col-10">
        {!! Form::text('package_code', null, ['class' => 'form-control', 'autocomplete' => 'off','required']) !!}
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
    <label class="col-2 text-end col-form-label">Condition *</label>
    <div class="col-10">
        {!! Form::select('condition_id', $condition ,null, ['class' => 'form-control', 'placeholder'=>'Please Select Condition', 'autocomplete' => 'off','required']) !!}
    </div>
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Organ *</label>
    <div class="col-10">
        {!! Form::select('organ_id', $organ,null, ['class' => 'form-control', 'placeholder'=>'Please Select Organ', 'autocomplete' => 'off','required']) !!}
    </div>
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Specialty *</label>
    <div class="col-10">
        {!! Form::select('specialty_id',$specialty ,null, ['class' => 'form-control', 'placeholder'=>'Please Select Specialty', 'autocomplete' => 'off','required']) !!}
    </div>
</div>
<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Test Include *</label>
    <div class="col-10" id="form_checkbox">
        @if(isset($manage_package))
            <?php $include = json_decode($manage_package->tests_included);  ?>
            @foreach($test_include as $key=>$val)
            <label><input type="checkbox" name="tests_included[]"  class ="form-check-input tests_included" value="{{ $val->id }}"<?php  echo in_array($val->id,$include)? "checked" : '';?> required > {{ $val->test }}</label><br>
            @endforeach
        @else
            @foreach($test_include as $key=>$val)
            <label><input type="checkbox" name="tests_included[]" class ="form-check-input tests_included" value="{{ $val->id }}"  > {{ $val->test }}</label><br>
            @endforeach
       @endif
       


    </div>
</div>

<div class="row mb-3">
    <label class="col-2 text-end col-form-label">Status</label>
    <input type="hidden" name="status" value="0" checked="checked">
    <div class="col-10" >
        {{-- {!! Form::checkbox('status',1,null, ['checked' => 'checked']) !!} --}}
        @if(isset($feature))
            @if($feature->status)
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
                }
                else if($(this).is(':checked')) {
                    $(this).val(1);
                // return confirm("Are you sure111?");
                }
            });
        });
        
        $(document).ready(function() {
            $("input[name='list']").serializeArray();
            // $(".tests_included").trigger("click");
            if($('.tests_included').is(':checked')){
                $('.tests_included').prop('required',false);
            }
        })
        
   
    </script> 
    <script type="text/javascript">
        $(function () {
            $("#submit").click(function () {
                // alert(jQuery('#form_checkbox input[type=checkbox]:checked').length)
                if (jQuery('#form_checkbox input[type=checkbox]:checked').length < 1) {
                    $('.tests_included').prop('required',true);
                }
                else if(jQuery('#form_checkbox input[type=checkbox]:checked').length > 0)
                {
                    $('.tests_included').prop('required',false);
                }
            });
        });

        $(".tests_included").click(function () {
            // alert()
            if($('.tests_included').is(':checked')){
                $('.tests_included').prop('required',false);
            }
        });
            
     
      
        
    </script> 
@endsection

