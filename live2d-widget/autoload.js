{\rtf1\ansi\deff0\nouicompat{\fonttbl{\f0\fnil\fcharset134 \'cb\'ce\'cc\'e5;}{\f1\fnil SimSun;}{\f2\fnil\fcharset128 MS PGothic;}}
{\*\generator Riched20 10.0.17134}\viewkind4\uc1 
\pard\f0\fs22 //\'e6\'b3\'a8\'e6\'84\'8f\'ef\'bc\'9a\'6cive2d_path\'e5\'8f\'82\'e6\'95\'b0\'e5\'ba\'94\'e4\'bd\'bf\'e7\'94\'a8\'e7\'bb\'9d\'e5\'af\'b9\'e8\'b7\'af\'e5\'be?const live2d_path = "/live2d-widget/";\par
//const live2d_path = "/live2d-widget/";\par
\par
//\'e5\'8a\'a0\'e8\'bd\'bdwaifu.css\par
$("<link>").attr(\{ href: live2d_path + "waifu.css", rel: "stylesheet" \}).appendTo("head");\par
\par
//\'e5\'8a\'a0\'e8\'bd\'bdlive2d.min.js\par
$.ajax(\{\par
\tab url: live2d_path + "live2d.min.js",\par
\tab dataType: "script",\par
\tab cache: true\par
\});\par
\par
//\'e5\'8a\'a0\'e8\'bd\'bdwaifu-tips.js\par
$.ajax(\{\par
\tab url: live2d_path + "waifu-tips.js",\par
\tab dataType: "script",\par
\tab cache: true\par
\});\par
\par
//\'e5\'88\'9d\'e5\'a7\'8b\'e5\'8c\'96\'e7\'9c\'8b\'e6\'9d\'bf\'e5\f1\u-6210?\f0\'ef\'bc\'8c\'e4\'bc\'9a\'e8\'87\'aa\'e5\'8a\'a8\'e5\'8a\'a0\'e8\'bd\'bd\'e6\'8c\'87\'e5\'ae\'9a\'e7\'9b\'ae\'e5\'bd\'95\'e4\'b8\'8b\'e7\'9a\'84waifu-tips.json\par
$(window).on("load", function() \{\par
\tab initWidget(live2d_path + "waifu-tips.json", "https://live2d.fghrsh.net/api");\par
\});\par
//initWidget\'e7\'ac\'ac\'e4\'b8\'80\'e4\'b8\'aa\'e5\'8f\'82\'e6\'95\'b0\'e4\'b8\'bawaifu-tips.json\'e7\'9a\'84\'e8\'b7\'af\'e5\'be?//\'e7\'ac\'ac\'e4\'ba\'8c\'e4\'b8\'aa\'e5\'8f\'82\'e6\'95\'b0\'e4\'b8\'baapi\'e5\'9c\'b0\'e5\'9d\'80\'ef\'bc\'88\'e6\'97\'a0\'e9\'9c\lang1033\'80\'e4\'bf\'ae\'e6\'94\'b9\'ef\'bc?//api\'e5\'90\'8e\'e7\'ab\'af\'e5\'8f\'af\'e8\'87\'aa\'e8\'a1\'8c\'e6\'90\'ad\'e5\'bb\'ba\'ef\'bc\'8c\'e5\'8f\'82\'e8\'80\'83\'68ttps://github.com/fghrsh/live2d_api\par
\par
console.log(`\par
  \'e3\'81\'8f\'5f_,.\'e3\'83\'98\'e3\'83\'bd.        /  ,\'e3\'83\'bc\'ef\'bd\'a4 \'e3\'80?           \'ef\'bc?', !-\'e2\'94\'80\'e2\'80?i  /  /\'c2\'b4\par
           \'ef\'bc\'8f\'ef\'bd\'80\'ef\'bd?       L/\'ef\'bc\'8f\'ef\'bd\'80\'e3\'83\'bd\'ef\'bd\'a4\par
         /   \'ef\'bc?   /|   ,   ,       ',\par
       \'ef\'bd?  / /-\'e2\'80?  \'ef\'bd? L_ \'ef\'be?\'e3\'83?   i\par
        \'ef\'be?\'ef\'be?7\'ef\'bd\'b2\'ef\'bd\'80\'ef\'be?  \'ef\'be?\'ef\'bd?\'ef\'be\'84\'ef\'bd\'a4!\'e3\'83\'8f\'7c   |\par
          !,/7 '0'     \'c2\'b40i\'e3\'82\'bd\'7c    |\par
          |.\'e4\'bb?    _     ,,,, / |./    |\par
          \'ef\'be?| i\'ef\'bc?\'ef\'bd?,__  _,.\'e3\'82?/   .i   |\par
            \'ef\'be?| | / k_\'ef\'bc\'97\'5f/\'ef\'be?\'e3\'83?  \'ef\'be?  |\par
              | |/i \'e3\'80\'88\'7c/   i  ,.\'ef\'be?|  i  |\par
             .|/ /  \'ef\'bd\'89\'ef\'bc\'9a    \'ef\'be?    \'ef\'bc? |\par
              k\'e3\'83?\'ef\'bd\f2\'82\'ed\'e3\'69\f0     _,.\'ef\'be\'8d\'ef\'bd\'a4    /\'ef\'bd?\par
              !'\'e3\'80?/\'ef\'bd\'80\'ef\'bc\'b4\'c2?, \'ef\'bc?\'ef\'bd\'80'7'\'ef\'bd\'b0\'72'\par
              \'ef\'be?\'e3\'83\'bd\'4c__|___i,___,\'e3\'83\'b3\'ef\'be\'9a|\'e3\'83?                  \'ef\'be?,/  |___./\par
                  '\'ef\'bd?    !_,.:\par
`);\par
\lang0\par
}
 