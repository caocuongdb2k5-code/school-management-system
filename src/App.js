import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        note: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            {!submitted ? (
                <div>
                    <h2>Form Đăng Ký</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Tên"
                            onChange={handleChange}
                        />
                        <br />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <br />

                        <input
                            type="text"
                            name="phone"
                            placeholder="SĐT"
                            onChange={handleChange}
                        />
                        <br />

                        <input
                            type="text"
                            name="address"
                            placeholder="Địa chỉ"
                            onChange={handleChange}
                        />
                        <br />

                        <textarea
                            name="note"
                            placeholder="Ghi chú"
                            onChange={handleChange}
                        />
                        <br />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Thông Tin Đã Nhập</h2>

                    <p>Tên: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>SĐT: {formData.phone}</p>
                    <p>Địa chỉ: {formData.address}</p>
                    <p>Ghi chú: {formData.note}</p>
                </div>
            )}
        </div>
    );
}

export default App;