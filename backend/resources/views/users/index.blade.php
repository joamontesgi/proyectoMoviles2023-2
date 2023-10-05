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
                <input type="text" name="name" id="name" placeholder="Nombre: " class="form-control" required>
            </label>
            <label for="last_name">Ingrese su apellido:
                <input type="text" name="last_name" id="last_name" placeholder="Apellido: " class="form-control">
            </label>
            <label for="role_id">Seleccione un rol:
                <select name="role_id" id="role_id" class="form-control">
                    <option value="">Seleccione un rol</option>
                    @foreach ($roles as $role)
                        <option value="{{ $role->id }}"> {{ $role->name }} </option>
                    @endforeach
                </select>
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
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID del usuario</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <td> {{ $loop->iteration }} </td>
                        <td> {{ $user->name }} </td>
                        <td> {{ $user->last_name }} </td>
                        <td> {{ $user->email }} </td>
                        <td>
                            <form action="{{ route('usuarios.destroy', $user->id) }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger">Eliminar</button>
                            </form>
                            <a href="{{ route('usuarios.edit', $user->id) }}" class="btn btn-warning">Editar</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>

</html>
