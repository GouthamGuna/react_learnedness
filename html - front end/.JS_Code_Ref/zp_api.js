var zURLParams = new URLSearchParams(window.location.search);
var fromSearch = zURLParams.get('zgs'); 
var allDataArray = [];
var menuArray;
var objectIndex = null;
var langIndex = 0;

var hostName = window.location.hostname;
        
var hostNamee = window.location.hostname;
var documentUrl = window.location.pathname;
var langFolder = ""; var currentUrlLanguage = currentUrlLang;
/************************ Api Left Side Menu Starts ********************************/
$(document).ready(function() {

    /*if(customvar.productName == "crm" && customvar.pathname.indexOf("/crm/developer/docs/api/v2.1/") >= 0){
        $(".lang-selector a[data-language='java'], .lang-selector a[data-language='php'], .lang-selector a[data-language='csharp'], .lang-selector a[data-language='python'], .lang-selector a[data-language='nodejs'], .lang-selector a[data-language='ruby']").remove();
        $(".api-code-block.java, .api-code-block.php, .api-code-block.csharp, .api-code-block.python, .api-code-block.nodejs, .api-code-block.ruby").remove();
    }*/

   if($('body').hasClass('og-context-node-50412')){
        $("#hockey_v1-query").attr({'placeholder' : 'Search Docs...'});
    }

    var footerDiv = '<div class="footer-wrapper"><p>Â© 2023, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p></div>';

    if(customvar.productName == "creativetest" || customvar.productName == "datagrid"){
        $(".api-content-panel.right-panel-none").append(footerDiv);
        $(".api-content-panel.right-panel > div:first-child").append(footerDiv);
    }
    else {
        $(".api-content-panel").append(footerDiv);
    }

    //s$("code").each(function(){ $(this).text($.trim($(this).text()))});
    
    //$(".api-content-panel .api-content-inner-wrap h1").eq(0).append('<div class="star-rating"><span data-val="1"></span><span data-val="2"></span><span data-val="3"></span><span data-val="4"></span><span data-val="5"></span></div>');
    
    if( typeof fromSearch !== "undefined" && fromSearch == 1 ) { 
        var a = $(".api-content-panel").html(); 
        $("body").html(a); 
        $(".api-code-panel").css({"position": "relative"});
        $(".api-content-inner-wrap table").css({"word-wrap": "break-word"});
        $(".api-content-inner-wrap, .api-code-panel").css({"padding": "20px"});
        $('a[href]').attr('target', '_blank'); 
    }

    $(".menu-select").css({"display": "none"});
    $(".lang-selector").css({"display": "block"});

    function checkLangSelector(){
        $(".api-code-panel-inner").each(function() {
            var langSelectorCount = $(this).find(".lang-selector > a").length;

            if (langSelectorCount > 5) {
                $(this).find(".lang-selector").css({"display": "none"});
                $(this).find(".menu-select").css({"display": "block"});
            }
            else {
                $(this).find(".menu-select").css({"display": "none"});
                $(this).find(".lang-selector").css({"display": "block"});
            }
        });
    }

    function sectionW() {
        $(".footer-wrapper").css({"margin-bottom": 0});
        if($(window).width() >= 1199) {
            if($(".api-content-panel").hasClass("zthree-col")){
                var winW = $(window).width() - 250;
                var winCW = (winW/100)*50;
                var winRW = (winW/100)*50;
                $(".content-panel-wrap .api-content-inner-wrap").css({"width": winCW});
                $(".content-panel-wrap .api-code-panel").css({"width": winRW-60});
            }
            else if($(".api-content-panel").hasClass("ztwo-col")){
                $(".content-panel-wrap .api-content-inner-wrap").css({"width": "auto"});
                $(".content-panel-wrap .api-code-panel").css({"width": "auto"});
            }

            checkLangSelector();
        }
        else if($(window).width() >= 768 && $(window).width() < 1199) {
            $(".content-panel-wrap .api-content-inner-wrap").css({"width": $(window).width()-230});
            $(".content-panel-wrap .api-code-panel").css({"width": $(window).width()-230, "margin-top": "40px", "top": "0px", "position": "relative"});

            checkLangSelector();
        }
        else {
            $(".footer-wrapper").css({"margin-bottom": 60});
            $(".content-panel-wrap .api-content-inner-wrap").css({"width": $(window).width()-50});
            $(".content-panel-wrap .api-code-panel").css({"width": $(window).width()-50, "margin-top": "40px", "top": "0px", "position": "relative"});
            $(".lang-selector").css({"display": "none"});
            $(".menu-select").css({"display": "block"});
        }
        //$(".footer-wrapper").css({"margin-top": $(window).height() - 60});
    }
    
    sectionW();
    
    $(window).resize(function(){
        sectionW();
    });

    $(".api-code-panel-inner .api-code-block pre:nth-child(1), .api-code-panel-inner .api-code-block pre:nth-child(2)").addClass("active");
    
    var animateDiv = ".api-code-panel";
    var lMaxHeight = 275;

    function switchLang(elem) {
        var activeLang = elem.find(".lang-selector a.active").attr("data-language");
        if(elem.find(".api-code-block."+activeLang).length > 0){
            var heightChk = 0;
            elem.find(".api-code-block").removeClass("active");
            elem.find(".api-code-block."+activeLang).addClass("active");

            if(elem.find(".api-code-block."+activeLang+".active .inner-lang-selector").length > 0){
                elem.find(".api-code-block."+activeLang+".active .inner-lang-selector .selector-set select option:first-child").prop('selected', true);
                var dataInnerLang = elem.find(".api-code-block."+activeLang+".active .inner-lang-selector .selector-set select option:selected").attr("data-language");

                elem.find(".api-code-block."+activeLang+".active pre").removeClass("active");
                elem.find(".api-code-block."+activeLang+".active pre.language-"+activeLang+".inner-language-"+dataInnerLang).addClass("active");

                elem.find(".api-code-block."+activeLang+".active .version-set").find("span").removeClass("active");
                elem.find(".api-code-block."+activeLang+".active .version-set").find("span.version-set-"+dataInnerLang).addClass("active");

                heightChk = elem.find(".api-code-block."+activeLang+".active pre.language-"+activeLang+".inner-language-"+dataInnerLang+".active").height();
            }
            else {
                heightChk = elem.height();
            }

            if(customvar.productName != "salesiq")
            {
                if(heightChk > lMaxHeight){
                   elem.css({"max-height": lMaxHeight});
                   elem.addClass("max-active");
                   elem.append('<div class="show-full"><p>Show full</p></div>');
                }
                else {
                    elem.removeClass("max-active");
                    elem.css({"max-height": "none"});
                    elem.find(".show-full").remove();
                }
            }
        }
    }
    
    function languageOption(){
        if($(".lang-selector a").length > 0){
            
            $(".api-code-panel-inner").each(function(){
                let elem = $(this);
                switchLang(elem);
            });
        }
    }
    
    var windowH = $(window).height()-90;
    
    /*$(".api-content-panel > div").each(function()
    {
        var apiContentWrap = $(this).find(".api-content-inner-wrap>div").innerHeight();
        var apiCodePanel = $(this).find(".api-code-panel").innerHeight();
        
        if(apiContentWrap < apiCodePanel && $(this).find(".api-code-panel>div").length > 1){
            var requestH = 0;
            var responseH = 0;
            var lMaxHeight = 200;
            
            $(this).find(".api-code-panel>div.dark-theme").each(function()
            {
               requestH+= $(this).innerHeight();
            });
            
            if(windowH > requestH){
                lMaxHeight = windowH-requestH;   
            }
            
            $(this).find(".api-code-panel>div.light-theme").each(function()
            {
               $(this).find(".api-code-panel-inner").css({"max-height": lMaxHeight-25});
            });
        }
    });*/

    $(".api-content-panel > div").each(function()
    {
        var apiContentWrap = $(this).find(".api-content-inner-wrap>div").innerHeight();
        var apiCodePanel = $(this).find(".api-code-panel").innerHeight();

        if(apiContentWrap < apiCodePanel && $(this).find(".api-code-panel>div").length > 0 && customvar.productName != "salesiq"){

            $(this).find(".api-code-panel>div").each(function()
            {
               if($(this).find(".api-code-panel-inner").height() > lMaxHeight){
                   $(this).find(".api-code-panel-inner").css({"max-height": lMaxHeight});
                   $(this).find(".api-code-panel-inner").addClass("max-active");
                   $(this).find(".api-code-panel-inner").append('<div class="show-full"><p>Show full</p></div>');
               }
            });

        }

    });

    $(document).on("click", ".show-full", function()
    {
        $(this).parent(".api-code-panel-inner").removeClass("max-active");
        $(this).parent(".api-code-panel-inner").css({"max-height": "none"});
        $(this).find(".api-code-panel-inner .show-full").remove();
    });
    
    $(".api-code-panel-inner .lang-selector a").click(function(){
        var activeLang = $(this).attr("data-language");
        if(productName == 'zeptomail') {
            $(this).parent().find('a').removeClass("active");
            $(this).addClass('active');
            switchLang($(this).parent().parent());
        } else {
            $(".api-code-panel-inner .lang-selector a").removeClass("active");
            $('.api-code-panel-inner .lang-selector a[data-language^="' + activeLang + '"]').addClass('active');
            languageOption();
        }
    });

    $("body").on("change", ".api-code-panel-inner .api-code-block .inner-lang-selector .selector-set select", function(){
        var activeLang = $(this).closest(".api-code-block").siblings(".lang-selector").find("a.active").attr("data-language");
        var activeInnerLang = $(this).find("option:selected").attr("data-language");
        $(this).closest(".selector-set").siblings(".version-set").find("span").removeClass("active");
        $(this).closest(".selector-set").siblings(".version-set").find("span.version-set-"+activeInnerLang).addClass("active");
        $(this).closest(".api-code-block."+activeLang+".active").find("pre").removeClass("active");
        $(this).closest(".api-code-block."+activeLang+".active").find("pre.language-"+activeLang+".inner-language-"+activeInnerLang).addClass("active");
    });

     var ij = 1;
    $('.api-code-panel .api-code-panel-inner .lang-selector').each(function () {
        var select_div = $('<div></div>').addClass("menu-select").insertBefore($(this));
        var select = $(document.createElement('select')).appendTo(select_div);

        var thisWidth = 0;

        $('>a', this).each(function(index) {
            var parent = $(this).parent();
                option = $(document.createElement('option')).appendTo(select).attr("data-language", $(this).attr('data-language')).val(ij).html($(this).html()).click(function (){
                });

            thisWidth = thisWidth + $(this).outerWidth();


            if($(this).parent().hasClass("zactive")) {
                $('option[value="'+(index+1)+'"]')
                    .attr('selected', true);
            }
            ij++;
        });

        if(thisWidth > $(this).width() && customvar.productName != "creativetest" && customvar.productName != "datagrid"){
            $(this).css({"display": "none"});
            $(this).siblings(".menu-select").css({"display": "block"});
        }
    });

    $(document).on("change", ".api-code-panel-inner .menu-select select", function(){
        var optionSelected = $(this).find("option:selected");
        var activeLang = optionSelected.attr("data-language");
        if(productName == 'zeptomail') {
            $(this).parent().parent().find('.lang-selector a').removeClass("active");
            $(this).parent().parent().find('.lang-selector a[data-language^="' + activeLang + '"]').addClass('active');
            switchLang($(this).parent().parent());
        } else {
            $(".api-code-panel-inner .lang-selector a").removeClass("active");
            $('.api-code-panel-inner .lang-selector a[data-language^="' + activeLang + '"]').addClass('active');
            $('.api-code-panel-inner .menu-select select option[data-language^="' + activeLang + '"]').prop('selected','selected');
            languageOption();
        }
    });
    
    $(".copy").click(function(){
        var copyText = $(this).siblings("pre");
        copyText.select();
        document.execCommand("Copy");
    });
    
    var productNam = window.location.pathname.split("/");
    

    if(customvar.productName == "creativetest" || customvar.productName == "datagrid"){
        documentUrl = window.location.pathname + window.location.hash;
    }

    if (currentUrlLanguage == "") { 
        currentUrlLanguage = "en"; 
    }
    else if(currentUrlLanguage != "" && productNam[2] == customvar.productName) {
        langFolder = "/" + currentUrlLanguage;  
    }
    
    $(".api-menu-panel .api-menu-search").after('<div class="api-menu-lists"><div><ul class="zoho-parent-wrapper"></ul></div></div><span class="mob-menu-click"></span>');
    
    var menuGroupId = $(".api-menu-panel").attr("id");

    if(hostName == "catalyst.zoho.eu" || hostName == "catalyst.zoho.com" || hostName == "www.zoho.com" || hostName == "www.manageengine.com" || hostName == "www.bigin.com"){
        hostName = "www.zohowebstatic.com";
    }

    if(hostName == _zcmsZC) {
        $(".region.region-blog-top-bar").css({"display": "none"});  
    }

    let zwc_other_domain = ['zohobigin'];
    let webPath = 'zweb';
    if ($.inArray(customvar.productName, zwc_other_domain) > -1) {
        webPath = 'oweb';
        if((customvar.host.indexOf('prewww.') != -1)){
            hostName = 'prewwwo.zohowebstatic.com';
        }
    }

    var jsonPath = "https://"+hostName+"/sites/"+webPath+"/json/api/"+customvar.productName+"-api-menu.json";
    // var jsonPath = "http://localhost:8000/datagrid/api-guide-new/"+customvar.productName+"-api-menu.json";
    $.getJSON(jsonPath, function(json) {
        menuArray = json;
        
        if(typeof menuArray.language != 'undefined' && menuArray.language != undefined) {
            langIndex = (menuArray.language).indexOf(currentUrlLanguage);
        }
        else {
            langIndex = null;
        }

        function getJsonArray() {
            $.each(menuArray.apiMenu, function (index) {
                if(menuArray.apiMenu[index].MenuID == menuGroupId)
                {
                    objectIndex = index;
                }
          });
        }

        getJsonArray();
        
        if(objectIndex != null) {
            jsonToHtml();
            menuMatcher();  
            extractMenus(menuArray.apiMenu[objectIndex].menu);
        }
        else {
            $(".api-menu-panel").html('');
        }

        loadComplete();
    });
    /************************ Mobile Menu Functions Starts ********************************/
    
    menuResize();
    
    $(window).resize(function(){
        menuResize();
    });
    
    function menuResize() {
        /*if(window.innerWidth < 767){            
            $("body").on("click", ".mob-menu-click", function(){
                $(this).parent().toggleClass('mmenu-active');       
                $(this).toggleClass("menu-click-active");
                var thisClass = $(this).hasClass('menu-click-active');          
                if(thisClass){
                    $('.zoho-parent-wrapper').show('slow');
                    $('body').css({'overflow':'hidden'})    
                }
                else{               
                    $('.zoho-parent-wrapper').hide();
                    $('body').css({'overflow':'auto'})              
                }
            });
        }*/
        var innerH = window.innerHeight;
        var proMenuH = $('.zw-template-inner').innerHeight();
        var cookieLength = $(".zc-cookiewidget").length;
        var heightMinus = 150;
        if(cookieLength > 0){
            heightMinus = 150;
        }
        var leftMenuH = (innerH-proMenuH)-heightMinus;
        $('.api-menu-panel div.api-menu-lists').css({'height' : leftMenuH});
        if($('.api-right-panel .stick-panel > ul').length > 0){
            $('.api-right-panel .stick-panel > ul').css({'height' : leftMenuH-50});
        }
    }

    $("body").on("click", ".mob-menu-click", function(){
        if(window.innerWidth <= 767){
            $(this).parent().toggleClass('mmenu-active');       
            $(this).toggleClass("menu-click-active");
            var thisClass = $(this).hasClass('menu-click-active');          
            if(thisClass){
                $('.zoho-parent-wrapper').show('slow');
                $('body').css({'overflow':'hidden'});  
            }
            else{               
                if(customvar.productName != "datagrid") {
                    $('.zoho-parent-wrapper').hide();
                }
                $('body').css({'overflow':'auto'});            
            }
        }
    });
    
    /************************ Mobile Menu Functions Ends ********************************/

    updateActiveMenuItem();
    
    $(window).scroll(function () {
        updateActiveMenuItem();
    });
    
});

/************************ Menu Toggle Functions Starts ********************************/
var toggleMenu = function() {
    $('.zoho-api-toggle, .zoho-parent-wrapper li.hasChild > a:not([href])').click(customvar.debouncer(function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('open'))
        {
            closeAll($(this));
        }
        else
        {
            closeAll($(this));
            $(this).parent().toggleClass('open');
            $(this).siblings('ul').slideToggle();
            $(this).parents('li').children('a').addClass('active');
        }
        return false;
    }));
}

function closeAll(thisObj) {
    $(thisObj).closest('ul').children('li.open').find('ul').slideUp();
    $(thisObj).closest('ul').find('li.open').removeClass('open');
    $(thisObj).closest('ul').children('li').find('a').removeClass('active');
}
/************************ Menu Toggle Functions Ends ********************************/

function extractMenus(menuItems) {
    $.each(menuItems, function (index, menuItem) {
        var menuName = menuItem.menuName[0];
        var link = menuItem.link;

        if(link != "")
        {
            allDataArray.push({
            menuName: menuName,
            link: link
            });
        }

        if (menuItem.subMenu) {
            extractMenus(menuItem.subMenu); // Recursive call for sub-menu
        }
    });
}

/************************ Select Exact Menu Depends Page URL Starts ********************************/
function menuMatcher(toggle=true){
    $(".zoho-parent-wrapper a.pro-active").each(function(index, element) { 
        $(this).parents('ul').css({"display": "block"});
        $(this).siblings('ul').css({"display": "block"});
        $(this).parents('li').addClass('open');
        $(this).parents('li').children('a').addClass('active pro-active');
        $(this).addClass('active pro-active');
    });
    if(toggle)
    {
        toggleMenu();    
    }
}
/************************ Select Exact Menu Depends Page URL Ends ********************************/

/************************ Array to HTML Menu Convertion Starts ********************************/

function addproActive(hash) {
    var hashValue = window.location.hash;
    if($(".api-content-panel:visible ul li a[href='" + hashValue + "']").closest('.api-content-panel').is('#'+hash)) {
        return true;
    }

    return false;
}

function jsonToHtml(){
    var getMenuItem = function (itemData) {
        
        var apiType = ""; var hasApi = "";
        
        if((itemData.apiType != null) && (itemData.apiType != "")) {
            hasApi = "api-type-menu";
            apiType = "<span class='api-type "+(itemData.apiType).toLowerCase()+"'>"+itemData.apiType+"</span>";
        }
        
        var classNamee = "";
        
        var menuName = "";

        if (langIndex != null) {
            menuName = itemData.menuName[langIndex];
        } else {
            menuName = itemData.menuName;
        }
        
        if (menuName != null) {

            if((hostNamee == "catalyst.zoho.eu" || hostNamee == "catalyst.zoho.com") && (itemData.link != "#" || itemData.link == '\/%3Cnolink%3E' || itemData.link == '')){
                itemData.link = "/"+itemData.link.split("/catalyst/")[1];
            }

            if(hostNamee == "www.bigin.com") {
                documentUrl = 'https://www.bigin.com'+window.location.pathname;
            }

            var hashValue = window.location.hash;
            if(itemData.link == documentUrl || itemData.link == documentUrl+'index.html')
            {
                classNamee = "pro-active";
            } else {
                if( hashValue != '' && $(hashValue).length ) {
                    var splitHash = (itemData.link).split('#');
                    classNamee = addproActive(splitHash[1]) ? "pro-active" : '';
                }
            }

            var anchorLink = function(){
                if(itemData.link == "#" || itemData.link == '\/%3Cnolink%3E' || itemData.link == '') {
                    return $("<a>", {
                            html: apiType+menuName
                        });
                }
                else {
                    return $("<a>", {
                            href: langFolder + itemData.link,
                            html: apiType+menuName,
                            class: classNamee
                        });
                }
            }

            var item = "";

            if (itemData.subMenu) {
                item = $("<li class='hasChild'>").append(anchorLink);
                item.append('<span class="zoho-api-toggle"></span>');
                var subList = $("<ul>");
                $.each(itemData.subMenu, function () {
                    subList.append(getMenuItem(this));
                });
                item.append(subList);
            }
            else {
                item = $("<li class='noChild "+hasApi+"'>").append(anchorLink);
            }
            return item;
        } 
        else {
            return null;
        }
    };
    
    var $menu = $(".zoho-parent-wrapper");

    $.each(menuArray.apiMenu[objectIndex].menu, function (index) {
        $menu.append(
            getMenuItem(this)
        );
    });
    
    /************************ Version  List Starts ********************************/
    var versionMenuLists = ""; var versionMenuList = "";
    $.each(menuArray.apiMenu[objectIndex].version_list, function(index) {
        var setSelected = "";
        if(langFolder+menuArray.apiMenu[objectIndex].version_list[index].enable == "true"){
            setSelected = 'selected="selected"';
        }
        versionMenuLists+='<option '+setSelected+' value="'+langFolder+menuArray.apiMenu[objectIndex].version_list[index].url+'">'+menuArray.apiMenu[objectIndex].version_list[index].title+'</option>';
    });
    
    if(versionMenuLists != ""){
        versionMenuList = '<div class="select-wrap"><select class="filter">'+versionMenuLists+'</select><span class="select-dropdown"></span></div>';
    }

    $(".api-menu-panel .api-menu-search").append(versionMenuList);
    /************************ Version List Ends ********************************/
    
    return false;
}
/************************ Array to HTML Menu Convertion Ends ********************************/

function loadComplete() {
    let hashValue = window.location.hash;
    if(hashValue != "" && (customvar.productName == "creativetest" || customvar.productName == "datagrid")){
        if($('.api-content-panel'+hashValue).length) {
            navigationMenu(hashValue);
        } else {
            if($('.api-content-panel div'+hashValue).length) {
                var hashName = $('.api-content-panel div'+hashValue).closest('.api-content-panel').attr('id');
                navigationMenu("#"+hashName);
                $('.api-menu-panel li.hasChild a').each( function() {
                    if((typeof $(this).attr('href')) !== 'undefined') {
                        var splitHash = ($(this).attr('href')).split('#');
                        addproActive(splitHash[1]) ? $(this).addClass('pro-active') : "";
                    }
                    
                });
            }
            menuMatcher(false);
        }
        
    }
    else if(hashValue == "" && (customvar.productName == "creativetest" || customvar.productName == "datagrid")){
        var splitHash = (allDataArray[0].link).split('#');
        if(splitHash.length > 0){
            navigationMenu('#'+splitHash[1]);
        }
    }

    if(hashValue != ""){ 
        var target = hashValue, 
        target = target.replace('#', '');   
        // var $target = $('#' + target);  
        var $target = ($('#' + target).length > 0) ? $('#' + target) : $('[name="' + target + '"]');
        if(target) {     
            if(customvar.productName == "datagrid") {
                $('main').animate({   
                    'scrollTop': $target.position().top 
                }, 1200);   
            } else {
                $('html, body').animate({   
                    'scrollTop': $target.offset().top - 150 
                }, 1200);   

            }
        }
    }   
    
     
        
            
    setTimeout(function(){
        if($(".api-menu-panel ul.zoho-parent-wrapper > li > a.active").length > 0){
                var targett = $(".api-menu-panel ul.zoho-parent-wrapper li a.active:last-child");
                $('.api-menu-lists').animate({
                    scrollTop: $(targett).offset().top - 160
                }, 1000);   
        }
        
        // Cache selectors
        $('main').on("scroll", function (event) {
            var $menuTab    = '.api-right-panel:visible ul li a';
            var $headerTab  = '.api-content-inner-wrap:visible';
            var $header     = '.api-right-panel:visible';
            var $defaultTab = $('.api-right-panel:visible ul li a').eq(0).attr('href');
            var $activeClass= 'active-menu';
            var menuItems = $($headerTab);
            // Get container scroll position
            var fromTop = $(this).scrollTop() + ($(window).height() / 3);
            // Get id of current scroll item
            var cur = menuItems.map(function () {
                if ($(this).position().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = $(cur[cur.length - 1]);
            var id = cur && cur.length ? "#"+cur[0].id : $defaultTab;
            // Set/remove active class
            $($menuTab).removeClass($activeClass);
            $($menuTab+"[href='" + id + "']").addClass($activeClass);
        }).scroll();
    }, 100);
}

$('body').on('change', 'select.filter', function () {
    var vurl = $(this).val();
    if (vurl) { 
      window.location = vurl; 
    }
    return false;
});

function getMenuIndexByName(menuArray, link) {
    return menuArray.findIndex(function (menuItem) {
        return menuItem.link === link;
    });
}

function navigationMenu(hashValue){
    var $target = $(hashValue);

    if(hashValue) {
        $(".zw-product-2 .api-content-panel, .zw-product-129 .api-content-panel").css({"display" : "none"});
        $target.css({"display" : "flex"});
    }

    var setLink = window.location.pathname+hashValue;
    var menuIndex = getMenuIndexByName(allDataArray, setLink);

    var previousLink = ''; var nextLink = '';

    if(menuIndex > 0)
    {
        previousLink = '<div class="left-sec za-nav-item"><a href="'+allDataArray[menuIndex-1].link+'"><span class="arrow"></span><span class="za-nav-btn"><span>Previous</span><span>'+allDataArray[menuIndex-1].menuName+'</span></a></div>';
    }

    if(menuIndex+1 < allDataArray.length)
    {
        nextLink = '<div class="right-sec za-nav-item"><a href="'+allDataArray[menuIndex+1].link+'"><span class="arrow"></span><span class="za-nav-btn"><span>Next</span><span>'+allDataArray[menuIndex+1].menuName+'</span></a></div>';
    }

    if($(".api-content-panel"+hashValue+" .za-nav-wrap").length <= 0){
        $(".api-content-panel"+hashValue+" .footer-wrapper").before('<div class="za-nav-wrap">'+previousLink+nextLink+'</div>');
    }
}

if(customvar.productName != "creativetest" && customvar.productName != "datagrid") {
    $(document).on("click", ".api-menu-lists ul li a, .za-nav-wrap .za-nav-item a", function(e){
        if(customvar.productName == "creativetest" || customvar.productName == "datagrid"){
            var target = $(this).attr("href")
            if(target !== undefined) {
                target = target.split('#');
                navigationMenu('#' + target[1]);
                documentUrl = window.location.pathname + '#' + target[1];
                $(".zoho-parent-wrapper").empty();
                jsonToHtml();
                menuMatcher();
            }
        }
    }); 
}

function updateActiveMenuItem() {
    var scrollPosition = $(window).scrollTop();
    
    // Loop through each section
    $('.api-content-inner-wrap').each(function () {
      var sectionOffset = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();
      var sectionId = $(this).attr('id');
      var menuLink = $('.api-right-panel ul li a[href="#' + sectionId + '"]');
      
      // Check if the current section is in view
      if (scrollPosition >= sectionOffset - 50 && scrollPosition < sectionOffset + sectionHeight - 50) {
        menuLink.addClass('active');
      } else {
        menuLink.removeClass('active');
      }
    });
}
/************************ Api Left Side Menu Ends ********************************/
$(document).ready(function() {
    /*$('body').on('click', '.api-content-panel a[href^="#"]', function(e) {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 1000, function() {
            window.location.hash = target;
        });
    });*/

    $('body').on('click', '.api-content-panel a[href^="#"], .api-right-panel .stick-panel a[href^="#"]', function(e) {
        e.preventDefault();
        var targetHash = $(this).attr('href');
        var target = $(this).attr('href');
        target = target.replace('#', '');
        var $target = ($('#' + target).length > 0) ? $('#' + target) : $('[name="' + target + '"]');

        if($target) {
            if(customvar.productName == "datagrid") {
                $target[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(function() { window.location.hash = targetHash; } , 600);
            } else {
                $('html, body').animate({
                    scrollTop: $($target).offset().top - 150
                }, 1000, function() {
                    setTimeout(function() {  window.location.hash = targetHash  } , 600);
                });
            }
        }
        return false;
    });
    
    $('body').on('click',".zgh-search-iconn",function(){
        if(customvar.productName == "crm" || customvar.productName == "contracts" || customvar.productName == "desk" || customvar.productName == "zohobigin" || customvar.productName == "mail" || customvar.productName == "creator" ){
            $(".search-containerr").addClass("active");
        }
    });
    
    $(".star-rating span").click(function(){
        $(".star-rating span").removeClass("active");
        var thisVal = $(this).attr("data-val");
        
        for(var i=0; i<thisVal; i++){
            $(".star-rating span").eq(i).addClass("active");
        }
        
        $(".feedback-container #starrating").val(thisVal);
        $(".feedback-container").addClass("active");
    });
    
    $('.search-clearr').on('click', function(){
        searchHide();
    });
    
    $('.search-overlayy, .feedback-overlay').on('click', function(){
        searchHide();
    }); 
    
    function searchHide(){
        if($('.search-containerr').hasClass('active') ){
            $('.search-containerr').removeClass('active');  
            $('.search-fieldd').val('');
        }
        else if($('.feedback-container').hasClass('active') ){
            $('.feedback-container').removeClass('active');  
            $('.feedback-container textarea').val('');
        }
    }

    $(document).keyup(function(e) {
        if((e.keyCode === 27)){
            searchHide();
        }
    });
    
    if($(".api-right-panel").length > 0){
        var apiRightPanel = $(".api-right-panel").clone();
        $(".api-content-panel.ztwo-col > div").eq(0).find(".api-content-inner-wrap h1").after(apiRightPanel);
    }
});

if(customvar.productName == "salesiq"){ 
    $(".language-markdown, .language-http").each(function() {   
        var linkMd = /\[([^\]]+)\]\(([^)]+)\)/; 
        var thisCont = $(this).html();  
        var match = thisCont.match(linkMd); 
        if(match != null){  
            var formattedAnchor = thisCont.replace(match[0], '<a href="'+match[2]+'">'+match[1]+'</a>');    
            $(this).html(formattedAnchor);  
        }   
    }); 
}

function copyTextToClipboard(btnElem, copyData) 
{
    var text = copyData.trim();
    var isCopied;
        if (window.clipboardData && window.clipboardData.setData) 
        {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            isCopied = clipboardData.setData("Text", text); //NO I18N
        }
        else if (document.queryCommandSupported && document.queryCommandSupported("copy"))
        {
            var textarea = document.createElement("textarea");//NO I18N
            textarea.textContent = text;
            document.body.appendChild(textarea);
            textarea.select();
            try 
            {
                isCopied = document.execCommand("copy");  // Security exception may be thrown by some browsers. //NO I18N
            } catch (ex) {
                isCopied = false;
            } 
            document.body.removeChild(textarea);
        }
        
        if(isCopied)
        {
            $(btnElem).siblings(".copiedTooltip").addClass("copiedFadeOut");
            setTimeout(function() { $(".copiedTooltip").removeClass("copiedFadeOut"); } , 1000);
        }
}                

/* community icon starts */
$(document).ready(function () {
    if(customvar.productName == "contracts"){
         $('.api-content-wrap').append('<div class="zcommunity_fixed"><a target="_blank" href="https://help.zoho.com/portal/en/community/zoho-contracts/zoho-contracts-developer">&nbsp;</a><span class="community-tooltip">Zoho Contracts Developer Community</span></div>');
    }

    $(window).on("load", function() {
        if(customvar.productName == "contracts"){
            $(".product-nav-links-new ul li.zmenu-community a, .zmobile-menu-link ul li.zmenu-community a").text("Developer Community").attr({"href": "https://help.zoho.com/portal/en/community/zoho-contracts/zoho-contracts-developer"});
            $(".product-nav-links-new").css({"display" : "block"});
        }
    });
});
/* community icon ends */

/* crm faq starts */
function showans(ele) {
    $(ele).next('.data-desc-ans').slideToggle(200);
    $(ele).find('.faq-opn-icn').toggleClass('faq-clse-icn');
}
/* crm faq ends */
if(customvar.productName == "creativetest" || customvar.productName == "datagrid") {
    window.addEventListener("hashchange",() => {
        var target = location.hash;
        if(target !== undefined){
            if($(".api-right-panel:visible ul li a[href='" + target + "']").length) {
                var $target = $(target);  
                if(target) {     
                    if(customvar.productName == "datagrid") {
                        $('main').animate({   
                            'scrollTop': $target.position().top 
                        }, 1200);   
                    }
                }
            } else {
                target = target.split('#');
                navigationMenu('#' + target[1]);
                documentUrl = window.location.pathname + '#' + target[1];
                $(".zoho-parent-wrapper").empty();
                jsonToHtml();
                menuMatcher();
                $('main').animate({   
                    'scrollTop': $('#' + target[1]).position().top 
                }, 1200);   
            }
        }
            
    },false);
}