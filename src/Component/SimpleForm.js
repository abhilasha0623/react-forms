import React from "react";
import { useForm } from "react-hook-form";


const SimpleForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (d) => {
        alert(JSON.stringify(d))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className ="form-container" style={{ display: "grid" }}>
            <label>
                First Name:
                <input {...register("firstName")} />
            </label>
            <label>
                Last Name:
                <input  {...register("lastName")} />
            </label>
            <input type="submit" value="Click Me!" className="btn-Container" />
        </form>
    );
}
export default SimpleForm;