    import React, { useState } from 'react';
    import './Sidebar.css';

    const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { name: '대시보드', icon: '📊', path: '/' },
        { name: '사용자 관리', icon: '👤', path: '/users' },
        { name: '설정', icon: '⚙️', path: '/settings' },
    ];

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
            {isOpen && <h2 className="logo">My App</h2>}
            <button className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? '◀' : '▶'}
            </button>
        </div>

        <ul className="sidebar-menu">
            {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
                <span className="icon">{item.icon}</span>
                {isOpen && <span className="text">{item.name}</span>}
            </li>
            ))}
        </ul>

        <div className="sidebar-footer">
            {isOpen && <p>© 2026 My Project</p>}
        </div>
        </div>
    );
    };

    export default Sidebar;