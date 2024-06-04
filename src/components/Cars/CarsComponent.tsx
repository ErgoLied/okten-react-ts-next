import {FC} from "react";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";

type IProps = {
    cars: ICarPaginatedModel;
}
const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.items.map(car => <div key={car.id}>{car.id} - {car.brand} - {car.price}$</div>)}
        </div>
    );
};

export default CarsComponent;