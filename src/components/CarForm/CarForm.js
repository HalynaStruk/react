import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm(); //useForm()- за нас будує готовий обєкт

    const submit = (data) => {
        //(data) це готовий обєкт в якому зберігаються наші дані з input
        // де ключами обєкта є те що ми ввели у ...register('model')
        // {valueAsNumber: true} задопомогою цієї опції дані будуть записані, як число
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {/* знизу видно як вигдядає вкладеність, де price є обєктом всередині з ключами lower і higher */}
            {/*<div><label>Price: <input type="text" {...register('price.lower', {valueAsNumber: true})}/></label></div>*/}
            {/*<div><label>Price: <input type="text" {...register('price.higher', {valueAsNumber: true})}/></label></div>*/}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            <button>save</button>
        </form>
    );
};

export {CarForm};