import Product from "./Product/product.js";
import ProductManager from "./ProductManager/ProductManager.js";

const producto1 = new Product("nike", "Jordan", 210.000, "", "NJ001", true)
const producto2 = new Product("adidas forum low", "blancas y negras", 150.000, "", "AFL001", true)
const producto3 = new Product("adidas NMD_R1", "negras", 72.000, "", "ANR001", true)
const producto4 = new Product("nike air force", "Blancas", 65.000, "", "NAF001", true)

const productManager = new ProductManager();

// Agregar productos
productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)
productManager.addProduct(producto4)

// Obtener productos
productManager.getProducts()
//Obtener by ID
productManager.getProductById(3)
productManager.getProductById(1)

// Eliminar productos
// productManager.clearProducts()
