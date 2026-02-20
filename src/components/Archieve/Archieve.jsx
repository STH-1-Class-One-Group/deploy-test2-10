import React, { useState } from 'react';
import './archive.css';

const Archive = () => {
const [activeCategory, setActiveCategory] = useState('전체');

const categories = ['전체', '자작곡 (Original)', '커버곡 (Cover)', '조교 (Tuning)', '기타'];

return (
    <div className="archive-container">
    <div className="archive-header">
        <h2 className="archive-title">My Archive</h2>
        <p className="archive-subtitle">작업한 창작물과 커버 곡을 관리하는 공간입니다.</p>
    </div>

    {/* 카테고리 네비게이션 */}
    <nav className="archive-category-nav">
        {categories.map((category) => (
        <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
        >
            {category}
        </button>
        ))}
    </nav>

    {/* 콘텐츠 출력 컨테이너 (이후 리스트나 카드가 들어갈 자리) */}
    <div className="archive-content-area">
        <div className="placeholder-text">
        {activeCategory} 카테고리의 콘텐츠가 여기에 표시됩니다.
        </div>
    </div>
    </div>
);
};

export default Archive;