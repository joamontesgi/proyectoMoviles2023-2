@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <p>{{ __('Tu rol es: ') }} {{ Auth::user()->role->name }}</p>

                    @if (Auth::check())
                    @switch(Auth::user()->role->name)
                        @case('gerente')
                            <a href="{{ route('gerente') }}">Gerente</a>
                            <a href="{{ route('usuarios.index') }}">Usuarios</a>
                            <a href="{{ route('asesor') }}">Asesor</a>
                            @break
                        @case('usuarios')
                            <a href="{{ route('usuarios.index') }}">User</a>
                            @break
                        @case('asesor')
                            <a href="{{ route('asesor') }}">Asesor</a>
                            @break
                        @default
                    @endswitch
                @endif
                    {{ __('Estás logueado!') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
