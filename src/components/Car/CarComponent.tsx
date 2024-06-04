import {FC} from "react";
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";

type IProps = {
    car: ICarWithAuthModel;
}

const CarComponent: FC<IProps> = ({car}) => {
    return (
        <div>
            {car.id} - {car.brand} - {car.price}$
        </div>
    );
};

export default CarComponent;