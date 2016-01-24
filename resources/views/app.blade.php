<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ elixir('css/master.css') }}" rel="stylesheet">
</head>
<body id="vue-app">
    <div class="container">
        <router-view></router-view>
    </div>
    <script src="{{ elixir('js/master.js') }}"></script>
</body>
</html>
