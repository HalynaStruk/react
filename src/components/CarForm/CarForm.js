import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar}) => {
    // const {formError,setFormError} = useState({});
    const {register, reset, handleSubmit, formState:{errors}} = useForm({resolver:joiResolver(carValidator), mode:"onTouched"});

    const submit = async (car) => {
        try {
            const {data} = await carService.create(car);
            setNewCar(data);
            reset(); // очищає форму
        } catch (e) {
            // setFormError(e.response.data)
        }

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price:<input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year:<input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <button>save</button>
        </form>
    );
};

export {CarForm};