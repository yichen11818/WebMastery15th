
        function showPhoneNumber() {
            // 这里替换为您的电话号码
            var phoneNumber = "+2998049720@qq.com";
            alert("联系方式: " + phoneNumber);
            // 如果需要，可以在此处添加拨打逻辑，例如使用window.location.href = 'tel:' + phoneNumber;
        }
        function showContent(targetId) {
            // 获取所有带有 .content 类的内容区域
            const allContents = document.querySelectorAll('.content');
            // 隐藏所有内容区域
            allContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('visible');
            });
            
            // 显示目标内容区域，如果存在
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.remove('hidden');
                targetContent.classList.add('visible');
            }
        }
        
        // 为首页链接添加点击事件监听器
        document.getElementById('homeLink').addEventListener('click', function(event) {
            event.preventDefault();
            showContent('homeContent');
        });
        
        // 为“关于我们”链接添加点击事件监听器
        document.getElementById('aboutLink').addEventListener('click', function(event) {
            event.preventDefault();
            showContent('aboutContent');
        });
        
        // 为“产品”链接添加点击事件监听器
        document.getElementById('productsLink').addEventListener('click', function(event) {
            event.preventDefault();
            showContent('productsContent');
        });

        // 获取回到顶部按钮的引用
var myButton = document.getElementById("backToTop");

// 当用户滚动时显示或隐藏回到顶部按钮
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// 点击按钮时平滑滚动到页面顶部
myButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0; // 对于Safari
    document.documentElement.scrollTop = 0; // 对于Chrome, Firefox, IE 和 Opera
}

        