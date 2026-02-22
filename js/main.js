/* ================================================
   ZAIN TOOLS HUB — Shared JavaScript
   Version: 2.0 Professional
   ================================================ */

/* ================================================
   ACCOUNTS LIST (Used by ASIN 900 & Voucher Tool)
   ================================================ */
const ACCOUNTS_LIST = [
    'zohabe', 'zohase', 'zohauk', 'zohanl', 'zohait', 'zohafr', 'zohaes', 'zohade',
    'gojnjp',
    'daxube', 'daxuse', 'daxuuk', 'daxunl', 'daxuit', 'daxufr', 'daxues', 'daxude',
    'ainyuk', 'ainyfr', 'ainyit', 'ainybe', 'ainyde', 'ainyse', 'ainyes', 'ainynl',
    'yopiuk', 'yopise', 'yopibe', 'yopinl', 'yopiit', 'yopifr', 'yopies', 'yopide',
    'nuisuk', 'nuisde', 'nuisfr', 'nuises', 'nuisit', 'nuisnl', 'nuisse', 'nuisbe',
    'habouk', 'habode', 'haboes', 'habofr', 'haboit', 'habonl', 'habose', 'habojp', 'habobe',
    'wontuk', 'wontde', 'wontes', 'wontfr', 'wontit', 'wontnl', 'wontse', 'wontbe',
    'bisrbe', 'bisrse', 'bisrnl', 'bisrit', 'bisrfr', 'bisres', 'bisrde', 'bisruk',
    'senrobe', 'senrose', 'senrouk', 'senronl', 'senroit', 'senrofr', 'senroes', 'senrode',
    'qileibe', 'qileise', 'qileiuk', 'qileinl', 'qileiit', 'qileifr', 'qileies', 'qileide',
    'yaubbe', 'yaubse', 'yaubuk', 'yaubnl', 'yaubit', 'yaubfr', 'yaubes', 'yaubde',
    'wgqabe', 'wgqase', 'wgqauk', 'wgqanl', 'wgqait', 'wgqafr', 'wgqaes', 'wgqade',
    'hiaodbe', 'hiaodse', 'hiaoduk', 'hiaodnl', 'hiaodit', 'hiaodfr', 'hiaodes', 'hiaodde',
    'celiauk', 'celiade', 'celiafr', 'celiaes', 'celiait', 'celianl', 'celiase', 'celiabe',
    'liuyuk', 'liuyde', 'liuyfr', 'liuyes', 'liuyit', 'liuynl', 'liuyse', 'liuybe',
    'neiabe', 'neiase', 'neianl', 'neiait', 'neiafr', 'neiaes', 'neiade', 'neiauk',
    'gkzxfus', 'gkzxfca', 'gkzxfmx',
    'yfeide', 'yfeise', 'yfeiuk', 'yfeinl', 'yfeiit', 'yfeifr', 'yfeies', 'yfeibe',
    'priobe', 'priose', 'prionl', 'prioit', 'priofr', 'prioes', 'priode', 'priouk',
    'cordbe', 'cordse', 'cordnl', 'cordit', 'cordfr', 'cordes', 'cordde', 'corduk',
    'bodakbe', 'bodakse', 'bodakuk', 'bodaknl', 'bodakit', 'bodakfr', 'bodakes', 'bodakde',
    'llclbuk', 'llclbse', 'llclbbe', 'llclbnl', 'llclbit', 'llclbfr', 'llclbes', 'llclbde'
];

const ALLOWED_SET = new Set(ACCOUNTS_LIST);

/* ================================================
   BRAND GROUPS — Auto-group accounts by prefix
   ================================================ */
function getBrandGroups(accountsList) {
    const prefixMap = {};
    accountsList.forEach(acc => {
        const prefix = acc.replace(/(uk|de|fr|es|it|nl|be|se|jp|us|ca|mx|au)$/, '');
        if (!prefixMap[prefix]) prefixMap[prefix] = [];
        prefixMap[prefix].push(acc);
    });
    return prefixMap;
}

/* ================================================
   TOAST NOTIFICATION SYSTEM
   ================================================ */
function showToast(msg, isError = false) {
    const t = document.createElement('div');
    t.className = `toast ${isError ? 'error' : ''}`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
        t.style.opacity = '0';
        t.style.transform = 'translateX(300px)';
        t.style.transition = 'all 0.3s ease';
        setTimeout(() => t.remove(), 300);
    }, 2500);
}

/* ================================================
   ACTIVE NAV LINK HIGHLIGHTER
   Automatically highlights current page link
   ================================================ */
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const href = btn.getAttribute('href') || '';
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', highlightActiveNav);
