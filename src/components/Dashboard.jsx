// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('platform');
  const [activeSection, setActiveSection] = useState('introduction');
  const [activeCountry, setActiveCountry] = useState(null);
  const [activePerspective, setActivePerspective] = useState('payer');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: 'platform', icon: 'fas fa-rocket', label: 'Platform' },
    { id: 'mear', icon: 'fas fa-globe-americas', label: 'MEAR Region' },
    { id: 'countries', icon: 'fas fa-flag', label: 'MEAR Per Country' },
    { id: 'market-access', icon: 'fas fa-chart-line', label: 'Market Access' },
    { id: 'payer', icon: 'fas fa-user-tie', label: 'Payer Perspective' },
    { id: 'methodology', icon: 'fas fa-cogs', label: 'Methodology' },
    { id: 'reports', icon: 'fas fa-file-medical', label: 'Reports & Analytics' }
  ];

  const countries = [
    { id: 'egypt', name: 'Egypt', flag: '🇪🇬' },
    { id: 'saudi', name: 'Saudi Arabia', flag: '🇸🇦' },
    { id: 'uae', name: 'UAE', flag: '🇦🇪' },
    { id: 'south-africa', name: 'South Africa', flag: '🇿🇦' },
    { id: 'morocco', name: 'Morocco', flag: '🇲🇦' },
    { id: 'russia', name: 'Russia', flag: '🇷🇺' }
  ];

  const platformSections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'methodology', label: 'Methodology' }
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
      case 'platform':
        return renderPlatform();
      case 'mear':
        return renderMEAR();
      case 'countries':
        return renderCountries();
      case 'market-access':
        return renderMarketAccess();
      case 'payer':
        return renderPayerPerspective();
      case 'methodology':
        return renderMethodology();
      default:
        return renderPlatform();
    }
  };

  const renderPlatform = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>HEOR Connect Platform</h2>
        <p>From Evidence to Access - Advancing HEOR & HTA Maturity in MEAR</p>
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
                  <h4>HEOR Connect Platform Initial Structure</h4>
                  <p>Content will be added later after structure approval</p>
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
    </div>
  );

  const renderMEAR = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>MEAR Region Analysis</h2>
        <p>Comprehensive Health Economics and Outcomes Research for Middle East & Africa Region</p>
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
                <p>Figures, Tables, and Interpretations will be added later after structure approval</p>
                {activeSection === 'action-plan' && (
                  <p>Phases & KPIs will be added later after structure approval</p>
                )}
              </div>
            )}
            
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
      </div>
    </div>
  );

  const renderCountries = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>MEAR Per Country Analysis</h2>
        <p>Country-specific HEOR & HTA Maturity Assessment</p>
      </div>
      
      <div className="countries-grid">
        {countries.map(country => (
          <div 
            key={country.id}
            className={`country-card ${activeCountry === country.id ? 'active' : ''}`}
            onClick={() => setActiveCountry(country.id)}
          >
            <div className="country-flag">{country.flag}</div>
            <h4>{country.name}</h4>
            <div className="country-actions">
              <button 
                className={`perspective-btn ${activePerspective === 'payer' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePerspective('payer');
                  setActiveCountry(country.id);
                }}
              >
                Payer Perspective
              </button>
              <button 
                className={`perspective-btn ${activePerspective === 'market' ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePerspective('market');
                  setActiveCountry(country.id);
                }}
              >
                Market Access
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {activeCountry && (
        <div className="country-detail">
          <div className="detail-header">
            <h3>
              {countries.find(c => c.id === activeCountry)?.flag}
              {countries.find(c => c.id === activeCountry)?.name}
              <span className="perspective-badge">{activePerspective === 'payer' ? 'Payer Perspective' : 'Market Access'}</span>
            </h3>
          </div>
          
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
                <h4>Country-Specific Analysis</h4>
                <p>The same flow and interactivity as MEAR but with content specialized for {countries.find(c => c.id === activeCountry)?.name}</p>
                <p>Content will be added later after structure approval</p>
                
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
          </div>
        </div>
      )}
    </div>
  );

  const renderMarketAccess = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>Market Access Strategy</h2>
        <p>Comprehensive Market Access Framework and Implementation</p>
      </div>
      
      <div className="market-access-flow">
        <div className="flow-notice">
          <i className="fas fa-sync-alt"></i>
          <p>Same buttons and flow as the payer perspective will be followed in the market access part but with different content</p>
        </div>
        
        <div className="analysis-container">
          <div className="analysis-sidebar">
            {analysisModules.map(module => (
              <button key={module.id} className="analysis-btn">
                <i className={module.icon}></i>
                <span>{module.label}</span>
              </button>
            ))}
          </div>
          
          <div className="analysis-content">
            <div className="content-card">
              <h3>Market Access Framework</h3>
              <div className="placeholder-content">
                <i className="fas fa-chart-network"></i>
                <p>Market Access specific content, figures, and strategies will be added later after structure approval</p>
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
        </div>
      </div>
    </div>
  );

  const renderPayerPerspective = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>Payer Perspective Analysis</h2>
        <p>Understanding Payer Needs and Value Assessment Frameworks</p>
      </div>
      
      <div className="analysis-container">
        <div className="analysis-sidebar">
          {analysisModules.map(module => (
            <button key={module.id} className="analysis-btn">
              <i className={module.icon}></i>
              <span>{module.label}</span>
            </button>
          ))}
        </div>
        
        <div className="analysis-content">
          <div className="content-card">
            <h3>Payer Perspective Framework</h3>
            <div className="placeholder-content">
              <i className="fas fa-user-tie"></i>
              <p>Payer perspective specific content, analysis, and recommendations will be added later after structure approval</p>
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
      </div>
    </div>
  );

  const renderMethodology = () => (
    <div className="content-area">
      <div className="content-header">
        <h2>Methodology & Framework</h2>
        <p>HEOR Connect Platform Methodology and Analytical Approach</p>
      </div>
      
      <div className="methodology-content">
        <div className="methodology-card">
          <div className="card-glow"></div>
          <h3>Platform Methodology</h3>
          <div className="flowchart-placeholder">
            <i className="fas fa-project-diagram"></i>
            <p>Flowchart Content will be added later after structure approval</p>
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
    </div>
  );

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
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <a 
                  href="#" 
                  className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav(item.id);
                    setActiveSection('introduction');
                    setActiveCountry(null);
                  }}
                >
                  <div className="nav-icon-wrapper">
                    <i className={item.icon}></i>
                  </div>
                  <span className="nav-label">{item.label}</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
            ))}
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