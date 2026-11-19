/*
 * Clase Contacto (No hace falta modificarla)
 *
 * Datos de cada contacto:
 *   - nombre:   texto
 *   - telefono: texto con 9 cifras (el formato se comprueba en formulario.js)
 *   - email:    texto (puede estar vacío: es opcional)
 *   - grupo:    "familia", "amigos", "trabajo" u "otros" (values del select)
 *   - favorito: true o false (si la casilla está marcada o no)
 *
 * Los datos se leen con sus getters, SIN paréntesis:
 *     contacto.Nombre   contacto.Telefono   contacto.Email   contacto.Grupo   contacto.Favorito
 */
class Contacto {

	constructor(nombre, telefono, email, grupo, favorito) {
		this._nombre = nombre;
		this._telefono = telefono;
		this._email = email;
		this._grupo = grupo;
		this._favorito = (favorito === true);   // se guarda siempre como true o false
	}

	get Nombre() {
		return this._nombre;
	}

	get Telefono() {
		return this._telefono;
	}

	get Email() {
		return this._email;
	}

	get Grupo() {
		return this._grupo;
	}

	get Favorito() {
		return this._favorito;
	}

	// Texto para la lista, con los datos separados por " · ":
	//   "Ana López · 612345678 · ana@correo.es · Amigos"
	// Si no tiene email, no se pone.
	toString() {
		let texto = this.Nombre + " · " + this.Telefono;
		if (this.Email !== "") {
			texto = texto + " · " + this.Email;
		}
		// "amigos" -> "Amigos" (primera letra en mayúscula)
		texto = texto + " · " + this.Grupo.charAt(0).toUpperCase() + this.Grupo.slice(1);
		return texto;
	}
}
