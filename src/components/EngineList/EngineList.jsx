import React, { useState } from 'react';
import './engine.css';

const Engine = () => {
// 엔진 목록 데이터
const engines = [
    'VOCALOID', 'CeVIO', 'Synthesizer V', 'UTAU', 'DiffSinger',
    'NEUTRINO', 'VoiSona', 'VOICEVOX', 'AceStudio', 'ainow',
    'VOX FACTORY', 'VOCALINA'
];

const [selectedEngines, setSelectedEngines] = useState([]);

const handleCheck = (engine) => {
    setSelectedEngines(prev => 
    prev.includes(engine) 
        ? prev.filter(item => item !== engine) 
        : [...prev, engine]
    );
};

return (
    <div className="engine-wrapper">
    <section className="engine-section">
        <h3 className="section-title">취급 엔진 (Handling Engines)</h3>
        <div className="engine-grid">
        {engines.map((engine) => (
            <label key={engine} className="engine-item">
            <input 
                type="checkbox" 
                checked={selectedEngines.includes(engine)}
                onChange={() => handleCheck(engine)}
            />
            <span className="engine-name">{engine}</span>
            </label>
        ))}
        <div className="engine-item">
            <span className="engine-name">기타 【 】</span>
        </div>
        </div>
    </section>

    <section className="engine-section">
        <h3 className="section-title">취급 음합엔 캐릭터</h3>
        <div className="character-grid">
        {/* 이미지의 검은 박스 형태를 유지한 그리드 */}
        {[...Array(12)].map((_, i) => (
            <div key={i} className="char-box">
            <div className="plus-icon">+</div>
            </div>
        ))}
        </div>
    </section>

    <section className="engine-section">
        <h3 className="section-title">FREE NOTE</h3>
        <textarea className="free-note" placeholder="자유롭게 입력해주세요."></textarea>
    </section>
    </div>
);
};

export default Engine;