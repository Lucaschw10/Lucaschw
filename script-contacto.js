document.addEventListener('DOMContentLoaded', () => {
  const formElements = {
      nombre: document.getElementById("nombre"),
      apellido: document.getElementById("apellido"),
      email: document.getElementById("email"),
      telefono: document.getElementById("telefono"),
      edad: document.getElementById("edad"),
      direccion: document.getElementById("direccion"),
      provincia: document.getElementById("provincia"),
      codigoPostal: document.getElementById("codigoPostal")
  };

  const resultElements = {
      resNombre: document.getElementById("resNombre"),
      resApellido: document.getElementById("resApellido"),
      resEmail: document.getElementById("resEmail"),
      resTelefono: document.getElementById("resTelefono"),
      resEdad: document.getElementById("resEdad"),
      resDireccion: document.getElementById("resDireccion"),
      resProvincia: document.getElementById("resProvincia"),
      resCodigoPostal: document.getElementById("resCodigoPostal")
  };

  function updateResult(field, value) {
      if (resultElements[field]) {
          resultElements[field].innerText = value;
      }
      document.getElementById("resultado").style.display = "block";
  }

  for (let field in formElements) {
      formElements[field].addEventListener("input", (event) => {
          updateResult(`res${field.charAt(0).toUpperCase() + field.slice(1)}`, event.target.value);
      });
  }
});

function borrarTelefono() {
  document.getElementById("telefono").value = "";
}
