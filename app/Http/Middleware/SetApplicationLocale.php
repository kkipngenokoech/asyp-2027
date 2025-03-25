<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;

class SetApplicationLocale
{
    public function handle(Request $request, Closure $next)
    {

        $locale = $request->cookie('lang', config('app.locale'));

        // Set the application locale
        App::setLocale($locale);
        Config::set('app.locale', $locale);

        return $next($request);
    }
}
