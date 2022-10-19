<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    {{-- <title>Premier Health Center is one of the best diagnostic center in Chennai</title> --}}
    @yield('seo_tags')
    <meta name="viewport" content="width=device-width, initial-scale=1,  maximum-scale=1, user-scalable=0"  >
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('/public/website/assets/images/favicon.png') }}"/>  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha512-H9jrZiiopUdsLpg94A333EfumgUBpO9MdbxStdeITo+KEIMaNfHNvwyjjDJb+ERPaRS6DpyRlKbvPUasNItRyw==" crossorigin="anonymous" />  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw==" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg==" crossorigin="anonymous" />    
    <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">     
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css" integrity="sha512-6qkvBbDyl5TDJtNJiC8foyEVuB6gxMBkrKy67XpqnIDxyvLLPJzmTjAj1dRJfNdmXWqD10VbJoeN4pOQqDwvRA==" crossorigin="anonymous" />    
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="{{ asset('/public/website/assets/css/header.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/public/website/assets/css/main.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/public/website/assets/css/footer.css') }}">
   
    <script type="text/javascript">     
        function loading() {            
            document.getElementById("load").style.display = 'block';
        }

        function unloading() {
            document.getElementById("load").style.display = 'none';
        }
        </script>
</head>
<body class="{{ Route::is("home_page") == "home" ? "home"  : "" }}">

    {{-- Header --}}
        @include('website.header')
    {{-- Header --}}
    @if ($message = Session::get('success'))
    <div class="alert alert-success alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button>    
        <strong>{{ $message }}</strong>
    </div>
    @endif
    
    @if ($message = Session::get('error'))
    <div class="alert alert-danger alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button>    
        <strong>{{ $message }}</strong>
    </div>
    @endif
    <main>
        @yield('content')
    </main>
    {{-- Footer --}}
        @include('website.footer')
    {{-- Footer --}}


<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <script src="https://use.fontawesome.com/9ad0804c94.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.0.0/rellax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" integrity="sha512-uURl+ZXMBrF4AwGaWmEetzrd+J5/8NRkWAvJx5sbPSSuOb0bZLqf+tOzniObO00BjHa/dD7gub9oCGMLPQHtQA==" crossorigin="anonymous"></script>    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js" integrity="sha512-2ImtlRlf2VVmiGZsjm9bEyhjGW4dU7B6TNwh/hx/iSByxNENtj3WVE6o/9Lj4TJeVXPi4bnOIMXFIJJAeufa0A==" crossorigin="anonymous"></script>
    <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js" integrity="sha512-Yk47FuYNtuINE1w+t/KT4BQ7JaycTCcrvlSvdK/jry6Kcxqg5vN7/svVWCxZykVzzJHaxXk5T9jnFemZHSYgnw==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>  
    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <script src="{{ asset('/public/website/assets/js/jquery.countup.min.js') }}"></script>
    <!-- validation -->  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js" integrity="sha512-eyHL1atYNycXNXZMDndxrDhNAegH2BDWt1TmkXJPoGf1WLlNYt08CSjkqF5lnCRmdm3IrkHid8s2jOUY4NIZVQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>  
    <!-- jAlert -->    
       
    <script src="{{ asset('/public/website/assets/js/main.js') }}"></script>    
    <a href="#" class="back-to-top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>
    

        <div class="modal fade" id="enquiryModal">
            <div class="modal-dialog modal-dialog-centered modal-dialog-zoom">
                <div class="modal-content">
                    <!--Modal Header-->   
                    <div class="modal-header">
                        <h5 class="modal-title" id="heading">Request to Call Back</h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <!--Modal Body -->
                    <div class="modal-body">
                    {{-- <form id="request-to-call-back-form" data-parsley-validate=""> --}}
                        {!! Form::open(['route' => 'request-call.store','autocomplete'=>'off', 'data-parsley-validate'=>''  ,'class'=>'needs-validation', 'id' => 'request-to-call-back-form', 'method'=> 'POST']) !!}
                        <input type="text" class="form-control" name="name" id="enquiry_name" placeholder="Enter your Name" required=""/>
                        <input type="tel" class="form-control" name="mobile" id="enquiry_mobile" placeholder="Enter your Phone" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" minlength="10" maxlength="10" required=""/>
                        <input type="email" class="form-control" name="email" id="enquiry_email" placeholder="Enter your Email" required=""/>
                        <input type="hidden" class="form-control" name="test" id="hidden_test" value=""/>
                        
                        <textarea class="form-control" name="remarks" id="enquiry_remark" placeholder="Remarks"></textarea>
                        <div class="text-right">
                            <button type="submit" class="submit-btn">Submit</button>
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="testEnquiryModal">
            <div class="modal-dialog modal-dialog-centered modal-dialog-zoom">
                <div class="modal-content">
                    <!--Modal Header-->   
                    <div class="modal-header">
                        <h5 class="modal-title" id="heading">Test Enquiry</h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <!--Modal Body -->
                    <div class="modal-body">
                    <h5 class="text-center mar-bot-20">Liver cytosolic antigen type-1 (LC-1) Antibody</h5>
                    <form id="request-to-call-back-form" data-parsley-validate="">
                        <input type="text" class="form-control" placeholder="Enter your Name" required=""/>
                        <input type="tel" class="form-control" placeholder="Enter your Phone" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" maxlength="10" required=""/>
                        <input type="email" class="form-control" placeholder="Enter your Email" required=""/>
                        <textarea class="form-control" placeholder="Remarks"></textarea>
                        <div class="text-right">
                            <button type="submit" class="submit-btn">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
        });
        
        $(".mobile-share-icon").click(function(){
            $(".mobile-socials").toggleClass("active");
        });     
    </script>
    <script>
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
    </script>
    <script>

        /*form validation start */
        function valid_chk3()
                    {
                    
                    if(document.form.number.value=="")
                    {
                    alert("Please enter your name")
                    document.form.number.focus()
                    return false;
                    }

                    if(document.form.name.value=="")
                    {
                    alert("Please enter your name")
                    document.form.name.focus()
                    return false;
                    }
                    
                    if(document.form.email.value=="")
                    {
                    alert("Please enter your E-mail ID")
                    document.form.email.focus()
                    return false;
                    }
                    
                    if (document.form.email.value.match(/^\s+[a-zA-Z0-9]+/)!=null || (document.form.email.value.match(/[a-zA-Z0-9]+/)==null || document.form.aemail.value.match(/[a-zA-Z0-9]+\@[a-zA-Z0-9\-]+(\.([a-zA-Z0-9]{2}|[a-zA-Z0-9]{3}))+$/)==null))
                    {
                    alert("Please enter your valid E-mail ID")
                    document.form.email.focus()
                    return false;
                    }

                    if(document.form.aphone.value=="")
                    {
                    alert("Please enter your Mobile no.")
                    document.form.aphone.focus()
                    return false;
                    }
                        
                    if(document.form.amessage.value=="")
                    {
                    alert("Please enter your Message")
                    document.form.amessage.focus()
                    return false;
                    }
                    
                    var v = grecaptcha.getResponse();
                    //alert(v);
                    if(v.length == '' || v.length == 0 )
                    {
                        alert("You can't leave Captcha Code empty");
                        return false;               
                    }     

                    // pretty sure the problem is here
                    console.log('captcha response: ' + grecaptcha.getResponse());
                    return true;
                    }

                    function CheckNumericKeyInfo($char, $mozChar) {
                        if($mozChar != null) { // Look for a Mozilla-compatible browser
                            if(($mozChar >= 48 && $mozChar <= 57) || $mozChar == 0 || $mozChar == 45 || $char ==
                            8 || $mozChar == 13) $RetVal = true;
                            else {
                            $RetVal = false;
                            //alert('Please enter a numeric value.');
                            }
                        }
                        else { // Must be an IE-compatible Browser
                            if(($char >= 48 && $char <= 57) || ($char == 13)|| ($char == 45)) $RetVal = true;
                            else {
                            $RetVal = false;
                            //alert('Please enter a numeric value.');
                                }
                        }
                        return $RetVal;
                    }
        /* form validation end */
        
        function getModal(url) {
            console.log(url);
            $("#myModal").modal('show');
            $("#myModal").find('iframe').toggle().attr('src', url).show();
            // $(".tag_link").append('<a class="tag_link" href="'+url+'" target="_blank">'+url+'</a>');
            
        }
        function enquiryModel(test)
        {
            $("#enquiry_name").val('');
            $("#enquiry_email").val('');
            $("#enquiry_mobile").val('');
            $("#enquiry_remark").val('');
            $("#enquiryModal").modal('show');
            $("#hidden_test").val(test);

        }
        $('div.alert').delay(3000).slideUp(300);
    
        
        
   

</script>
@stack('scripts')
</body>
</html>