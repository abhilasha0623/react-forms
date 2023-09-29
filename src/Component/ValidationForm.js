import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
const ValidationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) =>{
        alert(JSON.stringify(data));
    }
        return (<form onSubmit ={handleSubmit(onSubmit)} className="form-list-format">
        <label>
            First Name
        </label>
        <input {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder="First Name" />

        {errors?.firstName?.type === "required" && <p className="error-msg">This field is required</p>}
        {errors?.firstName?.type === "pattern" && <p className="error-msg">Please enter only Alphabets</p>}
        <label>
            Last Name
        </label>
        <input {...register("lastName", { maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder="Last Name" />

        {errors?.lastName?.type === "pattern" && <p className="error-msg">Please enter only Alphabets</p>}
        <label>Age</label>
        <input {...register("age", { required: true, min: 18, max: 99 })} placeholder="Age" />

        {errors?.age?.type === "register" && <p className="error-msg">This field is required</p>}
        {errors?.age && <p className="error-msg">You Must be older then 18 and younger then 99 years old</p>}
        <label>E-Mail</label>
        <input {...register("email" , {required:true,pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})} placeholder="E-mail" />
        {errors?.email?.type === "required" && <p className="error-msg">This field is required</p>}
        {errors?.email?.type === "pattern" && <p className="error-msg">example@xyz.com</p>}
        <input type="submit" value="SUBMIT" />
    </form>)
}

export default ValidationForm;