<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\Schema;

class UserTableTest extends TestCase
{
    use RefreshDatabase; // Para que se refresque la base de datos

    /** @test */
    public function it_has_users_table()
    {
        // Comprueba si la tabla 'users' existe en la base de datos
        $this->assertTrue(Schema::hasTable('users'));
    }

    /** @test */
    public function it_has_expected_columns()
    {
        // Se comprueban los campos de la tabla
        $expectedColumns = [
            'id',
            'name',
            'last_name',
            'document_type',
            'document_number',
            'address',
            'phone_number',
            'email',
            'email_verified_at',
            'password',
            'visible',
            'remember_token',
            'created_at',
            'updated_at',
        ];

        $actualColumns = Schema::getColumnListing('users');

        foreach ($expectedColumns as $column) {
            $this->assertTrue(in_array($column, $actualColumns), "La columna '$column' no existe en la tabla 'users'");
        }
    }
    /** @test */
    public function it_can_create_a_user()
    {
        // Simular datos de entrada para la creación de un usuario
        $userData = [
            'name' => 'John',
            'last_name' => 'Doe',
            'phone_number' => '123456789',
            'email' => 'john@example.com',
            'password' => 'secret123',
        ];

        // Enviar una solicitud POST al método store del controlador
        $response = $this->post(route('usuarios.store'), $userData);

        // Verificar que el usuario se haya creado correctamente
        $response->assertStatus(302); // Redirección después de crear
        $response->assertSessionHas('success', 'Usuario creado exitosamente!'); // Comprobar mensaje de éxito

        // Verificar que el usuario se haya almacenado en la base de datos
        $this->assertDatabaseHas('users', ['email' => 'john@example.com']);
    }

}
