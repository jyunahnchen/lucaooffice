// 頁面切換功能
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
}

// 漢堡選單切換
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// 導航欄滾動效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 產品卡片交互效果
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 表單提交處理
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的訊息！我們會盡快與您聯繫。');
            this.reset();
        });
    }
});

// 點擊外部關閉選單
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    
    if (!navContainer.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// 鍵盤導航支援
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    }
});

// 產品模板資料
const productTemplates = {
    rice: {
        title: '履歷稻米',
        desc: '我們的履歷稻米採用完整的產銷履歷追蹤...',
        img: 'images/rice.jpg',
        details: ['品種：台稉九號', '產地：嘉義縣鹿草鄉', '價格：NT$ 280 / 3公斤'],
        producers: [
            {
                name: '陳大華',
                farm: '大華有機農場',
                location: '嘉義縣鹿草鄉三角村',
                products: '有機稻米、有機蔬菜',
                contact: '0912-345-678',
                photo: 'images/producer1.jpg'
            },
            {
                name: '林小美',
                farm: '小美生態農場',
                location: '嘉義縣鹿草鄉后寮村',
                products: '有機稻米、有機果樹',
                contact: '0934-567-890'
            }
        ]
    },
    okra: {
        title: '秋葵',
        desc: '我們的秋葵採用無農藥栽培...',
        img: 'images/okra.jpg',
        details: ['產地：嘉義縣鹿草鄉', '價格：NT$ 80 / 斤'],
        producers: [
            {
                name: '王志明',
                farm: '志明蔬菜園',
                location: '嘉義縣鹿草鄉竹山村',
                products: '秋葵、小番茄、青蔥',
                contact: '0956-789-012'
            }
        ]
    },
    honey: {
        title: '純天然蜂蜜',
        desc: '我們的蜂蜜來自當地養蜂人，採用無添加的純天然蜂蜜...',
        img: 'images/honey.jpg',
        details: ['種類：百花蜜', '容量：500ml', '價格：NT$ 800 / 瓶'],
        producers: [
            {
                name: '李阿德',
                farm: '阿德養蜂場',
                location: '嘉義縣鹿草鄉光潭村',
                products: '百花蜜、龍眼蜜',
                contact: '0978-901-234'
            }
        ]
    },
    'dragon-fruit': {
        title: '火龍果',
        desc: '我們的火龍果採用有機栽培，無農藥殘留...',
        img: 'images/dragon-fruit.jpg',
        details: ['品種：紅心火龍果', '產地：嘉義縣鹿草鄉', '價格：NT$ 120 / 斤'],
        producers: [
            {
                name: '張文雄',
                farm: '文雄有機農場',
                location: '嘉義縣鹿草鄉碧潭村',
                products: '有機火龍果、有機木瓜',
                contact: '0965-432-109'
            }
        ]
    },
    curry: {
        title: '辛咖哩',
        desc: '這款獨特的咖哩醬採用了在地種植的辣椒...',
        img: 'images/curry.jpg',
        details: ['成分：辣椒、薑黃、蒜頭', '價格：NT$ 180 / 罐'],
        producers: [
            {
                name: '曾美惠',
                farm: '美惠香料園',
                location: '嘉義縣鹿草鄉後堀村',
                products: '辣椒、薑黃、香料',
                contact: '0921-876-543'
            }
        ]
    },
    'lunchbox-field': {
        title: '田野風味款餐盒',
        desc: '這款餐盒彙集了鹿草當地的傳統農家料理...',
        img: 'images/lunchbox-field.jpg',
        details: ['內容：履歷稻米飯、秋葵炒蛋等', '價格：NT$ 200 / 盒'],
        producers: [
            {
                name: '鄭秀娟',
                farm: '秀娟食堂',
                location: '嘉義縣鹿草鄉鹿草村',
                products: '傳統農家料理、客製化餐盒',
                contact: '0987-654-321'
            }
        ]
    }
};

// 顯示產品詳情
function showProductPage(productId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const product = productTemplates[productId];
    const productPage = document.getElementById('product-detail');

    if (!product) {
        productPage.innerHTML = `<div class="container"><h2>找不到產品</h2><a class="btn" onclick="showPage('products')">返回產品</a></div>`;
    } else {
        const producers = product.producers;
        const producerHtml = producers.map(producer => `
            <div class="producer-card">
                <div class="info">
                    <h4>${producer.name}</h4>
                    <p>農場名稱: ${producer.farm}</p>
                    <p>地點: ${producer.location}</p>
                    <p>生產項目: ${producer.products}</p>
                    <p class="contact">聯絡方式: ${producer.contact}</p>
                </div>
                <div class="photo">
                    <img src="${producer.photo || '/images/logo.png'}" alt="${producer.name}">
                </div>
            </div>
        `).join('');

        productPage.innerHTML = `
            <div class="container">
                <h3 style="margin-top: 2rem;">我們的生產者</h3>
                <div class="producer-list">
                    ${producerHtml}
                </div>
                <a class="btn" onclick="showPage('products')">← 返回產品頁</a>
            </div>
        `;
    }
    
    productPage.classList.add('active');
    history.pushState(null, '', `#product-${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 首次載入 hash router 支援
window.addEventListener('DOMContentLoaded', () => {
    const hash = location.hash.replace('#', '');
    if (hash.startsWith('product-')) {
        showProductPage(hash.replace('product-', ''));
    } else if (document.getElementById(hash)) {
        showPage(hash);
    } else {
        showPage('home');
    }
});
