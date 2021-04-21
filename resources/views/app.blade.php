<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer></script>
    <title>Laravel Vue</title>
</head>

<body class="bg-black ">
    <main id='vue'>
        <navigation></navigation>
        <div class="">
            <router-view></router-view>
        </div>
    </div>
    </main>
    <script src="./js/app.js"></script>
</body>

</html>
