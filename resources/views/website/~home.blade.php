@extends('website.layout.welcome')
@section('content')
    <div class="banner-conceptual">
        <div id="home-banner-carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <!-- Indicators -->
            <ul class="carousel-indicators">
                <li data-target="#home-banner-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#home-banner-carousel" data-slide-to="1"></li>
                <li data-target="#home-banner-carousel" data-slide-to="2"></li>
                <li data-target="#home-banner-carousel" data-slide-to="3"></li>
            </ul>
            <!-- The slideshow -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6 order-lg-2">				
                            <img src="{{ asset('/public/website/assets/images/banner-image.png') }}" alt="" class="img-fluid" />
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <div class="carousel-caption">
                                <h1>Your Trusted<span><br /> Diagnostic Partner</span></h1>
                                <!-- <p>in health care now brings excellence in diagnostic</p> -->
                                <p><a href="{{ url('/about-us') }}">Know More</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6 order-lg-2">				
                            <img src="{{ asset('/public/website/assets/images/banner-image3.png') }}" alt="" class="img-fluid" />
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <div class="carousel-caption">
                                <h1>Diagnostics at an <br /><span>affordable price</span> </h1>
                                <!-- <p>in health care now brings excellence in diagnostic</p> -->
                                <p><a href="{{ url('/about-us') }}">Know More</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6 order-lg-2">				
                            <img src="{{ asset('/public/website/assets/images/banner-image-4.png') }}" alt="" class="img-fluid" />
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <div class="carousel-caption">
                                <h1>Pathology Services at<br /><span>your home at NO COST</span> </h1>
                                <!-- <p>in health care now brings excellence in diagnostic</p> -->
                                <p><a href="{{ url('/home-visit') }}">Book a Test</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6 order-lg-2">               
                            <img src="{{ asset('/public/website/assets/images/banner-image-2.png') }}" alt="" class="img-fluid" />
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <div class="carousel-caption">
                                <h1>Covid 19 RT-PCR Sample <br /><span>collection at your doorstep</span> </h1>
                                <!-- <p></p> -->
                                <p><a href="{{ url('/home-visit') }}">Book Your COVID-19 RT-PCR Test Now</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


            </div>
            <a class="carousel-control-prev" href="#home-banner-carousel" data-slide="prev">
            <img src="{{ asset('/public/website/assets/images/left-arrow.svg') }}" alt="" />
            </a>
            <a class="carousel-control-next" href="#home-banner-carousel" data-slide="next">
            <img src="{{ asset('/public/website/assets/images/right-arrow.svg') }}" alt="" />
            </a>
        </div>
        <div class="counter-layer text-center">
            <div class="container">
                <div class="row">
                    <div class="col">
                    <div class="commeon-heading blk">
                        <h4>Our Results in <span> Numbers </span></h4>
                    </div>
                    <ul class="counters-list">
                        <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <h4 class="home-counter-text"><span class="counter">40</span><span class="clr-pnk">+</span></h4>
                            <h5>Years of Experience</h5>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                            <h4 class="home-counter-text"><span class="counter">10</span>L<span class="clr-pnk">+</span></h4>
                            <h5>Happy Customers</h5>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                            <h4 class="home-counter-text"><span class="counter">100</span><span class="clr-pnk">+</span></h4>
                            <h5>Tests & Health Packages</h5>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                            <h4 class="home-counter-text"><span class="counter">100</span>K<span class="clr-pnk">+</span></h4>
                            <h5>Tests Per Annum</h5>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                            <h4 class="home-counter-text"><span class="counter">5</span>K<span class="clr-pnk">+</span></h4>
                            <h5>Samples Processing/day</h5>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="top-test">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-11 mr-auto ml-auto">
                    <div class="commeon-heading wht text-center">
                    <h4>Premier's Top Common <span> Tests </span></h4>
                    </div>
                    <div class="toptests-slider">
                    <div class="test-box">
                        <div class="test-details text-center home-details">
                            <h3 class="mb-3" style="min-height: 85px;border: none;background: none;"> 
                               <img class="nrm" src="{{ asset('/public/website/assets/images/blood-test-white.png') }}" width="75px"> 
                               <img class="whl-hvr" src="{{ asset('/public/website/assets/images/blood-test-pink.png') }}" width="75px">
                            </h3>
                            <h4> Blood Test </h4>
                            <p>Taking of blood samples to assess the general state of health.</p>
                            <h5><img src="{{ asset('/public/website/assets/images/home.png') }}"> Home Collection Available </h5>
                            <div class="dwn-btmns text-center">
                                <a class="tpn-btn" href="javascript:void(0)" onclick="enquiryModel('Blood Test')">Request a call back</a>
                                {{-- <a class="tpn-btn" href="javascript:void(0)" data-toggle="modal" data-target="#enquiryModal">Request a call back</a> --}}
                                {{-- <a type="button" onclick='getModal("{{ $value['video_url'] }}")'  class="myModal">Watch video testimonial of {{ $value['given_by'] }}</a><span>- Click here</span> --}}
                                <a class="dwn-btn" href="{{ route('home-visit.index',['key'=>'Blood Test']) }}">Book a home visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="test-box">
                        <div class="test-details text-center home-details">
                            <h3 class="mb-3" style="min-height: 85px;border: none;background: none;"> 
                               <img class="nrm" src="{{ asset('/public/website/assets/images/urine-test-white.png') }}" width="75px"> 
                               <img class="whl-hvr" src="{{ asset('/public/website/assets/images/urine-test-pink.png') }}" width="75px">
                            </h3>
                            <h4>Urine Test</h4>
                            <p>Taking samples of urine or stool to identify diseases.</p>
                            <h5><img src="{{ asset('/public/website/assets/images/home.png') }}"> Home Collection Available </h5>
                            <div class="dwn-btmns text-center">
                                <a class="tpn-btn" href="javascript:void(0)" onclick="enquiryModel('Urine Test')"> Request a call back</a>
                                <a class="dwn-btn" href="{{ route('home-visit.index',['key'=>'Urine Test']) }}">Book a home visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="test-box ">
                        <div class="test-details text-center home-details">
                            <h3 class="mb-3" style="min-height: 85px;border: none;background: none;"> 
                               <img class="nrm" src="{{ asset('/public/website/assets/images/x-rays-white.png') }}" width="75px"> 
                               <img class="whl-hvr" src="{{ asset('/public/website/assets/images/x-rays-pink.png') }}" width="75px">
                            </h3>
                            <h4>X Ray </h4>
                            <p>Taking images of the bones inside the body for identifying fractures.</p>
                            <h5><img src="{{ asset('/public/website/assets/images/home.png') }}"> Home Collection Available </h5>
                            <div class="dwn-btmns text-center">
                                <a class="tpn-btn" href="javascript:void(0)" onclick="enquiryModel('X Ray')"> Request a call back</a>
                                <a class="dwn-btn" href="{{ route('home-visit.index',['key'=>'X Ray']) }}">Book a home visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="test-box">
                        <div class="test-details text-center home-details">
                            
                            <h3 class="mb-3" style="min-height: 85px;border: none;background: none;"> 
                               <img class="nrm" src="{{ asset('/public/website/assets/images/scan-white.png') }}" width="75px"> 
                               <img class="whl-hvr" src="{{ asset('/public/website/assets/images/scan-pink.png') }}" width="75px">
                            </h3>
                            <h4>Scan</h4>
                            <p>Examination of the internal organs of the body to diagnose diseases.</p>
                            <h5><img src="{{ asset('/public/website/assets/images/home.png') }}"> Home Collection Available </h5>
                            <div class="dwn-btmns text-center">
                                <a class="tpn-btn" href="javascript:void(0)" onclick="enquiryModel('Scan')"> Request a call back</a>
                                <a class="dwn-btn" href="{{ route('home-visit.index',['key'=>'Scan']) }}">Book a home visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="test-box">
                        <div class="test-details text-center home-details">
                            <h3 class="mb-3" style="min-height: 85px;border: none;background: none;"> 
                               <img class="nrm" src="{{ asset('/public/website/assets/images/pcr-test-white.png') }}" width="75px"> 
                               <img class="whl-hvr" src="{{ asset('/public/website/assets/images/pcr-test-pink.png') }}" width="75px">
                            </h3>
                            <h4>Covid</h4>
                            <p>ICMR approved COVID-19 tests are done for detection of the virus.</p>
                            <h5><img src="{{ asset('/public/website/assets/images/home.png') }}"> Home Collection Available </h5>
                            <div class="dwn-btmns text-center">
                                <a class="tpn-btn" href="javascript:void(0)" onclick="enquiryModel('Covid')"> Request a call back</a>
                                <a class="dwn-btn" href="{{ route('home-visit.index',['key'=>'Covid']) }}">Book a home visit</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <!-- <div class="comn-btns text-center">
                    <a href="book-a-test"> View All Test </a>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <section class="health-packages-lst">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-11 mr-auto ml-auto">
                    <img class="hlth-imgue" src="{{ asset('/public/website/assets/images/tubes.png') }}" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    <div class="commeon-heading blk text-center">
                    <h4>Premier's Health <span> Packages </span></h4>
                    </div>
                    <div class="health-packages">
                    <div class="hlth-pckge">
                        <img src="{{ asset('/public/website/assets/images/package-1.png') }}" class="img-fluid">
                        <h4><a href="{{ url('/master-health-checkup') }}">Premier's Master Health Checkup</a></h4>
                        <p>The Master Health Checkup is vital for identifying the early ... </p>
                        <h5><img src="{{ asset('/public/website/assets/images/tube-grey.png') }}"> Includes 15 tests</h5>
                        <a class="arr-btn" href="{{ url('/master-health-checkup') }}"><img src="{{ asset('/public/website/assets/images/right-pnk-arr.png') }}"></a>
                    </div>
                    <div class="hlth-pckge">
                        <img src="{{ asset('/public/website/assets/images/package-2.png') }}" class="img-fluid">
                        <h4><a href="{{ url('/executive-health-checkup') }}">Premier's Executive Health Checkup</a></h4>
                        <p>The Executive Health Checkup package ...</p>
                        <h5><img src="{{ asset('/public/website/assets/images/tube-grey.png') }}"> Includes 15 tests</h5>
                        <a class="arr-btn" href="{{ url('/executive-health-checkup') }}"><img src="{{ asset('/public/website/assets/images/right-pnk-arr.png') }}"></a>
                    </div>
                    <div class="hlth-pckge">
                        <img src="{{ asset('/public/website/assets/images/package-5.png') }}" class="img-fluid">
                        <h4><a href="{{ url('/wellness-package-women') }}">Premier's Wellness Package for Women</a></h4>
                        <p>This package is exclusively designed for women ...</p>
                        <h5><img src="{{ asset('/public/website/assets/images/tube-grey.png') }}"> Includes 15 tests</h5>
                        <a class="arr-btn" href="{{ url('/wellness-package-women') }}"><img src="{{ asset('/public/website/assets/images/right-pnk-arr.png') }}"></a>
                    </div>
    
                    <div class="hlth-pckge">
                        <img src="{{ asset('/public/website/assets/images/package-childchekup.png') }}" class="img-fluid">
                        <h4><a href="{{ url('/child-health-checkup') }}">Premier's Child Health Checkup</a></h4>
                        <p>The child health checkup package helps in keeping ...</p>
                        <h5><img src="{{ asset('/public/website/assets/images/tube-grey.png') }}"> Includes 15 tests</h5>
                        <a class="arr-btn" href="{{ url('/child-health-checkup') }}"><img src="{{ asset('/public/website/assets/images/right-pnk-arr.png') }}"></a>
                    </div>
    
                    <div class="hlth-pckge">
                        <img src="{{ asset('/public/website/assets/images/package-4.png') }}" class="img-fluid">
                        <h4><a href="{{ url('/senior-citizen-health-checkup') }}">Premier's Senior Citizen Health Checkup</a></h4>
                        <p>The health package has been carefully designed ...</p>
                        <h5><img src="{{ asset('/public/website/assets/images/tube-grey.png') }}"> Includes 15 tests</h5>
                        <a class="arr-btn" href="{{ url('/senior-citizen-health-checkup') }}"><img src="{{ asset('/public/website/assets/images/right-pnk-arr.png') }}"></a>
                    </div>                  
                    <div class="hlth-pckge">
                        <img src="{{ asset('/public/website/assets/images/package-2.png') }}" class="img-fluid">
                        <h4><a href="{{ url('/pre-marital-health-checkup') }}">Premier's Pre-Marital Health Checkup</a></h4>
                        <p>The package consists of tests that are ought to ...</p>
                        <h5><img src="{{ asset('/public/website/assets/images/tube-grey.png') }}"> Includes 15 tests</h5>
                        <a class="arr-btn" href="{{ url('/pre-marital-health-checkup') }}"><img src="{{ asset('/public/website/assets/images/right-pnk-arr.png') }}"></a>
                    </div>
                    <div class="hlth-pckge">
                        <img src="{{ asset('/public/website/assets/images/emp-package.png') }}" class="img-fluid">
                        <h4><a href="{{ url('/pre-employment-health-checkup') }}">Premier's Pre-Employment Health Checkup</a></h4>
                        <p>The Pre-Employment Health Checkup is geared ...</p>
                        <h5><img src="{{ asset('/public/website/assets/images/tube-grey.png') }}"> Includes 15 tests</h5>
                        <a class="arr-btn" href="{{ url('/pre-employment-health-checkup') }}"><img src="{{ asset('/public/website/assets/images/right-pnk-arr.png') }}"></a>
                    </div>
                    </div>
                    <!-- <div class="comn-btns text-center">
                        <a href=""> View All Health Packages </a>
                    </div> -->
                </div>
                <div class="col-lg-12">
                    <div class="sample-collections text-center">
                    <div class="commeon-heading blk text-center">
                        <h4> Home Sample Collection <br /><span> In 6 Easy Steps</span>
                        </h4>
                    </div>
                    <ul>
                        <li>
                            <div class="steps-imges">
                                <img src="{{ asset('/public/website/assets/images/dial.png') }}">
                            </div>
                            <h4>Give a missed call to 9940344041 or book online</h4>
                            <h5>01</h5>
                        </li>
                        <li>
                            <div class="steps-imges">
                                <img src="{{ asset('/public/website/assets/images/step-1.png') }}">
                            </div>
                            <h4>Select <br> the test</h4>
                            <h5>02</h5>
                        </li>                     
                        <li>
                            <div class="steps-imges">
                                <img src="{{ asset('/public/website/assets/images/step-3.png') }}">
                            </div>
                            <h4>Select your convenient date and time</h4>
                            <h5>03</h5>
                        </li>
                        <li>
                            <div class="steps-imges">
                                <img src="{{ asset('/public/website/assets/images/step-4.png') }}">
                            </div>
                            <h4>Our Technician will visit you</h4>
                            <h5>04</h5>
                        </li>
                        <li>
                            <div class="steps-imges">
                                <img src="{{ asset('/public/website/assets/images/step-5.png') }}">
                            </div>
                            <h4>Tests will be done in our labs</h4>
                            <h5>05</h5>
                        </li>
                        <li>
                            <div class="steps-imges">
                                <img src="{{ asset('/public/website/assets/images/step-6.png') }}">
                            </div>
                            <h4>Reports can be viewed/ downloaded online</h4>
                            <h5>06</h5>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="boook-home-visit">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="visit-cont">
                    <div class="commeon-heading wht text-left">
                        <h4> Book a <br>
                            <span>Home visit Now!</span>
                        </h4>
                    </div>
                    <h5 class="mb-20">Book a home visit with Premier Health Centre and take the step towards a healthy life</h5>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="visit-form">
                        {!! Form::open(['route' => 'home-visit.store', 'autocomplete'=>'off', 'data-parsley-validate'=>'', 'class'=>'needs-validation', 'id' => 'testimonial_form', 'method'=> 'post', 'files' => true]) !!}
                        <div class="frm-fields row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-data">
                                            <input class="input100" type="text" name="full_name" id="full_name" placeholder="Your Full Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Full Name'" required> 
                                            <!-- <span class="focus-input100" data-placeholder="Your Full Name"></span> -->
                                        </div>
                                        <div class="form-data">
                                            <input class="input100" type="tel" name="mobile" onkeypress="validate(event)" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" minlength="10" maxlength="10" id="phone" placeholder="Your Mobile Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Mobile Number'" required>
                                            <!-- <span class="focus-input100" data-placeholder="Your Mobile Number"></span> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-data">
                                            <input class="input100" type="email" name="email" id="email" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" required>
                                            <!-- <span class="focus-input100" data-placeholder="Email Address"></span> -->   
                                        </div>
                                        <div class="form-data">
                                            <select class="input100 has-val" name="visit" id="visit" placeholder="Type of Visit" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Type of Visit'" required>
                                                <option value="" selected>Type of Visit</option>                                    
                                                <option value="Home Visit">Home Visit</option>
                                                <option value="Center Visit">Center Visit</option>
                                            </select>
                                            <!-- <span class="focus-input100" data-placeholder="Type of Visit"></span> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-data">
                                            <select class="input100 has-val" id="area" name="area" placeholder="Select Location" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Select Location'" required>
                                                <option value="">Select Location</option>
                                                @foreach($area as $key=>$val)
                                                <option value="{{ $val['id'] }}">{{ $val['area'] }}</option>
                                                @endforeach
                                               
                                           </select>
                                            <!-- <input class="input100" type="text" name="location" id="location" placeholder=""> -->
                                            <!-- <span class="focus-input100" data-placeholder="Select Location"></span> -->

                                        </div>

                                        <div class="form-data">
                                            <select class="input100 has-val" name="test" id="test" placeholder="Select Test" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Select Test'" required>
                                                <option value="" selected>Select Test</option>
                                                <option value="Blood Test">Blood Test</option>
                                                <option value="Urine Test">Urine Test</option>
                                                <option value="X Ray">X Ray</option>
                                                <option value="Scan">Scan</option>
                                                <option value="Covid">Covid</option>
                                             </select>
                                        <!-- <span class="focus-input100" data-placeholder="Select Test"></span> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-data date-time mb-30">
                                            <input class="input100" type="text" name="dateTime" id="dateTime" placeholder="Choose Date and Time" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Choose Date and Time'" placeholder="">
                                            <!-- <span class="focus-input100" data-placeholder="Choose Date and Time"></span> -->    
                                        </div>
                                            
                                        <div class="form-data sbm text-right">
                                            <input type="submit" name="submit" value="Submit" class="mt-0 mb-0 input100 d-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="overflow-hidden abt-using">
        <div class="pink-bg-right"></div>
        <div class="green-bg-left"></div>
        <div class="container">
            <div class="row justify-content-around mar-bot-50">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div class="commeon-heading blk">
                        <h4> Four decades of <br/>
                            <span>Diagnostic excellence</span>
                        </h4>
                    </div>
                    <p class="mar-top-30">Premier Health Center, one of the pioneering diagnostic centers of Chennai offers diagnostic services with a brand new, cutting edge technology providing results of uncompromising quality in a transparent and customer focused manner. Premier is regarded as one of the finest diagnostic centers, It has been recognized by government and various hospitals for its successful venture in diagnostic services for over a decade.</p>
                <div class="comn-btns text-l">
                    <a href="about-us"> Know More </a>
                    </div>
                    <h5 class="mar-top-30">Accreditations</h5>
                    <img src="{{ asset('/public/website/assets/images/accreditations-logo.png') }}" alt="" class="img-fluid" />
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-7 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000">
                    <div class="home-about-image">
                    <img src="{{ asset('/public/website/assets/images/home-image1.png') }}" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
            <div class="row pad-top-50 pad-bot-50">
                <div class="col " data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div class="commeon-heading blk text-center">
                    <h4> Our <span>Offerings </span></h4>
                    </div>
                    <div class="home-services-scroll">
                    <div>
                        <a href="#">
                            <img src="{{ asset('/public/website/assets/images/our-services-icon1.png') }}" alt=""/>
                            Pathology
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="{{ asset('/public/website/assets/images/our-services-icon2.png') }}" alt=""/>
                            Radiology
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="{{ asset('/public/website/assets/images/our-services-icon3.png') }}" alt=""/>
                            Digital X-rays
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="{{ asset('/public/website/assets/images/our-services-icon4.png') }}" alt=""/>
                            Medical Imaging
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="{{ asset('/public/website/assets/images/our-services-icon5.png') }}" alt=""/>
                            Clinical Assistance
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="{{ asset('/public/website/assets/images/our-services-icon9.png') }}" alt=""/>
                            PCR based Tests
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="{{ asset('/public/website/assets/images/our-services-icon8.png') }}" alt=""/>
                            CR Digitizer
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="{{ asset('/public/website/assets/images/our-services-icon7.png') }}" alt=""/>
                            Cutting Edge Lab Tech
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="{{ asset('/public/website/assets/images/our-services-icon6.png') }}" alt=""/>
                            Providing Support Staff
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row pad-top-50">
                <div class="col-sm-12 col-md-12 col-lg-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div class="light-gray-bg find-a-lab pad-20 mar-bot-30">
                    <img src="{{ asset('/public/website/assets/images/find-a-lab.png') }}" alt="" class="img-fluid"/>
                    <h5 class="text-pink">Find the Premier Health Center<span> near you</span></h5>
                    <p>Find the Premier Health Center closest to you to access the best of diagnostic services</p>
                    <div class="comn-btns">
                        <a href="{{ url('/find-a-lab') }}" class="blue-bg">Find a Lab</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div class="dark-gray-bg buddy-cards pad-20 mar-bot-30">
                    <img src="{{ asset('/public/website/assets/images/buddy-cards.png') }}" alt="" class="img-fluid"/>
                    <h5 class="text-white">Health Buddy Cards <span> Loyalty Program</span></h5>
                    <p>A loyalty program with just the customer in mind is part of health benefit Plan, Premier Health Center offers the Health Buddy Cards</p>
                    <div class="comn-btns">
                        <a href="{{ url('/loyalty-card') }}">Get it Now</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pink-bg-right-bottom"></div>
    </section>
    <section class="covid-pcr-bg" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-6">
                    <h2 class="text-white">Covid 19 RT-PCR <span>Sample collection at your doorstep</span></h2>
                    <p class="text-white">ICMR Approved Covid-19 Testing Center</p>
                    <div class="comn-btns">
                    <a href="{{ url('/home-visit') }}">Book Your COVID-19 RT-PCR Test Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <div class="green-bg-left-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-12 col-11 mr-auto ml-auto">
                    <div class="commeon-heading blk text-center">
                    <h4> What our  <span> Clients Say </span></h4>
                    <div class="testimonial-scroll">
                        @foreach ($testimonial as $key=>$value)
                            <div>
                                <div class="home-testimonials">
                                    <p>{{ $value['description'] }}</p>
                                    <div class="home-testimonial-image">
                                    <img src="{{asset('/public/upload/testimonial/photo').'/'.$value->photo}}" alt=""/>
                                    <h4>{{ $value['given_by'] }} <span>{{ $value['designation'] }} </span></h4>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                        {{-- <div>
                            <div class="home-testimonials">
                                <p>One-stop solution for all your diagnostic needs. The brand is well-known for its accurate results.</p>
                                <div class="home-testimonial-image">
                                <img src="{{ asset('/public/website/assets/images/testimonial-image.jpg') }}" alt=""/>
                                <h4>Sanjay <span>Entrepreneur</span></h4>
                                </div>
                            </div>
                        </div> --}}
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection