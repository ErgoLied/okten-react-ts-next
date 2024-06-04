import {useEffect, useState} from "react";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";

import {carService} from "../services/api.service";
import CarsComponent from "../components/Cars/CarsComponent";
import PaginationComponent from "../components/Pagination/PaginationComponent";

const CarsPage = () => {
    const [query] = useSearchParams();

    const [carsPaginatedObj, setCarsPaginatedObj] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });

    useEffect(() => {
        carService.getAllCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarsPaginatedObj(value);
            }
        })
    }, [query]);

    return (
        <div>
            <CarsComponent cars={carsPaginatedObj.items}/>
            <PaginationComponent prev={carsPaginatedObj.prev} next={carsPaginatedObj.next}/>
        </div>
    );
};

export default CarsPage;