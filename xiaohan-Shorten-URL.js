<!DOCTYPE html>

<html lang="zh-cn"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shorten-URL</title>
    <style>
        body,
        html {
            margin: 0;
            padding: 0;
            height: 100%;
            background-image: linear-gradient(-20deg, #d0b782 20%, #a0cecf 80%)
        }

        input[type=text] {
            border: none;
            text-align: center;
            outline: none;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .card {
            width: 800px;
            background-color: #ebedee;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #9b9ea0;
        }

        h2 {
            text-align: center;
            background-color: #dbdfe0a8;
            margin: 0;
            padding: 10px;
            border-bottom: 1px solid #9b9ea0;
            font-size: 20px;
        }

        .form-group {
            padding: 5px 20px 20px 20px;
            box-sizing: border-box;
            width: 100%;
        }

        .form-group>label {
            width: 100px;
            line-height: 40px;
            font-size: 18px;
        }

        .form-group>input {
            width: 100%;
            line-height: 28px;
            font-size: 18px;
            padding: 8px;
            border-radius: 5px;
            box-sizing: border-box;
        }

        .form-group>#submit {
            width: 75%;
            line-height: 40px;
            font-size: 18px;
            background-color: #61bee9;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: auto;
            margin-top: 20px;
            display: block;
        }


        /* 遮罩层 */
        .dialog {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            opacity: 0;
            justify-content: center;
            /* align-items: center; */
            z-index: -1;
            transition: opacity .4s ease-out, all .2s;
            transform: translateZ(0);
        }

        /* 弹窗 */
        .dialog-content {
            width: 450px;
            margin-top: 0;
            height: fit-content;
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #9b9ea0;
            transition: margin-top .4s ease-out;
        }

        .dialog-content>.dialog-header {
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            line-height: 56px;
            font-size: 25px;
            border-bottom: 1px solid #9b9ea0;
            display: flex;
            justify-content: space-between;
        }

        .dialog-content>.dialog-header>.dialog-close {
            cursor: pointer;
            /* 不可选中 */
            user-select: none;
        }

        .dialog-content>.dialog-body {
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #9b9ea0;
            font-size: 19px;
        }

        .dialog-content>.dialog-footer {
            width: 100%;
            display: flex;
            justify-content: center;
            padding-bottom: 20px;
        }

        .dialog-content>.dialog-footer>button {
            width: 90px;
            line-height: 35px;
            font-size: 18px;
            background-color: #61bee9;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: auto;
            margin-top: 20px;
            display: block;
        }

        /* 显示弹窗 */
        .dialog-show {
            opacity: 1;
            z-index: 100;
        }

        .dialog-show>.dialog-content {
            margin-top: 20px;
        }
        footer{
            position: fixed;
            bottom: 5px;
            width: 100%;;
            text-align: center;
            
            font-size: 18px;
        }
        footer p{
            color: #666;
            margin: 0;
            height: 30px;
            line-height: 30px;
        }
        footer a{
            color: #666;
            text-decoration: none;
        }
        footer a:hover{
            color: #61bee9;
            text-decoration: underline;
        }
    </style>
<script type="text/javascript" nonce="e3816e913bea43edb4631a084e0" src="./Shorten-URL_files/saved_resource"></script>
<script type="text/javascript" nonce="e3816e913bea43edb4631a084e0" src="./Shorten-URL_files/saved_resource(1)"></script><style type="text/css">.simpread-theme-root{font-size:62.5%!important}sr-rd-content,sr-rd-desc,sr-rd-title{width:100%}sr-rd-title{display:-webkit-box;margin:1em 0 .5em;overflow:hidden;text-overflow:ellipsis;text-rendering:optimizelegibility;-webkit-line-clamp:3;-webkit-box-orient:vertical}sr-rd-content{text-align:left;word-break:break-word}sr-rd-desc{text-align:justify;line-height:2.4;margin:0 0 1.2em;box-sizing:border-box}sr-rd-content{font-size:25.6px;font-size:1.6rem;line-height:1.6}sr-rd-content h1,sr-rd-content h1 *,sr-rd-content h2,sr-rd-content h2 *,sr-rd-content h3,sr-rd-content h3 *,sr-rd-content h4,sr-rd-content h4 *,sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{word-break:break-all}sr-rd-content div,sr-rd-content p{display:block;float:inherit;line-height:1.6;font-size:25.6px;font-size:1.6rem}sr-rd-content div,sr-rd-content p,sr-rd-content pre,sr-rd-content sr-blockquote{margin:0 0 1.2em;word-break:break-word}sr-rd-content a{padding:0 5px;vertical-align:baseline;vertical-align:initial}sr-rd-content a,sr-rd-content a:link{color:inherit;font-size:inherit;font-weight:inherit;border:none}sr-rd-content a:hover{background:transparent}sr-rd-content img{margin:10px;padding:5px;max-width:100%;background:#fff;border:1px solid #bbb;box-shadow:1px 1px 3px #d4d4d4}sr-rd-content figcaption{text-align:center;font-size:14px}sr-rd-content sr-blockquote{display:block;position:relative;padding:15px 25px;text-align:left;line-height:inherit}sr-rd-content sr-blockquote:before{position:absolute}sr-rd-content sr-blockquote *{margin:0;font-size:inherit}sr-rd-content table{width:100%;margin:0 0 1.2em;word-break:keep-all;word-break:normal;overflow:auto;border:none}sr-rd-content table td,sr-rd-content table th{border:none}sr-rd-content ul{margin:0 0 1.2em;margin-left:1.3em;padding:0;list-style:disc}sr-rd-content ol{list-style:decimal;margin:0;padding:0}sr-rd-content ol li,sr-rd-content ul li{font-size:inherit;list-style:disc;margin:0 0 1.2em}sr-rd-content ol li{list-style:decimal;margin-left:1.3em}sr-rd-content ol li *,sr-rd-content ul li *{margin:0;text-align:left;text-align:initial}sr-rd-content li ol,sr-rd-content li ul{margin-bottom:.8em;margin-left:2em}sr-rd-content li ul{list-style:circle}sr-rd-content pre{font-family:Consolas,Monaco,Andale Mono,Source Code Pro,Liberation Mono,Courier,monospace;display:block;padding:15px;line-height:1.5;word-break:break-all;word-wrap:break-word;white-space:pre;overflow:auto}sr-rd-content pre,sr-rd-content pre *,sr-rd-content pre div{font-size:17.6px;font-size:1.1rem}sr-rd-content li pre code,sr-rd-content p pre code,sr-rd-content pre{background-color:transparent;border:none}sr-rd-content pre code{margin:0;padding:0}sr-rd-content pre code,sr-rd-content pre code *{font-size:17.6px;font-size:1.1rem}sr-rd-content pre p{margin:0;padding:0;color:inherit;font-size:inherit;line-height:inherit}sr-rd-content li code,sr-rd-content p code{margin:0 4px;padding:2px 4px;font-size:17.6px;font-size:1.1rem}sr-rd-content mark{margin:0 5px;padding:2px;background:#fffdd1;border-bottom:1px solid #ffedce}.sr-rd-content-img{width:90%;height:auto}.sr-rd-content-img-load{width:48px;height:48px;margin:0;padding:0;border-style:none;border-width:0;background-repeat:no-repeat;background-image:url(data:image/gif;base64,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)}.sr-rd-content-center{text-align:center;display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;-webkit-box-orient:vertical}.sr-rd-content-center-small{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.sr-rd-content-center-small img{margin:0;padding:0;border:0;box-shadow:none}img.simpread-img-broken{cursor:pointer}.sr-rd-content-nobeautify{margin:0;padding:0;border:0;box-shadow:0 0 0}sr-rd-mult{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin:0 0 16px;padding:16px 0 24px;width:100%;background-color:#fff;border-radius:4px;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)}sr-rd-mult:hover{-webkit-transition:all .45s 0ms;transition:all .45s 0ms;box-shadow:1px 1px 8px rgba(0,0,0,.16)}sr-rd-mult sr-rd-mult-content{padding:0 16px;overflow:auto}sr-rd-mult sr-rd-mult-avatar,sr-rd-mult sr-rd-mult-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}sr-rd-mult sr-rd-mult-avatar{-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 15px}sr-rd-mult sr-rd-mult-avatar span{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;max-width:75px;overflow:hidden;text-overflow:ellipsis;text-align:left;font-size:16px;font-size:1rem}sr-rd-mult sr-rd-mult-avatar img{margin-bottom:0;max-width:50px;max-height:50px;width:50px;height:50px;border-radius:50%}sr-rd-mult sr-rd-mult-content img{max-width:80%}sr-rd-mult sr-rd-mult-avatar .sr-rd-content-center{margin:0}sr-page{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%}</style><style type="text/css">sr-rd-theme-github{display:none}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{position:relative;margin-top:1em;margin-bottom:1pc;font-weight:700;line-height:1.4;text-align:left;color:#363636}sr-rd-content h1{padding-bottom:.3em;font-size:57.6px;font-size:3.6rem;line-height:1.2}sr-rd-content h2{padding-bottom:.3em;font-size:44.8px;font-size:2.8rem;line-height:1.225}sr-rd-content h3{font-size:38.4px;font-size:2.4rem;line-height:1.43}sr-rd-content h4{font-size:32px;font-size:2rem}sr-rd-content h5,sr-rd-content h6{font-size:25.6px;font-size:1.6rem}sr-rd-content h6{color:#777}sr-rd-content ol,sr-rd-content ul{list-style-type:disc;padding:0;padding-left:2em}sr-rd-content ol ol,sr-rd-content ul ol{list-style-type:lower-roman}sr-rd-content ol ol ol,sr-rd-content ol ul ol,sr-rd-content ul ol ol,sr-rd-content ul ul ol{list-style-type:lower-alpha}sr-rd-content table{width:100%;overflow:auto;word-break:normal;word-break:keep-all}sr-rd-content table th{font-weight:700}sr-rd-content table td,sr-rd-content table th{padding:6px 13px;border:1px solid #ddd}sr-rd-content table tr{background-color:#fff;border-top:1px solid #ccc}sr-rd-content table tr:nth-child(2n){background-color:#f8f8f8}sr-rd-content sr-blockquote{border-left:4px solid #ddd}.simpread-theme-root{background-color:#fff;color:#333}sr-rd-title{font-family:PT Sans,SF UI Display,\.PingFang SC,PingFang SC,Neue Haas Grotesk Text Pro,Arial Nova,Segoe UI,Microsoft YaHei,Microsoft JhengHei,Helvetica Neue,Source Han Sans SC,Noto Sans CJK SC,Source Han Sans CN,Noto Sans SC,Source Han Sans TC,Noto Sans CJK TC,Hiragino Sans GB,sans-serif;font-size:54.4px;font-size:3.4rem;font-weight:700;line-height:1.3}sr-rd-desc{position:relative;margin:0;margin-bottom:30px;padding:25px;padding-left:56px;font-size:28.8px;font-size:1.8rem;color:#777;background-color:rgba(0,0,0,.05);box-sizing:border-box}sr-rd-desc:before{content:"\201C";position:absolute;top:-28px;left:16px;font-size:80px;font-family:Arial;color:rgba(0,0,0,.15)}sr-rd-content,sr-rd-content *,sr-rd-content div,sr-rd-content p{color:#363636;font-weight:400;line-height:1.8}sr-rd-content b *,sr-rd-content strong,sr-rd-content strong * sr-rd-content b{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-o-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;-moz-columns:auto;columns:auto;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;-o-tab-size:8;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial}sr-rd-content a,sr-rd-content a:link{color:#4183c4;text-decoration:none}sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover{color:#4183c4;text-decoration:underline}sr-rd-content pre{background-color:#f7f7f7;border-radius:3px}sr-rd-content li code,sr-rd-content p code{background-color:rgba(0,0,0,.04);border-radius:3px}.simpread-multi-root{background:#f8f9fa}</style><style type="text/css">sr-rd-theme-newsprint{display:none}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{font-weight:700}sr-rd-content h1{font-size:48px;font-size:3rem;line-height:1.6em;margin-top:2em}sr-rd-content h2,sr-rd-content h3{font-size:32px;font-size:2rem;line-height:1.15;margin-top:2.285714em;margin-bottom:1.15em}sr-rd-content h3{font-weight:400}sr-rd-content h4{font-size:28.8px;font-size:1.8rem;margin-top:2.67em}sr-rd-content h5,sr-rd-content h6{font-size:25.6px;font-size:1.6rem}sr-rd-content h1{border-bottom:1px solid;margin-bottom:1.875em;padding-bottom:.8125em}sr-rd-content ol,sr-rd-content ul{margin:0 0 1.5em 1.5em}sr-rd-content ol li{list-style-type:decimal;list-style-position:outside}sr-rd-content ul li{list-style-type:disc;list-style-position:outside}sr-rd-content table{width:100%;margin-bottom:1.5em;font-size:25.6px;font-size:1.6rem}sr-rd-content thead th,tfoot th{padding:.25em .25em .25em .4em;text-transform:uppercase}sr-rd-content th{text-align:left}sr-rd-content td{vertical-align:top;padding:.25em .25em .25em .4em}sr-rd-content thead{background-color:#dadada}sr-rd-content tr:nth-child(2n){background:#e8e7e7}sr-rd-content sr-blockquote{padding:10px 15px;border-left-style:solid;border-left-width:10px;border-color:#d6dbdf;background:none repeat scroll 0 0 rgba(102,128,153,.05);text-align:left}sr-rd-content sr-blockquote:before{content:""}.simpread-multi-root,.simpread-theme-root{background-color:#f3f2ee;color:#2c3e50}sr-rd-title{font-family:PingFang SC,Hiragino Sans GB,Microsoft Yahei,WenQuanYi Micro Hei,sans-serif;line-height:1.5;font-weight:500;font-size:48px;font-size:3rem;color:#07b;border-bottom:1px solid;margin-bottom:1.875em;padding-bottom:.8125em}sr-rd-desc{color:rgba(102,128,153,.6);background-color:rgba(102,128,153,.075);border-radius:4px;margin-bottom:1em;padding:15px;font-size:32px;font-size:2rem;line-height:1.5;text-align:center}sr-rd-content,sr-rd-content *,sr-rd-content div,sr-rd-content p{line-height:1.8;color:#2c3e50}sr-rd-content a,sr-rd-content a:link{color:#08c;text-decoration:none}sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover{color:#5ba4e5}sr-rd-content li code,sr-rd-content p code,sr-rd-content pre{background-color:#dadada}sr-rd-mult{background-color:rgba(102,128,153,.075)}</style><style type="text/css">sr-rd-theme-gothic{display:none}sr-rd-content h1{line-height:64px;line-height:4rem;margin:64px 0 28px;margin:4rem 0 1.75rem;padding:20px 30px}sr-rd-content h1,sr-rd-content h2{font-weight:400;text-align:center;text-transform:uppercase}sr-rd-content h2{line-height:48px;line-height:3rem;margin:48px 0 31px;margin:3rem 0 1.9375rem;padding:0 30px}sr-rd-content h3,sr-rd-content h4,sr-rd-content h5{font-weight:400}sr-rd-content h6{font-weight:700}sr-rd-content h1{font-size:57.6px;font-size:3.6rem}sr-rd-content h2{font-size:51.2px;font-size:3.2rem}sr-rd-content h3{font-size:40px;font-size:2.5rem}sr-rd-content h4{font-size:35.2px;font-size:2.2rem}sr-rd-content h5{font-size:30.4px;font-size:1.9rem}sr-rd-content h6{font-size:27.2px;font-size:1.7rem}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{margin-top:1.2em;margin-bottom:.6em;color:#111}sr-rd-content ol,sr-rd-content ul{list-style-type:disc;margin-left:3em}sr-rd-content ol ol,sr-rd-content ul ol{list-style-type:lower-roman}sr-rd-content ol ol ol,sr-rd-content ol ul ol,sr-rd-content ul ol ol,sr-rd-content ul ul ol{list-style-type:lower-alpha}sr-rd-content table{margin-bottom:20px}sr-rd-content table td,sr-rd-content table th{padding:8px;line-height:20px;line-height:1.25rem;vertical-align:top;border-top:1px solid #ddd}sr-rd-content table th{font-weight:700}sr-rd-content table thead th{vertical-align:bottom}sr-rd-content table caption+thead tr:first-child td,sr-rd-content table caption+thead tr:first-child th,sr-rd-content table colgroup+thead tr:first-child td,sr-rd-content table colgroup+thead tr:first-child th,sr-rd-content table thead:first-child tr:first-child td,sr-rd-content table thead:first-child tr:first-child th{border-top:0}sr-rd-content table tbody+tbody{border-top:2px solid #ddd}sr-rd-content sr-blockquote{margin:0 0 17.777px;margin:0 0 1.11111rem;padding:8px 17.777px 0 16.888px;padding:.5rem 1.11111rem 0 1.05556rem;border-left:1px solid gray}sr-rd-content sr-blockquote,sr-rd-content sr-blockquote p{line-height:2;color:#6f6f6f}.simpread-multi-root,.simpread-theme-root{background:#fcfcfc;color:#333}sr-rd-title{font-weight:400;line-height:64px;line-height:4rem;text-align:center;text-transform:uppercase;color:#111;font-size:51.2px;font-size:3.2rem}sr-rd-desc{margin:0 0 17.777px;margin:0 0 1.11111rem;padding:8px 17.777px 0 16.888px;padding:.5rem 1.11111rem 0 1.05556rem;font-size:32px;font-size:2rem;line-height:2;color:#6f6f6f;border-left:1px solid gray}sr-rd-content{font-weight:400;color:#333}sr-rd-content *,sr-rd-content div,sr-rd-content p{color:#333}sr-rd-content a,sr-rd-content a:link{color:#900;text-decoration:none}sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover{color:#900;text-decoration:underline}sr-rd-content li code,sr-rd-content p code,sr-rd-content pre{background-color:transparent;border:1px solid #ccc}sr-rd-mult{background-color:#f2f2f2}</style><style type="text/css">sr-rd-theme-engwrite{display:none}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{margin:20px 0 10px;padding:0;font-weight:500;-webkit-font-smoothing:antialiased}sr-rd-content h1{font-weight:300;text-align:center;font-size:44.8px;font-size:2.8rem;color:#933d3f}sr-rd-content h2{font-size:38.4px;font-size:2.4rem;border-bottom:1px solid #ccc;color:#000}sr-rd-content h3{font-size:28.8px;font-size:1.8rem}sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{font-size:25.6px;font-size:1.6rem}sr-rd-content h6{color:#777}sr-rd-content ol,sr-rd-content ul{padding-left:30px}sr-rd-content ol li>:first-child,sr-rd-content ol li ol:first-of-type,sr-rd-content ol li ul:first-of-type,sr-rd-content ul li>:first-child,sr-rd-content ul li ol:first-of-type,sr-rd-content ul li ul:first-of-type{margin-top:0}sr-rd-content ol ol,sr-rd-content ol ul,sr-rd-content ul ol,sr-rd-content ul ul{margin-bottom:0}sr-rd-content table th{font-weight:700}sr-rd-content table td,sr-rd-content table th{border:1px solid #ccc;padding:6px 13px}sr-rd-content table tr{border-top:1px solid #ccc;background-color:#fff}sr-rd-content table tr:nth-child(2n){background-color:#f8f8f8}sr-rd-content sr-blockquote{text-align:left;border-top:1px dotted #cdc7bc;border-bottom:1px dotted #cdc7bc;background-color:#f8edda;color:#777}sr-blockquote>:first-child{margin-top:0}sr-blockquote>:last-child{margin-bottom:0}.simpread-multi-root,.simpread-theme-root{background-color:#fcf5ed;color:#333}sr-rd-title{font-weight:300;text-align:center;font-size:44.8px;font-size:2.8rem;color:#933d3f}sr-rd-desc{padding:10px;background-color:#f8edda;color:#777;font-size:32px;font-size:2rem;text-align:center;border-top:1px dotted #cdc7bc;border-bottom:1px dotted #cdc7bc}sr-rd-content{padding:20px 0;margin:0 auto}sr-rd-content,sr-rd-content *,sr-rd-content div,sr-rd-content p{color:#333;line-height:1.8}sr-rd-content a,sr-rd-content a:link{color:#ae3737;text-decoration:none}sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover{text-decoration:underline}sr-rd-content pre{background-color:transparent;border:1px solid #ccc;border-radius:3px}sr-rd-content li code,sr-rd-content p code{border:1px solid #eaeaea;background-color:#f4ece3;border-radius:3px}sr-rd-mult{background-color:#f8edda}</style><style type="text/css">sr-rd-theme-octopress{display:none}sr-rd-content h1{font-size:56.32px;font-size:3.52rem;line-height:30.72px;line-height:1.92rem}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{text-rendering:optimizelegibility;margin-bottom:20.8px;margin-bottom:1.3rem;font-weight:700}sr-rd-content h2{font-size:38.4px;font-size:2.4rem}sr-rd-content h3{font-size:33.28px;font-size:2.08rem}sr-rd-content h4{font-size:28.8px;font-size:1.8rem}sr-rd-content h5,sr-rd-content h6{font-size:25.6px;font-size:1.6rem}sr-rd-content h1,sr-rd-content h2{padding-top:27.2px;padding-top:1.7rem;padding-bottom:19.2px;padding-bottom:1.2rem;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAYAAACsXeyTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVQIHWNIS0sr/v//PwMMDzY+ADqMahlW4J91AAAAAElFTkSuQmCC") 0 100% repeat-x}sr-rd-content h2{padding-top:20.8px;padding-top:1.3rem;padding-bottom:0}sr-rd-content ul{list-style-type:disc}sr-rd-content ul ul{list-style-type:circle;margin-bottom:0}sr-rd-content ul ul ul{list-style-type:square;margin-bottom:0}sr-rd-content ol{list-style-type:decimal}sr-rd-content ol ol{list-style-type:lower-alpha;margin-bottom:0}sr-rd-content ol ol ol{list-style-type:lower-roman;margin-bottom:0}sr-rd-content ol,sr-rd-content ol ol,sr-rd-content ol ul,sr-rd-content ul,sr-rd-content ul ol,sr-rd-content ul ul{margin-left:1.3em}sr-rd-content ol ol,sr-rd-content ol ul,sr-rd-content ul ol,sr-rd-content ul ul{margin-bottom:0}sr-rd-content table{width:100%;overflow:auto;word-break:normal;word-break:keep-all}sr-rd-content table th{font-weight:700}sr-rd-content table td,sr-rd-content table th{padding:6px 13px;border:1px solid #ddd}sr-rd-content table tr{background-color:#fff;border-top:1px solid #ccc}sr-rd-content table tr:nth-child(2n){background-color:#f8f8f8}sr-rd-content sr-blockquote{font-style:italic;font-size:inherit;line-height:2;padding-left:1em;border-left:4px solid hsla(0,0%,67%,.5)}.simpread-multi-root,.simpread-theme-root{background:#f8f8f8 url("data:image/png;base64,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") 0 0;color:#333}sr-rd-title{font-size:56.32px;font-size:3.52rem;line-height:64px;line-height:4rem;font-weight:700;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAYAAACsXeyTAAAACXBIW…sTAAALEwEAmpwYAAAAFUlEQVQIHWNIS0sr/v//PwMMDzY+ADqMahlW4J91AAAAAElFTkSuQmCC) 0 100% repeat-x}sr-rd-desc{font-style:italic;font-size:30.72px;font-size:1.92rem;line-height:2;padding-left:1em;border-left:4px solid hsla(0,0%,67%,.5)}sr-rd-content{margin:0 auto;padding:1em 0}sr-rd-content,sr-rd-content *,sr-rd-content div,sr-rd-content p{line-height:2;color:#333}sr-rd-content a,sr-rd-content a:link{color:#1863a1;text-decoration:underline}sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover{color:#0181eb;text-decoration:underline}sr-rd-content pre{color:#586e75;background-color:#fdf6e3;border-radius:.4em;border:1px solid #e7dec3}sr-rd-content li code,sr-rd-content p code{color:#555;background-color:transparent;border:1px solid #ddd}sr-rd-mult{background-color:#ededed}</style><style type="text/css">sr-rd-theme-pixyii{display:none}sr-rd-content h1,sr-rd-content h1 *,sr-rd-content h2,sr-rd-content h2 *,sr-rd-content h3,sr-rd-content h3 *,sr-rd-content h4,sr-rd-content h4 *,sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{color:inherit;font-weight:900;line-height:1.2;margin:1em 0}sr-rd-content h1,sr-rd-content h1 *{font-size:62.72px;font-size:3.92rem}sr-rd-content h2,sr-rd-content h2 *{font-size:58.24px;font-size:3.64rem}sr-rd-content h3,sr-rd-content h3 *{font-size:36.4px;font-size:2.275rem}sr-rd-content h4,sr-rd-content h4 *{font-size:29.12px;font-size:1.82rem}sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{font-size:25.168px;font-size:1.573rem}sr-rd-content ol,sr-rd-content ul{font-size:28px;font-size:1.75rem;line-height:24px;line-height:1.5rem}sr-rd-content li{font-size:25.2px;font-size:1.575rem;line-height:1.8;margin:0;position:relative}sr-rd-content table{width:100%;font-size:25.2px;font-size:1.575rem}sr-rd-content table>tbody>tr>td,sr-rd-content table>tbody>tr>th,sr-rd-content table>tfoot>tr>td,sr-rd-content table>tfoot>tr>th,sr-rd-content table>thead>tr>td,sr-rd-content table>thead>tr>th{padding:12px;line-height:1.2;vertical-align:top;border-top:1px solid #333}sr-rd-content table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #333}sr-rd-content table>caption+thead>tr:first-child>td,sr-rd-content table>caption+thead>tr:first-child>th,sr-rd-content table>colgroup+thead>tr:first-child>td,sr-rd-content table>colgroup+thead>tr:first-child>th,sr-rd-content table>thead:first-child>tr:first-child>td,sr-rd-content table>thead:first-child>tr:first-child>th{border-top:0}sr-rd-content table>tbody+tbody{border-top:2px solid #333}sr-rd-content sr-blockquote{margin:16px 0;margin:1rem 0;padding:1.33em;font-style:italic;border-left:5px solid #7a7a7a;color:#555}.simpread-theme-root{background-color:#fff;color:#555}sr-rd-title{font-family:PingFang SC,Hiragino Sans GB,Microsoft Yahei,WenQuanYi Micro Hei,sans-serif;font-size:67.2px;font-size:4.2rem;font-weight:900;line-height:1.2}sr-rd-desc{margin:16px 0;margin:1rem 0;padding:1.33em;font-style:italic;font-size:32px;font-size:2rem;line-height:2;border-left:5px solid #7a7a7a;color:#555}sr-rd-content{font-size:33.6px;font-size:2.1rem;line-height:1.8;font-weight:400;color:#555}sr-rd-content *,sr-rd-content div,sr-rd-content p{color:#555;font-size:28px;font-size:1.75rem;line-height:1.8;font-weight:300}sr-rd-content b,sr-rd-content b *,sr-rd-content strong,sr-rd-content strong *{font-weight:700}sr-rd-content a,sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover,sr-rd-content a:link{color:#463f5c;text-decoration:underline}sr-rd-content sr-blockquote code{font-size:inherit}sr-rd-content pre{border:1px solid #7a7a7a}sr-rd-content li code,sr-rd-content p code,sr-rd-content pre{color:#7a7a7a;background-color:transparent}.simpread-multi-root{background:#f8f9fa}</style><style type="text/css">sr-rd-theme-monospace{display:none}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{font-weight:700;color:#6363ac}sr-rd-content h1{font-size:35.2px;font-size:2.2rem}sr-rd-content h2{font-size:32px;font-size:2rem}sr-rd-content h3{font-size:28.8px;font-size:1.8rem}sr-rd-content h4{font-size:25.6px;font-size:1.6rem}sr-rd-content h5{font-size:22.4px;font-size:1.4rem}sr-rd-content h6{font-size:20.8px;font-size:1.3rem}sr-rd-content strong{color:#b5302e}sr-rd-content em{font-style:italic;color:#400469}sr-rd-content ol,sr-rd-content ul{list-style-type:none}sr-rd-content ol li,sr-rd-content ul li{margin:0}sr-rd-content table{line-height:25.6px;line-height:1.6rem;border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb}sr-rd-content thead{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom}sr-rd-content td,sr-rd-content th{border-left:1px solid #cbcbcb;border-width:0 0 0 1px;margin:0;overflow:visible;padding:.5em 1em}sr-rd-content sr-blockquote{background-color:hsla(0,0%,50%,.05);border-top-right-radius:5px;border-bottom-right-radius:5px;border-left:8px solid #979797;line-height:2}sr-rd-content sr-blockquote *{line-height:inherit}.simpread-theme-root{color:#333;background:#fff}sr-rd-title{font-size:44.8px;font-size:2.8rem;line-height:1.2;font-weight:700;color:#6363ac}sr-rd-desc{padding:10px;background-color:hsla(0,0%,50%,.05);font-size:28.8px;font-size:1.8rem;text-align:center;border-top-right-radius:5px;border-bottom-right-radius:5px;border-left:8px solid #979797}sr-rd-content{color:#333}sr-rd-content,sr-rd-content *,sr-rd-content div,sr-rd-content p{line-height:1.7}sr-rd-content a,sr-rd-content a:link{color:#005dad;text-decoration:underline}sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover{color:#fff;background-color:#2a6496;text-decoration:none}sr-rd-content pre{color:#e9eded;background-color:#263238}sr-rd-content li code,sr-rd-content p code{color:#949415;background-color:transparent}.simpread-multi-root{background:#f8f9fa}</style><style type="text/css">sr-rd-theme-night{display:none}sr-rd-content h1{margin-top:2em}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{color:#dedede;font-weight:400;clear:both;-ms-word-wrap:break-word;word-wrap:break-word;margin:0;padding:0}sr-rd-content h1{font-size:57.6px;font-size:3.6rem;line-height:64px;line-height:4rem;margin-bottom:38.4px;margin-bottom:2.4rem;letter-spacing:-1.5px}sr-rd-content h2{font-size:38.4px;font-size:2.4rem;line-height:48px;line-height:3rem}sr-rd-content h2,sr-rd-content h3{margin-bottom:38.4px;margin-bottom:2.4rem;letter-spacing:-1px}sr-rd-content h3{font-size:28.8px;font-size:1.8rem;line-height:38.4px;line-height:2.4rem}sr-rd-content h4{font-size:25.6px;font-size:1.6rem;line-height:35.2px;line-height:2.2rem;margin-bottom:38.4px;margin-bottom:2.4rem}sr-rd-content h5{font-size:16px;font-size:1rem;line-height:20px;line-height:1.25rem;margin-bottom:24px;margin-bottom:1.5rem}sr-rd-content h6{font-size:25.6px;font-size:1.6rem;line-height:25.6px;line-height:1.6rem;margin-bottom:12px;margin-bottom:.75rem;font-weight:700}sr-rd-content ol,sr-rd-content ul{padding:0 0 0 30px;padding:0 0 0 1.875rem}sr-rd-content ul{list-style:square}sr-rd-content ol{list-style:decimal}sr-rd-content ol ol,sr-rd-content ol ul,sr-rd-content ul ol,sr-rd-content ul ul{margin:0}sr-rd-content li div{padding-top:0}sr-rd-content li,sr-rd-content li p{margin:0;position:relative}sr-rd-content table{margin-top:0;margin-bottom:24px;margin-bottom:1.5rem;border-collapse:collapse;border-spacing:0;page-break-inside:auto;text-align:left}sr-rd-content table a{color:#dedede}sr-rd-content thead{display:table-header-group}sr-rd-content table td,sr-rd-content table th{border:1px solid #474d54}sr-rd-content sr-blockquote{margin:0 0 30px 30px;margin:0 0 1.875rem 1.875rem;border-left:2px solid #474d54;padding-left:30px;margin-top:35px;line-height:2}.simpread-multi-root,.simpread-theme-root{background:#363b40;color:#b8bfc6}sr-rd-title{color:#dedede;font-size:50.4px;font-size:3.15rem;line-height:56px;line-height:3.5rem;letter-spacing:-1.5px}sr-rd-desc{margin:35px;margin-left:0;padding-left:30px;padding-left:1.875rem;font-size:32px;font-size:2rem;line-height:2;border-left:2px solid #474d54}sr-rd-content,sr-rd-desc{color:#b8bfc6}sr-rd-content *,sr-rd-content div,sr-rd-content p{color:#b8bfc6;margin-top:0;line-height:2}sr-rd-content a,sr-rd-content a:link{color:#e0e0e0;text-decoration:underline;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover{color:#fff}sr-rd-content pre{background-color:transparent;border:1px solid}sr-rd-content li code,sr-rd-content p code{background:rgba(0,0,0,.05)}sr-rd-mult{background-color:#2d3034}panel{background-color:#2e2e2e!important}panel panel-tab span{color:#fff}panel sr-opt-gp sr-opt-label{color:rgba(108,255,240,.8);font-weight:400}panel text-field-float{color:rgba(108,255,240,.8)!important;font-weight:400!important}panel list-field{background-color:transparent!important}panel list-field:hover list-field-name{color:#fff!important;font-weight:700}panel input,panel list-field-name{color:hsla(35,10%,76%,.87)!important}panel list-view{background-color:#2e2e2e!important}panel sr-opt-gp action-label,panel switch content *{color:#fff!important}panel-tabs{border-bottom-color:#393d40!important}sr-annote{color:#333}sr-annote-sidebar *{color:hsla(36,10%,90%,.9)!important}sr-annote-sidebar-card[type=unread]{background-color:#19896e!important}sr-annote-sidebar-card:hover{box-shadow:0 10px 20px 0 rgba(60,73,82,.6)!important}sr-annote-sidebar-note,sr-annote-sidebar-options,sr-annote-sidebar-toolbars{background-color:#282b2d!important}sr-rd-theme-night-comp{display:none;opacity:0}dialog-content,dialog-footer{color:#b8bfc6!important;background-color:#2e2e2e!important}dialog-content *{color:#b8bfc6!important}dialog-content svg path{fill:#b8bfc6!important}dialog-content button-text{color:#b8bfc6!important}dialog-content text-field-state{border-top:none #b8bfc6!important;border-left:none #b8bfc6!important;border-right:none #b8bfc6!important;border-bottom:2px solid #b8bfc6!important}dialog-footer button-text{color:#b8bfc6!important}auto-complete list-view,dropdown list-view{color:#b8bfc6!important;background-color:#2e2e2e!important}auto-complete list-field,dropdown list-field{-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms}auto-complete list-field[active=true],dropdown list-field[active=true]{color:#b8bfc6!important;background-color:#1b1b1b!important}auto-complete tag{background-color:#1b1b1b!important}sr-rd-theme-night-comp{display:none}</style><style type="text/css">sr-rd-theme-dark{display:none}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{font-weight:700;color:#dbdbfd}sr-rd-content h1{font-size:48px;font-size:3rem}sr-rd-content h2{font-size:44.8px;font-size:2.8rem}sr-rd-content h3{font-size:40px;font-size:2.5rem}sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{color:#549ad8}sr-rd-content h5{font-size:32px;font-size:2rem}sr-rd-content h6{font-size:28.8px;font-size:1.8rem}sr-rd-content strong{color:#ffffc5}sr-rd-content em{color:#c885f5}sr-rd-content table{width:100%;line-height:25.6px;line-height:1.6rem;border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb}sr-rd-content thead{background-color:#263238;color:#f5f5f5;text-align:left;vertical-align:bottom}sr-rd-content table td,sr-rd-content table th{border-left:1px solid #cbcbcb;border-width:0 0 0 1px;margin:0;overflow:visible;padding:.5em 1em}sr-rd-content sr-blockquote{background-color:hsla(0,0%,50%,.05);border-top-right-radius:5px;border-bottom-right-radius:5px;border-left:8px solid #979797;color:#ebebeb}.simpread-multi-root,.simpread-theme-root{color:#ebebeb;background:#222}sr-rd-title{padding-bottom:.3em;font-size:44.8px;font-size:2.8rem;font-weight:700;line-height:1.2;color:#dbdbfd;border-bottom:1px solid #eee}sr-rd-desc{margin:20px;margin-left:0;padding:5px 20px;font-size:28.8px;font-size:1.8rem;background-color:hsla(0,0%,50%,.05);color:#ebebeb;border-top-right-radius:5px;border-bottom-right-radius:5px;border-left:8px solid #979797}sr-rd-content,sr-rd-content *,sr-rd-content div,sr-rd-content p{line-height:1.7;color:#ebebeb}sr-rd-content a,sr-rd-content a:link{color:#8ac9ff;text-decoration:underline}sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover{background-color:#2a6496;color:#fff;text-decoration:none}sr-rd-content pre{color:#e9eded;background-color:#263238}sr-rd-content li code,sr-rd-content p code{color:#caca16;background-color:transparent}sr-rd-mult{background-color:hsla(0,0%,50%,.1)}panel{background-color:#222!important}panel panel-tab span{color:#fff}panel sr-opt-gp sr-opt-label{color:rgba(108,255,240,.8);font-weight:400}panel text-field-float{color:rgba(108,255,240,.8)!important;font-weight:400!important}panel list-field{background-color:transparent!important}panel list-field:hover list-field-name{color:#fff!important;font-weight:700}panel input,panel list-field-name{color:hsla(35,10%,76%,.87)!important}panel list-view{background-color:#222!important}panel text-field input{color:rgba(108,255,240,.8)!important}panel sr-opt-gp action-label,panel switch content *{color:#fff!important}panel-tabs{border-bottom-color:#393d40!important}sr-annote{color:#333}sr-annote-sidebar *{color:hsla(36,10%,90%,.9)!important}sr-annote-sidebar-card[type=unread]{background-color:#19896e!important}sr-annote-sidebar-card:hover{box-shadow:0 10px 20px 0 rgba(60,73,82,.6)!important}sr-annote-sidebar-note,sr-annote-sidebar-options,sr-annote-sidebar-toolbars{background-color:#2a2a2a!important}sr-rd-theme-dark-comp{display:none;opacity:0}dialog-content,dialog-footer{color:#dbdbfd!important;background-color:#222!important}dialog-content *{color:#dbdbfd!important}dialog-content svg path{fill:#dbdbfd!important}dialog-content button-text{color:#dbdbfd!important}dialog-content text-field-state{border-top:none #dbdbfd!important;border-left:none #dbdbfd!important;border-right:none #dbdbfd!important;border-bottom:2px solid #dbdbfd!important}dialog-footer button-text{color:#dbdbfd!important}auto-complete list-view,dropdown list-view{color:#dbdbfd!important;background-color:#222!important}auto-complete list-field,dropdown list-field{-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms}auto-complete list-field[active=true],dropdown list-field[active=true]{color:#dbdbfd!important;background-color:#1b1b1b!important}auto-complete tag{background-color:#1b1b1b!important}sr-rd-theme-dark-comp{display:none}</style><style type="text/css">sr-rd-theme-mail{display:none}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{position:relative;margin-top:1em;margin-bottom:1pc;font-weight:700;line-height:1.4;text-align:left;color:#363636}sr-rd-content h1{padding-bottom:.3em;font-size:36p;line-height:1.2}sr-rd-content h2{padding-bottom:.3em;font-size:28p;line-height:1.225}sr-rd-content h3{font-size:24p;line-height:1.43}sr-rd-content h4{font-size:2p}sr-rd-content h5{font-size:16px}sr-rd-content h6{font-size:16px;color:#777}sr-rd-content ol,sr-rd-content ul{list-style-type:disc;padding:0;padding-left:2em}sr-rd-content ol ol,sr-rd-content ul ol{list-style-type:lower-roman}sr-rd-content ol ol ol,sr-rd-content ol ul ol,sr-rd-content ul ol ol,sr-rd-content ul ul ol{list-style-type:lower-alpha}sr-rd-content table{width:100%;overflow:auto;word-break:normal;word-break:keep-all}sr-rd-content table th{font-weight:700}sr-rd-content table td,sr-rd-content table th{padding:6px 13px;border:1px solid #ddd}sr-rd-content table tr{background-color:#fff;border-top:1px solid #ccc}sr-rd-content table tr:nth-child(2n){background-color:#f8f8f8}sr-rd-content sr-blockquote{border-left:4px solid #ddd}.simpread-theme-root{background-color:#fff;color:#333}.sr-header{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;width:100%;margin:10px 0;height:41px;border-bottom:1px solid #e0e0e0;padding-bottom:10px}.sr-header,.sr-header a{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#195bf7}.sr-header a{display:-webkit-box;display:-ms-flexbox;display:flex;text-decoration:none}.sr-header .sr-name{height:41px;line-height:41px;font-size:20px;font-weight:700;text-decoration:none}.sr-header .sr-logo{display:block;width:41px;height:41px;background-repeat:no-repeat;background-position:50%;background-image:url(https://simpread-1254315611.file.myqcloud.com/favicon/favicon-32x32.png);margin-right:5px}.sr-header .sr-slogan{height:41px;line-height:44px;font-weight:700;font-size:15px}.sr-rd-footer{font-size:14px;text-align:center;color:#363636}.sr-rd-footer-group{display:-webkit-box;display:-ms-flexbox;display:flex;height:20px}.sr-rd-footer-line{width:100%;border-top:1px solid #e0e0e0}.sr-rd-footer-text{min-width:150px;line-height:0;text-align:center}.sr-rd-footer-copywrite{margin:10px 0 0;color:#363636}.sr-rd-footer-copywrite abbr{-webkit-font-feature-settings:normal;font-feature-settings:normal;font-variant:normal;text-decoration:none}.sr-rd-footer-copywrite .second{margin:10px 0}.sr-rd-footer-copywrite .third a:hover{border:none!important}.sr-rd-footer-copywrite .third a:first-child{margin-right:50px}.sr-rd-footer-copywrite .sr-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:33px;height:33px;opacity:.8;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;cursor:pointer}.sr-rd-footer-copywrite .sr-icon:hover{opacity:1}.sr-rd-footer-copywrite a,.sr-rd-footer-copywrite a:link,.sr-rd-footer-copywrite a:visited{margin:0;padding:0;color:inherit;background-color:transparent;font-size:inherit!important;line-height:normal;text-decoration:none;vertical-align:baseline;vertical-align:initial;border:none!important;box-sizing:border-box}.sr-rd-footer-copywrite a:focus,.sr-rd-footer-copywrite a:hover,.sr-rd-footer a:active{color:inherit;text-decoration:none;border-bottom:1px dotted!important}.sr-rd-content-desc{margin:0;padding:0 0 0 1em;color:#363636;line-height:2;font-size:18px;border-left:4px solid hsla(0,0%,67%,.5)}sr-rd-content{font-size:16px;line-height:1.6}sr-rd-content h1,sr-rd-content h1 *,sr-rd-content h2,sr-rd-content h2 *,sr-rd-content h3,sr-rd-content h3 *,sr-rd-content h4,sr-rd-content h4 *,sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{word-break:break-all}sr-rd-content div,sr-rd-content p{display:block;float:inherit;line-height:1.6;font-size:16px}sr-rd-content,sr-rd-content *,sr-rd-content div,sr-rd-content p{color:#363636;font-weight:400;line-height:1.8}sr-rd-content strong,sr-rd-content strong *{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-o-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;-moz-columns:auto;columns:auto;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;-o-tab-size:8;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial}sr-rd-content a,sr-rd-content a:link{color:#4183c4;text-decoration:none}sr-rd-content a:active,sr-rd-content a:focus,sr-rd-content a:hover{color:#4183c4;text-decoration:underline}sr-rd-content figure{margin:0;padding:0}sr-rd-content img{display:inline-block;padding:0;height:auto;line-height:100%;max-width:50%;text-decoration:none;vertical-align:text-bottom;border-radius:10px;outline:none}sr-rd-content pre{background-color:#f7f7f7;border-radius:3px}sr-rd-content pre *{font-size:1.1px}sr-rd-content li code,sr-rd-content p code{background-color:rgba(0,0,0,.04);border-radius:3px}.simpread-multi-root{background:#f8f9fa}.sr-rd-mult{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin:0 0 16px;padding:16px 0 24px;width:100%;background-color:#fff;border-bottom:1px solid #e0e0e0}.sr-rd-mult .sr-rd-mult-content{padding:0 16px;overflow:auto}.sr-rd-mult .sr-rd-mult-avatar{margin:0 15px}.sr-rd-mult .sr-rd-mult-avatar span{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;max-width:75px;overflow:hidden;text-overflow:ellipsis;text-align:left;font-size:16px;font-size:1rem}.sr-rd-mult .sr-rd-mult-avatar img{margin-bottom:0;max-width:50px;max-height:50px;width:50px;height:50px;border-radius:50%}.sr-rd-mult .sr-rd-mult-avatar .sr-rd-content-center{margin:0}sr-rd-content.embed *{font-size:medium}sr-rd-content.embed img{max-width:100%}sr-rd-content.embed a,sr-rd-content.embed a:hover{color:inherit;font-size:medium}sr-rd-content.embed a:hover{background-color:inherit}sr-rd-content.embed .MathJax_Processed,sr-rd-content.embed math{display:none}sr-rd-content.embed pre{color:#000;color:initial;background-color:transparent}sr-rd-content.embed pre,sr-rd-content.embed pre *{font-size:13px!important}</style><style type="text/css">@media (pointer:coarse){sr-read{margin:20px 5%!important;min-width:0!important;max-width:90%!important}sr-rd-title{margin-top:0;font-size:2.7rem}sr-rd-content sr-blockquote,sr-rd-desc{margin:10 0!important;padding:0 0 0 10px!important;width:90%;font-size:1.8rem;font-style:normal;line-height:1.7;text-align:justify}sr-rd-content{font-size:1.75rem;font-weight:300}sr-rd-content figure{margin:0;padding:0;text-align:center}sr-rd-content a,sr-rd-content a:link,sr-rd-content li code,sr-rd-content p code{font-size:inherit}sr-rd-footer{margin-top:20px}sr-blockquote,sr-blockquote *{margin:5px!important;padding:5px!important}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6,sr-rd-title{font-family:PingFang SC,Verdana,Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif;color:#000;font-weight:100;line-height:1.35}sr-rd-content-h1,sr-rd-content-h2,sr-rd-content-h3,sr-rd-content-h4,sr-rd-content-h5,sr-rd-content-h6,sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{margin-top:1.2em;margin-bottom:.6em;line-height:1.35}sr-rd-content-h1,sr-rd-content h1{font-size:1.8em}sr-rd-content-h2,sr-rd-content h2{font-size:1.6em}sr-rd-content-h3,sr-rd-content h3{font-size:1.4em}sr-rd-content-h4,sr-rd-content-h5,sr-rd-content-h6,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{font-size:1.2em}sr-rd-content-ul,sr-rd-content ul{margin-left:1.3em!important;list-style:disc}sr-rd-content-ol,sr-rd-content ol{list-style:decimal;margin-left:1.9em!important}sr-rd-content-ol ol,sr-rd-content-ol ul,sr-rd-content-ul ol,sr-rd-content-ul ul,sr-rd-content li ol,sr-rd-content li ul{margin-bottom:.8em;margin-left:2em!important}sr-rd-content img{margin:0;padding:0;border:0;max-width:100%!important;height:auto;box-shadow:0 20px 20px -10px rgba(0,0,0,.1)}sr-rd-mult{min-width:0;background-color:#fff;box-shadow:0 1px 6px rgba(32,33,36,.28);border-radius:8px}sr-rd-mult sr-rd-mult-avatar div{margin:0}sr-rd-mult sr-rd-mult-avatar .sr-rd-content-center-small{margin:7px 0!important}sr-rd-mult sr-rd-mult-avatar span{display:block}sr-rd-mult sr-rd-mult-content{padding-left:0}@media only screen and (max-device-width:1024px){.simpread-theme-root,html.simpread-theme-root{font-size:80%!important}sr-rd-mult sr-rd-mult-avatar img{width:50px;height:50px;min-width:50px;min-height:50px}toc-bg toc{width:10px!important}toc-bg:hover toc{width:auto!important}}@media only screen and (max-device-width:414px){.simpread-theme-root,html.simpread-theme-root{font-size:70%!important}sr-rd-mult sr-rd-mult-avatar img{width:30px;height:30px;min-width:30px;min-height:30px}}@media only screen and (max-device-width:320px){.simpread-theme-root,html.simpread-theme-root{font-size:90%!important}sr-rd-content p{margin-bottom:.5em}}}</style><style type="text/css">button[aria-label][data-balloon-pos]{overflow:visible}[aria-label][data-balloon-pos]{position:relative;cursor:pointer}[aria-label][data-balloon-pos]:after{text-indent:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;font-style:normal;text-shadow:none;font-size:12px;background:hsla(0,0%,6%,.95);border-radius:2px;color:#fff;content:attr(aria-label);padding:.5em 1em;white-space:nowrap}[aria-label][data-balloon-pos]:after,[aria-label][data-balloon-pos]:before{opacity:0;pointer-events:none;-webkit-transition:all .18s ease-out .18s;transition:all .18s ease-out .18s;position:absolute;z-index:10}[aria-label][data-balloon-pos]:before{width:0;height:0;border:5px solid transparent;border-top-color:hsla(0,0%,6%,.95);content:""}[aria-label][data-balloon-pos]:hover:after,[aria-label][data-balloon-pos]:hover:before,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,[aria-label][data-balloon-pos][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-visible]:before{opacity:1;pointer-events:none}[aria-label][data-balloon-pos].font-awesome:after{font-family:FontAwesome,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}[aria-label][data-balloon-pos][data-balloon-break]:after{white-space:pre}[aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after{white-space:pre-line;word-break:break-word}[aria-label][data-balloon-pos][data-balloon-blunt]:after,[aria-label][data-balloon-pos][data-balloon-blunt]:before{-webkit-transition:none;transition:none}[aria-label][data-balloon-pos][data-balloon-pos=up]:after{margin-bottom:10px}[aria-label][data-balloon-pos][data-balloon-pos=up]:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:before{bottom:100%;left:50%;-webkit-transform:translate(-50%,4px);transform:translate(-50%,4px);-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:before{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:after{bottom:100%;left:0;margin-bottom:10px;-webkit-transform:translateY(4px);transform:translateY(4px);-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:before{bottom:100%;left:5px;-webkit-transform:translateY(4px);transform:translateY(4px);-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:after{bottom:100%;right:0;margin-bottom:10px;-webkit-transform:translateY(4px);transform:translateY(4px);-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:before{bottom:100%;right:5px;-webkit-transform:translateY(4px);transform:translateY(4px);-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down]:after{left:50%;margin-top:10px;top:100%;-webkit-transform:translate(-50%,-4px);transform:translate(-50%,-4px)}[aria-label][data-balloon-pos][data-balloon-pos=down]:before{width:0;height:0;border:5px solid transparent;border-bottom-color:hsla(0,0%,6%,.95);left:50%;top:100%;-webkit-transform:translate(-50%,-4px);transform:translate(-50%,-4px)}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:before{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:after{left:0;margin-top:10px;top:100%;-webkit-transform:translateY(-4px);transform:translateY(-4px)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:before{width:0;height:0;border:5px solid transparent;border-bottom-color:hsla(0,0%,6%,.95);left:5px;top:100%;-webkit-transform:translateY(-4px);transform:translateY(-4px)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:after{right:0;margin-top:10px;top:100%;-webkit-transform:translateY(-4px);transform:translateY(-4px)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:before{width:0;height:0;border:5px solid transparent;border-bottom-color:hsla(0,0%,6%,.95);right:5px;top:100%;-webkit-transform:translateY(-4px);transform:translateY(-4px)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=left]:after{margin-right:10px;right:100%;top:50%;-webkit-transform:translate(4px,-50%);transform:translate(4px,-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:before{width:0;height:0;border:5px solid transparent;border-left-color:hsla(0,0%,6%,.95);right:100%;top:50%;-webkit-transform:translate(4px,-50%);transform:translate(4px,-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:after{left:100%;margin-left:10px;top:50%;-webkit-transform:translate(-4px,-50%);transform:translate(-4px,-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:before{width:0;height:0;border:5px solid transparent;border-right-color:hsla(0,0%,6%,.95);left:100%;top:50%;-webkit-transform:translate(-4px,-50%);transform:translate(-4px,-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-length=small]:after{white-space:normal;width:80px}[aria-label][data-balloon-pos][data-balloon-length=medium]:after{white-space:normal;width:150px}[aria-label][data-balloon-pos][data-balloon-length=large]:after{white-space:normal;width:260px}[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:380px}@media screen and (max-width:768px){[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:90vw}}[aria-label][data-balloon-pos]:before{display:none}[aria-label][data-balloon-pos]:after{box-shadow:0 0 10px rgba(0,0,0,.3);border-radius:5px;font-weight:700;font-size:10px}[aria-label][data-balloon-pos][data-balloon-pos=up]:after{line-height:21px}[aria-label][data-balloon-pos][data-balloon-order=downleft]:after{left:120%}[aria-label][data-balloon-pos][data-balloon-order=downright]:after{right:-22px}[aria-label][data-balloon-pos][data-balloon-order=upright]:after{left:10%}</style><style type="text/css">/*!
 * Waves v0.7.5
 * http://fian.my.id/Waves
 * 
 * Copyright 2014-2016 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */.md-waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.md-waves-effect .md-waves-ripple{position:absolute;border-radius:50%;width:100px;height:100px;margin-top:-50px;margin-left:-50px;opacity:0;background:rgba(0,0,0,.2);background:-webkit-radial-gradient(rgba(0,0,0,.2) 0,rgba(0,0,0,.3) 40%,rgba(0,0,0,.4) 50%,rgba(0,0,0,.5) 60%,hsla(0,0%,100%,0) 70%);background:radial-gradient(rgba(0,0,0,.2) 0,rgba(0,0,0,.3) 40%,rgba(0,0,0,.4) 50%,rgba(0,0,0,.5) 60%,hsla(0,0%,100%,0) 70%);-webkit-transition:all .5s ease-out;transition:all .5s ease-out;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transform:scale(0) translate(0);transform:scale(0) translate(0);pointer-events:none}.md-waves-effect.md-waves-light .md-waves-ripple{background:hsla(0,0%,100%,.4);background:-webkit-radial-gradient(hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.3) 40%,hsla(0,0%,100%,.4) 50%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0) 70%);background:radial-gradient(hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.3) 40%,hsla(0,0%,100%,.4) 50%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0) 70%)}.md-waves-effect.md-waves-classic .md-waves-ripple{background:rgba(0,0,0,.2)}.md-waves-effect.md-waves-classic.md-waves-light .md-waves-ripple{background:hsla(0,0%,100%,.4)}.md-waves-notransition{-webkit-transition:none!important;transition:none!important}.md-waves-button,.md-waves-circle{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle,#fff 100%,#000 0)}.md-waves-button,.md-waves-button-input,.md-waves-button:hover,.md-waves-button:visited{white-space:nowrap;vertical-align:middle;cursor:pointer;border:none;outline:none;color:inherit;background-color:transparent;font-size:1em;line-height:1em;text-align:center;text-decoration:none;z-index:1}.md-waves-button{padding:.85em 1.1em;border-radius:.2em}.md-waves-button-input{margin:0;padding:.85em 1.1em}.md-waves-input-wrapper{border-radius:.2em;vertical-align:bottom}.md-waves-input-wrapper.md-waves-button{padding:0}.md-waves-input-wrapper .md-waves-button-input{position:relative;top:0;left:0;z-index:1}.md-waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%}.md-waves-float{-webkit-mask-image:none;box-shadow:0 1px 1.5px 1px rgba(0,0,0,.12);-webkit-transition:all .3s;transition:all .3s}.md-waves-float:active{box-shadow:0 8px 20px 1px rgba(0,0,0,.3)}.md-waves-block{display:block}</style><style type="text/css">.simpread-font{font:300 16px/1.8 -apple-system,PingFang SC,Microsoft Yahei,Lantinghei SC,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif;color:#333;text-rendering:optimizelegibility;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.simpread-hidden{display:none}.simpread-read-root{display:-webkit-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin:0;top:-1000px;left:0;width:100%;z-index:2147483646;overflow-x:hidden;opacity:0;-webkit-transition:all 1s cubic-bezier(.23,1,.32,1) .1s;transition:all 1s cubic-bezier(.23,1,.32,1) .1s}.simpread-read-root-show{top:0}.simpread-read-root-hide{top:1000px}sr-read{display:-webkit-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column;margin:20px 20%;min-width:400px;min-height:400px;text-align:center}read-process{position:fixed;top:0;left:0;height:3px;width:100%;background-color:#64b5f6;-webkit-transition:width 2s;transition:width 2s;z-index:20000}sr-rd-content-error{display:block;position:relative;margin:0;margin-bottom:30px;padding:25px;background-color:rgba(0,0,0,.05)}sr-rd-footer{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;font-size:14px}sr-rd-footer,sr-rd-footer-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}sr-rd-footer-group{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}sr-rd-footer-line{width:100%;border-top:1px solid #e0e0e0}sr-rd-footer-text{min-width:150px}sr-rd-footer-copywrite{margin:10px 0 0;color:inherit}sr-rd-footer-copywrite abbr{-webkit-font-feature-settings:normal;font-feature-settings:normal;font-variant:normal;text-decoration:none}sr-rd-footer-copywrite .second{margin:10px 0}sr-rd-footer-copywrite .third a:hover{border:none!important}sr-rd-footer-copywrite .third a:first-child{margin-right:50px}sr-rd-footer-copywrite .sr-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:33px;height:33px;opacity:.8;-webkit-transition:opacity .5s ease;transition:opacity .5s ease;cursor:pointer}sr-rd-footer-copywrite .sr-icon:hover{opacity:1}sr-rd-footer-copywrite a,sr-rd-footer-copywrite a:link,sr-rd-footer-copywrite a:visited{margin:0;padding:0;color:inherit;background-color:transparent;font-size:inherit!important;line-height:normal;text-decoration:none;vertical-align:baseline;vertical-align:initial;border:none!important;box-sizing:border-box}sr-rd-footer-copywrite a:focus,sr-rd-footer-copywrite a:hover,sr-rd-footer a:active{color:inherit;text-decoration:none;border-bottom:1px dotted!important}.simpread-blocks{text-decoration:none!important}.simpread-blocks *{margin:0}.simpread-blocks a{padding:0;text-decoration:none!important}.simpread-blocks img{margin:0;padding:0;border:0;background:transparent;box-shadow:none}.simpread-focus-root{display:block;position:fixed;top:0;left:0;right:0;bottom:0;background-color:hsla(0,0%,92%,.9);z-index:2147483645;opacity:0;-webkit-transition:opacity 1s cubic-bezier(.23,1,.32,1) 0ms;transition:opacity 1s cubic-bezier(.23,1,.32,1) 0ms}.simpread-focus-highlight{position:relative;box-shadow:0 0 0 20px #fff;background-color:#fff;overflow:visible;z-index:2147483646}.sr-controlbar-bg sr-rd-crlbar,.sr-controlbar-bg sr-rd-crlbar fab{z-index:2147483647}sr-rd-crlbar.controlbar{position:fixed;right:0;bottom:0;width:100px;height:100%;opacity:0;-webkit-transition:opacity .5s ease;transition:opacity .5s ease}sr-rd-crlbar.controlbar:hover{opacity:1}sr-rd-crlbar fap *{box-sizing:border-box}@media (max-height:620px){fab{zoom:.8}}@media (max-height:783px){dialog-gp dialog-content{max-height:580px}dialog-gp dialog-footer{border-top:1px solid #e0e0e0}}.simpread-highlight-selector{outline:3px dashed #1976d2!important;cursor:pointer!important}.simpread-highlight-controlbar,.simpread-highlight-selector{background-color:#fafafa!important;opacity:.8!important;-webkit-transition:opacity .5s ease!important;transition:opacity .5s ease!important}.simpread-highlight-controlbar{position:relative!important;border:3px dashed #1976d2!important}simpread-highlight,sr-snapshot-ctlbar{position:fixed;top:0;left:0;right:0;padding:15px;height:50px;background-color:rgba(50,50,50,.9);box-shadow:0 2px 5px rgba(0,0,0,.26);box-sizing:border-box;z-index:2147483640}simpread-highlight,sr-highlight-ctl,sr-snapshot-ctlbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}sr-highlight-ctl{margin:0 5px;width:50px;height:20px;color:#fff;background-color:#1976d2;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);cursor:pointer}toc-bg{position:fixed;left:0;top:0;width:50px;height:200px;font-size:medium}toc-bg:hover{z-index:3}.toc-bg-hidden{opacity:0;-webkit-transition:opacity .5s ease;transition:opacity .5s ease}.toc-bg-hidden:hover{opacity:1;z-index:3}.toc-bg-hidden:hover toc{width:180px}toc *{all:unset}toc{position:fixed;left:0;top:100px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:10px;width:0;max-width:200px;max-height:500px;overflow-x:hidden;overflow-y:hidden;cursor:pointer;border:1px solid hsla(0,0%,62%,.22);-webkit-transition:width .5s;transition:width .5s}toc:hover{overflow-y:auto}toc.mini:hover{width:200px!important}toc::-webkit-scrollbar{width:3px}toc::-webkit-scrollbar-thumb{border-radius:10px;background-color:hsla(36,2%,54%,.5)}toc outline{position:relative;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;padding:2px 0;min-height:21px;line-height:21px;text-align:left}toc outline a,toc outline a:active,toc outline a:focus,toc outline a:visited{display:block;width:100%;color:inherit;font-size:11px;text-decoration:none!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}toc outline a:hover{font-weight:700!important}toc outline a.toc-outline-theme-dark,toc outline a.toc-outline-theme-night{color:#fff!important}.toc-level-h1{padding-left:5px}.toc-level-h2{padding-left:15px}.toc-level-h3{padding-left:25px}.toc-level-h4{padding-left:35px}.toc-outline-active{border-left:2px solid #f44336}toc outline active{position:absolute;left:0;top:0;bottom:0;padding:0 0 0 3px;border-left:2px solid #e8e8e8}sr-kbd{background:-webkit-gradient(linear,0 0,0 100%,from(#fff785),to(#ffc542));border:1px solid #e3be23;-o-border-image:none;border-image:none;-o-border-image:initial;border-image:initial;position:absolute;left:0;padding:1px 3px 0;font-size:11px!important;font-weight:700;box-shadow:0 3px 7px 0 rgba(0,0,0,.3);overflow:hidden;border-radius:3px}.sr-kbd-a{position:relative}kbd-mapping{position:fixed;left:5px;bottom:5px;-ms-flex-flow:row;flex-flow:row;width:250px;height:500px;background-color:#fff;border:1px solid hsla(0,0%,62%,.22);box-shadow:0 2px 5px rgba(0,0,0,.26);border-radius:3px}kbd-mapping,kbd-maps{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}kbd-maps{margin:40px 0 20px;width:100%;overflow-x:auto}kbd-maps::-webkit-scrollbar-thumb{background-clip:padding-box;border-radius:10px;border:2px solid transparent;background-color:rgba(85,85,85,.55)}kbd-maps::-webkit-scrollbar{width:10px;-webkit-transition:width .7s cubic-bezier(.4,0,.2,1);transition:width .7s cubic-bezier(.4,0,.2,1)}kbd-mapping kbd-map-title{position:absolute;margin:5px 0;width:100%;font-size:14px;font-weight:700}kbd-maps-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}kbd-maps-title{margin:5px 0;padding-left:53px;font-size:12px;font-weight:700}kbd-map kbd{display:inline-block;padding:3px 5px;font-size:11px;line-height:10px;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5}kbd-map kbd-name{display:inline-block;text-align:right;width:50px}kbd-map kbd-desc{padding-left:3px}sharecard-bg{position:fixed;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.4);z-index:2147483647}sharecard{max-width:450px;background-color:#64b5f6}sharecard,sharecard-head{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}sharecard-head{margin:25px;color:#fff;border-radius:10px;box-shadow:0 2px 6px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.15)}sharecard-card{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}sharecard-card,sharecard-top{display:-webkit-box;display:-ms-flexbox;display:flex}sharecard-top{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-right:5px;height:65px;background-color:#fff;color:#878787;font-size:25px;font-weight:500;border-top-left-radius:10px;border-top-right-radius:10px}sharecard-top span.logos{display:block;width:48px;height:48px;margin:5px;background-repeat:no-repeat;background-position:50%;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABU1BMVEUAAAAnNJMnNZI3Q5onNJInNJMnNJInNJMnNJI8SJ0tOZY/S55EUKAoNJI6RpwoNJNIU6InNJInNJImNJI7SJwmNJJ2fLUiMJFKVaNCTJ9faK1HUaJOWKVSXaUnNJNYY6pye7cmM5JXYKhwebMjMI8mL4719fW9vb0oNZP/UlLz8/QqN5TAwMAnNJPv7+/Pz8/q6+/p6enNzc3Kysry8vMsOJXc3env7/LU1uXo29vR0dHOzs7ExMTwjo73bW37XV3Aj1TCYELl5u3n5+fW2Obn6O7f4OrZ2+g0QJkxPpgvO5bh4uvS1OTP0ePCwsJQW6ZLVqTs7fHd3d3V1dXqv79VX6lET6A1TIxXUIBSgHxWQnpelHf+WVnopkXqbC7j5Ozi4uLDw8NGUaFATJ9SgH3r6+vGyd7BxNva2trX19ejqM2gpczHx8dze7Zha67Z2dlTgH1aXQeSAAAAJnRSTlMA6ff+497Y8NL+/fv49P379sqab/BeOiX06tzVy8m/tKqpalA7G6oKj0EAAAJlSURBVEjHndNXWxpBFIDhcS2ICRLAkt4Dx4WhLk0E6R0MYoIISrWX5P9f5cwSIRC2+T1czMV5n2FnZwn2eWONUqCAv3H2Uf5Ra1hx4+0WEXtDQW0fCPYJ1EffEfIV4CSROAE4jsePoTFsNmTJF/IeIHF2lgCIn57GodlqDWXBK7IwBYatVlMWFAildPKX7I3m74Z9fsCiQChoimoFQAz04Ad2gH1n9fv9n9hgMNDr9euLWD6fLxQKxaLfb7dTSlahbFVdEPwIQtrAihZQgyKCtCagbQe3xh0QFMgy5MR11+ewYY5/qlZ7vT2xu93ULKjbFLpiUxnIIwjgKmVTLDUFXMrAi2NJWCRLIthTBo4xyOLKpwyqU6CuDCI41hFBCVdOhyLw4FgJ1skCAiyl9BSHbCorgo6VJXTru5hrVCQS8Yr5xLzX59YJSFpVFwD9U0BGC3hGdFpATgRupTGe9R9I1b1ePBvXKDyvq/O/44LT4/E4BUbSCAwj8Evq6HlnOBprx6JhJz8Gktc7xeaP9ndY+0coQvCccFBD4JW60UIY50ciLOAODAQRVOeCHm4Q3Xks6uRDY+CQ+AR4T2wMYh6+jMCIQOp78CFoj0H7EQgIuhI3dGaHCrwgADwCPjJvA372GRigCJg49FUdk3D87pq3zp4SA5zc1Zh9DxfwkpjgUg5Mv+lbeE3McC8Lpu7SA3wk2xzcqL2tN5DfIsQC8HB7UamUy6FQOpTO5QKBQDZbKnWSyUzGjdWCwaDA8+7Le4BNgm3qQGWchYh9s5hNq6wVbBlbwhZYOp3OYOA4zmgEypnM2zj8ByIdedKrH8vDAAAAAElFTkSuQmCC");zoom:.8}sharecard-content{padding:15px;max-height:500px;font-size:20px;text-align:justify;background-color:#2196f3;overflow-x:hidden;overflow-y:auto}sharecard-via{padding:10px;font-size:10px;background-color:#2196f3}sharecard-footer{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-right:5px;height:100px;background-color:#fff;color:#878787;font-size:15px;font-weight:500;border-bottom-left-radius:10px;border-bottom-right-radius:10px}sharecard-footer,sharecard-footer div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}sharecard-footer span.qrcode{display:block;width:100px;height:100px;margin:5px;background-repeat:no-repeat;background-position:50%;background-image:url("data:image/png;base64,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")}sharecard-control{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 19px;height:80px;background-color:#fff}simpread-snapshot{width:100%;height:100%;cursor:move;z-index:2147483645}simpread-snapshot,sr-mask{position:fixed;left:0;top:0}sr-mask{background-color:rgba(0,0,0,.1)}.simpread-feedback,.simpread-urlscheme{position:fixed;right:20px;bottom:20px;z-index:2147483646}simpread-feedback,simpread-urlscheme{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px 20px 0;width:500px;color:rgba(51,51,51,.87);background-color:#fff;border-radius:3px;box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.26);overflow:hidden;-webkit-transform-origin:bottom;transform-origin:bottom;-webkit-transition:all .6s ease;transition:all .6s ease}simpread-feedback *,simpread-urlscheme *{font-size:12px!important;box-sizing:border-box}simpread-feedback.active,simpread-urlscheme.active{-webkit-animation-name:srFadeInUp;animation-name:srFadeInUp;-webkit-animation-duration:.45s;animation-duration:.45s;-webkit-animation-fill-mode:both;animation-fill-mode:both}simpread-feedback.hide,simpread-urlscheme.hide{-webkit-animation-name:srFadeInDown;animation-name:srFadeInDown;-webkit-animation-duration:.45s;animation-duration:.45s;-webkit-animation-fill-mode:both;animation-fill-mode:both}simpread-feedback sr-fb-label,simpread-urlscheme sr-urls-label{width:100%}simpread-feedback sr-fb-head,simpread-urlscheme sr-urls-head{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-bottom:5px;width:100%}simpread-feedback sr-fb-content,simpread-urlscheme sr-urls-content{margin-bottom:5px;width:100%}simpread-feedback sr-urls-footer,simpread-urlscheme sr-urls-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%}simpread-feedback sr-fb-a,simpread-urlscheme sr-urls-a{color:#2163f7;cursor:pointer}simpread-feedback text-field-state,simpread-urlscheme text-field-state{border-top:none rgba(34,101,247,.8)!important;border-left:none rgba(34,101,247,.8)!important;border-right:none rgba(34,101,247,.8)!important;border-bottom:2px solid rgba(34,101,247,.8)!important}simpread-feedback switch,simpread-urlscheme switch{margin-top:0!important}@-webkit-keyframes srFadeInUp{0%{opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes srFadeInUp{0%{opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes srFadeInDown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px)}}@keyframes srFadeInDown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px)}}simpread-feedback sr-fb-head{font-weight:700}simpread-feedback sr-fb-content{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}simpread-feedback sr-fb-content,simpread-feedback sr-fb-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}simpread-feedback sr-fb-footer{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%}simpread-feedback sr-close{position:absolute;right:20px;cursor:pointer;-webkit-transition:all 1s cubic-bezier(.23,1,.32,1) .1s;transition:all 1s cubic-bezier(.23,1,.32,1) .1s;z-index:200}simpread-feedback sr-close:hover{-webkit-transform:rotate(-15deg) scale(1.3);transform:rotate(-15deg) scale(1.3)}simpread-feedback sr-stars{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:10px}simpread-feedback sr-stars i{margin-right:10px;cursor:pointer}simpread-feedback sr-stars i svg{-webkit-transition:all 1s cubic-bezier(.23,1,.32,1) .1s;transition:all 1s cubic-bezier(.23,1,.32,1) .1s}simpread-feedback sr-stars i svg:hover{-webkit-transform:rotate(-15deg) scale(1.3);transform:rotate(-15deg) scale(1.3)}simpread-feedback sr-stars i.active svg{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1)}simpread-feedback sr-emojis{display:block;height:100px;overflow:hidden}simpread-feedback sr-emoji{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:.3s;transition:.3s}simpread-feedback sr-emoji>svg{margin:15px 0;width:70px;height:70px;-ms-flex-negative:0;flex-shrink:0}simpread-feedback sr-stars-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:10px 0 20px}</style><style type="text/css">sr-opt-focus,sr-opt-read{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}sr-opt-focus,sr-opt-gp,sr-opt-read{display:-webkit-flex;-webkit-box-direction:normal;width:100%}sr-opt-gp{position:relative;-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:25px;font-size:15px}sr-opt-gp input,sr-opt-gp textarea{font-family:DIN-Regular,Bookerly,Georgia,-apple-system,PingFang SC,Microsoft Yahei,Lantinghei SC,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif!important}sr-opt-gp sr-opt-label{display:block;position:absolute;margin:-8px 0 0;font-size:14px;font-weight:700;color:rgba(0,137,123,.8);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transform:scale(.75) translateY(-8px);transform:scale(.75) translateY(-8px);-webkit-transform-origin:left top 0;transform-origin:left top 0}sr-opt-themes{display:-webkit-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;margin:8px 0 17px;padding:0}sr-opt-theme{width:40px;height:20px;cursor:pointer;list-style:none;border-radius:3px;border:1px solid #212121;box-sizing:border-box;opacity:1;-webkit-transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms}sr-opt-theme:hover{-webkit-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 5px 10px rgba(0,0,0,.2)}sr-opt-theme:not(:first-child){margin-left:5px}sr-opt-theme[sr-type=active]{box-shadow:0 5px 10px rgba(0,0,0,.2);border:none}sr-opt-focus text-field-float,sr-opt-read text-field-float{color:rgba(0,137,123,.8)!important}sr-opt-focus text-field-state,sr-opt-read text-field-state{border-bottom-color:rgba(0,137,123,.8)!important}sr-opt-gp svg{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-o-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;-moz-columns:auto;columns:auto;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;-o-tab-size:8;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial}sr-opt-gp actions{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}sr-opt-gp action-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:5px 0}sr-opt-gp action-item:first-child{padding-top:10px}sr-opt-gp action-label{font-size:12px;font-weight:400;margin-left:10px}sr-opt-gp action-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}sr-opt-gp action-icon,sr-opt-gp action-rect{-webkit-box-align:center;-ms-flex-align:center;align-items:center}sr-opt-gp action-rect{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}sr-opt-gp export-icon{display:block;padding:3px;width:21px;height:21px;background-size:64%;background-position:50%;background-repeat:no-repeat;border:none;border-radius:4px}sr-opt-gp export-icon.symbol{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}sr-opt-gp export-icon i{color:#fff;font-size:12px}sr-opt-gp action-item[action=joplin] export-icon{background-size:50%}sr-opt-gp action-item[action=focusnote] export-icon{background-size:42%}style-bar{margin-bottom:10px}style-bar sr-opt-read-adv sr-opt-gp{margin:10px 0 0}style-bar sr-opt-read-adv sr-opt-gp.large{position:relative;margin-top:25px}sr-opt-read-adv sr-opt-gp:last-child{margin-bottom:0}style-bar sr-opt-gp:last-child{margin-bottom:10px}style-bar sr-opt-read-adv sr-opt-label.row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;pointer-events:auto;cursor:pointer}style-bar sr-opt-read-adv sr-opt-label.row,style-bar sr-opt-read-adv sr-opt-label sr-opt-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}style-bar sr-opt-read-adv sr-opt-label sr-opt-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .25s ease-out;transition:all .25s ease-out}style-bar sr-opt-read-adv sr-opt-label sr-opt-icon.open{-webkit-transform:rotate(270deg);transform:rotate(270deg)}style-bar sr-opt-read-adv.dividers{border-top:1px solid #eaeaea;border-bottom:1px solid #eaeaea}style-bar switch{margin:0!important}style-bar switch span{font-size:13px!important;font-weight:700!important}style-bar switch subtitle{font-size:12px!important}style-bar text-field textarea{resize:vertical!important}style-bar sr-opt-button{position:absolute!important;right:12px;bottom:14px;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;border-radius:50%;-webkit-transition:all .25s ease-out;transition:all .25s ease-out}style-bar sr-opt-button,style-bar sr-opt-button svg{cursor:pointer!important}style-bar text-field.hidden+sr-opt-button{opacity:0}</style><style type="text/css">notify-gp{font:300 14px -apple-system,PingFang SC,Microsoft Yahei,Lantinghei SC,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif;text-rendering:optimizelegibility;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;display:-webkit-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;position:fixed;top:0;right:0;margin:0 15px 0 0;padding:0;text-transform:none;pointer-events:none}notify-gp notify{display:-webkit-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;margin-top:15px;padding:14px 24px;min-width:288px;max-width:568px;min-height:48px;color:hsla(0,0%,100%,.9);background-color:#000;box-sizing:border-box;border-radius:4px;pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:left top 0;transform-origin:left top 0;-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms,opacity 1s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms,opacity 1s cubic-bezier(.23,1,.32,1) 0ms;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}notify-gp notify-title{font-size:13px;font-weight:700}notify-gp notify-content{display:block;font-size:14px;font-weight:400;text-align:left;overflow:hidden}notify-gp notify-content a,notify-gp notify-content a:active,notify-gp notify-content a:link,notify-gp notify-content a:visited{margin:inherit;padding-bottom:5px;color:#fff;font-size:inherit;text-decoration:none;-webkit-transition:color .5s;transition:color .5s}notify-gp notify-content a:hover{margin:0;margin:initial;padding:0;padding:initial;color:inherit;font-size:inherit;text-decoration:none}notify-gp notify-i{display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 10px 0 0;width:24px;height:24px;background-position:50%;background-repeat:no-repeat}notify-gp notify-action,notify-gp notify-cancel{display:none;margin:0 8px;max-width:80px;min-width:56px;height:36px;line-height:34px;color:#bb86fc;font-weight:500;font-size:inherit;text-transform:uppercase;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;cursor:pointer}notify-gp .notify-error notify-action,notify-gp .notify-error notify-cancel,notify-gp .notify-success notify-action,notify-gp .notify-success notify-cancel,notify-gp .notify-warning notify-action,notify-gp .notify-warning notify-cancel{color:#fff}notify-gp notify-action:active,notify-gp notify-cancel:active{border-radius:4px;background-color:rgba(98,0,238,.3)}notify-gp notify-cancel{margin:0}notify-gp notify-a{display:block;position:absolute;top:5px;right:5px;cursor:pointer}notify-gp notify-exit{display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:5px;width:36px;height:36px;min-width:36px;min-height:36px;background-color:transparent;border-radius:50%;-webkit-transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;cursor:pointer}notify-gp notify-exit:hover{background-color:hsla(0,0%,100%,.4)}notify-gp notify-exit:active{background-color:hsla(0,0%,100%,.2)}notify-gp notify-a notify-span{display:block;width:16px;height:16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDklEQVQ4T6VT0VFCQQzcrQA7ECoRK1AqEDugA6ECsQPsADvgVSAlaAlWEGdvkjchczI45Osud9nc7m2IEmY2BfAEYA5A6xsARwAHAB8ktR6DeWNmKwAvXlSxY78i+RabEcDM9gAe/qoq+T3JhXINwDu/Xlgc1zYk13TOn+XZA4C7AvgN4LbkZgJYO+84O5C8N7Odi6n8O8llh+ZGAD3uO5LPDgIvzoDRbBDAV+dputBAXKNecQM5B9CefQlAj0JwVmdLdGSwHI1CFXEgOS8ihia1WRNRdpU9JwlatpWVc0gr3c0xu95IAfdPK2uoHkcrJxANkzTJdPKTf3ROchvJk2n0LxNPfV9vnDVEJ+P8C6jMhLeGEqMKAAAAAElFTkSuQmCC);opacity:.9}notify-gp notify-i.holdon{display:block;margin:0 0 0 24px;width:20px;height:20px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAATUlEQVR4AWMYSuB/4P+V/1lRRFiBIoEYCoGC//+vAypFKFsHFFkJV4AsAVGKzsOjFFUZHqUElCGUwpRRrpCw1YQ9Qzh4SA5wwlE4hAAAiFGQefYhNJkAAAAASUVORK5CYII=);cursor:pointer}notify-gp .notify-show{opacity:1;-webkit-transform:scaleY(1)!important;transform:scaleY(1)!important}notify-gp .notify-hide{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp;-webkit-animation-duration:.45s;animation-duration:.45s;-webkit-animation-fill-mode:both;animation-fill-mode:both}notify-gp .notify-success{background-color:#4caf50}notify-gp .notify-warning{background-color:#ffa000}notify-gp .notify-error{background-color:#ef5350}notify-gp .notify-info{background-color:#1976d2}notify-gp .notify-modal{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;height:auto;max-height:200px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}notify-gp .notify-modal .notify-modal-content{margin-top:5px;font-size:13px;white-space:normal}notify-gp .notify-modal .notify-modal-content a{margin:0;padding:0;color:inherit;font-size:inherit;text-decoration:underline;cursor:pointer}notify-gp .notify-modal .notify-modal-content a:active,notify-gp .notify-modal .notify-modal-content a:focus,notify-gp .notify-modal .notify-modal-content a:hover,notify-gp .notify-modal .notify-modal-content a:visited{color:inherit}notify-gp .notify-snackbar{position:fixed;bottom:0;left:50%;margin-bottom:5px;-webkit-transform-origin:left bottom 0;transform-origin:left bottom 0}.notify-position-lt-corner{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:0 0 0 15px;left:0;right:auto}.notify-position-lb-corner{margin:0 0 15px 15px;right:auto;left:0}.notify-position-lb-corner,.notify-position-rb-corner{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-flow:column-reverse wrap-reverse;flex-flow:column-reverse wrap-reverse;top:auto;bottom:0}.notify-position-rb-corner{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:0 15px 15px 0;left:auto;right:0}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{margin-top:0;padding:0;height:0;min-height:0;opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes fadeOutUp{0%{opacity:1}to{margin-top:0;padding:0;height:0;min-height:0;opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}}@media (pointer:coarse){notify-gp{top:auto;bottom:0;left:0;margin:0 10px 10px}notify-gp notify{width:100%;max-width:600px}notify-gp .notify-hide,notify-gp .notify-show{-webkit-transform-origin:bottom!important;transform-origin:bottom!important}notify-gp .notify-snackbar{position:static}}</style><style type="text/css">dialog-gp .carousel,welcome .carousel{position:relative;width:100%;height:400px;-webkit-perspective:500px;perspective:500px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:0 50%;transform-origin:0 50%;overflow:hidden}dialog-gp .carousel.carousel-slider,welcome .carousel.carousel-slider{top:0;left:0;height:100%}dialog-gp .carousel.carousel-slider .carousel-item,welcome .carousel.carousel-slider .carousel-item{position:absolute;top:0;left:0;width:100%;height:100%;min-height:400px}dialog-gp .carousel .carousel-item,welcome .carousel .carousel-item{display:none;position:absolute;top:0;left:0;width:200px;height:200px}dialog-gp .carousel .carousel-item>img,welcome .carousel .carousel-item>img{width:100%}dialog-gp .carousel .indicators,welcome .carousel .indicators{position:absolute;margin:0;padding:0;left:0;right:0;bottom:0;text-align:center}dialog-gp .carousel .indicators .indicator-item,welcome .carousel .indicators .indicator-item{display:inline-block;position:relative;margin:14px 4px;height:10px;width:10px;background-color:#e0e0e0;-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%;cursor:pointer}dialog-gp .carousel .indicators .indicator-item.active,welcome .carousel .indicators .indicator-item.active{background-color:#4caf50}dialog-gp .carousel .carousel-item:not(.active) .materialboxed,dialog-gp .carousel.scrolling .carousel-item .materialboxed,welcome .carousel .carousel-item:not(.active) .materialboxed,welcome .carousel.scrolling .carousel-item .materialboxed{pointer-events:none}</style><style type="text/css">.simpread-upgrade-root *{box-sizing:border-box}.simpread-upgrade-root{-webkit-transition:all .25s ease-out;transition:all .25s ease-out}.simpread-upgrade-root.open{background-color:rgba(51,51,51,.8)}.simpread-upgrade-root dialog-gp{position:relative}.simpread-upgrade-root dialog-gp .close{position:fixed;top:0;right:0;z-index:2}.simpread-upgrade-root dialog-gp .close:hover{-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-transition:all .25s ease-out;transition:all .25s ease-out}.simpread-upgrade-root dialog-content{padding-bottom:80px!important;overflow-y:hidden}.simpread-upgrade-root dialog-content:hover{overflow-y:overlay}.simpread-upgrade-root dialog-content::-webkit-scrollbar-track{background-color:transparent}.simpread-upgrade-root dialog-content::-webkit-scrollbar{width:12px}.simpread-upgrade-root dialog-content::-webkit-scrollbar-thumb{background-clip:padding-box;padding-top:80px;background-color:#ddd;border:3px solid transparent;border-radius:8px}.simpread-upgrade-root .floating{position:absolute;left:0;right:0;bottom:0;height:80px;overflow-y:hidden}.simpread-upgrade-root .floating,.simpread-upgrade-root .floating .billing{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.simpread-upgrade-root .floating .billing{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1px 40px;color:#fff;background-color:#4dbb7c;font-size:15px;font-weight:400;opacity:0;border-radius:30px;-webkit-transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;box-shadow:0 12px 18px -6px rgba(0,0,0,.3)}.simpread-upgrade-root .floating .billing.open{-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.simpread-upgrade-root .floating .billing .sales{font-size:12px}.simpread-upgrade-root .floating .billing .rate{margin:0 5px}.simpread-upgrade-root .floating .billing .price{margin-left:2px;margin-right:5px}.upgrade{position:relative;color:rgba(51,51,51,.87);font-family:Hiragino Sans GB,Microsoft Yahei;text-shadow:none}.upgrade .head{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.upgrade .head img{margin-bottom:5px;width:60px;border-radius:9px;box-shadow:0 12px 18px -6px rgba(0,0,0,.3)}.upgrade .head .title{margin:10px 0;font-weight:700;font-size:15px}.upgrade .head .desc{width:70%;text-align:center;font-size:13px}.upgrade .features{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;-webkit-transition:height .2s cubic-bezier(.23,1,.32,1) 0ms;transition:height .2s cubic-bezier(.23,1,.32,1) 0ms}.upgrade .features.init{height:100px}.upgrade .features.init .base,.upgrade .features.init .pro{opacity:0}.upgrade .loading{position:absolute;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;background-color:#fff;z-index:1}.upgrade .loading span{width:50px;height:50px;opacity:.87}.features.error{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:inherit;font-size:14px}.features.error img{margin:10px 0;width:300px}.upgrade .base,.upgrade .pro{margin:20px 20px 13px;width:100%;text-align:center;opacity:1;-webkit-transition:opacity .2s cubic-bezier(.23,1,.32,1) 0ms;transition:opacity .2s cubic-bezier(.23,1,.32,1) 0ms}.upgrade .pricecard{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-radius:4px;border:1px solid #eef1f4;position:relative}.upgrade .pro .pricecard{border:2px solid #4dbb7c;box-shadow:0 12px 18px -6px rgba(0,0,0,.3)}.upgrade .pricecard .mode{margin:20px 10px 10px;font-size:18px;font-weight:700}.upgrade .pricecard .sales{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:92px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.upgrade .pricecard .discountrate{position:absolute;top:-12px;left:0;right:0}.upgrade .pricecard .discountrate .rate{padding:3px 10px;color:#fff;background-color:#4dbb7c;font-weight:700;font-size:13px;border-radius:10px}.upgrade .pricecard .desc{font-size:30px}.upgrade .pricecard .desc del{font-size:15px;font-weight:700;text-decoration:line-through}.upgrade .pricecard .price{position:relative;color:#4dbb7c;font-size:30px;font-weight:700}.upgrade .pricecard .message{position:relative;font-size:11px;font-weight:400;background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,0) 50%,#ffeb3b 0);background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 50%,#ffeb3b 0)}.upgrade .pricecard .countdown{margin-top:5px}.upgrade .pricecard .billing{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:30px 20%;padding:5px;color:#333;background-color:#e2e2e2;font-size:15px;font-style:normal;font-weight:700;border-radius:4px;cursor:pointer}.upgrade .pricecard .billing,.upgrade .pricecard .billing i{-webkit-transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms}.upgrade .pricecard .billing i{height:27px;line-height:22px;margin-left:5px}.upgrade .pricecard .billing:hover{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.upgrade .pricecard .billing:hover i{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.upgrade .pricecard .billing:hover .dropdown-price{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.upgrade .pricecard .billing .dropdown-price{position:absolute;left:-41px;top:38px;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:270px;color:rgba(51,51,51,.87);font-size:12px;text-shadow:none;box-sizing:border-box;border-radius:4px;box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:left top 0;transform-origin:left top 0;-webkit-transition:opacity 1s cubic-bezier(.23,1,.32,1) 0ms,-webkit-transform .45s cubic-bezier(.23,1,.32,1) 0ms;transition:opacity 1s cubic-bezier(.23,1,.32,1) 0ms,-webkit-transform .45s cubic-bezier(.23,1,.32,1) 0ms;transition:transform .45s cubic-bezier(.23,1,.32,1) 0ms,opacity 1s cubic-bezier(.23,1,.32,1) 0ms;transition:transform .45s cubic-bezier(.23,1,.32,1) 0ms,opacity 1s cubic-bezier(.23,1,.32,1) 0ms,-webkit-transform .45s cubic-bezier(.23,1,.32,1) 0ms;z-index:1}.upgrade .pricecard .billing .dropdown-price,.upgrade .pricecard .billing .dropdown-price .store{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff}.upgrade .pricecard .billing .dropdown-price .store{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;padding:8px 24px 8px 16px;width:100%;-webkit-transition:all 1s cubic-bezier(.23,1,.32,1) 0ms;transition:all 1s cubic-bezier(.23,1,.32,1) 0ms;cursor:pointer}.upgrade .pricecard .billing .dropdown-price .store:hover{background-color:#eee}.upgrade .pricecard .billing .dropdown-price .store:hover i{-webkit-transform:rotate(270deg) translateY(7px);transform:rotate(270deg) translateY(7px)}.upgrade .pricecard .billing .dropdown-price .store .names{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:135px}.upgrade .pricecard .billing .dropdown-price .store .des{width:100%;color:rgba(51,51,51,.56);text-align:left;font-size:10px;-webkit-transform:scale(.8) translateX(-17px);transform:scale(.8) translateX(-17px)}.upgrade .pricecard .billing .dropdown-price .store .num{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:46px}.upgrade .pricecard .billing .dropdown-price .store .tips{-webkit-transform:scale(.8);transform:scale(.8);color:#4dbb7c}.upgrade .pricecard .billing .dropdown-price .store i{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.upgrade .base[data-enable=false] .pricecard,.upgrade .pro[data-enable=true] .pricecard{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:210px}.upgrade .base[data-enable=false] .pricecard .mode,.upgrade .pro[data-enable=true] .pricecard .mode{font-size:25px}.upgrade .base[data-enable=false] .pricecard .billing,.upgrade .base[data-enable=false] .pricecard .sales,.upgrade .pro[data-enable=true] .pricecard .billing .dropdown-price,.upgrade .pro[data-enable=true] .pricecard .billing i,.upgrade .pro[data-enable=true] .pricecard .discountrate,.upgrade .pro[data-enable=true] .pricecard .sales{display:none}.upgrade .pro[data-enable=true] .pricecard .billing{position:absolute;top:-28px;left:0;right:0;display:inherit;margin:10px 20%;border-radius:30px}.upgrade .pro .billing{color:#fff;background-color:#4dbb7c}.upgrade .features.diff{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;margin-top:20px}.upgrade .features.diff,.upgrade .features .feature{-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.upgrade .features .feature{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:unset;-ms-flex-pack:unset;justify-content:unset;margin:14px 20px 0;font-size:15px}.upgrade .features .feature.empty{height:27px}.upgrade .features .icon{margin-right:10px;width:15px}.upgrade .features .label{width:120px;font-size:15px;text-align:left}.upgrade .features a{color:inherit;cursor:auto}.upgrade .features a.active{padding-bottom:5px;border-bottom:1px dotted;-webkit-transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;cursor:pointer}.upgrade .features a.active:hover{color:#4285f4}.upgrade .features .label .remark{margin-left:5px;padding:2px 5px;background-color:#ffeb3b;font-size:12px;font-weight:400;border-radius:4px}.upgrade .features .label .remark.roadmap{background-color:#e2e2e2}.upgrade .ticket{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:13px}.upgrade .ticket .message{width:70%;text-align:center}.upgrade .ticket .line{margin:7px 0 0;width:100%;height:1px;background-image:-webkit-linear-gradient(.1deg,rgba(255,18,18,0) -2.8%,#e2e2e2 50.8%,rgba(0,159,8,0) 107.9%);background-image:linear-gradient(89.9deg,rgba(255,18,18,0) -2.8%,#e2e2e2 50.8%,rgba(0,159,8,0) 107.9%)}.upgrade .ticket .notice{margin:20px 20%;padding:5px 20px;color:#333;background-color:#e2e2e2;font-size:15px;font-weight:400;border-radius:4px}.upgrade .ticket .content{margin:0 0 13px;width:80%}.upgrade .ticket .content li{margin-bottom:6px}.upgrade .ticket .content li:last-child{margin-bottom:0}.upgrade .ticket .last{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:20px 0;width:100%}.upgrade .carousels{margin:20px 20px 13px}.upgrade .carousel.carousel-slider{height:420px;border-radius:4px;box-shadow:0 12px 18px -6px rgba(0,0,0,.3)}.upgrade .carousels setion{position:relative}.upgrade .carousels setion img{margin-top:-82px;width:100%}.upgrade .carousels .descr{position:absolute;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:80px;width:100%;padding-bottom:10px;background-color:#fff;font-size:17px}.simpread-upgrade-root.mini dialog-gp{border-radius:15px!important}.simpread-upgrade-root.mini dialog-content{padding:0!important;width:650px!important}.simpread-upgrade-root.mini dialog-gp .close{position:absolute}.simpread-upgrade-root.mini .upgrade .carousels{margin:0}.simpread-upgrade-root.mini .upgrade .carousels .descr{padding-bottom:70px;height:130px}.simpread-upgrade-root.mini .upgrade .carousel.carousel-slider{height:450px}.simpread-upgrade-root.mini .floating .billing{margin-bottom:30px;min-height:40px}.simpread-upgrade-root.mini footer{position:absolute;top:199px;left:-60px;right:-60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}</style><style type="text/css">:root{--sr-annote-color-0:#b4d9fb;--sr-annote-color-1:#ffeb3b;--sr-annote-color-2:#a2e9f2;--sr-annote-color-3:#a1e0ff;--sr-annote-color-4:#a8ea68;--sr-annote-color-5:#ffb7da}[sr-annote-bg-color]{color:inherit}[sr-annote-bg-color][data-color-type="0"]{background-color:var(--sr-annote-color-0)}[sr-annote-bg-color][data-color-type="1"]{background-color:var(--sr-annote-color-1)}[sr-annote-bg-color][data-color-type="2"]{background-color:var(--sr-annote-color-2)}[sr-annote-bg-color][data-color-type="3"]{background-color:var(--sr-annote-color-3)}[sr-annote-bg-color][data-color-type="4"]{background-color:var(--sr-annote-color-4)}[sr-annote-bg-color][data-color-type="5"]{background-color:var(--sr-annote-color-5)}[sr-annote-bb-color][data-color-type="1"]{border-bottom-color:var(--sr-annote-color-1)}[sr-annote-bb-color][data-color-type="2"]{border-bottom-color:var(--sr-annote-color-2)}[sr-annote-bb-color][data-color-type="3"]{border-bottom-color:var(--sr-annote-color-3)}[sr-annote-bb-color][data-color-type="4"]{border-bottom-color:var(--sr-annote-color-4)}[sr-annote-bb-color][data-color-type="5"]{border-bottom-color:var(--sr-annote-color-5)}[sr-annote-bl-color][data-color-type="1"]{border-left:5px solid var(--sr-annote-color-1)}[sr-annote-bl-color][data-color-type="2"]{border-left:5px solid var(--sr-annote-color-2)}[sr-annote-bl-color][data-color-type="3"]{border-left:5px solid var(--sr-annote-color-3)}[sr-annote-bl-color][data-color-type="4"]{border-left:5px solid var(--sr-annote-color-4)}[sr-annote-bl-color][data-color-type="5"]{border-left:5px solid var(--sr-annote-color-5)}[data-color-style="1"]{background-color:transparent!important;background-repeat:no-repeat;background-size:100% 100%}[data-color-style="1"][data-color-type="1"]{background-color:transparent!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAaCAMAAAB//6mtAAAAPFBMVEVHcEz/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zv/6zsmGdgxAAAAE3RSTlMAJJGnQ3Bh/ANS6An0u9o1FMp/ufrp4AAAAgZJREFUSMe1Vou2oyAM5BEIbxD+/183gFq99bZ7dnVOe6oWZwgJGRj7DcaY+et5BqtVFcA4eLraoLUFgJJLHzvBvuM00nPIzA4qazXkDuKka0VPIHNeiuee/RXO+qaAFjGFlpQQMi7JORcQ24Z+hRhcWpYYo5SikiQpkuBnldLXQwm5hANT53pxz9v1eZIdpEFCsmpLgXF+tVKGg640ZZrmDxacaNcIzqVE3EIoC7yYnjHuLxQ45cvquDP/RvgRiG4R2uYewlXKvXbo2r8x71NyFI4EZmZaj2vEShFJpnYHQopSAT/lgHEhZY2L+1/yVzAooJyyoEGEgLeEMFWC4K9NwHiVuFXlPSLNWbZ2g/61IuKN9AMyrwEUK5a7yQlLnUnwyr1v1luKCZsaq69kwwcCaC3ZWUZZPsFOkxaUA2pt8pHZE6KyhmnXbi3O1/xDSLkXqM8QH1FYwI+26nV1TwTQljy3ma8inSLYWiN+bp74ZX16hc4mnWkb7P0Jv9FejEB8+wsXlTfvLGIbthVvFN3jAbR0l34WUodzw6avJtIp1M6vya61EuTB1EqT3JW5jYfXiWw6Y626eOP7p5Th4FbrfqiZR4PxBjq5rv/BD8jplR12bcYBw44k4KCVtR9Q/Kszni/2W+MLh66n4WjLwz0LX5vqtDnqH4nitD8M/P10ZQ44q634A66hf2zVV84fAAAAAElFTkSuQmCC)}[data-color-style="1"][data-color-type="2"]{background-color:transparent!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAaCAMAAAB//6mtAAAANlBMVEVHcEyA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3uqA3urNaunbAAAAEXRSTlMAe+8uaFLb/AQCG0ANkralydBaCTIAAAIBSURBVEjHtVaJduMwCJRA6ED3///sIstn6qbd13hy+NlxRjBYDEp9h+B9WI6JMRIZnSnEyKQPGKKIjOwnwoD6CXLPuHmeeI5RkREi+dKEEeMKuRKFnJPAq98gvKyf0ORiXbc619KaBXDy7r2Pzwq5Ym0TlFqz5BMROb1fxi96CGeDlcPNz855wji1NddaSpOFcl5kMxHvFvEoKtdi4WDbONbjLdxMokgKelWMGZP/olpgGrKWGfA7yrdw0EQpRMlh1Py1CMnYDv/P7MZri8lJQiXTRnnmV4lzG2X9C9bMQVTTkf2FH6voWJvtf8Whb76Um41GDeD6J+BG9Ttk3B8irziXz5AftbFmrcI4JMrNfXqFGnd5su2fZR8omnhJQMOlNp+Ekaap0NT+CHu3cT5GWPsT/M6Np0haW30ketlu1VBQBvpD+gAAygZWjFgeWaFQSmMbJKPhiQL0FtWyzbzO9ss+d66/dQHnfrAJ+U0rv1qNdOn93ndi3dI692Jy86o1cWt0Sb/0QCh5uHw0ptp+xyktfwXAfRitac17l1hQYbbAYpBng+JYzxHZ4SQ1C0zyczwIw8GJ5siRx2ywNWNopPzJymaps4ljJghjIvKKlr0nBlXEcLXYLX8/nYR9lBJDphEvnWaZZQwKjNvZDE6hUFfCqyvNAevis/7A+s+rFf8Do0ByAiavdJkAAAAASUVORK5CYII=)}[data-color-style="1"][data-color-type="3"]{background-color:transparent!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAaCAMAAAB//6mtAAAANlBMVEVHcEyF0faF0faF0faF0faF0faF0faF0faF0faF0faF0faF0faF0faF0faF0faF0faF0faF0fYOABKzAAAAEXRSTlMA3e8uaFJ7/AQCGz8Nt5KlzvXM15AAAAIFSURBVEjHtVaNesIgDARCCA0/gfd/2YXSWuvUbd/sfWqlpQdcIBdjXmGJcVmvmSEh+lBxSYkxHPCICRg4TiwD5idon9F5NiKnZNArkf4EhARpg95JSs5ZEc1vsDyMn8HXYqnbUKWUZp0j/fTex3eD3rG2tVaKSNX1JADO74eJqx7K2dzGQSdKbR8YTStVxgSabbWusvkEzwaJoCpLsY4mHU2unbK/AI1FjCUUCZtizJDjN9UWxiFrIdon2f8E2jUrqhSArmHE/HHXZG+7+yPzvW5zCGtLxT2u9/wmc20jrP/CDJnKVkLieOIHERlR6P8FTZ31Xz2Fm32A4Bz1T2AopnpXuG2iaLiWz5Afalm/RWFcMtZGnx5B0k2e2vqH6RUlIK8LCG6Pzcfhdfsb8NIvYe8W5zYC6VfwE41dpKlNLpm9HjfxuBjv+kX6OOdAD7BhgHLJCAVzHscg++CuCEBvyazHLIZqnyTH/tYFiH6wCX0WTNysRrP0re87sZ7SEj2Y3ETzaU90ORw5cAan1OHyyXux/RmnpvwNzj2fRmsh8C1LrJB1M6kj+cQzQTHKQUxKpjleqsLnOMuDZTg44iw5qtYGWhrMN1xDE+/qiRnqqtx5q4iiwfXskZt+q3bLr6uTm3ENQ8YxX7yrZdYyaGHYW3NyJim1IJxdaRZYp2InHtjePFvxF2YVcjg/uCn9AAAAAElFTkSuQmCC)}[data-color-style="1"][data-color-type="4"]{background-color:transparent!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAaCAMAAAB//6mtAAAAMFBMVEWM2EJHcEyM2EKM2EKM2EKM2EKM2EKM2EKM2EKM2EKM2EKM2EKM2EKM2EKM2EKM2EKKz/w5AAAAEHRSTlP/AANRaHvzGy3WqT4Nk77kx+qVTgAAAb9JREFUSMe1VtlyxDAIwwYDvv//b4udY5Nus9NOE71kJocA4SDAXcEb5rWIZiQKFX3OguEFQswqKv6FNxr4iXd/0UvOzsgRRwTUrHmF3clGLsXg3QfAifjwoCjV1hl6qCm12HkAvoF7jzG21lKqVk9WlfK5gkUP42wb2RvpGTHVkYBl0GqdslHW8kMAr0jBMj3y8W9CjCJmCWFVTFTLQQvYxMaB9Lu0r6NxW5Qq+xmBozzUocM/YQWliltfj012RWpsEe4Ax2aSiT/2wKk1y7rQ4T5Uk+pVgVDQwHwbO3fgqnuTvZPa4FbYP0R+CTC0Knh3AEPKawVCNcL9aAFlBPCB4SkQmPpK6SH6jmVKpE8FGKfIRttT9JwIPdBj+jN3dR6cTb8GT0RpOLwIXKHQH6kgZjeHnQ/v/wDf8R8Htww7rxT/wMhXN88PIuWyGk4J3w9vqsPlM1GKVyN/Qe98Na1DkNXRhCbSTILtZC1j3MYHpuMnnc3dzYBrpc0R/XDw6YRjqalzNdheR+d3y5yvW6urcZd9I8I9meG3ZrdyvZ3sT4pYxJEv7rsMrItQ0X17WT7Jw5VQT7Tvy5U/4RRsxRfv9RDt9/UjOgAAAABJRU5ErkJggg==)}[data-color-style="1"][data-color-type="5"]{background-color:transparent!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAaCAMAAAB//6mtAAAAOVBMVEVHcEz/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r/t9r20adnAAAAEnRSTlMAVQ062Hwb/ARpK/Olk7XoScQnLSnCAAAB6ElEQVRIx7VW2Y7DIAzkMBCDOf//Y9cQmiZt2q12m1EegoTGF/ZYiFdYGONHWV+kRBOL0NryzwQalEV76+1yh/gAu4uLLVoURMkG0EivvZ6QsnRyqxgfse48XqE0xgSuZRMpVcg5MFw7wIUMALXWRBRnPOoXK5wPLZmz5snh5nfj3KGfgSJR6h7UGEfipNZnRhZf0FCCcOTaKNs53AiCQ0hkypox6716rgUnmwspU2d6y/geIdQeApsQzxVfhEJo+S/Mu5SFnCFFeSvrkd9G6GX9JzpBgJpMsccQPBEZqtD+bWHLb9yVexEWjTdPL/HvRkJuIfp7Ewgb03fI77nKeGvY3lgyVvdtC6RnABYjtO+ydyQj7QgAw6E23wT2/Hikdgl7g6LmC21X8DvXXxGPNrrEe263hNzSPf/X5CeEPNqA53O6xEKSalRAoclXFIArPLvMRDgZju+e7UFyXl1oRixTanhKb3ffJeuU1rlHkVsfKG6DTpmHGZhTl1cWICRoZ5xdiAdYqM/dgGqM3abEAIVV/xLqOcZtoTtxgBwAEkUG3hRx6QrO68VYOSLvBnzJTRekeNAzLnVkbnVbMIQcvedYn7restzaD7aTxVotu79lv8uMPUj57bDOV82qRNIfaM+Wq+WXresHSSV3cD8ocu8AAAAASUVORK5CYII=)}[data-color-style="2"]{background-color:transparent!important}[data-color-style="2"][data-color-type="1"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 50%,var(--sr-annote-color-1) 0)}[data-color-style="2"][data-color-type="2"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 50%,var(--sr-annote-color-2) 0)}[data-color-style="2"][data-color-type="3"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 50%,var(--sr-annote-color-3) 0)}[data-color-style="2"][data-color-type="4"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 50%,var(--sr-annote-color-4) 0)}[data-color-style="2"][data-color-type="5"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 50%,var(--sr-annote-color-5) 0)}[data-color-style="3"]{position:relative;background-color:transparent!important}[data-color-style="3"]:after{content:"";position:absolute;left:0;bottom:25px;height:8px;width:58px;border-radius:4px;opacity:.8;transition:all .3s}[data-color-style="3"][data-color-type="1"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 85%,var(--sr-annote-color-1) 0)}[data-color-style="3"][data-color-type="2"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 85%,var(--sr-annote-color-2) 0)}[data-color-style="3"][data-color-type="3"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 85%,var(--sr-annote-color-3) 0)}[data-color-style="3"][data-color-type="4"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 85%,var(--sr-annote-color-4) 0)}[data-color-style="3"][data-color-type="5"]{background-color:transparent!important;background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 85%,var(--sr-annote-color-5) 0)}sr-annote-note{position:relative;bottom:-5px;padding:0 4px;color:#fff;background-color:#333;font-weight:700;font-style:normal;font-family:arial,helvetica,clean,sans-serif;border-radius:5px;opacity:.8;cursor:pointer}sr-annote-note:after{content:"N"}pre.sr-annote+sr-annote-note{bottom:25px;right:25px}sr-annote-note:hover{opacity:1}sr-annote-note sr-annote-note-tip{position:absolute;left:0;top:0;padding:.5em 1em;max-width:400px;color:#fff;background:#101010;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;font-style:normal;text-shadow:none;font-size:12px;text-indent:0;white-space:pre;z-index:10;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.3);opacity:0;overflow:auto;pointer-events:none;z-index:20000;transition:all .18s ease-out .18s}sr-annote-note:hover sr-annote-note-tip{opacity:1;pointer-events:auto}sr-annote-note sr-annote-note-tip{overflow:hidden}sr-annote-note sr-annote-note-tip:hover{overflow:overlay}sr-annote-note sr-annote-note-tip::-webkit-scrollbar-track{background-color:transparent}sr-annote-note sr-annote-note-tip::-webkit-scrollbar{width:12px}sr-annote-note sr-annote-note-tip::-webkit-scrollbar-thumb{background-clip:padding-box;padding-top:80px;background-color:#ddd;border:3px solid transparent;border-radius:8px}</style><style type="text/css">.sr-annote-hideall{background-color:transparent!important;pointer-events:none}sr-annote-trigger{position:fixed!important;bottom:52px;right:32px;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 15px;padding:0;width:40px!important;height:40px!important;line-height:40px!important;color:#fff;background-color:rgba(245,82,70,.8);border-radius:50%;cursor:pointer;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);-webkit-transition:all .5s ease-in-out 0ms;transition:all .5s ease-in-out 0ms;overflow:visible!important;overflow:initial!important}sr-annote-trigger.open{right:95px}sr-annote-trigger.off{background-color:#bdbdbd}sr-annote-trigger sr-i{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;border-radius:50%}sr-annote{padding:6px 0;background-color:transparent;font-size:inherit;cursor:pointer}.sr-annote[data-type=code],.sr-annote[data-type=img]{border-bottom-width:5px;border-bottom-style:solid}sr-annote[data-color-type="0"]{padding:7px 0}sr-annote-floating{position:fixed;color:#fff;background:hsla(0,0%,6%,.95);font-weight:700;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.3);opacity:0;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:sr-annote-slideInUp;animation-name:sr-annote-slideInUp;z-index:2000}sr-annote-floating.fast{-webkit-animation-duration:.2s!important;animation-duration:.2s!important}sr-annote-floating.effect{-webkit-transition:all 1s cubic-bezier(.23,1,.32,1) .1s;transition:all 1s cubic-bezier(.23,1,.32,1) .1s}sr-annote-floating.hidden{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:sr-annote-slideInDown;animation-name:sr-annote-slideInDown;pointer-events:none}.sr-annote-floatingbar-hiden{display:none}@-webkit-keyframes sr-annote-slideInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes sr-annote-slideInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes sr-annote-slideInDown{0%{opacity:1;visibility:visible}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes sr-annote-slideInDown{0%{opacity:1;visibility:visible}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}sr-annote-floatingbar{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin:5px}sr-annote-floatingbar,sr-annote-floatingbar sr-anote-fb-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}sr-annote-floatingbar sr-anote-fb-item{margin-right:5px;cursor:pointer}sr-annote-floatingbar sr-anote-fb-item:last-child{margin-right:0}sr-annote-floatingbar sr-anote-fb-item{width:20px;height:20px;border-radius:50%;box-sizing:border-box}sr-annote-floatingbar sr-anote-fb-item[type=copy],sr-annote-floatingbar sr-anote-fb-item[type=export],sr-annote-floatingbar sr-anote-fb-item[type=link],sr-annote-floatingbar sr-anote-fb-item[type=note],sr-annote-floatingbar sr-anote-fb-item[type=remove],sr-annote-floatingbar sr-anote-fb-item[type=style],sr-annote-floatingbar sr-anote-fb-item[type=tag]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:50%}sr-annote-floatingbar sr-anote-fb-item[type=style]{background-color:#f73859!important}sr-annote-floatingbar sr-anote-fb-item[type=export]{background-color:#cc0e74}sr-annote-floatingbar sr-anote-fb-item[type=copy]{background-color:#a78674}sr-annote-floatingbar sr-anote-fb-item[type=link]{background-color:#7f39fb}sr-annote-floatingbar sr-anote-fb-item[type=remove]{background-color:#f44336}sr-annote-floatingbar sr-anote-fb-item[remove=confirm]{-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-transition:all .2s ease-in-out 0s;transition:all .2s ease-in-out 0s}sr-annote-sidebar-bg{position:fixed;top:0;right:0;bottom:180px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:260px;font-size:22.4px;font-size:1.4rem;font-weight:500;opacity:0;-webkit-transform:translateX(256px);transform:translateX(256px);-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms}sr-annote-sidebar-bg.mini{pointer-events:none}sr-annote-sidebar-bg:hover{z-index:2147483647}sr-annote-sidebar-bg.open{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}sr-annote-sidebar{margin:3px 4px 0;padding-left:20px;height:100%;overflow-x:hidden}sr-annote-sidebar.mini{pointer-events:none}sr-annote-sidebar *{color:rgba(0,0,0,.6);word-break:break-all;box-sizing:border-box}sr-annote-sidebar{overflow-y:hidden}sr-annote-sidebar:hover{overflow-y:overlay}sr-annote-sidebar::-webkit-scrollbar-track{background-color:transparent}sr-annote-sidebar::-webkit-scrollbar{width:12px}sr-annote-sidebar::-webkit-scrollbar-thumb{padding-top:80px;background-clip:padding-box;background-color:#ddd;border:3px solid transparent;border-radius:8px;border-radius:10px;border:6px solid transparent;background-color:rgba(85,85,85,.55)}sr-annote-sidebar::-webkit-scrollbar{width:0;-webkit-transition:width .7s cubic-bezier(.4,0,.2,1);transition:width .7s cubic-bezier(.4,0,.2,1)}sr-annote-sidebar:hover::-webkit-scrollbar{width:16px}sr-annote-sidebar[srcoll=on]:hover sr-annote-sidebar-card[type=option].mini{-webkit-transform:translateX(-16px);transform:translateX(-16px)}sr-annote-sidebar[srcoll=on]:hover sr-annote-sidebar-card.off{-webkit-transform:translateX(190px);transform:translateX(190px)}sr-annote-sidebar-cards{display:block}sr-annote-sidebar-card{position:relative;display:block!important;margin:12px 7px 12px 12px;color:rgba(51,51,51,.87);background-color:#fff;border-radius:4px;box-shadow:0 2px 5px rgba(0,0,0,.08);-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;pointer-events:auto}sr-annote-sidebar-card:hover{box-shadow:0 10px 20px 0 rgba(168,182,191,.6);-webkit-transform:translateY(-1px);transform:translateY(-1px)}sr-annote-sidebar-card:last-child{margin-bottom:30px}sr-annote-sidebar-card.off{display:block;-webkit-transform:translateX(210px);transform:translateX(210px);-webkit-transition:all .25s ease-out;transition:all .25s ease-out}sr-annote-sidebar-card.off:hover{-webkit-transform:translateX(120px)!important;transform:translateX(120px)!important}sr-annote-sidebar-card.hide{display:block;-webkit-transform:translateX(256px);transform:translateX(256px);-webkit-transition:all .25s ease-out;transition:all .25s ease-out}sr-annote-sidebar-card-anchor{position:absolute;left:0;top:0;width:90%;height:100%}sr-annote-sidebar-card-action{position:absolute;top:10px;right:3px;display:block;width:12px;height:12px;line-height:12px;-webkit-transition:all .25s ease-out;transition:all .25s ease-out;cursor:pointer;z-index:20000}sr-annote-sidebar-card-action.open{-webkit-transform:rotate(90deg);transform:rotate(90deg)}sr-annote-sidebar-card[mode=mini]{overflow:hidden}sr-annote-sidebar-card[mode=mini] sr-annote-sidebar-preview{display:block;padding:6px 12px 5px 10px;height:32px;font-size:13px;font-weight:400;white-space:nowrap;text-align:left;text-overflow:ellipsis;-webkit-transition:all .25s ease-out;transition:all .25s ease-out;overflow:hidden}sr-annote-sidebar-card[mode=mini][type=img] sr-annote-sidebar-preview{text-align:center}sr-annote-sidebar-card[mode=mini] sr-annote-sidebar-detail{padding:0 15px;height:0}sr-annote-sidebar-card[mode=mini] sr-annote-sidebar-note,sr-annote-sidebar-card[mode=mini] sr-annote-sidebar-toolbars{display:none}sr-annote-sidebar-card[mode=mini] pre{margin:0!important;padding:0!important;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}sr-annote-sidebar-card[mode=normal] sr-annote-sidebar-preview{display:none}sr-annote-sidebar-card[mode=normal] sr-annote-sidebar-detail{margin-bottom:15px;padding:15px 15px 0;height:auto;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}sr-annote-sidebar-card[data-color-type="0"]{display:none!important}sr-annote-sidebar-card pre{margin:0!important;padding:0!important;background-color:transparent!important;max-height:200px;font-size:10px;overflow:hidden}sr-annote-sidebar-card input,sr-annote-sidebar-card textarea{font-size:12px!important}sr-annote-sidebar-card img{margin:0;padding:0;max-height:100px;max-width:80%;background:#fff;border:0;border-radius:6px}sr-annote-sidebar-detail{display:block;padding:15px;width:100%;color:#fff;font-size:10px;text-align:justify;border-top-left-radius:4px;border-top-right-radius:4px;-webkit-transition:all .25s ease-out;transition:all .25s ease-out}sr-annote-sidebar-card[type=img] sr-annote-sidebar-detail{text-align:center}sr-annote-sidebar-tags{-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:15px}sr-annote-sidebar-tag,sr-annote-sidebar-tags{display:-webkit-box;display:-ms-flexbox;display:flex}sr-annote-sidebar-tag{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:4px 12px 12px 0;height:22px;font-size:14px;font-size:.875rem;font-weight:700;white-space:nowrap;border-radius:16px;outline:none;cursor:pointer;overflow:hidden;-webkit-transition:all .2s ease-in-out 0s;transition:all .2s ease-in-out 0s}sr-annote-sidebar-note{display:block;padding:15px 15px 0;width:100%;background-color:#fff;text-align:justify;font-size:13px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}sr-annote-sidebar-toolbars{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:10px;height:32px;background-color:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px}sr-annote-sidebar-toolbar,sr-annote-sidebar-toolbars{-webkit-box-align:center;-ms-flex-align:center;align-items:center}sr-annote-sidebar-toolbar{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:5px;width:20px;height:20px;line-height:20px;border-radius:50%}sr-annote-sidebar-toolbar[remove=confirm]{-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-transition:all .2s ease-in-out 0s;transition:all .2s ease-in-out 0s}sr-annote-sidebar-toolbar[remove=confirm] svg path{fill:#f44336}sr-annote-sidebar-card[type=unread]{background-color:#1fab89}sr-annote-sidebar-card[type=unread] sr-annote-sidebar-detail.title{padding:0;text-align:left;font-size:14px}sr-annote-sidebar-card[type=unread] sr-annote-sidebar-detail.desc{padding:0 0 0 10px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;border-left:1px outset #fff;border-top-left-radius:0;border-top-right-radius:0}sr-annote-sidebar-card[type=unread] sr-annote-sidebar-tag{color:#fff}sr-annote-sidebar-card[type=unread][mode=mini] sr-annote-sidebar-preview{color:#fff;font-size:13px}sr-annote-sidebar-card[type=option]{height:32px;background-color:transparent;box-shadow:none;overflow:visible;overflow:initial}sr-annote-sidebar-card[type=option]:hover{-webkit-transform:translateY(0);transform:translateY(0)}sr-annote-sidebar-card[type=option].mini{margin-right:0}sr-annote-sidebar-card[type=option] sr-annote-sidebar-card-action,sr-annote-sidebar-card[type=option] sr-annote-sidebar-card-anchor{display:none}sr-annote-sidebar-card[type=option] sr-annote-sidebar-preview{background-color:transparent}sr-annote-sidebar-options{position:absolute;top:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-right:5px;height:100%;background-color:#3a3a3a;border-left:10px outset #222;border-radius:4px}sr-annote-sidebar-option,sr-annote-sidebar-options{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}sr-annote-sidebar-option{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin-left:5px;width:20px;height:20px;border-radius:50%;-webkit-transition:all .25s ease-out;transition:all .25s ease-out;cursor:pointer}sr-annote-sidebar-option[off=true],sr-annote-sidebar-option[side=false]:not(:first-child){width:0;margin-left:0}sr-annote-sidebar-option[off=true]~sr-annote-sidebar-option:last-child svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}sr-annote-sidebar-option[type=drag][state=on] svg path,sr-annote-sidebar-option[type=goon][state=on] svg path,sr-annote-sidebar-option[type=save][state=on] svg path{fill:#1fab89}sr-annote-sidebar-option[type=collapse][state=on] svg{-webkit-transform:rotate(90deg);transform:rotate(90deg)}sr-annote-sidebar-option[lock=true] svg path{fill:#f55246!important}sr-annote-sidebar-card[type=option]:hover~sr-annote-sidebar-card[type=unread]{z-index:-1}</style><style type="text/css">@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.sr-alertgp{position:fixed;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;background-color:rgba(51,51,51,.8);z-index:2147483647}.sr-alertgp .alert{min-width:400px;min-height:400px;width:650px;background-color:#fff;border-radius:4px;box-shadow:0 14px 45px rgba(0,0,0,.247059);-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.sr-alertgp .alert,.sr-alertgp .alert .loading{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sr-alertgp .alert .loading{position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:35%;background-color:transparent}.alert .loading .progress{display:block;margin:10px auto;max-width:80%;max-height:250px;width:20%}.alert .loading .progress .percentage{fill:#666;font-family:sans-serif;font-size:.5em;text-anchor:middle}.alert .loading .progress .circle-bg{fill:none;stroke:#eee;stroke-width:3.8}.alert .loading .progress .circle{fill:none;stroke-width:2.8;stroke-linecap:round;stroke:#1dba90;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}@-webkit-keyframes scaleAnimation{0%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scaleAnimation{0%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.sr-alertgp .alert .close{position:absolute;top:0;right:0;z-index:2}.sr-alertgp .alert .close:hover{-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-transition:all .25s ease-out;transition:all .25s ease-out}.sr-alertgp .alert .sr-alert-icon img{max-width:650px;width:100%;-webkit-transform:scale(.7);transform:scale(.7);-webkit-transition:all .5s ease-out;transition:all .5s ease-out}.sr-alertgp .alert .actionbar{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:20px;width:80%;height:50px;-webkit-transition:all 1s cubic-bezier(.23,1,.32,1) 0ms;transition:all 1s cubic-bezier(.23,1,.32,1) 0ms}.sr-alertgp .alert .actionbar,.sr-alertgp .alert.notification{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.sr-alertgp .alert.notification{width:500px;min-height:350px}.sr-alertgp .alert.notification[data-state=siren]{background-image:-webkit-radial-gradient(circle farthest-corner at 10% 20%,#cd212a 0,#ec5f05 90%);background-image:radial-gradient(circle farthest-corner at 10% 20%,#cd212a 0,#ec5f05 90%)}.sr-alertgp .alert.notification[data-state=lock]{background-image:-webkit-radial-gradient(circle farthest-corner at 10% 20%,#8451a1 0,rgba(132,81,161,.83) 90%);background-image:radial-gradient(circle farthest-corner at 10% 20%,#8451a1 0,rgba(132,81,161,.83) 90%)}.sr-alertgp .alert.notification[data-state=warning]{background-image:-webkit-linear-gradient(left,#f2709c,#ff9472);background-image:linear-gradient(90deg,#f2709c,#ff9472)}.sr-alertgp .alert.notification[data-state=bug]{background-image:-webkit-linear-gradient(bottom,#ad5389,#3c1053);background-image:linear-gradient(0deg,#ad5389,#3c1053)}.sr-alertgp .alert.notification[data-state=safe],.sr-alertgp .alert.notification[data-state=server]{background-color:#8ec5fc;background-image:-webkit-linear-gradient(28deg,#8ec5fc,#e0c3fc);background-image:linear-gradient(62deg,#8ec5fc,#e0c3fc)}.sr-alertgp .alert.notification .sr-alert-icon{position:relative;width:100%}.sr-alertgp .alert.notification .loading .progress{padding:5px;background-color:#fff;border-radius:50%}.sr-alertgp .alert.notification .loading .progress .circle-bg{stroke:transparent}.sr-alertgp .alert.notification .loading .progress .circle{stroke-width:1}.sr-alertgp .alert.notification[data-state=siren] .loading .progress .circle{stroke:#cd212a}.sr-alertgp .alert.notification[data-state=lock] .loading .progress .circle{stroke:#8451a1}.sr-alertgp .alert.notification[data-state=warning] .loading .progress .circle{stroke:#f2709c}.sr-alertgp .alert.notification[data-state=bug] .loading .progress .circle{stroke:#ad5389}.sr-alertgp .alert.notification[data-state=safe] .loading .progress .circle,.sr-alertgp .alert.notification[data-state=server] .loading .progress .circle{stroke:#8ec5fc}.sr-alertgp .alert.notification .content{padding:10px 70px;width:100%;color:#fff;text-align:center;font-size:28.8px;font-size:1.8rem;box-sizing:border-box}.sr-alertgp .alert.notification .flag{position:absolute;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;z-index:100000}.sr-alertgp .alert.notification .flag img{width:50px}.sr-alertgp .alert.notification[data-state=lock] .flag img{width:30px}.sr-alertgp .alert.notification .flag img.swing{-webkit-transform-origin:center;transform-origin:center;-webkit-animation-name:swing;animation-name:swing;-webkit-animation-duration:1s;animation-duration:1s}.sr-alertgp .alert.notification .actionbar{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;margin:0}.sr-alertgp .alert.notification .return{padding:5px 32px;color:#333;background-color:#fff;font-size:15px;font-weight:700;border-radius:56px}.sr-alertgp .alert.notification .return:hover{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}</style><style type="text/css">@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}sr-promo-bg{position:fixed;right:15px;bottom:15px;z-index:2147483646}sr-promo,sr-promo-notice{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px;color:rgba(51,51,51,.87);background-color:#fff;border-radius:4px;box-shadow:0 12px 18px -6px rgba(0,0,0,.3);overflow:hidden;-webkit-transform-origin:bottom;transform-origin:bottom;-webkit-transition:all .6s ease;transition:all .6s ease;-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}sr-promo img{width:220px;cursor:pointer}sr-promo-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0 0;width:100%}sr-promo-a{padding:5px 10px;color:#fff;font-size:12px;font-weight:700;border-radius:2px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);cursor:pointer}sr-promo-a.later{background-color:#2196f3}sr-promo-a.cancel{background-color:#757575}sr-promo-tip{font-size:12px;padding:5px 10px;border-radius:2px}sr-promo-notice{position:absolute;top:10px;left:10px;right:10px;height:293px;padding-bottom:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;font-size:12px;border-radius:0;box-shadow:none;overflow-y:hidden}sr-promo-notice:hover{overflow-y:overlay}sr-promo-notice-title{font-weight:700;text-align:center;margin-bottom:5px;width:100%;font-size:14px}sr-promo-notice-content{margin-top:5px}</style><style type="text/css">.simpread-tipsalert-root dialog-gp{position:absolute}.simpread-tipsalert-root dialog-gp .close{position:absolute;top:0;right:0;z-index:2}.simpread-tipsalert-root dialog-content{padding:0!important;width:650px!important}.simpread-tipsalert-root .details{position:relative;color:rgba(51,51,51,.87);font-family:Hiragino Sans GB,Microsoft Yahei;text-shadow:none}.simpread-tipsalert-root .details .carousel.carousel-slider{height:450px;border-radius:4px;box-shadow:0 12px 18px -6px rgba(0,0,0,.3)}.simpread-tipsalert-root .details .carousels setion sr-div-center{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:321px;box-sizing:border-box}.simpread-tipsalert-root .details .carousels setion sr-div-center.hidden{display:none}.simpread-tipsalert-root .details .carousels setion sr-div-center img{margin-top:20px!important;height:321px;width:auto!important}.simpread-tipsalert-root .details .carousels setion sr-div-center sr-video{position:absolute;left:0;right:0;width:100%;height:321px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:2}.simpread-tipsalert-root .details .carousels setion .tipsimg.error{width:0!important;height:0!important}.simpread-tipsalert-root .details .carousels setion .tipsimg:after{content:"\F1C5" " Sorry, the image below is broken :(";font-family:Font Awesome\ 5 Free;font-weight:900;position:absolute;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:650px;height:100%;color:#646464;background-color:#fff;z-index:2}.simpread-tipsalert-root .details .carousels setion sr-div-center sr-video+img{opacity:.5}.simpread-tipsalert-root .details .carousels setion img{margin-top:-82px;width:100%}.simpread-tipsalert-root .details .carousels setion video{height:321px}.simpread-tipsalert-root .details .carousels setion video.active{display:block}.simpread-tipsalert-root .details .carousels .descr{position:absolute;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:80px;width:100%;padding-bottom:10px;background-color:#fff;font-size:14px}.simpread-tipsalert-root .details .carousels .descr b{margin:0 3px}.simpread-tipsalert-root .details .carousels .descr.large{font-size:17px}.simpread-tipsalert-root .floating{position:absolute;left:0;right:0;bottom:14px;height:80px;overflow-y:hidden}.simpread-tipsalert-root .floating,.simpread-tipsalert-root .floating .docs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.simpread-tipsalert-root .floating .docs{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1px 40px;height:30px;color:#fff;background-color:#4dbb7c;font-size:15px;font-weight:400;border-radius:30px;-webkit-transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;transition:all .5s cubic-bezier(.23,1,.32,1) 0ms;box-shadow:0 12px 18px -6px rgba(0,0,0,.3)}.simpread-tipsalert-root footer{position:absolute;top:199px;left:-60px;right:-60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}</style><style type="text/css">[customscroll],[data-customscroll]{overflow-y:hidden}[customscroll]:hover,[data-customscroll]:hover{overflow-y:overlay}[customscroll]::-webkit-scrollbar-track,[data-customscroll]::-webkit-scrollbar-track{background-color:transparent}[customscroll]::-webkit-scrollbar,[data-customscroll]::-webkit-scrollbar{width:12px}[customscroll]::-webkit-scrollbar-thumb,[data-customscroll]::-webkit-scrollbar-thumb{background-clip:padding-box;padding-top:80px;background-color:#ddd;border:3px solid transparent;border-radius:8px}sr-annote-popup{display:block;padding-right:20px;width:480px;height:100%}sr-annote-popup-gp{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:25px}sr-annote-popup-div{width:100%;color:var(--text-color);text-align:left;font-weight:400}sr-annote-popup-label{color:rgba(0,137,123,.8);font-size:14px;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;transition:all .45s cubic-bezier(.23,1,.32,1) 0ms;-webkit-transform:scale(.75) translateY(-8px);transform:scale(.75) translateY(-8px);-webkit-transform-origin:left top 0;transform-origin:left top 0}sr-annote-popup-desc{position:relative;margin:10px 0;padding:10px;background-color:var(--background-hover-color);font-size:15px;text-align:justify;font-weight:400;line-height:1.6;border-radius:4px}sr-annote-popup-desc sr-annote{background-color:transparent!important}sr-annote-popup-gp[type=img]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}sr-annote-popup-gp svg path{fill:var(--active-color)!important}sr-annote-popup-gp ol,sr-annote-popup-gp ul{margin:0 0 1.2em;margin-left:1.3em;padding:0;list-style:disc}sr-annote-popup-gp ol li,sr-annote-popup-gp ul li{margin:0 0 1.2em;font-size:15px;list-style:disc}sr-annote-popup-gp a{padding:0 5px;vertical-align:baseline;vertical-align:initial}sr-annote-popup-gp a,sr-annote-popup-gp a:link{color:#463f5c;font-size:inherit;font-weight:inherit;text-decoration:underline;border:none}sr-annote-popup-gp a:hover{background:transparent}sr-annote-popup-gp img{margin:0;padding:0;max-width:50%;height:auto;background:#fff;border:0;border-radius:6px;box-shadow:0 20px 20px -10px rgba(0,0,0,.1)}sr-annote-popup-gp pre{padding:10px!important;background-color:transparent!important;max-height:400px;white-space:pre-line;word-break:break-all;border-radius:6px!important;overflow-x:hidden!important}sr-annote-popup auto-complete list-view{max-height:150px!important}sr-annote-popup list-view::-webkit-scrollbar-thumb{background-clip:padding-box;border-radius:10px;border:2px solid transparent;background-color:rgba(85,85,85,.55)}sr-annote-popup list-view::-webkit-scrollbar{width:10px;-webkit-transition:width .7s cubic-bezier(.4,0,.2,1);transition:width .7s cubic-bezier(.4,0,.2,1)}sr-annote-popup-gp sr-annote-floatingbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}sr-annote-popup-gp sr-annote-floatingbar sr-anote-fb-item[data-color-type]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;width:65px;height:20px;border-radius:5px}sr-annote-popup-gp sr-annote-floatingbar sr-anote-fb-item:last-child{margin-right:0}sr-annote-popup-gp sr-anote-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px;padding:0 5px;width:65px;height:20px;font-size:13px;font-weight:400;border-radius:5px;-webkit-transition:all .5s ease-in-out 0ms;transition:all .5s ease-in-out 0ms}sr-annote-popup-gp sr-anote-item:last-child{margin-right:0}sr-annote-popup-gp sr-anote-item.hidden{opacity:0;pointer-events:none}sr-annote-popup-gp sr-anote-lock{position:absolute;left:0;top:-3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;background-color:hsla(0,0%,100%,.8);z-index:1}sr-annote-popup-gp sr-anote-lock svg{margin-top:3px;cursor:pointer}</style><style type="text/css">.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80)}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20)}</style><style type="text/css">sr-search{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:10px;padding:10px;font-size:13px;border:1px solid #dfe1e5;border-radius:8px}sr-search.floating{position:fixed;top:170px;right:10px;width:400px;max-height:500px;z-index:2000}sr-search.bing{margin-left:-20px;margin-right:-20px}sr-search sr-search-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px}sr-search sr-search-header img{margin-right:10px;width:22px}sr-search sr-search-header sr-search-span{font-weight:700}sr-search-unreader-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid #dfe1e5;margin-bottom:5px}sr-search-content{max-height:666px;overflow-x:hidden;overflow-y:auto}sr-search-unreader-title{font-weight:700;font-size:15px;margin-bottom:5px}sr-search-unreader-create{margin-bottom:5px;color:#70757a}sr-search-unreader-desc{margin-bottom:5px}sr-search-unreader-tags{margin-bottom:5px;color:#70757a;font-size:11px;font-style:italic}sr-search-unreader-tag{margin-right:5px}sr-search-paging{width:100%;margin:10px}sr-search-paging,sr-search-paging sr-search-more{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}sr-search-paging sr-search-more{width:36px;height:36px;box-shadow:0 0 0 1px rgba(0,0,0,.04),0 4px 8px 0 rgba(0,0,0,.2);border-radius:50%;opacity:.9;cursor:pointer}sr-search-paging sr-search-more:hover{opacity:1}sr-search-paging sr-search-more.disable{cursor:no-drop}sr-search-paging sr-search-more svg{width:24px;height:24px;fill:#757575}sr-search-info{text-align:center}</style><script id="cktools">// ==UserScript==
// @name         CKTools
// @namespace    ckylin-script-lib-combined-tools
// @version      1.6.1
// @match        http://*
// @match        https://*
// @author       CKylinMC
// @license      GPLv3 License
// ==/UserScript==
(function () {
	const VERSION = 1.6;
	if ('CKTools' in window) {
		if (!window.CKTools.ver) console.warn('Unrecognized version of CKTools is already loaded, overwriting...');
		else if (window.CKTools.ver > VERSION) throw new Error("You have newer version CKTools loaded. Aborting loading version " + VERSION);
		else console.warn(`You have older version of CKTools (${window.CKTools.ver}) was loaded, and now upgrading to newer version ${VERSION}.`);
	}
	class CKTools {
		static ver = VERSION
		static get(q, base = document) {
			return base.querySelector(q);
		}
		static getAll(q, base = document) {
			return [...base.querySelectorAll(q)];
		}
		static domHelper(options = {}, compatibleParm2 = {}) {
			let tagName = 'div';
			if (typeof (options) == 'string') {
				/* Migrate from version 1 */
				tagName = options;
				/* Migrate from makeDom */
				if (compatibleParm2.constructor.name == 'Object') options = compatibleParm2;
				else if (compatibleParm2.constructor.name == 'AsyncFunction') options = {
					initAsync: compatibleParm2
				};
				else if (compatibleParm2.constructor.name == 'Function') options = {
					init: compatibleParm2
				};
				else options = {};
			}
			if (options.listeners) {
				/* Migrate from version 1 */
				if (!options.on) options.on = {};
				Object.assign(options.on, options.listeners);
			}
			if (options.classnames) {
				/* Migrate from version 1 */
				if (!options.classList) options.classList = [];
				options.classList.concat(options.classnames);
			}
			if (options.tag) tagName = options.tag;
			let el;
			if (options.from) {
				if (options.from instanceof HTMLElement) {
					el = options.from;
				} else if (typeof (options.from) == "string") {
					els = domHelper(tagName, {
						html: options.from
					});
					if (els.childElementCount === 0) {
						el = document.createElement(tagName);
					} else if (els.childElementCount === 1) {
						el = els.firstElementChild;
					} else {
						el = els;
					}
				}
			} else if (options.query) {
				const query = document.querySelector(options.query);
				if (query) el = query;
				else return null;
			} else el = document.createElement(tagName);
			if (options.id) el.id = options.id;
			if (options.html) el.innerHTML = options.html;
			if (options.text) el.innerText = options.text;
			if (options.attr) {
				for (const ak of Object.keys(options.attr)) {
					el.setAttribute(ak, options.attr[ak]);
				}
			}
			if (options.cssText) el.style.cssText = options.cssText;
			if (options.style) Object.assign(el.style, options.style);
			if (options.css) Object.assign(el.style, options.css);
			if (options.childs) {
				if (options.childs instanceof Array) options.childs.filter(el => !!el).forEach(child => {
					if (child instanceof HTMLElement) el.appendChild(child);
					else if (child.hasOwnProperty('type') && child.hasOwnProperty('content')) {
						switch (child.type) {
							case 'html': {
								arguments.callee('span', {
									from: child.content,
									append: el
								});
							}
							break;
						case 'style': {
							const scoped = child.hasOwnProperty('scoped') && !!child.scoped;
							arguments.callee('style', {
								html: child.content,
								append: el,
								attr: {
									scoped
								}
							});
						}
						break;
						default:
							el.appendChild(arguments.callee(child.type, child.content));
						}
					} else el.appendChild(document.createTextNode(child));
				});
				else if (options.childs instanceof HTMLElement) el.appendChild(options.childs);
				else el.appendChild(document.createTextNode(options.childs));
			}
			if (options.classlist) {
				if (options.classlist instanceof Array) options.classlist.forEach(classname => {
					el.classList.add(classname);
				});
				else el.classList.add(...options.classlist.split(" "));
			}
			if (options.classList) {
				if (options.classList instanceof Array) options.classList.forEach(classname => {
					el.classList.add(classname);
				});
				else el.classList.add(...options.classList.split(" "));
			}
			if (options.on) {
				for (let listenerName of Object.keys(options.on)) {
					el.addEventListener(listenerName, options.on[listenerName]);
				}
			}
			if (options.off) {
				for (let listenerName of Object.keys(options.of)) {
					el.removeEventListener(listenerName, options.off[listenerName]);
				}
			}
			if (options.bind) {
				const serverName = "$bindingserver" + Math.floor(Math.random() * 100000);
				const bindings = CKTools.deepClone(options.bind);
				const unbindProperty = (prop) => bindings[prop] = undefined;
				const unbindAllProperties = () => el[serverName].disconnect();
				el[serverName] = new MutationObserver(mutations => {
					for (const mutation in mutations) {
						if (bindings.hasOwnProperty(mutation.attributeName)) {
							try {
								bindings[mutation.attributeName]({
									target: mutation.target,
									attributeName: mutation.attributeName,
									attributeNamespace: mutation.attributeNamespace,
									oldValue: mutation.oldValue,
									newValue: mutation.target.getAttribute(mutation.attributeName) || undefined,
									unbind: () => unbindProperty(mutation.attributeName),
									stopListen: () => (unbindAllProperties(), el[serverName] = undefined)
								});
							} catch (e) {}
						}
					}
				});
				el.addEventListener('DOMNodeRemoved', () => (unbindAllProperties(), el[serverName] = undefined));
				el[serverName].observe(el, {
					attributes: true,
					attributeOldValue: true
				});
			}
			if (options.append && options.append instanceof HTMLElement) options.append.appendChild(el);
			if (options.insertBefore && insertBefore instanceof HTMLElement) options.insertBefore.parentNode.insertBefore(el, options.insertBefore);
			if (options.insertAfter && insertAfter instanceof HTMLElement) options.insertAfter.parentNode.insertAfter(el, options.insertAfter);
			if (options.init && options.init instanceof Function) options.init(el);
			if (options.initAsync && options.initAsync instanceof Function) {
				return options.initAsync(el).then(() => el);
			}
			return el;
		}
		static makeDom() {
			console.warn('"makeDom" has been deprecated. Redirecting to "domHelper"...');
			return CKTools.domHelper(...arguments);
		}
		static addDom(item) {
			const make = (tag = 'div') => document.createElement(tag);
			const txt = (it = '') => document.createTextNode(it);
			class DOMItem {
				constructor(it = '') {
					this.setItem(it);
				}
				setItem(it = '') {
					if (typeof it === 'string' || it instanceof String) {
						this.el = txt(it);
					} else if (it instanceof HTMLElement) {
						this.el = it;
					} else this.el = txt(it.toString());
					if (!this.target) this.target = document.body;
					this.mode = 'child';
					return this;
				}
				inside(q = document.body) {
					this.mode = 'child';
					if (q instanceof HTMLElement) {
						this.target = q;
					} else if (typeof q === 'string' || q instanceof String) {
						const ql = this.target.querySelector(q);
						if (ql) this.target = ql;
					}
					return this;
				}
				after(a = null) {
					this.mode = 'child-after';
					if (a instanceof HTMLElement) {
						this.after = a;
					} else if (typeof a === 'string' || a instanceof String) {
						const al = this.target.querySelector(a);
						if (al) this.after = al;
					}
					return this;
				}
				before(a = null) {
					this.mode = 'child-before';
					if (a instanceof HTMLElement) {
						this.before = a;
					} else if (typeof a === 'string' || a instanceof String) {
						const al = this.target.querySelector(a);
						if (al) this.before = al;
					}
					return this;
				}
				done() {
					switch (this.mode) {
						case "child": {
							if (this.el && this.target)
								this.target.appendChild(this.el);
						}
						break;
					case "child-before": {
						if (this.el && this.target && this.before)
							this.target.insertBefore(this.el, this.before);
					}
					break;
					case "child-after": {
						if (this.el && this.target && this.after)
							this.target.insertBefore(this.el, this.after.nextSibling);
					}
					break;
					}
				}
			}
			return new DOMItem(item);
		}
		static deepClone(obj) {
			let newObject = {};
			if (Array.isArray(obj)) {
				newObject = [];
				for (let i = 0; i < obj.length; i++) {
					newObject.push(CKTools.deepClone(obj[i]));
				}
				return newObject;
			}
			Object.keys(obj).map(key => {
				if (typeof obj[key] === 'object') {
					newObject[key] = CKTools.deepClone(obj[key]);
				} else {
					newObject[key] = obj[key];
				}
			});
			return newObject;
		}
		static getCookie(name) {
			const value = `; ${document.cookie}`;
			const parts = value.split(`; ${name}=`);
			if (parts.length === 2) return parts.pop().split(';').shift();
		}
		static clearAllCookies() {
			return document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
		}
		static getUrlParam(key) {
			return (new URL(location.href)).searchParams.get(key);
		}
		static wait(ms) {
			return new Promise(r => setTimeout(r, ms));
		}
		static async waitForDom(query, domparent = document, maxRetries = 20, gagms = 200) {
			let i = maxRetries;
			while (--i > 0) {
				if (domparent.querySelector(query)) return true;
				await CKTools.wait(gagms);
			}
			return false;
		}
		static async waitForAttribute(q, attr) {
			let i = 50;
			let value;
			while (--i >= 0) {
				if ((attr in q) &&
					q[attr] != null) {
					value = q[attr];
					break;
				}
				await wait(100);
			}
			return value;
		}
		static async waitForPageVisible() {
			if (document.hidden) return true;
			return new Promise(r => {
				const handler = () => {
					r(true);
					document.removeEventListener('visibilitychange', handler);
				};
				document.addEventListener("visibilitychange", handler)
			});
		}
		static clearStyles(className = "injectedStyle") {
			let dom = document.querySelectorAll("style." + className);
			if (dom)[...dom].forEach(e => e.remove());
		}
		static addStyle(s, className = "injectedStyle", mode = "append", injectBase = document.head) {
			switch (mode) {
				default:
				case "append":
					break;
				case "unique":
					if (document.querySelector("style." + className)) return;
					break;
				case "update":
					CKTools.clearStyles(className);
					break;
			}
			let style = document.createElement("style");
			style.classList.add(className);
			style.innerHTML = s;
			injectBase.appendChild(style);
		}
		// stackoverflow
		static debounce(func, timeout = 300) {
			let timer;
			return (...args) => {
				clearTimeout(timer);
				timer = setTimeout(() => {
					func.apply(this, args);
				}, timeout);
			};
		}
		static throttle(callback, limit) {
			var waiting = false;
			return function () {
				if (!waiting) {
					callback.apply(this, arguments);
					waiting = true;
					setTimeout(function () {
						waiting = false;
					}, limit);
				}
			}
		}
		static domContains(selector, text) {
			var elements = document.querySelectorAll(selector);
			return [].filter.call(elements, function (element) {
				return RegExp(text).test(element.textContent);
			});
		}
		static mapReplace(str, map) {
			//reference: https://segmentfault.com/q/1010000023489916 answer-2
			const replace = ({
					str,
					reg,
					replacer
				}) =>
				str.replace(new RegExp(reg, 'g'), replacer);
			return Object.keys(map).reduce((str, reg) => replace({
				str,
				reg,
				replacer: map[reg]
			}), str);
		}
		static padStart(num, count = 2) {
			return (('' + Math.pow(10, count)).substr(1) + num).slice(-1 * Math.max(count, ('' + num).length));
		}
		static fixNum(num, fix = 0) {
			return Math.floor(num * (Math.pow(10, fix))) / (Math.pow(10, fix));
		}
		static random = class {
			static hex() {
				return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
			}
			static shuffleArray(arr) {
				return arr.sort(() => 0.5 - Math.random());
			}
			static num(min, max) {
				return Math.random() * (max - min) + min;
			}
			static fromArray(arr = []) {
				return arr[Math.floor(CKTools.random.num(0, arr.length))];
			}
			static from(...args) {
				return CKTools.random.fromArray(args);
			}
		}
		static is = class {
			static str(s) {
				return (s != null && (typeof s === "string" || s instanceof String));
			}
			static elementInViewport(el) {
				var rect = el.getBoundingClientRect();
				return (
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
					rect.right <= (window.innerWidth || document.documentElement.clientWidth)
				);
			}
			static asyncFn(fn) {
				return fn.constructor.name === "AsyncFunction";
			}
			static darkMode() {
				return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			}
		}
		static modal = class {
			static openModal(title = '', content) {
				CKTools.modal.blockWindow();
				let modal = CKTools.get("#CKTOOLS-modal");
				if (!modal) modal = CKTools.modal.initModal();
				modal.setTitle(title);
				modal.setContent(content);
				modal.show();
			}
			static isModalShowing() {
				let modal = CKTools.get("#CKTOOLS-modal");
				if (modal) return modal.classList.contains("show");
				else return false;
			}
			static hideModal() {
				CKTools.modal.blockWindow(false);
				let modal = CKTools.get("#CKTOOLS-modal");
				if (modal) modal.hide();
			}
			static initModal() {
				CKTools.addStyle(`
				#CKTOOLS-modal{
					position: fixed;
					z-index: 99010;
					top: 50%;
					left: 50%;
					width: 300px;
					width: 30vw;
					/*height: 300px;
					height: 50vh;*/
					background: white;
					border-radius: 8px;
					padding: 12px;
					transform: translate(-50%,-50%);
					transition: all .3s;
					box-shadow: 0 2px 8px grey;
				}
				#CKTOOLS-modal.show{
					opacity: 1;
					transform: translate(-50%,-50%) scale(1);
				}
				#CKTOOLS-modal.hide{
					opacity: 0;
					pointer-events: none;
					transform: translate(-50%,-50%) scale(0.9);
				}
				.CKTOOLS-modal-title{
					font-size: large;
				}
				.CKTOOLS-modal-content{
					font-size: medium;
				}
				.CKTOOLS-modal-content>div{
					display: flex;
					margin: 6px 10px;
					flex-wrap: wrap;
					flex-direction: column;
					align-content: space-around;
					justify-content: space-between;
					align-items: center;
				}
				.CKTOOLS-toolbar-btns{
					flex: 1;
					border: none;
					background: #2196f3;
					border-radius: 3px;
					margin: 0 6px;
					padding: 3px;
					color: white;
					box-shadow: 0 2px 3px grey;
					min-width: 60px;
				}
				.CKTOOLS-toolbar-btns:hover{
					filter: brightness(0.85);
				}
				`, "CKTOOLS-modal-css", "unique");
				const modal = document.createElement("div");
				modal.id = "CKTOOLS-modal";
				modal.className = "hide";

				const header = document.createElement("h2");
				header.className = "CKTOOLS-modal-title"
				modal.appendChild(header);

				modal.setTitle = (t = '') => {
					header.innerHTML = t;
				}

				const contents = document.createElement("div");
				contents.className = "CKTOOLS-modal-content";
				modal.appendChild(contents);

				modal.setContent = async (c) => {
					let ct = c;
					if (ct instanceof Function) {
						ct = await ct();
					}
					if (ct instanceof HTMLElement) {
						contents.innerHTML = '';
						contents.appendChild(ct);
						return;
					}
					if (typeof (ct) === "string") {
						contents.innerHTML = ct;
						return;
					}
					console.log("unknown: ", ct);
				}
				modal.addContent = async (c) => {
					let ct = c;
					if (ct instanceof Function) {
						ct = await ct();
					}
					if (ct instanceof HTMLElement) {
						contents.appendChild(ct);
						return;
					}
					if (ct instanceof String) {
						contents.innerHTML += ct;
						return;
					}
					console.log("unknown: ", ct);
				}

				modal.close = CKTools.modal.closeModal;
				modal.open = CKTools.modal.openModal;
				modal.show = () => {
					modal.className = "show";
				}
				modal.hide = () => {
					modal.className = "hide";
				}

				document.body.appendChild(modal);
				return modal;
			}
			static closeModal() {
				CKTools.modal.blockWindow(false);
				let modal = CKTools.get("#CKTOOLS-modal");
				if (modal) modal.remove();
			}
			static async alertModal(title = "", content = "", okbtn = null) {
				if (CKTools.modal.isModalShowing()) {
					CKTools.modal.hideModal();
					await CKTools.wait(200);
				}
				CKTools.modal.openModal(title, await CKTools.domHelper("div", async container => {
					container.appendChild(await CKTools.domHelper("div", tip => {
						tip.innerHTML = content;
					}))
					if (okbtn !== null)
						container.appendChild(await CKTools.domHelper("div", async btns => {
							btns.style.display = "flex";
							btns.appendChild(await CKTools.domHelper("button", btn => {
								btn.className = "CKTOOLS-toolbar-btns";
								btn.innerHTML = okbtn;
								btn.onclick = e => CKTools.modal.hideModal();
							}))
						}))
				}))
				await CKTools.wait(300);
			}
			static blockWindow(block = true) {
				CKTools.addStyle(`
				#CKTOOLS-blockWindow{
					z-index: 99005;
					display: block;
					background: #00000080;
					opacity: 0;
					transition: all .3s;
					position: fixed;
					left: 0;
					top: 0;
					width: 100vw;
					height: 100vh;
				}
				#CKTOOLS-blockWindow.hide{
					pointer-events: none;
					opacity: 0;
				}
				#CKTOOLS-blockWindow.show{
					opacity: 1;
				}
				`, "CKTOOLS-blockWindow-css", "unique");
				let dom = CKTools.get("#CKTOOLS-blockWindow");
				if (!dom) {
					dom = document.createElement("div");
					dom.id = "CKTOOLS-blockWindow";
					dom.className = "hide";
					document.body.appendChild(dom);
				}
				if (block) {
					dom.className = "show";
				} else {
					dom.className = "hide";
				}
			}
		}
		static bili = class {
			static getCSRFToken() {
				return CKTools.getCookie("bili_jct");
			}
			static async playerReady() {
				let i = 50;
				while (--i >= 0) {
					await CKTools.wait(100);
					if (!('player' in window)) continue;
					if (!('isInitialized' in window.player)) continue;
					if (!window.player.isInitialized()) continue;
				}
				if (i < 0) return false;
				await CKTools.waitForPageVisible();
				while (1) {
					await CKTools.wait(200);
					if (document.querySelector(".bilibili-player-video-control-wrap")) return true;
				}
			}
			static getTotalTime() {
				return waitForAttribute(CKTools.get('video, bwp-video'), 'duration');
			}
			static getCurrentTime() {
				return CKTools.get('video, bwp-video').currentTime;
			}
			static setTime(t) {
				return window.player.seek(t);
			}
			static play() {
				return window.player.play();
			}
			static pause() {
				return window.player.pause();
			}
			static getInfoByBvid(bvid) {
				return fetch('https://api.bilibili.com/x/web-interface/view?bvid=' + bvid).then(raw => raw.json());
			}
			static getInfoByAid(aid) {
				return fetch('https://api.bilibili.com/x/web-interface/view?aid=' + aid).then(raw => raw.json());
			}
		}
		static EventEmitter = class {
			handlers = {};
			on(name, func) {
				if (!(func instanceof Function)) throw "Param must be func!";
				if (!(name in this.handlers)) {
					this.handlers[name] = [];
				}
				this.handlers[name].push(func);
			}
			off(name, func) {
				if (!(func instanceof Function)) throw "Param must be func!";
				if (name in this.handlers) {
					for (let i = 0; i < this.handlers[name].length; i++) {
						if (this.handlers[name][i] === func) {
							this.handlers[name].splice(i, 1);
							i--;
						}
					}
				}
			}
			clean(name) {
				if (name in this.handlers) {
					this.handlers[name] = [];
				}
			}
			emit(name, ...args) {
				if (name in this.handlers) {
					for (let func of this.handlers[name]) {
						try {
							func(...args);
						} catch (e) {
							console.error('ERROR:', e);
						}
					}
				}
			}
		}
		static HoldClick = class {
			dom;
			emitter = new CKTools.EventEmitter;
			downTime = 0;
			holdingTime = 250;
			mouseDown = false;

			constructor(dom, holdingTime = 250) {
				this.bind(dom);
				this.holdingTime = holdingTime;
			}

			bind(dom) {
				if (this.dom) {
					this.unregListeners();
				}
				if (dom instanceof HTMLElement) {
					this.dom = dom;
					this.initListener();
				}
			}

			onclick(func) {
				this.emitter.on("click", func);
				return this;
			}

			onhold(func) {
				this.emitter.on("hold", func);
				return this;
			}

			onup(func) {
				this.emitter.on("up", func);
				return this;
			}

			offclick(func) {
				this.emitter.off("click", func);
				return this;
			}

			offhold(func) {
				this.emitter.off("hold", func);
				return this;
			}

			offup(func) {
				this.emitter.off("up", func);
				return this;
			}

			resetCallback(name = "all") {
				const allEv = ["click", "hold", "up"];
				if (name === "all") {
					allEv.forEach(e => this.emitter.clean(e));
				} else if (allEv.includes(name)) {
					this.emitter.clean(name);
				}
			}

			unregListeners() {
				this.dom.removeEventListener("mouseup", this.handleMouseUp.bind(this));
				this.dom.removeEventListener("mousedown", this.handleMouseDown.bind(this));
				this.dom.removeEventListener("mouseout", this.handleMouseOut.bind(this));
			}

			uninstall() {
				this.resetCallback();
				this.unregListeners();
			}

			handleMouseDown(e) {
				if (e.button !== 0 && e.button !== 1) return;
				e.preventDefault();
				this.mouseDown = true;
				this.downTime = (new Date()).getTime();
				setTimeout(() => {
					if (this.mouseDown) {
						console.log(this);
						this.mouseDown = false;
						this.downTime = 0;
						this.emitter.emit("hold", e);
					}
				}, this.holdingTime)
			}

			handleMouseUp(e) {
				if (e.button !== 0 && e.button !== 1) return;
				e.preventDefault();
				if (this.mouseDown) {
					this.mouseDown = false;
					const currTime = (new Date).getTime();
					if ((currTime - this.downTime) >= this.holdingTime) {
						this.emitter.emit("hold", e);
					} else {
						this.emitter.emit("click", e);
					}
					this.downTime = 0;
				}
				this.emitter.emit("up", e);
			}

			handleMouseOut(e) {
				e.preventDefault();
				if (this.mouseDown) {
					this.mouseDown = false;
					this.downTime = 0;
					this.emitter.emit("hold", e);
				}
			}

			initListener() {
				this.dom.addEventListener("mouseup", this.handleMouseUp.bind(this))
				this.dom.addEventListener("mousedown", this.handleMouseDown.bind(this))
				this.dom.addEventListener("mouseout", this.handleMouseOut.bind(this))
			}
		}
		static dragger = class {
			static defaultHandler(val) {
				return console.log("DRAG:", val);
			}
			static async waitForDragger(waitStatus = true) {
				while (CKTools.dragger.dragging !== waitStatus) await CKTools.wait(10);
				return CKTools.dragger;
			}
			static async regHandler(func) {
				if (!(func instanceof Function)) throw "Param must be a func!";
				await CKTools.dragger.waitForDragger(false);
				CKTools.dragger.handler = func;
				return CKTools.dragger;
			}
			static handler() {}
			static dragging = false;
			static initialDragData = {
				x: 0,
				y: 0
			}
			static lastDragData = {
				x: 0,
				y: 0
			}
			static startDrag(e) {
				if (CKTools.dragger.dragging) return;
				CKTools.dragger.dragging = true;
				console.log(CKTools.dragger.initialDragData);
				CKTools.dragger.initialDragData.x = e.screenX;
				CKTools.dragger.initialDragData.y = e.screenY;
				CKTools.dragger.lastDragData.x = e.screenX;
				CKTools.dragger.lastDragData.y = e.screenY;
				document.body.addEventListener("mouseup", CKTools.dragger.stopDrag);
				document.body.addEventListener("mousemove", CKTools.dragger.handleDrag);
				console.info("DRAG:", "Start Drag");
				return CKTools.dragger;
			}
			static handleDrag(e) {
				const currPos = {
					x: e.screenX,
					y: e.screenY
				};
				const initPos = CKTools.dragger.initialDragData;
				const delta = {
					x: initPos.x - currPos.x,
					y: initPos.y - currPos.y
				}
				const lastdelta = {
					x: CKTools.dragger.lastDragData.x - currPos.x,
					y: CKTools.dragger.lastDragData.y - currPos.y
				}
				CKTools.dragger.lastDragData = currPos;
				CKTools.dragger.handler(delta, lastdelta);
			}
			static stopDrag() {
				document.body.removeEventListener("mouseup", CKTools.dragger.stopDrag);
				document.body.removeEventListener("mousemove", CKTools.dragger.handleDrag);
				CKTools.dragger.handler = CKTools.dragger.defaultHandler;
				console.info("DRAG:", "Stop Drag");
				CKTools.dragger.dragging = false;
				return CKTools.dragger;
			}
		}
		static GUID = class {
			static S4() {
				return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			}
			static get() {
				let S4 = CKTools.GUID.S4;
				return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
			}
			static getShort() {
				let S4 = CKTools.GUID.S4;
				return (S4() + S4() + S4() + S4());
			}
		}
	}
	window.CKTools = CKTools;
})();
</script><style class="showav_dragablecss">
    #CKTOOLS-modal{
        width: fit-content!important;
        max-width: 80%!important;
    }
    .CKTOOLS-modal-content li label b {
        color: green!important;
    }
    .CKTOOLS-modal-content li label span {
        color: red!important;
    }
    .showav_menuitem{
        line-height: 2em;
        width: 100%;
        transition: all .3s;
        cursor: pointer;
    }
    .showav_menuitem:hover{
        transform: translateX(6px);
    }
    .showav_menuitem>label{
        font-weight: bold;
        font-size: large;
        display: block;
    }
    </style><style class="showav_css_patch">
    #CKTOOLS-modal li, #CKTOOLS-modal ul{
        list-style: none !important;
    }
    </style><style id="pp_style">:root {
  --color-primary: #306eff;
  --color-primary-hover: #4a80ff;
  --color-primary-active: #175cff;
  --color-primary-disabled: rgba(48, 110, 255, 0.5);
  --el-color-error: #ff663b;
}
#no-select {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
}
a.pp-restore-icon {
  --size: 24px;
  height: var(--size) !important;
  width: var(--size) !important;
  display: inline-block;
  vertical-align: middle !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
  z-index: 9999999999 !important;
  cursor: pointer !important;
  background-color: transparent !important;
  position: relative;
}
a.pp-restore-icon::after,
a.pp-restore-icon::before {
  display: none;
}
a.pp-restore-icon div {
  margin: 0 !important;
}
a.pp-restore-icon::before,
a.pp-restore-icon::after {
  display: none !important;
}
a.pp-restore-icon:hover .pp-tip {
  display: block;
}
a.pp-restore-icon:hover .pp-icon {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wIDRDMCAxLjc5MDg2IDEuNzkwODYgMCA0IDBIMjhWMjhINEMxLjc5MDg2IDI4IDAgMjYuMjA5MSAwIDI0VjRaIiBmaWxsPSIjMzA2RUZGIi8+DQo8cGF0aCBvcGFjaXR5PSIwLjk4NTYwMSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS43MjQyIDguNjIwMzhDMTUuNDg0OCA4LjU5MDA4IDE1LjI4MTIgOC40MzA3OSAxNS4xOTQzIDguMjA1NjJMMTQuNDc0MiA2LjM0MTE1QzE0LjQxNDYgNi4xODY4MyAxNC41NDEyIDYuMDI0NzQgMTQuNzA1NCA2LjA0NTE3TDIyLjI4MzQgNi45ODgzOEMyMi42NzI4IDcuMDM2ODUgMjMuMDA2NCA3LjI5MDE2IDIzLjE1NzcgNy42NTIyM0wyNCA5LjY2NzY4TDE1LjcyNDIgOC42MjAzOFoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBvcGFjaXR5PSIwLjk4NTYwMSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4yOTE0IDguNjIwMzhDMTIuNTMwOSA4LjU5MDA4IDEyLjczNDQgOC40MzA3OSAxMi44MjE0IDguMjA1NjJMMTMuNTQxNCA2LjM0MTE1QzEzLjYwMSA2LjE4NjgzIDEzLjQ3NDQgNi4wMjQ3NCAxMy4zMTAzIDYuMDQ1MTdMNS43MzIyNiA2Ljk4ODM4QzUuMzQyODUgNy4wMzY4NSA1LjAwOTIyIDcuMjkwMTYgNC44NTc5MSA3LjY1MjIzTDQuMDE1NjIgOS42Njc2OEw3LjQ0MzQzIDkuMjMzODlMMTIuMjkxNCA4LjYyMDM4WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA5LjY2NzcySDI0VjIwLjY1MjFDMjQgMjEuODg3NSAyMi45OTg1IDIyLjg4ODkgMjEuNzYzMiAyMi44ODg5SDYuMjM2ODNDNS4wMDE0NiAyMi44ODg5IDQgMjEuODg3NSA0IDIwLjY1MjFWOS42Njc3MloiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTEuNzc3MyAxOS41NTU1QzExLjc3NzMgMTkuNTU1NSAxMi44NzcxIDIwIDEzLjk4OTIgMjBDMTUuMTAxNCAyMCAxNi4yMjE4IDE5LjU1NTUgMTYuMjIxOCAxOS41NTU1IiBzdHJva2U9IiMzMDZFRkYiIHN0cm9rZS13aWR0aD0iMS4xMTg0MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8cGF0aCBkPSJNMTAuNDQ1NyAxMy45OTk5VjE1Ljc3NzciIHN0cm9rZT0iIzMwNkVGRiIgc3Ryb2tlLXdpZHRoPSIxLjc4OTQ3IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNy41NTUxIDEzLjk5OTlWMTUuNzc3NyIgc3Ryb2tlPSIjMzA2RUZGIiBzdHJva2Utd2lkdGg9IjEuNzg5NDciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPC9zdmc+DQo=);
}
a.pp-restore-icon .pp-icon {
  height: var(--size);
  width: var(--size);
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHg9IjAuMjUiIHk9IjAuMjUiIHdpZHRoPSIyNy41IiBoZWlnaHQ9IjI3LjUiIHJ4PSIzLjc1IiBmaWxsPSJ3aGl0ZSIvPg0KPHJlY3QgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjI3LjUiIGhlaWdodD0iMjcuNSIgcng9IjMuNzUiIGZpbGw9IiMzMDZFRkYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+DQo8cmVjdCB4PSIwLjI1IiB5PSIwLjI1IiB3aWR0aD0iMjcuNSIgaGVpZ2h0PSIyNy41IiByeD0iMy43NSIgc3Ryb2tlPSIjMzA2RUZGIiBzdHJva2Utd2lkdGg9IjAuNSIvPg0KPHBhdGggZD0iTTAgNEMwIDEuNzkwODYgMS43OTA4NiAwIDQgMEgyNEMyNi4yMDkxIDAgMjggMS43OTA4NiAyOCA0VjI0QzI4IDI2LjIwOTEgMjYuMjA5MSAyOCAyNCAyOEg0QzEuNzkwODYgMjggMCAyNi4yMDkxIDAgMjRWNFoiIGZpbGw9IiMzMDZFRkYiLz4NCjxwYXRoIG9wYWNpdHk9IjAuOTg1NjAxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjcyNDIgOC42MjAzOEMxNS40ODQ4IDguNTkwMDggMTUuMjgxMiA4LjQzMDc5IDE1LjE5NDMgOC4yMDU2MkwxNC40NzQyIDYuMzQxMTVDMTQuNDE0NiA2LjE4NjgzIDE0LjU0MTIgNi4wMjQ3NCAxNC43MDU0IDYuMDQ1MTdMMjIuMjgzNCA2Ljk4ODM4QzIyLjY3MjggNy4wMzY4NSAyMy4wMDY0IDcuMjkwMTYgMjMuMTU3NyA3LjY1MjIzTDI0IDkuNjY3NjhMMTUuNzI0MiA4LjYyMDM4WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIG9wYWNpdHk9IjAuOTg1NjAxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI5MTQgOC42MjAzOEMxMi41MzA5IDguNTkwMDggMTIuNzM0NCA4LjQzMDc5IDEyLjgyMTQgOC4yMDU2MkwxMy41NDE0IDYuMzQxMTVDMTMuNjAxIDYuMTg2ODMgMTMuNDc0NCA2LjAyNDc0IDEzLjMxMDMgNi4wNDUxN0w1LjczMjI2IDYuOTg4MzhDNS4zNDI4NSA3LjAzNjg1IDUuMDA5MjIgNy4yOTAxNiA0Ljg1NzkxIDcuNjUyMjNMNC4wMTU2MiA5LjY2NzY4TDcuNDQzNDMgOS4yMzM4OUwxMi4yOTE0IDguNjIwMzhaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDkuNjY3NzJIMjRWMjAuNjUyMUMyNCAyMS44ODc1IDIyLjk5ODUgMjIuODg4OSAyMS43NjMyIDIyLjg4ODlINi4yMzY4M0M1LjAwMTQ2IDIyLjg4ODkgNCAyMS44ODc1IDQgMjAuNjUyMVY5LjY2NzcyWiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0xMS43NzczIDE5LjU1NTVDMTEuNzc3MyAxOS41NTU1IDEyLjg3NzEgMjAgMTMuOTg5MiAyMEMxNS4xMDE0IDIwIDE2LjIyMTggMTkuNTU1NSAxNi4yMjE4IDE5LjU1NTUiIHN0cm9rZT0iIzMwNkVGRiIgc3Ryb2tlLXdpZHRoPSIxLjExODQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xMC40NDU3IDEzLjk5OTlWMTUuNzc3NyIgc3Ryb2tlPSIjMzA2RUZGIiBzdHJva2Utd2lkdGg9IjEuNzg5NDciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPHBhdGggZD0iTTE3LjU1NTEgMTMuOTk5OVYxNS43Nzc3IiBzdHJva2U9IiMzMDZFRkYiIHN0cm9rZS13aWR0aD0iMS43ODk0NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8L3N2Zz4NCg==) no-repeat center / 100%;
}
a.pp-restore-icon .pp-tip {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  background: linear-gradient(0deg, rgba(48, 110, 255, 0.1), rgba(48, 110, 255, 0.1)), #FFFFFF;
  border-bottom-right-radius: 4px;
  border-left: none;
  border-top-right-radius: 4px;
  border: 1px solid #306eff;
  box-sizing: border-box;
  color: #306eff;
  display: none;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  height: var(--size);
  line-height: calc(var(--size) - 2px);
  padding: 0 4px !important;
  position: fixed;
  z-index: 9999999999;
  white-space: nowrap;
}
#pp_context_menu {
  --transition: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: fixed;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 16px;
  margin: 0;
  transition: opacity var(--transition);
  z-index: 9999999999;
}
#pp_context_menu li {
  cursor: default;
  border-radius: 4px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  height: 48px;
  line-height: 48px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  white-space: nowrap;
}
#pp_context_menu li:hover {
  background: #F2F3F4;
}
#pp_landing_page {
  display: none;
  position: fixed;
  z-index: 9999999999;
  top: 16px;
  right: 26px;
  width: 380px;
  height: 520px;
  border: none;
  border-radius: 16px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
  background: #fff;
}
#pp_close_landing_page {
  display: none;
  position: fixed;
  z-index: 9999999999;
  top: 32px;
  right: 42px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
#pp_modal {
  width: 640px;
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  border: none;
  top: 50%;
  transform: translateY(-50%);
  font-style: normal !important;
}
#pp_modal_wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999999999;
}
#pp_modal_wrap * {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol, noto color emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-variant: tabular-nums;
  font-feature-settings: 'tnum';
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
#pp_modal_wrap a {
  display: inline-block;
  text-decoration: none !important;
  cursor: pointer !important;
}
#pp_modal header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#pp_modal_title {
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
}
#pp_modal_close {
  width: 24px;
  height: 24px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNDA4MyAxMi44OTgxTDE3LjI5MTEgMTYuNzc0MUMxNy42ODE2IDE3LjE2NDYgMTcuNjgxNiAxNy43OTc4IDE3LjI5MTEgMTguMTg4M0MxNi45MDA2IDE4LjU3ODggMTYuMjY3NCAxOC41Nzg4IDE1Ljg3NjkgMTguMTg4M0wxMS45OTU0IDE0LjMxMzZMOC4xMTk0MyAxOC4xOTYzQzcuNzI4OTEgMTguNTg2OCA3LjA5NTc0IDE4LjU4NjggNi43MDUyMiAxOC4xOTYzQzYuMzE0NjkgMTcuODA1NyA2LjMxNDY5IDE3LjE3MjYgNi43MDUyMiAxNi43ODIxTDEwLjU3OTkgMTIuOTAwNkw2LjY5NzI4IDkuMDI0NzRDNi4zMDY3NiA4LjYzNDIxIDYuMzA2NzYgOC4wMDEwNSA2LjY5NzI4IDcuNjEwNTNDNy4wODc4MSA3LjIyIDcuNzIwOTcgNy4yMiA4LjExMTUgNy42MTA1M0wxMS45OTI5IDExLjQ4NTFMMTUuODY4OCA3LjYwMjQ2QzE2LjI1OTMgNy4yMTE5NCAxNi44OTI1IDcuMjExOTQgMTcuMjgzIDcuNjAyNDZDMTcuNjczNSA3Ljk5Mjk5IDE3LjY3MzUgOC42MjYxNSAxNy4yODMgOS4wMTY2OEwxMy40MDgzIDEyLjg5ODFaIiBmaWxsPSIjNjY2NjY2Ii8+DQo8L3N2Zz4NCg==) no-repeat center / cover;
}
#pp_modal_body {
  padding: 24px 0 32px;
}
#pp_modal_input {
  width: 100%;
  background: #F2F3F4;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  padding: 12px 16px;
  border: none;
  resize: none;
  outline: none;
}
#pp_modal_valid_message {
  overflow: hidden;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #ff663b;
  position: absolute;
  line-height: 26px;
  height: 26px;
  max-width: 576px;
}
#pp_modal footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
#pp_modal_cancel {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000;
  padding: 0 16px;
  line-height: 36px;
  height: 36px;
}
#pp_modal_cancel:hover {
  background: #f5f7fa;
}
#pp_modal_confirm {
  min-width: 120px;
  line-height: 36px;
  height: 36px;
  padding: 0 16px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  display: flex !important;
  align-items: center;
  margin-left: 16px;
  background: #306eff;
}
#pp_modal_confirm:hover {
  background: #4a80ff;
}
#pp_modal_confirm:active {
  background: #175cff;
}
#pp_modal_confirm.disabled,
#pp_modal_confirm:disabled {
  background: rgba(48, 110, 255, 0.5);
  opacity: 0.5;
}
#pp_modal_confirm_icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNSAxMVY1QzExLjUgNC40NDc3MiAxMS45NDc3IDQgMTIuNSA0QzEzLjA1MjMgNCAxMy41IDQuNDQ3NzIgMTMuNSA1VjExSDE5LjVDMjAuMDUyMyAxMSAyMC41IDExLjQ0NzcgMjAuNSAxMkMyMC41IDEyLjU1MjMgMjAuMDUyMyAxMyAxOS41IDEzSDEzLjVWMTlDMTMuNSAxOS41NTIzIDEzLjA1MjMgMjAgMTIuNSAyMEMxMS45NDc3IDIwIDExLjUgMTkuNTUyMyAxMS41IDE5VjEzSDUuNUM0Ljk0NzcyIDEzIDQuNSAxMi41NTIzIDQuNSAxMkM0LjUgMTEuNDQ3NyA0Ljk0NzcyIDExIDUuNSAxMUgxMS41WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K) no-repeat center / cover;
}
</style></head>

<body class="vsc-initialized" style=""><div id="like996_identification" style="background-color: rgba(211, 211, 211, 0.86); align-items: center; justify-content: center; position: fixed; color: black; top: -5em; height: 2em; margin: 0em; padding: 3px 0em 0em; font-size: 1.2em; width: 100%; left: 0px; right: 0px; text-align: center; z-index: 2147483647; display: none;">Text.</div>
    <div class="dialog">
        <div class="dialog-content">
            <div class="dialog-header">
                <span class="dialog-title">提示</span>
                <span class="dialog-close">×</span>
            </div>
            <div class="dialog-body">
                <!-- <p>短链接：<span id="shortUrl"></span></p> -->
            </div>
            <div class="dialog-footer">
                <!-- 复制按钮 -->
                <!-- <button class="copy" id="copy">复制</button> -->
                <!-- 确定按钮 -->
                <!-- <button class="conform" id="conform">确定</button> -->
            </div>
        </div>
    </div>
    <div class="card">
        <h2>Shorten-URL</h2>
        <div class="form-group">
            <label for="url">长链接:</label>
            <input type="text" id="url" name="url" placeholder="例：https://baidu.com,http(s)一定要加!" value="" control-id="ControlID-1">
            <label for="shortStr">自定义路径:</label>
            <input type="text" id="shortStr" name="shortStr" placeholder="例：bai/du 最前面不用加&#39;/&#39; 为空则自动生成一个路径" value="" control-id="ControlID-2">
            <input type="button" id="submit" value="提交" control-id="ControlID-3">
        </div>
    </div>
    
    <script>
        var dialog = document.querySelector('.dialog');
        var url = document.getElementById('url');
        var shortStr = document.getElementById('shortStr');
        var submit = document.getElementById('submit');
        submit.onclick = function () {
            if (url.value == '') {
                alert('请输入长链接');
                return false;
            }
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: url.value,
                    shortStr: shortStr.value
                })
            }).then(function (res) {
                if (res.ok)
                    return res.json();
                else
                    throw res;
            }).then(function (data) {
                // alert('提交成功，短链接为：' + data.data.shortUrl);
                // 在弹窗上显示短链接

                dialog.querySelector('.dialog-body').innerHTML =
                    `<p>短链接：<span id="shortUrl">${location.host}/${data.data.shortUrl}</span></p>`;
                // 在弹窗上显示复制按钮
                dialog.querySelector('.dialog-footer').innerHTML =
                    `<button class="copy" id="copy">复制</button>`;

                // 复制按钮
                var copy = document.getElementById('copy');
                copy.onclick = function () {
                    // 将短链接复制到剪贴板
                    var shortUrl = document.querySelector('#shortUrl');
                    try {
                        let range = document.createRange();
                        range.selectNode(shortUrl);
                        window.getSelection().removeAllRanges();
                        window.getSelection().addRange(range);
                        document.execCommand('copy');
                        window.getSelection().removeAllRanges();
                        console.log('Copy success')
                    } catch (e) {
                        console.log('Copy error')
                    }
                }
                // 显示弹窗
                dialog.classList.add('dialog-show');
            }).catch(async function (err) {
                console.log(err);
                let data;
                try {
                    data = await err.json();
                } catch (e) {
                    alert('提交失败，请检查网络');
                    return false
                }
                console.log(data);
                dialog.querySelector('.dialog-body').innerHTML = `<p>${data.msg}</p>`;
                dialog.querySelector('.dialog-footer').innerHTML =
                    `<button class="conform" id="conform">确定</button>`;
                var conform = document.getElementById('conform');
                conform.onclick = function () {
                    dialog.classList.remove('dialog-show');
                }
                dialog.classList.add('dialog-show');
            })
        }
        // 关闭按钮
        document.querySelector('.dialog-close').onclick = function () {
            dialog.classList.remove('dialog-show');
        }
        // 点击空白处关闭弹窗
        dialog.onclick = function (e) {
            // 阻止事件冒泡
            e.stopPropagation();
            if (e.target == dialog) {
                dialog.classList.remove('dialog-show');
            }
        }
    </script>


<i id="__PIKPAK_EXTENSION__" style="display: none;"></i><div id="naptha_container0932014_0707"></div></body></html>
