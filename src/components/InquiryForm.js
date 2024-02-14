import React from "react";
import { useForm } from "react-hook-form";
import './form.css'

export default function InquiryForm() {

    const { register, handleSubmit, formState } = useForm();

    const submitForm = (data) => { console.log(data); }

    return (
        <>

            <div className='container'>
                <div className='row '>
                    <div className='col-lg-3'>

                    </div>
                    <div className='col-lg-6'>
                        <div className="box">

                            <div className="form" >


                                <form onSubmit={handleSubmit(submitForm)}>
                                    <h1 style={{ textAlign: "center" }}><span className="text-warning">Q</span>uick In<span className="text-warning">quiry</span></h1> <br />
                                    {/* <label htmlFor="username">Name:</label> */}
                                    <input type="text" placeholder="Full Name" {...register('name', { required: true, minLength: 3, maxLength: 10 })} /> <br /><br />
                                    {formState.errors && formState.errors.name && formState.errors.name.type === 'required' && <span>Name is required</span>}
                                    {formState.errors && formState.errors.name && formState.errors.name.type === 'minLength' && <span>Min length for name is 3</span>}
                                    {formState.errors && formState.errors.name && formState.errors.name.type === 'maxLength' && <span>Max length for name is 10</span>}

                                    {/* <label htmlFor="useremail">Email:</label> */}
                                    <input type="text" id="useremail" {...register('email', { required: true, minLength: 3, maxLength: 25 })} placeholder="Email ID" /> <br /><br />
                                    {formState.errors && formState.errors.email && formState.errors.email.type === 'required' && <span>Email is required</span>}
                                    {formState.errors && formState.errors.email && formState.errors.email.type === 'minLength' && <span>Min length for email is 3</span>}
                                    {formState.errors && formState.errors.email && formState.errors.email.type === 'maxLength' && <span>Max length for email is 25</span>}



                                    <input type="textarea" placeholder="    Drop Us a small description" {...register('msg')} /> <br /><br />

                                    <p style={{ color: "gray", textAlign: "center" }}>It will help us curate the best tours for you.</p>

                                    <button type="submit" >Submit</button>


                                </form>
                            </div>

                        </div>;



                    </div>
                </div>
            </div>

        </>
    )

}







