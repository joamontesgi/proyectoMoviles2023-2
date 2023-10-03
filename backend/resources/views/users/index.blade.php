<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <div class="container text-center">
        <h1>Registro de usuarios: </h1>
        <form action="{{ route('usuarios.store') }}" method="POST">
            @csrf
            <label for="name">Ingrese su nombre:
                <input type="text" name="name" id="name" placeholder="Nombre: " class="form-control">
            </label>
            <label for="last_name">Ingrese su apellido:
                <input type="text" name="last_name" id="last_name" placeholder="Apellido: " class="form-control">
            </label>
            <label for="phone">Ingrese su telefono:
                <input type="text" name="phone" id="phone" placeholder="Telefono: " class="form-control">
            </label>
            <label for="email">Ingrese su email:
                <input type="email" name="email" id="email" placeholder="Email: " class="form-control">
            </label>
            <label for="password">Ingrese su contraseña:
                <input type="password" name="password" id="password" placeholder="Contraseña: " class="form-control">
            </label>
            <label for="password_confirmation">Confirme su contraseña:
                <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirme su contraseña: " class="form-control">
            </label>
            <br>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</body>

</html>
