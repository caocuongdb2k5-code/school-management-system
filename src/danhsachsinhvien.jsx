import React from 'react';

function DanhSachSinhVien() {
    // Tự động tạo mảng gồm 20 sinh viên với đầy đủ thuộc tính
    const danhSachSV = Array.from({ length: 20 }, (_, index) => {
        const id = index + 1;
        // Tạo ký tự A, B, C... dựa theo số thứ tự
        const kyTu = String.fromCharCode(65 + (index % 26));

        return {
            stt: id,
            ten: `Tran Van ${kyTu}`,
            tuoi: Math.floor(Math.random() * (25 - 18 + 1)) + 18, // Tuổi ngẫu nhiên từ 18-25
            diaChi: id % 2 === 0 ? "Ha Noi" : "Ho Chi Minh",
            email: `${kyTu.toLowerCase()}@gmail.com`,
            sdt: `09876543${id < 10 ? '0' + id : id}`
        };
    });

    return (
        <div className="management-container">
            {/* Tiêu đề màu xanh dương giống ảnh mẫu */}
            <div className="management-header">
                Management Products
            </div>

            {/* Khung chứa bảng */}
            <div className="table-responsive">
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ten</th>
                            <th>Tuoi</th>
                            <th>Dia Chi</th>
                            <th>Email</th>
                            <th>SĐT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {danhSachSV.map((sv) => (
                            <tr key={sv.stt}>
                                <td>{sv.stt}</td>
                                <td>{sv.ten}</td>
                                <td>{sv.tuoi}</td>
                                <td>{sv.diaChi}</td>
                                <td>{sv.email}</td>
                                <td>{sv.sdt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DanhSachSinhVien;