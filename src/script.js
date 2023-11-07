const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

CARS = [
    {
        id: 1,
        brand: "Audi",
        models: [
            {
                id: 1,
                name: "A1",
                collection: [
                    {
                        id: 1,
                        version: "Sportback",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    },
                    {
                        id: 2,
                        version: "Citycarver",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    }
                ]
            },
            {
                id: 2,
                name: "Q5",
                collection: [
                    {
                        id: 1,
                        version: "FY 2021",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Sportback",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    }
                ]
            },
            {
                id: 3,
                name: "TT",
                collection: [
                    {
                        id: 1,
                        version: "Coupe",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Roadster",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        brand: "BMW",
        models: [
            {
                id: 1,
                name: "8 series",
                collection: [
                    {
                        id: 1,
                        version: "G1X LCI",
                        year: 2022,
                        horsepower: 333,
                        engine: 2998
                    },
                    {
                        id: 2,
                        version: "G1X",
                        year: 2019,
                        horsepower: 340,
                        engine: 2998
                    }
                ]
            },
            {
                id: 2,
                name: "X6",
                collection: [
                    {
                        id: 1,
                        version: "G06 LCI",
                        year: 2023,
                        horsepower: 530,
                        engine: 4395
                    },
                    {
                        id: 2,
                        version: "G06",
                        year: 2020,
                        horsepower: 286,
                        engine: 2993
                    }
                ]
            }
        ]
    },
];

const renderBrands = (cars) => (
    cars.map((brand, brandIndex) => (
        <React.Fragment key={brandIndex}>
            <tr className="row__brand">
                <td colSpan="2">{brand.brand}</td>
            </tr>
            {renderModels(brand.models)}
        </React.Fragment>
    ))
);

const renderModels = (models) => (
    models.map((model, modelIndex) => (
        model.collection.map((car, carIndex) => (
            <tr key={`${model.name}_${carIndex}`}>
                {carIndex === 0 && (
                    <td className="cell__model" rowSpan="2">
                        {model.name}
                    </td>
                )}
                <td>
                    <ul>
                        <li>Version: {car.version}</li>
                        <li>Year: {car.year}</li>
                        <li>Horsepower: {car.horsepower}</li>
                        <li>Engine: {car.engine}</li>
                    </ul>
                </td>
            </tr>
        ))
    ))
);

root.render(<React.Fragment>
    <table>
        <tbody>
            {renderBrands(CARS)}
        </tbody>
    </table>
</React.Fragment>);