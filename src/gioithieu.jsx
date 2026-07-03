import React from 'react';

function GioiThieu() {
    return (
        <div className="section card">
            <h2>1. Giới Thiệu Trường Học</h2>
            <img
                src="https://via.placeholder.com/600x250"
                alt="Logo Trường"
                className="school-img"
            />
            <h3>Trường Đại học Công nghệ XYZ</h3>
            <p><strong>Địa chỉ:</strong> 123 Đường Đại Cồ Việt, Quận Hai Bà Trưng, Hà Nội</p>
            <p><strong>Mô tả:</strong> Trường Đại học XYZ là ngôi trường đi đầu trong lĩnh vực đào tạo công nghệ thông tin và truyền thông, với cơ sở vật chất hiện đại và đội ngũ giảng viên giàu kinh nghiệm.</p>
        </div>
    );
}

export default GioiThieu;