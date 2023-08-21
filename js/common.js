const products = [
	['apple', 10],
	['banana', 8],
	['mango', 20],
	['grape', 18]
];
const SUMMER__COEF = 0.8;
const WINTER__COEF = 2;
function summerValue(value) {
	return value *  SUMMER__COEF;
}
function winterValue(value) {
	return value * WINTER__COEF;
}

function getPrice(products, seasonFunc) {
	const copiedProducts = JSON.parse(JSON.stringify(products));
	if (typeof seasonFunc === `function`) {
		for (let i = 0; i < copiedProducts.length; i++) {
			copiedProducts[i][1] = seasonFunc(copiedProducts[i][1]);
		}
	}
	let totalSum = 0;
	for (const product of copiedProducts) {
		totalSum += product[1];
	}
	return totalSum;
}
console.log(getPrice(products)); // Звичайна сума без знижок
console.log(getPrice(products, summerValue)); // Сума з літньою знижкою
console.log(getPrice(products, winterValue)); // Сума з зимовою знижкою