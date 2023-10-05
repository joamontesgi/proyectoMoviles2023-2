<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Editar</h1>
    <form action="{{ route('usuarios.update', $user->id) }}" method="POST">
        @csrf
        @method('PUT')
        <label for="name">Ingrese su nombre:
            <input type="text" name="name" id="name" placeholder="Nombre: " class="form-control" value="{{ $user->name }}">
        </label>
        <label for="last_name">Ingrese su apellido:
            <input type="text" name="last_name" id="last_name" placeholder="Apellido: " class="form-control" value="{{ $user->last_name }}">
        </label>
        <label for="phone">Ingrese su telefono:
            <input type="text" name="phone" id="phone" placeholder="Telefono: " class="form-control" value="{{ $user->phone }}">
        </label>
        <label for="email">Ingrese su email:
            <input type="email" name="email" id="email" placeholder="Email: " class="form-control" value="{{ $user->email }}">
        </label>
            <input hidden type="password" name="password" id="password" placeholder="Contraseña: " class="form-control" value="{{ $user->password }}">
            <input hidden type="password" name="password_confirmation" id="password_confirmation"
                placeholder="Confirme su contraseña: " class="form-control" value="{{ $user->password }}">
        <br>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</body>

</html>
