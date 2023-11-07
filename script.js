var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

CARS = [{
    id: 1,
    brand: "Audi",
    models: [{
        id: 1,
        name: "A1",
        collection: [{
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999
        }, {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999
        }]
    }, {
        id: 2,
        name: "Q5",
        collection: [{
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }, {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }]
    }, {
        id: 3,
        name: "TT",
        collection: [{
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }, {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }]
    }]
}, {
    id: 2,
    brand: "BMW",
    models: [{
        id: 1,
        name: "8 series",
        collection: [{
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998
        }, {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998
        }]
    }, {
        id: 2,
        name: "X6",
        collection: [{
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395
        }, {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993
        }]
    }]
}];

var renderBrands = function renderBrands(cars) {
    return cars.map(function (brand, brandIndex) {
        return React.createElement(
            React.Fragment,
            { key: brandIndex },
            React.createElement(
                "tr",
                { className: "row__brand" },
                React.createElement(
                    "td",
                    { colSpan: "2" },
                    brand.brand
                )
            ),
            renderModels(brand.models)
        );
    });
};

var renderModels = function renderModels(models) {
    return models.map(function (model, modelIndex) {
        return model.collection.map(function (car, carIndex) {
            return React.createElement(
                "tr",
                { key: model.name + "_" + carIndex },
                carIndex === 0 && React.createElement(
                    "td",
                    { className: "cell__model", rowSpan: "2" },
                    model.name
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Version: ",
                            car.version
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Year: ",
                            car.year
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Horsepower: ",
                            car.horsepower
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Engine: ",
                            car.engine
                        )
                    )
                )
            );
        });
    });
};

root.render(React.createElement(
    React.Fragment,
    null,
    React.createElement(
        "table",
        null,
        React.createElement(
            "tbody",
            null,
            renderBrands(CARS)
        )
    )
));