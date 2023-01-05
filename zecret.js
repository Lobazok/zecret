class zecret {

    constructor() {
        /*[ES] el encriptador necesita un alphabeto numerico para encriptar el mensaje y necisita un array que contenga la posicion de las letras en el alphabeto,
        [ES] el mensaje es tratado como un array para una mejor gestion de los bucles, crypte es el mensaje encriptado a codigo numerico*/
        this.alphabet = []
        this.alphabetClave = []
        this.mensaje = {}

        this.cryptenum = ""
    }

    //[ES] transpilation es una funcion que transpila en mensaje a codigo numerico
    transpilation(bool) {
        //[ES]el alphabetClave debe ser un array
        if (this.alphabetClave === [] & typeof this.alphabetClave != "object") {
            this.alphabetClave = [
                " ",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "ñ",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z"
            ]
        }

        //[ES] recoremos el mesaje
        for (let index = 0; index < this.mensaje.length; index++) {

            //[ES] location es el valor de la letra del mensaje
            let location = this.alphabetClave.findIndex((leter) => leter === this.mensaje[index])

            //[ES] comprobamos si el simbolo es parte de alphabetClave
            if (this.alphabet[location] != undefined) {
                //le agregamos a cryptenum el valor de la letra en codigo numerico
                this.cryptenum += this.alphabet[location]
            } else this.cryptenum += "00" //[ES] no es parte de alphabetClave
        }

        //[ES] si se desea se imprime el mensaje transpilado a numerico
        if (bool === true) {
            console.log(this.cryptenum)
        }
    }
    info() {
        console.log("alphabet clave: " + this.alphabet);
    }
}

module.exports = {
    zecret
}