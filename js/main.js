/* ================================================
   ZAIN TOOLS HUB — Shared JavaScript
   Version: 3.0 Professional
   ================================================ */

/* ================================================
   ACCOUNTS LIST (Used by ASIN 900 & Voucher Tool)
   ================================================ */
const ACCOUNTS_LIST = [
    'zohabe','zohase','zohauk','zohanl','zohait','zohafr','zohaes','zohade',
    'daxube','daxuse','daxuuk','daxunl','daxuit','daxufr','daxues','daxude',
    'ainyuk','ainyfr','ainyit','ainybe','ainyde','ainyse','ainyes','ainynl',
    'yopiuk','yopise','yopibe','yopinl','yopiit','yopifr','yopies','yopide',
    'nuisuk','nuisde','nuisfr','nuises','nuisit','nuisnl','nuisse','nuisbe',
    'habouk','habode','haboes','habofr','haboit','habonl','habose','habojp','habobe',
    'wontuk','wontde','wontes','wontfr','wontit','wontnl','wontse','wontbe',
    'bisrbe','bisrse','bisrnl','bisrit','bisrfr','bisres','bisrde','bisruk',
    'senrobe','senrose','senrouk','senronl','senroit','senrofr','senroes','senrode',
    'qileibe','qileise','qileiuk','qileinl','qileiit','qileifr','qileies','qileide',
    'yaubbe','yaubse','yaubuk','yaubnl','yaubit','yaubfr','yaubes','yaubde',
    'wgqabe','wgqase','wgqauk','wgqanl','wgqait','wgqafr','wgqaes','wgqade',
    'hiaodbe','hiaodse','hiaoduk','hiaodnl','hiaodit','hiaodfr','hiaodes','hiaodde',
    'celiauk','celiade','celiafr','celiaes','celiait','celianl','celiase','celiabe',
    'liuyuk','liuyde','liuyfr','liuyes','liuyit','liuynl','liuyse','liuybe',
    'neiabe','neiase','neianl','neiait','neiafr','neiaes','neiade','neiauk',
    'gkzxfus','gkzxfca','gkzxfmx',
    'gojnjp',
    'yfeide','yfeise','yfeiuk','yfeinl','yfeiit','yfeifr','yfeies','yfeibe',
    'priobe','priose','prionl','prioit','priofr','prioes','priode','priouk',
    'cordbe','cordse','cordnl','cordit','cordfr','cordes','cordde','corduk',
    'tayxbe','tayxse','tayxnl','tayxit','tayxfr','tayxes','tayxde','tayxuk',
    'bodakbe','bodakse','bodakuk','bodaknl','bodakit','bodakfr','bodakes','bodakde',
    'llclbuk','llclbse','llclbbe','llclbnl','llclbit','llclbfr','llclbes','llclbde'
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
        t.style.transform = 'translateX(120%)';
        t.style.transition = 'all 0.3s ease';
        setTimeout(() => t.remove(), 300);
    }, 2500);
}

/* ================================================
   ACTIVE NAV LINK HIGHLIGHTER
   ================================================ */
function highlightActiveNav() {
    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const href = btn.getAttribute('href') || '';
        const hrefPage = href.split('/').pop();
        if (hrefPage === currentPage || (currentPage === '' && hrefPage === 'index.html')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/* ================================================
   MOBILE NAV TOGGLE
   ================================================ */
function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
        });
        // Close on link click
        links.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => links.classList.remove('open'));
        });
    }
}

/* ================================================
   CLIPBOARD HELPER
   ================================================ */
function copyToClipboard(text) {
    return navigator.clipboard.writeText(text).catch(() => {
        const tmp = document.createElement('textarea');
        tmp.value = text;
        tmp.style.position = 'fixed';
        tmp.style.opacity = '0';
        document.body.appendChild(tmp);
        tmp.select();
        try { document.execCommand('copy'); }
        catch(e) { /* fallback failed */ }
        document.body.removeChild(tmp);
    });
}

/* ================================================
   VARIANT MAPS (Used by Tool 5 & Tool 6)
   ================================================ */

// Tool 5 — Safe Character Map for Duplicate Variator
// Only characters confirmed safe on Amazon EU
const VARIATOR_SAFE_MAP = {
    'a': ['à','â','ā'],
    'c': ['ç','ć'],
    'e': ['è','ê','ë','ē'],
    'i': ['ì','î','ï','ī'],
    'l': ['ĺ','ļ'],
    'n': ['ñ','ń'],
    'o': ['ò','ô','ö','ō','ø'],
    'r': ['ŕ'],
    's': ['ś','š','ş'],
    't': ['ţ','ť'],
    'u': ['ù','û','ü','ū'],
    'y': ['ÿ','ý'],
    'z': ['ź','ž','ż']
};

// Tool 6 — Full Variant Map for normalization/deduplication
const VARIANT_MAP = {
    'a': ['á','à','â','ä','ã','ā','ă'],
    'c': ['ç','ć','č','ĉ'],
    'd': ['ď','đ'],
    'e': ['é','è','ê','ë','ē','ė','ě'],
    'g': ['ģ','ğ','ĝ','ġ','ǵ'],
    'h': ['ĥ','ḧ'],
    'i': ['í','ì','î','ï','ī','į','ĩ'],
    'k': ['ķ','ḱ'],
    'l': ['ļ','ľ','ł','ĺ'],
    'n': ['ñ','ń','ņ','ň'],
    'o': ['ó','ò','ô','ö','õ','ō','ø','ő'],
    'r': ['ŕ','ř','ŗ'],
    's': ['ś','š','ş','ș'],
    't': ['ţ','ť','ŧ','ṫ'],
    'u': ['ú','ù','û','ü','ū','ů','ű','ũ'],
    'w': ['ẃ','ẁ','ŵ','ẇ'],
    'y': ['ý','ÿ','ŷ','ỳ'],
    'z': ['ź','ž','ż']
};

// Build reverse map: variant char -> base letter
const VARIANT_REVERSE_MAP = (() => {
    const rev = {};
    for (const [base, variants] of Object.entries(VARIANT_MAP)) {
        for (const v of variants) {
            rev[v] = base;
        }
    }
    return rev;
})();

/* ================================================
   NORMALIZE KEY (Used by Tool 6)
   ================================================ */
function normalizeKey(str) {
    if (!str) return '';
    // Step 1: lowercase
    let tmp = str.toLowerCase();
    // Step 2: apply VARIANT_REVERSE_MAP
    tmp = [...tmp].map(ch => VARIANT_REVERSE_MAP[ch] ?? ch).join('');
    // Step 3: NFKD normalize
    let key = tmp.normalize('NFKD');
    // Step 4: strip combining marks
    key = key.replace(/\p{M}+/gu, '');
    // Step 5: apply VARIANT_REVERSE_MAP again
    key = [...key].map(ch => VARIANT_REVERSE_MAP[ch] ?? ch).join('');
    // Step 6: collapse connectors
    key = key.replace(/[-_\/&]+/g, m => m[0]);
    // Step 7: remove non-letter, non-digit
    key = key.replace(/[^\p{L}\p{N}\-_/&]+/gu, '');
    return key;
}

/* ================================================
   INIT ON DOM READY
   ================================================ */
document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
    initMobileNav();
});
