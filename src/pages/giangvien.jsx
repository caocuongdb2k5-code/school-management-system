import React from 'react';

function GiangVien() {
    const danhSachGiangVien = [
        { id: 1, ten: "Thầy Nguyễn Văn A", boMon: "Lập trình ReactJS", email: "anv@school.edu.vn" },
        { id: 2, ten: "Cô Trần Thị B", boMon: "Cơ sở dữ liệu", email: "btt@school.edu.vn" }
    ];

    return (
        <div className="section card">
            <h2>3. Thông Tin Giảng Viên</h2>
            <div className="grid-container">
                {danhSachGiangVien.map(gv => (
                    <div key={gv.id} className="sub-card alert-info">
                        <h4>{gv.ten}</h4>
                        <p><strong>Bộ môn phụ trách:</strong> {gv.boMon}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${gv.email}`}>{gv.email}</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GiangVien;