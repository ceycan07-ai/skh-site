/**
 * Shared sidebar renderer for admin pages
 */
function renderSidebar(activePage){
  const sidebarEl = document.getElementById('sidebar');
  if(!sidebarEl) return;
  sidebarEl.innerHTML = `
    <div class="sidebar-logo">
      <img src="../logo.svg" alt="SXH"/>
      <span>${a('adminPanel')}</span>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section">${ADMIN_LANG==='tr'?'Genel':ADMIN_LANG==='en'?'General':'Allgemein'}</div>
      <a class="nav-item ${activePage==='dashboard'?'active':''}" href="dashboard.html">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        ${a('dashboard')}
      </a>
      <div class="nav-section">${ADMIN_LANG==='tr'?'İçerik':ADMIN_LANG==='en'?'Content':'Inhalt'}</div>
      <a class="nav-item ${activePage==='destinations'?'active':''}" href="destinations.html">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${a('destinations')}
      </a>
      <a class="nav-item ${activePage==='navigation'?'active':''}" href="navigation.html">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        ${a('navigation')}
      </a>
      <div class="nav-section">${ADMIN_LANG==='tr'?'Site':ADMIN_LANG==='en'?'Site':'Webseite'}</div>
      <a class="nav-item" href="../index.html" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        ${a('viewSite')}
      </a>
    </nav>
    <div class="sidebar-bottom">
      <div class="lang-switcher">${adminLangSwitcher()}</div>
      <div class="user-chip">
        <div class="user-avatar">${(sessionStorage.getItem('sxh-user')||'U').charAt(0)}</div>
        <div>
          <div class="user-name">${sessionStorage.getItem('sxh-user')||''}</div>
          <div class="user-role">${sessionStorage.getItem('sxh-role')==='admin'?a('administrator'):a('editor')}</div>
        </div>
        <button class="logout-btn" onclick="sessionStorage.clear();location.href='index.html'" title="${a('logout')}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </button>
      </div>
    </div>`;
}

/* Shared sidebar CSS — injected once */
const SIDEBAR_CSS = `
  .sidebar{position:fixed;left:0;top:0;bottom:0;width:240px;background:#00458f;display:flex;flex-direction:column;z-index:100;}
  .sidebar-logo{padding:20px 20px 16px;border-bottom:1px solid rgba(255,255,255,.1);}
  .sidebar-logo img{height:36px;filter:brightness(0) invert(1);}
  .sidebar-logo span{display:block;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.5);margin-top:4px;}
  .sidebar-nav{flex:1;padding:12px 0;overflow-y:auto;}
  .nav-section{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.4);padding:12px 20px 6px;}
  .nav-item{display:flex;align-items:center;gap:10px;padding:10px 20px;color:rgba(255,255,255,.75);font-size:13px;font-weight:500;text-decoration:none;border-left:3px solid transparent;transition:all .15s;}
  .nav-item:hover{background:rgba(255,255,255,.08);color:#fff;}
  .nav-item.active{background:rgba(255,255,255,.12);color:#fff;border-left-color:#eb690b;}
  .nav-item svg{flex-shrink:0;opacity:.7;}
  .nav-item:hover svg,.nav-item.active svg{opacity:1;}
  .sidebar-bottom{padding:12px 20px;border-top:1px solid rgba(255,255,255,.1);}
  .lang-switcher{display:flex;gap:4px;margin-bottom:12px;}
  .al-btn{flex:1;padding:5px 0;border-radius:6px;border:1px solid rgba(255,255,255,.2);background:transparent;font-size:11px;font-weight:700;cursor:pointer;color:rgba(255,255,255,.6);transition:all .15s;}
  .al-btn.active{background:rgba(255,255,255,.2);color:#fff;border-color:rgba(255,255,255,.4);}
  .user-chip{display:flex;align-items:center;gap:10px;}
  .user-avatar{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex-shrink:0;}
  .user-name{font-size:13px;font-weight:600;color:#fff;}
  .user-role{font-size:10px;color:rgba(255,255,255,.5);text-transform:uppercase;}
  .logout-btn{margin-left:auto;background:none;border:none;color:rgba(255,255,255,.5);cursor:pointer;padding:4px;flex-shrink:0;}
  .logout-btn:hover{color:#fff;}
  .main{margin-left:240px;padding:32px;}
`;

(function injectCSS(){
  const s=document.createElement('style');
  s.textContent=SIDEBAR_CSS;
  document.head.appendChild(s);
})();
