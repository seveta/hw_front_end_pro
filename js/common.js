const getThead = (arr) => (
    `<thead>
        <tr>
            <th>${arr.join(`</th><th>`)}</th>
        </tr>
    </thead>`
);
const getTbody = (arr) => {
    let tbodyTable = "";
    arr.forEach((item) => {
        tbodyTable += `
            <tr>
                <td>${item.title}</td>
                <td>${item.price}$</td>
                <td>${item.discountPercentage}%</td>
                <td>${item.rating}</td>
            </tr>
        `;
    });

    return `
    <tbody>
        ${tbodyTable}
    </tbody>`
};
const getTfoot = (products, promo) => (`
    <tfoot>
        <tr>
            <td colspan="4">Final Price: ${getPrice(products, promo)}$</td>
        </tr>
    </tfoot>`
)
const getPrice = (products, promo) => {
    let totalPrice = 0;

    for (const product of products) {
        let discountedPrice = product.price;

        if (promo) {
            const discountAmount = (product.price * product.discountPercentage / 100);
            discountedPrice -= discountAmount;
        }
        totalPrice += discountedPrice;
    }

    return +totalPrice.toFixed(2);
};
function sortProductsDescendingByRating(products) {
    return products.slice().sort((a, b) => b.rating - a.rating);
}

const productsTable = (products, promo, sortProducts) => {
    let copiedProducts = JSON.parse(JSON.stringify(products));

    if (sortProducts) {
        copiedProducts = sortProductsDescendingByRating(copiedProducts);
    }

    document.write(`
        <table>
            ${getThead(PRODUCT__TITLES)}
            ${getTbody(copiedProducts)}
            ${getTfoot(copiedProducts, promo)}
        </table>
    `)
}

const PRODUCT__TITLES = [`Product title`, `Product price`, `Product discount percentage`, `Product rating`];
const PROMO = `PATRON`;
const PRODUCTS = [
    {
        id: 1,
        title: "iPhone 9",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69
    },
    {
        id: 2,
        title: "iPhone X",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09
    },
    {
        id: 4,
        title: "OPPOF19",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3
    },
    {
        id: 5,
        title: "Huawei P30",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09
    },
    {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25
    }
];

let userPromo = prompt("Enter promo");
if (userPromo !== null) {
    userPromo = userPromo.replaceAll(` `, ``).toUpperCase();
}
let isPromoTrue = false;
if (PROMO === userPromo) {
    isPromoTrue = true;
}

const isSortTrue = confirm(`Sort by descending rating?`);

productsTable(PRODUCTS, isPromoTrue, isSortTrue);