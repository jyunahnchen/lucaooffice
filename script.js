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
// 在原有的script.js末尾添加以下代碼

// 點位篩選功能
function filterLocations(category) {
    const cards = document.querySelectorAll('.location-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // 更新按鈕狀態
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });
    
    // 篩選卡片
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// 點位詳情資料
const locationDetails = {
    xiaoping: {
        name: '小品草莓園',
        category: '農場果園',
        intro: '由年輕夫妻經營的草莓實驗農場，從小區域測試開始，現已發展成擁有三分多土地的專業草莓園。這裡不僅有多樣化的草莓品種，還有鹿角蕨等特色植物。',
        features: [
            '九月底種植，十一月至隔年四月為採收期',
            '品種多樣化，採果期間不使用農藥',
            '提供親子採果體驗，享受踩踏土地的樂趣',
            '夏季轉作玉米，實踐永續農業',
            '酪梨樹下栽培多肉植物與鹿角蕨'
        ],
        services: [
            '草莓採果體驗（秤重計價）',
            'DIY草莓盆栽',
            '親子田間漫步',
            '季節限定採果樂'
        ],
        owner: '農家子弟出身的年輕夫妻，將草莓種植的夢想化為現實，在故鄉土地上分享農村生活的愜意。'
    },
    
    wenpin: {
        name: '文品蔬菜行',
        category: '農場果園',
        intro: '原本從事建築水電工程的文生，為了照顧受傷的母親回到故鄉，接手父親的農田開始種植秋葵。堅持品質不拼量的經營理念，開發出秋葵茶、秋葵泡菜等創新產品。',
        features: [
            '主要種植秋葵，部分薑黃',
            '日出前收成，均勻日曬，定時翻面',
            '兩個月的悉心照料才能產出優質加工品',
            '秋葵除新鮮出貨外，還加工製成多樣產品',
            '從父親的固執到驕傲，見證農業轉型的成功'
        ],
        services: [
            'DIY秋葵泡菜體驗',
            '秋葵茶品嚐',
            '秋葵冰沙、秋葵咖啡',
            '農業創新故事分享'
        ],
        owner: '文生夫婦以創新思維經營傳統農業，用心營造產品價值，讓更多人品嚐到在地美味。'
    },
    
    hexing: {
        name: '和興生態農場',
        category: '農場果園',
        intro: '鹿草第一個有機火龍果農場，歷經四年轉型期，從吉園圃到生產履歷，現已獲得有機認證。自行培育「田惠美」品種，堅持當季生產不照燈，是在地首推的火龍果農場。',
        features: [
            '2012年「全國火龍果品質評鑑」冠軍',
            '自己培育留種，取太太名字命名品種',
            '皮薄肉細膩的獨特口感',
            '堅持當季生產，不使用人工照明',
            '為給孩子快樂童年而返鄉創業'
        ],
        services: [
            '有機火龍果生態導覽',
            '火龍果採果體驗（季節限定）',
            '火龍果果醬DIY',
            '火龍果種植盆栽DIY'
        ],
        owner: '用時間和經驗累積出來的技術，充滿愛的清甜果實，讓田惠美火龍果成為在地驕傲。'
    },
    
    muxin: {
        name: '沐欣草莓園',
        category: '農場果園',
        intro: '返鄉青農經營的溫室草莓園，先參加農業技術團學習專業技術，選擇介質栽培的現代化種植方式。除了觀光採果，還提供草莓加工產品。',
        features: [
            '溫室栽培技術，品質穩定',
            '介質栽培需用熱水消毒，工序嚴謹',
            '提供觀光採果服務',
            '自製草莓生乳捲、草莓蛋糕',
            '返鄉青年的農業新想像'
        ],
        services: [
            '草莓採果體驗',
            '草莓蛋糕DIY（裝飾體驗）',
            '草莓加工品選購',
            '溫室導覽解說'
        ],
        owner: '能定下心在溫室中種植的返鄉青年，有技術的磨練與家人的支持，肩負起在地農業的新一代想像。'
    },
    
    yanshuai: {
        name: '研帥蘭園',
        category: '農場果園',
        intro: '從阿公的蘭花代工開始，現已發展成專業育種蘭園。耗時六年培育穩定品種，擁有多項專利，以品質確立價值，在產業之外也關心社區發展。',
        features: [
            '從代工轉型為育種專業',
            '育種到品種穩定需耗時六年',
            '擁有自主專利品種',
            '誠信經營，嚴選合作夥伴',
            '參與一袋一鹿品牌串連'
        ],
        services: [
            '蘭花品種導覽',
            '育種技術分享',
            '蘭花栽培諮詢',
            '專利品種展示'
        ],
        owner: '蘭花王國的一枚螺絲，耐心孕育自己的專利品種，用育種宣揚品牌競爭力。'
    },
    
    lengyan: {
        name: '冷研探索館',
        category: '文化景點',
        intro: '全台首間CO₂教育體驗場域，結合課程、互動展示與乾冰實驗，讓民眾從各個面向認識CO₂，體驗有趣好玩的科學教育。',
        features: [
            '全台首創CO₂主題教育館',
            '互動式科學展示',
            '乾冰實驗體驗',
            '創意飲品製作',
            '寓教於樂的科學教育'
        ],
        services: [
            '漸層氣泡飲製作',
            '漂浮沐浴球DIY',
            '雪刷乾冰體驗',
            'CO₂科學導覽'
        ],
        owner: '讓CO₂可以貼近人們的生活，不只是科學知識，更是生活中的趣味體驗。'
    },
    
    shengjia: {
        name: '鹿草聖家園區',
        category: '文化景點',
        intro: '1961年匈牙利籍天主教神父葉由根與修士晁金名創建的醫院及幼稚園，為在地居民提供免費醫療與教育。2021年重新整頓，成立鹿草聖家創生基地。',
        features: [
            '1961年由匈牙利傳教士創建',
            '曾提供免費醫療服務',
            '育英幼稚園培育在地孩童',
            '保存完整的歷史建築',
            '現為創生基地活化使用'
        ],
        services: [
            '歷史建築導覽',
            '文物展示參觀',
            '創生活動參與',
            '宗教文化體驗'
        ],
        owner: '遠從西方來的傳教士，把鹿草當成故鄉，聖家就是天父的愛，不分信仰與你我。'
    },
    
    yuanshan: {
        name: '鹿草圓山宮',
        category: '文化景點',
        intro: '鹿草地方信仰中心，保有豐富的民俗文化，包括乩童文化、火馬祭、刈水火等傳統儀式。元宵節的擲炮台活動更是一大特色。',
        features: [
            '保有完整乩童文化',
            '元宵擲炮台傳統（類似澎湖攻炮城）',
            '火馬祭送瘟祈福',
            '刈水火盛會（每9年執行一次）',
            '王孫大使公發財金乞借'
        ],
        services: [
            '廟宇參拜導覽',
            '民俗活動體驗',
            '發財金乞借',
            '傳統儀式觀賞'
        ],
        owner: '民間信仰守護移民過黑水，透過各種儀式傳達神諭，賜福於民。'
    },
    
    library: {
        name: '鹿草鄉立圖書館',
        category: '文化景點',
        intro: '日治時期庄役場改建的圖書館，建於1936年，是全縣唯一的日式建築圖書館。嘉義縣人均借閱率最高，經常舉辦多樣化的文化活動。',
        features: [
            '1936年建造的日式建築',
            '13溝紋磚、國防色外觀',
            '嘉義縣人均借閱率最高',
            '鹿仔草民俗文化學堂',
            '皮影戲志工練習區'
        ],
        services: [
            '圖書借閱服務',
            '日式建築導覽',
            '皮影戲表演觀賞',
            '文化手作體驗'
        ],
        owner: '將近一百年的行政廳舍，成為小而美的圖書館，老建築承載書香與文化。'
    },
    
    sanjiao: {
        name: '三角社區',
        category: '文化景點',
        intro: '充滿活力的社區營造典範，擁有綠照和社區活動中心。志工們將雜草叢生的角落轉變為融合自然循環、友善農法與社區共學的基地。',
        features: [
            '田心食育園種植15種地瓜',
            '每年舉辦控窯活動',
            '暑期夏令營培育孩童',
            '阿里山油菊種植',
            '竹排菜園創意設計'
        ],
        services: [
            '食育園參觀',
            '控窯活動體驗',
            '社區導覽',
            '九宮格便當教學'
        ],
        owner: '年輕的返鄉者與充滿熱情的志工是社區活力的開關，熱情才是驅動社區的動力。'
    },
    
    rihe: {
        name: '日和製冰部',
        category: '美食餐廳',
        intro: '70年歷史的傳統製冰店，夏天賣冰冬天賣蚵嗲。至今仍以阿摩尼亞製冰，保有多種經典冰品如四果冰、月見冰、烏梅冰等。',
        features: [
            '70年傳統製冰技術',
            '阿摩尼亞製冰法',
            '雪冰（香蕉冰）口感綿密',
            '配料大部分自煮',
            '冬天提供炸物小吃'
        ],
        services: [
            '傳統雪花冰',
            '古早味冰品',
            '雪冰紅茶飲品',
            '冬季炸物小吃'
        ],
        owner: '老店不必新生，只需傳承延續，讓食物成為文化的一環，吃一口就想家的冰涼滋味。'
    },
    
    jiaxing: {
        name: '嘉興山海產餐廳',
        category: '美食餐廳',
        intro: '三代傳承的總舖師家族，從阿公在客棧服務到現在的山海產餐廳。以豐富的山產處理技術聞名，三杯田鼠是招牌料理。',
        features: [
            '三代總舖師傳承',
            '豐富山產處理技術',
            '招牌三杯田鼠',
            '野生兔肉料理',
            '蟋蟀季節限定（六月底至九月初）'
        ],
        services: [
            '山產野味料理',
            '海鮮料理',
            '外燴服務',
            '特色料理預訂'
        ],
        owner: '農場工帶來食材，總舖師用外燴功夫做出料理，傳承的不只是口味，還有家鄉風光年代。'
    },
    
    hele: {
        name: '和樂食堂',
        category: '美食餐廳',
        intro: '民國39年登記的老食堂，從日治時期的麵攤傳承至今。保留阿嬤時代的肉捲作法，結合甘蔗田的田鼠特產，創造獨特的在地料理。',
        features: [
            '日治時期麵攤起家',
            '保留阿嬤手路菜',
            '豐富山產處理技術',
            '中藥材自行炮製',
            '一甲子的好手藝'
        ],
        services: [
            '傳統麵食',
            '手工肉捲',
            '山產料理',
            '家常菜餚'
        ],
        owner: '傳承阿公的麵攤，找回阿嬤的手路菜，再現熟悉又古早的味道。'
    },
    
    muhou: {
        name: '幕後咖啡',
        category: '美食餐廳',
        intro: '位於60年老屋的咖啡館，前身是鹿草最早的洗衣店。喜歡電影的老闆利用各式農產調和咖啡口味，創造獨特的咖啡調酒與甜點。',
        features: [
            '60年老屋改建',
            '農產融入咖啡創新',
            '南南里咖啡加入跳跳糖',
            '調酒概念的無酒精特調',
            '獨特的視聽味覺體驗'
        ],
        services: [
            '創意咖啡特調',
            '精品咖啡',
            '手工甜點',
            '文化故事分享'
        ],
        owner: '在老房子開年輕咖啡館，把產品推至幕前，獨樹一格的韻味。'
    },
    
    zhuanxin: {
        name: '專心僧服',
        category: '工藝商店',
        intro: '從婆婆製作僧服領子開始，現已傳承三代。提供客製化量身製作，布料從國外購買再染整，是台灣唯一能提供客製化僧服的公司。',
        features: [
            '三代傳承的專業技術',
            '客製化量身訂作',
            '服務東南亞、澳美等地華人',
            '自行設計染整布料',
            '保存傳統裁縫技藝'
        ],
        services: [
            '僧服量身訂製',
            '布料選擇諮詢',
            '傳統工藝展示',
            '潤六月壽衣製作'
        ],
        owner: '專心僧服目前是唯一台灣製造與能提供客製化服務公司，量身訂製的細工服務。'
    },
    
    shouxiang: {
        name: '壽香珍',
        category: '工藝商店',
        intro: '傳統糕餅店，堅持自製內餡，保證傳統口味的存留。紅龜有綠豆和花生口味，水晶餅與坊間杏仁精風味不同，都是自家獨特配方。',
        features: [
            '傳統糕餅手工製作',
            '內餡全部自製',
            '紅龜綠豆花生口味',
            '獨特水晶餅配方',
            '年輕人願意接班傳承'
        ],
        services: [
            '傳統糕餅訂製',
            '祭祀用品製作',
            '結婚喜餅訂製',
            '零售古早味點心'
        ],
        owner: '自己做保證了傳統口味的存留，當老店的年輕人願意接班，文化就有了傳承。'
    },
    
    naiduo: {
        name: '乃朵菈蛋糕店',
        category: '工藝商店',
        intro: '2014年創業至今，以客製化又具獨創性的甜點擄獲顧客的心。善於運用顏色調配及嚴選材料，提供獨一無二的生日蛋糕。',
        features: [
            '創業十年的精品甜點店',
            '客製化生日蛋糕',
            '獨創性強的設計',
            '嚴選優質材料',
            '宅配電商為主'
        ],
        services: [
            '客製化蛋糕訂製',
            '精緻甜點選購',
            '伴手禮包裝',
            '甜點外帶服務'
        ],
        owner: '以客製化又具獨創性甜點，擄獲眼球與胃的好評，為鹿草注入香甜氣息。'
    },
    
    poan: {
        name: '泊岸居民宿',
        category: '特色住宿',
        intro: '因對故鄉的愛而修繕老宅，被朋友推薦開設民宿。主人在台北45年後返鄉，從一袋一鹿開始串連在地發展。',
        features: [
            '老宅改建的溫馨民宿',
            '保留傳統建築特色',
            '主人親切的在地導覽',
            '參與一袋一鹿串連',
            '充滿故鄉情懷'
        ],
        services: [
            '特色住宿體驗',
            '在地導覽服務',
            '早餐提供',
            '旅遊諮詢'
        ],
        owner: '因為有對故鄉的愛，才有修繕老家的行動，日久年深回頭仍愛故鄉。'
    },
    
    jgucuo: {
        name: 'J古厝',
        category: '特色住宿',
        intro: '因崇尚鄉間生活與喜愛老宅氛圍，在鹿草落腳。三合院格局的古色古香民宿，透過鄰居互助展現農村的溫暖人情。',
        features: [
            '三合院格局建築',
            '古色古香的氛圍',
            '鄰居互助的溫情',
            '完整保留傳統格局',
            '體驗真實農村生活'
        ],
        services: [
            '三合院住宿體驗',
            '農村生活體驗',
            '傳統建築導覽',
            '在地美食推薦'
        ],
        owner: '走訪很多地方，因緣際會在鹿草落腳，鄉間互助的老屋民宿。'
    }
};

// 顯示點位詳情
function showLocationDetail(locationId) {
    const detail = locationDetails[locationId];
    if (!detail) return;
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${detail.name}</h2>
            <span class="modal-category">${detail.category}</span>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>📍 簡介</h3>
                <p>${detail.intro}</p>
            </div>
            
            <div class="modal-section">
                <h3>✨ 特色亮點</h3>
                <ul class="service-list">
                    ${detail.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>🎯 提供服務</h3>
                <ul class="service-list">
                    ${detail.services.map(service => `<li>${service}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>👤 經營者故事</h3>
                <p>${detail.owner}</p>
            </div>
        </div>
    `;
    
    document.getElementById('locationModal').style.display = 'block';
}

// 關閉彈出視窗
function closeModal() {
    document.getElementById('locationModal').style.display = 'none';
}

// 點擊視窗外部關閉
window.onclick = function(event) {
    const modal = document.getElementById('locationModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 添加卡片動畫效果
document.addEventListener('DOMContentLoaded', function() {
    // 給所有點位卡片添加載入動畫
    const locationCards = document.querySelectorAll('.location-card');
    locationCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
});

// 農產加工品詳細資料
const processedProductDetails = {
    product01: {
        name: '辛咖哩',
        brand: '台灣食研食品股份有限公司',
        category: '調味品',
        price: 'NT$ 180 / 罐',
        image: '/images/product01.jpg',
        intro: '以鹿草「朱雀（朝天椒)」研製，結合獨家香料配方，打造出香辣適中、層次豐富的咖哩醬。',
        ingredients: '朝天椒、薑黃、蒜頭、洋蔥、椰奶',
        origin: '嘉義縣鹿草鄉',
        features: [
            '獨家香料配方',
            '在地食材新鮮直送',
            '低溫熬煮保留營養',
            '無添加防腐劑'
        ],
        specs: '160克/罐',
        usage: ['可直接拌飯', '炒菜調味', '咖哩料理基底'],
        story: '因為愛吃辣的女兒總是抱怨市售咖哩不夠味，決定用自家種的辣椒研發專屬配方...',
        concept: '堅持使用在地食材，支持小農經濟，讓每一口都吃得到鹿草的好味道。',
        target: '25-45歲注重健康的上班族、喜愛料理的家庭主婦',
        channels: ['網路商城']
    },
    product02: {
        name: '鹿草牛奶香米',
        brand: '鹿草鄉農會',
        category: '主食',
        price: 'NT$ 280 / 3公斤',
        image: '/images/product02.jpg',
        intro: '以台南20號為基底，米粒大、半透明乳白色，帶淡淡芋頭香，熱飯軟黏、冷飯Q彈。',
        ingredients: '鹿草牛奶香米',
        origin: '嘉義縣鹿草鄉',
        features: [
            '低直鏈澱粉特性(半梗半糯)',
            '帶淡淡芋頭香氣',
            '保水佳、冷飯不易變硬',
            '台版牛奶皇后'
        ],
        specs: '3公斤/包',
        usage: ['送禮', '自用', '搭配料理'],
        story: '歷經9年育種，結合臺農14號、台稉4號與台農84號優良特性，培育出台版牛奶皇后，適應氣候變遷、節水減碳。',
        concept: '從生產、加工到行銷，展現完整六級化產業鏈，讓鹿草農產走向國際。',
        target: '喜愛在地特色伴手禮、注重食材來源的消費者、遊客',
        channels: ['鹿草鄉農會(限量預購)']
    },
    product03: {
        name: '麻辣藥膳包',
        brand: '瑞安堂中藥行/花陞堂中西藥局',
        category: '調味品',
        price: 'NT$ 130 / 包',
        image: '/images/product03.jpg',
        intro: '由第四代青年創業王詔郁藥師，融合藥膳概念與鹿草在地朝天椒，展現傳統產業創新轉型的新樣貌。',
        ingredients: '朝天椒、中藥材',
        origin: '嘉義縣鹿草鄉',
        features: [
            '藥師專業調配',
            '在地朝天椒入味',
            '突破傳統展現轉型創意',
            '傳統與創新的完美結合'
        ],
        specs: '依包裝規格',
        usage: ['火鍋湯底', '炒菜調味', '藥膳料理'],
        story: '第四代青年創業傳承，突破傳統中藥行經營模式。',
        concept: '以藥師專業結合社區諮詢服務，創新經營藥局品牌。',
        target: '喜愛麻辣料理、注重養生的消費者',
        channels: ['花陞堂中西藥局門市']
    },
    product04: {
        name: '火馬辣米磚',
        brand: '奮起福米餅',
        category: '零食點心',
        price: 'NT$ 250 / 包',
        image: '/images/product04.jpg',
        intro: '選用鹿草朱雀朝天椒製作的辣椒米磚，結合火馬祭文化的創新應用。',
        ingredients: '米、鹿草朱雀朝天椒',
        origin: '嘉義縣鹿草鄉',
        features: [
            '與火馬祭文化結合',
            '在地朱雀朝天椒',
            '農產品與信仰文化的創新應用',
            '獨特的在地特色'
        ],
        specs: '依包裝規格',
        usage: ['零食點心', '下酒菜'],
        story: '結合鹿草圓山宮火馬祭文化，展現在地信仰與農產的創新結合。',
        concept: '農產品與在地文化信仰結合的創新應用。',
        target: '喜愛辣味零食、對在地文化有興趣的消費者、遊客',
        channels: ['奮起福米餅門市', '奮起湖大飯店', '預計於奮起福米餅門市上架販售']
    },
    product05: {
        name: '雪花秋葵Q餅',
        brand: '乃朵菈手工甜點',
        category: '甜點',
        price: 'NT$ 310 / 盒',
        image: '/images/product05.jpg',
        intro: '結合鹿草秋葵等在地農產的雪花Q餅手工製作，展現創意與健康的完美結合。',
        ingredients: '秋葵、麵粉等烘焙材料',
        origin: '嘉義縣鹿草鄉',
        features: [
            '手工製作',
            '在地秋葵入料',
            '新研發特色產品',
            '健康美味兼具'
        ],
        specs: '依盒裝規格',
        usage: ['下午茶', '伴手禮'],
        story: '隱身村落的手工甜點店，致力研發在地農產創意甜點。',
        concept: '結合在地農產，創作手工甜點。',
        target: '喜愛手工甜點、注重健康食材的消費者',
        channels: ['乃朵菈手工甜點', '網路商城']
    },
    product06: {
        name: '掛雙酥脆腰果',
        brand: '乃朵菈手工甜點',
        category: '零食點心',
        price: 'NT$ 160 / 包',
        image: '/images/product06.jpg',
        intro: '選用鹿草在地朱雀朝天椒與堅果手工製作，口味香辣不嗆，雙重酥脆技法讓口感升級。',
        ingredients: '腰果、鹿草朱雀朝天椒',
        origin: '嘉義縣鹿草鄉',
        features: [
            '嚴選鹿草在地朱雀朝天椒',
            '與小農合作的小批量手作',
            '天然食材、不添加多餘添加物',
            '雙重酥脆技法'
        ],
        specs: '依包裝規格',
        usage: ['零食點心', '下酒菜', '下午茶'],
        story: '隱身村落的手工甜點店，致力研發在地農產創意甜點。',
        concept: '結合在地農產，創作手工甜點。',
        target: '喜愛辣味零食、對在地文化有興趣的消費者、遊客',
        channels: ['乃朵菈手工甜點', '網路商城']
    }
};

// 顯示農產加工品詳情
function showProcessedProductDetail(productId) {
    const detail = processedProductDetails[productId];
    if (!detail) return;
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${detail.name}</h2>
            <span class="modal-category">${detail.brand}</span>
        </div>
        <div class="modal-body">
            <div class="product-detail-image">
                <img src="${detail.image}" alt="${detail.name}" onerror="this.src='/images/logo.png'">
            </div>
            
            <div class="modal-section">
                <h3>📦 產品資訊</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <strong>產品類別：</strong>${detail.category}
                    </div>
                    <div class="info-item">
                        <strong>產地來源：</strong>${detail.origin}
                    </div>
                    <div class="info-item">
                        <strong>產品規格：</strong>${detail.specs}
                    </div>
                    <div class="info-item">
                        <strong>售價：</strong><span class="price-highlight">${detail.price}</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>📝 產品簡介</h3>
                <p>${detail.intro}</p>
            </div>
            
            <div class="modal-section">
                <h3>🌿 主要原料</h3>
                <p>${detail.ingredients}</p>
            </div>
            
            <div class="modal-section">
                <h3>✨ 製作特色</h3>
                <ul class="service-list">
                    ${detail.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>🍽️ 建議用途</h3>
                <div class="usage-tags">
                    ${detail.usage.map(use => `<span class="tag">${use}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>📖 品牌故事</h3>
                <p><strong>創立緣起：</strong>${detail.story}</p>
                <p><strong>經營理念：</strong>${detail.concept}</p>
            </div>
            
            <div class="modal-section">
                <h3>🎯 目標客群</h3>
                <p>${detail.target}</p>
            </div>
            
            <div class="modal-section">
                <h3>🏪 銷售通路</h3>
                <ul class="service-list">
                    ${detail.channels.map(channel => `<li>${channel}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    document.getElementById('locationModal').style.display = 'block';
}