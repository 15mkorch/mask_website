import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Form() {

    let [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: '',
        email: "",
        zipCode: "",
        purchasingMask: false,
        sewing: false,
        donatingMaterial: false,
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type == 'checkbox') {
            setForm({ ...form, [name]: checked })
        } else {
            setForm({ ...form, [name]: value })
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/forms', form)
    }

    return (
        <div>
            <main className="form">
                <form>
                    <input
                        className="input"
                        name="firstName"
                        value={form.firstName}
                        onChange={(e) => handleChange(e)}
                        placeholder="First Name"
                    />
                    <br />

                    <input
                        className="input"
                        name="lastName"
                        value={form.lastName}
                        onChange={(e) => handleChange(e)}
                        placeholder="Last Name"
                    />
                    <br />

                    <input
                        className="input"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={(e) => handleChange(e)}
                        placeholder="phone Number"
                    />
                    <br />

                    <input
                        className="input"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="email"
                    />
                    <br />

                    <input
                        className="input"
                        name="zipCode"
                        value={form.zipCode}
                        onChange={(e) => handleChange(e)}
                        placeholder="zip code"
                    />
                    <br />

                    <label className="check">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="purchasingMask"
                            onChange={(e) => handleChange(e)}
                            checked={form.purchasingMask}
                        /><h4>Purchase a mask?</h4>
                    </label>
                    <br />

                    <label className="check">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="sewing"
                            onChange={(e) => handleChange(e)}
                            checked={form.sewing}
                        /><h4>sewing?</h4>
                    </label>
                    <br />

                    <label className="check">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="donatingMaterial"
                            onChange={(e) => handleChange(e)}
                            checked={form.donatingMaterial}
                        /> <h4>Donating Material?</h4>
                    </label>
                    <br />

                    <button className="button" onClick={(e) => submitForm(e)}>Submit</button>
                </form>
                <hr />
            </main>
            <style jsx>{`
                .form
                {
                width: 100%;
                length: 100%;
                display: inline-block;
                text-align: center;
                font-family: "Poppins";
                }
                .button
                 {
                    background-color: #9cd6d6;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                }
                .input {
                    width: 30%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    box-sizing: border-box;
                }
                .checkbox {
                    position: relative;
                    height: 25px;
                    width: 25px;
                    background-color: #eee;
                    
                }
                .check {
                    font-family: "Poppins";
                    text-align: center;
                    display: inline-block;
                }
                h4 {
                    font-size: 20px;
                    font-family: poppins;
                }
            `}</style>
        </div>

    )
}