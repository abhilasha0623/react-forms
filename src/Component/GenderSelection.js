import React,{useState} from "react";
import "../App.css";
import { useForm } from "react-hook-form"
const GenderSelection = () => {
    const { register, handleSubmit } = useForm();
    const [data,setData]= useState("")
    const onSubmit = (d) => {
        setData(JSON.stringify(d))
    }
    return (
        <form className="form-list-align" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="First Name" />
            <select {...register("category")} placeholder="Category">
                <option>Select...</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <textarea {...register("About you")} placeholder="About You"></textarea>
            {data}
            <input className ="formTwoSubmit" type="submit" value="Submit" />
        </form>
    )
}

export default GenderSelection;