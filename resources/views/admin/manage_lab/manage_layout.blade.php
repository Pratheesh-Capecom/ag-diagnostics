@extends('layouts.admin')

@section('admin_title') Home @endsection

@section('admin_content')
   <ul class="nav nav-gradient w-100">
        
    <?php $user = Sentinel::getUser();?>
    @if($user->hasAccess('user.view.manage_lab')||$user->hasAccess('user.add.manage_lab'))
        <li class="nav-item d-flex">
            <a class="nav-link {{ Route::is('manage.index','manage.create','manage.edit') ? "active" : "" }}" href="{{ route('manage.index') }}">
                <i class="fa-building fa me-2"></i>
                Manage Lab Master 
            </a> 
        </li>
    @endif
   </ul>
   <div class="my-4">
      @yield('admin_master_content')
   </div>
@endsection
