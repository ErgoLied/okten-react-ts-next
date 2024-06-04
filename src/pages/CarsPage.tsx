import {useEffect, useState} from "react";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/api.service";
import CarsComponent from "../components/Cars/CarsComponent";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarPaginatedModel>();

    useEffect(() => {
        carService.getAllCars().then(value => {
            if (value) {
                setCars(value);
            }
        })
    }, []);

    console.log(cars);

    return (
        <div>
            {cars && <CarsComponent cars={cars}/>}
        </div>
    );
};

export default CarsPage;