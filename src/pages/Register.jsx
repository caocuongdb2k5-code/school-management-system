import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // chuyển dữ liệu sang trang info
    navigate("/info", {
      state: formData,
    });
  };

  return (
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
  );
}

export default Register;