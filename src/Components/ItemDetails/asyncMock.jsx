
const products = [
    {
        id: '1',
        isNew: true,
        nombre: 'Fernet Branca',
        price: 70, 
        stock: 20,
        img: 'https://images.unsplash.com/photo-1623244646753-e8bb6b9deea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVybmV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        category: "bebidas",
        description: 'Fernet Branca',
        rating: 4.8,
        numReviews: 43,
    },
    {
        id: '2',
        isNew: true,
        nombre: 'Remera Argentina',
        price: 150, 
        stock: 10,
        img: 'https://images.unsplash.com/photo-1671016233693-53162078ca1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVtZXJhJTIwYXJnZW50aW5hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        category: "ropa",
        description: 'Remera 3 estrellas campeon del mundo',
        rating: 4.9,
        numReviews: 100,
    },
    {
        id: '3',
        nombre: 'Alfajores',
        isNew: true,
        price: 5, 
        stock: 100,
        img: 'https://images.unsplash.com/photo-1517400847543-fd27a32c8d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxmYWpvcmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        category: "dulces",
        description: 'Alfajores de dulce de leche',
        rating: 4.5,
        numReviews: 100,
    },
    {
        id: '4',
        nombre: 'Fernet 1880',
        isNew: true,
        price: 50, 
        stock: 25,
        img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        category: "bebidas",
        description: 'Fernet 1880',
        rating: 3.9,
        numReviews: 5,
    },
    {
        id: '5',
        nombre: 'Remera Violeta Argentina',
        isNew: true,
        price: 120, 
        stock: 25,
        img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        category: "ropa",
        description: 'Remera violeta Argentina',
        rating: 4.0,
        numReviews: 10,
    },
    {
        id: '6',
        nombre: 'Dulce de leche',
        isNew: true,
        price: 10, 
        stock: 25,
        img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        category: "dulces",
        description: 'Dulce de leche colonial',
        rating: 4.9,
        numReviews: 24,
    },
    {
        id: '7',
        nombre: 'vino',
        isNew: true,
        price: 15, 
        stock: 25,
        img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        category: "bebidas",
        description: 'Vino malbec de Mendoza',
        rating: 4.7,
        numReviews: 50,
    },
    {
        id: '8',
        nombre: 'Remera Boca juniors',
        isNew: true,
        price: 75, 
        stock: 25,
        img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        category: "ropa",
        description: 'Remera titular boca Juniors',
        rating: 4.2,
        numReviews: 34,
    }
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductsbyId = (productId) =>{
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id == productId))
        }, 500)
    } )
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}