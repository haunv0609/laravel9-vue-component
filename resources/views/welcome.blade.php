<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        @vite('vitejs/scss/app.scss')
    </head>
    <body class="antialiased">
        <div id="app">
            <header-pc></header-pc>
            <test-component></test-component>
        </div>
        @vite('vitejs/vue/app.js')
    </body>
</html>
