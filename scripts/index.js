// Esta es la base de datos de nuestros usuarios
const database = {
  users: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

window.onload = function () {

  
  const emailField = document.getElementById("email-input");
  const passwordField = document.getElementById("password-input");
  const loginButton = document.querySelector("button.login-btn");

  loginButton.onclick = () => {

    login(emailField.value, passwordField.value);
  }
}// <---- END OF ONLOAD



function login(email, password) {
  const errorContainer = document.getElementById("error-container");
  const infoContainer = document.getElementById("loader");
  infoContainer.classList.remove("hidden");
  const form = document.getElementById("form");
  
  setTimeout(() => {
    const loginStatus = validateInfo(email, password);

    if (loginStatus) {
      form.classList.add("hidden");
      document.querySelector("h1").textContent = "Welcome to the website"

    } else {
      infoContainer.classList.add("hidden");
      errorContainer.classList.remove("hidden");
      errorContainer.textContent = "Some of the data you entered is incorrect"
      
    }

  }, 3000)


}

function validateEmailFormat(email) {
  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    return true;

  } else {
    return false;
  }

}

function validatePasswordFormat(password) {
  if (/^[A-Za-z0-9]{5,10}$/.test(password)) {
    return true;
  } else {
    return false;
  }
}

function validateInfo(email, password) {
  const validEmail = validateEmailFormat(email);
  const validPassword = validatePasswordFormat(password)
  const userExist = database.users.find(user => user.email === email && user.password === password);
  if (validEmail && validPassword && userExist) {
    return true;
  } else {
    return false;
  }

}


// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
