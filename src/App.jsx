import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Engine from "./components/EngineList/EngineList.jsx";
import VoiceBank from "./components/VoiceBank/VoiceBank.jsx";
import Archive from "./components/Archive/Archive.jsx";
import './App.css';

function App() {
  return (
    <div className="main-layout">
      {/* 왼쪽: 세로로 긴 사이드바 */}
      <aside className="sidebar-area">
        <Sidebar />
      </aside>

      {/* 오른쪽: 엔진, 보이스뱅크, 아카이브 순차 배치 */}
      <main className="content-area">
        <section className="content-section">
          <Engine />
        </section>
        
        <section className="content-section">
          <VoiceBank />
        </section>
        
        <section className="content-section">
          <Archive />
        </section>
      </main>
    </div>
  );
}

export default App;