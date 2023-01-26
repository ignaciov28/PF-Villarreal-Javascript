let carritoDeCompras = []

const contenedorProductos = document.querySelector(`.destacados`)

const productosAHtml = ( array )  => {
    const filtrarArray = array.filter(product => product.destacado === true)
    const arrayMin = filtrarArray.reduce ( (acumuladora, elemento) => {
        return acumuladora + `
        <div class="productos" id="producto-${elemento.id}">
    <div class="productosimg">
        <img src=${elemento.img[0]} alt=${elemento.producto}>
    </div>
    <h2>
        ${elemento.producto}
    </h2>
    <h3>
        ${elemento.precio}
    </h3>
    <div class="botoncarrito-contenedor">
        <button class="botoncarrito" id="button-${elemento.id}">Añadir al carrito</button>
    </div>
</div>
        `
    }, "")
    return arrayMin
}

contenedorProductos.innerHTML = productosAHtml(productos)

const subirAlLs = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const subirValor = ( array, value ) => {
    array.push(value)
}

const buscarProducto = ( producto, array ) => {
    return array.find( objeto => {
        return objeto.id === Number(producto)
    })
}

const obtenerDeLs =  (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}


const alCarrito = () => {
    const botonesProductos = document.querySelectorAll(".botoncarrito")
    botonesProductos.forEach( boton => {
        boton.onclick = () => {
            const extraerId = boton.id.slice(7)
            const producto = buscarProducto(extraerId, productos)
            subirValor(carritoDeCompras, producto)
            subirAlLs("carrito", carritoDeCompras)
        }
    })
}

alCarrito()


const carritoActualizado = obtenerDeLs("carrito") || []
carritoDeCompras = carritoActualizado