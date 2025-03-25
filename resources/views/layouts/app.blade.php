<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Palanquin:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet">

</head>
<meta name="csrf-token" content="{{ csrf_token() }}">

<body class="bg-gray-50 font-sans antialiased">

    @livewire('layout.navigation-menu')

    <main class="">
        @yield('content')
    </main>
    {{-- <livewire:layout.footer /> --}}
    @livewireScripts
</body>

</html>
