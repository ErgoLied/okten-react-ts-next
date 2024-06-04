import {FC} from "react";
import {IPageModel} from "../../models/IPageModel";
import {useSearchParams} from "react-router-dom";
import {set} from "react-hook-form";

interface IProps {
    prev: IPageModel | null;
    next: IPageModel | null;
}

const PaginationComponent: FC<IProps> = ({prev, next}) => {
    const [query, setQuery] = useSearchParams();

    const changePage=(page:string)=> {
        switch (page){
            case 'prev':
                setQuery({...prev});
                break;
            case 'next':
                setQuery({...next});
                break;
        }
    }

    return (
        <div>
            <button onClick={()=>changePage('prev')} disabled={!prev}>previous</button>
            <button onClick={()=>changePage('next')} disabled={!next}>next</button>
        </div>
    );
};

export default PaginationComponent;