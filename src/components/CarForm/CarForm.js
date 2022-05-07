import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, carForUpdate}) => {
    // const [formError, setFormError] = useState({});
    const {register, reset, handleSubmit, formState:{errors}, setValue} = useForm({resolver:joiResolver(carValidator),
        mode:"onTouched"}); //useForm()- за нас будує готовий обєкт
        // mode:"onTouched" якщо ми торкнемось до input зразу вибє помилка

    useEffect(()=>{
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model',model)
            setValue('price',price)
            setValue('year',year)
        }
    }, [carForUpdate])

    const submit = async (car) => {
        //(data) це готовий обєкт в якому зберігаються наші дані з input
        // де ключами обєкта є те що ми ввели у ...register('model')
        // {valueAsNumber: true} задопомогою цієї опції дані будуть записані, як число
        try { // за допомогою try - catch ми відловлюємо помилку при введенні в input
            const {data} = await carService.create(car);
            setNewCar(data)
            reset() // reset очищає форму
        } catch (e) {
            // setFormError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            {errors.year && <span>{errors.year.message}</span>}
            <button>save</button>
            {/* знизу видно як вигдядає вкладеність, де price є обєктом всередині з ключами lower і higher */}
            {/*<div><label>Price: <input type="text" {...register('price.lower', {valueAsNumber: true})}/></label></div>*/}
            {/*<div><label>Price: <input type="text" {...register('price.higher', {valueAsNumber: true})}/></label></div>*/}
        </form>
    );
};

export {CarForm};