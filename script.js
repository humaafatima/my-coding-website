/* ============================================
   SnipVault — Main JavaScript
   Free Code Snippets for Developers
   ============================================ */

/* ── Snippet Data ── */
const snippets = [
  // ── HTML / CSS ────────────────────────────
  {
    id: 1, lang: 'css',
    title: 'Glowing Neon Button',
    desc: 'Animated neon glow effect on hover using pure CSS',
    views: '12.4k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a}.btn{padding:14px 32px;border:2px solid #3b82f6;background:transparent;color:#3b82f6;font-size:1rem;border-radius:8px;cursor:pointer;transition:all .3s;font-family:sans-serif}.btn:hover{background:#3b82f6;color:#fff;box-shadow:0 0 20px #3b82f6,0 0 40px rgba(59,130,246,.4)}</style><button class="btn">Hover Me</button>`,
    code: `.neon-btn {\n  padding: 14px 32px;\n  border: 2px solid #3b82f6;\n  background: transparent;\n  color: #3b82f6;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.neon-btn:hover {\n  background: #3b82f6;\n  color: #fff;\n  box-shadow: 0 0 20px #3b82f6,\n    0 0 40px rgba(59,130,246,0.4);\n}`
  },
  {
    id: 2, lang: 'css',
    title: 'Glass Morphism Card',
    desc: 'Frosted glass card using CSS backdrop-filter blur effect',
    views: '9.1k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:linear-gradient(135deg,#667eea,#764ba2)}.card{background:rgba(255,255,255,.15);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:24px;width:200px;color:#fff;font-family:sans-serif}.card h3{margin-bottom:8px;font-size:1rem}.card p{font-size:.8rem;opacity:.8}</style><div class="card"><h3>Glass Card</h3><p>Frosted glass morphism using CSS backdrop-filter.</p></div>`,
    code: `.glass-card {\n  background: rgba(255,255,255,0.15);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255,255,255,0.2);\n  border-radius: 16px;\n  padding: 24px;\n  color: #fff;\n}`
  },
  {
    id: 3, lang: 'css',
    title: 'CSS Loading Spinner',
    desc: 'Smooth pure CSS animated loading spinner with keyframes',
    views: '8.7k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a}.spinner{width:48px;height:48px;border:4px solid #1e2d45;border-top:4px solid #3b82f6;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}</style><div class="spinner" role="status" aria-label="Loading"></div>`,
    code: `.spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}`
  },
  {
    id: 4, lang: 'css',
    title: 'Responsive Sticky Navbar',
    desc: 'Sticky top navigation bar using semantic HTML header element',
    views: '15.2k',
    preview: `<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:sans-serif}nav{background:#1a2235;padding:0 1.5rem;display:flex;align-items:center;justify-content:space-between;height:52px}.logo{color:#3b82f6;font-weight:700;font-size:1.1rem;text-decoration:none}.links{display:flex;gap:1.5rem;list-style:none}.links a{color:#9ca3af;text-decoration:none;font-size:.85rem}.links a:hover{color:#fff}</style><nav aria-label="Main navigation"><a class="logo" href="#">Brand</a><ul class="links"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></nav>`,
    code: `<header>\n  <nav aria-label="Main navigation">\n    <a href="/" class="logo">Brand</a>\n    <ul class="nav-links">\n      <li><a href="/">Home</a></li>\n      <li><a href="/about">About</a></li>\n      <li><a href="/contact">Contact</a></li>\n    </ul>\n  </nav>\n</header>`
  },
  {
    id: 5, lang: 'css',
    title: 'User Profile Card',
    desc: 'Social profile card with avatar, name, role and stats',
    views: '7.3k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#111827;font-family:sans-serif}.card{background:#1e293b;border-radius:16px;padding:24px;text-align:center;width:200px;color:#fff}.avatar{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem}.name{font-weight:600;font-size:.95rem}.role{font-size:.75rem;color:#64748b;margin-top:4px}.stats{display:flex;justify-content:space-around;margin-top:16px;padding-top:16px;border-top:1px solid #334155}.s-n{font-weight:700;font-size:.9rem}.s-l{font-size:.65rem;color:#64748b}</style><article class="card"><div class="avatar">👤</div><h2 class="name" style="font-size:.95rem">Ali Hassan</h2><p class="role">Developer</p><div class="stats"><div><p class="s-n">128</p><p class="s-l">Posts</p></div><div><p class="s-n">4.2k</p><p class="s-l">Followers</p></div></div></article>`,
    code: `.profile-card {\n  background: #1e293b;\n  border-radius: 16px;\n  padding: 24px;\n  text-align: center;\n  color: #fff;\n}\n.avatar {\n  width: 64px; height: 64px;\n  border-radius: 50%;\n  background: linear-gradient(\n    135deg, #3b82f6, #8b5cf6);\n  margin: 0 auto 12px;\n}`
  },
  {
    id: 6, lang: 'css',
    title: 'Animated Gradient Text',
    desc: 'Flowing rainbow gradient text animation with CSS keyframes',
    views: '6.8k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a}.grad{font-size:2rem;font-weight:800;font-family:sans-serif;background:linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;background-size:200% auto;animation:flow 3s linear infinite}@keyframes flow{to{background-position:200% center}}</style><p class="grad">SnipVault</p>`,
    code: `.gradient-text {\n  background: linear-gradient(90deg,\n    #3b82f6, #8b5cf6,\n    #ec4899, #f59e0b);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  background-size: 200% auto;\n  animation: flow 3s linear infinite;\n}\n@keyframes flow {\n  to { background-position: 200% center; }\n}`
  },
  {
    id: 7, lang: 'css',
    title: 'Dark Login Form',
    desc: 'Accessible dark-themed login form with semantic HTML labels',
    views: '18.3k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:sans-serif}.form{background:#111827;border:1px solid #1e2d45;border-radius:16px;padding:24px;width:220px}.form h2{color:#fff;font-size:1rem;margin-bottom:16px}.form label{font-size:.72rem;color:#9ca3af;display:block;margin-bottom:3px}.form input{width:100%;padding:9px 12px;background:#1a2235;border:1px solid #1e2d45;border-radius:8px;color:#fff;font-size:.82rem;margin-bottom:10px;box-sizing:border-box}.form button{width:100%;padding:10px;background:#3b82f6;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85rem}</style><div class="form"><h2>Welcome back</h2><label for="e">Email</label><input type="email" id="e" placeholder="you@example.com"><label for="p">Password</label><input type="password" id="p" placeholder="Password"><button type="submit">Sign in</button></div>`,
    code: `<form class="login-form" action="/login" method="POST">\n  <h2>Welcome back</h2>\n  <label for="email">Email address</label>\n  <input type="email" id="email" name="email"\n    required autocomplete="email"\n    placeholder="you@example.com">\n  <label for="password">Password</label>\n  <input type="password" id="password"\n    name="password" required\n    autocomplete="current-password">\n  <button type="submit">Sign in</button>\n</form>`
  },
  {
    id: 8, lang: 'css',
    title: 'Animated Progress Bar',
    desc: 'Skill progress bar with CSS gradient and grow animation',
    views: '7.8k',
    preview: `<style>body{display:flex;flex-direction:column;justify-content:center;padding:20px;height:100%;margin:0;background:#0a0e1a;font-family:sans-serif;gap:12px}.bar-wrap{width:100%}.label{display:flex;justify-content:space-between;color:#9ca3af;font-size:.75rem;margin-bottom:4px}.bar{background:#1e2d45;border-radius:99px;height:8px;overflow:hidden}.fill{height:100%;border-radius:99px;animation:grow .8s ease forwards;background:linear-gradient(90deg,#3b82f6,#06b6d4)}@keyframes grow{from{width:0}}</style><div class="bar-wrap"><div class="label"><span>HTML/CSS</span><span>90%</span></div><div class="bar"><div class="fill" style="width:90%"></div></div></div><div class="bar-wrap"><div class="label"><span>JavaScript</span><span>75%</span></div><div class="bar"><div class="fill" style="width:75%"></div></div></div>`,
    code: `.progress-bar {\n  background: #e5e7eb;\n  border-radius: 99px;\n  height: 8px;\n  overflow: hidden;\n}\n.fill {\n  height: 100%;\n  border-radius: 99px;\n  background: linear-gradient(\n    90deg, #3b82f6, #06b6d4);\n  animation: grow 0.8s ease forwards;\n}\n@keyframes grow { from { width: 0; } }`
  },
  {
    id: 9, lang: 'css',
    title: 'CSS Tooltip on Hover',
    desc: 'Pure CSS accessible tooltip appearing on hover',
    views: '5.6k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:sans-serif}.tip{position:relative;display:inline-block;color:#fff;cursor:pointer;background:#1a2235;padding:10px 20px;border-radius:8px;border:1px solid #3b82f6}.tip .box{visibility:hidden;background:#3b82f6;color:#fff;border-radius:6px;padding:6px 10px;position:absolute;bottom:120%;left:50%;transform:translateX(-50%);font-size:.75rem;white-space:nowrap;opacity:0;transition:opacity .2s}.tip:hover .box{visibility:visible;opacity:1}</style><div class="tip">Hover me<span class="box" role="tooltip">This is a tooltip!</span></div>`,
    code: `<style>\n.tooltip { position: relative; }\n.tooltip .tip-text {\n  visibility: hidden;\n  background: #3b82f6; color: #fff;\n  border-radius: 6px; padding: 6px 10px;\n  position: absolute;\n  bottom: 120%; left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  opacity: 0; transition: opacity 0.2s;\n}\n.tooltip:hover .tip-text,\n.tooltip:focus-within .tip-text {\n  visibility: visible; opacity: 1;\n}\n</style>\n<div class="tooltip">\n  Hover me\n  <span class="tip-text" role="tooltip">Hello!</span>\n</div>`
  },
  {
    id: 10, lang: 'css',
    title: '3D Flip Card',
    desc: 'CSS 3D perspective card flip animation on hover',
    views: '8.9k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a}.flip{width:150px;height:100px;perspective:600px}.inner{width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d;position:relative}.flip:hover .inner{transform:rotateY(180deg)}.front,.back{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:12px;display:flex;align-items:center;justify-content:center;font-family:sans-serif;font-weight:600;font-size:.9rem}.front{background:#1a2235;color:#3b82f6;border:1px solid #3b82f6}.back{background:#3b82f6;color:#fff;transform:rotateY(180deg)}</style><div class="flip"><div class="inner"><div class="front">Hover Me</div><div class="back">Flipped!</div></div></div>`,
    code: `.flip-card { perspective: 600px; }\n.flip-inner {\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n  width: 100%; height: 100%;\n}\n.flip-card:hover .flip-inner {\n  transform: rotateY(180deg);\n}\n.flip-front, .flip-back {\n  backface-visibility: hidden;\n  position: absolute;\n  width: 100%; height: 100%;\n}\n.flip-back { transform: rotateY(180deg); }`
  },
  {
    id: 11, lang: 'css',
    title: 'Skeleton Loading Screen',
    desc: 'Shimmer skeleton placeholder animation while content loads',
    views: '7.6k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a}.skeleton{background:#1a2235;border-radius:12px;padding:16px;width:220px}.sk{background:linear-gradient(90deg,#1e2d45 25%,#2a3f5e 50%,#1e2d45 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:6px;margin-bottom:10px}.sk-avatar{width:48px;height:48px;border-radius:50%;margin-bottom:12px}.sk-line{height:10px}.sk-short{width:60%}@keyframes shimmer{to{background-position:-200% 0}}</style><div class="skeleton" role="status" aria-label="Loading"><div class="sk sk-avatar"></div><div class="sk sk-line"></div><div class="sk sk-line"></div><div class="sk sk-line sk-short"></div></div>`,
    code: `.sk-line {\n  height: 10px; border-radius: 6px;\n  margin-bottom: 10px;\n  background: linear-gradient(\n    90deg,\n    #1e2d45 25%,\n    #2a3f5e 50%,\n    #1e2d45 75%\n  );\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n}\n@keyframes shimmer {\n  to { background-position: -200% 0; }\n}`
  },
  {
    id: 12, lang: 'css',
    title: 'Hamburger Menu Toggle',
    desc: 'CSS animated hamburger icon to X close button toggle',
    views: '9.2k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a}.burger{cursor:pointer;display:flex;flex-direction:column;gap:6px;background:none;border:none;padding:4px}.line{width:30px;height:2px;background:#e2e8f0;border-radius:2px;transition:all .3s;display:block}.burger.open .line:nth-child(1){transform:translateY(8px) rotate(45deg)}.burger.open .line:nth-child(2){opacity:0}.burger.open .line:nth-child(3){transform:translateY(-8px) rotate(-45deg)}</style><button class="burger" onclick="this.classList.toggle('open')" aria-label="Toggle menu" aria-expanded="false"><span class="line"></span><span class="line"></span><span class="line"></span></button>`,
    code: `<button class="burger"\n  aria-label="Toggle navigation"\n  aria-expanded="false"\n  onclick="this.classList.toggle('open');\n    this.setAttribute('aria-expanded',\n    this.classList.contains('open'))">\n  <span class="line" aria-hidden="true"></span>\n  <span class="line" aria-hidden="true"></span>\n  <span class="line" aria-hidden="true"></span>\n</button>`
  },
  {
    id: 13, lang: 'css',
    title: 'CSS Star Rating',
    desc: 'Interactive 5-star rating widget using CSS only and radio inputs',
    views: '6.3k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a}.stars{display:flex;flex-direction:row-reverse;gap:4px;border:none;padding:0}.stars input{display:none}.stars label{font-size:2rem;color:#374151;cursor:pointer;transition:color .2s}.stars input:checked~label,.stars label:hover,.stars label:hover~label{color:#f59e0b}</style><fieldset class="stars"><legend style="position:absolute;opacity:0">Rate</legend><input type="radio" name="r" id="s5"><label for="s5" title="5 stars">★</label><input type="radio" name="r" id="s4"><label for="s4" title="4 stars">★</label><input type="radio" name="r" id="s3"><label for="s3" title="3 stars">★</label><input type="radio" name="r" id="s2"><label for="s2" title="2 stars">★</label><input type="radio" name="r" id="s1"><label for="s1" title="1 star">★</label></fieldset>`,
    code: `<fieldset class="stars">\n  <legend>Rate this:</legend>\n  <input type="radio" name="rating" id="s5" value="5">\n  <label for="s5" title="5 stars">★</label>\n  <input type="radio" name="rating" id="s4" value="4">\n  <label for="s4" title="4 stars">★</label>\n  <input type="radio" name="rating" id="s3" value="3">\n  <label for="s3" title="3 stars">★</label>\n</fieldset>\n\n<style>\n.stars { display:flex; flex-direction:row-reverse; }\n.stars input { display: none; }\n.stars label { font-size:2rem; color:#374151; cursor:pointer; }\n.stars input:checked ~ label,\n.stars label:hover ~ label { color: #f59e0b; }\n</style>`
  },
  // ── JavaScript ────────────────────────────
  {
    id: 14, lang: 'js',
    title: 'Age Calculator',
    desc: 'Calculate exact age in years from any date of birth',
    views: '11.2k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#111827;font-family:sans-serif}.w{text-align:center;color:#fff}label{font-size:.85rem;color:#9ca3af}input{padding:8px 12px;border-radius:8px;border:1px solid #374151;background:#1e293b;color:#fff;margin:8px 0;display:block;width:100%}button{padding:8px 20px;background:#3b82f6;color:#fff;border:none;border-radius:8px;cursor:pointer;margin-top:6px}#res{margin-top:12px;font-size:1.1rem;color:#34d399}</style><div class="w"><label for="dob">Date of Birth</label><input type="date" id="dob"><button onclick="let d=new Date(document.getElementById('dob').value),n=new Date(),a=n.getFullYear()-d.getFullYear();document.getElementById('res').textContent=document.getElementById('dob').value?'You are '+a+' years old!':'Pick a date!'">Calculate Age</button><p id="res" aria-live="polite"></p></div>`,
    code: `function calculateAge(dateOfBirth) {\n  const birth = new Date(dateOfBirth);\n  const today = new Date();\n  let age = today.getFullYear()\n            - birth.getFullYear();\n  const m = today.getMonth()\n            - birth.getMonth();\n  if (m < 0 || (m === 0 &&\n    today.getDate() < birth.getDate())) {\n    age--;\n  }\n  return age;\n}\nconsole.log(calculateAge('2000-05-15')); // 25`
  },
  {
    id: 15, lang: 'js',
    title: 'Password Generator',
    desc: 'Generate cryptographically strong random passwords',
    views: '14.6k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#111827;font-family:sans-serif}.box{text-align:center;color:#fff;width:220px}#pw{background:#0a0e1a;border:1px solid #374151;color:#34d399;padding:10px;border-radius:8px;font-family:monospace;font-size:.85rem;width:100%;margin-bottom:8px;text-align:center;display:block}button{padding:8px 16px;background:#3b82f6;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85rem;margin:3px}</style><div class="box"><output id="pw" aria-live="polite">Click Generate</output><br><button onclick="let c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$',p='';for(let i=0;i<12;i++)p+=c[Math.floor(Math.random()*c.length)];document.getElementById('pw').textContent=p">Generate</button><button onclick="navigator.clipboard.writeText(document.getElementById('pw').textContent)">Copy</button></div>`,
    code: `function generatePassword(length = 12) {\n  const chars =\n    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg' +\n    'hijklmnopqrstuvwxyz0123456789!@#$';\n  let password = '';\n  for (let i = 0; i < length; i++) {\n    password += chars[\n      Math.floor(Math.random() * chars.length)\n    ];\n  }\n  return password;\n}\nconsole.log(generatePassword(16));`
  },
  {
    id: 16, lang: 'js',
    title: 'Countdown Timer',
    desc: 'Real-time countdown to any future date with days hours mins secs',
    views: '10.9k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:sans-serif}.timer{display:flex;gap:12px}.box{background:#1a2235;border:1px solid #1e2d45;border-radius:10px;padding:12px;text-align:center;min-width:50px}.num{font-size:1.4rem;font-weight:700;color:#3b82f6}.lbl{font-size:.6rem;color:#6b7c99;margin-top:2px}</style><div class="timer" role="timer"><div class="box"><p class="num" id="d">00</p><p class="lbl">DAYS</p></div><div class="box"><p class="num" id="h">00</p><p class="lbl">HRS</p></div><div class="box"><p class="num" id="m">00</p><p class="lbl">MIN</p></div><div class="box"><p class="num" id="s">00</p><p class="lbl">SEC</p></div></div><script>function tick(){let t=new Date('2026-01-01')-new Date(),vals=[Math.floor(t/864e5),Math.floor((t%864e5)/36e5),Math.floor((t%36e5)/6e4),Math.floor((t%6e4)/1e3)];['d','h','m','s'].forEach((id,i)=>document.getElementById(id).textContent=String(vals[i]).padStart(2,'0'))}tick();setInterval(tick,1000)<\/script>`,
    code: `function startCountdown(targetDate) {\n  const target = new Date(targetDate);\n  setInterval(() => {\n    const diff = target - new Date();\n    if (diff <= 0) return;\n    const d = Math.floor(diff / 86400000);\n    const h = Math.floor((diff % 86400000) / 3600000);\n    const m = Math.floor((diff % 3600000) / 60000);\n    const s = Math.floor((diff % 60000) / 1000);\n    document.getElementById('days').textContent = d;\n    document.getElementById('hrs').textContent  = h;\n    document.getElementById('mins').textContent = m;\n    document.getElementById('secs').textContent = s;\n  }, 1000);\n}\nstartCountdown('2026-01-01');`
  },
  {
    id: 17, lang: 'js',
    title: 'Dark Mode Toggle',
    desc: 'Switch between light and dark themes using CSS variables',
    views: '13.5k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;transition:background .3s;font-family:sans-serif;background:#0a0e1a}.toggle{width:52px;height:28px;background:#374151;border-radius:99px;cursor:pointer;position:relative;transition:background .3s;border:none}.toggle.on{background:#3b82f6}.knob{width:22px;height:22px;background:#fff;border-radius:50%;position:absolute;top:3px;left:3px;transition:transform .3s;pointer-events:none}.toggle.on .knob{transform:translateX(24px)}.label{margin-left:12px;font-size:.9rem;color:#fff}</style><div style="display:flex;align-items:center"><button class="toggle" onclick="this.classList.toggle('on');document.querySelector('.label').textContent=this.classList.contains('on')?'Dark Mode':'Light Mode'" role="switch" aria-checked="false" aria-label="Toggle dark mode"><div class="knob" aria-hidden="true"></div></button><span class="label">Light Mode</span></div>`,
    code: `const toggle = document.getElementById('toggle');\nconst html = document.documentElement;\n\ntoggle.addEventListener('click', () => {\n  const isDark = html.classList.toggle('dark');\n  toggle.setAttribute('aria-checked', isDark);\n});\n\n/* CSS:\nhtml { --bg: #fff; --text: #111827; }\nhtml.dark { --bg: #0a0e1a; --text: #e8edf5; }\nbody { background: var(--bg); color: var(--text); } */`
  },
  {
    id: 18, lang: 'js',
    title: 'Copy to Clipboard',
    desc: 'One-click copy button with accessible success feedback',
    views: '9.8k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#111827;font-family:sans-serif}.box{text-align:center}input{background:#1e293b;border:1px solid #374151;color:#fff;padding:10px;border-radius:8px;width:200px;font-size:.85rem}button{padding:10px 20px;background:#3b82f6;color:#fff;border:none;border-radius:8px;cursor:pointer;margin-top:8px;display:block;width:100%;font-size:.85rem}button.ok{background:#10b981}</style><div class="box"><input id="txt" value="Hello World!" aria-label="Text to copy"><button onclick="navigator.clipboard.writeText(document.getElementById('txt').value);this.textContent='Copied!';this.classList.add('ok');setTimeout(()=>{this.textContent='Copy';this.classList.remove('ok')},2000)">Copy</button></div>`,
    code: `async function copyToClipboard(text) {\n  try {\n    await navigator.clipboard.writeText(text);\n    btn.textContent = 'Copied!';\n    setTimeout(() => {\n      btn.textContent = 'Copy';\n    }, 2000);\n  } catch (err) {\n    console.error('Copy failed:', err);\n  }\n}`
  },
  {
    id: 19, lang: 'js',
    title: 'Word Counter',
    desc: 'Count words and characters in real time as you type',
    views: '6.4k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#111827;font-family:sans-serif;padding:16px}.wrap{width:100%}textarea{width:100%;background:#1e293b;border:1px solid #374151;color:#fff;padding:10px;border-radius:8px;font-size:.82rem;resize:none;box-sizing:border-box}.stats{display:flex;gap:16px;margin-top:8px}.s{text-align:center;color:#9ca3af;font-size:.75rem}.s span{display:block;font-size:1rem;font-weight:700;color:#3b82f6}</style><div class="wrap"><textarea rows="3" placeholder="Type something..." oninput="let w=this.value.trim()?this.value.trim().split(/\s+/).length:0;document.getElementById('wc').textContent=w;document.getElementById('cc').textContent=this.value.length" aria-label="Text to count"></textarea><div class="stats" aria-live="polite"><div class="s"><span id="wc">0</span>Words</div><div class="s"><span id="cc">0</span>Chars</div></div></div>`,
    code: `const textarea = document.getElementById('text');\nconst wordCount = document.getElementById('words');\nconst charCount = document.getElementById('chars');\n\ntextarea.addEventListener('input', () => {\n  const text = textarea.value.trim();\n  const words = text ? text.split(/\s+/).length : 0;\n  wordCount.textContent = words;\n  charCount.textContent = textarea.value.length;\n});`
  },
  {
    id: 20, lang: 'js',
    title: 'BMI Calculator',
    desc: 'Calculate Body Mass Index with weight category result',
    views: '8.2k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#111827;font-family:sans-serif}.w{color:#fff;text-align:center;width:230px}input{width:100%;padding:8px;background:#1e293b;border:1px solid #374151;border-radius:8px;color:#fff;margin:4px 0 8px;font-size:.82rem;box-sizing:border-box}label{font-size:.75rem;color:#9ca3af;display:block;text-align:left}button{width:100%;padding:10px;background:#3b82f6;color:#fff;border:none;border-radius:8px;cursor:pointer}#res{margin-top:12px;font-size:.95rem;color:#34d399;font-weight:600}</style><div class="w"><label for="ht">Height (cm)</label><input type="number" id="ht" placeholder="e.g. 170" min="1"><label for="wt">Weight (kg)</label><input type="number" id="wt" placeholder="e.g. 65" min="1"><button onclick="let h=document.getElementById('ht').value/100,w=document.getElementById('wt').value,b=(w/(h*h)).toFixed(1),c=b<18.5?'Underweight':b<25?'Normal':b<30?'Overweight':'Obese';document.getElementById('res').textContent='BMI: '+b+' ('+c+')'">Calculate</button><p id="res" aria-live="polite"></p></div>`,
    code: `function calculateBMI(weightKg, heightCm) {\n  const heightM = heightCm / 100;\n  const bmi = (weightKg / (heightM * heightM))\n              .toFixed(1);\n  let category;\n  if (bmi < 18.5)     category = 'Underweight';\n  else if (bmi < 25)  category = 'Normal weight';\n  else if (bmi < 30)  category = 'Overweight';\n  else                category = 'Obese';\n  return { bmi, category };\n}\nconsole.log(calculateBMI(65, 170));`
  },
  {
    id: 21, lang: 'js',
    title: 'Digital Clock',
    desc: 'Live digital clock showing current time updated every second',
    views: '9.3k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}#clock{font-size:2rem;font-weight:700;color:#3b82f6;background:#111827;padding:16px 28px;border-radius:12px;border:1px solid #1e2d45;letter-spacing:4px}</style><time id="clock" aria-live="polite">00:00:00</time><script>function tick(){document.getElementById('clock').textContent=new Date().toLocaleTimeString()}tick();setInterval(tick,1000)<\/script>`,
    code: `function updateClock() {\n  const time = new Date().toLocaleTimeString(\n    'en-US', {\n      hour: '2-digit',\n      minute: '2-digit',\n      second: '2-digit',\n      hour12: true\n    }\n  );\n  document.getElementById('clock')\n    .textContent = time;\n}\nupdateClock();\nsetInterval(updateClock, 1000);`
  },
  {
    id: 22, lang: 'js',
    title: 'Form Validation',
    desc: 'Real-time HTML form validation with accessible error messages',
    views: '14.8k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#111827;font-family:sans-serif;padding:12px}.form{width:100%;max-width:260px}label{display:block;font-size:.75rem;color:#9ca3af;margin-bottom:4px}input{width:100%;padding:9px 12px;background:#1e293b;border:1px solid #374151;border-radius:8px;color:#fff;font-size:.82rem;margin-bottom:4px;box-sizing:border-box;transition:border-color .2s}input.err{border-color:#ef4444}input.ok{border-color:#10b981}.hint{font-size:.7rem;color:#ef4444;margin-bottom:10px;min-height:14px}button{width:100%;padding:10px;background:#3b82f6;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:.85rem}</style><div class="form"><label for="em">Email</label><input type="email" id="em" placeholder="you@example.com" oninput="let v=this.value,ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);this.className=v?(ok?'ok':'err'):'';document.getElementById('eh').textContent=v&&!ok?'Invalid email':''"><p class="hint" id="eh" role="alert"></p><label for="pw2">Password</label><input type="password" id="pw2" placeholder="Min 8 characters" oninput="let ok=this.value.length>=8;this.className=this.value?(ok?'ok':'err'):'';document.getElementById('ph').textContent=this.value&&!ok?'Minimum 8 characters':''"><p class="hint" id="ph" role="alert"></p><button type="submit">Register</button></div>`,
    code: `function validateForm() {\n  const email = document.getElementById('email');\n  const password = document.getElementById('pass');\n  let isValid = true;\n\n  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/\n    .test(email.value);\n  if (!emailOk) {\n    setError(email, 'Please enter a valid email');\n    isValid = false;\n  } else setSuccess(email);\n\n  if (password.value.length < 8) {\n    setError(password, 'Minimum 8 characters');\n    isValid = false;\n  } else setSuccess(password);\n\n  return isValid;\n}`
  },
  // ── Python ────────────────────────────────
  {
    id: 23, lang: 'python',
    title: 'Secure Password Generator',
    desc: 'Generate cryptographically secure passwords using Python secrets module',
    views: '8.4k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#34d399;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># Secure Password Generator</span><br><span class="kw">import</span> secrets, string<br><br><span class="kw">def</span> <span class="fn">generate</span>(length=<span class="str">16</span>):<br>&nbsp;&nbsp;chars = (string.ascii_letters<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ string.digits + <span class="str">"!@#$"</span>)<br>&nbsp;&nbsp;<span class="kw">return</span> <span class="str">''</span>.join(<br>&nbsp;&nbsp;&nbsp;&nbsp;secrets.choice(chars)<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">for</span> _ <span class="kw">in</span> range(length))<br><br>print(generate())</div>`,
    code: `import secrets\nimport string\n\ndef generate_password(length=16):\n    """Generate a cryptographically secure password."""\n    alphabet = (string.ascii_letters\n                + string.digits\n                + "!@#$%^&*")\n    return ''.join(\n        secrets.choice(alphabet)\n        for _ in range(length)\n    )\n\nfor i in range(5):\n    print(f"Password {i+1}: {generate_password()}")`
  },
  {
    id: 24, lang: 'python',
    title: 'Bulk File Renamer',
    desc: 'Batch rename all files in a folder with a custom prefix',
    views: '6.1k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># Bulk File Renamer</span><br><span class="kw">import</span> os<br><span class="kw">from</span> pathlib <span class="kw">import</span> Path<br><br><span class="kw">def</span> <span class="fn">rename_files</span>(folder, prefix):<br>&nbsp;&nbsp;<span class="kw">for</span> i, f <span class="kw">in</span> enumerate(<br>&nbsp;&nbsp;&nbsp;&nbsp;Path(folder).iterdir(), <span class="str">1</span>):<br>&nbsp;&nbsp;&nbsp;&nbsp;new = <span class="str">f"{prefix}_{i:03d}{f.suffix}"</span><br>&nbsp;&nbsp;&nbsp;&nbsp;f.rename(f.parent / new)<br>&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="str">f"Renamed to {new}"</span>)</div>`,
    code: `import os\nfrom pathlib import Path\n\ndef rename_files(folder: str, prefix: str = "file"):\n    """Bulk rename all files in a folder."""\n    folder_path = Path(folder)\n    files = [f for f in folder_path.iterdir()\n             if f.is_file()]\n    for i, file in enumerate(files, start=1):\n        new_name = f"{prefix}_{i:03d}{file.suffix}"\n        file.rename(folder_path / new_name)\n        print(f"Renamed: {file.name} -> {new_name}")\n    print(f"Done! Renamed {len(files)} files.")\n\nrename_files('./photos', 'vacation')`
  },
  {
    id: 25, lang: 'python',
    title: 'QR Code Generator',
    desc: 'Generate and save QR code images for any URL or text',
    views: '7.9k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># pip install qrcode pillow</span><br><span class="kw">import</span> qrcode<br><br><span class="kw">def</span> <span class="fn">create_qr</span>(url, filename=<span class="str">"qr.png"</span>):<br>&nbsp;&nbsp;qr = qrcode.QRCode(version=<span class="str">1</span>)<br>&nbsp;&nbsp;qr.add_data(url)<br>&nbsp;&nbsp;qr.make(fit=<span class="kw">True</span>)<br>&nbsp;&nbsp;img = qr.make_image()<br>&nbsp;&nbsp;img.save(filename)<br>&nbsp;&nbsp;print(<span class="str">f"Saved: {filename}"</span>)</div>`,
    code: `# pip install qrcode pillow\nimport qrcode\n\ndef create_qr_code(\n    data: str,\n    filename: str = "qr_code.png"\n):\n    """Generate a QR code image file."""\n    qr = qrcode.QRCode(\n        version=1, box_size=10, border=4\n    )\n    qr.add_data(data)\n    qr.make(fit=True)\n    img = qr.make_image(\n        fill_color="black",\n        back_color="white"\n    )\n    img.save(filename)\n    print(f"QR code saved: {filename}")\n\ncreate_qr_code("https://mycodewebsite.netlify.app")`
  },
  {
    id: 26, lang: 'python',
    title: 'Web Scraper',
    desc: 'Scrape headings and links from any webpage with BeautifulSoup',
    views: '11.4k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># pip install requests beautifulsoup4</span><br><span class="kw">import</span> requests<br><span class="kw">from</span> bs4 <span class="kw">import</span> BeautifulSoup<br><br><span class="kw">def</span> <span class="fn">scrape</span>(url):<br>&nbsp;&nbsp;r = requests.get(url)<br>&nbsp;&nbsp;soup = BeautifulSoup(r.text,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'html.parser'</span>)<br>&nbsp;&nbsp;<span class="kw">return</span> [h.text <span class="kw">for</span> h<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">in</span> soup.find_all(<span class="str">'h2'</span>)]</div>`,
    code: `# pip install requests beautifulsoup4\nimport requests\nfrom bs4 import BeautifulSoup\n\ndef scrape_page(url: str):\n    """Scrape headings and links from a webpage."""\n    headers = {'User-Agent': 'Mozilla/5.0'}\n    response = requests.get(url, headers=headers)\n    soup = BeautifulSoup(response.text, 'html.parser')\n    headings = [h.get_text(strip=True)\n                for h in soup.find_all(['h1','h2','h3'])]\n    links = [a['href'] for a in\n             soup.find_all('a', href=True)]\n    return {'headings': headings, 'links': links}\n\ndata = scrape_page('https://example.com')\nprint(data['headings'])`
  },
  {
    id: 27, lang: 'python',
    title: 'Send Email Automatically',
    desc: 'Automate sending emails via Gmail using Python smtplib',
    views: '9.7k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># Send email with Python</span><br><span class="kw">import</span> smtplib<br><span class="kw">from</span> email.mime.text <span class="kw">import</span> MIMEText<br><br><span class="kw">def</span> <span class="fn">send_email</span>(to, subject, body):<br>&nbsp;&nbsp;msg = MIMEText(body)<br>&nbsp;&nbsp;msg[<span class="str">'Subject'</span>] = subject<br>&nbsp;&nbsp;msg[<span class="str">'To'</span>] = to<br>&nbsp;&nbsp;<span class="cm"># Send via Gmail SMTP</span></div>`,
    code: `import smtplib\nfrom email.mime.text import MIMEText\nfrom email.mime.multipart import MIMEMultipart\n\ndef send_email(\n    to: str, subject: str, body: str,\n    sender: str = "you@gmail.com",\n    password: str = "your_app_password"\n):\n    msg = MIMEMultipart()\n    msg['From'] = sender\n    msg['To'] = to\n    msg['Subject'] = subject\n    msg.attach(MIMEText(body, 'plain'))\n    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:\n        smtp.login(sender, password)\n        smtp.send_message(msg)\n        print("Email sent!")\n\nsend_email("friend@gmail.com", "Hello!", "Hi there!")`
  },
  {
    id: 28, lang: 'python',
    title: 'CSV Reader and Writer',
    desc: 'Read, filter and write CSV files using Python csv module',
    views: '6.8k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># CSV Reader and Writer</span><br><span class="kw">import</span> csv<br><br><span class="kw">with</span> open(<span class="str">'data.csv'</span>) <span class="kw">as</span> f:<br>&nbsp;&nbsp;reader = csv.DictReader(f)<br>&nbsp;&nbsp;<span class="kw">for</span> row <span class="kw">in</span> reader:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(row[<span class="str">'name'</span>],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;row[<span class="str">'email'</span>])</div>`,
    code: `import csv\nfrom pathlib import Path\n\ndef read_csv(filepath: str) -> list[dict]:\n    """Read a CSV file into a list of dicts."""\n    with open(filepath, newline='',\n              encoding='utf-8') as f:\n        return list(csv.DictReader(f))\n\ndef write_csv(filepath: str, data: list[dict]):\n    """Write list of dicts to a CSV file."""\n    if not data:\n        return\n    with open(filepath, 'w', newline='',\n              encoding='utf-8') as f:\n        writer = csv.DictWriter(\n            f, fieldnames=data[0].keys())\n        writer.writeheader()\n        writer.writerows(data)\n    print(f"Saved {len(data)} rows.")\n\nrows = read_csv('users.csv')\nprint(rows[0])`
  },
  {
    id: 29, lang: 'python',
    title: 'Image Resizer',
    desc: 'Batch resize images to any dimension using Python Pillow',
    views: '5.4k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># pip install pillow</span><br><span class="kw">from</span> PIL <span class="kw">import</span> Image<br><span class="kw">from</span> pathlib <span class="kw">import</span> Path<br><br><span class="kw">def</span> <span class="fn">resize</span>(src, out, size):<br>&nbsp;&nbsp;<span class="kw">with</span> Image.open(src) <span class="kw">as</span> img:<br>&nbsp;&nbsp;&nbsp;&nbsp;img.thumbnail(size)<br>&nbsp;&nbsp;&nbsp;&nbsp;img.save(out, quality=<span class="str">90</span>)</div>`,
    code: `# pip install pillow\nfrom PIL import Image\nfrom pathlib import Path\n\ndef resize_image(\n    input_path: str,\n    output_path: str,\n    size: tuple = (800, 600)\n):\n    """Resize an image maintaining aspect ratio."""\n    with Image.open(input_path) as img:\n        img.thumbnail(size, Image.LANCZOS)\n        img.save(output_path, quality=90)\n        print(f"Saved: {output_path} {img.size}")\n\nfor img_path in Path('./images').glob('*.jpg'):\n    resize_image(str(img_path), f"resized_{img_path.name}")`
  },
  {
    id: 30, lang: 'python',
    title: 'Number Guessing Game',
    desc: 'Interactive Python CLI number guessing game with hints',
    views: '4.8k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># Number Guessing Game</span><br><span class="kw">import</span> random<br><br>secret = random.randint(<span class="str">1</span>, <span class="str">100</span>)<br><span class="kw">while True</span>:<br>&nbsp;&nbsp;guess = int(input(<span class="str">"Guess (1-100): "</span>))<br>&nbsp;&nbsp;<span class="kw">if</span> guess == secret:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="str">"🎉 Correct!"</span>)<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">break</span></div>`,
    code: `import random\n\ndef number_guessing_game(min_n=1, max_n=100):\n    """Play an interactive number guessing game."""\n    secret = random.randint(min_n, max_n)\n    attempts = 0\n    print(f"Guess a number between {min_n} and {max_n}")\n    while True:\n        try:\n            guess = int(input("Your guess: "))\n            attempts += 1\n            if guess < secret:\n                print("Too low! Try higher.")\n            elif guess > secret:\n                print("Too high! Try lower.")\n            else:\n                print(f"Correct! Won in {attempts} attempts!")\n                break\n        except ValueError:\n            print("Please enter a valid number.")\n\nnumber_guessing_game()`
  },
  {
    id: 31, lang: 'css',
    title: 'Responsive Image Gallery Grid',
    desc: 'CSS Grid masonry-style image gallery layout that adapts to screen size',
    views: '6.9k',
    preview: `<style>body{margin:0;background:#0a0e1a;padding:8px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.grid div{height:50px;border-radius:6px;background:linear-gradient(135deg,#3b82f6,#8b5cf6)}.grid div:nth-child(2){background:linear-gradient(135deg,#ec4899,#f59e0b)}.grid div:nth-child(3){background:linear-gradient(135deg,#10b981,#06b6d4)}.grid div:nth-child(5){background:linear-gradient(135deg,#f59e0b,#ef4444)}</style><div class="grid"><div></div><div></div><div></div><div></div><div></div><div></div></div>`,
    code: `.gallery {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.gallery img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n}`
  },
  {
    id: 32, lang: 'css',
    title: 'CSS Accordion (FAQ)',
    desc: 'Expandable accordion FAQ section using pure CSS details element',
    views: '8.1k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:sans-serif;padding:12px}details{background:#111827;border:1px solid #1e2d45;border-radius:8px;padding:10px 14px;width:240px;color:#fff;margin-bottom:6px}summary{cursor:pointer;font-size:.85rem;font-weight:600}details p{font-size:.78rem;color:#9ca3af;margin-top:8px}</style><div><details open><summary>What is SnipVault?</summary><p>A free library of code snippets for developers.</p></details><details><summary>Is it free?</summary><p>Yes, 100% free, no signup required.</p></details></div>`,
    code: `<details class="accordion-item">\n  <summary>What is SnipVault?</summary>\n  <p>A free library of code snippets\n     for developers.</p>\n</details>\n\n<style>\n.accordion-item {\n  background: #111827;\n  border: 1px solid #1e2d45;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 8px;\n}\n.accordion-item summary {\n  cursor: pointer;\n  font-weight: 600;\n}\n</style>`
  },
  {
    id: 33, lang: 'css',
    title: 'Animated Underline Link',
    desc: 'Text link with smooth animated underline that grows on hover',
    views: '5.2k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:sans-serif}.link{color:#fff;text-decoration:none;font-size:1.1rem;position:relative;padding-bottom:4px}.link::after{content:'';position:absolute;left:0;bottom:0;width:0;height:2px;background:#3b82f6;transition:width .3s}.link:hover::after{width:100%}</style><a href="#" class="link">Hover this link</a>`,
    code: `.animated-link {\n  position: relative;\n  text-decoration: none;\n  padding-bottom: 4px;\n}\n.animated-link::after {\n  content: '';\n  position: absolute;\n  left: 0; bottom: 0;\n  width: 0; height: 2px;\n  background: #3b82f6;\n  transition: width 0.3s;\n}\n.animated-link:hover::after {\n  width: 100%;\n}`
  },
  {
    id: 34, lang: 'css',
    title: 'CSS Badge / Tag Chips',
    desc: 'Colorful rounded tag chips for categories or labels',
    views: '4.7k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:sans-serif;gap:6px}.chip{padding:5px 14px;border-radius:99px;font-size:.75rem;font-weight:600}.c1{background:rgba(59,130,246,.15);color:#60a5fa}.c2{background:rgba(16,185,129,.15);color:#34d399}.c3{background:rgba(245,158,11,.15);color:#fbbf24}</style><span class="chip c1">Design</span><span class="chip c2">Free</span><span class="chip c3">New</span>`,
    code: `.chip {\n  display: inline-block;\n  padding: 5px 14px;\n  border-radius: 99px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: rgba(59,130,246,0.15);\n  color: #60a5fa;\n}`
  },
  {
    id: 35, lang: 'css',
    title: 'CSS Image Hover Zoom',
    desc: 'Smooth image zoom effect on hover with overflow clip',
    views: '7.4k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a}.box{width:160px;height:100px;border-radius:10px;overflow:hidden}.box div{width:100%;height:100%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);transition:transform .4s}.box:hover div{transform:scale(1.15)}</style><div class="box"><div></div></div>`,
    code: `.zoom-wrap {\n  overflow: hidden;\n  border-radius: 10px;\n}\n.zoom-wrap img {\n  width: 100%;\n  transition: transform 0.4s;\n}\n.zoom-wrap:hover img {\n  transform: scale(1.15);\n}`
  },
  {
    id: 36, lang: 'js',
    title: 'Currency Converter',
    desc: 'Convert between currencies using a simple JavaScript exchange rate object',
    views: '8.6k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#111827;font-family:sans-serif}.w{color:#fff;text-align:center;width:220px}input,select{width:100%;padding:8px;background:#1e293b;border:1px solid #374151;border-radius:8px;color:#fff;margin-bottom:8px;font-size:.82rem;box-sizing:border-box}button{width:100%;padding:9px;background:#3b82f6;color:#fff;border:none;border-radius:8px;cursor:pointer}#res{margin-top:10px;color:#34d399;font-weight:600}</style><div class="w"><input type="number" id="amt" placeholder="Amount in USD" value="100"><button onclick="let r={USD:1,EUR:.92,GBP:.79,PKR:278};document.getElementById('res').textContent='= '+(document.getElementById('amt').value*r.PKR).toFixed(2)+' PKR'">Convert to PKR</button><p id="res" aria-live="polite"></p></div>`,
    code: `const rates = { USD: 1, EUR: 0.92, GBP: 0.79, PKR: 278 };\n\nfunction convertCurrency(amount, from, to) {\n  const usdAmount = amount / rates[from];\n  const converted = usdAmount * rates[to];\n  return converted.toFixed(2);\n}\n\nconsole.log(convertCurrency(100, 'USD', 'PKR'));\n// "27800.00"`
  },
  {
    id: 37, lang: 'js',
    title: 'Color Picker Tool',
    desc: 'Pick a color and instantly see its hex code with copy button',
    views: '6.1k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#111827;font-family:sans-serif}.w{text-align:center;color:#fff}input[type=color]{width:60px;height:60px;border:none;border-radius:10px;cursor:pointer;background:none}#hex{margin-top:10px;font-family:monospace;background:#1e293b;padding:6px 14px;border-radius:6px;display:inline-block;font-size:.85rem}</style><div class="w"><input type="color" value="#3b82f6" oninput="document.getElementById('hex').textContent=this.value" aria-label="Pick a color"><p id="hex">#3b82f6</p></div>`,
    code: `const colorInput = document.getElementById('color');\nconst hexDisplay = document.getElementById('hex');\n\ncolorInput.addEventListener('input', (e) => {\n  hexDisplay.textContent = e.target.value;\n});\n\nfunction copyHex() {\n  navigator.clipboard.writeText(hexDisplay.textContent);\n}`
  },
  {
    id: 38, lang: 'js',
    title: 'Image Slider / Carousel',
    desc: 'Simple JavaScript image carousel with next and previous buttons',
    views: '13.2k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:sans-serif}.slider{width:200px;text-align:center}.slide{height:90px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.3rem;margin-bottom:8px}.nav{display:flex;justify-content:space-between}.nav button{background:#1a2235;color:#fff;border:1px solid #1e2d45;border-radius:6px;padding:6px 14px;cursor:pointer}</style><div class="slider"><div class="slide" id="sl" style="background:linear-gradient(135deg,#3b82f6,#8b5cf6)">1</div><div class="nav"><button onclick="let s=document.getElementById('sl'),n=(+s.textContent-2+3)%3+1,c=['linear-gradient(135deg,#3b82f6,#8b5cf6)','linear-gradient(135deg,#ec4899,#f59e0b)','linear-gradient(135deg,#10b981,#06b6d4)'];s.textContent=n;s.style.background=c[n-1]">&#8592; Prev</button><button onclick="let s=document.getElementById('sl'),n=(+s.textContent%3)+1,c=['linear-gradient(135deg,#3b82f6,#8b5cf6)','linear-gradient(135deg,#ec4899,#f59e0b)','linear-gradient(135deg,#10b981,#06b6d4)'];s.textContent=n;s.style.background=c[n-1]">Next &#8594;</button></div></div>`,
    code: `let currentSlide = 0;\nconst slides = document.querySelectorAll('.slide');\n\nfunction showSlide(index) {\n  slides.forEach(s => s.style.display = 'none');\n  slides[index].style.display = 'block';\n}\n\nfunction nextSlide() {\n  currentSlide = (currentSlide + 1) % slides.length;\n  showSlide(currentSlide);\n}\n\nfunction prevSlide() {\n  currentSlide = (currentSlide - 1 + slides.length) % slides.length;\n  showSlide(currentSlide);\n}`
  },
  {
    id: 39, lang: 'js',
    title: 'Typing Animation Effect',
    desc: 'Animated typewriter text effect using JavaScript setInterval',
    views: '9.4k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}#type{color:#34d399;font-size:1.1rem}#type::after{content:'|';animation:blink 1s infinite}@keyframes blink{50%{opacity:0}}</style><span id="type"></span><script>let txt="Welcome to SnipVault!",i=0;function t(){if(i<txt.length){document.getElementById('type').textContent+=txt[i++];setTimeout(t,100)}}t()<\/script>`,
    code: `function typeWriter(text, elementId, speed = 100) {\n  let i = 0;\n  const el = document.getElementById(elementId);\n  el.textContent = '';\n\n  function type() {\n    if (i < text.length) {\n      el.textContent += text.charAt(i);\n      i++;\n      setTimeout(type, speed);\n    }\n  }\n  type();\n}\n\ntypeWriter('Welcome to SnipVault!', 'typewriter');`
  },
  {
    id: 40, lang: 'js',
    title: 'Star Rating with JavaScript',
    desc: 'Interactive clickable star rating system with JavaScript event handling',
    views: '7.8k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a}.stars span{font-size:1.8rem;color:#374151;cursor:pointer;transition:color .15s}.stars span.active{color:#f59e0b}</style><div class="stars" id="rate" onclick="if(event.target.tagName==='SPAN'){let v=+event.target.dataset.v;document.querySelectorAll('#rate span').forEach(s=>s.classList.toggle('active',+s.dataset.v<=v))}"><span data-v="1">&#9733;</span><span data-v="2">&#9733;</span><span data-v="3">&#9733;</span><span data-v="4">&#9733;</span><span data-v="5">&#9733;</span></div>`,
    code: `const stars = document.querySelectorAll('.star');\n\nstars.forEach((star, index) => {\n  star.addEventListener('click', () => {\n    stars.forEach((s, i) => {\n      s.classList.toggle('active', i <= index);\n    });\n    console.log('Rating:', index + 1);\n  });\n});`
  },
  {
    id: 41, lang: 'python',
    title: 'PDF Merger Script',
    desc: 'Merge multiple PDF files into a single PDF using Python pypdf',
    views: '6.5k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># pip install pypdf</span><br><span class="kw">from</span> pypdf <span class="kw">import</span> PdfWriter<br><br>merger = PdfWriter()<br><span class="kw">for</span> pdf <span class="kw">in</span> [<span class="str">"a.pdf"</span>,<span class="str">"b.pdf"</span>]:<br>&nbsp;&nbsp;merger.append(pdf)<br>merger.write(<span class="str">"merged.pdf"</span>)<br>print(<span class="str">"Merged!"</span>)</div>`,
    code: `# pip install pypdf\nfrom pypdf import PdfWriter\n\ndef merge_pdfs(pdf_list, output_path):\n    """Merge multiple PDF files into one."""\n    merger = PdfWriter()\n    for pdf in pdf_list:\n        merger.append(pdf)\n    merger.write(output_path)\n    merger.close()\n    print(f"Merged {len(pdf_list)} PDFs into {output_path}")\n\nmerge_pdfs(\n    ["report1.pdf", "report2.pdf"],\n    "merged_report.pdf"\n)`
  },
  {
    id: 42, lang: 'python',
    title: 'Simple To-Do List CLI',
    desc: 'Command-line to-do list app with add, view, and delete using Python',
    views: '5.7k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># Simple To-Do CLI</span><br>tasks = []<br><br><span class="kw">def</span> <span class="fn">add_task</span>(t):<br>&nbsp;&nbsp;tasks.append(t)<br>&nbsp;&nbsp;print(<span class="str">f"Added: {t}"</span>)<br><br><span class="kw">def</span> <span class="fn">show_tasks</span>():<br>&nbsp;&nbsp;<span class="kw">for</span> i, t <span class="kw">in</span> enumerate(tasks,1):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="str">f"{i}. {t}"</span>)</div>`,
    code: `tasks = []\n\ndef add_task(task):\n    tasks.append(task)\n    print(f"Added: {task}")\n\ndef show_tasks():\n    if not tasks:\n        print("No tasks yet!")\n        return\n    for i, task in enumerate(tasks, 1):\n        print(f"{i}. {task}")\n\ndef delete_task(index):\n    removed = tasks.pop(index - 1)\n    print(f"Removed: {removed}")\n\nadd_task("Learn Python")\nadd_task("Build a project")\nshow_tasks()`
  },
  {
    id: 43, lang: 'python',
    title: 'Currency Converter Script',
    desc: 'Convert between currencies using a live exchange rate API in Python',
    views: '7.2k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># pip install requests</span><br><span class="kw">import</span> requests<br><br><span class="kw">def</span> <span class="fn">convert</span>(amt, frm, to):<br>&nbsp;&nbsp;url = <span class="str">f"https://api.exchangerate-api.com/v4/latest/{frm}"</span><br>&nbsp;&nbsp;data = requests.get(url).json()<br>&nbsp;&nbsp;rate = data[<span class="str">'rates'</span>][to]<br>&nbsp;&nbsp;<span class="kw">return</span> round(amt * rate, <span class="str">2</span>)</div>`,
    code: `# pip install requests\nimport requests\n\ndef convert_currency(amount, from_curr, to_curr):\n    """Convert currency using live exchange rates."""\n    url = f"https://api.exchangerate-api.com/v4/latest/{from_curr}"\n    response = requests.get(url)\n    data = response.json()\n    rate = data['rates'][to_curr]\n    return round(amount * rate, 2)\n\nresult = convert_currency(100, 'USD', 'PKR')\nprint(f"100 USD = {result} PKR")`
  },
  {
    id: 44, lang: 'python',
    title: 'Word Frequency Counter',
    desc: 'Count and rank the most frequent words in any text file using Python',
    views: '5.9k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># Word Frequency Counter</span><br><span class="kw">from</span> collections <span class="kw">import</span> Counter<br><br>text = open(<span class="str">"file.txt"</span>).read()<br>words = text.lower().split()<br>freq = Counter(words)<br><span class="kw">for</span> w, c <span class="kw">in</span> freq.most_common(<span class="str">5</span>):<br>&nbsp;&nbsp;print(w, c)</div>`,
    code: `from collections import Counter\nimport re\n\ndef word_frequency(filepath, top_n=10):\n    """Find the most common words in a text file."""\n    with open(filepath, 'r', encoding='utf-8') as f:\n        text = f.read().lower()\n    words = re.findall(r'\\b[a-z]+\\b', text)\n    counter = Counter(words)\n    return counter.most_common(top_n)\n\nfor word, count in word_frequency('article.txt'):\n    print(f"{word}: {count}")`
  },
  {
    id: 45, lang: 'python',
    title: 'Simple Weather Checker',
    desc: 'Fetch current weather data for any city using Python requests',
    views: '8.9k',
    preview: `<style>body{display:flex;align-items:center;justify-content:center;height:100%;margin:0;background:#0a0e1a;font-family:monospace}.output{background:#111827;border:1px solid #1e2d45;border-radius:12px;padding:20px;color:#a8b4c8;font-size:.82rem;line-height:1.8}.cm{color:#4b5e7a}.kw{color:#7dd3fc}.fn{color:#c084fc}.str{color:#86efac}</style><div class="output"><span class="cm"># pip install requests</span><br><span class="kw">import</span> requests<br><br><span class="kw">def</span> <span class="fn">get_weather</span>(city):<br>&nbsp;&nbsp;key = <span class="str">"YOUR_API_KEY"</span><br>&nbsp;&nbsp;url = <span class="str">f"api.openweathermap.org/...&q={city}"</span><br>&nbsp;&nbsp;data = requests.get(url).json()<br>&nbsp;&nbsp;<span class="kw">return</span> data[<span class="str">'main'</span>][<span class="str">'temp'</span>]</div>`,
    code: `# pip install requests\nimport requests\n\ndef get_weather(city, api_key):\n    """Get current temperature for a city."""\n    url = (\n        f"https://api.openweathermap.org/data/2.5/weather"\n        f"?q={city}&appid={api_key}&units=metric"\n    )\n    response = requests.get(url)\n    data = response.json()\n    temp = data['main']['temp']\n    desc = data['weather'][0]['description']\n    return f"{city}: {temp}°C, {desc}"\n\nprint(get_weather("Karachi", "your_api_key_here"))`
  }
];


/* ── State ── */
let currentLang  = 'all';
let searchQuery  = '';

/* ── Render Snippets ── */
function renderSnippets() {
  const grid = document.getElementById('snippetGrid');

  const filtered = snippets.filter(s => {
    const matchLang =
      currentLang === 'all'
      || s.lang === currentLang
      || (currentLang === 'html' && s.lang === 'css')
      || (currentLang === 'css'  && s.lang === 'html');

    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q
      || s.title.toLowerCase().includes(q)
      || s.desc.toLowerCase().includes(q);

    return matchLang && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" role="status">
        <p>No snippets found for "<strong>${escHtml(searchQuery)}</strong>"</p>
        <p style="font-size:.85rem;margin-top:8px">Try a different keyword</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(s => {
    const tagClass  = s.lang === 'css' ? 'tag-css' : s.lang === 'js' ? 'tag-js' : 'tag-py';
    const tagLabel  = s.lang === 'css' ? '&#9670; CSS/HTML' : s.lang === 'js' ? '&#9889; JavaScript' : '&#128013; Python';
    const langLabel = s.lang === 'python' ? 'python' : 'html / css / js';

    return `
    <article class="card" data-lang="${s.lang}" role="listitem"
      aria-label="${escHtml(s.title)} snippet">

      <header class="card-header">
        <span class="card-tag ${tagClass}">${tagLabel}</span>
        <h2 class="card-title">${escHtml(s.title)}</h2>
        <p class="card-desc">${escHtml(s.desc)}</p>
      </header>

      ${s.preview ? `
      <div class="preview-box" id="prev-${s.id}"
        aria-label="Live preview of ${escHtml(s.title)}">
        <iframe
          srcdoc="${s.preview.replace(/"/g, '&quot;')}"
          sandbox="allow-scripts"
          title="${escHtml(s.title)} preview"
          loading="lazy">
        </iframe>
      </div>` : ''}

      <div class="code-wrap">
        <div class="code-topbar">
          <span class="code-lang">${langLabel}</span>
          <button class="copy-btn"
            onclick="copyCode(this, ${s.id})"
            aria-label="Copy ${escHtml(s.title)} code">
            Copy
          </button>
        </div>
        <pre><code id="code-${s.id}">${escHtml(s.code)}</code></pre>
      </div>

      <footer class="card-footer">
        <span class="card-views">&#128065; ${s.views}</span>
        ${s.preview ? `
        <button class="toggle-preview"
          onclick="togglePreview(${s.id})"
          aria-label="Toggle preview">
          Hide preview
        </button>` : ''}
      </footer>
    </article>`;
  }).join('');
}

/* ── Helpers ── */
function escHtml(str) {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;');
}

function copyCode(btn, id) {
  const snippet = snippets.find(s => s.id === id);
  if (!snippet) return;
  navigator.clipboard.writeText(snippet.code)
    .then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    })
    .catch(() => {
      btn.textContent = 'Failed';
      setTimeout(() => btn.textContent = 'Copy', 2000);
    });
}

function togglePreview(id) {
  const prev = document.getElementById('prev-' + id);
  if (!prev) return;
  const isHidden = prev.style.display === 'none';
  prev.style.display = isHidden ? 'block' : 'none';
  const btn = prev.closest('article').querySelector('.toggle-preview');
  btn.textContent = isHidden ? 'Hide preview' : 'Show preview';
}

/* ── Filters ── */
function filterByLang(lang, btn) {
  currentLang = lang;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  renderSnippets();
  document.getElementById('snippets')
    .scrollIntoView({ behavior: 'smooth' });
}

function filterSnippets() {
  searchQuery = document.getElementById('searchInput').value;
  renderSnippets();
}

function navFilter(lang) {
  currentLang = lang;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  const map  = { all: 0, html: 1, js: 2, python: 3 };
  const btns = document.querySelectorAll('.filter-btn');
  if (btns[map[lang]]) {
    btns[map[lang]].classList.add('active');
    btns[map[lang]].setAttribute('aria-pressed', 'true');
  }
  renderSnippets();
}

/* ── Init ── */
renderSnippets();
