import React from 'react';

function NganhHoc() {
    const danhSachNganh = [
        { id: 1, ten: "Công nghệ thông tin", thoiGian: "4 năm", moTa: "Đào tạo lập trình viên, kỹ sư phần mềm, chuyên gia mạng." },
        { id: 2, ten: "Thiết kế đồ họa", thoiGian: "3.5 năm", moTa: "Sáng tạo giao diện, thiết kế UI/UX, sản xuất hình ảnh truyền thông." },
        { id: 3, ten: "Quản trị kinh doanh", thoiGian: "4 năm", moTa: "Kỹ năng quản lý, khởi nghiệp và vận hành doanh nghiệp thời đại số." }
    ];

    return (
        <div className="section card">
            <h2>2. Danh Sách Ngành Học</h2>
            <div className="grid-container">
                {danhSachNganh.map(nganh => (
                    <div key={nganh.id} className="sub-card">
                        <h4>{nganh.ten}</h4>
                        <p><strong>Thời gian đào tạo:</strong> {nganh.thoiGian}</p>
                        <p>{nganh.moTa}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NganhHoc;