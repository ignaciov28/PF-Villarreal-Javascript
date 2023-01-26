
const obtenerDeLs =  (clave) => {
    return JSON.parse(localStorage.getItem("carrito"))
}

let carritoDeCompras = obtenerDeLs("carrito")


const productosAHtml = ( array )  => {
    const arrayMin = array.reduce ( (acumuladora, elemento) => {
        return acumuladora + `
        <div class="productos-carrito" id="producto-${elemento.id}">
            <div class="productosimg-carrito">
                <img src=${elemento.img[0]} alt=${elemento.producto}>
            </div>
            <h2>
                ${elemento.producto}
            </h2>
            <h3>
                ${elemento.precio}
            </h3>
            <button class="botoncarrito" id="button-${elemento.id}">Eliminar del carrito</button>
        </div>
        `
    }, "")
    return arrayMin
}

const containerCarrito = document.querySelector(".containercarrito")

containerCarrito.innerHTML = productosAHtml(obtenerDeLs("carrito"))


const modificarCarrito = () => {
    const productoCarrito = document.querySelectorAll(".productos-carrito")
    for (let i = 0; i < productoCarrito.length; i++) {
        productoCarrito[i].onclick = () => {
            const disminuir = productoCarrito[i].id.slice(9)
            const filtroCarrito = carritoDeCompras.filter( (filtrado, index) => {
                return filtrado.id != disminuir
            })
            console.log(filtroCarrito)
            carritoDeCompras = filtroCarrito
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
            containerCarrito.innerHTML = productosAHtml(carritoDeCompras)
            modificarCarrito()
        }
    }
}

modificarCarrito()

