import React, { useState } from 'react';
import './EngineList.css';

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

    </div>
);
};

export default Engine;