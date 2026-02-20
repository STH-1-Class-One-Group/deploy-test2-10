import React, { useState } from 'react';
import './VoiceBank.css';

const VoiceBank = () => {
const [currentPage, setCurrentPage] = useState(1);
// 전체 보이스뱅크 데이터 (예시로 15개 생성)
const [voiceBanks, setVoiceBanks] = useState(Array(15).fill(null));

const itemsPerPage = 10;
const totalPages = Math.ceil(voiceBanks.length / itemsPerPage);

// 현재 페이지에 보여줄 데이터 슬라이싱
const startIndex = (currentPage - 1) * itemsPerPage;
const currentItems = voiceBanks.slice(startIndex, startIndex + itemsPerPage);

// 이미지 업로드 핸들러
const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
    const imageUrl = URL.createObjectURL(file);
    const newBanks = [...voiceBanks];
    newBanks[startIndex + index] = imageUrl;
    setVoiceBanks(newBanks);
    }
};

return (
    <div className="voicebank-container">
    <div className="voicebank-header">
        <h2 className="title">등록된 보이스뱅크 (VoiceBanks)</h2>
        <span className="page-info">{currentPage} / {totalPages} Page</span>
    </div>

    <div className="voicebank-grid">
        {currentItems.map((img, index) => (
        <div key={index} className="thumbnail-slot">
            {img ? (
            <img src={img} alt={`voicebank-${index}`} className="preview-img" />
            ) : (
            <label className="upload-label">
                <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => handleImageUpload(index, e)} 
                hidden 
                />
                <span className="plus-icon">+</span>
            </label>
            )}
        </div>
        ))}
        
        {/* 10개가 안 채워졌을 경우 빈 칸 유지 */}
        {currentItems.length < itemsPerPage && 
        Array(itemsPerPage - currentItems.length).fill(null).map((_, i) => (
            <div key={`empty-${i}`} className="thumbnail-slot empty"></div>
        ))
        }
    </div>

    <div className="pagination-controls">
        <button 
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="nav-btn"
        >
        ◀ Previous
        </button>
        <button 
        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="nav-btn"
        >
        Next ▶
        </button>
    </div>
    </div>
);
};

export default VoiceBank;