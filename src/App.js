import React, { useState } from 'react'
const RegistrationForm = () => {
    const [userData, setUserData] = useState({
        fullName: '',
        age: '',
        email: '',
        phoneNumber: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    return (
        <div>
            <h2>Регистрация пользователя</h2>
            <form>
                <div>
                    <label>ФИО:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={userData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Возраст:</label>
                    <input
                        type="text"
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Номер телефона:</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <div>
                <h3>Введенные данные:</h3>
                <p>ФИО: {userData.fullName}</p>
                <p>Возраст: {userData.age}</p>
                <p>Email: {userData.email}</p>
                <p>Номер телефона: {userData.phoneNumber}</p>
            </div>
        </div>
    )
}
export default RegistrationForm
