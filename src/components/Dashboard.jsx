// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('introduction');
  const [activeSection, setActiveSection] = useState('overview');
  const [activeCountry, setActiveCountry] = useState(null);
  const [activePerspective, setActivePerspective] = useState('payer');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({
    mear: false,
    countries: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const mainNavItems = [
    { id: 'introduction', icon: 'fas fa-play-circle', label: 'INTRODUCTION' },
    { id: 'objectives', icon: 'fas fa-bullseye', label: 'OBJECTIVES' },
    { id: 'platform', icon: 'fas fa-rocket', label: 'PLATFORM' },
    { 
      id: 'mear', 
      icon: 'fas fa-globe-americas', 
      label: 'MEAR',
      hasSubmenu: true,
      submenu: [
        { id: 'mear-payer', icon: 'fas fa-user-tie', label: 'Payer Perspective' },
        { id: 'mear-market', icon: 'fas fa-chart-line', label: 'Market Access' },
        { 
          id: 'mear-countries', 
          icon: 'fas fa-flag', 
          label: 'Per Country',
          hasSubmenu: true,
          submenu: [
            { id: 'egypt', icon: 'fas fa-map-marker-alt', label: 'Egypt' },
            { id: 'saudi-arabia', icon: 'fas fa-map-marker-alt', label: 'Saudi Arabia' },
            { id: 'uae', icon: 'fas fa-map-marker-alt', label: 'UAE' },
            { id: 'south-africa', icon: 'fas fa-map-marker-alt', label: 'South Africa' },
            { id: 'morocco', icon: 'fas fa-map-marker-alt', label: 'Morocco' },
            { id: 'russia', icon: 'fas fa-map-marker-alt', label: 'Russia' }
          ]
        }
      ]
    },
    { id: 'methodology', icon: 'fas fa-cogs', label: 'METHODOLOGY' }
  ];

  const countries = [
    { id: 'egypt', name: 'Egypt', flag: '🇪🇬' },
    { id: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦' },
    { id: 'uae', name: 'UAE', flag: '🇦🇪' },
    { id: 'south-africa', name: 'South Africa', flag: '🇿🇦' },
    { id: 'morocco', name: 'Morocco', flag: '🇲🇦' },
    { id: 'russia', name: 'Russia', flag: '🇷🇺' }
  ];

  const platformSections = [
    { id: 'overview', label: 'Platform Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'architecture', label: 'System Architecture' }
  ];

  const analysisModules = [
    { id: 'value-proposition', label: 'Value Proposition & Story', icon: 'fas fa-bullseye' },
    { id: 'challenge', label: 'The Challenge: Five Highest-Priority System Gaps', icon: 'fas fa-exclamation-triangle' },
    { id: 'gaps-heatmaps', label: 'Gaps Heatmaps', icon: 'fas fa-fire' },
    { id: 'recommendations', label: 'Recommendations', icon: 'fas fa-lightbulb' },
    { id: 'hta-maturity', label: 'HTA Maturity Snapshot', icon: 'fas fa-camera' },
    { id: 'cross-domain', label: 'HTA Cross-Domain Synergy', icon: 'fas fa-sitemap' },
    { id: 'action-plan', label: 'Action Plan & KPIs', icon: 'fas fa-tasks' }
  ];

  const heatmapComponents = Array.from({ length: 12 }, (_, i) => `C${i + 1}`);

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const handleNavClick = (navItem, hasSubmenu = false) => {
    if (hasSubmenu) {
      toggleMenu(navItem.id);
    } else {
      setActiveNav(navItem.id);
      setActiveSection('overview');
      setActiveCountry(null);
    }
  };

  const handleSubNavClick = (subItem, parentId) => {
    if (parentId === 'mear-countries') {
      setActiveNav('country-detail');
      setActiveCountry(subItem.id);
    } else {
      setActiveNav(subItem.id);
    }
    setActiveSection('overview');
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <div className="loading-icon">
              <i className="fas fa-chart-network"></i>
            </div>
            <div className="loading-text">
              <h1>HEOR CONNECT</h1>
              <div className="loading-tagline">FROM EVIDENCE TO ACCESS</div>
            </div>
          </div>
          <div className="loading-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="loading-message">Initializing Platform Structure...</div>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeNav) {
      case 'introduction':
        return renderIntroduction();
      case 'objectives':
        return renderObjectives();
      case 'platform':
        return renderPlatform();
      case 'mear-payer':
        return renderPayerPerspective();
      case 'mear-market':
        return renderMarketAccess();
      case 'country-detail':
        return renderCountryDetail();
      case 'methodology':
        return renderMethodology();
      default:
        return renderIntroduction();
    }
  };

  const renderIntroduction = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>INTRODUCTION</h2>
        <p>Welcome to HEOR Connect Platform - From Evidence to Access</p>
      </div>
      
      <div className="content-card">
        <div className="card-glow"></div>
        <h3>HEOR Connect Platform Overview</h3>
        <div className="content-section">
          <p>The HEOR Connect Platform is a comprehensive solution designed to advance Health Economics and Outcomes Research (HEOR) and Health Technology Assessment (HTA) maturity across the MEAR region.</p>
          
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-chart-line"></i>
              <h4>Evidence Generation</h4>
              <p>Advanced analytics for healthcare evidence generation and assessment</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-balance-scale"></i>
              <h4>HTA Framework</h4>
              <p>Comprehensive Health Technology Assessment methodologies</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-globe"></i>
              <h4>Regional Focus</h4>
              <p>Specialized analysis for MEAR region countries</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-handshake"></i>
              <h4>Stakeholder Engagement</h4>
              <p>Tools for payer and market access perspectives</p>
            </div>
          </div>
        </div>
        
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input 
            type="text" 
            placeholder="Search Here..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const renderObjectives = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>OBJECTIVES</h2>
        <p>Strategic Goals and Mission of HEOR Connect Platform</p>
      </div>
      
      <div className="objectives-grid">
        <div className="objective-card">
          <div className="objective-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3>Primary Objective</h3>
          <p>Advance HEOR & HTA maturity across the MEAR region through comprehensive evidence generation and strategic implementation frameworks.</p>
        </div>
        
        <div className="objective-card">
          <div className="objective-icon">
            <i className="fas fa-chart-network"></i>
          </div>
          <h3>Evidence Integration</h3>
          <p>Create seamless integration between clinical evidence, economic evaluation, and real-world data for informed decision-making.</p>
        </div>
        
        <div className="objective-card">
          <div className="objective-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3>Stakeholder Alignment</h3>
          <p>Align payer perspectives, market access strategies, and healthcare system requirements across MEAR countries.</p>
        </div>
        
        <div className="objective-card">
          <div className="objective-icon">
            <i className="fas fa-rocket"></i>
          </div>
          <h3>Platform Scalability</h3>
          <p>Build a scalable platform that adapts to evolving healthcare landscapes and regulatory requirements.</p>
        </div>
      </div>
      
      <div className="search-box">
        <i className="fas fa-search"></i>
        <input 
          type="text" 
          placeholder="Search Here..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );

  const renderPlatform = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>PLATFORM</h2>
        <p>HEOR Connect Platform Architecture and Features</p>
      </div>
      
      <div className="platform-grid">
        {platformSections.map(section => (
          <div 
            key={section.id}
            className={`platform-card ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <div className="card-glow"></div>
            <h3>{section.label}</h3>
            <div className="card-content">
              {activeSection === section.id ? (
                <div className="dynamic-content">
                  <h4>HEOR Connect Platform {section.label}</h4>
                  <p>Content will be added later after structure approval</p>
                  <div className="platform-features">
                    <div className="feature-tag">Evidence Management</div>
                    <div className="feature-tag">HTA Assessment</div>
                    <div className="feature-tag">Market Access</div>
                    <div className="feature-tag">Payer Analytics</div>
                  </div>
                </div>
              ) : (
                <div className="placeholder-content">
                  <i className="fas fa-lock"></i>
                  <span>Click to explore</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="search-box">
        <i className="fas fa-search"></i>
        <input 
          type="text" 
          placeholder="Search Here..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );

  const renderPayerPerspective = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>PAYER PERSPECTIVE - MEAR REGION</h2>
        <p>Comprehensive Payer Analysis and Value Assessment</p>
      </div>
      
      <div className="analysis-container">
        <div className="analysis-sidebar">
          {analysisModules.map(module => (
            <button
              key={module.id}
              className={`analysis-btn ${activeSection === module.id ? 'active' : ''}`}
              onClick={() => setActiveSection(module.id)}
            >
              <i className={module.icon}></i>
              <span>{module.label}</span>
            </button>
          ))}
        </div>
        
        <div className="analysis-content">
          <div className="content-card">
            <div className="card-glow"></div>
            <h3>{analysisModules.find(m => m.id === activeSection)?.label}</h3>
            
            {activeSection === 'gaps-heatmaps' && (
              <div className="heatmap-grid">
                {heatmapComponents.map(component => (
                  <div key={component} className="heatmap-cell">
                    <div className="cell-glow"></div>
                    <span>{component}</span>
                  </div>
                ))}
                <div className="heatmap-legend">
                  <p>Heatmap Figure and interpretation will be added later after structure approval</p>
                  <p><strong>C1:</strong> This will be applied to all the other components</p>
                </div>
              </div>
            )}
            
            {activeSection === 'recommendations' && (
              <div className="recommendations-list">
                <h4>List of Recommendations</h4>
                <p>Will be added later after structure approval</p>
              </div>
            )}
            
            {!['gaps-heatmaps', 'recommendations'].includes(activeSection) && (
              <div className="placeholder-content">
                <i className="fas fa-chart-bar"></i>
                <p>Payer perspective analysis, figures, and interpretations will be added later after structure approval</p>
                {activeSection === 'action-plan' && (
                  <p>Phases & KPIs will be added later after structure approval</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="search-box">
        <i className="fas fa-search"></i>
        <input 
          type="text" 
          placeholder="Search Here..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );

  const renderMarketAccess = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>MARKET ACCESS - MEAR REGION</h2>
        <p>Strategic Market Access Framework and Implementation</p>
      </div>
      
      <div className="analysis-container">
        <div className="analysis-sidebar">
          {analysisModules.map(module => (
            <button
              key={module.id}
              className={`analysis-btn ${activeSection === module.id ? 'active' : ''}`}
              onClick={() => setActiveSection(module.id)}
            >
              <i className={module.icon}></i>
              <span>{module.label}</span>
            </button>
          ))}
        </div>
        
        <div className="analysis-content">
          <div className="content-card">
            <div className="card-glow"></div>
            <h3>{analysisModules.find(m => m.id === activeSection)?.label}</h3>
            
            <div className="placeholder-content">
              <i className="fas fa-store"></i>
              <p>Market Access specific content, strategies, and implementation frameworks will be added later after structure approval</p>
              <p>Same analytical flow as Payer Perspective but with market access specific insights and recommendations.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="search-box">
        <i className="fas fa-search"></i>
        <input 
          type="text" 
          placeholder="Search Here..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );

  const renderCountryDetail = () => {
    const country = countries.find(c => c.id === activeCountry);
    
    return (
      <div className="content-area">
        <div className="content-header">
          <h2>{country?.flag} {country?.name} - COUNTRY ANALYSIS</h2>
          <p>Country-specific HEOR & HTA Maturity Assessment</p>
        </div>
        
        <div className="country-perspective-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activePerspective === 'payer' ? 'active' : ''}`}
              onClick={() => setActivePerspective('payer')}
            >
              <i className="fas fa-user-tie"></i>
              Payer Perspective
            </button>
            <button 
              className={`tab-btn ${activePerspective === 'market' ? 'active' : ''}`}
              onClick={() => setActivePerspective('market')}
            >
              <i className="fas fa-chart-line"></i>
              Market Access
            </button>
          </div>
          
          <div className="tab-content">
            <div className="analysis-flow">
              <div className="flow-sidebar">
                {analysisModules.slice(0, -2).map(module => (
                  <button key={module.id} className="flow-btn">
                    <i className={module.icon}></i>
                    <span>{module.label.split(':')[0]}</span>
                  </button>
                ))}
              </div>
              
              <div className="flow-content">
                <div className="flow-card">
                  <h4>{country?.name} - {activePerspective === 'payer' ? 'Payer Perspective' : 'Market Access'}</h4>
                  <p>The same flow and interactivity as MEAR regional analysis but with content specialized for {country?.name}.</p>
                  <p>Content will be added later after structure approval.</p>
                  
                  <div className="country-highlights">
                    <div className="highlight-item">
                      <i className="fas fa-hospital"></i>
                      <span>Healthcare System Analysis</span>
                    </div>
                    <div className="highlight-item">
                      <i className="fas fa-pills"></i>
                      <span>Treatment Landscape</span>
                    </div>
                    <div className="highlight-item">
                      <i className="fas fa-money-bill-wave"></i>
                      <span>Reimbursement Framework</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input 
            type="text" 
            placeholder="Search Here..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    );
  };

  const renderMethodology = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>METHODOLOGY</h2>
        <p>HEOR Connect Platform Analytical Framework and Approach</p>
      </div>
      
      <div className="methodology-content">
        <div className="methodology-card">
          <div className="card-glow"></div>
          <h3>Platform Methodology Framework</h3>
          <div className="methodology-grid">
            <div className="methodology-item">
              <i className="fas fa-database"></i>
              <h4>Data Collection</h4>
              <p>Systematic gathering of clinical, economic, and real-world evidence data</p>
            </div>
            <div className="methodology-item">
              <i className="fas fa-chart-bar"></i>
              <h4>Analysis Framework</h4>
              <p>Advanced statistical and economic modeling techniques</p>
            </div>
            <div className="methodology-item">
              <i className="fas fa-balance-scale"></i>
              <h4>HTA Assessment</h4>
              <p>Comprehensive health technology assessment methodologies</p>
            </div>
            <div className="methodology-item">
              <i className="fas fa-map"></i>
              <h4>Regional Adaptation</h4>
              <p>Country-specific adaptation of global best practices</p>
            </div>
          </div>
          
          <div className="flowchart-placeholder">
            <i className="fas fa-project-diagram"></i>
            <p>Detailed methodology flowchart and framework will be added later after structure approval</p>
          </div>
        </div>
        
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input 
            type="text" 
            placeholder="Search Here..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  const renderNavItem = (item, level = 0) => {
    const isExpanded = expandedMenus[item.id];
    const isActive = activeNav === item.id || 
                   (item.submenu && item.submenu.some(sub => sub.id === activeNav)) ||
                   (item.id === 'mear' && activeNav.startsWith('mear-')) ||
                   (item.id === 'mear-countries' && activeNav === 'country-detail');

    return (
      <li key={item.id} className="nav-item">
        <a 
          href="#" 
          className={`nav-link ${isActive ? 'active' : ''} level-${level}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(item, item.hasSubmenu);
          }}
        >
          <div className="nav-icon-wrapper">
            <i className={item.icon}></i>
          </div>
          <span className="nav-label">{item.label}</span>
          {item.hasSubmenu && (
            <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} nav-arrow`}></i>
          )}
          <div className="nav-indicator"></div>
        </a>
        
        {item.hasSubmenu && isExpanded && item.submenu && (
          <ul className="nav-submenu">
            {item.submenu.map(subItem => (
              <React.Fragment key={subItem.id}>
                {renderNavItem({ ...subItem, level: level + 1 }, level + 1)}
              </React.Fragment>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="dashboard-container">
      {/* Animated Background */}
      <div className="background-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-overlay"></div>
        <div className="logo-container">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-chart-network"></i>
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text">
              <span className="logo-main">HEOR CONNECT</span>
              <span className="logo-sub">PLATFORM</span>
            </div>
          </div>
          <div className="tagline">
            <div className="tagline-main">FROM EVIDENCE TO ACCESS</div>
            <div className="tagline-sub">ADVANCING HEOR & HTA MATURITY IN MEAR</div>
          </div>
        </div>
        
        <div className="nav-section">
          <div className="nav-header">MAIN NAVIGATION</div>
          <ul className="nav-menu">
            {mainNavItems.map(item => renderNavItem(item))}
          </ul>
        </div>

        <div className="sidebar-footer">
          <div className="platform-status">
            <div className="status-indicator active"></div>
            <span>Platform Online</span>
          </div>
          <div className="version">v2.1.0</div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <div className="page-title">
              <div className="title-glow"></div>
              <h1>
                <span className="title-main">HEOR CONNECT</span>
                <span className="title-sub">PLATFORM</span>
              </h1>
              <p>ADVANCING HEOR & HTA MATURITY IN MEAR</p>
            </div>
            <div className="header-actions">
              <div className="user-info">
                <div className="user-avatar">
                  <div className="avatar-glow"></div>
                  <span>AD</span>
                </div>
                <div className="user-details">
                  <h3>Platform Admin</h3>
                  <p>HEOR Specialist</p>
                </div>
                <div className="user-badge">
                  <i className="fas fa-shield-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content Area */}
        {renderContent()}

        {/* Platform Footer */}
        <div className="platform-footer">
          <div className="footer-content">
            <div className="footer-text">
              <strong>HEOR CONNECT PLATFORM</strong> - Transforming Healthcare Evidence into Access
            </div>
            <div className="footer-status">
              <div className="status-dot online"></div>
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;