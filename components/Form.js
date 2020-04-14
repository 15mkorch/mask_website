import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Form() {
    useEffect(() => {
        axios.post('/api/form', form)
    })

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
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
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
                        />Purchase a mask?
                    </label>
                    <br />

                    <label className="check">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="sewing"
                            onChange={(e) => handleChange(e)}
                            checked={form.sewing}
                        />sewing?
                    </label>
                    <br />

                    <label className="check">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="donatingMaterial"
                            onChange={(e) => handleChange(e)}
                            checked={form.donatingMaterial}
                        /> Donating Material?
                    </label>
                    <br />

                    <button className="button">Submit</button>
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
                    font-family: "Poppins"
                    float: left;
                }
            `}</style>
        </div>

    )
}