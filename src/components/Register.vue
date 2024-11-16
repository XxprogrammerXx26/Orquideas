<template>
    <div class="register-wrapper">
      <div class="register-container">
        <h2 class="register-title">Crear Cuenta</h2>
  
        <form @submit.prevent="handleRegister" class="register-form">
          <div class="input-group">
            <label for="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Introduce tu nombre completo"
              required
              :class="{'input-error': nameError}"
            />
            <span v-if="nameError" class="error-text">{{ nameError }}</span>
          </div>
  
          <div class="input-group">
            <label for="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Introduce tu correo electrónico"
              required
              :class="{'input-error': emailError}"
            />
            <span v-if="emailError" class="error-text">{{ emailError }}</span>
          </div>
  
          <div class="input-group">
            <label for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Introduce tu contraseña"
              required
              :class="{'input-error': passwordError}"
            />
            <span v-if="passwordError" class="error-text">{{ passwordError }}</span>
          </div>
  
          <div class="input-group">
            <label for="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              placeholder="Confirma tu contraseña"
              required
              :class="{'input-error': confirmPasswordError}"
            />
            <span v-if="confirmPasswordError" class="error-text">{{ confirmPasswordError }}</span>
          </div>
  
          <button type="submit" :disabled="isLoading" class="btn-register">
            <span v-if="isLoading" class="spinner"></span>
            Crear Cuenta
          </button>
        </form>
  
        <p class="login-link">
          ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isLoading: false,
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
      };
    },
    methods: {
      validateForm() {
        this.nameError = '';
        this.emailError = '';
        this.passwordError = '';
        this.confirmPasswordError = '';
  
        if (!this.name) {
          this.nameError = 'El nombre completo es obligatorio.';
        }
  
        if (!this.email) {
          this.emailError = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(this.email)) {
          this.emailError = 'Por favor ingresa un correo válido.';
        }
  
        if (!this.password) {
          this.passwordError = 'La contraseña es obligatoria.';
        } else if (this.password.length < 6) {
          this.passwordError = 'La contraseña debe tener al menos 6 caracteres.';
        }
  
        if (!this.confirmPassword) {
          this.confirmPasswordError = 'Debes confirmar tu contraseña.';
        } else if (this.password !== this.confirmPassword) {
          this.confirmPasswordError = 'Las contraseñas no coinciden.';
        }
  
        return !this.nameError && !this.emailError && !this.passwordError && !this.confirmPasswordError;
      },
      async handleRegister() {
        if (!this.validateForm()) return;
  
        this.isLoading = true;
  
        // Simula una llamada de registro
        setTimeout(() => {
          console.log('Usuario registrado:', this.name, this.email);
          this.$router.push('/login'); // Redirige a la página de login después de registrarse
          this.isLoading = false;
        }, 1500);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para el formulario de registro */
  .register-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f7fc;
  }
  
  .register-container {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  .register-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #2d6a4f; /* Verde relacionado con la agricultura */
  }
  
  .register-form {
    display: flex;
    flex-direction: column;
  }
  
  .input-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    font-size: 14px;
    color: #2d6a4f; /* Verde */
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #2d6a4f; /* Borde verde */
    border-radius: 4px;
    transition: border-color 0.3s ease;
  }
  
  input:focus {
    border-color: #3b9e5d; /* Verde más brillante al enfocar */
    outline: none;
  }
  
  .input-error {
    border-color: #e74c3c;
  }
  
  .error-text {
    font-size: 12px;
    color: #e74c3c;
    margin-top: 5px;
  }
  
  button {
    padding: 12px;
    font-size: 16px;
    background-color: #2d6a4f; /* Botón verde */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:disabled {
    background-color: #ccc;
  }
  
  button:hover {
    background-color: #1d5c40; /* Verde más oscuro al pasar el ratón */
  }
  
  .spinner {
    border: 2px solid #fff;
    border-top: 2px solid #3b9e5d; /* Verde más brillante */
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
    margin-right: 8px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .login-link {
    margin-top: 20px;
    font-size: 14px;
  }
  
  .login-link a {
    color: #2d6a4f; /* Enlace verde */
    text-decoration: none;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  </style>
  