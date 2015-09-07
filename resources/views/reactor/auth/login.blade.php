@extends('auth.layout')

@section('pageTitle', trans('auth.login'))

@section('content')
    <h2>{{ trans('auth.login') }}</h2>
    @include('auth.error')
    <form method="POST" action="/reactor/auth/login">
        {!! csrf_field() !!}

        <div class="form-group form-group-icon-label">
            <input type="email" name="email" id="email" placeholder="{{ trans('validation.attributes.email') }}" value="{{ old('email') }}" required>
            <label class="icon-label" for="email">
                <i class="icon-mail"></i>
            </label>
        </div>

        <div class="form-group form-group-icon-label">
            <input type="password" name="password" id="password" placeholder="{{ trans('validation.attributes.password') }}" required>
            <label class="icon-label" for="password">
                <i class="icon-lock"></i>
            </label>
        </div>

        <div class="auth-buttons">
            <label class="button auth-remember-check">
                <input type="checkbox" name="remember">
                <span>
                    {{ uppercase(trans('auth.remember')) }}
                    <i class="icon-cancel"></i><i class="icon-check"></i>
                </span>
            </label>
            <button class="button button-emphasized button-icon" type="submit">{{ uppercase(trans('auth.login')) }} <i class="icon-right-open-big"></i></button>
        </div>
    </form>
    <div class="auth-option">
        <a href="/reactor/password/email">{{ trans('auth.forgot') }}</a>
    </div>
@endsection