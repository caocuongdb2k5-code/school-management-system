import { useLocation } from "react-router-dom";

function Info() {
    const location = useLocation();

    const data = location.state;

    return (
        <div>
            <h2>Thông Tin Đã Nhập</h2>

            <p>Tên: {data?.name}</p>
            <p>Email: {data?.email}</p>
            <p>SĐT: {data?.phone}</p>
            <p>Địa chỉ: {data?.address}</p>
            <p>Ghi chú: {data?.note}</p>
        </div>
    );
}

export default Info; 