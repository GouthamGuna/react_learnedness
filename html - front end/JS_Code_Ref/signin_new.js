function strToBin(str) {
    return Uint8Array.from(atob(str), function (c) {
        return c.charCodeAt(0);
    });
}
function binToStr(bin) {
    return btoa(
        new Uint8Array(bin).reduce(function (s, byte) {
            return s + String.fromCharCode(byte);
        }, "")
    );
}
function isWebAuthNSupported() {
    return window.PublicKeyCredential ? !0 : !1;
}
function credentialListConversion(list) {
    return list.map(function (item) {
        var cred = { type: item.type, id: strToBin(item.id) };
        return null != item.transports && item.transports.length && (cred.transports = item.transports), cred;
    });
}
function ischaracter(obj) {
    var reg = /^[A-Za-z]+$/;
    return reg.test(obj);
}
function isNumeric(obj) {
    var reg = /^\d+$/;
    return reg.test(obj);
}
function getArrayFromObj(obj) {
    var objArr = [];
    return (
        $(obj).each(function () {
            objArr.push(this);
        }),
        objArr
    );
}
function addFlagIcon(element, country_code) {
    country_code = country_code.toLowerCase().trim();
    const paths = new Map([
        ["ac", 10],
        ["as", 6],
        ["va", 7],
        ["af", 6],
        ["ax", 4],
        ["al", 2],
        ["dz", 4],
        ["ad", 7],
        ["ao", 8],
        ["ai", 9],
        ["aq", 3],
        ["ag", 5],
        ["ar", 5],
        ["am", 4],
        ["aw", 7],
        ["au", 12],
        ["at", 3],
        ["az", 6],
        ["bs", 5],
        ["bh", 2],
        ["bd", 3],
        ["bb", 6],
        ["by", 6],
        ["be", 4],
        ["bz", 6],
        ["bj", 6],
        ["bm", 11],
        ["bt", 3],
        ["bo", 4],
        ["bq", 9],
        ["ba", 9],
        ["bw", 5],
        ["bv", 4],
        ["br", 5],
        ["io", 23],
        ["dg", 23],
        ["vg", 10],
        ["bn", 3],
        ["bg", 3],
        ["bf", 4],
        ["bi", 9],
        ["kh", 5],
        ["cm", 6],
        ["ca", 4],
        ["cv", 6],
        ["ky", 10],
        ["cf", 6],
        ["td", 4],
        ["cl", 4],
        ["cn", 4],
        ["cx", 10],
        ["cc", 10],
        ["co", 6],
        ["km", 6],
        ["cg", 3],
        ["cd", 5],
        ["caf", 4],
        ["cas", 3],
        ["coc", 3],
        ["ceu", 4],
        ["cna", 3],
        ["csa", 3],
        ["ck", 7],
        ["cr", 4],
        ["ci", 3],
        ["hr", 6],
        ["cu", 6],
        ["cw", 4],
        ["cy", 5],
        ["cz", 3],
        ["dk", 2],
        ["dj", 5],
        ["domain", 3],
        ["do", 9],
        ["dm", 9],
        ["ec", 7],
        ["eg", 5],
        ["sv", 5],
        ["gq", 5],
        ["er", 12],
        ["ee", 3],
        ["et", 6],
        ["eu", 3],
        ["fk", 29],
        ["fo", 3],
        ["fj", 10],
        ["fi", 2],
        ["fr", 3],
        ["gf", 3],
        ["pf", 41],
        ["tf", 14],
        ["gm", 5],
        ["ge", 6],
        ["de", 6],
        ["gh", 5],
        ["gi", 13],
        ["ga", 4],
        ["gr", 2],
        ["gl", 4],
        ["gd", 7],
        ["gp", 25],
        ["gu", 20],
        ["gt", 5],
        ["gg", 9],
        ["gn", 4],
        ["gw", 5],
        ["gy", 6],
        ["ht", 10],
        ["hm", 12],
        ["hn", 8],
        ["hk", 3],
        ["hu", 3],
        ["is", 4],
        ["in", 6],
        ["id", 2],
        ["ir", 7],
        ["iq", 8],
        ["ie", 3],
        ["im", 36],
        ["il", 5],
        ["it", 3],
        ["jm", 5],
        ["jp", 2],
        ["je", 8],
        ["jo", 5],
        ["kz", 5],
        ["ke", 10],
        ["ki", 14],
        ["xk", 8],
        ["kw", 4],
        ["kg", 4],
        ["la", 5],
        ["lv", 3],
        ["lb", 4],
        ["ls", 5],
        ["lr", 4],
        ["ly", 7],
        ["li", 3],
        ["lt", 4],
        ["lu", 3],
        ["mo", 4],
        ["mg", 3],
        ["mw", 5],
        ["my", 4],
        ["mv", 4],
        ["ml", 4],
        ["mt", 5],
        ["mh", 4],
        ["mq", 7],
        ["mr", 3],
        ["mu", 5],
        ["yt", 4],
        ["mx", 5],
        ["fm", 3],
        ["md", 5],
        ["mc", 2],
        ["mn", 5],
        ["me", 5],
        ["ms", 9],
        ["ma", 3],
        ["mz", 7],
        ["mm", 5],
        ["na", 4],
        ["nr", 3],
        ["np", 5],
        ["nl", 3],
        ["an", 8],
        ["nc", 7],
        ["nz", 10],
        ["ni", 5],
        ["ne", 4],
        ["ng", 3],
        ["nu", 7],
        ["nf", 3],
        ["kp", 6],
        ["mk", 8],
        ["mp", 145],
        ["no", 3],
        ["om", 4],
        ["pk", 3],
        ["pw", 3],
        ["ps", 5],
        ["pa", 5],
        ["pg", 8],
        ["py", 5],
        ["pe", 3],
        ["ph", 4],
        ["pn", 38],
        ["pl", 2],
        ["pt", 6],
        ["pr", 5],
        ["qa", 2],
        ["re", 4],
        ["ro", 4],
        ["ru", 3],
        ["rw", 6],
        ["bq-1", 4],
        ["bl", 117],
        ["mf", 4],
        ["ws", 7],
        ["sm", 4],
        ["st", 7],
        ["sa", 6],
        ["sn", 5],
        ["rs", 6],
        ["sc", 6],
        ["sl", 3],
        ["sg", 3],
        ["bq-2", 8],
        ["sx", 11],
        ["sk", 7],
        ["si", 4],
        ["sb", 8],
        ["so", 3],
        ["za", 7],
        ["gs", 32],
        ["kr", 4],
        ["ss", 7],
        ["es", 10],
        ["lk", 7],
        ["sh", 11],
        ["kn", 6],
        ["lc", 6],
        ["pm", 4],
        ["vc", 5],
        ["sd", 4],
        ["sr", 5],
        ["sj", 4],
        ["sz", 9],
        ["se", 3],
        ["ch", 3],
        ["sy", 5],
        ["tw", 4],
        ["tj", 4],
        ["tz", 6],
        ["th", 4],
        ["tl", 5],
        ["tg", 5],
        ["tk", 7],
        ["to", 3],
        ["tt", 6],
        ["tn", 3],
        ["tr", 4],
        ["tm", 20],
        ["tc", 12],
        ["tv", 23],
        ["ug", 9],
        ["ua", 3],
        ["ae", 4],
        ["gb", 13],
        ["us", 5],
        ["um", 5],
        ["uy", 3],
        ["vi", 18],
        ["uz", 4],
        ["vu", 9],
        ["ve", 5],
        ["vn", 3],
        ["wf", 4],
        ["eh", 6],
        ["ye", 3],
        ["zm", 18],
        ["zw", 11],
    ]);
    var no_of_paths = paths.get(country_code),
        root = document.createElement("span");
    root.classList.add("flag-" + country_code), element.append(root);
    for (var i = 1; no_of_paths >= i; i++) {
        var path = document.createElement("span");
        path.classList.add("path" + i), root.append(path);
    }
}
function validateConfirmPassword(pass_ele) {
    var confirm_ele;
    confirm_ele = 0 == $(".signup_container").length || $(pass_ele).parent().hasClass("idp_infomation_card") ? $(pass_ele).parent().next().next().children("input") : $(pass_ele).parent().next().children("input");
    var newPassword = $(pass_ele).val(),
        confPassword = $(confirm_ele).val();
    return "" != newPassword && "" != confPassword
        ? newPassword == confPassword && $(pass_ele).siblings(".pass_allow_indi").hasClass("show_pass_allow_indi")
            ? ($(confirm_ele).siblings(".pass_allow_indi").addClass("show_pass_allow_indi"), !0)
            : ($(confirm_ele).siblings(".pass_allow_indi").removeClass("show_pass_allow_indi"), !1)
        : void 0;
}
function changePasswordCheckIndicator(ele, changePositive) {
    return changePositive ? ($(ele).addClass("grn_tick"), !0) : ($(ele).removeClass("grn_tick"), !1);
}
function validatePassword(pass_ele) {
    var ppCheckValue = !0,
        password = $(pass_ele).val();
    return (
        $(".password_indicator span").addClass("grn_tick"),
        PasswordPolicy.isHaveMinLength(password) || 0 == PasswordPolicy.data.min_length || (changePasswordCheckIndicator("#char_check", !1), (ppCheckValue = !1)),
        PasswordPolicy.isHavingSpecialChars(password) || 0 == PasswordPolicy.data.min_spl_chars || (changePasswordCheckIndicator("#spcl_char_check", !1), (ppCheckValue = !1)),
        PasswordPolicy.isHavingNumber(password) || 0 == PasswordPolicy.data.min_numeric_chars || (changePasswordCheckIndicator("#num_check", !1), (ppCheckValue = !1)),
        JSON.parse(PasswordPolicy.data.mixed_case) &&
            (PasswordPolicy.isHavingUpperCase(password) || (changePasswordCheckIndicator("#uppercase_check", !1), (ppCheckValue = !1)),
            PasswordPolicy.isHavingLowerCase(password) || (changePasswordCheckIndicator("#lowercase_check", !1), (ppCheckValue = !1))),
        validPasswordChanges(ppCheckValue, pass_ele),
        ppCheckValue
    );
}
function validPasswordChanges(isValidPass, ele) {
    $(ele).val().length <= 0 && ($(".password_indicator").slideUp(300), $(".pass_allow_indi").removeClass("show_pass_allow_indi")),
        $(".password_indicator").is(":visible") || isValidPass || $(".password_indicator").slideDown(300),
        isValidPass ? ($(".password_indicator").slideUp(300), $(ele + "~.pass_allow_indi").addClass("show_pass_allow_indi")) : $(ele + "~.pass_allow_indi").removeClass("show_pass_allow_indi"),
        validateConfirmPassword(ele);
}
function setFooterPosition() {
    var top_value = window.innerHeight - 60;
    $(".container")[0] && $(".container")[0].offsetHeight + $(".container")[0].offsetTop < top_value
        ? $("#footer").css("top", top_value + "px")
        : $("#footer").css("top", $(".container")[0] && $(".container")[0].offsetHeight + $(".container")[0].offsetTop + "px");
}
function hideLoadinginButton() {
    $("#loadingImg").is(":visible") && $("#loadingImg").hide();
}
function isEmailId(str) {
    if (!str) return !1;
    str = str.trim();
    var objRegExp = new XRegExp("^[\\p{L}\\p{N}\\p{M}\\_]([\\p{L}\\p{N}\\p{M}\\_\\+\\-\\.\\'\\&\\!\\*]*)@(?=.{4,256}$)(([\\p{L}\\p{N}\\p{M}]+)(([\\-\\_]*[\\p{L}\\p{N}\\p{M}])*)[\\.])+[\\p{L}\\p{M}]{2,22}$", "i");
    return XRegExp.test(str, objRegExp);
}
function isEmailIdSignin(str) {
    if (!str) return !1;
    var objRegExp = new XRegExp("^[\\p{L}\\p{N}\\p{M}\\_]([\\p{L}\\p{N}\\p{M}\\_\\+\\-\\.\\'\\&\\!\\*]*)@(?=.{4,256}$)(([\\p{L}\\p{N}\\p{M}]+)(([\\-\\_]*[\\p{L}\\p{N}\\p{M}])*)[\\.])+[\\p{L}\\p{M}]{2,22}$", "i");
    return XRegExp.test(str.trim(), objRegExp);
}
function isPhoneNumber(str) {
    if (!str) return !1;
    str = str.trim();
    var objRegExp = /^([0-9]{7,14})$/;
    return objRegExp.test(str);
}
function formatMessage() {
    var msg = arguments[0];
    if (void 0 != msg) for (var i = 1; i < arguments.length; i++) msg = msg.replace("{" + (i - 1) + "}", escapeHTML(arguments[i]));
    return msg;
}
function escapeHTML(value) {
    return value && ((value = value.replace("<", "&lt;")), (value = value.replace(">", "&gt;")), (value = value.replace('"', "&quot;")), (value = value.replace("'", "&#x27;")), (value = value.replace("/", "&#x2F;"))), value;
}
function de(id) {
    return document.getElementById(id);
}
function euc(i) {
    return encodeURIComponent(i);
}
function isEmpty(str) {
    return str ? !1 : !0;
}
function getPlainResponse(action, params) {
    "undefined" != typeof contextpath && (action = contextpath + action), 0 === params.indexOf("&") && (params = params.substring(1));
    var objHTTP;
    return (
        (objHTTP = xhr()),
        objHTTP.open("POST", action, !1),
        objHTTP.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
        isEmpty(params) && (params = "__d=e"),
        objHTTP.setRequestHeader("Content-length", params.length),
        objHTTP.send(params),
        objHTTP.responseText
    );
}
function getErrorMessage(response) {
    var msg = void 0 != response.localized_message ? response.localized_message : void 0 != response.message ? response.message : err_try_again;
    return msg;
}
function showErrMsg(msg) {
    $("#error_space").removeClass("show_error"),
        $(".cross_mark").removeClass("cross_mark_success"),
        $(".cross_mark").css("background", "#DA6161"),
        $(".top_msg").html(msg),
        $(".cross_mark").addClass("cross_mark_error"),
        $("#error_space").addClass("show_error"),
        setTimeout(function () {
            $("#error_space").removeClass("show_error"), $(".cross_mark").removeClass("cross_mark_error"), $(".top_msg").html("");
        }, 5e3);
}
function showmsg(msg) {
    $("#error_space").removeClass("show_error"),
        $(".cross_mark").removeClass("cross_mark_error"),
        $(".cross_mark").css("background", "#69C585"),
        $(".top_msg").html(msg),
        $(".cross_mark").addClass("cross_mark_success"),
        $("#error_space").addClass("show_error"),
        setTimeout(function () {
            $("#error_space").removeClass("show_error"), $(".cross_mark").removeClass("cross_mark_success"), $(".top_msg").html("");
        }, 5e3);
}
function show_blur_screen() {
    $(".blur").css({ "z-index": 3, opacity: 0.6 }), $("html, body").css({ overflow: "hidden" });
}
function xhr() {
    var xmlhttp;
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else if (window.ActiveXObject)
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    return xmlhttp;
}
function sendRequestWithCallback(action, params, async, callback, method) {
    "undefined" != typeof contextpath && (action = contextpath + action);
    var objHTTP = xhr();
    objHTTP.open(method ? method : "POST", action, async),
        objHTTP.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
        objHTTP.setRequestHeader("X-ZCSRF-TOKEN", csrfParam + "=" + euc(getCookie(csrfCookieName))),
        async &&
            (objHTTP.onreadystatechange = function () {
                if (4 == objHTTP.readyState) {
                    if (0 === objHTTP.status) return handleConnectionError(), !1;
                    callback && callback(objHTTP.responseText);
                }
            }),
        objHTTP.send(params),
        async || (callback && callback(objHTTP.responseText));
}
function redirectLink(link, ele) {
    ele && disabledButton(ele), (window.location.href = link);
}
function err_remove() {
    $(".err_text").remove(), $(".chk_err_text").remove(), $(".textbox_div").removeClass("error_field_card");
}
function disabledButton(form_ele) {
    $(form_ele).attr("disabled", "disabled"), $(form_ele).addClass("disable_button");
}
function removeButtonDisable(form_ele) {
    $(form_ele).removeAttr("disabled"), $(form_ele).removeClass("disable_button");
}
function getCookie(cname) {
    for (var name = cname + "=", decodedCookie = decodeURIComponent(document.cookie), ca = decodedCookie.split(";"), i = 0; i < ca.length; i++) {
        for (var c = ca[i]; " " == c.charAt(0); ) c = c.substring(1);
        if (0 == c.indexOf(name)) return c.substring(name.length, c.length);
    }
    return "";
}
function isUserName(str) {
    if (!str) return !1;
    var objRegExp = new XRegExp("^[\\p{L}\\p{N}\\p{M}\\_\\.]+$", "i");
    return XRegExp.test(str.trim(), objRegExp);
}
function isValidNameString(str) {
    var objRegExp = new XRegExp("^[\\p{L}\\p{M}\\p{N}\\-\\_\\ \\.\\+\\!\\[\\]\\']+$", "i");
    return objRegExp.test(str.trim());
}
function doGet(action, params) {
    "undefined" != typeof contextpath && (action = contextpath + action);
    var objHTTP;
    return (
        (objHTTP = xhr()),
        isEmpty(params) && (params = "__d=e"),
        objHTTP.open("GET", action + "?" + params, !1),
        objHTTP.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
        objHTTP.send(params),
        objHTTP.responseText
    );
}
function check_pp(cases, spl, num, minlen, formID, passInputID) {
    validatePasswordPolicy().validate(formID, passInputID);
}
function validatePasswordPolicy(passwordPolicy) {
    passwordPolicy = passwordPolicy || PasswordPolicy.data;
    var initCallback = function (id, msg) {
            var li = document.createElement("li");
            return li.setAttribute("id", "pp_" + id), li.setAttribute("class", "pass_policy_rule"), (li.textContent = msg), li;
        },
        setErrCallback = function (id) {
            return $("#pp_" + id).removeClass("success"), id;
        };
    return {
        getErrorMsg: function (value, callback) {
            if (passwordPolicy) {
                var isInit = value ? !1 : !0;
                (value = value || ""), (callback = callback || setErrCallback);
                var rules = ["MIN_MAX", "SPL", "NUM", "CASE"],
                    err_rules = [];
                isInit || $(".pass_policy_rule").addClass("success");
                for (var i = 0; i < rules.length; i++)
                    switch (rules[i]) {
                        case "MIN_MAX":
                            (value.length < passwordPolicy.min_length || value.length > passwordPolicy.max_length) &&
                                err_rules.push(callback(rules[i], isInit ? formatMessage(I18N.get("IAM.PASS_POLICY.MIN_MAX"), passwordPolicy.min_length.toString(), passwordPolicy.max_length.toString()) : void 0));
                            break;
                        case "SPL":
                            passwordPolicy.min_spl_chars > 0 &&
                                (value.match(new RegExp("[^a-zA-Z0-9]", "g")) || []).length < passwordPolicy.min_spl_chars &&
                                err_rules.push(callback(rules[i], isInit ? formatMessage(I18N.get(1 === passwordPolicy.min_spl_chars ? "IAM.PASS_POLICY.SPL_SING" : "IAM.PASS_POLICY.SPL"), passwordPolicy.min_spl_chars.toString()) : void 0));
                            break;
                        case "NUM":
                            passwordPolicy.min_numeric_chars > 0 &&
                                (value.match(new RegExp("[0-9]", "g")) || []).length < passwordPolicy.min_numeric_chars &&
                                err_rules.push(
                                    callback(rules[i], isInit ? formatMessage(I18N.get(1 === passwordPolicy.min_numeric_chars ? "IAM.PASS_POLICY.NUM_SING" : "IAM.PASS_POLICY.NUM"), passwordPolicy.min_numeric_chars.toString()) : void 0)
                                );
                            break;
                        case "CASE":
                            !passwordPolicy.mixed_case || (new RegExp("[A-Z]", "g").test(value) && new RegExp("[a-z]", "g").test(value)) || err_rules.push(callback(rules[i], isInit ? I18N.get("IAM.PASS_POLICY.CASE") : void 0));
                    }
                return err_rules.length && err_rules;
            }
        },
        init: function (passInputID) {
            $(".hover-tool-tip").remove();
            var tooltip = document.createElement("div");
            tooltip.setAttribute("class", isMobile ? "hover-tool-tip no-arrow" : "hover-tool-tip");
            var p = document.createElement("p");
            p.textContent = I18N.get("IAM.PASS_POLICY.HEADING");
            var ul = document.createElement("ul"),
                errList = this.getErrorMsg(void 0, initCallback);
            errList &&
                (errList.forEach(function (eachLi) {
                    ul.appendChild(eachLi);
                }),
                tooltip.appendChild(p),
                tooltip.appendChild(ul),
                document.querySelector("body").appendChild(tooltip),
                $(passInputID).on("focus blur", function (e) {
                    if ("focus" === e.type) {
                        var offset = document.querySelector(passInputID).getBoundingClientRect();
                        $(".hover-tool-tip").css(isMobile ? { top: offset.bottom + $(window).scrollTop() + 8, left: offset.x, width: offset.width - 40 } : { top: offset.y + $(window).scrollTop(), left: offset.x + offset.width + 15 }),
                            $(".hover-tool-tip").css("opacity", 1);
                    } else {
                        $(".hover-tool-tip").css("opacity", 0);
                        var offset = document.querySelector(".hover-tool-tip").getBoundingClientRect();
                        $(".hover-tool-tip").css({ top: -offset.height, left: -(offset.width + 15) });
                    }
                }));
        },
        validate: function (formID, passInputID) {
            var str = $(passInputID).val();
            this.getErrorMsg(str, setErrCallback) ? $(".hover-tool-tip").css("opacity", 1) : $(".hover-tool-tip").css("opacity", 0);
        },
    };
}
function isNumeric(obj) {
    var reg = /^\d+$/;
    return reg.test(obj);
}
function decodeHTML(t) {
    return "" != t ? $("<textarea />").html(t).text() : "";
}
function updateIcon() {
    $(".selectbox_options_container--Mobile").width($(".selectbox--Mobile").outerWidth() + "px"),
        $(".option--Mobile p").addClass("icon-Mobile"),
        $(".icon-Mobile").each(function () {
            $(this).html("<span style=width:" + $(".option--Mobile").width() + "px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-family:ZohoPuvi;>" + $(this).text() + "</span>");
        });
}
function ischaracter(obj) {
    var reg = /^[A-Za-z]+$/;
    return reg.test(obj);
}
function renderUV(locator, search, drpWidth, drpAlign, embedIcon, CF, CC, theme, Mobstyle) {
    $(locator).uvselect({
        searchable: search,
        "dropdown-width": $(drpWidth).outerWidth() + "px",
        "dropdown-align": drpAlign,
        "embed-icon-class": embedIcon,
        "country-flag": CF,
        "country-code": CC,
        theme: theme,
        prevent_mobile_style: Mobstyle,
    });
}
function submitsignin(frm) {
    if (($(".signin_head .fielderror").removeClass("errorlabel"), $(".signin_head .fielderror").text(""), isFormSubmited)) return !1;
    $("#nextbtn span").addClass("zeroheight"),
        $("#nextbtn").addClass("changeloadbtn"),
        $("#nextbtn").attr("disabled", !0),
        $("#totpverifybtn").is(":visible") && ($("#totpverifybtn .loadwithbtn").show(), $("#totpverifybtn .waittext").addClass("loadbtntext"));
    var isCaptchaNeeded = $("#captcha_container").is(":visible"),
        captchavalue = frm.captcha && frm.captcha.value.trim();
    if (isCaptchaNeeded) {
        if (!isValid(captchavalue)) return changeHip(), showCommonError("captcha", I18N.get("IAM.SIGNIN.ERROR.CAPTCHA.REQUIRED")), !1;
        if (/[^a-zA-Z0-9\-\/]/.test(captchavalue)) return changeHip(), showCommonError("captcha", I18N.get("IAM.SIGNIN.ERROR.CAPTCHA.INVALID")), !1;
    }
    if ("lookup" === signinathmode) {
        var LOGIN_ID = frm.LOGIN_ID.value.trim();
        if (($("#portaldomain").is(":visible") && (LOGIN_ID += $(".domainselect").val()), !isValid(LOGIN_ID))) return showCommonError("login_id", I18N.get("IAM.NEW.SIGNIN.ENTER.EMAIL.OR.MOBILE")), !1;
        if (($(".showcountry_code").is(":visible") || $(".select_container--country_implement").is(":visible")) && !isPhoneNumber(LOGIN_ID)) return showCommonError("login_id", I18N.get("IAM.PHONE.ENTER.VALID.MOBILE_NUMBER")), !1;
        if (!isUserName(LOGIN_ID) && !isEmailIdSignin(LOGIN_ID) && !isPhoneNumber(LOGIN_ID.split("-")[1])) return showCommonError("login_id", I18N.get("IAM.SIGNIN.ERROR.USEREMAIL.NOT.EXIST")), !1;
        (LOGIN_ID = $(".select_country_code").is(":visible") || $(".select_container--country_implement").is(":visible") ? $("#country_code_select").val().split("+")[1] + "-" + LOGIN_ID : LOGIN_ID),
            (LOGIN_ID = isPhoneNumber(LOGIN_ID.split("-")[1]) ? LOGIN_ID.split("-")[0].trim() + "-" + LOGIN_ID.split("-")[1].trim() : LOGIN_ID);
        var loginurl = uriPrefix + "/signin/v2/lookup/" + LOGIN_ID,
            params = "mode=primary&" + signinParams;
        return isCaptchaNeeded && (params += "&captcha=" + captchavalue + "&cdigest=" + cdigest), sendRequestWithCallback(loginurl, params, !0, handleLookupDetails), !1;
    }
    if ("passwordauth" === signinathmode) {
        if (void 0 != allowedmodes && -1 != allowedmodes.indexOf("yubikey") && !isWebAuthNSupported()) return showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.BrowserNotSupported")), changeButtonAction(I18N.get("IAM.NEXT"), !1), !1;
        var PASSWORD = frm.PASSWORD.value.trim();
        if (!isValid(PASSWORD)) return showCommonError("password", I18N.get("IAM.ERROR.ENTER_PASS")), !1;
        var jsonData = { passwordauth: { password: PASSWORD } },
            loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/password?";
        return (
            (loginurl += "digest=" + digest + "&" + signinParams),
            isCaptchaNeeded && (loginurl += "&captcha=" + captchavalue + "&cdigest=" + cdigest),
            sendRequestWithCallback(loginurl, JSON.stringify(jsonData), !0, handlePasswordDetails),
            !1
        );
    }
    if ("totpsecauth" === signinathmode || ("oneauthsec" === signinathmode && "ONEAUTH_TOTP" === prefoption)) {
        if (isClientPortal) var TOTP = frm.TOTP.value.trim();
        else var TOTP = document.getElementById("mfa_totp").firstChild.value.trim();
        if (!isValid(TOTP)) return showCommonError("mfa_totp", I18N.get("IAM.NEW.SIGNIN.INVALID.OTP.MESSAGE.EMPTY")), !1;
        if (6 != TOTP.length) return showCommonError("mfa_totp", I18N.get("IAM.ERROR.VALID.OTP")), !1;
        if (/[^0-9\-\/]/.test(TOTP)) return showCommonError("mfa_totp", I18N.get("IAM.SIGNIN.ERROR.INVALID.VERIFICATION.CODE")), !1;
        callmode = "secondary";
        var loginurl = "ONEAUTH_TOTP" === prefoption ? uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/oneauth/" + deviceid + "?" : uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/totp?";
        (loginurl += "digest=" + digest + "&" + signinParams), isCaptchaNeeded && (loginurl += "&captcha=" + captchavalue + "&cdigest=" + cdigest);
        var jsonData = "ONEAUTH_TOTP" === prefoption ? { oneauthsec: { devicepref: prefoption, code: TOTP } } : { totpsecauth: { code: TOTP } },
            method = "ONEAUTH_TOTP" === prefoption ? "PUT" : "POST";
        return (loginurl = "ONEAUTH_TOTP" === prefoption ? loginurl + "&polling=" + !1 : loginurl), sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handleTotpDetails, method), !1;
    }
    if ("otpsecauth" === signinathmode) {
        if (isClientPortal) var TFA_OTP_CODE = frm.MFAOTP.value.trim();
        else var TFA_OTP_CODE = $("#mfa_otp input:first-child").val() && $("#mfa_otp input:first-child").val().trim();
        var errorfield = "mfa_otp",
            incorrectOtpErr = I18N.get("IAM.NEW.SIGNIN.INVALID.OTP.MESSAGE.NEW");
        if (
            ("email" === prev_showmode &&
                ((TFA_OTP_CODE = isClientPortal ? frm.MFAEMAIL.value.trim() : $("#mfa_email input:first-child").val() && $("#mfa_email input:first-child").val().trim()),
                (errorfield = "mfa_email"),
                (incorrectOtpErr = I18N.get("IAM.NEW.SIGNIN.INVALID.EMAIL.MESSAGE.NEW"))),
            !isValid(TFA_OTP_CODE))
        )
            return showCommonError(errorfield, I18N.get("IAM.NEW.SIGNIN.INVALID.OTP.MESSAGE.EMPTY")), !1;
        if (isNaN(TFA_OTP_CODE) || 7 != TFA_OTP_CODE.length) return showCommonError(errorfield, incorrectOtpErr), !1;
        if (/[^0-9\-\/]/.test(TFA_OTP_CODE)) return showCommonError(errorfield, I18N.get("IAM.SIGNIN.ERROR.INVALID.VERIFICATION.CODE")), !1;
        var mode = "email" === prev_showmode ? "EMAIL" : "MOBILE";
        callmode = "secondary";
        var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/otp/" + emobile + "?";
        (loginurl += "digest=" + digest + "&" + signinParams), isCaptchaNeeded && (loginurl += "&captcha=" + captchavalue + "&cdigest=" + cdigest);
        var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA,
            jsonData = isAMFA ? { otpsecauth: { mdigest: mdigest, code: TFA_OTP_CODE, isAMFA: !0, mode: mode } } : { otpsecauth: { mdigest: mdigest, code: TFA_OTP_CODE, mode: mode } };
        return sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handleTotpDetails, "PUT"), !1;
    }
    if ("otpauth" === signinathmode) {
        if (isClientPortal) var OTP_CODE = frm.OTP.value.trim();
        else var OTP_CODE = document.getElementById("otp").firstChild.value.trim();
        if (void 0 != allowedmodes && -1 != allowedmodes.indexOf("yubikey") && !isWebAuthNSupported())
            return showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.BrowserNotSupported")), changeButtonAction(I18N.get("IAM.NEW.SIGNIN.VERIFY"), !1), !1;
        if (!isValid(OTP_CODE)) return showCommonError("otp", I18N.get("IAM.NEW.SIGNIN.INVALID.OTP.MESSAGE.EMPTY")), !1;
        if (isNaN(OTP_CODE) || 7 != OTP_CODE.length) {
            var error_msg = I18N.get("email" === prev_showmode ? "IAM.NEW.SIGNIN.INVALID.EMAIL.MESSAGE.NEW" : "IAM.NEW.SIGNIN.INVALID.OTP.MESSAGE.NEW");
            return showCommonError("otp", error_msg), !1;
        }
        if (/[^0-9\-\/]/.test(OTP_CODE)) return showCommonError("otp", I18N.get("IAM.SIGNIN.ERROR.INVALID.VERIFICATION.CODE")), !1;
        var mode = "email" === prev_showmode ? "EMAIL" : "MOBILE",
            loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/otp/" + emobile + "?";
        (loginurl += "digest=" + digest + "&" + signinParams), isCaptchaNeeded && (loginurl += "&captcha=" + captchavalue + "&cdigest=" + cdigest);
        var jsonData = { otpauth: { code: OTP_CODE, is_resend: !1, mode: mode } };
        return sendRequestWithCallback(loginurl, JSON.stringify(jsonData), !0, handlePasswordDetails, "PUT"), !1;
    }
    if ("deviceauth" === signinathmode || "devicesecauth" === signinathmode) {
        var myzohototp;
        if ("totp" === prefoption) {
            if (
                ((myzohototp = isClientPortal
                    ? isTroubleSignin
                        ? frm.MFATOTP.value.trim()
                        : frm.TOTP.value.trim()
                    : isTroubleSignin
                    ? document.getElementById("verify_totp").firstChild.value.trim()
                    : document.getElementById("mfa_totp").firstChild.value.trim()),
                !isValid(myzohototp))
            ) {
                var container = isTroubleSignin ? "verify_totp" : "mfa_totp";
                return showCommonError(container, I18N.get("IAM.NEW.SIGNIN.INVALID.OTP.MESSAGE.EMPTY")), !1;
            }
            if (6 != myzohototp.length) {
                var container = isTroubleSignin ? "verify_totp" : "mfa_totp";
                return showCommonError(container, I18N.get("IAM.ERROR.VALID.OTP")), !1;
            }
        }
        var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/device/" + deviceid + "?";
        (loginurl += "digest=" + digest + "&" + signinParams), (isResend = "push" === prefoption ? !0 : !1);
        var jsonData = "totp" === prefoption ? { devicesecauth: { devicepref: prefoption, code: myzohototp } } : { devicesecauth: { devicepref: prefoption } };
        "deviceauth" === signinathmode && (jsonData = "totp" === prefoption ? { deviceauth: { devicepref: prefoption, code: myzohototp } } : { deviceauth: { devicepref: prefoption } });
        var method = "POST",
            invoker = handleMyZohoDetails;
        return "totp" === prefoption && ((method = "PUT"), (loginurl += "&polling=" + !1), (invoker = handleTotpDetails)), sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, invoker, method), !1;
    }
    if ("oneauthsec" === signinathmode) {
        var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/oneauth/" + deviceid + "?";
        loginurl += "digest=" + digest + "&" + signinParams;
        var jsonData = { oneauthsec: { devicepref: prefoption } };
        return (isResend = "totp" === prefoption || "scanqr" === prefoption ? !1 : !0), sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handleOneAuthDetails), !1;
    }
    if ("yubikeysecauth" === signinathmode) {
        if ((clearCommonError("yubikey"), !isWebAuthNSupported())) return showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.BrowserNotSupported")), !1;
        var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/yubikey/self?" + signinParams;
        return sendRequestWithTemptoken(loginurl, "", !0, handleYubikeyDetails), !1;
    }
    return void 0 == signinathmode
        ? ($("#nextbtn span").removeClass("zeroheight"),
          $("#nextbtn").removeClass("changeloadbtn"),
          $("#nextbtn").attr("disabled", !1),
          $("#totpverifybtn").is(":visible") && ($("#totpverifybtn .loadwithbtn").hide(), $("#totpverifybtn .waittext").removeClass("loadbtntext")),
          !1)
        : ((isFormSubmited = !0), !1);
}
function sendRequestWithTemptoken(action, params, async, callback, method) {
    "undefined" != typeof contextpath && (action = contextpath + action);
    var objHTTP = xhr();
    objHTTP.open(method ? method : "POST", action, async),
        objHTTP.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
        isValid(temptoken) && objHTTP.setRequestHeader("Z-Authorization", "Zoho-ticket " + temptoken),
        objHTTP.setRequestHeader("X-ZCSRF-TOKEN", csrfParam + "=" + euc(getCookie(csrfCookieName))),
        async &&
            (objHTTP.onreadystatechange = function () {
                if (4 == objHTTP.readyState) {
                    if (0 === objHTTP.status) return handleConnectionError(), !1;
                    callback && callback(objHTTP.responseText);
                }
            }),
        objHTTP.send(params),
        async || (callback && callback(objHTTP.responseText));
}
function showCommonError(field, message) {
    if (($(".fielderror").val(""), $(".changeloadbtn").is(":visible"))) {
        var btnvalue = I18N.get("login_id" === field ? "IAM.NEXT" : "password" === field ? "IAM.SIGN_IN" : "IAM.NEW.SIGNIN.VERIFY");
        changeButtonAction(btnvalue, !1);
    }
    "captcha" === field ? ($("#bcaptcha_container").is(":visible") ? changeHip("bcaptcha_img", "bcaptcha") : changeHip()) : $("#captcha_container,#bcaptcha_container").hide(),
        $(".sendingotp").is(":visible") && ($(".resendotp").removeClass("sendingotp").addClass("nonclickelem"), $(".resendotp").text(I18N.get("IAM.NEW.SIGNIN.RESEND.OTP")));
    var container = field + "_container";
    return (
        $("#" + field).addClass("errorborder"),
        $("#" + container + " .fielderror").addClass("errorlabel"),
        $("#" + container + " .fielderror").html(message),
        $("#" + container + " .fielderror").slideDown(200),
        $("#" + field).focus(),
        $("#totpverifybtn").is(":visible") && ($("#totpverifybtn .loadwithbtn").hide(), $("#totpverifybtn .waittext").removeClass("loadbtntext")),
        !1
    );
}
function callback_signin_lookup(msg) {
    return (
        showCommonError("login_id", msg), $("#nextbtn span").removeClass("zeroheight"), $("#nextbtn").removeClass("changeloadbtn"), $("#nextbtn").attr("disabled", !1), $("#nextbtn span").text(I18N.get("IAM.NEXT")), (isFormSubmited = !1), !1
    );
}
function changeButtonAction(textvalue, isSubmitted) {
    return $("#nextbtn span").removeClass("zeroheight"), $("#nextbtn").removeClass("changeloadbtn"), $("#nextbtn").attr("disabled", !1), $("#nextbtn span").html(textvalue), (isFormSubmited = isSubmitted), !1;
}
function identifyEmailOrNum(login_id, encryptedMobile) {
    var userLogin = isValid(login_id) ? login_id : deviceauthdetails[deviceauthdetails.resource_name].loginid;
    return isPhoneNumber(userLogin.split("-")[1]) || encryptedMobile ? "+" + userLogin.split("-")[0] + " " + userLogin.split("-")[1] : userLogin;
}
function enablePassword(loginId, isOTP, isSaml, isFederated, isNoPassword, isJwt, isEOTP) {
    if (
        (changeButtonAction(I18N.get("IAM.SIGN_IN"), !1),
        $("#login_id_container,#showIDPs").slideUp(200),
        $("#password_container").removeClass("zeroheight"),
        $("#password_container").slideDown(200),
        $(".backbtn").show(),
        $("#captcha_container,.line").hide(),
        $(".username").text(identifyEmailOrNum()),
        $("#forgotpassword").hide(),
        !isFederated && isNoPassword && (isOTP || isEOTP))
    ) {
        if (($("#password_container .textbox_div,#nextbtn").hide(), $(".nopassword_container").css("position", "unset"), $(".nopassword_container").css("width", "100%"), $(".nopassword_container").show(), !isOTP && !isEOTP)) return !1;
        $("#nextbtn").show();
    }
    if (
        ($("#password").focus(),
        (signinathmode = "passwordauth"),
        isOTP && isEOTP
            ? ($("#enablemore").show(), $("#enableforgot").hide())
            : isOTP
            ? ($("#enableotpoption").show(), (emobile = deviceauthdetails.lookup.modes.otp.data[0].e_mobile), (rmobile = identifyEmailOrNum(deviceauthdetails.lookup.modes.otp.data[0].r_mobile, !0)))
            : isEOTP &&
              ($("#enableotpoption").show(),
              (isEmailVerifyReqiured = deviceauthdetails.lookup.isUserName ? !0 : !1),
              (emobile = deviceauthdetails.lookup.modes.email.data[0].e_email),
              (rmobile = deviceauthdetails.lookup.modes.email.data[0].email)),
        isSaml && $("#enablesaml").show(),
        isFederated)
    ) {
        $(".fed_2show").show(), $(".fed_div").hide(), $(".googleIcon").removeClass("google_small_icon"), isOTP || isSaml || $("#enableforgot").show();
        var idps = deviceauthdetails.lookup.modes.federated.data;
        idps.forEach(function (idps) {
            isValid(idps) && ((idp = idps.idp.toLowerCase()), $("." + idp + "_fed").attr("style", "display:block !important"));
        }),
            $(".apple_fed").is(":visible") && (isneedforGverify ? $("#macappleicon").hide() : ($(".apple_fed").hide(), $("#macappleicon").show(), $(".googleIcon").addClass("google_small_icon"))),
            isNoPassword && isFederated && !isOTP && !isEOTP && ($("#password_container .textbox_div,#nextbtn").hide(), $(".nopassword_container").css("position", "absolute"), $(".nopassword_container").show());
    }
    if ((isNoPassword || $("#signinwithpass").show(), isJwt)) {
        $("#enablejwt").show();
        var redirectURI = deviceauthdetails.lookup.modes.jwt.data[0].redirect_uri;
        $(".signinwithjwt").attr("href", redirectURI);
    }
    return (
        isOTP && isSaml && !isNoPassword && ($("#enablemore").show(), $("#enableforgot").hide()),
        ($("#enablemore").is(":visible") || $("#enableotpoption").is(":visible")) && $("#enableforgot").hide(),
        $("#enableotpoption").is(":visible") && -1 != allowedmodes.indexOf("otp")
            ? $("#signinwithotp").html(I18N.get("IAM.NEW.SIGNIN.USING.MOBILE.OTP"))
            : -1 != allowedmodes.indexOf("email") && $("#signinwithotp").html(I18N.get("IAM.NEW.SIGNIN.USING.EMAIL.OTP")),
        !1
    );
}
function enableSamlAuth(samlAuthDomain) {
    var login_id = deviceauthdetails.lookup.loginid;
    samlAuthDomain = void 0 === samlAuthDomain ? deviceauthdetails.lookup.modes.saml.data[0].auth_domain : samlAuthDomain;
    var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/samlauth/" + samlAuthDomain + "?";
    loginurl += "digest=" + digest + "&" + signinParams;
    var jsonData = { samlauth: { login_id: login_id } };
    return sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handleSamlAuthdetails), !1;
}
function handleSamlAuthdetails(resp) {
    if (!IsJsonString(resp)) return showTopErrNotification(I18N.get("IAM.ERROR.GENERAL")), !1;
    var jsonStr = JSON.parse(resp);
    switchto(jsonStr.samlauth.redirect_uri);
}
function enableOTP(enablemode) {
    return showAndGenerateOtp(enablemode), !1;
}
function enableMfaField(mfamode) {
    if (((callmode = "secondary"), "totp" === mfamode))
        $("#password_container,#captcha_container,.fed_2show,#otp_container").hide(),
            $("#headtitle").text(I18N.get("IAM.NEW.SIGNIN.TOTP")),
            $(".service_name").text(I18N.get("IAM.NEW.SIGNIN.MFA.TOTP.HEADER")),
            $(".product_text,.product_head,.MAppIcon,.OnaAuthHLink,.pwless_head,.pwless_text").hide(),
            $("#product_img").removeClass($("#product_img").attr("class")),
            $("#product_img").addClass("tfa_totp_mode"),
            $("#forgotpassword").hide(),
            $("#nextbtn span").removeClass("zeroheight"),
            $("#nextbtn").removeClass("changeloadbtn"),
            $("#nextbtn").attr("disabled", !1),
            $("#nextbtn span").text(I18N.get("IAM.NEW.SIGNIN.VERIFY")),
            isClientPortal || enableSplitField("mfa_totp", 6, I18N.get("IAM.NEW.SIGNIN.VERIFY.CODE")),
            $("#mfa_totp_container").show(),
            $(".service_name").addClass("extramargin"),
            isClientPortal ? $("#mfa_totp").focus() : $("#mfa_totp").click(),
            (isFormSubmited = !1),
            (callmode = "secondary"),
            goBackToProblemSignin(),
            (signinathmode = "totpsecauth");
    else if ("otp" === mfamode) {
        (MFAotpThresholdmob = 3), $("#password_container,#captcha_container,.fed_2show,#otp_container").hide();
        var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA,
            headTitle = I18N.get(isAMFA ? "IAM.AC.CHOOSE.OTHER_MODES.MOBILE.HEADING" : "IAM.NEW.SIGNIN.SMS.MODE");
        $("#headtitle").text(headTitle);
        var descMsg = formatMessage(I18N.get("IAM.NEW.SIGNIN.OTP.HEADER"), rmobile);
        (descMsg = isAMFA ? descMsg + formatMessage(I18N.get("IAM.NEW.SIGNIN.WHY.VERIFY"), suspisious_login_link) : descMsg),
            $(".service_name").html(descMsg),
            $("#product_img").removeClass($("#product_img").attr("class")),
            $("#product_img").addClass("tfa_otp_mode"),
            showTopNotification(formatMessage(I18N.get("IAM.NEW.SIGNIN.OTP.SENT"), rmobile)),
            isClientPortal || enableSplitField("mfa_otp", 7, I18N.get("IAM.VERIFY.CODE")),
            $("#mfa_otp_container,#mfa_otp_container .textbox_actions").show(),
            $("#forgotpassword").hide(),
            $(".service_name").addClass("extramargin"),
            $("#nextbtn span").removeClass("zeroheight"),
            $("#nextbtn").removeClass("changeloadbtn"),
            $("#nextbtn").attr("disabled", !1),
            $("#nextbtn span").text(I18N.get("IAM.NEW.SIGNIN.VERIFY")),
            isClientPortal ? $("#mfa_otp").focus() : $("#mfa_otp").click(),
            (isFormSubmited = !1),
            goBackToProblemSignin(),
            (callmode = "secondary"),
            (signinathmode = "otpsecauth");
    }
    return $(".loader,.blur").hide(), isRecovery || allowedModeChecking(), !1;
}
function enableMyZohoDevice(jsonStr, trymode) {
    (jsonStr = isValid(jsonStr) ? jsonStr : deviceauthdetails), (signinathmode = jsonStr.resource_name);
    var devicedetails = jsonStr[signinathmode].modes.mzadevice.data[parseInt(mzadevicepos)];
    (deviceid = devicedetails.device_id),
        (isSecondary = allowedmodes.length > 1 && -1 === allowedmodes.indexOf("recoverycode") && -1 === allowedmodes.indexOf("passphrase") ? !0 : !1),
        (isSecondary = allowedmodes.length > 2 && -1 === allowedmodes.indexOf("recoverycode") && -1 === allowedmodes.indexOf("passphrase") ? !0 : isSecondary),
        (isSecondary = -1 === allowedmodes.indexOf("recoverycode") && -1 === allowedmodes.indexOf("passphrase") && 3 === allowedmodes.length ? !1 : isSecondary),
        (prefoption = trymode ? trymode : devicedetails.prefer_option),
        (devicename = devicedetails.device_name),
        (bioType = devicedetails.bio_type);
    var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/device/" + deviceid + "?";
    loginurl += "digest=" + digest + "&" + signinParams;
    var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA,
        jsonData = "primary" === callmode ? { deviceauth: { devicepref: prefoption } } : { devicesecauth: { devicepref: prefoption } };
    return (
        (jsonData = "primary" != callmode && isAMFA ? { devicesecauth: { devicepref: prefoption, isAMFA: !0 } } : jsonData),
        sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handleMyZohoDetails),
        (signinathmode = "primary" === callmode ? "deviceauth" : "devicesecauth"),
        !1
    );
}
function enableOneauthDevice(jsonStr, index) {
    (index = isValid(index) ? index : parseInt(oadevicepos)), (jsonStr = isValid(jsonStr) ? jsonStr : deviceauthdetails);
    var devicedetails = jsonStr[deviceauthdetails.resource_name].modes.oadevice.data[index];
    if (((deviceid = devicedetails.device_id), (prefoption = devicedetails.prefer_option), (isFaceId = devicedetails.isFaceid), (devicename = devicedetails.device_name), "ONEAUTH_TOTP" === prefoption))
        return enableTOTPdevice(jsonStr, !1, !0), !1;
    var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/oneauth/" + deviceid + "?";
    loginurl += "digest=" + digest + "&" + signinParams;
    var jsonData = { oneauthsec: { devicepref: prefoption } };
    return sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handleOneAuthDetails), (signinathmode = "oneauthsec"), !1;
}
function enableYubikeyDevice(jsonStr) {
    if (((signinathmode = jsonStr.resource_name), !isWebAuthNSupported())) return showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.BrowserNotSupported")), !1;
    var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/yubikey/self?" + signinParams;
    return (
        (isSecondary = allowedmodes.length > 1 && -1 === allowedmodes.indexOf("recoverycode") ? !0 : !1),
        sendRequestWithTemptoken(loginurl, "", !0, handleYubikeyDetails),
        (signinathmode = "yubikeysecauth"),
        isRecovery || allowedModeChecking(),
        !1
    );
}
function enableTOTPdevice(resp, isMyZohoApp, isOneAuth) {
    if (
        ($("#password_container,#login_id_container,#captcha_container,.fed_2show,#otp_container").hide(),
        $("#headtitle").text(I18N.get("IAM.NEW.SIGNIN.TOTP")),
        $(".service_name").text(I18N.get("IAM.NEW.SIGNIN.MFA.TOTP.HEADER")),
        $(".product_text,.product_head,.MAppIcon,.OnaAuthHLink,.pwless_head,.pwless_text").hide(),
        $("#product_img").removeClass($("#product_img").attr("class")),
        $("#product_img").addClass("tfa_totp_mode"),
        $("#forgotpassword").hide(),
        $("#nextbtn span").removeClass("zeroheight"),
        $("#nextbtn").removeClass("changeloadbtn"),
        $("#nextbtn").attr("disabled", !1),
        $("#nextbtn span").text(I18N.get("IAM.NEW.SIGNIN.VERIFY")),
        isMyZohoApp)
    ) {
        $(".deviceparent .devicetext").text(devicename), $(".devicedetails .devicetext").text(devicename), $("#mfa_device_container").show(), $(".tryanother").show();
        var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA;
        isAMFA && (allowedModeChecking(), $(".tryanother").hide()),
            $(".service_name").text(I18N.get("IAM.NEW.SIGNIN.TOTP.HEADER")),
            $("#problemsignin,#recoverybtn,.loader,.blur,.deviceparent").hide(),
            clearCommonError("mfa_totp"),
            $(".signin_container").removeClass("mobile_signincontainer");
    } else isOneAuth && $(".service_name").text(I18N.get("IAM.NEW.SIGNIN.TOTP.HEADER"));
    $("#mfa_totp").val(""),
        isClientPortal || enableSplitField("mfa_totp", 6, I18N.get("IAM.NEW.SIGNIN.VERIFY.CODE")),
        $("#mfa_totp_container").show(),
        isClientPortal ? $("#mfa_totp").focus() : $("#mfa_totp").click(),
        $(".service_name").addClass("extramargin"),
        (isFormSubmited = !1);
    var mzauth = "primary" === callmode ? "deviceauth" : "devicesecauth";
    return (signinathmode = isMyZohoApp ? mzauth : "oneauthsec"), isMyZohoApp || isRecovery || allowedModeChecking(), !1;
}
function enableOneAuthBackup() {
    changeRecoverOption(allowedmodes[0]),
        $("#backup_container .backoption,#recovery_passphrase,#recovery_backup").hide(),
        -1 != allowedmodes.indexOf("passphrase") ? $("#recovery_passphrase").show() : $("#recovery_passphrase").hide(),
        -1 != allowedmodes.indexOf("recoverycode") ? $("#recovery_backup").show() : $("#recovery_backup").hide();
}
function handleYubikeyDetails(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp),
            statusCode = jsonStr.status_code;
        if (!(!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode))
            return "throttles_limit_exceeded" === jsonStr.cause ? (showCommonError("yubikey", jsonStr.localized_message), !1) : (showCommonError("password", jsonStr.localized_message), !1);
        var successCode = jsonStr.code;
        return "SI203" === successCode && ($(".loader,.blur").hide(), showYubikeyDetails(), getAssertion(jsonStr.yubikeysecauth)), !1;
    }
    var errorcontainer = "passwordauth" === signinathmode ? "password" : "login_id";
    return showCommonError(errorcontainer, I18N.get(jsonStr.localized_message)), !1;
}
function getAssertion(parameters) {
    var requestOptions = {};
    return (
        (requestOptions.challenge = strToBin(parameters.challenge)),
        (requestOptions.timeout = parameters.timeout),
        (requestOptions.rpId = parameters.rpId),
        (requestOptions.allowCredentials = credentialListConversion(parameters.allowCredentials)),
        "authenticatorSelection" in parameters && (requestOptions.authenticatorSelection = parameters.authenticatorSelection),
        (requestOptions.extensions = {}),
        "extensions" in parameters && "appid" in parameters.extensions && (requestOptions.extensions.appid = parameters.extensions.appid),
        navigator.credentials
            .get({ publicKey: requestOptions })
            .then(function (assertion) {
                var publicKeyCredential = {};
                "id" in assertion && (publicKeyCredential.id = assertion.id),
                    "type" in assertion && (publicKeyCredential.type = assertion.type),
                    "rawId" in assertion && (publicKeyCredential.rawId = binToStr(assertion.rawId)),
                    assertion.response || (showCommonError("yubikey", formatMessage(I18N.get("IAM.WEBAUTHN.ERROR.AUTHENTICATION.InvalidResponse"), accounts_support_contact_email_id)), $("#yubikey_container").show(), showError());
                var _response = assertion.response;
                publicKeyCredential.response = {
                    clientDataJSON: binToStr(_response.clientDataJSON),
                    authenticatorData: binToStr(_response.authenticatorData),
                    signature: binToStr(_response.signature),
                    userHandle: binToStr(_response.userHandle),
                };
                var yubikey_sec_data = {};
                (yubikey_sec_data.yubikeysecauth = publicKeyCredential), sendRequestWithTemptoken("/signin/v2/secondary/" + zuid + "/yubikey/self", JSON.stringify(yubikey_sec_data), !0, VerifySuccess, "PUT");
            })
            .catch(function (err) {
                "NotAllowedError" == err.name
                    ? showCommonError("yubikey", I18N.get("IAM.WEBAUTHN.ERROR.NotAllowedError"))
                    : "InvalidStateError" == err.name
                    ? showCommonError("yubikey", I18N.get("IAM.WEBAUTHN.ERROR.AUTHENTICATION.InvalidStateError"))
                    : "AbortError" == err.name
                    ? showCommonError("yubikey", I18N.get("IAM.WEBAUTHN.ERROR.NotAllowedError"))
                    : "UnknownError" == err.name
                    ? showCommonError("yubikey", formatMessage(I18N.get("IAM.WEBAUTHN.ERROR.UnknownError"), accounts_support_contact_email_id))
                    : showCommonError("yubikey", formatMessage(I18N.get("IAM.WEBAUTHN.ERROR.AUTHENTICATION.ErrorOccurred"), accounts_support_contact_email_id) + "<br>" + err.toString()),
                    $("#yubikey_container").show(),
                    showError();
            })
    );
}
function showYubikeyDetails() {
    var headtitle = "IAM.NEW.SIGNIN.YUBIKEY.TITLE",
        headerdesc = isMobile ? "IAM.NEW.SIGNIN.YUBIKEY.HEADER.NEW.FOR.MOBILE" : "IAM.NEW.SIGNIN.YUBIKEY.HEADER.NEW";
    return (
        $("#password_container,#login_id_container,#captcha_container,.fed_2show,#otp_container").hide(),
        $("#headtitle").text(I18N.get(headtitle)),
        $(".service_name").text(I18N.get(headerdesc)),
        $(".product_text,.product_head,.MAppIcon,.OnaAuthHLink,.pwless_head,.pwless_text").hide(),
        $("#product_img").removeClass($("#product_img").attr("class")),
        $("#product_img").addClass("tfa_yubikey_mode"),
        $("#forgotpassword").hide(),
        $("#nextbtn").hide(),
        $(".service_name").addClass("extramargin"),
        $(".deviceparent").removeClass("hide"),
        $(".deviceparent").css("display", ""),
        $("#mfa_device_container,.devicedetails").show(),
        $(".devices").hide(),
        $("#waitbtn").show(),
        $(".loadwithbtn").show(),
        $(".waitbtn .waittext").text(I18N.get("IAM.NEW.SIGNIN.WAITING.APPROVAL")),
        $("#waitbtn").attr("disabled", !0),
        isRecovery || allowedModeChecking(),
        !1
    );
}
function handleLookupDetails(resp, isExtUserVerified, ispasskeyfailed) {
    if (($(".blur,.loader").is(":visible") && $(".blur,.loader").hide(), !IsJsonString(resp))) return callback_signin_lookup(I18N.get("IAM.ERROR.GENERAL")), !1;
    var jsonStr = JSON.parse(resp),
        statusCode = jsonStr.status_code;
    if ("U300" === jsonStr.code) {
        if (isValid(jsonStr.lookup.signup_url)) {
            var form = document.createElement("form");
            form.setAttribute("id", "signupredirection"), form.setAttribute("method", "POST"), form.setAttribute("action", jsonStr.lookup.signup_url), form.setAttribute("target", "_self");
            var hiddenField = document.createElement("input"),
                csrfField = document.createElement("input");
            return (
                csrfField.setAttribute("type", "hidden"),
                csrfField.setAttribute("name", csrfParam),
                csrfField.setAttribute("value", getCookie(csrfCookieName)),
                hiddenField.setAttribute("type", "hidden"),
                hiddenField.setAttribute("name", "LOGIN_ID"),
                hiddenField.setAttribute("value", jsonStr.lookup.loginid),
                form.appendChild(hiddenField),
                form.appendChild(csrfField),
                document.documentElement.appendChild(form),
                form.submit(),
                !1
            );
        }
        return !1;
    }
    if (!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode) {
        if (
            ($(".fed_2show,.line,#signuplink,.banner_newtoold").hide(),
            $("#smartsigninbtn").addClass("hide"),
            (digest = jsonStr[signinathmode].digest),
            (zuid = jsonStr[signinathmode].identifier),
            isPhoneNumber(de("login_id").value) && $("#login_id").val($("#country_code_select").val().split("+")[1] + "-" + $("#login_id").val().trim()),
            (deviceauthdetails = jsonStr),
            isExtUserVerified)
        )
            $(".externaluser_container,#continuebtn").hide(),
                $("#forgotpassword,#nextbtn").show(),
                $("#login_id_container,#showIDPs").slideDown(200),
                $("#password_container").addClass("zeroheight"),
                $("#password_container .textbox_div").show();
        else if (jsonStr[signinathmode].ext_usr) {
            $("#forgotpassword,#nextbtn").hide();
            var loginId = jsonStr[signinathmode].loginid ? jsonStr[signinathmode].loginid : de("login_id").value;
            return (
                $("#login_id_container,#showIDPs").slideUp(200),
                $("#password_container").removeClass("zeroheight"),
                $("#password_container").slideDown(200),
                $(".username").text(identifyEmailOrNum()),
                $("#password_container .textbox_div").hide(),
                $(".externaluser_container").html(jsonStr[signinathmode].ext_msg),
                $(".externaluser_container,#continuebtn").show(),
                !1
            );
        }
        (adminEmail = jsonStr[signinathmode].admin), (contactAdminHelpdoc = jsonStr[signinathmode].doc_link);
        var isOTP = (isSaml = isFederated = isNoPassword = isJwt = isEOTP = !1);
        if (isEmpty(jsonStr[signinathmode].modes) || !isValid(jsonStr[signinathmode].modes)) {
            changeButtonAction(I18N.get("IAM.SIGN_IN"), !1), $("#forgotpassword").hide();
            var loginId = jsonStr[signinathmode].loginid ? jsonStr[signinathmode].loginid : de("login_id").value;
            return (
                $("#login_id_container,#showIDPs").slideUp(200),
                $("#password_container").removeClass("zeroheight"),
                $("#password_container").slideDown(200),
                identifyEmailOrNum(loginId),
                $(".username").text(identifyEmailOrNum()),
                $("#password_container .textbox_div,#nextbtn").hide(),
                $(".nopassword_container").css("position", "absolute"),
                $(".nopassword_container").show(),
                $("#captcha_container").hide(),
                !1
            );
        }
        (isPrimaryMode = !0), (allowedmodes = jsonStr[signinathmode].modes.allowed_modes), (prev_showmode = allowedmodes[0]);
        var altmode = allowedmodes[1],
            isothermodeavailable = "undefined" != typeof altmode;
        if (
            ((isNoPassword = !0),
            $(".otp_actions .signinwithjwt,.otp_actions .signinwithsaml,.otp_actions .showmoresigininoption").hide(),
            ispasskeyfailed && (allowedmodes.splice(allowedmodes.indexOf("passkey"), 1), (isPasswordless = !1)),
            (isEmailVerifyReqiured = jsonStr[signinathmode].isUserName && -1 != allowedmodes.indexOf("email") ? !0 : !1),
            "passkey" === allowedmodes[0])
        ) {
            if (!isWebAuthNSupported()) return showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.BrowserNotSupported")), changeButtonAction(I18N.get("IAM.NEXT"), !1), !1;
            (isPasswordless = !0), enableWebauthnDevice();
        } else {
            if ("password" === allowedmodes[0] || "federated" === allowedmodes[0]) {
                if (isothermodeavailable) {
                    var samlcount = jsonStr[signinathmode].modes && jsonStr[signinathmode].modes.saml && jsonStr[signinathmode].modes && jsonStr[signinathmode].modes.saml.count;
                    if ((-1 != allowedmodes.indexOf("otp") && -1 != allowedmodes.indexOf("saml")) || samlcount > 1) $("#enablemore").show(), $("#enableforgot").hide();
                    else if (-1 != allowedmodes.indexOf("otp") && -1 != allowedmodes.indexOf("jwt")) $("#enablemore").show(), $("#enableforgot").hide();
                    else if (-1 != allowedmodes.indexOf("otp") && -1 != allowedmodes.indexOf("email")) $("#enablemore").show(), $("#enableforgot").hide();
                    else if (-1 != allowedmodes.indexOf("saml") && -1 != allowedmodes.indexOf("email")) $("#enablemore").show(), $("#enableforgot").hide();
                    else if (allowedmodes.length >= 2)
                        return (
                            allowedmodes.forEach(function (usedmodes) {
                                switch (usedmodes) {
                                    case "otp":
                                        isOTP = !0;
                                        break;
                                    case "saml":
                                        isSaml = !0;
                                        break;
                                    case "jwt":
                                        isJwt = !0;
                                        break;
                                    case "federated":
                                        isFederated = !0;
                                        break;
                                    case "password":
                                        isNoPassword = !1;
                                        break;
                                    case "email":
                                        isEOTP = !0;
                                }
                            }),
                            enablePassword(jsonStr[signinathmode].loginid, isOTP, isSaml, isFederated, isNoPassword, isJwt, isEOTP),
                            ($("#enablemore").is(":visible") || $("#enableotpoption").is(":visible")) && $("#enableforgot").hide(),
                            !1
                        );
                } else "federated" === allowedmodes[0] && ((isFederated = !0), (isNoPassword = !0)), $("#enableforgot").show();
                return enablePassword(deviceauthdetails.lookup.loginid, isOTP, isSaml, isFederated, isNoPassword, isJwt, isEOTP), !1;
            }
            if ("otp" === allowedmodes[0] || "email" === allowedmodes[0])
                return (
                    (emobile = "otp" === allowedmodes[0] ? jsonStr[signinathmode].modes.otp.data[0].e_mobile : jsonStr[signinathmode].modes.email.data[0].e_email),
                    (rmobile = "otp" === allowedmodes[0] ? identifyEmailOrNum(jsonStr[signinathmode].modes.otp.data[0].r_mobile, !0) : jsonStr[signinathmode].modes.email.data[0].email),
                    $("#signinwithpass").hide(),
                    (isNoPassword = !0),
                    allowedmodes.length >= 2 &&
                        allowedmodes.forEach(function (usedmodes) {
                            switch (usedmodes) {
                                case "otp":
                                    isOTP = !0;
                                    break;
                                case "password":
                                    isNoPassword = !1;
                                    break;
                                case "saml":
                                    isSaml = !0;
                                    break;
                                case "jwt":
                                    isJwt = !0;
                                    break;
                                case "federated":
                                    isFederated = !0;
                                    break;
                                case "email":
                                    isEOTP = !0;
                            }
                        }),
                    enablePassword(jsonStr[signinathmode].loginid, isOTP, isSaml, isFederated, isNoPassword, isJwt, isEOTP),
                    $(".otp_actions .signinwithjwt,.otp_actions .signinwithsaml,.otp_actions .showmoresigininoption").hide(),
                    enableOTP(allowedmodes[0]),
                    isSaml && $("#enablesaml").show(),
                    !1
                );
            if ("mzadevice" === allowedmodes[0]) return (isPasswordless = !0), (secondarymodes = allowedmodes), enableMyZohoDevice(jsonStr), handleSecondaryDevices(allowedmodes[0]), !1;
            if ("saml" === allowedmodes[0]) {
                var isMoreSaml = jsonStr[signinathmode].modes.saml.count > 1;
                if (isMoreSaml) $("#login_id_container,#showIDPs").slideUp(200), showmoresigininoption(isMoreSaml), $(".backoption,#forgotpassword").hide();
                else if (allowedmodes.length > 1) enableSamlAuth();
                else {
                    var redirecturi = jsonStr[signinathmode].modes.saml.data[0].redirect_uri;
                    switchto(redirecturi);
                }
                return !1;
            }
            if ("jwt" === allowedmodes[0]) {
                var redirecturi = jsonStr[signinathmode].modes.jwt.data[0].redirect_uri;
                return switchto(redirecturi), !1;
            }
        }
    } else {
        if ("throttles_limit_exceeded" === jsonStr.cause) return callback_signin_lookup(jsonStr.localized_message), !1;
        var error_resp = jsonStr.errors[0],
            errorCode = error_resp.code,
            errorMessage = jsonStr.localized_message;
        if ("U400" === errorCode || "U301" === errorCode) {
            var loginid = jsonStr.data.loginid;
            if ((loginid && (isEmailIdSignin(loginid) || isUserName(loginid))) || isPhoneNumber(loginid.split("-")[1])) {
                var deploymentUrl = jsonStr.data.redirect_uri,
                    signinParams = removeParamFromQueryString("LOGIN_ID"),
                    loginurl = deploymentUrl + (-1 != deploymentUrl.indexOf("?") ? "&" : "?") + signinParams,
                    oldForm = document.getElementById("signinredirection");
                oldForm && document.documentElement.removeChild(oldForm);
                var form = document.createElement("form");
                form.setAttribute("id", "signinredirection"), form.setAttribute("method", "POST"), form.setAttribute("action", loginurl), form.setAttribute("target", "_parent");
                var hiddenField = document.createElement("input");
                return (
                    hiddenField.setAttribute("type", "hidden"),
                    hiddenField.setAttribute("name", "LOGIN_ID"),
                    hiddenField.setAttribute("value", loginid),
                    form.appendChild(hiddenField),
                    document.documentElement.appendChild(form),
                    form.submit(),
                    !1
                );
            }
            return !1;
        }
        if ("U201" === errorCode) return switchto(error_resp.redirect_uri), !1;
        if ("IN107" === errorCode || "IN108" === errorCode)
            return $(".fed_2show,.line").hide(), (cdigest = jsonStr.cdigest), showHip(cdigest), showCaptcha(I18N.get("IAM.NEXT"), !1, "login_id"), "IN107" === errorCode && showCommonError("captcha", errorMessage), !1;
        if ("U401" === errorCode) return callback_signin_lookup(errorMessage), isShowFedOptions && (isMobile || $(".line").show(), fediconsChecking()), !1;
        if ("R303" === errorCode) return showRestrictsignin(), !1;
        if ("U404" !== errorCode || "undefined" == typeof canShowResetIP || "true" != canShowResetIP) return callback_signin_lookup(errorMessage), !1;
        hiderightpanel(), $("#login,.fed_2show,.line").hide();
        var LOGIN_ID = de("login_id").value.trim();
        (LOGIN_ID = $(".showcountry_code").is(":visible") || $("#country_code_select").is(":visible") ? $("#country_code_select").val().split("+")[1] + "-" + LOGIN_ID : LOGIN_ID),
            (LOGIN_ID = isPhoneNumber(LOGIN_ID.split("-")[1]) ? LOGIN_ID.split("-")[0].trim() + "-" + LOGIN_ID.split("-")[1].trim() : LOGIN_ID),
            $(".resetIP_container .username").text(identifyEmailOrNum(LOGIN_ID)),
            $(".resetIP_container,#goto_resetIP").show(),
            1 == $("#smartsigninbtn").length && $("#smartsigninbtn").addClass("hide"),
            $("#signuplink").hide();
    }
    return !1;
}
function enableWebauthnDevice() {
    if (!isWebAuthNSupported()) return showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.BrowserNotSupported")), !1;
    var loginurl = uriPrefix + "/signin/v2/primary/" + zuid + "/passkey/self?";
    return (loginurl += "digest=" + digest + "&" + signinParams), sendRequestWithCallback(loginurl, "", !0, handleWebauthnDevice), !1;
}
function handleWebauthnDevice(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp),
            statusCode = jsonStr.status_code;
        if (!(!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode))
            return "throttles_limit_exceeded" === jsonStr.cause ? (showCommonError("yubikey", jsonStr.localized_message), !1) : (showCommonError("password", jsonStr.localized_message), !1);
        var successCode = jsonStr.code;
        return "SI203" === successCode && getAssertionLookup(jsonStr.passkeyauth), !1;
    }
    var errorcontainer = "passwordauth" === signinathmode ? "password" : "login_id";
    return showCommonError(errorcontainer, I18N.get(jsonStr.localized_message)), !1;
}
function getAssertionLookup(parameters) {
    var requestOptions = {};
    return (
        (requestOptions.challenge = strToBin(parameters.challenge)),
        (requestOptions.timeout = parameters.timeout),
        (requestOptions.rpId = parameters.rpId),
        (requestOptions.allowCredentials = credentialListConversion(parameters.allowCredentials)),
        "authenticatorSelection" in parameters && (requestOptions.authenticatorSelection = parameters.authenticatorSelection),
        (requestOptions.extensions = {}),
        "extensions" in parameters && "appid" in parameters.extensions && (requestOptions.extensions.appid = parameters.extensions.appid),
        navigator.credentials
            .get({ publicKey: requestOptions })
            .then(function (assertion) {
                var publicKeyCredential = {};
                "id" in assertion && (publicKeyCredential.id = assertion.id),
                    "type" in assertion && (publicKeyCredential.type = assertion.type),
                    "rawId" in assertion && (publicKeyCredential.rawId = binToStr(assertion.rawId)),
                    assertion.response ||
                        (showTopErrNotification(formatMessage(I18N.get("IAM.WEBAUTHN.ERROR.AUTHENTICATION.PASSKEY.InvalidResponse"), accounts_support_contact_email_id)),
                        (signinathmode = "lookup"),
                        handleLookupDetails(JSON.stringify(deviceauthdetails), !1, !0));
                var _response = assertion.response;
                publicKeyCredential.response = {
                    clientDataJSON: binToStr(_response.clientDataJSON),
                    authenticatorData: binToStr(_response.authenticatorData),
                    signature: binToStr(_response.signature),
                    userHandle: binToStr(_response.userHandle),
                };
                var passkey_data = {};
                (passkey_data.passkeyauth = publicKeyCredential), sendRequestWithTemptoken("/signin/v2/primary/" + zuid + "/passkey/self?digest=" + digest + "&" + signinParams, JSON.stringify(passkey_data), !0, VerifySuccess, "PUT");
            })
            .catch(function (err) {
                "NotAllowedError" == err.name
                    ? (showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.NotAllowedError")), (signinathmode = "lookup"), handleLookupDetails(JSON.stringify(deviceauthdetails), !1, !0))
                    : "InvalidStateError" == err.name
                    ? (showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.AUTHENTICATION.PASSKEY.InvalidStateError")), (signinathmode = "lookup"), handleLookupDetails(JSON.stringify(deviceauthdetails), !1, !0))
                    : "AbortError" == err.name
                    ? (showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.NotAllowedError")), (signinathmode = "lookup"), handleLookupDetails(JSON.stringify(deviceauthdetails), !1, !0))
                    : "TypeError" == err.name
                    ? (showTopErrNotificationStatic(I18N.get("IAM.WEBAUTHN.ERROR.TYPE.ERROR"), formatMessage(I18N.get("IAM.WEBAUTHN.ERROR.HELP.HOWTO"), passkeyURL)),
                      (signinathmode = "lookup"),
                      handleLookupDetails(JSON.stringify(deviceauthdetails), !1, !0))
                    : (showTopErrNotification(formatMessage(I18N.get("IAM.WEBAUTHN.ERROR.AUTHENTICATION.PASSKEY.ErrorOccurred"), accounts_support_contact_email_id) + "<br>" + err.toString()),
                      (signinathmode = "lookup"),
                      handleLookupDetails(JSON.stringify(deviceauthdetails), !1, !0));
            })
    );
}
function showmoresigininoption(isMoreSaml) {
    if (isPasswordless)
        return (
            $("#password").is(":visible") && (prev_showmode = "password"),
            $("#enableoptionsoneauth").is(":visible") ? $("#enableoptionsoneauth").hide() : $("#enableoptionsoneauth").show(),
            -1 != allowedmodes.indexOf("password") && "password" != prev_showmode ? $("#signinwithpassoneauth").css("display", "block") : $("#signinwithpassoneauth").hide(),
            -1 != allowedmodes.indexOf("otp") && "otp" != prev_showmode ? $("#signinwithotponeauth").css("display", "block") : $("#signinwithotponeauth").hide(),
            -1 != allowedmodes.indexOf("email") && "email" != prev_showmode ? $("#passlessemailverify").css("display", "block") : $("#passlessemailverify").hide(),
            -1 != allowedmodes.indexOf("saml") && "saml" != prev_showmode ? $(".signinwithsamloneauth").css("display", "block") : $(".signinwithsamloneauth").hide(),
            -1 != allowedmodes.indexOf("jwt") && "jwt" != prev_showmode ? $(".signinwithfedoneauth").css("display", "block") : $(".signinwithfedoneauth").hide(),
            -1 != allowedmodes.indexOf("federated") && "federated" != prev_showmode ? $(".signinwithfedoneauth").css("display", "block") : $(".signinwithfedoneauth").hide(),
            -1 != allowedmodes.indexOf("otp")
                ? $("#signinwithotponeauth").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.PASSWORDLESS.OTP.VERIFY.TITLE"), identifyEmailOrNum(deviceauthdetails[deviceauthdetails.resource_name].modes.otp.data[0].r_mobile, !0)))
                : "",
            -1 != allowedmodes.indexOf("email") ? $("#passlessemailverify").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.PASSWORDLESS.EMAIL.VERIFY.TITLE"), deviceauthdetails[deviceauthdetails.resource_name].modes.email.data[0].email)) : "",
            $("#enableoptionsoneauth").is(":visible") &&
                setTimeout(function () {
                    document.getElementsByClassName("signin_container")[0].addEventListener("click", function hideandforgetEnableoption() {
                        $("#enableoptionsoneauth").hide(), document.getElementsByClassName("signin_container")[0].removeEventListener("click", hideandforgetEnableoption);
                    });
                }, 10),
            !1
        );
    $("#enablemore").hide(), isMoreSaml || (allowedmodes.splice(allowedmodes.indexOf(prev_showmode), 1), allowedmodes.unshift(prev_showmode)), $("#emailverify_container").hide(), $("#login").show();
    var problemsignin_con = "",
        backoption = "getbackemailverify" === isMoreSaml ? "getbackemailverify()" : "hideSigninOptions()",
        i18n_msg = {
            otp: ["IAM.NEW.SIGNIN.OTP.TITLE", "IAM.NEW.SIGNIN.OTP.HEADER"],
            saml: ["IAM.NEW.SIGNIN.SAML.TITLE", "IAM.NEW.SIGNIN.SAML.HEADER"],
            password: ["IAM.NEW.SIGNIN.PASSWORD.TITLE", "IAM.NEW.SIGNIN.PASSWORD.HEADER"],
            jwt: ["IAM.NEW.SIGNIN.JWT.TITLE", "IAM.NEW.SIGNIN.SAML.HEADER"],
            email: ["IAM.NEW.SIGNIN.EMAIL.TITLE", "IAM.NEW.SIGNIN.OTP.HEADER"],
        },
        problemsigninheader = "<div class='problemsignin_head'><span class='icon-backarrow backoption' onclick='" + backoption + "'></span>" + I18N.get("IAM.NEW.SIGNIN.TRY.ANOTHERWAY") + "</div>";
    return (
        allowedmodes.forEach(function (prob_mode, position) {
            if (0 != position || isMoreSaml) {
                var saml_position,
                    secondary_header = i18n_msg[prob_mode] ? I18N.get(i18n_msg[prob_mode][0]) : "",
                    secondary_desc = i18n_msg[prob_mode] ? I18N.get(i18n_msg[prob_mode][1]) : "";
                if ("otp" === prob_mode)
                    (emobile = deviceauthdetails.lookup.modes.otp.data[0].e_mobile),
                        (rmobile = identifyEmailOrNum(deviceauthdetails.lookup.modes.otp.data[0].r_mobile, !0)),
                        (secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), rmobile)),
                        (problemsignin_con += createSigninMoreOptions(prob_mode, saml_position, secondary_header, secondary_desc));
                else if ("saml" === prob_mode) {
                    var saml_modes = deviceauthdetails.lookup.modes.saml.data;
                    saml_modes.forEach(function (data, index) {
                        var displayname = deviceauthdetails.lookup.modes.saml.data[index].display_name,
                            domainname = deviceauthdetails.lookup.modes.saml.data[index].domain;
                        (secondary_header = formatMessage(I18N.get(i18n_msg[prob_mode][0]), displayname)),
                            (secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), domainname)),
                            (saml_position = index),
                            (problemsignin_con += createSigninMoreOptions(prob_mode, saml_position, secondary_header, secondary_desc));
                    });
                } else if ("jwt" === prob_mode) {
                    var domainname = deviceauthdetails.lookup.modes.jwt.data[0].domain;
                    (secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), domainname)), (problemsignin_con += createSigninMoreOptions(prob_mode, saml_position, secondary_header, secondary_desc));
                } else if ("email" === prob_mode)
                    (emobile = deviceauthdetails.lookup.modes.email.data[0].e_email),
                        (rmobile = deviceauthdetails.lookup.modes.email.data[0].email),
                        (secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), rmobile)),
                        (problemsignin_con += createSigninMoreOptions(prob_mode, saml_position, secondary_header, secondary_desc));
                else if ("federated" === prob_mode) {
                    var count = deviceauthdetails.lookup.modes.federated.count,
                        idp = deviceauthdetails.lookup.modes.federated.data[0].idp.toLocaleLowerCase(),
                        secondary_header = count > 1 ? I18N.get("IAM.NEW.SIGNIN.MORE.FEDRATED.ACCOUNTS.TITLE") : "<span style='text-transform: capitalize;'>" + idp + "</span>",
                        secondary_desc = count > 1 ? I18N.get("IAM.NEW.SIGNIN.MORE.FEDRATED.ACCOUNTS.DESC") : formatMessage(I18N.get("IAM.NEW.SIGNIN.IDENTITY.PROVIDER.TITLE"), idp);
                    problemsignin_con += createSigninMoreOptions(prob_mode, count, secondary_header, secondary_desc);
                } else problemsignin_con += createSigninMoreOptions(prob_mode, saml_position, secondary_header, secondary_desc);
            }
        }),
        $("#problemsigninui").html(problemsigninheader + "<div class='problemsignincon'>" + problemsignin_con + "</div>"),
        $("#password_container,#nextbtn,.signin_head,#otp_container,#captcha_container,.fed_2show").hide(),
        $("#problemsigninui").show(),
        !1
    );
}
function createSigninMoreOptions(prob_mode, saml_position, secondary_header, secondary_desc) {
    var prefer_icon = prob_mode,
        secondary_con =
            "<div class='optionstry options_hover' id='secondary_" +
            prob_mode +
            "' onclick=showallowedmodes('" +
            prob_mode +
            "','" +
            saml_position +
            "')>							<div class='img_option_try img_option icon-" +
            prefer_icon +
            "'></div>							<div class='option_details_try decreasewidth'>								<div class='option_title_try'>" +
            secondary_header +
            "</div>								<div class='option_description'>" +
            secondary_desc +
            "</div>							</div>						</div>";
    return secondary_con;
}
function handlePasswordDetails(resp) {
    if (!IsJsonString(resp)) {
        var errorfield = $("#emailverify").is(":visible") ? "emailverify" : "otpauth" === signinathmode ? "otp" : "password";
        return showCommonError(errorfield, I18N.get("IAM.ERROR.GENERAL")), !1;
    }
    var jsonStr = JSON.parse(resp);
    signinathmode = jsonStr.resource_name;
    var statusCode = jsonStr.status_code;
    if (!(!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode)) {
        if ("throttles_limit_exceeded" === jsonStr.cause) {
            var errorfield = $("#emailverify").is(":visible") ? "emailverify" : "otpauth" === signinathmode ? "otp" : "password";
            return showCommonError(errorfield, jsonStr.localized_message), !1;
        }
        var error_resp = jsonStr.errors[0],
            errorCode = error_resp.code,
            errorMessage = jsonStr.localized_message;
        if ("IN107" === errorCode || "IN108" === errorCode) return (cdigest = jsonStr.cdigest), showHip(cdigest), showCaptcha(I18N.get("IAM.NEXT"), !1, "password"), "IN107" === errorCode && showCommonError("captcha", errorMessage), !1;
        if ("R303" === errorCode) return showRestrictsignin(), !1;
        var errorfield = $("#emailverify").is(":visible") ? "emailverify" : "otpauth" === signinathmode ? "otp" : "password";
        return showCommonError(errorfield, errorMessage), !1;
    }
    (zuid = zuid ? zuid : jsonStr[signinathmode].identifier),
        (restrictTrustMfa = jsonStr[signinathmode].restrict_trust_mfa || jsonStr[signinathmode].isAMFA),
        "undefined" == typeof adminEmail ||
            jsonStr[signinathmode].isAMFA ||
            ($(".contact_support .option_title").html(I18N.get("IAM.NEW.SIGNIN.CONTACT.ADMIN.TITLE")), $(".contact_support .contactsuprt").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.CONTACT.ADMIN.DESC"), adminEmail, contactAdminHelpdoc))),
        restrictTrustMfa || (trustMfaDays = "" + jsonStr[signinathmode].trust_mfa_days),
        $(".overlapBanner,.dotHead,#emailverify_container").hide(),
        $(".mfa_panel,#login").show();
    var successCode = jsonStr.code;
    return (
        jsonStr[signinathmode].isAMFA && ($("#problemsignin").text(I18N.get("IAM.AC.VIEW.OPTION")), $("#recoverybtn").text(I18N.get("IAM.NEW.SIGNIN.PROBLEM.SIGNIN"))),
        "SI302" === successCode || "SI200" === successCode || "SI300" === successCode || "SI301" === successCode || "SI303" === successCode || "SI305" === successCode
            ? (switchto(jsonStr[signinathmode].redirect_uri), !1)
            : "P500" === successCode || "P501" === successCode
            ? ((temptoken = jsonStr[signinathmode].token), showPasswordExpiry(jsonStr[signinathmode].pwdpolicy), !1)
            : "MFA302" === successCode
            ? ($(".resendotp").removeClass("bluetext_action_right"),
              $("#enablemore").hide(),
              isValid(digest) || (digest = jsonStr[signinathmode].digest),
              (allowedmodes = jsonStr[signinathmode].modes.allowed_modes),
              void 0 == allowedmodes || -1 == allowedmodes.indexOf("yubikey") || isWebAuthNSupported()
                  ? allowedmodes.length < 1
                      ? (showCantAccessDevice(), $("#product_img").removeClass($("#product_img").attr("class")), $("#product_img").addClass("tfa_ga_mode"), $("#recovery_container .backoption").hide(), !1)
                      : ((isPrimaryMode = !1),
                        (deviceauthdetails = jsonStr),
                        (isSecondary = allowedmodes.length > 1 && -1 === allowedmodes.indexOf("recoverycode") ? !0 : !1),
                        (temptoken = jsonStr[signinathmode].token),
                        (secondarymodes = allowedmodes),
                        (prev_showmode = allowedmodes[0]),
                        handleSecondaryDevices(prev_showmode),
                        isPasswordless
                            ? ((callmode = "secondary"), showMoreSigninOptions(), $("#product_img").removeClass($("#product_img").attr("class")), $("#product_img").addClass("tfa_ga_mode"), !1)
                            : "otp" === allowedmodes[0] || "email" === allowedmodes[0]
                            ? ((emobile =
                                  "otp" === allowedmodes[0] ? jsonStr[signinathmode].modes.otp && jsonStr[signinathmode].modes.otp.data[0].e_mobile : jsonStr[signinathmode].modes.email && jsonStr[signinathmode].modes.email.data[0].e_email),
                              (rmobile =
                                  "otp" === allowedmodes[0]
                                      ? jsonStr[signinathmode].modes.otp && identifyEmailOrNum(jsonStr[signinathmode].modes.otp.data[0].r_mobile, !0)
                                      : jsonStr[signinathmode].modes.email && jsonStr[signinathmode].modes.email.data[0].email),
                              (callmode = "secondary"),
                              "email" === allowedmodes[0] ? (emailposition = 0) : (mobposition = 0),
                              generateOTP(!1, allowedmodes[0]),
                              !1)
                            : "mzadevice" === allowedmodes[0]
                            ? ((callmode = "secondary"), enableMyZohoDevice(jsonStr), !1)
                            : "oadevice" === allowedmodes[0]
                            ? ((callmode = "secondary"), enableOneauthDevice(jsonStr, oadevicepos), !1)
                            : "yubikey" === allowedmodes[0]
                            ? ((callmode = "secondary"), enableYubikeyDevice(jsonStr), !1)
                            : "recoverycode" === allowedmodes[0] || "passphrase" === allowedmodes[0]
                            ? ((callmode = "secondary"), enableOneAuthBackup(), !1)
                            : (enableMfaField(allowedmodes[0]), !1))
                  : (showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.BrowserNotSupported")), changeButtonAction(I18N.get("IAM.NEXT"), !1), !1))
            : !1
    );
}
function handleTotpDetails(resp) {
    if (!IsJsonString(resp)) {
        var container = "otpsecauth" === signinathmode ? "mfa_otp" : "otpauth" === signinathmode ? "otp" : "mfa_totp";
        return (container = isTroubleSignin ? "verify_totp" : container), showCommonError(container, I18N.get("IAM.ERROR.GENERAL")), !1;
    }
    var jsonStr = JSON.parse(resp);
    signinathmode = void 0 != jsonStr.resource_name ? jsonStr.resource_name : signinathmode;
    var statusCode = jsonStr.status_code,
        container = "otpsecauth" === signinathmode ? "mfa_otp" : "otpauth" === signinathmode ? "otp" : "mfa_totp";
    if (!(!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode)) {
        if (((container = isTroubleSignin ? "verify_totp" : "email" === prev_showmode ? "mfa_email" : container), "throttles_limit_exceeded" === jsonStr.cause)) return showCommonError(container, jsonStr.localized_message), !1;
        var error_resp = jsonStr.errors[0],
            errorCode = error_resp.code,
            errorMessage = jsonStr.localized_message;
        return "IN107" === errorCode || "IN108" === errorCode
            ? ((cdigest = jsonStr.cdigest), showHip(cdigest), showCaptcha(I18N.get("IAM.NEXT"), !1, container), "IN107" === errorCode && showCommonError("captcha", errorMessage), !1)
            : "R303" === errorCode
            ? (showRestrictsignin(), !1)
            : (showCommonError(container, errorMessage), !1);
    }
    $(".go_to_bk_code_container").removeClass("show_bk_pop");
    var successCode = jsonStr.code,
        statusmsg = jsonStr[signinathmode].status;
    return "SI302" === successCode || "SI200" === successCode || "SI300" === successCode || "SI301" === successCode || "SI303" === successCode || "SI305" === successCode
        ? (switchto(jsonStr[signinathmode].redirect_uri), !1)
        : "success" === statusmsg
        ? restrictTrustMfa
            ? (updateTrustDevice(!1), !1)
            : (showTrustBrowser(), !1)
        : "P500" === successCode || "P501" === successCode
        ? ((temptoken = jsonStr[signinathmode].token), showPasswordExpiry(jsonStr[signinathmode].pwdpolicy), !1)
        : !1;
}
function handleMyZohoDetails(resp) {
    if (!IsJsonString(resp)) {
        var errorcontainer = "passwordauth" === signinathmode ? "password" : "login_id";
        return showCommonError(errorcontainer, I18N.get("IAM.ERROR.GENERAL")), !1;
    }
    var jsonStr = JSON.parse(resp);
    signinathmode = jsonStr.resource_name;
    var statusCode = jsonStr.status_code;
    if (!(!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode)) {
        var errorcontainer = isPasswordless ? "login_id" : "totp" === prefoption ? "mfa_totp" : $("#password_container").is(":visible") ? "password" : $("#otp_container").is(":visible") ? "otp" : "yubikey";
        (errorcontainer = isResend ? "yubikey" : errorcontainer), "yubikey" === errorcontainer ? $("#yubikey_container").show() : $("#yubikey_container").hide();
        var error_resp = jsonStr.errors && jsonStr.errors[0],
            errorCode = error_resp && error_resp.code;
        if ("D105" === errorCode) return $(".fed_2show").hide(), showCommonError(errorcontainer, jsonStr.localized_message), isRecovery || allowedModeChecking(), !1;
        if (($("#problemsignin,#recoverybtn").hide(), "throttles_limit_exceeded" === jsonStr.cause)) return showCommonError(errorcontainer, jsonStr.localized_message), $(".loader,.blur").hide(), !1;
        if ("pattern_not_matched" === jsonStr.cause) return changeHip(), showCommonError("captcha", jsonStr.localized_message), $(".loader,.blur").hide(), !1;
        if ("R303" === errorCode) return showRestrictsignin(), !1;
        var error_resp = jsonStr.errors[0],
            errorCode = error_resp.code,
            errorMessage = jsonStr.localized_message;
        return "push" === prefoption || "scanqr" === prefoption ? showTopErrNotificationStatic(jsonStr.localized_message) : showCommonError(errorcontainer, errorMessage), $(".loader,.blur").hide(), !1;
    }
    var successCode = jsonStr.code;
    if ("SI202" === successCode || "MFA302" === successCode || "SI302" === successCode || "SI201" === successCode) {
        if (((temptoken = jsonStr[signinathmode].token), isResend))
            return (verifyCount = 0), showResendPushInfo(), isPasswordless && void 0 != jsonStr[signinathmode].rnd && ($("#rnd_num").html(jsonStr[signinathmode].rnd), resendpush_checking((time = 25))), !1;
        if (((isTroubleSignin = !1), "totp" === prefoption))
            return (
                $(".step_two").html(I18N.get("IAM.NEW.SIGNIN.RIGHT.PANEL.VERIFY.TOTP")),
                $(".step_three").html(I18N.get("IAM.NEW.SIGNIN.RIGHT.PANEL.ALLOW.TOTP")),
                $(".approved").css("background", 'url("../images/TOTP_Verify.7413beaafe5ff6a598eeb58a16bad79f.svg") no-repeat transparent'),
                $("#mfa_scanqr_container,#mfa_push_container,#waitbtn,#openoneauth").hide(),
                enableTOTPdevice(jsonStr, !0, !1),
                $(".rnd_container").hide(),
                !1
            );
        var headtitle = "push" === prefoption ? "IAM.NEW.SIGNIN.VERIFY.PUSH" : "totp" === prefoption ? "IAM.NEW.SIGNIN.TOTP" : "scanqr" === prefoption ? "IAM.NEW.SIGNIN.QR.CODE" : "",
            headerdesc = "push" === prefoption ? "IAM.NEW.SIGNIN.MFA.PUSH.HEADER" : "totp" === prefoption ? "IAM.NEW.SIGNIN.TOTP.HEADER" : "scanqr" === prefoption ? "IAM.NEW.SIGNIN.QR.HEADER" : "";
        if (
            ($("#password_container,#login_id_container,#captcha_container,.fed_2show,#recoverybtn,#otp_container,.deviceparent").hide(),
            $("#headtitle").text(I18N.get(headtitle)),
            $(".devices").css("display", ""),
            (headerdesc = deviceauthdetails[deviceauthdetails.resource_name].isAMFA ? I18N.get(headerdesc) + "<br>" + formatMessage(I18N.get("IAM.NEW.SIGNIN.WHY.VERIFY"), suspisious_login_link) : headerdesc),
            $(".service_name").html(I18N.get(headerdesc)),
            $(".product_text,.product_head,.MAppIcon,.OnaAuthHLink,.pwless_head,.pwless_text").hide(),
            $("#product_img").removeClass($("#product_img").attr("class")),
            $("#product_img").addClass("tfa_" + prefoption + "_mode"),
            $("#forgotpassword,#problemsignin,#recoverybtn").hide(),
            $("#nextbtn").hide(),
            $("#mfa_" + prefoption + "_container").show(),
            $(".service_name").addClass("extramargin"),
            $("#mfa_device_container").show(),
            $(".signin_container").removeClass("mobile_signincontainer"),
            $(".rnd_container").hide(),
            "push" === prefoption || "scanqr" === prefoption)
        ) {
            var wmsid = jsonStr[signinathmode].WmsId && jsonStr[signinathmode].WmsId.toString();
            isVerifiedFromDevice(prefoption, !0, wmsid);
        }
        if (
            ("push" === prefoption &&
                (isPasswordless && void 0 != jsonStr[signinathmode].rnd
                    ? ($(".rnd_container").show(),
                      $("#rnd_num").html(jsonStr[signinathmode].rnd),
                      $("#waitbtn,.loadwithbtn").hide(),
                      $("#mfa_scanqr_container,#mfa_totp_container,#openoneauth").hide(),
                      $(".service_name").text(I18N.get("IAM.NEW.SIGNIN.PUSH.RND.DESC")),
                      $(".loader,.blur").hide(),
                      $(".rnd_resend").show(),
                      resendpush_checking((time = 20)))
                    : ($("#waitbtn,.loadwithbtn").show(),
                      $(".rnd_container").hide(),
                      $(".waitbtn .waittext").text(I18N.get("IAM.NEW.SIGNIN.WAITING.APPROVAL")),
                      $("#waitbtn").attr("disabled", !0),
                      $("#mfa_scanqr_container,#mfa_totp_container,#openoneauth").hide(),
                      $(".loader,.blur").hide(),
                      window.setTimeout(function () {
                          return $(".waitbtn .waittext").text(I18N.get("IAM.PUSH.RESEND.NOTIFICATION")), $(".loadwithbtn").hide(), $("#waitbtn").attr("disabled", !1), (isFormSubmited = !1), !1;
                      }, 2e4))),
            "scanqr" === prefoption)
        ) {
            $(".step_two").html(I18N.get("IAM.NEW.SIGNIN.RIGHT.PANEL.ALLOW.SCANQR")),
                $(".step_three").html(I18N.get("IAM.NEW.SIGNIN.RIGHT.PANEL.VERIFY.SCANQR")),
                $(".approved").css("background", 'url("../images/SCANQR_Verify.823be333b83563ed3c9e71e7eaa175e5.svg") no-repeat transparent'),
                (signinathmode = jsonStr.resource_name),
                $("#waitbtn").hide();
            var qrcodeurl = jsonStr[signinathmode].img;
            (qrtempId = jsonStr[signinathmode].temptokenid),
                isValid(qrtempId) ? $("#openoneauth").show() : $("#openoneauth").hide(),
                $("#mfa_push_container,#mfa_totp_container").hide(),
                $("#qrimg").attr("src", qrcodeurl),
                $(".checkbox_div").addClass("qrwidth");
        }
        $(".tryanother").show();
        var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA;
        return isAMFA && (allowedModeChecking(), $(".tryanother").hide()), (isFormSubmited = !1), (signinathmode = "primary" === callmode ? "deviceauth" : "devicesecauth"), $(".loader,.blur").hide(), !1;
    }
    return !1;
}
function handleOneAuthDetails(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp);
        signinathmode = jsonStr.resource_name;
        var statusCode = jsonStr.status_code;
        if (!(!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode)) {
            var errorcontainer = "totp" === prefoption || "ONEAUTH_TOTP" === prefoption ? "mfa_totp" : "yubikey";
            "yubikey" === errorcontainer ? $("#yubikey_container").show() : $("#yubikey_container").hide();
            var error_resp = jsonStr.errors[0],
                errorCode = error_resp.code;
            return "D105" === errorCode
                ? (showCommonError(errorcontainer, jsonStr.localized_message), $(".fed_2show").hide(), isRecovery || allowedModeChecking(), !1)
                : "R303" === errorCode
                ? (showRestrictsignin(), !1)
                : "throttles_limit_exceeded" === jsonStr.cause
                ? (showCommonError(errorcontainer, jsonStr.localized_message), !1)
                : (showCommonError(errorcontainer, jsonStr.localized_message), !1);
        }
        var successCode = jsonStr.code;
        if ("SI302" === successCode || "MFA302" === successCode || "SI202" === successCode || "SI201" === successCode) {
            (temptoken = jsonStr[signinathmode].token), (prefoption = deviceauthdetails[deviceauthdetails.resource_name].modes.oadevice.data[oadevicepos].prefer_option);
            var devicemode =
                "ONEAUTH_PUSH_NOTIF" === prefoption
                    ? "push"
                    : "ONEAUTH_TOTP" === prefoption
                    ? "totp"
                    : "ONEAUTH_SCAN_QR" === prefoption
                    ? "scanqr"
                    : "ONEAUTH_FACE_ID" === prefoption
                    ? "faceid"
                    : "ONEAUTH_TOUCH_ID" === prefoption
                    ? "touch"
                    : "";
            if (isResend) return showResendPushInfo(), !1;
            var headtitle =
                    "ONEAUTH_PUSH_NOTIF" === prefoption
                        ? "IAM.NEW.SIGNIN.VERIFY.PUSH"
                        : "ONEAUTH_TOTP" === prefoption
                        ? "IAM.NEW.SIGNIN.TOTP"
                        : "ONEAUTH_SCAN_QR" === prefoption
                        ? "IAM.NEW.SIGNIN.QR.CODE"
                        : "ONEAUTH_FACE_ID" === prefoption
                        ? "IAM.NEW.SIGNIN.FACEID.TITLE"
                        : "ONEAUTH_TOUCH_ID" === prefoption
                        ? "IAM.NEW.SIGNIN.TOUCHID.TITLE"
                        : "",
                headerdesc =
                    "ONEAUTH_PUSH_NOTIF" === prefoption
                        ? "IAM.NEW.SIGNIN.MFA.PUSH.HEADER"
                        : "ONEAUTH_TOTP" === prefoption
                        ? "IAM.NEW.SIGNIN.ONEAUTH.TOTP.HEADER"
                        : "ONEAUTH_SCAN_QR" === prefoption
                        ? "IAM.NEW.SIGNIN.QR.HEADER"
                        : "ONEAUTH_FACE_ID" === prefoption
                        ? "IAM.NEW.SIGNIN.FACEID.HEADER"
                        : "ONEAUTH_TOUCH_ID" === prefoption
                        ? "IAM.NEW.SIGNIN.TOUCHID.HEADER"
                        : "";
            if (
                (isFaceId === !0 && ((headtitle = "IAM.NEW.SIGNIN.FACEID.TITLE"), (headerdesc = "IAM.NEW.SIGNIN.FACEID.HEADER"), (devicemode = "faceid")),
                $("#password_container,#login_id_container,#captcha_container,.fed_2show,#otp_container,.deviceparent").hide(),
                $("#headtitle").text(I18N.get(headtitle)),
                $(".service_name").text(I18N.get(headerdesc)),
                $(".product_text,.product_head,.MAppIcon,.OnaAuthHLink,.pwless_head,.pwless_text").hide(),
                $("#product_img").removeClass($("#product_img").attr("class")),
                $(".devices").css("display", ""),
                $("#product_img").addClass("tfa_" + devicemode + "_mode"),
                $("#forgotpassword").hide(),
                $("#nextbtn").hide(),
                $("#mfa_" + devicemode + "_container").show(),
                $(".service_name").addClass("extramargin"),
                $("#mfa_device_container").show(),
                isRecovery || allowedModeChecking(),
                $(".loader,.blur").hide(),
                "push" === devicemode || "touch" === devicemode || "faceid" === devicemode || "scanqr" === devicemode)
            ) {
                var wmsid = jsonStr[signinathmode].WmsId && jsonStr[signinathmode].WmsId.toString();
                (callmode = "secondary"), isVerifiedFromDevice(prefoption, !1, wmsid);
            }
            if (
                (("push" === devicemode || "touch" === devicemode || "faceid" === devicemode) &&
                    ($("#waitbtn").attr("disabled", !0),
                    $(".waitbtn .waittext").text(I18N.get("IAM.NEW.SIGNIN.WAITING.APPROVAL")),
                    $(".loadwithbtn").show(),
                    $("#waitbtn").show(),
                    $("#openoneauth").hide(),
                    window.setTimeout(function () {
                        return $(".waitbtn .waittext").text(I18N.get("IAM.PUSH.RESEND.NOTIFICATION")), $("#waitbtn").attr("disabled", !1), $(".loadwithbtn").hide(), (isFormSubmited = !1), !1;
                    }, 2e4)),
                "scanqr" === devicemode)
            ) {
                var qrcodeurl = jsonStr[signinathmode].img;
                (qrtempId = jsonStr[signinathmode].temptokenid), isValid(qrtempId) ? $("#openoneauth").show() : $("#openoneauth").hide(), $("#qrimg").attr("src", qrcodeurl), $(".checkbox_div").addClass("qrwidth");
            }
            return (isFormSubmited = !1), !1;
        }
        return !1;
    }
    var errorcontainer = "passwordauth" === signinathmode ? "password" : "login_id";
    return showCommonError(errorcontainer, I18N.get("IAM.ERROR.GENERAL")), !1;
}
function handlePassphraseDetails(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp);
        signinathmode = jsonStr.resource_name;
        var statusCode = jsonStr.status_code;
        if (!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode) {
            var successCode = jsonStr.code,
                statusmsg = jsonStr.passphrasesecauth.status;
            return "success" === statusmsg
                ? restrictTrustMfa
                    ? (updateTrustDevice(!1), !1)
                    : (showTrustBrowser(), !1)
                : "P500" === successCode || "P501" === successCode
                ? ((temptoken = jsonStr[signinathmode].token), showPasswordExpiry(jsonStr[signinathmode].pwdpolicy), !1)
                : (showCommonError("passphrase", jsonStr.localized_message), !1);
        }
        if ("throttles_limit_exceeded" === jsonStr.cause) return showCommonError("passphrase", jsonStr.localized_message), !1;
        var error_resp = jsonStr.errors && jsonStr.errors[0],
            errorCode = error_resp && error_resp.code;
        return "IN107" === errorCode || "IN108" === errorCode
            ? ($(".fed_2show,.line").hide(),
              (cdigest = jsonStr.cdigest),
              showHip(cdigest, "bcaptcha_img"),
              $("#bcaptcha_container").show(),
              $("#bcaptcha").focus(),
              clearCommonError("bcaptcha"),
              changeButtonAction(I18N.get("IAM.NEW.SIGNIN.VERIFY"), !1),
              "IN107" === errorCode && showCommonError("bcaptcha", errorMessage),
              !1)
            : "R303" === errorCode
            ? (showRestrictsignin(), !1)
            : (showCommonError("passphrase", jsonStr.localized_message), !1);
    }
}
function resendpush_checking(resendtiming) {
    clearInterval(resendTimer),
        $(".rnd_resend").addClass("nonclickelem"),
        $(".rnd_resend").html(I18N.get("IAM.NEW.SIGNIN.RESEND.PUSH.COUNTDOWN")),
        $(".rnd_resend span").text(resendtiming),
        (resendTimer = setInterval(function () {
            resendtiming--, $(".rnd_resend span").text(resendtiming), 0 === resendtiming && (clearInterval(resendTimer), $(".rnd_resend").html(I18N.get("IAM.NEW.SIGNIN.RESEND.PUSH")), $(".rnd_resend").removeClass("nonclickelem"));
        }, 1e3));
}
function isVerifiedFromDevice(prefmode, isMyZohoApp, WmsID) {
    if (isWmsRegistered === !1 && isValid(WmsID) && "undefined" != WmsID) {
        (wmscallmode = prefmode), (wmscallapp = isMyZohoApp), (wmscallid = WmsID);
        try {
            WmsLite.setNoDomainChange(), WmsLite.registerAnnon("AC", WmsID), (isWmsRegistered = !0);
        } catch (e) {}
    }
    if (((prefmode = void 0 === prefmode ? wmscallmode : prefmode), (isMyZohoApp = void 0 === isMyZohoApp ? wmscallapp : isMyZohoApp), (WmsID = void 0 === WmsID ? wmscallid : WmsID), clearInterval(_time), verifyCount > 15)) return !1;
    var loginurl = isMyZohoApp ? uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/device/" + deviceid + "?" : uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/oneauth/" + deviceid + "?";
    loginurl += "digest=" + digest + "&" + signinParams + "&polling=" + !0;
    var jsonData = { oneauthsec: { devicepref: prefmode } };
    if (isMyZohoApp) {
        jsonData = "primary" === callmode ? { deviceauth: { devicepref: prefmode } } : { devicesecauth: { devicepref: prefmode } };
        var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA;
        jsonData = "primary" != callmode && isAMFA ? { devicesecauth: { devicepref: prefoption, isAMFA: !0 } } : jsonData;
    }
    if ((sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, VerifySuccess, "PUT"), verifyCount++, isValid(WmsID) && "undefined" != WmsID)) {
        wmscount++;
        var callIntervalTime = 6 > wmscount ? 5e3 : 25e3;
        return (_time = setInterval('isVerifiedFromDevice("' + prefmode + '",' + isMyZohoApp + ',"' + WmsID + '")', callIntervalTime)), !1;
    }
    return (_time = setInterval('isVerifiedFromDevice("' + prefmode + '",' + isMyZohoApp + ',"' + WmsID + '")', 3e3)), !1;
}
function VerifySuccess(res) {
    if (IsJsonString(res)) {
        var jsonStr = JSON.parse(res);
        signinathmode = jsonStr.resource_name;
        var statusCode = jsonStr.status_code;
        if (!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode) {
            var successCode = jsonStr.code,
                statusmsg = jsonStr[signinathmode].status;
            if ("SI302" === successCode || "SI200" === successCode || "SI300" === successCode || "SI301" === successCode || "SI303" === successCode || "SI305" === successCode) return switchto(jsonStr[signinathmode].redirect_uri), !1;
            if ("success" === statusmsg) return clearInterval(_time), restrictTrustMfa ? (updateTrustDevice(!1), !1) : (showTrustBrowser(), !1);
            if ("P500" === successCode || "P501" === successCode) return (temptoken = jsonStr[signinathmode].token), showPasswordExpiry(jsonStr[signinathmode].pwdpolicy), !1;
        } else if ("500" == statusCode) {
            var error_resp = jsonStr.errors && jsonStr.errors[0].code;
            if ("Y401" == error_resp) {
                if (isPasswordless) return showTopErrNotification(I18N.get("IAM.SIGNIN.ERROR.YUBIKEY.VALIDATION.FAILED")), !1;
                if ("R303" === error_resp) return showRestrictsignin(), !1;
                showCommonError("yubikey", I18N.get("IAM.SIGNIN.ERROR.YUBIKEY.VALIDATION.FAILED")), $("#yubikey_container").show(), showError();
            }
        }
    }
    return !1;
}
function handleSecondaryDevices(primaryMode) {
    if ("oadevice" === primaryMode || "mzadevice" === primaryMode) {
        $(".secondary_devices").find("option").remove().end();
        var deviceDetails = deviceauthdetails[deviceauthdetails.resource_name].modes,
            isSecondaryDevice = !1,
            optionElem = "";
        if (((secondaryMode = "oadevice"), "oadevice" == primaryMode && (secondaryMode = "mzadevice"), deviceDetails[primaryMode])) {
            var oneauthdetails = deviceDetails[primaryMode].data;
            "push" != oneauthdetails[0].prefer_option
                ? ((optionElem += "<option value='0' version='" + oneauthdetails[0].app_version + "'>" + oneauthdetails[0].device_name + "</option>"), (isSecondaryDevice = !0))
                : oneauthdetails.forEach(function (data, index) {
                      (optionElem += "<option value=" + index + " version='" + data.app_version + "'>" + data.device_name + "</option>"), (isSecondaryDevice = !0);
                  });
        }
        if (deviceDetails[secondaryMode]) {
            var oneauthdetails = deviceDetails[secondaryMode].data;
            "push" != oneauthdetails[0].prefer_option
                ? ((optionElem += "<option value='0' version='" + oneauthdetails[0].app_version + "'>" + oneauthdetails[0].device_name + "</option>"), (isSecondaryDevice = !0))
                : oneauthdetails.forEach(function (data, index) {
                      (optionElem += "<option value=" + index + " version='" + data.app_version + "'>" + data.device_name + "</option>"), (isSecondaryDevice = !0);
                  });
        }
        if (((document.getElementsByClassName("secondary_devices")[0].innerHTML = optionElem), isSecondaryDevice))
            try {
                renderUV(".secondary_devices", !1, "", "", "", !1, !1, "Mobile", !0),
                    (prevoption = $(".secondary_devices").children("option:selected").val()),
                    $(".secondary_devices option").length > 1 || ($(".selectbox_arrow").hide(), $(".devices").addClass("nonclickelem")),
                    window.setTimeout(function () {
                        $(".devices .select2").addClass("device_select"),
                            $(".devices .select2").show(),
                            $(".devices .select2-selection--single").addClass("device_selection"),
                            $(".devicedetails").hide(),
                            $(".select2-selection__arrow").addClass("hide"),
                            $(".secondary_devices option").length > 1 || ($(".downarrow").hide(), $(".devices").css("pointer-events", "none"));
                    }, 100);
            } catch (err) {
                $(".secondary_devices").css("display", "block"),
                    $(".secondary_devices option").length > 1 || $(".secondary_device").css("pointer-events", "none"),
                    $("option").each(function () {
                        if (this.text.length > 20) {
                            var optionText = this.text,
                                newOption = optionText.substring(0, 20);
                            $(this).text(newOption + "...");
                        }
                    });
            }
    }
}
function secondaryFormat(option) {
    return "<div><span class='icon-device select_icon'></span><span class='select_con' value=" + $(option.element).attr("value") + " version=" + $(option.element).attr("version") + ">" + option.text + "</span></div>";
}
function showMoreSigninOptions() {
    showproblemsignin(!0),
        showCantAccessDevice(),
        $(".problemsignin_head,.recoveryhead .backoption").hide(),
        -1 != allowedmodes.indexOf("recoverycode") ? $("#recoverOption").show() : $("#recoverOption").hide(),
        -1 != allowedmodes.indexOf("passphrase") ? $("#passphraseRecover").show() : $("#passphraseRecover").hide(),
        $(".rec_head_text").text(I18N.get("IAM.NEW.SIGNIN.FEDERATED.LOGIN.TITLE")),
        $(".signin_head").prepend("<span class='icon-backarrow backoption' onclick='hideCantAccessDevice(this)'></span>"),
        $(".backuphead .backoption,.greytext").hide(),
        $(".recoveryhead .backoption").css("cssText", "display: none !important;"),
        $("#recoverymodeContainer").html($(".problemsignincon").html() + $(".recoverymodes").html()),
        $(".recoverymodes").hide(),
        $("#recoverymodeContainer").children().length - !$("#recoverOption").is(":visible") - !$("#passphraseRecover").is(":visible") > 3 && !isMobile && $("#recoverymodeContainer").addClass("problemsignincontainer"),
        (isRecovery = !0),
        (isPasswordless = !1);
}
function generateOTP(isResendOnly, mode) {
    if (
        ("undefined" != typeof mode && isResendOnly && (mode = prev_showmode),
        (mode = mode && "email" == mode.toLowerCase() ? "EMAIL" : "MOBILE"),
        isResendOnly && ($(".resendotp").addClass("sendingotp"), $(".resendotp").text(I18N.get("IAM.NEW.GENERAL.SENDING.OTP"))),
        isPrimaryMode)
    )
        return generateOTPAuth(isResendOnly, mode), !1;
    var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/otp/" + emobile,
        isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA,
        callback = "email" == prev_showmode ? enableOTPForEmail : enableOTPDetails;
    if (isResendOnly) {
        loginurl += "?digest=" + digest + "&" + signinParams;
        var jsonData = isAMFA ? { otpsecauth: { mdigest: mdigest, is_resend: !0, isAMFA: !0, mode: mode } } : { otpsecauth: { mdigest: mdigest, is_resend: !0, mode: mode } };
        return sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, showResendInfo, "PUT"), !1;
    }
    loginurl += "?digest=" + digest + "&" + signinParams;
    var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA,
        jsonData = isAMFA ? { otpsecauth: { isAMFA: !0, mode: mode } } : { otpsecauth: { mode: mode } };
    return sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, callback), !1;
}
function generateOTPAuth(isResendOnly, mode) {
    var emailID = $("#emailcheck").val();
    if ($("#emailcheck_container").is(":visible") && (!isValid(emailID) || !isEmailIdSignin(emailID)))
        return isValid(emailID) ? showCommonError("emailcheck", I18N.get("IAM.SIGNIN.ERROR.USEREMAIL.NOT.EXIST")) : showCommonError("emailcheck", I18N.get("IAM.NEW.SIGNIN.ENTER.EMAIL.ADDRESS")), !1;
    var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/otp/" + emobile + "?digest=" + digest + "&" + signinParams,
        callback = isResendOnly ? showResendInfo : enableOTPDetails;
    callback = $("#emailcheck_container").is(":visible") ? enableEmailOTPDetails : callback;
    var jsonData = isValid(emailID) ? { otpauth: { email_id: emailID, mode: mode } } : { otpauth: { mode: mode } },
        jsonDataResend = isResendOnly && $("#emailverify_container").is(":visible") ? { otpauth: { is_resend: !0, email_id: emailID, mode: mode } } : { otpauth: { is_resend: !0, mode: mode } };
    return isResendOnly ? sendRequestWithTemptoken(loginurl, JSON.stringify(jsonDataResend), !0, callback) : sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, callback), !1;
}
function showResendInfo(resp) {
    var elem = $("#mfa_otp").is(":visible") ? "mfa_otp" : $("#mfa_email").is(":visible") ? "mfa_email" : $("#otp").is(":visible") ? "otp" : $("#emailverify").is(":visible") ? "emailverify" : void 0;
    if ((void 0 != elem && $("#" + elem).click(), resendcheck >= 0 && IsJsonString(resp))) {
        var jsonStr = JSON.parse(resp);
        signinathmode = jsonStr.resource_name;
        var statusCode = jsonStr.status_code;
        if (!(!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode)) {
            if ("throttles_limit_exceeded" === jsonStr.cause) return isPrimaryDevice ? (showTopErrNotification(jsonStr.localized_message), !1) : (showCommonError("otp", jsonStr.localized_message), !1);
            var error_resp = jsonStr.errors && jsonStr.errors[0],
                errorCode = error_resp && error_resp.code,
                errorMessage = jsonStr.localized_message;
            return "IN107" === errorCode || "IN108" === errorCode
                ? ((cdigest = jsonStr.cdigest), showHip(cdigest), showCaptcha(I18N.get("IAM.NEXT"), !1, "otp"), "IN107" === errorCode && showCommonError("captcha", errorMessage), !1)
                : "R303" === errorCode
                ? (showRestrictsignin(), !1)
                : (showCommonError("otp", errorMessage), !1);
        }
        var successCode = jsonStr.code;
        if ("SI201" === successCode || "SI200" === successCode)
            return (
                (mdigest = jsonStr[signinathmode].mdigest),
                showTopNotification(formatMessage(I18N.get("IAM.NEW.SIGNIN.OTP.SENT.RESEND"), rmobile)),
                "primary" === callmode ? PriotpThreshold-- : void 0 != MFAotpThresholdmob && "otp" === prev_showmode ? MFAotpThresholdmob-- : void 0 != AMFAotpThreshold && "email" === prev_showmode ? AMFAotpThreshold-- : "",
                resendotp_checking(),
                -1 != allowedmodes.indexOf("recoverycode") &&
                    setTimeout(function () {
                        $("#mfa_otp_container").is(":visible") && $(".go_to_bk_code_container").addClass("show_bk_pop");
                    }, 3e4),
                !1
            );
    }
    return !1;
}
function enableOTPDetails(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp);
        signinathmode = jsonStr.resource_name;
        var statusCode = jsonStr.status_code;
        if (!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode) {
            var successCode = jsonStr.code;
            return "SI201" === successCode || "SI200" === successCode
                ? ($(".loader,.blur").hide(),
                  (mdigest = jsonStr[signinathmode].mdigest),
                  (isSecondary = (deviceauthdetails.passwordauth && deviceauthdetails.passwordauth.modes.otp.count > 1) || (allowedmodes.length > 1 && -1 === allowedmodes.indexOf("recoverycode")) ? !0 : !1),
                  "otpauth" === signinathmode
                      ? (clearCommonError("otp"),
                        $("#login").show(),
                        $("#emailcheck_container").hide(),
                        $("#emailcheck").val(""),
                        showTopNotification(formatMessage(I18N.get("IAM.NEW.SIGNIN.OTP.SENT"), rmobile), 1e4),
                        resendotp_checking(),
                        -1 != allowedmodes.indexOf("saml") ? $(".otp_actions .signinwithsaml").show() : $(".otp_actions .signinwithsaml").hide(),
                        -1 != allowedmodes.indexOf("jwt") ? $(".otp_actions .signinwithjwt").show() : $(".otp_actions .signinwithjwt").hide(),
                        -1 != allowedmodes.indexOf("saml") && -1 != allowedmodes.indexOf("jwt")
                            ? ($(".otp_actions .showmoresigininoption").show(), $(".otp_actions .signinwithjwt,.otp_actions .signinwithsaml,.otp_actions .showmoresigininoption").hide())
                            : $(".otp_actions .showmoresigininoption").hide(),
                        showOtpDetails(),
                        !1)
                      : (isValid(digest) || (digest = jsonStr[signinathmode].mdigest), enableMfaField("otp"), resendotp_checking(), !1))
                : !1;
        }
        if (jsonStr.errors && jsonStr.errors[0] && "AS115" == jsonStr.errors[0].code)
            return (
                -1 != allowedmodes.indexOf("saml") &&
                    -1 != allowedmodes.indexOf("jwt") &&
                    ($(".otp_actions .showmoresigininoption").show(), $(".otp_actions .signinwithjwt,.otp_actions .signinwithsaml,.otp_actions .showmoresigininoption").hide()),
                showOtpDetails(),
                showCommonError("otp", jsonStr.localized_message),
                $("#nextbtn,#otp").css("pointer-events", "none"),
                $("#otp").blur(),
                $(".resendotp").hide(),
                !1
            );
        var errorfield = $("#emailcheck_container").is(":visible") ? "emailcheck" : "password";
        if ("throttles_limit_exceeded" === jsonStr.cause) return showCommonError(errorfield, jsonStr.localized_message), !1;
        var errorMessage = jsonStr.localized_message;
        return showCommonError(errorfield, errorMessage), !1;
    }
    return !1;
}
function enableOTPForEmail(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp);
        signinathmode = jsonStr.resource_name;
        var statusCode = jsonStr.status_code;
        if (!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode) {
            AMFAotpThreshold = 3;
            {
                jsonStr.code;
            }
            $(".loader,.blur").hide(), (mdigest = jsonStr[signinathmode].mdigest), goBackToProblemSignin();
            var emaillist = deviceauthdetails[deviceauthdetails.resource_name].modes && deviceauthdetails[deviceauthdetails.resource_name].modes.email;
            return (
                (isSecondary = (emaillist && emaillist.count > 1) || (allowedmodes.length > 1 && -1 === allowedmodes.indexOf("recoverycode"))),
                $("#password_container,#captcha_container,.fed_2show,#otp_container").hide(),
                $("#headtitle").text(I18N.get("IAM.AC.CHOOSE.OTHER_MODES.EMAIL.HEADING")),
                $(".service_name").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.OTP.HEADER"), rmobile) + "<br>" + formatMessage(I18N.get("IAM.NEW.SIGNIN.WHY.VERIFY"), suspisious_login_link)),
                $("#product_img").removeClass($("#product_img").attr("class")),
                $("#product_img").addClass("tfa_otp_mode"),
                showTopNotification(formatMessage(I18N.get("IAM.NEW.SIGNIN.OTP.SENT"), rmobile)),
                isClientPortal || enableSplitField("mfa_email", 7, I18N.get("IAM.VERIFY.CODE")),
                $("#mfa_email_container,#mfa_email_container .textbox_actions").show(),
                $("#forgotpassword").hide(),
                $(".service_name").addClass("extramargin"),
                $("#nextbtn span").removeClass("zeroheight"),
                $("#nextbtn").removeClass("changeloadbtn"),
                $("#nextbtn").attr("disabled", !1),
                $("#nextbtn span").text(I18N.get("IAM.NEW.SIGNIN.VERIFY")),
                isClientPortal && $("#mfa_email").focus(),
                (isFormSubmited = !1),
                (callmode = "secondary"),
                resendotp_checking(),
                allowedModeChecking(),
                isValid(digest) || (digest = jsonStr[signinathmode].mdigest),
                (signinathmode = jsonStr.resource_name),
                !1
            );
        }
        if (triggeredUser) return showTopErrNotification(jsonStr.localized_message), !1;
        if ("throttles_limit_exceeded" === jsonStr.cause) return showCommonError("password", jsonStr.localized_message), !1;
        var errorMessage = jsonStr.localized_message;
        return showCommonError("password", errorMessage), !1;
    }
    return !1;
}
function resendotp_checking() {
    var resendtiming = 60;
    clearInterval(resendTimer),
        $(".resendotp").hasClass("sendingotp") && $(".resendotp").removeClass("sendingotp"),
        $(".resendotp").addClass("nonclickelem"),
        $(".resendotp span").text(resendtiming),
        (resendcheck = "primary" === callmode ? PriotpThreshold : "undefined" != MFAotpThresholdmob && "otp" === prev_showmode ? MFAotpThresholdmob : "undefined" != AMFAotpThreshold && "email" === prev_showmode ? AMFAotpThreshold : "");
    var attemptContent = 0 == resendcheck && "primary" === callmode ? "IAM.SIGNIN.OTP.THRESHOLD.LIMIT.ENDS" : 0 == resendcheck && "primary" != callmode ? "IAM.SIGNIN.OTP.MAX.COUNT.MFA.LIMIT.ENDS" : "";
    if (2 >= resendcheck && resendcheck >= 0) {
        if (($(".resendotp").html(I18N.get("IAM.TFA.RESEND.OTP.COUNTDOWN")), 0 == resendcheck)) return $(".resendotp").html(I18N.get(attemptContent)), !1;
    } else $(".resendotp").html(I18N.get("IAM.TFA.RESEND.OTP.COUNTDOWN"));
    resendTimer = setInterval(function () {
        resendtiming--, $(".resendotp span").text(resendtiming), 0 === resendtiming && (clearInterval(resendTimer), $(".resendotp").html(I18N.get("IAM.NEW.SIGNIN.RESEND.OTP")), $(".resendotp").removeClass("nonclickelem"));
    }, 1e3);
}
function changeRecoverOption(recoverOption) {
    "passphrase" === recoverOption ? showPassphraseContainer() : showBackupVerificationCode(),
        "passphrase" === recoverOption
            ? ((recoverTitle = I18N.get("IAM.NEW.SIGNIN.PASSPHRASE.RECOVER.TITLE")), (recoverHeader = I18N.get("IAM.NEW.SIGNIN.PASSPHRASE.RECOVER.HEADER")))
            : "recoverycode" === recoverOption && ((recoverTitle = I18N.get("IAM.BACKUP.VERIFICATION.CODE")), (recoverHeader = I18N.get("IAM.NEW.SIGNIN.BACKUP.RECOVER.HEADER"))),
        $("#backup_container #backup_title").text(recoverTitle),
        $("#backup_container .backup_desc").text(recoverHeader),
        $("#backup_container .backoption").hide();
}
function showError() {
    return $(".waitbtn .waittext").text(I18N.get("IAM.EXCEPTION.RELOAD")), $(".loadwithbtn").hide(), $("#waitbtn").attr("disabled", !1), (isFormSubmited = !1), !1;
}
function showMoreIdps() {
    return (
        $("#login,.line").hide(),
        $(".small_box").removeClass("small_box"),
        $(".fed_div").addClass("large_box"),
        $(".fed_text,.fed_2show").show(),
        $(".zohosignin").removeClass("hide"),
        $("#showIDPs").hide(),
        $(".fed_div").show(),
        $(".more").hide(),
        $(".signin_fed_text").addClass("signin_fedtext_bold"),
        $(".signin_container").css("height", "auto"),
        $(".linkedicon").removeClass("icon-linkedin_small").addClass("icon-linkedIn_L"),
        $(".baiduicon").removeClass("icon-baidu_small").addClass("icon-baidu_L"),
        $(".intuiticon").removeClass("icon-intuit_small").addClass("icon-intuit_L"),
        $(".intuit_icon,.intuit_icon .fed_center").removeClass("intuit_fed"),
        setFooterPosition(),
        isneedforGverify ? void $("#macappleicon").hide() : ($(".fed_center_google").css("width", "max-content"), $(".googleIcon").removeClass("google_small_icon"), $(".apple_fed").hide(), $("#macappleicon").show(), !1)
    );
}
function showZohoSignin() {
    $("#login").show(),
        isMobile || $(".line").show(),
        $(".zohosignin").addClass("hide"),
        $(".fed_text,.fed_div").hide(),
        $(".signin_fed_text").removeClass("signin_fedtext_bold"),
        $(".more,.show_fed").show(),
        de("login_id") && $("#login_id").focus(),
        $(".large_box").removeClass("large_box"),
        $(".fed_div").addClass("small_box"),
        $(".linkedicon").addClass("icon-linkedin_small").removeClass("icon-linkedIn_L"),
        $(".baiduicon").addClass("icon-baidu_small").removeClass("icon-baidu_L"),
        $(".intuiticon").addClass("icon-intuit_small").removeClass("icon-intuit_L"),
        $(".intuit_icon,.intuit_icon .fed_center").removeClass("intuit_fed"),
        fediconsChecking();
}
function showHidePassword() {
    var passwordField = $("#new_password").is(":visible") ? "#new_password" : "#password";
    passwordField = $("#passphrase").is(":visible") ? "#passphrase" : passwordField;
    var passType = $(passwordField).attr("type");
    "password" === passType ? ($(passwordField).attr("type", "text"), $(".show_hide_password").addClass("icon-show")) : ($(passwordField).attr("type", "password"), $(".show_hide_password").removeClass("icon-show")),
        $(passwordField).focus();
}
function changeCountryCode() {
    $(".select_country_code").text($("#country_code_select").val());
}
function fediconsChecking() {
    if (0 === isShowFedOptions) return $(".fed_2show,.line").hide(), !1;
    if ("undefined" != typeof signinathmode && "lookup" != signinathmode) return !1;
    $(".large_box").removeClass("large_box"),
        isneedforGverify ? 1 == $("#macappleicon").length && ($("#macappleicon").remove(), $("#appleNormalIcon").show()) : ($("#appleNormalIcon").remove(), $("#macappleicon").show()),
        $(".fed_div").addClass("small_box"),
        $(".fed_text,.fed_div").hide();
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || /Mac|iPad|iPhone|iPod/.test(navigator.platform || "");
    if ((isneedforGverify ? $(".google_icon .fed_text").show() : $(".google_icon .fed_text").hide(), document.getElementsByClassName("fed_div").length > 0)) {
        (document.getElementsByClassName("fed_div")[0].style.display = "inline-block"), document.getElementsByClassName("fed_div")[0].classList.add("show_fed");
        var fed_all_width = isneedforGverify ? $(".signin_box").width() - 90 : $(".signin_box").width(),
            show_fed_length = Math.floor(fed_all_width / 50) && Math.floor(fed_all_width % 50) > $(".fed_div").outerWidth() ? Math.floor(fed_all_width / 50) + 1 : Math.floor(fed_all_width / 50);
        if ($(".fed_div").length - 1 > show_fed_length) {
            show_fed_length = isneedforGverify ? show_fed_length : show_fed_length - 1;
            for (var i = 0; show_fed_length > i; i++) (document.getElementsByClassName("fed_div")[i].style.display = "inline-block"), document.getElementsByClassName("fed_div")[i].classList.add("show_fed");
            $(".more").show(), $(".fed_2show").show();
        } else $(".more").remove(), $(".fed_div:last").css("margin", "0px"), $(".fed_div,.fed_2show").show();
        $(".fed_div").length < 0 && $(".fed_2show").hide();
    }
}
function onSigninReady() {
    if (
        (void 0 != typeof signin_info_urls && signin_info_urls && Object.keys(signin_info_urls).length > 0 ? handleMultiDCData() : (hideloader(), fediconsChecking()),
        $(".multiDC_info").hover(
            function () {
                $(".up-arrow").show();
            },
            function () {
                $(".up-arrow").hide();
            }
        ),
        $(".up-arrow").hover(
            function () {
                $(".up-arrow").show();
            },
            function () {
                $(".up-arrow").hide();
            }
        ),
        clearInterval(_time),
        (reload_page = setInterval(checkCookie, 5e3)),
        (isMobileonly = !1),
        !isMobile && enableServiceBasedBanner ? loadRightBanner() : hiderightpanel(),
        !isPreview)
    ) {
        if ((setCookie(24), -1 == document.cookie.indexOf("IAM_TEST_COOKIE"))) return $(".signin_container,#signuplink,.banner_newtoold").hide(), $("#enableCookie").show(), !1;
        setCookie(0), $("#enableCookie").hide();
    }
    return !isValid(loginID) && trySmartSignin && localStorage && localStorage.getItem("isZohoSmartSigninDone")
        ? (openSmartSignInPage(), !1)
        : ("true" === isCaptchaNeeded && (changeHip(), $("#captcha_container").show(), $("#login_id").attr("tabindex", 1), $("#captcha").attr("tabindex", 2), $("#nextbtn").attr("tabindex", 3)),
          isValid(CC) && $("#country_code_select").val($("#" + CC).val()),
          isValid(reqCountry) &&
              ((reqCountry = "#" + reqCountry.toUpperCase()),
              $("#country_code_select option:selected").removeAttr("selected"),
              $("#country_code_select " + reqCountry).attr("selected", !0),
              $("#country_code_select " + reqCountry).trigger("change")),
          $(".select_country_code").text($("#country_code_select").val()),
          isMobile || (renderUV("#country_code_select", !0, "#login_id", "left", "flagIcons", !0, !0, "country_implement"), $(".select_container--country_implement").hide()),
          $("#select2-country_code_select-container").html($("#country_code_select").val()),
          void $("#country_code_select").change(function () {
              return (
                  $(".country_code").html($("#country_code_select").val()),
                  $("#select2-country_code_select-container").html($("#country_code_select").val()),
                  $("#login_id").removeClass("textindent62"),
                  $("#login_id").removeClass("textintent52"),
                  $("#login_id").removeClass("textindent42"),
                  checkTestIndent(),
                  $(".select2-search__field").attr("placeholder", I18N.get("IAM.SEARCHING")),
                  isMobile && $(".select_country_code").is(":visible") ? ($("#login_id").addClass("textindent62"), !1) : void 0
              );
          }));
}
function changeSecDevice(elem) {
    if ($(elem).children("option:selected").val() == prevoption) return !1;
    prevoption = $(elem).children("option:selected").val();
    var version = $(elem).children("option:selected").attr("version"),
        device_index = $(elem).children("option:selected").val();
    "1.0" === version ? (oadevicepos = device_index) : (mzadevicepos = device_index), "1.0" === version ? enableOneauthDevice() : enableMyZohoDevice(), hideTryanotherWay(), "1.0" == version && $(".tryanother").hide();
}
function checkTestIndent() {
    return $(".select_container--country_implement").is(":visible") ? ($(".select_container--country_implement ~ input").attr("style", "text-indent:70px !important; display:inline-block;"), !1) : void 0;
}
function loadRightBanner() {
    var action = "/signin/v2/banner";
    "undefined" != typeof contextpath && (action = contextpath + action),
        $.ajax({
            url: action,
            data: signinParams,
            success: function (resp) {
                handleRightBannerDetails(resp);
            },
            headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", "X-ZCSRF-TOKEN": csrfParam + "=" + euc(getCookie(csrfCookieName)) },
        });
}
function handleRightBannerDetails(resp) {
    var rightboxHtml = $(".rightside_box").html();
    if ((IsJsonString(resp) && (resp = JSON.parse(resp)), $(".overlapBanner").remove(), 1 === resp.banner[0].template.length))
        $(".rightside_box").html(rightboxHtml + "<div class='overlapBanner' " + resp.banner[0].template + "</div>"), $(".mfa_panel").hide(), $(".overlapBanner").show();
    else if (resp.banner[0].template.length > 1) {
        var count,
            dottedHtml = (bannerHtml = ""),
            bannerDetails = resp.banner[0].template;
        bannerDetails.forEach(function (data, index) {
            (bannerHtml +=
                0 != index ? "<div id='banner_" + index + "' class='rightbanner rightbannerTransition slideright' >" + data + "</div>" : "<div id='banner_" + index + "' class='rightbanner rightbannerTransition' >" + data + "</div>"),
                (dottedHtml += "<div class='dot' id='dot_" + index + "'><div></div></div>"),
                (count = index + 1);
        }),
            $(".rightside_box").html(rightboxHtml + "<div class='overlapBanner' style='width:300px'>" + bannerHtml + "</div><div class='dotHead'>" + dottedHtml + "</div>"),
            $(".mfa_panel").hide(),
            $(".banner1_href").text(I18N.get("IAM.TFA.LEARN.MORE")),
            $(".overlapBanner,.dotHead").show(),
            $("#dot_0").attr("selected", !0),
            handleRightBannerAnimation(count);
    } else hiderightpanel();
}
function handleRightBannerAnimation(count) {
    (bannerPosition = 0),
        (bannerTimer = setInterval(function () {
            changeBanner(!1, bannerPosition, count), bannerPosition++, bannerPosition >= count && (bannerPosition = 0);
        }, 5e3));
}
function changeBanner(elem, bannerPosition, count) {
    (bannerPosition = void 0 != bannerPosition ? bannerPosition : parseInt(elem.getAttribute("bannerposition"))),
        bannerPosition === count - 1 ? $("#banner_0").removeClass("slideright") : $("#banner_" + (bannerPosition + 1)).removeClass("slideright"),
        $("#banner_" + bannerPosition).addClass("slideright");
    var dotPosition = bannerPosition === count - 1 ? 0 : bannerPosition + 1;
    $(".dot").attr("selected", !1), $("#dot_" + dotPosition).attr("selected", !0);
}
function hiderightpanel() {
    $(".signin_container").css("maxWidth", "500px"), $(".rightside_box").hide(), $("#recoverybtn, #problemsignin, .tryanother").css("right", "0px");
}
function format(option) {
    var spltext;
    if (!option.id) return option.text;
    spltext = option.text.split("(");
    var cncode = $(option.element).attr("data-num"),
        cnnumber = $(option.element).attr("value"),
        cnnum = cnnumber.substring(1),
        flagcls = "flag_" + cnnum + "_" + cncode,
        ob = '<div class="pic ' + flagcls + '" ></div><span class="cn">' + spltext[0] + "</span><span class='cc'>" + cnnumber + "</span>";
    return ob;
}
function handleRequestCountryCode(resp) {
    IsJsonString(resp) && (resp = JSON.parse(resp)),
        resp.isd_code &&
            ((reqCountry = resp.country_code),
            (reqCountry = "#" + reqCountry.toUpperCase()),
            $("#country_code_select option:selected").removeAttr("selected"),
            $("#country_code_select " + reqCountry).attr("selected", !0),
            (document.getElementById("country_code_select").value = "+" + resp.isd_code),
            $("#country_code_select " + reqCountry).trigger("change"),
            $("#login_id").removeClass("textindent62"),
            $("#login_id").removeClass("textintent52"),
            $("#login_id").removeClass("textindent42"));
}
function checking() {
    var a = $("#login_id").val().trim(),
        check = /^(?:[0-9] ?){0,1000}[0-9]$/.test(a);
    if (($(".select2-selection--single").attr("tabindex", "-1"), !isCountrySelected)) {
        var reqUrl = uriPrefix + "/accounts/public/api/locate";
        sendRequestWithCallback(reqUrl, "", !0, handleRequestCountryCode), (isCountrySelected = !0);
    }
    if (1 == check && a)
        try {
            $(".select_container--country_implement").show(),
                checkTestIndent(),
                $(".selection").addClass("showcountry_code"),
                isMobile ? ($(".select_country_code,#country_code_select").show(), $("#login_id").addClass("textindent62")) : $(".select2").show();
        } catch (err) {
            $(".select_country_code,#country_code_select").css("display", "block"), $("#login_id").addClass("textindent62");
        }
    else
        0 == check &&
            ($("#login_id").removeClass("textindent62"),
            $("#login_id").removeClass("textintent52"),
            $("#login_id").removeClass("textindent42"),
            $(".selection").removeClass("showcountry_code"),
            $(".select_country_code,#country_code_select,.select2").hide(),
            removeUVindent(),
            $(".select_container--country_implement").hide());
    isMobile || $(".domainselect").is(":visible") || $("#portaldomain .select2").css("display", "block");
}
function removeUVindent() {
    $(".select_container--country_implement").is(":visible") && $(".select_container--country_implement ~ input").attr("style", "text-indent:10px !important;");
}
function IsJsonString(str) {
    try {
        $.parseJSON(str);
    } catch (e) {
        return !1;
    }
    return !0;
}
function isValid(instr) {
    return null != instr && "" != instr && "null" != instr;
}
function getCookie(cookieName) {
    for (var nameEQ = cookieName + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (0 == c.indexOf(nameEQ)) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function clearCommonError(field) {
    var container = field + "_container";
    $("#" + field).removeClass("errorborder"), $("#" + container + " .fielderror").slideUp(100), $("#" + container + " .fielderror").removeClass("errorlabel"), $("#" + container + " .fielderror").text("");
}
function clearFieldValue(fieldvalue) {
    $("#" + fieldvalue).val("");
}
function resetForm(isfromIP) {
    (PriotpThreshold = 3),
        isfromIP && enableServiceBasedBanner && ($(".signin_container").css("maxWidth", ""), $(".rightside_box").show(), $("#recoverybtn, #problemsignin, .tryanother").css("right", "")),
        $("#nextbtn,#otp").css("pointer-events", "auto"),
        $("#signuplink").show(),
        $("#login_id_container").slideDown(200),
        $(
            "#captcha_container,.textbox_actions,#mfa_device_container,#backupcode_container,#recoverybtn,#waitbtn,.textbox_actions_more,#openoneauth,.textbox_actions_saml,#problemsignin,.nopassword_container,.externaluser_container,.resetIP_container,#continuebtn"
        ).hide(),
        $("#password_container").addClass("zeroheight"),
        $("#password_container,#otp_container").slideUp(200),
        $("#forgotpassword,#nextbtn,#password_container .textbox_div").show(),
        $("#smartsigninbtn").removeClass("hide"),
        $(".fed_div_text span").text(""),
        $(".facebook_fed").removeClass("fed_div_text"),
        $(".signin_fed_text").show(),
        $("#login").show(),
        $("#goto_resetIP").hide(),
        $("#nextbtn span").text(I18N.get("IAM.NEXT")),
        $(".backbtn").hide(),
        $(".fielderror").removeClass("errorlabel"),
        $("input").removeClass("errorborder"),
        $(".fielderror").text("");
    var userId = $("#login_id").val().trim();
    if (($(".select2-selection__arrow").removeClass("hide"), changeButtonAction(I18N.get("IAM.NEXT"), !1), -1 != userId.indexOf("-"))) {
        var phoneId = userId.split("-");
        isPhoneNumber(phoneId[1]) && ($("#login_id").val(phoneId[1]), $("#select2-country_code_select-container").html("+" + phoneId[0]), $("#country_code_select").val("+" + phoneId[0]), checking());
    }
    return (
        $("#headtitle").html(I18N.get("IAM.SIGN_IN")),
        $(".service_name").removeClass("extramargin"),
        $(".service_name").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.SERVICE.NAME.TITLE"), displayname)),
        isMobile || $(".line").show(),
        $(".fed_2show,#signuplink,#showIDPs,.banner_newtoold,.show_fed").show(),
        de("forgotpassword") && $("#forgotpassword").removeClass("nomargin"),
        (de("password").value = ""),
        $("#login_id").focus(),
        (isFormSubmited = !1),
        (signinathmode = "lookup"),
        (callmode = "primary"),
        fediconsChecking(),
        isClientPortal
            ? !1
            : ((de("otp").value = ""),
              void (isMobile && userId && isPhoneNumber(userId.split("-")[1])
                  ? $("#country_code_select")
                        .val("+" + userId.split("-")[0])
                        .change()
                  : userId &&
                    isPhoneNumber(userId.split("-")[1]) &&
                    ($("#country_code_select").uvselect("destroy"), $("#country_code_select").val("+" + userId.split("-")[0]), renderUV("#country_code_select", !0, "#login_id", "left", "flagIcons", !0, !0, "country_implement"))))
    );
}
function switchto(url) {
    if ((clearTimeout(reload_page), 0 != url.indexOf("http"))) {
        var serverName = window.location.origin;
        window.location.origin || (serverName = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), 0 != url.indexOf("/") && (url = "/" + url), (url = serverName + url);
    }
    return isClientPortal && load_iframe ? ((window.location.href = url), !1) : void (window.top.location.href = url);
}
function showAndGenerateOtp(enablemode) {
    return (
        (prev_showmode = enablemode = void 0 != enablemode ? enablemode : -1 != allowedmodes.indexOf("email") ? "email" : "otp"),
        isPasswordless &&
            "undefined" != typeof enablemode &&
            ((emobile = "email" === enablemode ? deviceauthdetails[deviceauthdetails.resource_name].modes.email.data[0].e_email : deviceauthdetails[deviceauthdetails.resource_name].modes.otp.data[0].e_mobile),
            (rmobile = "email" === enablemode ? deviceauthdetails[deviceauthdetails.resource_name].modes.email.data[0].email : identifyEmailOrNum(deviceauthdetails[deviceauthdetails.resource_name].modes.otp.data[0].r_mobile, !0))),
        isEmailVerifyReqiured && "email" == enablemode ? (checkEmailOTPInitiate(), !1) : (generateOTP(!1, enablemode), !1)
    );
}
function showOtpDetails() {
    $("#password_container").hide();
    deviceauthdetails && deviceauthdetails.lookup.loginid ? deviceauthdetails.lookup.loginid : de("login_id").value;
    if (
        ($(".textbox_actions").show(),
        $("#enablemore").is(":visible") && ($(".textbox_actions").hide(), $(".textbox_actions,.blueforgotpassword").hide(), goBackToCurrentMode(!0)),
        $("#otp").val(""),
        $("#otp_container .username").text(identifyEmailOrNum()),
        isClientPortal || enableSplitField("otp", 7, I18N.get("IAM.VERIFY.CODE")),
        $("#otp_container").show(),
        $("#captcha_container,#enableforgot").hide(),
        isClientPortal ? $("#otp").focus() : $("#otp").click(),
        changeButtonAction(I18N.get("IAM.NEW.SIGNIN.VERIFY"), !1),
        isPasswordless &&
            ($("#signinwithpass,#enableoptionsoneauth").hide(),
            $(".signin_head").css("margin-bottom", "10px"),
            $("#nextbtn span").text(I18N.get("IAM.SIGN_IN")),
            $(".username").text(identifyEmailOrNum()),
            resendotp_checking(),
            isRecovery || allowedModeChecking(),
            $("#problemsignin,#recoverybtn,.tryanother").hide(),
            $("#enablemore #resendotp").show(),
            $("#enablemore #blueforgotpassword").hide(),
            secondarymodes.length > 1 && $(".otp_actions").hide(),
            isPasswordless))
    ) {
        var showingmodes = secondarymodes;
        return (
            3 == showingmodes.length
                ? (-1 != showingmodes.indexOf("password") ? $("#signinwithpass").show() : -1 != showingmodes.indexOf("saml") ? $("#enablesaml").show() : $("#enablejwt").show(), $(".otp_actions").show())
                : ($("#enableoptionsoneauth").hide(),
                  -1 != allowedmodes.indexOf("password") ? $("#signinwithpassoneauth").css("display", "block") : $("#signinwithpassoneauth").hide(),
                  -1 != allowedmodes.indexOf("otp") ? $("#signinwithotponeauth").css("display", "block") : $("#signinwithotponeauth").hide(),
                  -1 != allowedmodes.indexOf("email") ? $("#passlessemailverify").css("display", "block") : $("#passlessemailverify").hide(),
                  -1 != allowedmodes.indexOf("saml") ? $(".signinwithsamloneauth").css("display", "block") : $(".signinwithsamloneauth").hide(),
                  -1 != allowedmodes.indexOf("jwt") ? $(".signinwithfedoneauth").css("display", "block") : $(".signinwithfedoneauth").hide(),
                  -1 != allowedmodes.indexOf("federated") ? $(".signinwithfedoneauth").css("display", "block") : $(".signinwithfedoneauth").hide(),
                  -1 != allowedmodes.indexOf("otp")
                      ? $("#signinwithotponeauth").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.PASSWORDLESS.OTP.VERIFY.TITLE"), identifyEmailOrNum(deviceauthdetails[deviceauthdetails.resource_name].modes.email.data[0].r_mobile, !0)))
                      : "",
                  -1 != allowedmodes.indexOf("email")
                      ? $("#passlessemailverify").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.PASSWORDLESS.EMAIL.VERIFY.TITLE"), deviceauthdetails[deviceauthdetails.resource_name].modes.email.data[0].email))
                      : "",
                  "otp" == prev_showmode && $("#signinwithotponeauth").hide(),
                  "email" == prev_showmode && $("#passlessemailverify").hide()),
            !1
        );
    }
}
function showPassword() {
    if (
        ((prev_showmode = "password"),
        $("#password_container").removeClass("zeroheight"),
        $("#otp_container").slideUp(300),
        $("#password_container").slideDown(300),
        changeButtonAction(I18N.get("IAM.SIGN_IN"), !1),
        (signinathmode = "passwordauth"),
        $(".mobile_message").hide(),
        $("#captcha_container").hide(),
        $("#password").focus(),
        $(".service_name,#blueforgotpassword").show(),
        isPasswordless)
    ) {
        $("#enableotpoption,#enablesaml,#enablejwt,#enablemore .resendotp,#enableoptionsoneauth,#signinwithpassoneauth").hide();
        var showingmodes = secondarymodes;
        3 == showingmodes.length
            ? -1 != showingmodes.indexOf("otp") || -1 != showingmodes.indexOf("email")
                ? $("#enableotpoption").show()
                : -1 != showingmodes.indexOf("smal")
                ? $("#enablesaml").show()
                : -1 != showingmodes.indexOf("jwt")
                ? $("#enablejwt").show()
                : ""
            : showingmodes.length > 2 && $("#enablemore").show();
    }
}
function showTryanotherWay() {
    if ((clearInterval(_time), clearCommonError("yubikey"), $(".optionmod").show(), isMobileonly && "mzadevice" === prev_showmode))
        return $(".signin_container").addClass("mobile_signincontainer"), $("#try" + prefoption).hide(), $(".blur").show(), $(".blur").addClass("dark_blur"), allowedModeChecking_mob(), !1;
    $(".signin_head").css("margin-bottom", "10px"),
        $(".addaptivetfalist,.borderlesstry,#trytitle").show(),
        $("#nextbtn,.service_name,.fieldcontainer,#headtitle,#problemsignin,#recoverybtn_mob,#problemsignin_mob,.verify_title,.tryanother,#totpverifybtn .loadwithbtn").hide(),
        $("#trytitle").html("<span class='icon-backarrow backoption' onclick='hideTryanotherWay()'></span>" + I18N.get("IAM.NEW.SIGNIN.TRY.ANOTHERWAY.HEADER"));
    var preferoption = deviceauthdetails[deviceauthdetails.resource_name].modes.mzadevice.data[mzadevicepos].prefer_option;
    return "totp" === preferoption && $("#trytotp").hide(), "scanqr" === preferoption && $("#tryscanqr").hide(), tryAnotherway("totp" === preferoption ? "qr" : "totp"), isRecovery || allowedModeChecking(), (isTroubleSignin = !0), !1;
}
function allowedModeChecking_mob() {
    return (
        $(".addaptivetfalist").addClass("heightChange"),
        $("#recoverybtn,#recoverybtn_mob,#recoverybtn_mob,#recoverybtn").hide(),
        -1 != allowedmodes.indexOf("recoverycode") ? $("#recoverOption").show() : $("#recoverOption").hide(),
        (isSecondary = deviceauthdetails[deviceauthdetails.resource_name].modes.otp && deviceauthdetails[deviceauthdetails.resource_name].modes.otp.count > 1 ? !0 : isSecondary),
        isSecondary ? $("#problemsignin_mob").show() : $("#recoverybtn_mob").show(),
        isSecondary ? $("#recoverybtn_mob").hide() : $("#problemsignin_mob").hide(),
        !1
    );
}
function showmzadevicemodes() {
    $(".devices").css("display", ""), showTryanotherWay(), $("#problemsigninui,#recoverybtn").hide(), isRecovery || allowedModeChecking();
}
function showproblemsignin(isBackup) {
    if (($(".devices,.devicedetails").hide(), isPasswordless && !isBackup)) return showCurrentMode(allowedmodes[1], 0, !0), !1;
    clearInterval(_time),
        $(".signin_container").removeClass("mobile_signincontainer"),
        window.setTimeout(function () {
            $(".blur").hide(), $(".blur").removeClass("dark_blur");
        }, 100),
        isMobileonly ? $(".addaptivetfalist").removeClass("heightChange") : $(".addaptivetfalist").hide(),
        $("#trytitle").html(""),
        secondarymodes.splice(secondarymodes.indexOf(prev_showmode), 1);
    var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA,
        currentmode = "mzadevice" !== prev_showmode || isMobileonly || isAMFA ? "goBackToCurrentMode()" : "showmzadevicemodes()";
    secondarymodes.unshift(prev_showmode);
    var i18n_content = {
            totp: ["IAM.NEW.SIGNIN.VERIFY.VIA.AUTHENTICATOR", "IAM.NEW.SIGNIN.VERIFY.VIA.AUTHENTICATOR.DESC"],
            otp: ["IAM.NEW.SIGNIN.SMS.MODE", "IAM.NEW.SIGNIN.OTP.HEADER"],
            yubikey: ["IAM.NEW.SIGNIN.VERIFY.VIA.YUBIKEY", "IAM.NEW.SIGNIN.VERIFY.VIA.YUBIKEY.DESC"],
            password: ["IAM.PASSWORD.VERIFICATION", "IAM.NEW.SIGNIN.MFA.PASSWORD.DESC"],
            saml: ["IAM.NEW.SIGNIN.SAML.TITLE", "IAM.NEW.SIGNIN.SAML.HEADER"],
            jwt: ["IAM.NEW.SIGNIN.JWT.TITLE", "IAM.NEW.SIGNIN.SAML.HEADER"],
            email: ["IAM.NEW.SIGNIN.EMAIL.TITLE", "IAM.NEW.SIGNIN.OTP.HEADER"],
        },
        i18n_recover = { otp: ["IAM.AC.CHOOSE.OTHER_MODES.MOBILE.HEADING", "IAM.NEW.SIGNIN.OTP.HEADER"], email: ["IAM.AC.CHOOSE.OTHER_MODES.EMAIL.HEADING", "IAM.NEW.SIGNIN.OTP.HEADER"] },
        jsonPackage = deviceauthdetails[deviceauthdetails.resource_name],
        headingcontent = jsonPackage.isAMFA ? "IAM.SIGNIN.AMFA.VERIFICATION.HEADER" : "IAM.NEW.SIGNIN.PROBLEM.SIGNIN",
        problemsigninheader = "<div class='problemsignin_head'><span class='icon-backarrow backoption' onclick=\"" + currentmode + "\"></span><span class='rec_head_text'>" + I18N.get(headingcontent) + "</span></div>",
        allowedmodes_con = "",
        noofmodes = 0,
        i18n_msg = jsonPackage.isAMFA ? i18n_recover : i18n_content;
    secondarymodes.forEach(function (prob_mode, position) {
        var listofmob = jsonPackage.modes.otp && jsonPackage.modes.otp.data;
        isValid(listofmob) &&
            listofmob.length > 1 &&
            0 === position &&
            "otp" === prob_mode &&
            listofmob.forEach(function (data, index) {
                if (index != mobposition) {
                    rmobile = identifyEmailOrNum(data.r_mobile, !0);
                    var secondary_header = I18N.get(i18n_msg[prob_mode][0]),
                        secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), rmobile);
                    (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc, index)), noofmodes++;
                }
            });
        var listofemail = jsonPackage.modes.email && jsonPackage.modes.email.data;
        if (
            (isValid(listofemail) &&
                listofemail.length > 1 &&
                0 === position &&
                "email" === prob_mode &&
                listofemail.forEach(function (data, index) {
                    if (index != emailposition) {
                        rmobile = data.email;
                        var secondary_header = I18N.get(i18n_msg[prob_mode][0]),
                            secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), rmobile);
                        (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc, index)), noofmodes++;
                    }
                }),
            0 != position || isBackup)
        )
            if ("recoverycode" != prob_mode && "passphrase" != prob_mode) {
                if ("oadevice" === prob_mode) {
                    var oadevice_modes = jsonPackage.modes.oadevice.data;
                    oadevice_modes.forEach(function (data, index) {
                        var oadevice_option = data.prefer_option,
                            device_name = data.device_name,
                            oneauthmode =
                                "ONEAUTH_PUSH_NOTIF" === oadevice_option
                                    ? "push"
                                    : "ONEAUTH_TOTP" === oadevice_option
                                    ? "totp"
                                    : "ONEAUTH_SCAN_QR" === oadevice_option
                                    ? "scanqr"
                                    : "ONEAUTH_FACE_ID" === oadevice_option
                                    ? "faceid"
                                    : "ONEAUTH_TOUCH_ID" === oadevice_option
                                    ? "touchid"
                                    : "",
                            secondary_header = I18N.get("IAM.NEW.SIGNIN.VERIFY.VIA.ONEAUTH"),
                            secondary_desc = formatMessage(I18N.get("IAM.NEW.SIGNIN.VERIFY.VIA.ONEAUTH.DESC"), oneauthmode, device_name);
                        (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc, index)), noofmodes++;
                    });
                } else if ("mzadevice" === prob_mode) {
                    var mzadevice_modes = jsonPackage.modes.mzadevice.data;
                    mzadevice_modes.forEach(function (data, index) {
                        var mzadevice_option = data.prefer_option,
                            device_name = data.device_name,
                            secondary_header = I18N.get(deviceauthdetails[deviceauthdetails.resource_name].isAMFA ? "IAM.AC.CHOOSE.OTHER_MODES.DEVICE.HEADING" : "IAM.NEW.SIGNIN.VERIFY.VIA.ONEAUTH"),
                            secondary_desc = formatMessage(I18N.get("IAM.NEW.SIGNIN.VERIFY.VIA.ONEAUTH.DESC"), mzadevice_option, device_name);
                        (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc, index)), noofmodes++;
                    });
                } else if ("otp" === prob_mode)
                    listofmob.forEach(function (data, index) {
                        if (index != mobposition) {
                            rmobile = identifyEmailOrNum(data.r_mobile, !0);
                            var secondary_header = I18N.get(i18n_msg[prob_mode][0]),
                                secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), rmobile);
                            (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc, index)), noofmodes++;
                        }
                    });
                else if ("email" === prob_mode)
                    listofemail.forEach(function (data, index) {
                        if (index != emailposition) {
                            rmobile = data.email;
                            var secondary_header = I18N.get(i18n_msg[prob_mode][0]),
                                secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), rmobile);
                            (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc, index)), noofmodes++;
                        }
                    });
                else if ("federated" === prob_mode) {
                    var count = jsonPackage.modes.federated.count,
                        idp = jsonPackage.modes.federated.data[0].idp.toLocaleLowerCase(),
                        secondary_header = count > 1 ? I18N.get("IAM.NEW.SIGNIN.MORE.FEDRATED.ACCOUNTS.TITLE") : "<span style='text-transform: capitalize;'>" + idp + "</span>",
                        secondary_desc = count > 1 ? I18N.get("IAM.NEW.SIGNIN.MORE.FEDRATED.ACCOUNTS.DESC") : formatMessage(I18N.get("IAM.NEW.SIGNIN.IDENTITY.PROVIDER.TITLE"), idp);
                    (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc, count)), noofmodes++;
                } else if ("email" === prob_mode) {
                    rmobile = jsonPackage.modes.email.data[0].email;
                    var secondary_header = I18N.get(i18n_msg[prob_mode][0]),
                        secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), rmobile);
                    (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc)), noofmodes++;
                } else if ("saml" === prob_mode) {
                    var saml_option = jsonPackage.modes.saml.data;
                    saml_option.forEach(function (data, index) {
                        var secondary_header = formatMessage(I18N.get(i18n_msg[prob_mode][1]), data.auth_domain),
                            secondary_desc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), data.domain);
                        (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc, index)), noofmodes++;
                    });
                } else if ("yubikey" === prob_mode) {
                    var secondary_header = I18N.get(i18n_msg[prob_mode][0]),
                        secondary_desc = I18N.get(i18n_msg[prob_mode][1]);
                    (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc)), noofmodes++;
                } else if (i18n_msg[prob_mode]) {
                    var jwtDesc;
                    if ("jwt" === prob_mode) {
                        var domainname = deviceauthdetails[deviceauthdetails.resource_name].modes.jwt.data[0].domain;
                        jwtDesc = formatMessage(I18N.get(i18n_msg[prob_mode][1]), domainname);
                    }
                    var secondary_header = I18N.get(i18n_msg[prob_mode][0]),
                        secondary_desc = "jwt" === prob_mode ? jwtDesc : I18N.get(i18n_msg[prob_mode][1]);
                    (allowedmodes_con += problemsigninmodes(prob_mode, secondary_header, secondary_desc)), noofmodes++;
                }
            } else "recoverycode" === prob_mode && $("#recoverOption").show();
    }),
        $("#problemsigninui").html(problemsigninheader + "<div class='problemsignincon'>" + allowedmodes_con + "</div>"),
        $(".tryanother").is(":visible") && $(".tryanother").hide(),
        noofmodes > 3 && !isMobile && !isBackup && $(".problemsignincon").addClass("problemsignincontainer"),
        $(".optionstry").addClass("optionmod"),
        $("#recoverybtn").show();
    allowedmodes[0];
    $("#problemsignin,#headtitle,.service_name,.fieldcontainer,#nextbtn").hide(), $("#problemsigninui").show();
}
function problemsigninmodes(prob_mode, secondary_header, secondary_desc, index) {
    return (
        "<div class='optionstry options_hover' id='secondary_" +
        prob_mode +
        "' onclick=showCurrentMode('" +
        prob_mode +
        "'," +
        index +
        ")>			<div class='img_option_try img_option icon-" +
        prob_mode +
        "'></div>			<div class='option_details_try'>				<div class='option_title_try'>" +
        secondary_header +
        "</div>				<div class='option_description'>" +
        secondary_desc +
        "</div>			</div>			</div>"
    );
}
function showallowedmodes(enablemode, mode_index) {
    $("#enablemore").show();
    var lastviewed_mode = prev_showmode;
    if (((prev_showmode = "federated" === enablemode ? prev_showmode : enablemode), "saml" === enablemode)) {
        $("#enablemore").hide(), $(".blur,.loader").show();
        var samlAuthDomain = deviceauthdetails.lookup.modes.saml.data[mode_index].auth_domain;
        return enableSamlAuth(samlAuthDomain), $(".blur,.loader").hide(), !1;
    }
    if ("jwt" === enablemode) {
        $(".blur,.loader").show();
        var redirectURI = deviceauthdetails.lookup.modes.jwt.data[0].redirect_uri;
        return switchto(redirectURI), $(".blur,.loader").hide(), !1;
    }
    if ("otp" === enablemode || "email" === enablemode)
        return (
            (emobile = "email" === enablemode ? deviceauthdetails[deviceauthdetails.resource_name].modes.email.data[0].e_email : deviceauthdetails[deviceauthdetails.resource_name].modes.otp.data[0].e_mobile),
            (rmobile = "email" === enablemode ? deviceauthdetails[deviceauthdetails.resource_name].modes.email.data[0].email : identifyEmailOrNum(deviceauthdetails[deviceauthdetails.resource_name].modes.otp.data[0].r_mobile, !0)),
            deviceauthdetails[deviceauthdetails.resource_name].isUserName && "email" === enablemode ? (checkEmailOTPInitiate(), (prev_showmode = lastviewed_mode), !1) : ($("#resendotp").show(), enableOTP(enablemode), !1)
        );
    if ("password" === enablemode) $("#enableotpoption,#resendotp").hide(), $(".blueforgotpassword").show(), showPassword(), goBackToCurrentMode(!0);
    else if ("federated" === enablemode) {
        var idp = deviceauthdetails.lookup.modes.federated.data[0].idp.toLowerCase();
        return 1 == mode_index ? createandSubmitOpenIDForm(idp) : showMoreFedOptions(), !1;
    }
    return !1;
}
function goBackToCurrentMode(isLookup) {
    $("#headtitle,.signin_head,.service_name,.fieldcontainer,#nextbtn").show(),
        $(".devices,.devicedetails").hide(),
        $("#problemsigninui,#recoverybtn").hide(),
        "mzadevice" === prev_showmode ? $(".tryanother,.devices").show() : $(".rnd_container").hide();
    var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA;
    isAMFA && (allowedModeChecking(), $(".tryanother").hide()),
        isLookup || $(".addaptivetfalist").is(":visible") || isRecovery || allowedModeChecking(),
        ($("#waitbtn").is(":visible") || $("#mfa_scanqr_container").is(":visible")) && $("#nextbtn").hide(),
        isClientPortal || "totp" != prev_showmode ? $("#" + prev_showmode).focus() : $("#mfa_totp").click();
}
function hideTryanotherWay() {
    $("#trytitle,.borderlesstry,#recoverybtn,#problemsignin,#verify_totp_container,#verify_qr_container").hide(),
        isMobileonly ? $(".addaptivetfalist").removeClass("heightChange") : $(".addaptivetfalist").hide(),
        $(".service_name,.fieldcontainer,#headtitle").show(),
        (prefoption = deviceauthdetails[deviceauthdetails.resource_name].modes.mzadevice.data[mzadevicepos].prefer_option),
        "totp" === prefoption && $("#nextbtn").show(),
        $(".tryanother").show();
    var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA;
    return (
        isAMFA && (allowedModeChecking(), $(".tryanother").hide()),
        $(".signin_container").removeClass("mobile_signincontainer"),
        window.setTimeout(function () {
            $(".blur").hide(), $(".blur").removeClass("dark_blur");
        }, 250),
        (isTroubleSignin = !1),
        $("#verify_qrimg").attr("src", ""),
        !1
    );
}
function showCaptcha(btnstatus, isSubmitted, submit_id) {
    if (
        ($("#captcha_container").show(),
        $("#captcha").focus(),
        clearCommonError("captcha"),
        changeButtonAction(btnstatus, isSubmitted),
        $("#" + submit_id).attr("tabindex", 1),
        $("#captcha").attr("tabindex", 2),
        $("#nextbtn").attr("tabindex", 3),
        isClientPortal)
    ) {
        var iFrame = parent.document.getElementById("zs_signin_iframe");
        iFrame && (iFrame.style.height = iFrame.contentWindow.document.body.scrollHeight + "px");
    }
    return !1;
}
function changeHip(cImg, cId) {
    cId = isValid(cId) ? cId : "captcha";
    var captchaReqUrl = "webclient/v1/captcha?";
    sendRequestWithCallback(captchaReqUrl, '{"captcha":{"digest":"' + cdigest + '","usecase":"signin"}}', !1, handleChangeHip), showHip(cdigest, cImg), (de(cId).value = "");
}
function showHip(cdigest, cImg) {
    var captcha_resp = isValid(cdigest) ? doGet("webclient/v1/captcha/" + cdigest) : "";
    IsJsonString(captcha_resp) && (captcha_resp = JSON.parse(captcha_resp));
    var captchimgsrc = "throttles_limit_exceeded" !== captcha_resp.cause && isValid(cdigest) ? captcha_resp.captcha.image_bytes : "../v2/components/images/hiperror.gif";
    (cImg = isValid(cImg) ? cImg : "captcha_img"), (de("captcha").value = "");
    var hipRow = de(cImg),
        captchaImgEle = document.createElement("img");
    captchaImgEle.setAttribute("name", "hipImg"),
        captchaImgEle.setAttribute("id", "hip"),
        $(".reloadcaptcha").attr("title", I18N.get("IAM.NEW.SIGNIN.TITLE.RANDOM")),
        captchaImgEle.setAttribute("align", "left"),
        captchaImgEle.setAttribute("src", captchimgsrc),
        isMobile || $(captchaImgEle).css("mix-blend-mode", "multiply"),
        $(hipRow).html(captchaImgEle);
}
function handleChangeHip(resp) {
    if (IsJsonString(resp)) {
        {
            var jsonStr = JSON.parse(resp);
            jsonStr.status_code;
        }
        if ("throttles_limit_exceeded" === jsonStr.cause) return (cdigest = ""), showHip(cdigest), showCaptcha(I18N.get("IAM.NEXT"), !1), !1;
        cdigest = jsonStr.digest;
    }
    return !1;
}
function handleMfaForIdpUsers(idpdigest) {
    if (isValid(idpdigest)) {
        hideloader(),
            $(".blur,.loader").show(),
            $("#smartsigninbtn").addClass("hide"),
            window.setTimeout(function () {
                $(".blur,.loader").hide();
            }, 1e3);
        var loginurl = uriPrefix + "/signin/v2/lookup/" + idpdigest + "?mode=secondary",
            params = signinParams;
        isValid(csrfParam) && (params = params + "&" + csrfParam + "=" + getCookie(csrfCookieName));
        var resp = getPlainResponse(loginurl, params);
        if (IsJsonString(resp)) {
            var jsonStr = JSON.parse(resp),
                statusCode = jsonStr.status_code;
            return !isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode
                ? ($(".fed_2show,.line,#signuplink,#login_id").hide(),
                  $("#login_id_container,#showIDPs").slideUp(200),
                  (signinathmode = jsonStr.resource_name),
                  (restrictTrustMfa = jsonStr[signinathmode].restrict_trust_mfa),
                  restrictTrustMfa || (trustMfaDays = "" + jsonStr[signinathmode].trust_mfa_days),
                  (allowedmodes = jsonStr[signinathmode].modes.allowed_modes),
                  "mzadevice" === allowedmodes[0]
                      ? ((prev_showmode = allowedmodes[0]),
                        (secondarymodes = allowedmodes),
                        (callmode = "secondary"),
                        (zuid = jsonStr.lookup.identifier),
                        (temptoken = jsonStr.lookup.token),
                        (deviceauthdetails = jsonStr),
                        enableMyZohoDevice(jsonStr),
                        handleSecondaryDevices(allowedmodes[0]),
                        !1)
                      : (handlePasswordDetails(resp), !1))
                : "throttles_limit_exceeded" === jsonStr.cause
                ? (showCommonError("login_id", jsonStr.localized_message), !1)
                : (showCommonError("login_id", jsonStr.localized_message), !1);
        }
        return !1;
    }
    return !1;
}
function tryAnotherway(trymode) {
    return (
        $("#verify_" + trymode + "_container").is(":visible") ||
            ($("#verify_totp").val(""),
            clearCommonError("verify_totp"),
            (prefoption = "qr" === trymode ? "scanqr" : trymode),
            $(".verify_totp,.verify_qr").slideUp(200),
            $(".verify_" + trymode).slideDown(200),
            $(".optionstry").removeClass("toggle_active"),
            $(".verify_" + trymode)
                .parent()
                .addClass("toggle_active"),
            "totp" === trymode && (isClientPortal ? $("#verify_totp").focus() : enableSplitField("verify_totp", 6, I18N.get("IAM.NEW.SIGNIN.VERIFY.CODE"))),
            "qr" === trymode && "" === $("#verify_qrimg").attr("src") && ($(".verify_qr .loader,.verify_qr .blur").show(), enableQRCodeimg())),
        !1
    );
}
function showResendPushInfo() {
    return (
        $(".loadwithbtn").show(),
        $(".waitbtn .waittext").text(I18N.get("IAM.NEW.SIGNIN.WAITING.APPROVAL")),
        $("#waitbtn").attr("disabled", !0),
        showTopNotification(formatMessage(I18N.get("IAM.RESEND.PUSH.MSG"))),
        window.setTimeout(function () {
            return $(".waitbtn .waittext").text(I18N.get("IAM.PUSH.RESEND.NOTIFICATION")), $(".loadwithbtn").hide(), $("#waitbtn").attr("disabled", !1), (isFormSubmited = !1), !1;
        }, 25e3),
        !1
    );
}
function showTrustBrowser() {
    return (
        (prefoption =
            "ONEAUTH_PUSH_NOTIF" === prefoption
                ? "push"
                : "ONEAUTH_TOTP" === prefoption
                ? "totp"
                : "ONEAUTH_SCAN_QR" === prefoption
                ? "scanqr"
                : "ONEAUTH_FACE_ID" === prefoption
                ? "faceid"
                : "ONEAUTH_TOUCH_ID" === prefoption
                ? "touchid"
                : prefoption),
        (prefoption = isValid(prefoption) ? prefoption : allowedmodes[0]),
        $(".mod_sername").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.TRUST.HEADER." + prefoption.toUpperCase()), trustMfaDays)),
        $("#signin_div,.rightside_box,.zoho_logo,.loadwithbtn").hide(),
        $(".trustbrowser_ui,.trustbrowser_ui #headtitle,.zoho_logo,.mod_sername").show(),
        $(".signin_container").addClass("trustdevicebox"),
        $(".signin_box").css("minHeight", "auto"),
        $(".signin_box").css("padding", "40px"),
        !1
    );
}
function checkEmailOTPInitiate() {
    return (
        $("#login,#enablemore").hide(),
        $(".emailcheck_head").show(),
        $("#emailcheck").val(""),
        -1 == allowedmodes.indexOf("password") ? $("#emailcheck_container .backoption").hide() : $("#emailcheck_container .backoption").show(),
        $("#emailcheck_container").show(),
        $("#emailverify_desc").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.VERIFY.EMAIL.DESC"), rmobile)),
        clearCommonError("emailcheck"),
        $("#emailcheck").focus(),
        !1
    );
}
function hideEmailOTPInitiate() {
    return $("#login").show(), isPasswordless && allowedmodes.length > 3 && $("#enablemore").show(), $("#emailcheck_container, .resendotp").hide(), !1;
}
function verifyEmailValid() {
    return generateOTPAuth(!1, "EMAIL"), !1;
}
function enableEmailOTPDetails(resp) {
    var jsonStr = JSON.parse(resp);
    signinathmode = jsonStr.resource_name;
    var statusCode = jsonStr.status_code;
    if (!(!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode)) {
        if ("throttles_limit_exceeded" === jsonStr.cause) return showCommonError("emailcheck", jsonStr.localized_message), !1;
        var errorMessage = jsonStr.localized_message;
        return showCommonError("emailcheck", errorMessage), !1;
    }
    var successCode = jsonStr.code;
    ("SI201" === successCode || "SI200" === successCode) &&
        ((mdigest = jsonStr[signinathmode].mdigest),
        $(".emailverify_head .backup_desc").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.VERIFY.EMAIL.OTP.TITLE"), rmobile)),
        $("#emailverify_container,.emailverify_head").show(),
        $("#emailcheck_container").hide(),
        isClientPortal || enableSplitField("emailverify", 7, I18N.get("IAM.VERIFY.CODE")),
        showTopNotification(formatMessage(I18N.get("IAM.NEW.SIGNIN.OTP.SENT"), rmobile)),
        $("#emailverify_container .showmoresigininoption").show(),
        $("#emailverify_container .signinwithjwt,#emailverify_container .signinwithsaml,#emailverify_container #signinwithpass").hide(),
        $(".resendotp").show(),
        resendotp_checking());
}
function verifyEmailOTP() {
    if (isClientPortal) var OTP_CODE = $("#emailverify").val();
    else var OTP_CODE = document.getElementById("emailverify").firstChild.value;
    if (!isWebAuthNSupported()) return showTopErrNotification(I18N.get("IAM.WEBAUTHN.ERROR.BrowserNotSupported")), changeButtonAction(I18N.get("IAM.NEW.SIGNIN.VERIFY"), !1), !1;
    if (!isValid(OTP_CODE)) return showCommonError("emailverify", I18N.get("IAM.NEW.SIGNIN.INVALID.OTP.MESSAGE.EMPTY")), !1;
    if (isNaN(OTP_CODE) || 7 != OTP_CODE.length) return showCommonError("emailverify", I18N.get("IAM.NEW.SIGNIN.INVALID.EMAIL.MESSAGE.NEW")), !1;
    if (/[^0-9\-\/]/.test(OTP_CODE)) return showCommonError("emailverify", I18N.get("IAM.SIGNIN.ERROR.INVALID.VERIFICATION.CODE")), !1;
    var loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/otp/" + emobile + "?";
    loginurl += "digest=" + digest + "&" + signinParams;
    var jsonData = { otpauth: { code: OTP_CODE, is_resend: !1 } };
    return sendRequestWithCallback(loginurl, JSON.stringify(jsonData), !0, handlePasswordDetails, "PUT"), !1;
}
function hideEmailOTPVerify() {
    return $("#emailverify_container").hide(), $("#emailcheck_container").show(), clearCommonError("emailverify"), !1;
}
function getbackemailverify() {
    return $("#emailcheck_container,.emailverify_head").show(), clearCommonError("emailcheck"), $("#login").hide(), !1;
}
function updateTrustDevice(trust) {
    trust ? $(".trustbtn .loadwithbtn").show() : $(".notnowbtn .loadwithbtn").show(), trust ? $(".trustbtn .waittext").addClass("loadbtntext") : $(".notnowbtn .waittext").addClass("loadbtntext"), $(".trustdevice").attr("disabled", !0);
    var loginurl = uriPrefix + "/signin/v2/secondary/" + zuid + "/trust?",
        jsonData = { trustmfa: { trust: trust } };
    return sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handleTrustDetails), !1;
}
function handleTrustDetails(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp),
            statusCode = jsonStr.status_code;
        if (!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode) {
            signinathmode = jsonStr.resource_name;
            var successCode = jsonStr.code;
            return "SI302" === successCode || "SI200" === successCode || "SI300" === successCode || "SI301" === successCode || "SI303" === successCode || "SI305" === successCode ? (switchto(jsonStr[signinathmode].redirect_uri), !1) : !1;
        }
        return (
            $(".trustdevice").attr("disabled", !1), $(".trustbtn .loadwithbtn,.notnowbtn .loadwithbtn").hide(), $(".trustbtn .waittext,.notnowbtn .waittext").removeClass("loadbtntext"), showTopErrNotification(jsonStr.localized_message), !1
        );
    }
}
function getQueryParams(queryStrings) {
    var vars = {};
    queryStrings = queryStrings.substring(queryStrings.indexOf("?") + 1);
    for (var params = queryStrings.split("&"), i = 0; i < params.length; i++) {
        var pair = params[i].split("=");
        vars[pair[0]] = 2 == pair.length ? decodeURIComponent(pair[1]) : "";
    }
    return vars;
}
function createandSubmitOpenIDForm(idpProvider) {
    if (isValid(idpProvider)) {
        var oldForm = document.getElementById(idpProvider + "form");
        oldForm && document.documentElement.removeChild(oldForm);
        var form = document.createElement("form"),
            idpurl = "/accounts/fsrequest";
        isClientPortal && (idpurl = "ZOHO" === idpProvider.toUpperCase() ? uriPrefix + "/clientidprequest" : IDPRequestURL),
            form.setAttribute("id", idpProvider + "form"),
            form.setAttribute("method", "POST"),
            form.setAttribute("action", idpurl),
            form.setAttribute("target", "_parent");
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden"),
            hiddenField.setAttribute("name", "provider"),
            hiddenField.setAttribute("value", idpProvider.toUpperCase()),
            form.appendChild(hiddenField),
            (hiddenField = document.createElement("input")),
            hiddenField.setAttribute("type", "hidden"),
            hiddenField.setAttribute("name", csrfParam),
            hiddenField.setAttribute("value", getCookie(csrfCookieName)),
            form.appendChild(hiddenField);
        var params = getQueryParams(location.search);
        for (var key in params)
            isValid(params[key]) &&
                ((hiddenField = document.createElement("input")), hiddenField.setAttribute("type", "hidden"), hiddenField.setAttribute("name", key), hiddenField.setAttribute("value", params[key]), form.appendChild(hiddenField));
        document.documentElement.appendChild(form), form.submit();
    }
}
function goToForgotPassword(isIP) {
    var tmpResetUrl = isIP ? getIPRecoveryURL() : getRecoveryURL(),
        LOGIN_ID = de("login_id").value.trim(),
        redirectedFrom = "lookup" == signinathmode ? "primary" : "secondary";
    if (de("login_id") && (isUserName(LOGIN_ID) || isEmailIdSignin(LOGIN_ID) || isPhoneNumber(LOGIN_ID.split("-")[1]))) {
        var oldForm = document.getElementById("recoveryredirection");
        oldForm && document.documentElement.removeChild(oldForm);
        var login_id = isPhoneNumber(LOGIN_ID) ? $("#country_code_select").val().split("+")[1] + "-" + LOGIN_ID : LOGIN_ID,
            form = document.createElement("form");
        form.setAttribute("id", "recoveryredirection"), form.setAttribute("method", "POST"), form.setAttribute("action", tmpResetUrl), isClientPortal ? form.setAttribute("target", "_self") : form.setAttribute("target", "_parent");
        var hiddenField = document.createElement("input");
        return (
            hiddenField.setAttribute("type", "hidden"),
            hiddenField.setAttribute("name", "LOGIN_ID"),
            hiddenField.setAttribute("value", login_id),
            form.appendChild(hiddenField),
            isIP ||
                ((hiddenField = document.createElement("input")),
                hiddenField.setAttribute("type", "hidden"),
                hiddenField.setAttribute("name", "redirectedFrom"),
                hiddenField.setAttribute("value", redirectedFrom),
                form.appendChild(hiddenField)),
            document.documentElement.appendChild(form),
            form.submit(),
            !1
        );
    }
    window.location.href = isIP ? tmpResetUrl + "?redirectedFrom=" + redirectedFrom : tmpResetUrl;
}
function iamMovetoSignUp(signupUrl, login_id) {
    if ((isDarkMode && -1 == signupUrl.indexOf("darkmode=true") && (signupUrl += "&darkmode=true"), !isValid(login_id))) return (window.location.href = signupUrl), !1;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", signupUrl, !0),
        xhr.setRequestHeader("Content-Type", "application/json"),
        xhr.setRequestHeader("X-ZCSRF-TOKEN", csrfParam + "=" + euc(getCookie(csrfCookieName))),
        (xhr.onreadystatechange = function () {
            if (4 == xhr.readyState) {
                if (200 === xhr.status) {
                    var oldForm = document.getElementById("signupredirection");
                    oldForm && document.documentElement.removeChild(oldForm);
                    var form = document.createElement("form");
                    form.setAttribute("id", "signupredirection"), form.setAttribute("method", "POST"), form.setAttribute("action", signupUrl), form.setAttribute("target", "_parent");
                    var hiddenField = document.createElement("input");
                    return (
                        hiddenField.setAttribute("type", "hidden"),
                        hiddenField.setAttribute("name", "LOGIN_ID"),
                        hiddenField.setAttribute("value", login_id),
                        form.appendChild(hiddenField),
                        (hiddenField = document.createElement("input")),
                        hiddenField.setAttribute("type", "hidden"),
                        hiddenField.setAttribute("name", csrfParam),
                        hiddenField.setAttribute("value", getCookie(csrfCookieName)),
                        form.appendChild(hiddenField),
                        document.documentElement.appendChild(form),
                        form.submit(),
                        !1
                    );
                }
                return (window.location.href = signupUrl), !1;
            }
        }),
        xhr.send();
}
function register() {
    return (window.location.href = signup_url), !1;
}
function showBackupVerificationCode() {
    return (
        $("#login,.fed_2show,#recovery_container,#passphrase_container,#bcaptcha_container").hide(),
        hideBkCodeRedirection(),
        $("#backup_container,.backuphead,#backupcode_container").show(),
        $("#backupcode").focus(),
        $("#backup_title").html("<span class='icon-backarrow backoption' onclick='hideCantAccessDevice()'></span>" + I18N.get("IAM.TFA.USE.BACKUP.CODE")),
        $(".backup_desc").html(I18N.get("IAM.NEW.SIGNIN.BACKUP.HEADER")),
        (signinathmode = "recoverycodesecauth"),
        -1 != allowedmodes.indexOf("passphrase") ? $("#recovery_passphrase").show() : $("#recovery_passphrase").hide(),
        !1
    );
}
function goBackToProblemSignin() {
    return (
        $(".fed_2show,#recovery_container,#backup_container").hide(),
        isSecondary && (isMobileonly ? $(".addaptivetfalist").removeClass("heightChange") : $(".addaptivetfalist").hide()),
        (signinathmode = oldsigninathmode),
        $("#login").show(),
        isClientPortal && $(".alt_signin_head").show(),
        !1
    );
}
function showCantAccessDevice() {
    return (
        $(".devices,.devicedetails").hide(),
        $(".signin_container").removeClass("mobile_signincontainer"),
        -1 === allowedmodes.indexOf("passphrase") ? $("#passphraseRecover").hide() : $("#passphraseRecover").show(),
        window.setTimeout(function () {
            $(".blur").hide(), $(".blur").removeClass("dark_blur");
        }, 100),
        (oldsigninathmode = signinathmode),
        $("#login,.fed_2show,#backup_container,.backuphead").hide(),
        isClientPortal && $(".alt_signin_head").hide(),
        $("#recovery_container,#recoverytitle,.recoveryhead").show(),
        !1
    );
}
function hideCantAccessDevice(ele) {
    return $("#recovery_container").show(), $("#backup_container").is(":visible") ? ($("#backup_container").hide(), !1) : (void 0 != ele && $("#" + ele.parentElement.parentElement.id).hide(), !1);
}
function verifyBackupCode() {
    var isBcaptchaNeeded = $("#bcaptcha_container").is(":visible");
    if (isBcaptchaNeeded) {
        var bcaptchavalue = de("bcaptcha").value.trim();
        if (!isValid(bcaptchavalue)) return showCommonError("bcaptcha", I18N.get("IAM.SIGNIN.ERROR.CAPTCHA.REQUIRED")), !1;
        if (/[^a-zA-Z0-9\-\/]/.test(bcaptchavalue)) return changeHip("bcaptcha_img", "bcaptcha"), showCommonError("bcaptcha", I18N.get("IAM.SIGNIN.ERROR.CAPTCHA.INVALID")), !1;
    }
    if ("passphrasesecauth" === signinathmode) {
        var passphrase = $("#passphrase").val().trim();
        if (!isValid(passphrase)) return showCommonError("passphrase", I18N.get("IAM.NEW.SIGNIN.ENTER.VALID.PASSPHRASE.CODE")), !1;
        var loginurl = uriPrefix + "/signin/v2/secondary/" + zuid + "/passphrase?" + signinParams;
        isBcaptchaNeeded && (loginurl += "&captcha=" + bcaptchavalue + "&cdigest=" + cdigest);
        var recsalt = deviceauthdetails[deviceauthdetails.resource_name].modes.passphrase && deviceauthdetails[deviceauthdetails.resource_name].modes.passphrase.rec_salt;
        if ("undefined" != typeof recsalt)
            var derivedKey = sjcl.codec.base64.fromBits(sjcl.misc.pbkdf2(passphrase, sjcl.codec.base64.toBits(recsalt), 1e5, 256)),
                jsonData = { passphrasesecauth: { secret_key: derivedKey } };
        else var jsonData = { passphrasesecauth: { pass_phrase: passphrase } };
        return sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handlePassphraseDetails), !1;
    }
    var backupcode = $("#backupcode").val().trim();
    backupcode = backupcode.replace(/\s/g, "");
    var objRegExp = /^([a-zA-Z0-9]{12})$/;
    if (!isValid(backupcode)) return showCommonError("backupcode", I18N.get("IAM.EMPTY.BACKUPCODE.ERROR")), !1;
    if (!objRegExp.test(backupcode)) return showCommonError("backupcode", I18N.get("IAM.NEW.SIGNIN.ENTER.VALID.BACKUP.CODE")), !1;
    var loginurl = uriPrefix + "/signin/v2/secondary/" + zuid + "/recovery?" + signinParams;
    isBcaptchaNeeded && (loginurl += "&captcha=" + bcaptchavalue + "&cdigest=" + cdigest);
    var isAMFA = deviceauthdetails[deviceauthdetails.resource_name].isAMFA,
        jsonData = isAMFA ? { recoverycodesecauth: { code: backupcode, isAMFA: !0 } } : { recoverycodesecauth: { code: backupcode } };
    return sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handleBackupVerificationDetails), !1;
}
function handleBackupVerificationDetails(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp),
            statusCode = jsonStr.status_code;
        if (((signinathmode = jsonStr.resource_name), !isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode)) {
            var successCode = jsonStr.code,
                statusmsg = jsonStr.recoverycodesecauth.status;
            return "success" === statusmsg
                ? restrictTrustMfa
                    ? (updateTrustDevice(!1), !1)
                    : (showTrustBrowser(), !1)
                : "P500" === successCode || "P501" === successCode
                ? ((temptoken = jsonStr[signinathmode].token), showPasswordExpiry(jsonStr[signinathmode].pwdpolicy), !1)
                : (showCommonError("backupcode", jsonStr.localized_message), !1);
        }
        if ("throttles_limit_exceeded" === jsonStr.cause) return showCommonError("backupcode", jsonStr.localized_message), !1;
        var error_resp = jsonStr.errors[0],
            errorCode = error_resp.code,
            errorMessage = jsonStr.localized_message;
        return "IN107" === errorCode || "IN108" === errorCode
            ? ($(".fed_2show,.line").hide(),
              (cdigest = jsonStr.cdigest),
              showHip(cdigest, "bcaptcha_img"),
              $("#bcaptcha_container").show(),
              $("#bcaptcha").focus(),
              clearCommonError("bcaptcha"),
              changeButtonAction(I18N.get("IAM.NEW.SIGNIN.VERIFY"), !1),
              "IN107" === errorCode && showCommonError("bcaptcha", errorMessage),
              !1)
            : "R303" === errorCode
            ? (showRestrictsignin(), !1)
            : (showCommonError("backupcode", errorMessage), !1);
    }
}
function removeParamFromQueryString(param) {
    if (isValid(queryString)) {
        for (var prefix = encodeURIComponent(param), pars = queryString.split(/[&;]/g), i = pars.length; i-- > 0; ) {
            var paramObj = pars[i].split(/[=;]/g);
            prefix === paramObj[0] && pars.splice(i, 1);
        }
        if (pars.length > 0) return pars.join("&");
    }
    return "";
}
function allowedModeChecking() {
    return (
        1 == secondarymodes.length || ("recoverycode" == secondarymodes[1] && 2 == secondarymodes.length)
            ? ("recoverycode" == secondarymodes[1] && $("#recoverOption").show(), $("#recoverybtn").show(), $("#problemsignin").hide())
            : ($("#problemsignin").show(), $("#recoverybtn").hide()),
        isSecondary && ($("#problemsignin").show(), $("#recoverybtn").hide()),
        -1 != secondarymodes.indexOf("passphrase") && secondarymodes.length <= 3 && ($("#recoverybtn").show(), $("#problemsignin").hide()),
        !1
    );
}
function showCurrentMode(pmode, index) {
    (mobposition = emailposition = void 0),
        $(".devices,.devicedetails").hide(),
        $("#mfa_totp_container,#mfa_otp_container,#mfa_email_container,#waitbtn,#nextbtn,#mfa_scanqr_container,#mfa_push_container,#openoneauth,#yubikey_container").hide(),
        clearInterval(_time),
        $(".tryanother").hide(),
        (prev_showmode = "federated" === pmode ? prev_showmode : pmode),
        clearCommonError(pmode);
    var authenticatemode = void 0 === deviceauthdetails.passwordauth ? "lookup" : "passwordauth";
    if ("otp" === pmode || "email" === pmode) {
        (triggeredUser = !0), $(".loader,.blur").show();
        var jsonPack = deviceauthdetails[deviceauthdetails.resource_name];
        if (
            ((emobile = "otp" === pmode ? jsonPack.modes.otp.data[index].e_mobile : jsonPack.modes.email.data[index].e_email),
            (rmobile = "otp" === pmode ? identifyEmailOrNum(jsonPack.modes.otp.data[index].r_mobile, !0) : jsonPack.modes.email.data[index].email),
            isPasswordless && deviceauthdetails.lookup.isUserName)
        )
            return checkEmailOTPInitiate(), !1;
        if ((isPasswordless ? showAndGenerateOtp(pmode) : generateOTP(!1, pmode), "email" === pmode ? (emailposition = index) : (mobposition = index), (isPrimaryDevice = !0), isPasswordless)) {
            var showingmodes = secondarymodes;
            1 == showingmodes ? ("otp" == showingmodes[0] || "email" == showingmodes[0] ? $("#enableotpoption").show() : "saml" == showingmodes[0] ? $("#enablesaml").show() : $("#enablejwt").show()) : $("#enablemore").show();
        }
    }
    if ((goBackToProblemSignin(), "totp" === pmode)) enableTOTPdevice(deviceauthdetails, !1, !1), (signinathmode = "totpsecauth");
    else if ("oadevice" === pmode) $(".loader,.blur").show(), (isResend = !1), (signinathmode = authenticatemode), (oadevicepos = index), enableOneauthDevice(deviceauthdetails, oadevicepos);
    else if ("yubikey" === pmode) $(".loader,.blur").show(), (signinathmode = authenticatemode), enableYubikeyDevice(deviceauthdetails);
    else if ("mzadevice" === pmode) {
        if (
            ($(".loader,.blur").show(),
            (isResend = !1),
            (mzadevicepos = index),
            (prefoption = deviceauthdetails[deviceauthdetails.resource_name].modes.mzadevice.data[mzadevicepos].prefer_option),
            enableMyZohoDevice(deviceauthdetails, prefoption),
            "totp" === prefoption)
        )
            return goBackToCurrentMode(!0), isRecovery && $("#problemsignin,#recoverybtn,.tryanother").hide(), !1;
    } else if ("password" === pmode) showPasswordContainer();
    else {
        if ("federated" === pmode) {
            var idp = deviceauthdetails.lookup.modes.federated.data[0].idp.toLowerCase();
            return 1 === index ? createandSubmitOpenIDForm(idp) : showMoreFedOptions(), !1;
        }
        if ("saml" === pmode) {
            $(".blur,.loader").show();
            var samlAuthDomain = deviceauthdetails[deviceauthdetails.resource_name].modes.saml.data[index].auth_domain;
            return enableSamlAuth(samlAuthDomain), $(".blur,.loader").hide(), !1;
        }
        if ("jwt" === pmode) {
            var redirectURI = deviceauthdetails[deviceauthdetails.resource_name].modes.jwt.data[0].redirect_uri;
            switchto(redirectURI);
        }
    }
    return (
        "mzadevice" != pmode && "oadevice" != pmode && $(".deviceparent").addClass("hide"),
        goBackToCurrentMode(),
        isPasswordless &&
            ($("#headtitle").html(I18N.get("IAM.NEW.SIGNIN.PROBLEM.SIGNIN")),
            $(".service_name").html(I18N.get("IAM.NEW.SIGNIN.PASSWORDLESS.PROBLEM.SIGNIN.HEADER")),
            $(".service_name").addClass("extramargin"),
            hideTryanotherWay(),
            $("#problemsignin,#recoverybtn,.tryanother,#enableoptionsoneauth").hide()),
        isRecovery && $("#problemsignin,#recoverybtn,.tryanother").hide(),
        !1
    );
}
function showPasswordContainer() {
    $("#nextbtn").attr("disabled", !1),
        $("#password").val(""),
        (prev_showmode = "password"),
        $("#password_container,#enableforgot").show(),
        $("#enablesaml,#enableotpoption,.textbox_actions,#otp_container").hide(),
        $("#password_container").removeClass("zeroheight"),
        $("#nextbtn").removeClass("changeloadbtn"),
        $("#headtitle").text(I18N.get("IAM.SIGN_IN")),
        $(".service_name").removeClass("extramargin"),
        $(".service_name").html(formatMessage(I18N.get("IAM.NEW.SIGNIN.SERVICE.NAME.TITLE"), displayname)),
        $("#nextbtn span").removeClass("zeroheight"),
        $("#nextbtn span").text(I18N.get("IAM.SIGN_IN")),
        $(".username").text(identifyEmailOrNum()),
        isPasswordless && !isRecovery && allowedModeChecking(),
        $(".signin_head").css("margin-bottom", "30px"),
        $("#password").focus(),
        (signinathmode = "passwordauth"),
        $("#enableotpoption,#enablesaml,#enablejwt,#enablemore").hide();
    var showingmodes = secondarymodes;
    3 == showingmodes.length
        ? (-1 != showingmodes.indexOf("otp") || -1 != showingmodes.indexOf("email")
              ? $("#enableotpoption").show()
              : -1 != showingmodes.indexOf("smal")
              ? $("#enablesaml").show()
              : -1 != showingmodes.indexOf("jwt")
              ? $("#enablejwt").show()
              : "",
          -1 != showingmodes.indexOf("otp") ? $("#signinwithotp").html(I18N.get("IAM.NEW.SIGNIN.USING.MOBILE.OTP")) : -1 != showingmodes.indexOf("email") && $("#signinwithotp").html(I18N.get("IAM.NEW.SIGNIN.USING.EMAIL.OTP")))
        : showingmodes.length > 2 && $("#enablemore").show(),
        (isFormSubmited = !1);
}
function showMoreFedOptions() {
    var idps = deviceauthdetails[deviceauthdetails.resource_name].modes.federated.data,
        backFunction = isPrimaryMode ? "showmoresigininoption()" : "showproblemsignin()",
        problemsigninheader = "<div class='problemsignin_head'><span class='icon-backarrow backoption' onclick=" + backFunction + "></span><span class='rec_head_text'>" + I18N.get("IAM.NEW.SIGNIN.FEDERATED.LOGIN.TITLE") + "</span></div>",
        idp_con = "";
    return (
        idps.forEach(function (idps) {
            isValid(idps) &&
                ((idp = idps.idp.toLowerCase()),
                (idp_con +=
                    "<div class='optionstry options_hover' id='secondary_" +
                    idp +
                    "' onclick=createandSubmitOpenIDForm('" +
                    idp +
                    "')>							<div class='img_option_try img_option icon-federated'></div>							<div class='option_details_try'>								<div class='option_title_try'><span style='text-transform: capitalize;'>" +
                    idp +
                    "<span></div>								<div class='option_description'>" +
                    formatMessage(I18N.get("IAM.NEW.SIGNIN.IDENTITY.PROVIDER.TITLE"), idp) +
                    "</div>							</div>							</div>"));
        }),
        $("#problemsigninui").html(problemsigninheader + "<div class='problemsignincon'>" + idp_con + "</div>"),
        $("#password_container,#nextbtn,.signin_head,#otp_container,#captcha_container,.fed_2show").hide(),
        $("#problemsigninui").show(),
        !1
    );
}
function enableQRCodeimg() {
    var prefoption = "scanqr",
        deviceid = deviceauthdetails[deviceauthdetails.resource_name].modes.mzadevice.data[mzadevicepos].device_id,
        loginurl = uriPrefix + "/signin/v2/" + callmode + "/" + zuid + "/device/" + deviceid + "?";
    loginurl += "digest=" + digest + "&" + signinParams;
    var jsonData = "primary" === callmode ? { deviceauth: { devicepref: prefoption } } : { devicesecauth: { devicepref: prefoption } };
    sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handleQRCodeImg), (signinathmode = "primary" === callmode ? "deviceauth" : "devicesecauth");
}
function handleQRCodeImg(resp) {
    if (!IsJsonString(resp)) return showTopErrNotification(I18N.get("IAM.ERROR.GENERAL")), !1;
    var jsonStr = JSON.parse(resp);
    signinathmode = jsonStr.resource_name;
    var statusCode = jsonStr.status_code;
    if (!(!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode)) {
        if ("throttles_limit_exceeded" === jsonStr.cause) return showTopErrNotification(jsonStr.localized_message), !1;
        var error_resp = jsonStr.errors && jsonStr.errors[0],
            errorCode = error_resp && error_resp.code;
        return "R303" === errorCode ? (showRestrictsignin(), !1) : (showTopErrNotification(jsonStr.localized_message), !1);
    }
    var successCode = jsonStr.code;
    if ("SI202" === successCode || "MFA302" === successCode || "SI302" === successCode || "SI201" === successCode) {
        temptoken = jsonStr[signinathmode].token;
        var qrcodeurl = jsonStr[signinathmode].img;
        (qrtempId = jsonStr[signinathmode].temptokenid), isValid(qrtempId) ? $("#verify_qr_container #openoneauth").show() : $("#verify_qr_container #openoneauth").hide();
        var wmsid = jsonStr[signinathmode].WmsId && jsonStr[signinathmode].WmsId.toString();
        isVerifiedFromDevice(prefoption, !0, wmsid), $("#verify_qrimg").attr("src", qrcodeurl), $(".verify_qr .loader,.verify_qr .blur").hide();
    }
    return !1;
}
function showPassphraseContainer() {
    $("#login,.fed_2show,#backupcode_container,#recovery_container,#bcaptcha_container").hide(),
        $("#passphrase_container,#backup_container,.backuphead").show(),
        (signinathmode = "passphrasesecauth"),
        $("#backup_title").html("<span class='icon-backarrow backoption' onclick='hideCantAccessDevice()'></span>" + I18N.get("IAM.NEW.SIGNIN.PASS.PHRASE.TITLE")),
        $(".backup_desc").html(I18N.get("IAM.NEW.SIGNIN.PASS.PHRASE.DESC")),
        -1 != allowedmodes.indexOf("recoverycode") ? $("#recovery_backup").show() : $("#recovery_backup").hide();
}
function hideSigninOptions() {
    $("#enablemore").show(), $("#nextbtn,.signin_head").show();
    var show_mode = "email" === prev_showmode ? "otp" : prev_showmode;
    return "password" === prev_showmode && ((signinathmode = "passwordauth"), $(".resendotp").hide()), $("#" + show_mode + "_container").show(), $("#problemsigninui").hide(), !1;
}
function QrOpenApp() {
    var qrCodeString = "code=" + qrtempId + "&zuid=" + zuid + "&url=" + iamurl;
    return (document.location = UrlScheme + "://?" + qrCodeString), !1;
}
function showRestrictsignin() {
    return $("#signin_div,.rightside_box,.banner_newtoold").hide(), $("#smartsigninbtn").addClass("hide"), $("#restict_signin").show(), $(".zoho_logo").addClass("applycenter"), $(".signin_container").addClass("mod_container"), !1;
}
function setCookie(x) {
    var dt = new Date();
    dt.setDate(dt.getYear() * x);
    var cookieStr = "IAM_TEST_COOKIE=IAM_TEST_COOKIE;expires=" + dt.toGMTString() + ";path=/;";
    "null" != cookieDomain && (cookieStr += "domain=" + cookieDomain), (document.cookie = cookieStr);
}
function submitbackup(event) {
    13 === event.keyCode && verifyBackupCode();
}
function setPassword(event) {
    13 === event.keyCode && updatePassword();
}
function updatePassword(min_Len, max_Len, login_name) {
    remove_error();
    var newpass = $("#new_password").val().trim(),
        confirmpass = $("#new_repeat_password").val().trim(),
        passwordErr = validatePasswordPolicy.getErrorMsg(newpass);
    if (isEmpty(newpass)) return $("#npassword_container").append('<div class="field_error">' + I18N.get("IAM.ERROR.ENTER.NEW.PASS") + "</div>"), $("#new_password").val(""), $("#new_repeat_password").val(""), $("#new_password").focus(), !1;
    if (passwordErr) return $("#new_password").focus(), !1;
    if (newpass == login_name) return $("#npassword_container").append('<div class="field_error">' + I18N.get("IAM.PASSWORD.POLICY.LOGINNAME") + "</div>"), $("#new_password").focus(), !1;
    if (isEmpty(confirmpass) || newpass != confirmpass)
        return $("#rpassword_container").append('<div class="field_error">' + I18N.get("IAM.ERROR.WRONG.CONFIRMPASS") + "</div>"), $("#new_repeat_password").val(""), $("#new_repeat_password").focus(), !1;
    var loginurl = uriPrefix + "/signin/v2/password/" + zuid + "/expiry?",
        jsonData = { expiry: { newpwd: newpass } };
    return (
        sendRequestWithTemptoken(loginurl, JSON.stringify(jsonData), !0, handlePasswordExpiry), $("#changepassword span").addClass("zeroheight"), $("#changepassword").addClass("changeloadbtn"), $("#changepassword").attr("disabled", !0), !1
    );
}
function handlePasswordExpiry(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp),
            statusCode = jsonStr.status_code;
        !isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode
            ? "success" === jsonStr.expiry.status &&
              ($("#termin_mob").removeClass("show_oneauth"),
              $(".oneAuthLable").hide(),
              void 0 != jsonStr.expiry.sess_term_tokens && jsonStr.expiry.sess_term_tokens.length > 0
                  ? (-1 == jsonStr.expiry.sess_term_tokens.indexOf("rmwebses") && $("#terminate_web_sess").hide(),
                    -1 == jsonStr.expiry.sess_term_tokens.indexOf("rmappses")
                        ? $("#terminate_mob_apps").hide()
                        : -1 == jsonStr.expiry.sess_term_tokens.indexOf("inconeauth")
                        ? $("#termin_mob").removeClass("show_oneauth")
                        : $("#termin_mob").addClass("show_oneauth"),
                    -1 == jsonStr.expiry.sess_term_tokens.indexOf("rmapitok") && $("#terminate_api_tok").hide(),
                    $(".password_expiry_container").hide(),
                    $(".terminate_session_container").show())
                  : send_terminate_session_request(document.terminate_session_container))
            : showCommonError("npassword", jsonStr.localized_message);
    } else showTopErrNotification(I18N.get("IAM.ERROR.GENERAL"));
    return $("#changepassword span").removeClass("zeroheight"), $("#changepassword").removeClass("changeloadbtn"), $("#changepassword").attr("disabled", !1), !1;
}
function send_terminate_session_request(formElement) {
    var terminate_web = $("#" + formElement.id)
            .find('input[name="signoutfromweb"]')
            .is(":checked"),
        terminate_mob = $("#" + formElement.id)
            .find('input[name="signoutfrommobile"]')
            .is(":checked"),
        terminate_api = $("#" + formElement.id)
            .find('input[name="signoutfromapiToken"]')
            .is(":checked"),
        include_oneAuth = $("#" + formElement.id)
            .find("#include_oneauth")
            .is(":checked"),
        jsonData = { expirysessionterminate: { rmwebses: terminate_web, rmappses: terminate_mob, inconeauth: include_oneAuth, rmapitok: terminate_api } },
        terminate_session_url = uriPrefix + "/signin/v2/password/" + zuid + "/expiryclosesession";
    return (
        sendRequestWithTemptoken(terminate_session_url, JSON.stringify(jsonData), !0, handle_terminate_session, "PUT"),
        $("#terminate_session_submit span").addClass("zeroheight"),
        $("#terminate_session_submit").addClass("changeloadbtn"),
        $("#terminate_session_submit").attr("disabled", !0),
        !1
    );
}
function handle_terminate_session(resp) {
    if (IsJsonString(resp)) {
        var jsonStr = JSON.parse(resp),
            statusCode = jsonStr.status_code;
        if (!isNaN(statusCode) && statusCode >= 200 && 299 >= statusCode) {
            if ("SES200" == jsonStr.code) {
                var terminate_web = $("#termin_web").is(":checked"),
                    terminate_mob = $("#termin_mob").is(":checked"),
                    terminate_api = $("#termin_api").is(":checked");
                return (
                    terminate_web || terminate_mob || terminate_api
                        ? (showTopNotification(jsonStr.localized_message),
                          setTimeout(function () {
                              window.location.reload();
                          }, 3e3))
                        : window.location.reload(),
                    !1
                );
            }
            showTopErrNotification(jsonStr.message), $("#terminate_session_submit span").removeClass("zeroheight"), $("#terminate_session_submit").removeClass("changeloadbtn"), $("#terminate_session_submit").attr("disabled", !1);
        } else if ("throttles_limit_exceeded" === jsonStr.cause) showTopErrNotification(jsonStr.message);
        else {
            {
                var error_resp = jsonStr.errors[0];
                error_resp.code, jsonStr.message;
            }
            showTopErrNotification(jsonStr.message);
        }
    } else showTopErrNotification(I18N.get("IAM.ERROR.GENERAL"));
    return $("#terminate_session_submit span").removeClass("zeroheight"), $("#terminate_session_submit").removeClass("changeloadbtn"), $("#terminate_session_submit").attr("disabled", !1), !1;
}
function showOneAuthTerminate(ele) {
    $("#include_oneauth").attr("checked", !1),
        ele.checked && $("#termin_mob").hasClass("show_oneauth")
            ? ($(".oneAuthLable").slideDown(300).addClass("displayOneAuth"), $("#terminate_session_weband_mobile_desc").hide(), $(ele).parents(".checkbox_div").addClass("showOneAuthLable"), $(".showOneAuthLable").addClass("displayBorder"))
            : ($(".oneAuthLable").removeClass("displayOneAuth"),
              $(".showOneAuthLable").removeClass("displayBorder"),
              $("#terminate_session_weband_mobile_desc").show(),
              $(".oneAuthLable").slideUp(300, function () {
                  $(ele).parents(".checkbox_div").removeClass("showOneAuthLable");
              }));
}
function showTopNotification(msg, timeout) {
    $(".alert_message").html(msg),
        $(".Alert").css("top", "20px"),
        window.setTimeout(
            function () {
                $(".Alert").css("top", "-100px");
            },
            timeout ? timeout : 5e3
        );
}
function showTopErrNotification(msg, help) {
    $(".error_message").html(msg),
        $(".Errormsg").css("top", "20px"),
        window.setTimeout(function () {
            $(".Errormsg").css("top", "-100px");
        }, 5e3),
        void 0 != help &&
            "" != help &&
            ($(".error_help").css("display", "inline-block"),
            $(".error_help").html(help),
            $(".error_message").addClass("error_help_in"),
            window.setTimeout(function () {
                $(".error_message").removeClass("error_help_in"), $(".error_help").html("");
            }, 5500));
}
function showTopErrNotificationStatic(msg, help) {
    $(".error_message").html(msg),
        $(".Errormsg").css("top", "20px"),
        $(".topErrClose").removeClass("hide"),
        $(".error_icon").addClass("err-icon-help"),
        void 0 != help && "" != help && ($(".error_help").css("display", "inline-block"), $(".error_help").html(help), $(".error_message").addClass("error_help_in"));
}
function closeTopErrNotification() {
    $(".Errormsg").css("top", "-100px"),
        $("error_message").removeClass("error_help_in"),
        $(".error_message").removeClass("error_help_in"),
        $(".error_help").css("display", "none"),
        $(".error_help").html(""),
        $(".error_icon").removeClass("err-icon-help"),
        $(".topErrClose").is(":visible") && $(".topErrClose").addClass("hide");
}
function showPasswordExpiry(pwdpolicy) {
    if (($("#signin_div,.rightside_box").hide(), $(".password_expiry_container").show(), $(".signin_container").addClass("mod_container"), void 0 != pwdpolicy)) {
        $("#password_desc").html(
            void 0 != pwdpolicy.expiry_days && -1 != pwdpolicy.expiry_days ? formatMessage(I18N.get("IAM.NEW.SIGNIN.PASSWORD.EXPIRED.ORG.DESC"), pwdpolicy.expiry_days.toString()) : I18N.get("IAM.NEW.SIGNIN.PASSWORD.EXPIRED.ORG.DESC.NOW")
        ),
            validatePasswordPolicy.init(pwdpolicy, "#npassword_container input"),
            $("#npassword_container").attr("onkeyup", "check_pp()");
        var loginName = de("login_id").value;
        $("#changepassword").attr("onclick", "updatePassword(" + pwdpolicy.min_length + "," + pwdpolicy.max_length + ',"' + loginName + '")');
    }
    return !1;
}
function checkCookie() {
    isValid(getCookie(iam_reload_cookie_name)) && window.location.reload();
}
function check_pp() {
    validatePasswordPolicy.validate("#npassword_container input");
}
function remove_error() {
    $(".field_error").remove(), clearCommonError("npassword");
}
function handleCrossDcLookup(loginID) {
    $(".blur,.loader").show(),
        isValid(CC) && $("#country_code_select").val($("#" + CC).val()),
        isValid(CC) &&
            (loginID =
                -1 != loginID.indexOf("-")
                    ? loginID
                    : $("#" + CC)
                          .val()
                          .split("+")[1] +
                      "-" +
                      loginID);
    var loginurl = uriPrefix + "/signin/v2/lookup/" + loginID,
        params = "mode=primary&" + signinParams;
    return sendRequestWithCallback(loginurl, params, !0, handleLookupDetails), !1;
}
function handleConnectionError() {
    return $("#nextbtn span").removeClass("zeroheight"), $("#nextbtn").removeClass("changeloadbtn"), $("#nextbtn").attr("disabled", !1), (isFormSubmited = !1), showTopErrNotification(I18N.get("IAM.PLEASE.CONNECT.INTERNET")), !1;
}
function handleDomainForPortal(domains) {
    $("#login_id").attr("placeholder", ""),
        $("#login_id").css("borderRadius", "2px 0px 0px 2px"),
        $("#portaldomain").show(),
        $("#login_id").css("width", "55%"),
        $("#portaldomain").css("width", "45%"),
        $("#login_id").css("display", "inline-block"),
        $.each(domains, function (i, v) {
            var optVal = "@" + v;
            $("#domaincontainer").append($("<option></option>").attr("value", optVal).text(optVal));
        }),
        1 === domains.length
            ? $("#portaldomain").append("<span onclick='handleDomainChange(true)' class='close'> </span>")
            : ($("#domaincontainer").append($("<option class='option option--domain_select removedomain'></option>").attr("value", "removedomain").text(I18N.get("IAM.SIGNIN.REMOVE.DOMAIN"))),
              isMobile || renderUV(".domainselect", !1, "", "", "", !1, !1, "domain_select", !0)),
        isMobile && ($(".domainselect").hasClass("select2-hidden-accessible") && $(".domainselect").select2("destroy"), $(".domainselect").show()),
        1 === domains.length
            ? ($(".domainselect").show(), $("#domaincontainer").addClass("nonclickelem"), $(".selectbox_arrow").hide())
            : ($("#portaldomain .select2-selection").addClass("select2domain"), $("#portaldomain .select2").css("width", "196px !important"), $("#portaldomain .select2").show());
}
function handleDomainChange(isClose) {
    ("removedomain" === $("#domaincontainer").val() || isClose === !0) &&
        ($("#login_id").css("borderRadius", "2px"),
        $("#portaldomain").hide(0, function () {
            $("#login_id").css("width", "100%"), $("#login_id").focus();
        }),
        $(".doaminat").show());
}
function enableDomain() {
    $("#login_id").css("width", "55%"),
        setTimeout(function () {
            $(".domainselect").val($(".domainselect option:first").val()),
                $(".select_input--domain_select").val($(".domainselect").val()),
                $("#portaldomain").css("width", "45%"),
                $("#login_id").css("display", "inline-block"),
                $("#login_id").css("borderRadius", "2px 0px 0px 2px"),
                $(".doaminat").hide(),
                $("#portaldomain").show();
        }, 200);
}
function hideBkCodeRedirection() {
    $(".go_to_bk_code_container").removeClass("show_bk_pop");
}
function openSmartSignInPage() {
    var smartsigninURL = "/signin?" + signinParams;
    -1 != smartsigninURL.indexOf("QRLogin=false")
        ? (smartsigninURL = smartsigninURL.replace("QRLogin=false", "QRLogin=true"))
        : -1 != !smartsigninURL.indexOf("QRLogin=true") && (smartsigninURL += -1 != smartsigninURL.indexOf("?") ? "&QRLogin=true" : "?QRLogin=true"),
        isDarkMode && -1 != !smartsigninURL.indexOf("darkmode=true") && (smartsigninURL += "&darkmode=true"),
        switchto(smartsigninURL);
}
function enableSplitField(elemID, fieldLength, placeHolder) {
    splitField.createElement(elemID, { splitCount: fieldLength, charCountPerSplit: 1, isNumeric: !0, otpAutocomplete: !0, customClass: "customOtp", inputPlaceholder: "&#9679;", placeholder: placeHolder });
}
function handleMultiDCData() {
    for (
        var infoURLs = Object.keys(signin_info_urls).map(function (objKeys) {
                return signin_info_urls[objKeys];
            }),
            i = 0;
        i < infoURLs.length;
        i++
    ) {
        if (infoURLs.length - 1 == i) return includeScript(infoURLs[i] + signin_info_uri + "?callback=printUser&dc=" + current_dc, callbackforfailure, !0), !1;
        includeScript(infoURLs[i] + signin_info_uri + "?callback=printUser&dc=" + current_dc);
    }
    return !1;
}
function callbackforfailure() {
    return fediconsChecking(), hideloader(), !1;
}
function initiateLogin(signinurl, login_id) {
    var oldForm = document.getElementById("multiDCredirection");
    oldForm && document.documentElement.removeChild(oldForm);
    var form = document.createElement("form");
    form.setAttribute("id", "multiDCredirection"), form.setAttribute("method", "POST"), form.setAttribute("action", signinurl + multidc_origin_uri + "?dc=" + current_dc), form.setAttribute("target", "_parent");
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden"), hiddenField.setAttribute("name", "LOGIN_ID"), hiddenField.setAttribute("value", login_id), form.appendChild(hiddenField);
    var params = getQueryParams(location.search);
    for (var key in params)
        isValid(params[key]) &&
            ((hiddenField = document.createElement("input")), hiddenField.setAttribute("type", "hidden"), hiddenField.setAttribute("name", key), hiddenField.setAttribute("value", params[key]), form.appendChild(hiddenField));
    return document.documentElement.appendChild(form), form.submit(), !1;
}
function goToUserLogin() {
    return $(".fieldcontainer,#nextbtn,#forgotpassword,.line,.fed_2show,#signuplink").show(), $("#multiDC_container,#createaccount").hide(), fediconsChecking(), $(".signin_head").css("margin-bottom", "30px"), !1;
}
function loadTooltipPosition() {
    var element = document.getElementsByClassName("multiDC_info")[0],
        rect = element.getBoundingClientRect(),
        topposition = rect.top,
        leftpostion = rect.left;
    return $(".up-arrow").css("top", topposition + "px"), $(".up-arrow").css("left", leftpostion + "px"), !1;
}
function printUser(respData) {
    var user_count = 0,
        elem = "";
    if ((IsJsonString(respData) && (respData = JSON.parse(respData)), Object.keys(respData).length <= 0)) return !1;
    (elem +=
        '<div class="profile_head" onclick=initiateLogin("' +
        signin_info_urls[respData.DC_INFO] +
        '","' +
        respData.DISPLAY_ID +
        '")>								<div class="profile_dp" id="profile_img">								<span class="file_lab">									<img id="dp_pic" draggable="false" src="' +
        respData.LOGO_URL +
        '" onerror=this.src="/v2/components/images/user_2.png"; style="width: 100%; height: 100%;">								</span>							</div>							<div class="profile_info">								<div class="profile_name" id="profile_name">' +
        respData.DISPLAY_NAME +
        '</div>								<div class="profile_email" id="profile_email">' +
        respData.DISPLAY_ID +
        '</div>							</div>							<div class="DC_info"><span class="icon-datacenter"></span><span>' +
        respData.DC_INFO.toUpperCase() +
        "</span></div>						</div>"),
        user_count++;
    var tooltip_elem =
        "<div class='dcInfoCon'><span class='DC_info DC_info-more'><span class='icon-datacenter'></span>" +
        respData.DC_INFO.toUpperCase() +
        "</span>						<span class='DC_name-details'>" +
        respData.DC_INFO.toUpperCase() +
        " " +
        I18N.get("IAM.FEDERATED.SIGNUP.CREATE.DATA.CENTER.TITLE") +
        "</span></div>";
    return (
        user_count > 0 &&
            ($("#account_details").html($("#account_details").html() + elem),
            $(".DC-details").html($(".DC-details").html() + tooltip_elem),
            $(".fieldcontainer,#nextbtn,#forgotpassword,.line,.fed_2show,#signuplink").hide(),
            $("#multiDC_container,#multiDC_container .line,#createaccount").show(),
            $(".signin_head").css("margin-bottom", "24px"),
            setFooterPosition(),
            loadTooltipPosition()),
        !1
    );
}
function hideloader() {
    return (
        isClientPortal ||
            ($(".load-bg").is(":visible") &&
                setTimeout(function () {
                    document.querySelector(".load-bg").classList.add("load-fade"),
                        setTimeout(function () {
                            (document.querySelector(".load-bg").style.display = "none"), isMobile || $("#login_id").focus();
                        }, 200);
                }, 400)),
        !1
    );
}
function WmsliteImpl() {}
var uvselect = {
    search_text_placeholder: "undefined" != typeof iam_search_text ? iam_search_text : "Search...",
    no_result_text_placeholder: "undefined" != typeof iam_no_result_found_text ? iam_no_result_found_text : "No result found",
    windowClickBind: !1,
    windowResizeBind: !1,
    windowScrollBind: !1,
    windowKeyDownBind: !1,
    searchIconSVG:
        '<svg width="100%" height="100%" viewBox="0 0 1023.013 1023.013"><path id="search" d="M443.733,0C688.8,0,887.466,198.666,887.466,443.733A441.735,441.735,0,0,1,802.06,705.511l200.957,200.963a68.267,68.267,0,0,1-95.618,97.453l-.926-.909L705.51,802.061a441.735,441.735,0,0,1-261.778,85.406C198.665,887.467,0,688.8,0,443.734S198.665,0,443.732,0Zm0,136.533c-169.662,0-307.2,137.538-307.2,307.2s137.538,307.2,307.2,307.2,307.2-137.538,307.2-307.2-137.538-307.2-307.2-307.2Z" transform="translate(0.001)"/></svg>',
    enableViewMode: function (ids) {
        for (var ids = ids.split(","), i = 0; i < ids.length; i++) {
            var id = ids[i].replace("#", "");
            uvselect.getSelectboxByID(id).addClass("selectbox--viewmode"), (uvselect[id].ViewMode = !0);
        }
    },
    disableViewMode: function (ids) {
        for (var ids = ids.split(","), i = 0; i < ids.length; i++) {
            var id = ids[i].replace("#", "");
            uvselect.getSelectboxByID(id).removeClass("selectbox--viewmode"), (uvselect[id].ViewMode = !1);
        }
    },
    idGenerator: function () {
        var S4 = function () {
            return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    },
    escapeHTML: function (value) {
        return (
            value &&
                ((value = value.split("<").join("&lt;")),
                (value = value.split(">").join("&gt;")),
                (value = value.split('"').join("&quot;")),
                (value = value.split("'").join("&#x27;")),
                (value = value.split("/").join("&#x2F;")),
                (value = value.split("@").join("&#x40;")),
                (value = value.split("+").join("&#x2b;")),
                (value = value.split("#").join("&#x23;"))),
            value
        );
    },
    decodeHTML: function (value) {
        return (
            value &&
                ((value = value.split("&lt;").join("<")),
                (value = value.split("&gt;").join(">")),
                (value = value.split("&quot;").join('"')),
                (value = value.split("&#x27;").join("'")),
                (value = value.split("&#x2F;").join("/")),
                (value = value.split("&#x40;").join("@")),
                (value = value.split("&#x2b;").join("+")),
                (value = value.split("&#x23;").join("#"))),
            value
        );
    },
    decodeHTMLDefault: function (t) {
        return "" != t ? $("<textarea />").html(t).text() : "";
    },
    getScrollParent: function (node) {
        return null == node ? null : node.scrollHeight > node.clientHeight ? node : uvselect.getScrollParent(node.parentNode);
    },
    isElementInViewport: function (el) {
        "function" == typeof jQuery && el instanceof jQuery && (el = el[0]);
        var scroll_parent = window,
            result = uvselect.getScrollParent(el.parentNode);
        null != result && (scroll_parent = result);
        var rect = el.getBoundingClientRect(),
            top_value = scroll_parent.getBoundingClientRect().top,
            left_value = scroll_parent.getBoundingClientRect().left;
        return (
            rect.top >= Math.max(0, top_value) &&
            rect.left >= Math.max(0, left_value) &&
            rect.bottom <= Math.min(window.innerHeight, (0 > top_value ? 0 : top_value) + scroll_parent.clientHeight) &&
            rect.right <= Math.min(window.innerWidth, (0 > left_value ? 0 : left_value) + scroll_parent.clientWidth)
        );
    },
    stringDelimiter: function (sampleInput, delimiter) {
        for (var stringArray = [""], j = 0, i = 0; i < sampleInput.length; i++) sampleInput.charAt(i) == delimiter ? (j++, stringArray.push(""), (stringArray[j] += sampleInput.charAt(i))) : (stringArray[j] += sampleInput.charAt(i));
        return stringArray;
    },
    copyAttributes: function (attribute) {
        this.option.setAttribute("id" === attribute.nodeName ? "data-id" : attribute.nodeName, attribute.nodeValue);
    },
    initialize: function (ele, obj) {
        $(ele).attr("id") || $(ele).attr("id", uvselect.idGenerator());
        var id = $(ele).attr("id");
        if ((uvselect[id] || (uvselect[id] = {}), obj))
            if ("object" == typeof obj) uvselect[id] = obj;
            else {
                if (((uvselect[id][obj] = !0), "open" == obj && !window.isMobile)) return uvselect.destroySelectDropdown(id), uvselect.openDropDown(id), id;
                if ("close" == obj && !window.isMobile) return uvselect.destroySelectDropdown(id), id;
                if ("destroy" == obj) return uvselect.destroySelectDropdown(id), uvselect.destroySelectContainer(id), void (uvselect[id] = {});
            }
        return (
            (uvselect[id].select = ele),
            uvselect.checkForMobileScreen($(ele), obj),
            obj && ("ViewMode" == obj || obj.ViewMode ? uvselect.enableViewMode(id) : "disableViewMode" == obj && uvselect.disableViewMode(id)),
            uvselect.final_handlings(id),
            id
        );
    },
    checkForMobileScreen: function (ele, obj) {
        !window.isMobile || (obj && obj.prevent_mobile_style && void 0 != obj.prevent_mobile_style) ? uvselect.createSelectContainer(ele) : uvselect.create_mobile_select(ele);
    },
    create_mobile_select: function (t) {
        var id = t.attr("id");
        if (!($(".mobile_select_container[jsid=" + id + "]").length > 0)) {
            var mobile_select_container = document.createElement("div");
            if ((mobile_select_container.classList.add("mobile_select_container", id), mobile_select_container.setAttribute("jsid", id), t[0].replaceWith(mobile_select_container), t.attr("label"))) {
                var select_label = document.createElement("div");
                select_label.classList.add("select_label"), select_label.setAttribute("jsid", id);
                var label = document.createTextNode(t.attr("label"));
                select_label.appendChild(label), mobile_select_container.appendChild(select_label);
            }
            var mobile_arrow_container = document.createElement("div");
            mobile_arrow_container.classList.add("mobile_arrow_container"),
                mobile_arrow_container.setAttribute("jsid", id),
                mobile_select_container.appendChild(mobile_arrow_container),
                t.addClass("selectbox"),
                t.addClass("mobile_selectbox"),
                uvselect[id] && uvselect[id].ViewMode && t.addClass("selectbox--viewmode"),
                t.attr("jsid", id),
                mobile_arrow_container.appendChild(t[0]);
            var selectbox_arrow = document.createElement("div");
            selectbox_arrow.classList.add("mobile_uvselect_arrow"), selectbox_arrow.setAttribute("jsid", id), mobile_arrow_container.appendChild(selectbox_arrow);
            var arrow = document.createElement("b");
            selectbox_arrow.appendChild(arrow);
        }
    },
    createSelectContainer: function (t) {
        t.attr("placeholder") || t.attr("placeholder", "");
        var id = t.attr("id");
        uvselect[id].ajax && uvselect.make_ajax_call(id, "");
        var sel_con = document.getElementsByClassName("select_container " + id);
        sel_con.length > 0 && sel_con[0].remove();
        var sel_op_con = document.getElementsByClassName("selectbox_options_container " + id);
        sel_op_con.length > 0 && sel_op_con[0].remove();
        var select_container = document.createElement("div");
        select_container.classList.add("uvselect", "select_container", id),
            uvselect[id] && uvselect[id].theme && select_container.classList.add("select_container--" + uvselect[id].theme),
            (t.attr("country-code") || uvselect[id]["country-code"]) && select_container.classList.add("select_container_cntry_code", id);
        var widthVal = "width";
        if (
            ((t.attr("country-code") || uvselect[id]["country-code"]) &&
                ((widthVal = "min-width"), (select_container.style.width = "100%"), (select_container.style.width = "-moz-fit-content"), (select_container.style.width = "fit-content")),
            uvselect[id] && uvselect[id].width
                ? (select_container.style[widthVal] = uvselect[id].width)
                : t.attr("size") && "medium" == t.attr("size")
                ? select_container.classList.add("select_container_medium")
                : t.attr("width")
                ? (select_container.style[widthVal] = t.attr("width"))
                : "" != t[0].style.width && "0px" != t[0].style.width && (select_container.style[widthVal] = t[0].style.width),
            select_container.setAttribute("jsid", id),
            t.after(select_container),
            t.attr("label"))
        ) {
            var select_label = document.createElement("div");
            select_label.classList.add("select_label");
            var label = document.createTextNode(t.attr("label"));
            select_label.appendChild(label), select_container.appendChild(select_label);
        }
        var selectbox = document.createElement("div");
        if (
            (selectbox.classList.add("selectbox", "basic_selectbox"),
            (t.attr("multiple") || uvselect[id].multiple) && selectbox.classList.add("multi_selectbox"),
            uvselect[id] && uvselect[id].theme && selectbox.classList.add("selectbox--" + uvselect[id].theme),
            uvselect[id] && uvselect[id].ViewMode && selectbox.classList.add("selectbox--viewmode"),
            (t.attr("country-code") || uvselect[id]["country-code"]) &&
                (selectbox.classList.add("selectbox_cntry_code"),
                t.siblings().is("input")
                    ? t.siblings("input:first").attr("jsid", id)
                    : $("#" + id)
                          .parent()
                          .siblings("input:first")
                          .attr("jsid", id)),
            (t.attr("inline-select") || uvselect[id]["inline-select"]) && selectbox.classList.add("inline_selectbox"),
            (t.attr("button-select") || uvselect[id]["button-select"]) && (selectbox.classList.remove("basic_selectbox"), selectbox.classList.add("button_selectbox")),
            selectbox.setAttribute("jsid", id),
            t.attr("tabindex") || uvselect[id].tabindex ? selectbox.setAttribute("tabindex", t.attr("tabindex") || uvselect[id].tabindex) : selectbox.setAttribute("tabindex", 0),
            select_container.appendChild(selectbox),
            !t.attr("multiple") && !uvselect[id].multiple)
        ) {
            var selectbox_overlay = document.createElement("span");
            selectbox_overlay.classList.add("selectbox_overlay"), selectbox.appendChild(selectbox_overlay);
        }
        if (t.attr("embed-icon-class") || uvselect[id]["embed-icon-class"]) {
            t.attr("embed-icon-class", t.attr("embed-icon-class") || uvselect[id]["embed-icon-class"]);
            var leading_icon = document.createElement("i");
            leading_icon.classList.add("leading_icon", "select_icon"), uvselect[id] && uvselect[id].theme && leading_icon.classList.add("select_icon--" + uvselect[id].theme);
            for (var classes = t.attr("embed-icon-class").split(","), i = 0; i < classes.length; i++) leading_icon.classList.add(classes[i]);
            selectbox.appendChild(leading_icon);
        }
        if (t.attr("multiple") || uvselect[id].multiple) {
            t.attr("multiple", t.attr("multiple") || uvselect[id].multiple);
            var multi_select_input = document.createElement("div");
            multi_select_input.classList.add("select_input", "multiselect_input"),
                uvselect[id] && uvselect[id].theme && multi_select_input.classList.add("multiselect_input--" + uvselect[id].theme),
                multi_select_input.setAttribute("jsid", id),
                multi_select_input.setAttribute("placeholder", t.attr("placeholder")),
                multi_select_input.setAttribute("multiple", t.attr("multiple") || uvselect[id].multiple),
                multi_select_input.setAttribute("data-selected", ""),
                selectbox.appendChild(multi_select_input);
            var selected_cards_container = document.createElement("div");
            selected_cards_container.classList.add("selected_cards_container"), multi_select_input.appendChild(selected_cards_container);
            var select_search_icon = document.createElement("div");
            select_search_icon.classList.add("icon-search", "select_search_icon", "inline_search_icon"),
                uvselect[id] && uvselect[id].theme && select_search_icon.classList.add("select_search_icon--" + uvselect[id].theme),
                multi_select_input.appendChild(select_search_icon);
            var select_search_input = document.createElement("input");
            select_search_input.classList.add("select_search_input", "inline_search_input", "multiselect_search_input"),
                uvselect[id] && uvselect[id].theme && select_search_input.classList.add("select_search_input--" + uvselect[id].theme),
                select_search_input.setAttribute("jsid", id),
                select_search_input.setAttribute("placeholder", uvselect.search_text_placeholder),
                multi_select_input.appendChild(select_search_input);
        } else if (t.attr("button-select") || uvselect[id]["button-select"]) {
            var select_span = document.createElement("span");
            select_span.classList.add("select_span"), uvselect[id] && uvselect[id].theme && select_span.classList.add("select_span--" + uvselect[id].theme), select_span.setAttribute("jsid", id), selectbox.appendChild(select_span);
        } else {
            var select_input = document.createElement("input");
            if (t.attr("zoho-services") || uvselect[id]["zoho-services"]) {
                select_input = document.createElement("div");
                var serviceName = document.createElement("div");
                serviceName.classList.add("uv_service_name");
                var orgName = document.createElement("div");
                orgName.classList.add("uv_org_name"), select_input.appendChild(serviceName), select_input.appendChild(orgName), select_input.setAttribute("zoho-services", t.attr("zoho-services") || uvselect[id]["zoho-services"]);
            }
            select_input.classList.add("select_input"),
                uvselect[id] && uvselect[id].theme && select_input.classList.add("select_input--" + uvselect[id].theme),
                select_input.setAttribute("jsid", id),
                select_input.setAttribute("selected-value", ""),
                select_input.setAttribute("placeholder", t.attr("placeholder")),
                t.attr("validation") && select_input.setAttribute("validation", t.attr("validation")),
                (t.attr("country-flag") || uvselect[id]["country-flag"]) && select_input.setAttribute("country-flag", t.attr("country-flag") || uvselect[id]["country-flag"]),
                (t.attr("country-code") || uvselect[id]["country-code"]) && select_input.classList.add("select_input_cntry_code"),
                select_input.setAttribute("disabled", "true"),
                selectbox.appendChild(select_input);
        }
        var selectbox_arrow = document.createElement("span");
        selectbox_arrow.classList.add("selectbox_arrow"), uvselect[id] && uvselect[id].theme && selectbox_arrow.classList.add("selectbox_arrow--" + uvselect[id].theme), selectbox.appendChild(selectbox_arrow);
        var arrow = document.createElement("b");
        selectbox_arrow.appendChild(arrow);
        var input_error = document.createElement("div");
        input_error.classList.add("input_error"),
            uvselect[id] && uvselect[id].theme && input_error.classList.add("input_error--" + uvselect[id].theme),
            select_container.appendChild(input_error),
            t.css({ visibility: "hidden", height: "0px", width: "0px", border: "none", float: "left", padding: "0px", display: "none" }),
            t.attr("tabindex", -1),
            uvselect.loadSelectData(t),
            uvselect.selectbox_handlers(),
            (t.attr("inline-select") || uvselect[id]["inline-select"]) && uvselect.enable_responsive_input(),
            t[0].addEventListener("change", uvselect.native_select_onchange_listener, !0),
            t.unbind("change").change(function () {
                uvselect.loadSelectData(t);
            });
    },
    loadSelectData: function (t) {
        var id = t.attr("id");
        if (t.attr("button-select") || uvselect[id]["button-select"]) {
            var select_span = $(".select_span[jsid=" + id + "]")[0];
            return void (select_span.innerText = t.find("option:first").text());
        }
        var select_input = $(".select_input[jsid=" + id + "]")[0];
        if ((select_input.setAttribute("selected-value", t.val()), t.find(":selected"))) select_input.value = t.find(":selected").text();
        else
            for (var options = uvselect.getAllOptions(id), i = 0; i < options.length; i++) {
                var option_child = options[i],
                    input_element = uvselect.getSelectInputByID(id);
                if ($(option_child).attr("value") && $(option_child).attr("value") == value) {
                    var selected_option = $(option_child).children("p").text();
                    input_element.val(selected_option).change();
                } else input_element.val(value).change();
            }
        if (
            (t.find(":selected").length > 0 &&
                getArrayFromObj(t.find(":selected")[0].attributes).forEach(function (attribute) {
                    "id" != attribute.nodeName && "jsid" != attribute.nodeName && "class" != attribute.nodeName && "value" != attribute.nodeName && select_input.setAttribute(attribute.nodeName, attribute.nodeValue);
                }),
            (t.attr("country-flag") || uvselect[id]["country-flag"]) && uvselect.selectFlag(id),
            t.attr("zoho-services") || uvselect[id]["zoho-services"])
        ) {
            uvselect.selectServiceIcon(id);
            var select_obj = $(select_input),
                service_name = uvselect.escapeHTML(select_obj.attr("data-service")),
                org_name = uvselect.escapeHTML(select_obj.attr("data-org_name"));
            select_obj.find(".uv_service_name").text(service_name).show(),
                select_obj.find(".uv_org_name").text(org_name).show(),
                service_name == org_name ? select_obj.find(".uv_service_name").hide() : "" == org_name && (select_obj.find(".uv_service_name").hide(), select_obj.find(".uv_org_name").text(service_name));
        }
        (t.attr("country-code") || uvselect[id]["country-code"]) && (select_input.value = t.find(":selected").attr(isNumeric(t.find(":selected").attr("data-num").split("+")[1]) ? "data-num" : "value"));
    },
    createSelectDropdown: function (id) {
        uvselect.destroySelectDropdown(uvselect.getCurrentDropdown().attr("jsid"));
        var t = uvselect[id].select,
            select_container = uvselect.getSelectContainerByID(id),
            selectbox_options_container = ($(".select_input[jsid=" + id + "]").attr("selected-value"), document.createElement("div"));
        selectbox_options_container.classList.add("selectbox_options_container", id),
            uvselect[id] && uvselect[id].theme && selectbox_options_container.classList.add("selectbox_options_container--" + uvselect[id].theme),
            t.attr("dropdown-width") || uvselect[id]["dropdown-width"]
                ? $(selectbox_options_container).css("width", t.attr("dropdown-width") || uvselect[id]["dropdown-width"])
                : $(selectbox_options_container).css("min-width", $(select_container).css("width")),
            selectbox_options_container.setAttribute("jsid", id),
            t.attr("immediate-options") && "true" == t.attr("immediate-options") ? select_container[0].appendChild(selectbox_options_container) : document.body.appendChild(selectbox_options_container);
        var dropdown_header = document.createElement("div");
        if (
            (dropdown_header.classList.add("dropdown_header"),
            uvselect[id] && uvselect[id].theme && dropdown_header.classList.add("dropdown_header--" + uvselect[id].theme),
            dropdown_header.setAttribute("jsid", id),
            selectbox_options_container.appendChild(dropdown_header),
            (t.attr("searchable") && "true" == t.attr("searchable")) || uvselect[id].searchable)
        ) {
            var selectbox_search_container = document.createElement("div");
            selectbox_search_container.classList.add("selectbox_search_container"),
                uvselect[id] && uvselect[id].theme && selectbox_search_container.classList.add("selectbox_search_container--" + uvselect[id].theme),
                selectbox_search_container.setAttribute("jsid", id),
                dropdown_header.appendChild(selectbox_search_container);
            var selectbox_search = document.createElement("div");
            selectbox_search.classList.add("selectbox_search"),
                uvselect[id] && uvselect[id].theme && selectbox_search.classList.add("selectbox_search--" + uvselect[id].theme),
                selectbox_search.setAttribute("jsid", id),
                selectbox_search_container.appendChild(selectbox_search);
            var select_search_icon = document.createElement("div");
            select_search_icon.classList.add("select_search_icon"),
                uvselect[id] && uvselect[id].theme && select_search_icon.classList.add("select_search_icon--" + uvselect[id].theme),
                (select_search_icon.innerHTML = uvselect.searchIconSVG),
                selectbox_search.appendChild(select_search_icon);
            var select_search_input = document.createElement("input");
            select_search_input.classList.add("select_search_input"),
                uvselect[id] && uvselect[id].theme && select_search_input.classList.add("select_search_input--" + uvselect[id].theme),
                select_search_input.setAttribute("jsid", id),
                select_search_input.setAttribute("placeholder", uvselect.search_text_placeholder),
                selectbox_search.appendChild(select_search_input);
        }
        var selectbox_options = document.createElement("ul");
        selectbox_options.classList.add("selectbox_options"),
            uvselect[id] && uvselect[id].theme && selectbox_options.classList.add("selectbox_options--" + uvselect[id].theme),
            selectbox_options.setAttribute("jsid", id),
            selectbox_options_container.appendChild(selectbox_options),
            uvselect.placeSelectOptionContainer(id),
            uvselect.createDropdownOptions(id, selectbox_options, !0);
    },
    createDropdownOptions: function (id, selectbox_options, isResultLoading) {
        if (((selectbox_options.innerHTML = ""), uvselect[id]["custom-ajax-result"])) var children = uvselect[id]["custom-ajax-result"].results;
        else if (uvselect[id].ajax && isResultLoading) {
            var option = document.createElement("li");
            option.classList.add("loading_result"), selectbox_options.appendChild(option);
            var p = document.createElement("p");
            option.appendChild(p), p.appendChild(document.createTextNode("Loading..."));
        } else
            var t = uvselect[id].select,
                children = t.children();
        for (var value = $(".select_input[jsid=" + id + "]").attr("selected-value"), i = 0; i < children.length; i++) {
            var option_child = children[i],
                option = document.createElement("li");
            if ((option.classList.add("option"), selectbox_options.appendChild(option), $(option_child).attr("value") && (value == $(option_child).attr("value") && option.classList.add("selected_option"), t.attr("multiple")))) {
                var multi_selected_options = [],
                    multi_selected_options = uvselect.getMultipleSelectedOptions(id);
                -1 != multi_selected_options.indexOf($(option_child).attr("value")) && option.classList.add("uv_hide");
            }
            if (uvselect[id].templateResult) {
                var custom_option_template = uvselect[id].templateResult.call(this, option_child);
                (option.innerHTML = custom_option_template), option.setAttribute("value", $(option).children().first().attr("value"));
                var selected_options = uvselect.getMultipleSelectedOptions(id);
                -1 != selected_options.indexOf(uvselect.decodeHTML(option_child.id)) && option.classList.add("uv_hide");
            } else {
                if ((t.attr("button-select") || uvselect[id]["button-select"]) && 0 == i) {
                    $(option).remove();
                    continue;
                }
                if (
                    (0 == i && option_child.getAttribute("id") && -1 != option_child.getAttribute("id").indexOf("default") && (option.classList.remove("option"), option.classList.add("default_option")),
                    getArrayFromObj(option_child.attributes).forEach(uvselect.copyAttributes, { option: option }),
                    t.attr("embed-icon-class"))
                ) {
                    var leading_icon_option = document.createElement("i");
                    leading_icon_option.classList.add("leading_icon", "select_icon_option");
                    for (var classes = t.attr("embed-icon-class").split(","), k = 0; k < classes.length; k++) leading_icon_option.classList.add(classes[k]);
                    if (($(option_child).attr("icon-src") && $(leading_icon_option).css("background-image", $(option_child).attr("icon-src")), t.attr("zoho-services") || uvselect[id]["zoho-services"])) {
                        var service_code = "product-icon-" + $(option_child).attr("data-service").toLowerCase();
                        leading_icon_option.classList.add(service_code.replace(/\s/g, ""));
                        for (var icon_path, count = 1; 10 >= count; count++) (icon_path = document.createElement("span")), (icon_path.classList.value = "path" + count), leading_icon_option.appendChild(icon_path);
                    }
                    (t.attr("country-flag") || uvselect[id]["country-flag"]) &&
                        ((t.attr("country-code") || uvselect[id]["country-code"]) && (option_child.text = option_child.text.split("(")[0].trim()),
                        addFlagIcon($(leading_icon_option), $(option_child).attr(ischaracter($(option_child).attr("value")) ? "value" : "data-num"))),
                        option.appendChild(leading_icon_option);
                }
                var p = document.createElement("p");
                if ((option.appendChild(p), uvselect[id] && uvselect[id]["break-option-text"]))
                    for (var text_nodes = uvselect.stringDelimiter(option_child.text, 1 == uvselect[id]["break-option-text"] ? " " : uvselect[id]["break-option-text"]), j = 0; j < text_nodes.length; j++) {
                        var option_text_span = document.createElement("span");
                        option_text_span.classList.add("option_text_span", "option_text_span_" + (j + 1)), option_text_span.appendChild(document.createTextNode(text_nodes[j])), p.appendChild(option_text_span);
                    }
                else p.appendChild(document.createTextNode(option_child.text));
                if (t.attr("country-code") || uvselect[id]["country-code"]) {
                    option_child.text = option_child.text.split("(")[0];
                    var country_code = document.createElement("div");
                    country_code.classList.add("country_code"),
                        option.appendChild(country_code),
                        country_code.appendChild(document.createTextNode($(option_child).attr(isNumeric($(option_child).attr("data-num").split("+")[1]) ? "data-num" : "value")));
                }
                if (
                    ((t.attr("zoho-services") || uvselect[id]["zoho-services"]) &&
                        ((p.innerText = ""),
                        p.appendChild(
                            $(option_child).attr("data-service") == $(option_child).attr("data-org_name")
                                ? document.createTextNode(uvselect.escapeHTML(option_child.text))
                                : "" == $(option_child).attr("data-org_name") || void 0 == $(option_child).attr("data-org_name")
                                ? document.createTextNode($(option_child).attr("data-service"))
                                : document.createTextNode(uvselect.escapeHTML($(option_child).attr("data-org_name")))
                        )),
                    uvselect[id].editResultMarkup)
                ) {
                    var edited_option_template = uvselect[id].editResultMarkup.call(this, option_child);
                    option.innerHTML = edited_option_template;
                }
            }
        }
        uvselect[id]["option-height"] && $(".selectbox_options_container .selectbox_options .option").css({ height: uvselect[id]["option-height"] });
        var option = document.createElement("li");
        option.classList.add("no_result", "uv_hide"), 0 == children.length && option.classList.remove("uv_hide"), selectbox_options.appendChild(option);
        var p = document.createElement("p");
        option.appendChild(p),
            p.appendChild(document.createTextNode(uvselect.no_result_text_placeholder)),
            uvselect[id] &&
                uvselect[id].theme &&
                ($(".selectbox_options_container .selectbox_options .option").addClass("option--" + uvselect[id].theme),
                $(".selectbox_options_container .selectbox_options .loading_result").addClass("loading_result--" + uvselect[id].theme),
                $(".selectbox_options_container .selectbox_options .option .select_icon_option").addClass("select_icon_option--" + uvselect[id].theme),
                $(".selectbox_options_container .selectbox_options .option .country_code").addClass("country_code--" + uvselect[id].theme),
                $(".selectbox_options_container .selectbox_options .no_result").addClass("no_result--" + uvselect[id].theme)),
            uvselect.dropdown_handlers();
    },
    destroySelectContainer: function (id) {
        var sel_con = document.getElementsByClassName("select_container " + id);
        sel_con.length > 0 && sel_con[0].remove();
    },
    destroySelectDropdown: function (id) {
        var t = uvselect.getSelectboxByID(id).removeClass("selectbox--open selectbox--open-reverse");
        uvselect[id] &&
            uvselect[id]["country-code"] &&
            (t.parent().siblings().is("input")
                ? t
                      .parent()
                      .siblings("input[jsid=" + id + "]")
                      .removeClass("selectbox--open selectbox--open-reverse")
                : $("#" + id)
                      .parent()
                      .siblings("input[jsid=" + id + "]")
                      .removeClass("selectbox--open selectbox--open-reverse")),
            (t.attr("place-options-after") || (uvselect[id] && uvselect[id]["place-options-after"])) && $("#" + uvselect[id]["place-options-after"]).removeClass("selectbox--open selectbox--open-reverse");
        var sel_op_con = document.getElementsByClassName("selectbox_options_container " + id);
        sel_op_con.length > 0 && sel_op_con[0].remove(),
            uvselect[id] && uvselect[id]["country-code"] ? uvselect[id].select.siblings("input:first").focus() : uvselect.getSelectboxByID(id).focus(),
            document.removeEventListener("click", uvselect.click_listener, !0),
            document.removeEventListener("scroll", uvselect.scroll_listener, !0),
            window.removeEventListener("resize", uvselect.window_resize_listener, !0);
    },
    getSelectContainerByID: function (id) {
        return $(".select_container[jsid=" + id + "]");
    },
    getSelectboxByID: function (id) {
        return $(".selectbox[jsid=" + id + "]");
    },
    getSelectInputByID: function (id) {
        return $(".select_input[jsid=" + id + "]");
    },
    getOptionsContainerByID: function (id) {
        return $(".selectbox_options_container[jsid=" + id + "]");
    },
    isDropdownOpen: function (id) {
        return $(".selectbox_options_container[jsid=" + id + "]").length > 0 ? !0 : !1;
    },
    getCurrentDropdown: function () {
        return $(".selectbox_options_container");
    },
    openDropDown: function (id) {
        uvselect.createSelectDropdown(id),
            uvselect[id] && uvselect[id]["onDropdown:open"] && uvselect[id]["onDropdown:open"].call(this, uvselect.getCurrentDropdown()[0]),
            uvselect.placeSelectOptionContainer(id),
            $(".option.selected_option").length > 0 &&
                ($(".option.selected_option")[0].classList.add("option__highlighted"),
                uvselect.check_if_overflowing(uvselect.getOptionsContainerByID(id).children(".selectbox_options")[0]) && $(".option.selected_option")[0].scrollIntoView({ block: "nearest", inline: "nearest" })),
            uvselect.focusSelectbox(id),
            $(".select_search_input[jsid=" + id + "]").length > 0 && $(".select_search_input[jsid=" + id + "]").focus(),
            document.addEventListener("click", uvselect.click_listener, !0),
            document.addEventListener("scroll", uvselect.scroll_listener, !0),
            window.addEventListener("resize", uvselect.window_resize_listener, !0),
            uvselect.dropdown_final_handlings(id);
    },
    closeCurrentDropdown: function () {
        var t = uvselect.getCurrentDropdown(),
            id = t.attr("jsid"),
            q = uvselect.getSelectContainerByID(id),
            r = q.children(".selectbox").children(".select_input");
        r.blur(), uvselect.blurAllSelectbox(), uvselect.destroySelectDropdown(id);
    },
    focusSelectbox: function (id) {
        uvselect.blurAllSelectbox(), uvselect[id]["country-code"] ? uvselect.getSelectContainerByID(id).siblings("input:first").addClass("selectbox--focus") : uvselect.getSelectboxByID(id).addClass("selectbox--focus");
    },
    blurAllSelectbox: function () {
        $(".selectbox").removeClass("selectbox--focus"), $(".selectbox").parent().siblings("input:first").removeClass("selectbox--focus");
    },
    getSelectInput: function (select_container) {
        var t = select_container;
        return !select_container instanceof jQuery && (t = $(select_container)), t.children(".selectbox").children(".select_input");
    },
    getAllOptions: function (id) {
        return $(".selectbox_options[jsid=" + id + "]").children(".option");
    },
    getAllNativeSelectOptions: function (id) {
        return $(uvselect[id].select).children("option");
    },
    embedSelectedIcon: function (option_icon, select_icon) {
        select_icon.css({ background: option_icon.css("background") });
    },
    selectFlag: function (id) {
        var select_icon = uvselect.getSelectboxByID(id).children(".leading_icon"),
            flag_code = uvselect[id].select.find(":selected").attr(ischaracter(uvselect[id].select.find(":selected").attr("value")) ? "value" : "data-num");
        (select_icon[0].innerHTML = ""), addFlagIcon(select_icon, flag_code);
    },
    selectServiceIcon: function (id) {
        var servicepos =
                "product-icon-" +
                $(".select_input[jsid=" + id + "]")
                    .attr("data-service")
                    .toLowerCase(),
            select_icon = uvselect.getSelectboxByID(id).children(".leading_icon");
        if (
            (select_icon.removeClass(function (index, className) {
                return (className.match(/\bproduct-icon-\S+/g) || []).join(" ");
            }),
            0 == select_icon.children().length)
        )
            for (var icon_path, count = 1; 10 >= count; count++) (icon_path = document.createElement("span")), (icon_path.classList.value = "path" + count), select_icon.append(icon_path);
        select_icon.addClass(servicepos);
    },
    addCardToMultiSelect: function (ele, value, text) {
        var t = ele;
        !ele instanceof jQuery && (t = $(ele));
        var option_card = document.createElement("div");
        option_card.classList.add("option_card", "default_card"), option_card.setAttribute("value", value), t[0].appendChild(option_card), option_card.appendChild(document.createTextNode(text));
        var icon_minus = document.createElement("div");
        icon_minus.classList.add("remove_option_card", "icon-Minus"), option_card.appendChild(icon_minus);
    },
    addCustomCardToMultiSelect: function (ele, value, custom_template) {
        var t = ele;
        !ele instanceof jQuery && (t = $(ele));
        var option_card = document.createElement("div");
        option_card.classList.add("option_card"), option_card.setAttribute("value", value), t.children(".selected_cards_container")[0].appendChild(option_card), (option_card.innerHTML = custom_template);
        var multiselect_remove = document.createElement("b");
        multiselect_remove.classList.add("multiselect_remove"), multiselect_remove.setAttribute("role", "presentation"), $(option_card).prepend(multiselect_remove);
        var isOverflow = uvselect.check_if_overflowing(t.parent()[0]);
        isOverflow ? t.siblings(".selectbox_arrow").addClass("uv_hide") : t.siblings(".selectbox_arrow").removeClass("uv_hide");
    },
    removeCardFromMultiSelect: function (ele, parentele) {
        var t = ele,
            q = parentele;
        ele instanceof jQuery && (t = ele[0]), parentele instanceof jQuery && (q = parentele[0]), q.removeChild(t);
    },
    deSelectFromMultiSelect: function (id, val_to_remove) {
        for (var options = uvselect.getAllOptions(id), input_element = uvselect.getSelectInputByID(id), i = 0; i < options.length; i++) {
            var option_child = options[i];
            $(option_child).attr("value") && $(option_child).attr("value") == val_to_remove && $(option_child).removeClass("uv_hide");
        }
        var selected = uvselect.getMultipleSelectedOptions(id);
        selected.splice(selected.indexOf(val_to_remove), 1),
            input_element.attr("data-selected", selected),
            uvselect[id].select.val(selected).change(),
            0 == input_element.children(".option_card").length && input_element.children("span").removeClass("uv_hide");
    },
    getMultipleSelectedOptions: function (id) {
        var t = uvselect.getSelectContainerByID(id),
            input_element = uvselect.getSelectInput(t);
        return input_element.attr("data-selected").split(",");
    },
    placeSelectOptionContainer: function (id) {
        var t = uvselect.getSelectboxByID(id);
        uvselect[id]["country-code"] &&
            (t = t.parent().siblings().is("input")
                ? t.parent().siblings("input[jsid=" + id + "]")
                : $("#" + id)
                      .parent()
                      .siblings("input[jsid=" + id + "]")),
            (t.attr("place-options-after") || uvselect[id]["place-options-after"]) && (t = $("#" + uvselect[id]["place-options-after"]));
        var u = uvselect.getOptionsContainerByID(id);
        if (0 != u.length) {
            var rect = t[0].getBoundingClientRect(),
                selectbox_pos = rect.top + t.outerHeight();
            if (window.innerHeight - selectbox_pos < u.outerHeight() && rect.top > u.outerHeight()) {
                var bottom_px = window.innerHeight - rect.top;
                u.css("top", ""),
                    u.css("bottom", bottom_px + "px"),
                    u[0].getBoundingClientRect().bottom != bottom_px && ((bottom_px += u[0].getBoundingClientRect().bottom - rect.top), u.css("bottom", bottom_px + "px")),
                    u.css("flex-direction", "column-reverse"),
                    t.attr("inline-select") ||
                        uvselect[id]["inline-select"] ||
                        (u.removeClass("selectbox_options_container--open"), u.addClass("selectbox_options_container--open-reverse"), t.removeClass("selectbox--open"), t.addClass("selectbox--open-reverse"));
            } else {
                var top_px = rect.top + t.outerHeight();
                u.css("top", top_px + "px"),
                    u.css("bottom", ""),
                    u[0].getBoundingClientRect().top != top_px && ((top_px = top_px + (rect.top - u[0].getBoundingClientRect().top) + t.outerHeight()), u.css("top", top_px + "px")),
                    u.css("flex-direction", "column"),
                    t.attr("inline-select") ||
                        uvselect[id]["inline-select"] ||
                        (u.removeClass("selectbox_options_container--open-reverse"), u.addClass("selectbox_options_container--open"), t.removeClass("selectbox--open-reverse"), t.addClass("selectbox--open"));
            }
            if (((rect = t[0].getBoundingClientRect()), uvselect[id]["dropdown-align"] && "right" == uvselect[id]["dropdown-align"])) {
                var right_px = rect.right;
                if ((u.css("right", right_px), u[0].getBoundingClientRect().right != right_px)) {
                    var right_px = right_px + (u[0].getBoundingClientRect().right - rect.right);
                    u.css("right", right_px);
                }
            } else {
                var left_px = rect.left;
                if ((u.css("left", left_px), u[0].getBoundingClientRect().left != left_px)) {
                    var left_px = left_px + (rect.left - u[0].getBoundingClientRect().left);
                    u.css("left", left_px);
                }
            }
            0 == u.height() && u.addClass("uv_hide");
        }
    },
    check_if_overflowing: function (element) {
        return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth ? !0 : !1;
    },
    selectbox_handlers: function () {
        function onRemoveOptionCardClick(e) {
            var t = $(e.target).parent(),
                val_to_remove = t.attr("value"),
                input_element = t.parent().parent(),
                id = input_element.attr("jsid");
            uvselect.deSelectFromMultiSelect(id, val_to_remove), uvselect.removeCardFromMultiSelect(t, t.parent());
            var q = uvselect.getOptionsContainerByID(id);
            q.removeClass("uv_hide"), uvselect.placeSelectOptionContainer(id), e.preventDefault(), e.stopPropagation();
        }
        $(".selectbox")
            .unbind("click")
            .click(function (e) {
                if (e.target.classList.contains("remove_option_card") || e.target.classList.contains("multiselect_remove")) return void onRemoveOptionCardClick(e);
                var t = $(this),
                    id = t.attr("jsid");
                uvselect.isDropdownOpen(id) ? uvselect.destroySelectDropdown(id) : uvselect.openDropDown(id);
            }),
            $(".select_input")
                .unbind("blur")
                .blur(function () {
                    var t = $(this),
                        q = t.parent();
                    if (t.attr("validation")) {
                        var l = q.siblings(".select_label").text(),
                            str = t.val(),
                            validation = t.attr("validation");
                        (validation = validation.split(",")),
                            -1 != validation.indexOf("special-characters") && 0 == /^[a-zA-Z0-9- ]*$/.test(str)
                                ? (this.setCustomValidity("special characters"), q.children(".input_error").text(l + " does not support special characters"), q.addClass("inValid"))
                                : -1 != validation.indexOf("mandatory") && (null == str) | ("" == str)
                                ? (this.setCustomValidity("mandatory"), q.siblings(".input_error").text(l + " cannot be empty"), q.addClass("inValid"))
                                : (this.setCustomValidity(""), q.siblings(".input_error").html(""), q.removeClass("inValid"));
                    }
                }),
            $(".select_input").on("invalid", function () {}),
            uvselect.windowKeyDownBind ||
                ($(document).on("keydown", function (event) {
                    var focused_ele = document.activeElement;
                    if ($(".selectbox_options_container").not(".uv_hide").length > 0) {
                        var t = $(".selectbox_options_container").not(".uv_hide"),
                            scrollable = !1;
                        uvselect.check_if_overflowing(t.children(".selectbox_options")[0]) && (scrollable = !0);
                        var id = t.attr("jsid"),
                            option_list = t.children(".selectbox_options").children(".option").not(".uv_hide"),
                            current_option = option_list.index(option_list.filter(".option__highlighted"));
                        switch (event.keyCode) {
                            case 38:
                                uvselect.getAllOptions(id).removeClass("option__highlighted"),
                                    0 > current_option
                                        ? (option_list[0].classList.add("option__highlighted"), scrollable && option_list[0].scrollIntoView({ block: "nearest", inline: "nearest" }))
                                        : ((current_option = current_option > 0 ? --current_option : 0),
                                          option_list[current_option].classList.add("option__highlighted"),
                                          scrollable && option_list[current_option].scrollIntoView({ block: "nearest", inline: "nearest" })),
                                    event.preventDefault();
                                break;
                            case 40:
                                uvselect.getAllOptions(id).removeClass("option__highlighted"),
                                    0 > current_option
                                        ? (option_list[0].classList.add("option__highlighted"), scrollable && option_list[0].scrollIntoView({ block: "nearest", inline: "nearest" }))
                                        : ((current_option = current_option < option_list.length - 1 ? ++current_option : option_list.length - 1),
                                          option_list[current_option].classList.add("option__highlighted"),
                                          scrollable && option_list[current_option].scrollIntoView({ block: "nearest", inline: "nearest" })),
                                    event.preventDefault();
                                break;
                            case 13:
                                option_list[current_option] && (option_list[current_option].click(), event.preventDefault());
                                break;
                            case 27:
                                uvselect.closeCurrentDropdown(), event.preventDefault();
                        }
                    } else if (focused_ele.classList.contains("selectbox") && focused_ele.parentElement.classList.contains("uvselect") && !focused_ele.classList.contains("selectbox--viewmode"))
                        switch (event.keyCode) {
                            case 13:
                                uvselect.openDropDown(focused_ele.getAttribute("jsid")), event.preventDefault();
                        }
                }),
                (uvselect.windowKeyDownBind = !0));
    },
    dropdown_handlers: function () {
        $(".selectbox_options_container").on("classChange", function () {}),
            $(".selectbox_options .option")
                .unbind("click")
                .click(function () {
                    var t = $(this),
                        q = t.parent(),
                        id = q.attr("jsid"),
                        selected_option = t.children("p").text(),
                        value = t.attr("value"),
                        p = uvselect.getSelectContainerByID(id),
                        selectbox = uvselect.getSelectboxByID(id),
                        input_element = uvselect.getSelectInput(p);
                    if (
                        (p.children(".input_error").html(""),
                        p.children(".selectbox").removeClass("inValid"),
                        (t.attr("zoho-services") || uvselect[id]["zoho-services"]) && (input_element.attr("data-service", ""), input_element.attr("data-org_name", "")),
                        getArrayFromObj(t[0].attributes).forEach(function (attribute) {
                            "id" != attribute.nodeName &&
                                "jsid" != attribute.nodeName &&
                                "class" != attribute.nodeName &&
                                "value" != attribute.nodeName &&
                                "style" != attribute.nodeName &&
                                input_element.attr(attribute.nodeName, attribute.nodeValue);
                        }),
                        uvselect[id].select.find("option[value='" + value + "']").length < 1)
                    ) {
                        var option = document.createElement("option");
                        option.setAttribute("value", value), uvselect[id].select[0].appendChild(option);
                    }
                    if (input_element.attr("multiple")) {
                        input_element.children("span").addClass("uv_hide");
                        var selected = [];
                        if (
                            ("" != input_element.attr("data-selected") &&
                                input_element
                                    .attr("data-selected")
                                    .split(",")
                                    .forEach(function (option) {
                                        selected.push(option);
                                    }),
                            -1 == selected.indexOf(value))
                        ) {
                            if ((selected.push(value), uvselect[id].templateSelection)) {
                                if (uvselect[id]["custom-ajax-result"]) {
                                    var options = uvselect[id]["custom-ajax-result"].results,
                                        obj = options.find(function (o) {
                                            return o.id === value;
                                        });
                                    void 0 === obj &&
                                        (obj = options.find(function (o) {
                                            return o.id === uvselect.escapeHTML(value);
                                        }));
                                    var custom_option = uvselect[id].templateSelection.call(this, obj);
                                } else var custom_option = uvselect[id].templateSelection.call(this, option);
                                uvselect.addCustomCardToMultiSelect(input_element, value, custom_option);
                            } else uvselect.addCardToMultiSelect(input_element, value, selected_option);
                            t.addClass("uv_hide"), uvselect.placeSelectOptionContainer(id);
                        }
                        if ((input_element.attr("data-selected", selected), value)) {
                            var sel_val = uvselect[id].select.val();
                            -1 == sel_val.indexOf(value) && sel_val.push(value), uvselect[id].select.val(sel_val).change();
                        }
                        $(".multiselect_search_input[jsid=" + id + "]").val("");
                    } else {
                        if (uvselect[id].templateSelection) {
                            var custom_selection_template = uvselect[id].templateSelection.call(this, option);
                            selectbox.innerHTML = custom_selection_template;
                        }
                        if (
                            (t.attr("country-code") || uvselect[id]["country-code"]
                                ? (input_element.val(t.attr("data-num")).change(), input_element.attr("selected-value", value))
                                : (input_element.val(selected_option).change(), input_element.attr("selected-value", value)),
                            t.attr("zoho-services") || uvselect[id]["zoho-services"])
                        ) {
                            var service_name = uvselect.escapeHTML(input_element.attr("data-service")),
                                org_name = uvselect.escapeHTML(input_element.attr("data-org_name"));
                            input_element.find(".uv_service_name").text(service_name).show(),
                                input_element.find(".uv_org_name").text(org_name).show(),
                                service_name == org_name ? input_element.find(".uv_service_name").hide() : "" == org_name && (input_element.find(".uv_service_name").hide(), input_element.find(".uv_org_name").text(service_name));
                        }
                        if (
                            (value ? uvselect[id].select.val(value).change() : uvselect[id].select.val(selected_option).change(),
                            t.children(".leading_icon").length > 0 &&
                                (input_element.attr("country-flag") || uvselect[id]["country-flag"]
                                    ? uvselect.selectFlag(id)
                                    : input_element.attr("zoho-services") || uvselect[id]["zoho-services"]
                                    ? uvselect.selectServiceIcon(id)
                                    : uvselect.embedSelectedIcon(t.children(".leading_icon"), input_element.siblings(".leading_icon"))),
                            uvselect[id].editSelectionMarkup)
                        ) {
                            var edited_selection_template = uvselect[id].editSelectionMarkup.call(this, selectbox);
                            selectbox.innerHTML = edited_selection_template;
                        }
                        uvselect[id] && uvselect[id]["onDropdown:select"] && uvselect[id]["onDropdown:select"].call(this, uvselect[id].select.find(":selected")[0], this),
                            q.siblings(".selectbox_search").children(".select_search_input").val(""),
                            q.children(".option").removeClass("uv_hide"),
                            uvselect.destroySelectDropdown(id);
                    }
                }),
            $(".select_search_input")
                .unbind("keyup")
                .on("keyup", function (event) {
                    if (38 != event.keyCode && 40 != event.keyCode && 13 != event.keyCode && 27 != event.keyCode) {
                        var t = $(this),
                            q = t.parent(),
                            id = t.attr("jsid"),
                            g = t.val().toLowerCase();
                        if ((q.parent().removeClass("uv_hide"), uvselect[id] && uvselect[id].ajax)) return void uvselect.make_ajax_call(id, g);
                        var multi_selected_options = [],
                            input_element = $(".select_input[jsid=" + id + "]");
                        if (input_element.attr("multiple")) var multi_selected_options = uvselect.getMultipleSelectedOptions(id);
                        var options = uvselect.getAllOptions(id),
                            arr = getArrayFromObj(options),
                            highlighted = !1;
                        arr.forEach(function (item) {
                            for (var s = "", children = $(item).children(), i = 0; i < children.length; i++) s = s + children[i].textContent.toLowerCase() + " ";
                            -1 != s.indexOf(g)
                                ? (-1 == multi_selected_options.indexOf($(item).attr("value")) && $(item).removeClass("uv_hide"),
                                  $(".no_result").addClass("uv_hide"),
                                  highlighted || (item.classList.add("option__highlighted"), item.scrollIntoView({ block: "nearest", inline: "nearest" })),
                                  (highlighted = !0))
                                : ($(item).addClass("uv_hide"), item.classList.remove("option__highlighted"), 0 == $(".selectbox_options .option").not(".uv_hide").length && $(".no_result").removeClass("uv_hide"));
                        });
                    }
                }),
            $(".multiselect_search_input")
                .unbind("keydown")
                .on("keydown", function (event) {
                    if (38 != event.keyCode && 40 != event.keyCode && 27 != event.keyCode) {
                        var t = $(this),
                            id = t.attr("jsid");
                        if (13 == event.keyCode) {
                            if (!uvselect[id]["custom-option-handler"]) return;
                            uvselect.default_custom_option_handler(this, $(this).val().toLowerCase()) && (t.val(""), event.preventDefault());
                        }
                        switch (event.keyCode) {
                            case 8:
                                if ("" == t.val()) {
                                    var last_child = t.siblings(".selected_cards_container").children().last(),
                                        value = last_child.attr("value");
                                    uvselect.deSelectFromMultiSelect(id, value), last_child.remove(), uvselect.placeSelectOptionContainer(id), t.focus(), event.preventDefault();
                                }
                        }
                    }
                });
    },
    click_listener: function (event) {
        !event || $(event.target).closest(".select_container").length || $(event.target).closest(".selectbox_options_container").length || uvselect.closeCurrentDropdown();
    },
    scroll_listener: function (event) {
        if (event && !$(event.target).closest(".selectbox_options").length && uvselect.getCurrentDropdown().length) {
            var id = uvselect.getCurrentDropdown().attr("jsid");
            uvselect.isElementInViewport(uvselect.getSelectboxByID(id)) && uvselect.placeSelectOptionContainer(id);
        }
    },
    window_resize_listener: function () {
        var u = uvselect.getCurrentDropdown(),
            id = u.attr("jsid");
        u.length > 0 && uvselect.placeSelectOptionContainer(id);
    },
    native_select_onchange_listener: function (event) {
        var native_select = $(event.target);
        uvselect.loadSelectData(native_select);
    },
    enable_responsive_input: function () {
        var t = $(".inline_selectbox .select_input")[0];
        (t.style.width = t.value.length + "ch"),
            $(".inline_selectbox .select_input")
                .unbind("change")
                .on("change", function () {
                    this.style.width = this.value.length + "ch";
                });
    },
    final_handlings: function (id) {
        var handle_container = !1;
        if (de("zcontiner") && "none" == de("zcontiner").style.display) {
            handle_container = !0;
            var visibility = de("zcontiner").style.visibility,
                display = de("zcontiner").style.display;
            (de("zcontiner").style.visibility = "hidden"), (de("zcontiner").style.display = "block");
        }
        uvselect.getSelectboxByID(id).outerHeight(!0) > 45 && uvselect.getSelectboxByID(id).children(".selectbox_arrow").children("b").css({ "border-width": "4px" }),
            handle_container && ((de("zcontiner").style.display = display), (de("zcontiner").style.visibility = visibility));
    },
    dropdown_final_handlings: function (id) {
        uvselect.getOptionsContainerByID(id).outerWidth(!0) && uvselect.getOptionsContainerByID(id).css({ width: uvselect.getOptionsContainerByID(id).outerWidth(!0) });
        var dropdown_header = uvselect.getOptionsContainerByID(id).children(".dropdown_header");
        (0 == dropdown_header.children().length || "" == dropdown_header[0].innerHTML) && dropdown_header.css("all", "unset");
    },
    make_ajax_call: function (id, query) {
        var aj = uvselect[id].ajax;
        if ("" != query) {
            var data_pre_obj = {};
            data_pre_obj.term = query;
        }
        $.ajax({
            url: aj.url,
            type: aj.type,
            dataType: aj.dataType,
            data: data_pre_obj ? aj.data.call(this, data_pre_obj) : "",
            success: function (data, params) {
                (uvselect[id]["ajax-result-data"] = data),
                    (uvselect[id]["ajax-result-params"] = params),
                    (uvselect[id]["custom-ajax-result"] = aj.processResults.call(this, data, params)),
                    uvselect.isDropdownOpen(id) && uvselect.createDropdownOptions(id, $(".selectbox_options[jsid=" + id + "]")[0], !1);
            },
            error: function (error) {
                aj.error.call(this, error);
            },
        });
    },
    default_custom_option_handler: function (element, value) {
        var id = $(element).attr("jsid");
        if ((uvselect[id]["custom-option-handler"] && (value = uvselect[id]["custom-option-handler"].call(this, element, value)), "" != value)) {
            var input_element = uvselect.getSelectInputByID(id);
            if (input_element.attr("multiple")) {
                input_element.children("span").addClass("uv_hide");
                var selected = [];
                if (
                    ("" != input_element.attr("data-selected") &&
                        input_element
                            .attr("data-selected")
                            .split(",")
                            .forEach(function (option) {
                                selected.push(option);
                            }),
                    -1 == selected.indexOf(value))
                ) {
                    if ((selected.push(value), uvselect[id]["custom-option-templateSelection"])) {
                        var custom_option = uvselect[id]["custom-option-templateSelection"].call(this, value);
                        uvselect.addCustomCardToMultiSelect(input_element, value, custom_option);
                    } else uvselect.addCardToMultiSelect(input_element, value, value);
                    uvselect.placeSelectOptionContainer(id);
                }
                if ((input_element.attr("data-selected", selected), uvselect[id].select.find("option[value='" + value + "']").length < 1)) {
                    var option = document.createElement("option");
                    option.setAttribute("value", value), uvselect[id].select[0].appendChild(option);
                }
                if (value) {
                    var sel_val = uvselect[id].select.val();
                    -1 == sel_val.indexOf(value) && sel_val.push(value), uvselect[id].select.val(sel_val).change();
                }
                return !0;
            }
        }
        return !1;
    },
};
$.fn.uvselect = function (obj) {
    return uvselect.initialize(this, obj);
};
var I18N = {
        data: {},
        load: function (arr) {
            return $.extend(this.data, arr), this;
        },
        get: function (key, args) {
            if ("object" == typeof key) {
                for (var i in key) key[i] = I18N.get(key[i]);
                return key;
            }
            var msg = this.data[key] || key;
            return args ? ((arguments[0] = msg), Util.format.apply(this, arguments)) : msg;
        },
    },
    Util = {
        euc: function (value) {
            return encodeURIComponent(value);
        },
        duc: function (value) {
            return decodeURIComponent(value);
        },
        format: function (msg) {
            if (msg) for (var i = 1; i < arguments.length; i++) msg = msg.replace(new RegExp("\\{" + (i - 1) + "\\}", "g"), arguments[i]);
            return msg;
        },
    };
(PasswordPolicy = {
    data: {},
    load: function (arr) {
        return $.extend(this.data, arr), this;
    },
    isHaveMinLength: function (password) {
        return password.length >= this.data.min_length;
    },
    isHavingSpecialChars: function (password) {
        return (password.match(new RegExp("[^a-zA-Z0-9]", "g")) || []).length >= this.data.min_spl_chars;
    },
    isHavingNumber: function (password) {
        return (password.match(new RegExp("[0-9]", "g")) || []).length >= this.data.min_numeric_chars;
    },
    isHavingUpperCase: function (password) {
        return new RegExp("[A-Z]", "g").test(password);
    },
    isHavingLowerCase: function (password) {
        return new RegExp("[a-z]", "g").test(password);
    },
}),
    $(window).resize(function () {
        setFooterPosition();
    }),
    $("document").ready(function () {
        setFooterPosition(),
            ($.fn.focus = function () {
                return this.length && $(this)[0].focus(), $(this);
            });
    }),
    $(function () {
        $("input").keyup(function () {
            $(".error_notif").remove();
        });
    });
var signinathmode = "lookup",
    reload_page = "",
    isFormSubmited = (isPasswordless = isSecondary = isPrimaryDevice = isTroubleSignin = isRecovery = isCountrySelected = isFaceId = isPrimaryMode = isEmailVerifyReqiured = triggeredUser = !1),
    allowedmodes,
    digest,
    rmobile,
    zuid,
    temptoken,
    mdigest,
    deviceid,
    prefoption,
    devicename,
    emobile,
    deviceauthdetails,
    cdigest,
    isResend,
    redirectUri,
    secondarymodes,
    prev_showmode,
    qrtempId,
    mobposition,
    bioType,
    restrictTrustMfa,
    resendTimer,
    trustMfaDays,
    bannerTimer,
    oldsigninathmode,
    emailposition,
    callmode = "primary",
    oadevicepos = (mzadevicepos = 0),
    adminEmail,
    contactAdminHelpdoc = "",
    AMFAotpThreshold,
    MFAotpThresholdmob,
    resendcheck,
    prevoption,
    wmscount = 0,
    _time,
    verifyCount = 0,
    totalCount = 0,
    isWmsRegistered = !1,
    wmscallmode,
    wmscallapp,
    wmscallid,
    PriotpThreshold = 3,
    validatePasswordPolicy = (function () {
        var passwordPolicy = void 0,
            initCallback = function (id, msg) {
                var li = document.createElement("li");
                return li.setAttribute("id", "pp_" + id), li.setAttribute("class", "pass_policy_rule"), (li.textContent = msg), li;
            },
            setErrCallback = function (id) {
                return $("#pp_" + id).removeClass("success"), id;
            };
        return {
            getErrorMsg: function (value, callback) {
                if (passwordPolicy) {
                    var isInit = value ? !1 : !0;
                    (value = value || ""), (callback = callback || setErrCallback);
                    var rules = ["MIN_MAX", "SPL", "NUM", "CASE"],
                        err_rules = [];
                    isInit || $(".pass_policy_rule").addClass("success");
                    for (var i = 0; i < rules.length; i++)
                        switch (rules[i]) {
                            case "MIN_MAX":
                                (value.length < passwordPolicy.min_length || value.length > passwordPolicy.max_length) &&
                                    err_rules.push(callback(rules[i], isInit ? formatMessage(I18N.get("IAM.PASS_POLICY.MIN_MAX"), passwordPolicy.min_length.toString(), passwordPolicy.max_length.toString()) : void 0));
                                break;
                            case "SPL":
                                passwordPolicy.min_spl_chars > 0 &&
                                    (value.match(new RegExp("[^a-zA-Z0-9]", "g")) || []).length < passwordPolicy.min_spl_chars &&
                                    err_rules.push(
                                        callback(rules[i], isInit ? formatMessage(I18N.get(1 === passwordPolicy.min_spl_chars ? "IAM.PASS_POLICY.SPL_SING" : "IAM.PASS_POLICY.SPL"), passwordPolicy.min_spl_chars.toString()) : void 0)
                                    );
                                break;
                            case "NUM":
                                passwordPolicy.min_numeric_chars > 0 &&
                                    (value.match(new RegExp("[0-9]", "g")) || []).length < passwordPolicy.min_numeric_chars &&
                                    err_rules.push(
                                        callback(rules[i], isInit ? formatMessage(I18N.get(1 === passwordPolicy.min_numeric_chars ? "IAM.PASS_POLICY.NUM_SING" : "IAM.PASS_POLICY.NUM"), passwordPolicy.min_numeric_chars.toString()) : void 0)
                                    );
                                break;
                            case "CASE":
                                !passwordPolicy.mixed_case || (new RegExp("[A-Z]", "g").test(value) && new RegExp("[a-z]", "g").test(value)) || err_rules.push(callback(rules[i], isInit ? I18N.get("IAM.PASS_POLICY.CASE") : void 0));
                        }
                    return err_rules.length && err_rules;
                }
            },
            init: function (policy, passInputID) {
                (passwordPolicy = policy), $(".hover-tool-tip").remove();
                var tooltip = document.createElement("div");
                tooltip.setAttribute("class", isMobile ? "hover-tool-tip no-arrow" : "hover-tool-tip");
                var p = document.createElement("p");
                p.textContent = I18N.get("IAM.PASS_POLICY.HEADING");
                var ul = document.createElement("ul"),
                    errList = this.getErrorMsg(void 0, initCallback);
                errList &&
                    (errList.forEach(function (eachLi) {
                        ul.appendChild(eachLi);
                    }),
                    tooltip.appendChild(p),
                    tooltip.appendChild(ul),
                    document.querySelector("body").appendChild(tooltip),
                    $(passInputID).on("focus blur", function (e) {
                        if ("focus" === e.type) {
                            var offset = document.querySelector(passInputID).getBoundingClientRect();
                            $(".hover-tool-tip").css(isMobile ? { top: offset.bottom + $(window).scrollTop() + 8, left: offset.x, width: offset.width - 40 } : { top: offset.y + $(window).scrollTop(), left: offset.x + offset.width + 15 }),
                                $(".hover-tool-tip").css("opacity", 1);
                        } else {
                            $(".hover-tool-tip").css("opacity", 0);
                            var offset = document.querySelector(".hover-tool-tip").getBoundingClientRect();
                            $(".hover-tool-tip").css({ top: -offset.height, left: -(offset.width + 15) });
                        }
                    }));
            },
            validate: function (passInputID) {
                remove_error();
                var str = $(passInputID).val();
                this.getErrorMsg(str, setErrCallback);
            },
        };
    })();
(WmsliteImpl.serverdown = function () {}),
    (WmsliteImpl.serverup = function () {}),
    (WmsliteImpl.handleLogout = function () {
        $(window).unbind("beforeunload"),
            sendRequestWithCallback(contextpath + "/u/clearusercache", "nocache=" + new Date().getTime(), !0, function () {
                window.location.reload();
            });
    }),
    (WmsliteImpl.handleMessage = function (mtype, msgObj) {
        mtype && "37" === mtype
            ? sendRequestWithCallback(contextpath + "/u/clearusercache", "nocache=" + new Date().getTime(), !0, function () {})
            : mtype && "2" == mtype && ("checkStatus" == msgObj ? isVerifiedFromDevice() : "checkisDisableApproved" == msgObj && isDisableApproved());
    }),
    (WmsliteImpl.handleAccountDisabled = function () {}),
    (WmsliteImpl.handleServiceMessage = function () {});
var splitField = {
    option: { splitCount: 6, charCountPerSplit: 1, separator: "", separateBetween: 0, isIpAddress: !1, isNumeric: !1, otpAutocomplete: !1, customClass: "", inputPlaceholder: "", placeholder: "" },
    isBackSpace: !1,
    arrowKeyCode: 0,
    createElement: function (ele, option) {
        (void 0 == option || "" == option || 0 == Object.keys(option).length) && (option = splitField.option),
            (option.splitCount = void 0 == option.splitCount ? splitField.option.splitCount : option.splitCount),
            (option.otpAutocomplete = void 0 == option.otpAutocomplete ? splitField.option.otpAutocomplete : option.otpAutocomplete),
            (option.separateBetween = void 0 == option.separateBetween ? splitField.option.separateBetween : option.separateBetween),
            (option.charCountPerSplit = void 0 == option.charCountPerSplit ? splitField.option.charCountPerSplit : option.charCountPerSplit),
            (option.customClass = void 0 == option.customClass ? splitField.option.customClass : option.customClass),
            (option.isIpAddress = void 0 == option.isIpAddress ? splitField.option.isIpAddress : option.isIpAddress),
            (option.separator = void 0 == option.separator ? splitField.option.separator : option.separator),
            (option.inputPlaceholder = void 0 == option.inputPlaceholder ? splitField.option.inputPlaceholder : option.inputPlaceholder),
            (option.placeholder = void 0 == option.placeholder ? splitField.option.placeholder : option.placeholder),
            option.isIpAddress && ((option.splitCount = 4), (option.charCountPerSplit = 3), (option.isNumeric = !0)),
            (document.getElementById(ele).innerHTML = "");
        var full_value = document.createElement("input");
        full_value.setAttribute("type", "hidden"),
            full_value.setAttribute("class", ele + "_full_value"),
            full_value.setAttribute("id", ele + "_full_value"),
            document.getElementById(ele).appendChild(full_value),
            option.placeholder.length > 0 && document.getElementById(ele).setAttribute("placeholder", option.placeholder);
        for (var i = 0; i < option.splitCount; i++) {
            var input = document.createElement("input");
            if ((input.setAttribute("type", "tel"), input.setAttribute("tabindex", 0), option.inputPlaceholder.length > 0)) {
                var placeholder_text = document.createElement("span");
                (placeholder_text.innerHTML = option.inputPlaceholder), (input.placeholder = placeholder_text.textContent);
            }
            if (
                (input.classList.add("splitedText"),
                input.classList.add("empty_field"),
                input.classList.add(ele + "_otp"),
                input.classList.add("limit_" + option.charCountPerSplit),
                "" != option.customClass && input.classList.add(option.customClass),
                option.isIpAddress && input.classList.add("ip_field"),
                option.isNumeric && input.classList.add("isNumeric"),
                option.otpAutocomplete && input.setAttribute("autocomplete", "one-time-code"),
                option.placeholder.length > 0 && (input.style.opacity = "0"),
                document.getElementById(ele).appendChild(input),
                (i + 1) % option.separateBetween == 0 && i != option.splitCount - 1)
            ) {
                var hyphen = document.createElement("span");
                hyphen.classList.add("separator_symbol"), hyphen.classList.add(ele + "_split_symbol"), (hyphen.innerHTML = option.separator), document.getElementById(ele).appendChild(hyphen);
            }
        }
        document.querySelector("#" + ele).removeEventListener("click", function () {}, !0),
            document.querySelector("#" + ele).addEventListener("click", function () {
                null != document.querySelector("#" + ele + " .empty_field") ? document.querySelector("#" + ele + " .empty_field").click() : document.querySelectorAll("#" + ele + " .valid_otp")[option.splitCount - 1].click();
            });
        for (var i = 0; i < document.querySelectorAll("#" + ele + " ." + ele + "_otp").length; i++) {
            var otpEl = document.querySelectorAll("#" + ele + " ." + ele + "_otp")[i];
            otpEl.addEventListener("keydown", splitField.keyPressAnalysing),
                otpEl.addEventListener("keydown", splitField.backSpControl),
                otpEl.addEventListener("click", splitField.input_selecter),
                otpEl.addEventListener("click", function () {
                    splitField.focusField(this, ele, option);
                }),
                otpEl.addEventListener("input", splitField.OTP_count_Analysing),
                otpEl.addEventListener("focus", function (ele) {
                    ele.target.parentNode.classList.add("focused_input");
                }),
                otpEl.addEventListener("focusout", function (ele) {
                    splitField.checkFieldValue(), ele.target.parentNode.classList.remove("focused_input");
                }),
                otpEl.addEventListener("paste", splitField.pasteHandling),
                option.placeholder.length > 0 &&
                    (otpEl.addEventListener("focus", function (ele) {
                        ele.target.parentNode.classList.add("hidePlaceHolder");
                        for (var i = 0; i < ele.target.parentNode.childNodes.length; i++) ele.target.parentNode.childNodes[i].style.opacity = "1";
                    }),
                    otpEl.addEventListener("focusout", function (ele) {
                        if (0 == ele.target.parentNode.querySelector("input").value.length) {
                            ele.target.parentNode.classList.remove("hidePlaceHolder");
                            for (var i = 0; i < ele.target.parentNode.childNodes.length; i++) ele.target.parentNode.childNodes[i].style.opacity = "0";
                        }
                    }));
        }
    },
    getParent: function (el, tagName) {
        for (tagName = tagName.toLowerCase(); el && el.parentNode; ) if (((el = el.parentNode), el.tagName && el.tagName.toLowerCase() == tagName)) return el;
        return null;
    },
    focusField: function (curEle, ele, option) {
        return curEle.classList && curEle.classList.contains("valid_otp")
            ? (curEle.focus(), !1)
            : document.querySelectorAll("#" + ele + " .valid_otp").length >= option.splitCount && 0 != document.querySelectorAll("#" + ele + " .valid_otp").length
            ? (document.querySelectorAll("#" + ele + " input[type=tel]")[option.splitCount - 1].focus(), !1)
            : void document.querySelectorAll("#" + ele + " .empty_field")[0].focus();
    },
    checkFieldValue: function () {
        for (var i = 0; i < document.querySelectorAll(".splitedText").length; i++) {
            var ele = document.querySelectorAll(".splitedText")[i];
            "" != ele.value ? ele.classList.add("valid_otp") : ele.classList.remove("valid_otp"), "" == ele.value ? ele.classList.add("empty_field") : ele.classList.remove("empty_field");
        }
    },
    setFullValue: function (ele) {
        var full_value_array = [];
        ele = null != ele.parentNode ? ele : ele.target;
        for (var childinputs = ele.parentNode.querySelectorAll("input"), splitCount = childinputs.length, j = 0; splitCount > j; j++)
            if (childinputs[j].classList.contains("ip_field")) {
                if ((full_value_array.push(childinputs[j].value), childinputs[j] != childinputs[childinputs.length - 1])) {
                    if ("" == childinputs[j].value) break;
                    full_value_array.push(".");
                }
            } else void 0 != childinputs[j].value && childinputs[0] != childinputs[j] && full_value_array.push(childinputs[j].value);
        (full_value_array = full_value_array.join("")), (document.querySelector("#" + ele.parentNode.id + "_full_value").value = full_value_array);
    },
    autoFillOtp: function (otp_data, eve) {
        var valueTarget = eve.target ? eve.target : eve;
        if (splitField.isBackSpace) return !1;
        (otp_data = otp_data.split("")), (splitCount = valueTarget.parentNode.querySelectorAll("input").length - 1), (charCountPerSplit = parseInt(valueTarget.className.split("limit_")[1].match(/(\d+)/)[0]));
        var ele_length = otp_data.length < splitCount ? otp_data.length : splitCount;
        (ele_length = charCountPerSplit > 1 ? otp_data.length : ele_length), (cur_ele = valueTarget), (cur_ele.value = "");
        for (var i = 0; ele_length > i && null != cur_ele; i++)
            if (charCountPerSplit > 1) {
                if (0 != i && i % charCountPerSplit == 0) {
                    if (((cur_ele.value = cur_ele.value.slice(0, charCountPerSplit)), (cur_ele = cur_ele.nextElementSibling), null == cur_ele)) break;
                    cur_ele.value = "";
                }
                cur_ele.value = cur_ele.value + otp_data[i];
            } else (cur_ele.value = otp_data[i]), (cur_ele = cur_ele.nextElementSibling), null != cur_ele && cur_ele.classList.contains("separator_symbol") && (cur_ele = cur_ele.nextElementSibling);
        null == cur_ele ? (valueTarget.classList.contains("ip_field") ? valueTarget.focus() : document.querySelectorAll("#" + valueTarget.parentNode.id + " .splitedText")[splitCount - 1].focus()) : cur_ele.focus(),
            splitField.setFullValue(valueTarget),
            splitField.checkFieldValue();
    },
    backSpControl: function (event) {
        if (splitField.isBackSpace) {
            if (0 != splitField.arrowKeyCode) return !1;
            var prev = this.previousElementSibling;
            if (((charCountPerSplit = parseInt(this.className.split("limit_")[1].match(/(\d+)/)[0])), null == prev)) return !1;
            prev.classList.contains("separator_symbol") && (prev = prev.previousElementSibling),
                splitField.checkFieldValue(),
                "" != this.value && 1 >= charCountPerSplit
                    ? ((this.value = ""), prev.focus(), prev.select(), event.preventDefault())
                    : charCountPerSplit > 1
                    ? "" == this.value && (prev.focus(), prev.select(), event.preventDefault())
                    : ((prev.value = ""), prev.focus(), prev.select(), event.preventDefault()),
                splitField.setFullValue(this);
        }
    },
    pasteHandling: function (event, otpvalue) {
        var paste = "undefined" == typeof otpvalue ? (event.clipboardData || window.clipboardData).getData("text").split(/ /gi).join("") : otpvalue,
            allowToPaste = !0;
        if (this.classList.contains("ip_field")) {
            if (-1 != paste.indexOf(".")) {
                paste = paste.split(".");
                for (var x in paste)
                    if (paste[x].length > 3 || 0 == paste[x].length) {
                        allowToPaste = !1;
                        break;
                    }
            } else allowToPaste = !1;
            if (!allowToPaste) return event && event.preventDefault(), this.focus(), !1;
            paste_ele = this;
            for (var i = 0; i < paste.length && ((paste_ele.value = paste[i]), paste_ele.focus(), (paste_ele = paste_ele.nextElementSibling), null != paste_ele); i++)
                paste_ele = paste_ele.classList.contains("separator_symbol") ? paste_ele.nextElementSibling : paste_ele;
            splitField.setFullValue(this);
        } else {
            if ((this.classList.contains("isNumeric") && (paste = paste.split(/[^0-9]/gi).join("")), null == paste)) return event && event.target.focus(), event && event.preventDefault(), !1;
            event ? splitField.autoFillOtp(paste, event) : "";
        }
        event && event.preventDefault();
    },
    OTP_count_Analysing: function (event) {
        if ((splitField.setFullValue(this), splitField.isBackSpace)) return !1;
        charCountPerSplit = parseInt(this.className.split("limit_")[1].match(/(\d+)/)[0]);
        var valid_otp = this.classList.contains("isNumeric") ? this.value.split(/[^0-9]/gi).join("") : this.value,
            nexEl = this.nextElementSibling;
        if ((null != nexEl && nexEl.classList.contains("separator_symbol") && (nexEl = nexEl.nextElementSibling), valid_otp.length < 2))
            if (nexEl && "" != valid_otp) {
                if (((this.value = valid_otp[0]), splitField.checkFieldValue(), this.classList.contains("change_otp_ele"))) {
                    for (var i = 0; i < this.parentNode.querySelectorAll("input").length - (1 + document.querySelectorAll("#" + this.parentElement.id + " .separator_symbol").length); i++)
                        document.getElementsByClassName("splitedText")[i].classList.remove("change_otp_ele");
                    nexEl.classList.add("change_otp_ele");
                }
                this.value.length > charCountPerSplit - 1 && (nexEl.focus(), nexEl.select(), 1 >= charCountPerSplit ? nexEl.select() : "");
            } else this.value = valid_otp.slice(0, charCountPerSplit);
        else splitField.isBackSpace || splitField.autoFillOtp(valid_otp, event);
        splitField.setFullValue(this);
    },
    input_selecter: function (e) {
        if ((e.stopPropagation(), splitField.isBackSpace)) return !1;
        if (void 0 == this.value) return !1;
        this.select();
        for (var i = 0; i < this.parentNode.querySelectorAll("input").length - 1; i++) document.getElementsByClassName("splitedText")[i].classList.remove("change_otp_ele");
        "" != this.value && this.classList.add("change_otp_ele");
    },
    keyPressAnalysing: function (event) {
        if (13 == event.keyCode && null != splitField.getParent(event.target, "for")) return (splitField.isBackSpace = !1), event.stopPropagation(), event.preventDefault(), splitField.getParent(event.target, "form").requestSubmit(), !1;
        (splitField.arrowKeyCode = 39 == event.keyCode || 37 == event.keyCode ? event.keyCode : 0), (splitField.isBackSpace = 8 == event.keyCode || 46 == event.keyCode ? !0 : !1);
        var escapeNum = this.classList.contains("isNumeric") && !((48 <= event.keyCode && event.keyCode <= 57) || 37 == event.keyCode || 39 == event.keyCode);
        if (escapeNum) return !1;
        if (splitField.isBackSpace && 0 == splitField.arrowKeyCode) return !1;
        var sibs = splitField.getNextSiblings(this),
            nexEl = this.nextElementSibling && "INPUT" === this.nextElementSibling.nodeName ? this.nextElementSibling : sibs[0] ? sibs[0] : this.nextElementSibling;
        nexEl &&
            null != this.value &&
            !this.classList.contains("change_otp_ele") &&
            (splitField.checkFieldValue(),
            (charCountPerSplit = parseInt(this.className.split("limit_")[1].match(/(\d+)/)[0])),
            null != document.activeElement && (3 == this.value.length || this.classList.contains("ip_field") || (this.value == document.activeElement.value && document.activeElement === this && (nexEl = this))),
            charCountPerSplit > 1 ? this.value.length > charCountPerSplit - 1 && 9 != event.keyCode && (nexEl.focus(), nexEl.select()) : 9 != event.keyCode && (nexEl.focus(), nexEl.select())),
            37 == splitField.arrowKeyCode && this.previousElementSibling && this.previousElementSibling.classList.contains("splitedText")
                ? (event.preventDefault(), this.previousElementSibling.focus(), this.previousElementSibling.select())
                : 39 == splitField.arrowKeyCode && this.nextElementSibling && this.nextElementSibling.classList.contains("splitedText")
                ? (event.preventDefault(), this.nextElementSibling.focus(), this.nextElementSibling.select())
                : (37 == splitField.arrowKeyCode || 39 == splitField.arrowKeyCode) && (this.focus(), this.select());
    },
    getNextSiblings: function (elem) {
        for (var sibs = []; (elem = elem.nextElementSibling); ) "INPUT" === elem.nodeName && sibs.push(elem);
        return sibs;
    },
    getValue: function (ele) {
        return document.getElementById(ele + "_full_value").value;
    },
    setValue: function (id, val) {
        var ele = document.getElementById(id).children[1];
        if (ele.classList.contains("ip_field")) {
            if (-1 != val.indexOf(".")) {
                val = val.split(".");
                for (var x in val) if (val[x].length > 3 || 0 == val[x].length) break;
            }
            paste_ele = ele;
            for (var i = 0; i < val.length && ((paste_ele.value = val[i]), paste_ele.focus(), (paste_ele = paste_ele.nextElementSibling), null != paste_ele); i++)
                paste_ele = paste_ele.classList.contains("separator_symbol") ? paste_ele.nextElementSibling : paste_ele;
            splitField.setFullValue(ele);
        } else ele.classList.contains("isNumeric") && (val = val.split(/[^0-9]/gi).join("")), splitField.autoFillOtp(val, ele);
    },
};
