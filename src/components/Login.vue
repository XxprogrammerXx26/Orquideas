<template>
    <div class="login-wrapper">
      <div class="login-container">
        <h2 class="login-title">Iniciar Sesión</h2>
  
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="input-group">
            <label for="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Introduce tu correo"
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
  
          <button type="submit" :disabled="isLoading" class="btn-login">
            <span v-if="isLoading" class="spinner"></span>
            Iniciar Sesión
          </button>
        </form>
  
        <p class="signup-link">
          ¿No tienes cuenta? <router-link to="/signup">Regístrate</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        isLoading: false,
        emailError: '',
        passwordError: ''
      };
    },
    methods: {
      validateForm() {
        this.emailError = '';
        this.passwordError = '';
  
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
  
        return !this.emailError && !this.passwordError;
      },
      async handleLogin() {
        if (!this.validateForm()) return;
  
        this.isLoading = true;
  
        // Simula una llamada de autenticación
        setTimeout(() => {
          if (this.email === 'user@example.com' && this.password === 'password123') {
            this.$router.push('/dashboard');
          } else {
            this.emailError = 'Credenciales incorrectas';
            this.passwordError = 'Credenciales incorrectas';
          }
          this.isLoading = false;
        }, 1500);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos globales de la vista de login */
  .login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-color: #f4f7fc;
  }
  
  .login-container {
 
    background-color: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    text-align: center;
  }
  
  .login-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #2d6a4f; /* Verde relacionado con la agricultura */
  }
  
  .login-form {
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
  
  .signup-link {
    margin-top: 20px;
    font-size: 14px;
  }
  
  .signup-link a {
    color: #2d6a4f; /* Enlace verde */
    text-decoration: none;
  }
  
  .signup-link a:hover {
    text-decoration: underline;
  }
  </style>
  