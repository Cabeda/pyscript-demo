const u=function({onlyFirst:u=!1}={}){const D=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");return new RegExp(D,u?void 0:"g")}();function D(u,{ambiguousAsWide:D=!1}={}){return function(u){if(!Number.isSafeInteger(u))throw new TypeError(`Expected a code point, got \`${typeof u}\`.`)}(u),12288===(t=u)||t>=65281&&t<=65376||t>=65504&&t<=65510||function(u){return u>=4352&&u<=4447||8986===u||8987===u||9001===u||9002===u||u>=9193&&u<=9196||9200===u||9203===u||9725===u||9726===u||9748===u||9749===u||u>=9776&&u<=9783||u>=9800&&u<=9811||9855===u||u>=9866&&u<=9871||9875===u||9889===u||9898===u||9899===u||9917===u||9918===u||9924===u||9925===u||9934===u||9940===u||9962===u||9970===u||9971===u||9973===u||9978===u||9981===u||9989===u||9994===u||9995===u||10024===u||10060===u||10062===u||u>=10067&&u<=10069||10071===u||u>=10133&&u<=10135||10160===u||10175===u||11035===u||11036===u||11088===u||11093===u||u>=11904&&u<=11929||u>=11931&&u<=12019||u>=12032&&u<=12245||u>=12272&&u<=12287||u>=12289&&u<=12350||u>=12353&&u<=12438||u>=12441&&u<=12543||u>=12549&&u<=12591||u>=12593&&u<=12686||u>=12688&&u<=12773||u>=12783&&u<=12830||u>=12832&&u<=12871||u>=12880&&u<=42124||u>=42128&&u<=42182||u>=43360&&u<=43388||u>=44032&&u<=55203||u>=63744&&u<=64255||u>=65040&&u<=65049||u>=65072&&u<=65106||u>=65108&&u<=65126||u>=65128&&u<=65131||u>=94176&&u<=94180||94192===u||94193===u||u>=94208&&u<=100343||u>=100352&&u<=101589||u>=101631&&u<=101640||u>=110576&&u<=110579||u>=110581&&u<=110587||110589===u||110590===u||u>=110592&&u<=110882||110898===u||u>=110928&&u<=110930||110933===u||u>=110948&&u<=110951||u>=110960&&u<=111355||u>=119552&&u<=119638||u>=119648&&u<=119670||126980===u||127183===u||127374===u||u>=127377&&u<=127386||u>=127488&&u<=127490||u>=127504&&u<=127547||u>=127552&&u<=127560||127568===u||127569===u||u>=127584&&u<=127589||u>=127744&&u<=127776||u>=127789&&u<=127797||u>=127799&&u<=127868||u>=127870&&u<=127891||u>=127904&&u<=127946||u>=127951&&u<=127955||u>=127968&&u<=127984||127988===u||u>=127992&&u<=128062||128064===u||u>=128066&&u<=128252||u>=128255&&u<=128317||u>=128331&&u<=128334||u>=128336&&u<=128359||128378===u||128405===u||128406===u||128420===u||u>=128507&&u<=128591||u>=128640&&u<=128709||128716===u||u>=128720&&u<=128722||u>=128725&&u<=128727||u>=128732&&u<=128735||128747===u||128748===u||u>=128756&&u<=128764||u>=128992&&u<=129003||129008===u||u>=129292&&u<=129338||u>=129340&&u<=129349||u>=129351&&u<=129535||u>=129648&&u<=129660||u>=129664&&u<=129673||u>=129679&&u<=129734||u>=129742&&u<=129756||u>=129759&&u<=129769||u>=129776&&u<=129784||u>=131072&&u<=196605||u>=196608&&u<=262141}(u)||D&&function(u){return 161===u||164===u||167===u||168===u||170===u||173===u||174===u||u>=176&&u<=180||u>=182&&u<=186||u>=188&&u<=191||198===u||208===u||215===u||216===u||u>=222&&u<=225||230===u||u>=232&&u<=234||236===u||237===u||240===u||242===u||243===u||u>=247&&u<=250||252===u||254===u||257===u||273===u||275===u||283===u||294===u||295===u||299===u||u>=305&&u<=307||312===u||u>=319&&u<=322||324===u||u>=328&&u<=331||333===u||338===u||339===u||358===u||359===u||363===u||462===u||464===u||466===u||468===u||470===u||472===u||474===u||476===u||593===u||609===u||708===u||711===u||u>=713&&u<=715||717===u||720===u||u>=728&&u<=731||733===u||735===u||u>=768&&u<=879||u>=913&&u<=929||u>=931&&u<=937||u>=945&&u<=961||u>=963&&u<=969||1025===u||u>=1040&&u<=1103||1105===u||8208===u||u>=8211&&u<=8214||8216===u||8217===u||8220===u||8221===u||u>=8224&&u<=8226||u>=8228&&u<=8231||8240===u||8242===u||8243===u||8245===u||8251===u||8254===u||8308===u||8319===u||u>=8321&&u<=8324||8364===u||8451===u||8453===u||8457===u||8467===u||8470===u||8481===u||8482===u||8486===u||8491===u||8531===u||8532===u||u>=8539&&u<=8542||u>=8544&&u<=8555||u>=8560&&u<=8569||8585===u||u>=8592&&u<=8601||8632===u||8633===u||8658===u||8660===u||8679===u||8704===u||8706===u||8707===u||8711===u||8712===u||8715===u||8719===u||8721===u||8725===u||8730===u||u>=8733&&u<=8736||8739===u||8741===u||u>=8743&&u<=8748||8750===u||u>=8756&&u<=8759||8764===u||8765===u||8776===u||8780===u||8786===u||8800===u||8801===u||u>=8804&&u<=8807||8810===u||8811===u||8814===u||8815===u||8834===u||8835===u||8838===u||8839===u||8853===u||8857===u||8869===u||8895===u||8978===u||u>=9312&&u<=9449||u>=9451&&u<=9547||u>=9552&&u<=9587||u>=9600&&u<=9615||u>=9618&&u<=9621||9632===u||9633===u||u>=9635&&u<=9641||9650===u||9651===u||9654===u||9655===u||9660===u||9661===u||9664===u||9665===u||u>=9670&&u<=9672||9675===u||u>=9678&&u<=9681||u>=9698&&u<=9701||9711===u||9733===u||9734===u||9737===u||9742===u||9743===u||9756===u||9758===u||9792===u||9794===u||9824===u||9825===u||u>=9827&&u<=9829||u>=9831&&u<=9834||9836===u||9837===u||9839===u||9886===u||9887===u||9919===u||u>=9926&&u<=9933||u>=9935&&u<=9939||u>=9941&&u<=9953||9955===u||9960===u||9961===u||u>=9963&&u<=9969||9972===u||u>=9974&&u<=9977||9979===u||9980===u||9982===u||9983===u||10045===u||u>=10102&&u<=10111||u>=11094&&u<=11097||u>=12872&&u<=12879||u>=57344&&u<=63743||u>=65024&&u<=65039||65533===u||u>=127232&&u<=127242||u>=127248&&u<=127277||u>=127280&&u<=127337||u>=127344&&u<=127373||127375===u||127376===u||u>=127387&&u<=127404||u>=917760&&u<=917999||u>=983040&&u<=1048573||u>=1048576&&u<=1114109}(u)?2:1;var t}const t=new Intl.Segmenter,e=/^\p{Default_Ignorable_Code_Point}$/u;function F(F,s={}){if("string"!=typeof F||0===F.length)return 0;const{ambiguousIsNarrow:i=!0,countAnsiEscapeCodes:r=!1}=s;if(r||(F=function(D){if("string"!=typeof D)throw new TypeError(`Expected a \`string\`, got \`${typeof D}\``);return D.replace(u,"")}(F)),0===F.length)return 0;let o=0;const C={ambiguousAsWide:!i};for(const{segment:u}of t.segment(F)){const t=u.codePointAt(0);t<=31||t>=127&&t<=159||(t>=8203&&t<=8207||65279===t||t>=768&&t<=879||t>=6832&&t<=6911||t>=7616&&t<=7679||t>=8400&&t<=8447||t>=65056&&t<=65071||t>=55296&&t<=57343||t>=65024&&t<=65039||e.test(u)||(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g.test(u)?o+=2:o+=D(t,C)))}return o}var s,i,r,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},C={},n={};s=n,Object.defineProperty(s,"__esModule",{value:!0}),s.parseInput=s.InputType=void 0,(r=i=s.InputType||(s.InputType={}))[r.Text=0]="Text",r[r.AltEnter=1]="AltEnter",r[r.ArrowUp=2]="ArrowUp",r[r.ArrowDown=3]="ArrowDown",r[r.ArrowLeft=4]="ArrowLeft",r[r.ArrowRight=5]="ArrowRight",r[r.Delete=6]="Delete",r[r.Backspace=7]="Backspace",r[r.CtrlA=8]="CtrlA",r[r.CtrlC=9]="CtrlC",r[r.CtrlD=10]="CtrlD",r[r.CtrlE=11]="CtrlE",r[r.CtrlK=12]="CtrlK",r[r.CtrlL=13]="CtrlL",r[r.CtrlQ=14]="CtrlQ",r[r.CtrlS=15]="CtrlS",r[r.CtrlU=16]="CtrlU",r[r.End=17]="End",r[r.Enter=18]="Enter",r[r.Home=19]="Home",r[r.ShiftEnter=20]="ShiftEnter",r[r.UnsupportedControlChar=21]="UnsupportedControlChar",r[r.UnsupportedEscape=22]="UnsupportedEscape",s.parseInput=function(u){return Array.from(function*(u){let D=[];const t=u[Symbol.iterator]();for(let u=t.next();!u.done;u=t.next()){const e=u.value;if(e.length>1){D.push(e);continue}const F=e.charCodeAt(0);if(D.length>0&&(F<32||127===F)&&(yield{inputType:i.Text,data:D},D=[]),27!==F)if(F<32||127===F){let u=i.UnsupportedControlChar;switch(F){case 1:u=i.CtrlA;break;case 3:u=i.CtrlC;break;case 4:u=i.CtrlD;break;case 5:u=i.CtrlE;break;case 11:u=i.CtrlK;break;case 17:u=i.CtrlQ;break;case 19:u=i.CtrlS;break;case 21:u=i.CtrlU;break;case 13:u=i.Enter;break;case 127:u=i.Backspace;break;case 12:u=i.CtrlL}yield{inputType:u,data:[e]}}else D.push(e);else{const u=t.next();if(u.done){D.push("");continue}let e=i.UnsupportedEscape;if("["!==u.value){"\r"===u.value&&(e=i.AltEnter),yield{inputType:e,data:["",u.value]};continue}const F=t.next();if(F.done)continue;if(F.value>="0"&&F.value<="9"){let u=F.value;const D=t.next();if(D.done)return;if(D.value>="0"&&D.value<="9")u+=D.value;else if("~"!==D.value)continue;"3"===u&&(e=i.Delete),yield{inputType:e,data:["","[",u,"~"]};continue}switch(F.value){case"A":e=i.ArrowUp;break;case"B":e=i.ArrowDown;break;case"C":e=i.ArrowRight;break;case"D":e=i.ArrowLeft;break;case"F":e=i.End;break;case"H":e=i.Home;break;case"\r":e=i.AltEnter}yield{inputType:e,data:["","[",F.value]}}}D.length>0&&(yield{inputType:i.Text,data:D})}(u))};var h={},E={};Object.defineProperty(E,"__esModule",{value:!0}),E.LineBuffer=void 0,E.LineBuffer=class{constructor(){this.buf="",this.pos=0}buffer(){return this.buf}pos_buffer(){return this.buf.slice(0,this.pos)}length(){return this.buf.length}char_length(){return[...this.buf].length}update(u,D){this.buf=u,this.pos=D}insert(u){const D=u.length,t=this.pos===this.buf.length;return this.buf=t?this.buf+u:this.buf.slice(0,this.pos)+u+this.buf.slice(this.pos),this.pos+=D,t}moveBack(u){const D=this.prevPos(u);return void 0!==D&&(this.pos=D,!0)}moveForward(u){const D=this.nextPos(u);return void 0!==D&&(this.pos=D,!0)}moveHome(){const u=this.startOfLine();return this.pos>u&&(this.pos=u,!0)}moveEnd(){const u=this.endOfLine();return this.pos!==u&&(this.pos=u,!0)}startOfLine(){const u=this.buf.slice(0,this.pos).lastIndexOf("\n");return-1!==u?u+1:0}endOfLine(){const u=this.buf.slice(this.pos).indexOf("\n");return-1!==u?this.pos+u:this.buf.length}moveLineUp(u){const D=this.buf.slice(0,this.pos).lastIndexOf("\n");if(-1===D)return!1;const t=[...this.buf.slice(D+1,this.pos)].length;let e=this.buf.slice(0,D).lastIndexOf("\n");-1===e?e=0:e+=1;let F=D;for(let D=1;D<u&&0!==e;D++)F=e-1,e=this.buf.slice(0,F).lastIndexOf("\n"),-1===e?e=0:e+=1;const s=[...this.buf.slice(e,F)].slice(0,t);let i=D;return s.length>0&&(i=s.map((u=>u.length)).reduce(((u,D)=>u+D),0),i=e+i),this.pos=i,!0}moveLineDown(u){const D=this.buf.slice(this.pos).indexOf("\n");if(-1===D)return!1;let t=this.buf.slice(0,this.pos).lastIndexOf("\n");-1===t?t=0:t+=1;const e=[...this.buf.slice(t,this.pos)].length;let F=this.pos+D+1,s=this.buf.slice(F).indexOf("\n");s=-1===s?this.buf.length:F+s;for(let D=1;D<u&&s!==this.buf.length;D++)F=s+1,s=this.buf.slice(F).indexOf("\n"),s=-1===s?this.buf.length:F+s;const i=[...this.buf.slice(F,s)];return e<i.length?this.pos=i.slice(0,e).map((u=>u.length)).reduce(((u,D)=>u+D),0)+F:this.pos=s,!0}set_pos(u){this.pos=u}prevPos(u){if(0===this.pos)return;const D=this.buf.slice(0,this.pos);return this.pos-[...D].slice(-u).map((u=>u.length)).reduce(((u,D)=>u+D),0)}nextPos(u){if(this.pos===this.buf.length)return;const D=this.buf.slice(this.pos);return this.pos+[...D].slice(0,u).map((u=>u.length)).reduce(((u,D)=>u+D),0)}backspace(u){const D=this.prevPos(u);return void 0!==D&&(this.buf=this.buf.slice(0,D)+this.buf.slice(this.pos),this.pos=D,!0)}delete(u){const D=this.nextPos(u);return void 0!==D&&(this.buf=this.buf.slice(0,this.pos)+this.buf.slice(D),!0)}deleteEndOfLine(){if(0==this.buf.length||this.pos==this.buf.length)return!1;const u=this.pos,D=this.endOfLine();return u==D?this.delete(1):this.buf=this.buf.slice(0,u)+this.buf.slice(D),!0}};var a=o&&o.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(h,"__esModule",{value:!0}),h.State=h.Layout=h.Position=void 0;const l=E,c=a(F);class B{constructor(u,D){this.row=void 0!==u?u:0,this.col=void 0!==D?D:0}}h.Position=B;class p{constructor(u){this.promptSize=u,this.cursor=new B,this.end=new B}}h.Layout=p,h.State=class{constructor(u,D,t,e){this.line=new l.LineBuffer,this.highlighting=!1,this.prompt=u,this.tty=D,this.highlighter=t,this.history=e,this.promptSize=D.calculatePosition(u,new B),this.layout=new p(this.promptSize)}buffer(){return this.line.buffer()}shouldHighlight(){return this.highlighter.highlightChar(this.line.buf,this.line.pos)?(this.highlighting=!0,!0):!!this.highlighting&&(this.highlighting=!1,!0)}clearScreen(){this.tty.clearScreen(),this.layout.cursor=new B,this.layout.end=new B,this.refresh()}editInsert(u){const D=this.line.insert(u),t=u.includes("\n");if(D&&!t){const D=(0,c.default)(u);D>0&&this.layout.cursor.col+D<this.tty.col&&!this.shouldHighlight()?(this.layout.cursor.col+=D,this.layout.end.col+=D,this.tty.write(u)):this.refresh()}else this.refresh()}update(u){this.line.update(u,u.length),this.refresh()}editBackspace(u){this.line.backspace(u)&&this.refresh()}editDelete(u){this.line.delete(u)&&this.refresh()}editDeleteEndOfLine(){this.line.deleteEndOfLine()&&this.refresh()}refresh(){const u=this.tty.computeLayout(this.promptSize,this.line);this.tty.refreshLine(this.prompt,this.line,this.layout,u,this.highlighter),this.layout=u}moveCursorBack(u){this.line.moveBack(u)&&this.moveCursor()}moveCursorForward(u){this.line.moveForward(u)&&this.moveCursor()}moveCursorUp(u){this.line.moveLineUp(u)?this.moveCursor():this.previousHistory()}moveCursorDown(u){this.line.moveLineDown(u)?this.moveCursor():this.nextHistory()}moveCursorHome(){this.line.moveHome()&&this.moveCursor()}moveCursorEnd(){this.line.moveEnd()&&this.moveCursor()}moveCursorToEnd(){this.layout.cursor!==this.layout.end&&(this.tty.moveCursor(this.layout.cursor,this.layout.end),this.layout.cursor=Object.assign({},this.layout.end))}previousHistory(){if(-1===this.history.cursor&&this.line.length()>0)return;const u=this.history.prev();void 0!==u&&this.update(u)}nextHistory(){if(-1===this.history.cursor)return;const u=this.history.next();void 0!==u?this.update(u):this.update("")}moveCursor(){const u=this.tty.calculatePosition(this.line.pos_buffer(),this.promptSize);u!==this.layout.cursor&&(this.shouldHighlight()?this.refresh():(this.tty.moveCursor(this.layout.cursor,u),this.layout.promptSize=Object.assign({},this.promptSize),this.layout.cursor=Object.assign({},u)))}};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.History=void 0,d.History=class{constructor(u){this.entries=[],this.cursor=-1,this.maxEntries=u}saveToLocalStorage(){const u=null===window||void 0===window?void 0:window.localStorage;void 0!==u&&u.setItem("history",JSON.stringify(this.entries))}restoreFromLocalStorage(){const u=null===window||void 0===window?void 0:window.localStorage;if(void 0!==u){const D=u.getItem("history");if(null==D)return;try{const t=JSON.parse(D);Array.isArray(t)&&void 0===t.find((u=>"string"!=typeof u))?this.entries=t:(this.entries=[],u.setItem("history","[]"))}catch(D){this.entries=[],u.setItem("history","[]")}}}append(u){this.resetCursor(),this.entries.includes(u)?(this.entries.splice(this.entries.indexOf(u),1),this.entries.unshift(u)):this.entries.unshift(u),this.entries.length>this.maxEntries&&this.entries.pop(),this.saveToLocalStorage()}resetCursor(){this.cursor=-1}next(){if(-1!==this.cursor)return this.cursor-=1,this.entries[this.cursor]}prev(){if(!(this.cursor+1>=this.entries.length))return this.cursor+=1,this.entries[this.cursor]}};var f={},A=o&&o.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(f,"__esModule",{value:!0}),f.Tty=void 0;const y=A(F);f.Tty=class{constructor(u,D,t,e){this.tabWidth=t,this.col=u,this.row=D,this.out=e}write(u){return this.out.write(u)}print(u){return this.out.print(u)}println(u){return this.out.println(u)}clearScreen(){this.out.write("[H[2J")}calculatePosition(u,D){const t=Object.assign({},D);let e=0;return[...u].forEach((u=>{if("\n"===u)return t.row+=1,void(t.col=0);let D=0;if("\t"===u)D=this.tabWidth-t.col%this.tabWidth;else{let t;[t,e]=function(u,D){return 1===D?"["===u?[0,2]:[0,0]:2===D?";"===u||u[0]>="0"&&u[0]<="9"?[0,D]:[0,0]:""===u?[0,1]:"\n"===u?[0,D]:[(0,y.default)(u),D]}(u,e),D=t}t.col+=D,t.col>this.col&&(t.row+=1,t.col=D)})),t.col===this.col&&(t.col=0,t.row+=1),t}computeLayout(u,D){const t=Object.assign({},u),e=D.pos,F=this.calculatePosition(D.buf.slice(0,D.pos),u);return{promptSize:t,cursor:F,end:e===D.buf.length?Object.assign({},F):this.calculatePosition(D.buf.slice(e),F)}}refreshLine(u,D,t,e,F){const s=e.cursor,i=e.end;this.clearOldRows(t),this.write(F.highlightPrompt(u)),this.write(F.highlight(D.buf,D.pos)),0===i.col&&i.row>0&&"\n"!==D.buf[D.buf.length-1]&&this.write("\n");const r=i.row-s.row;r>0&&this.write(`[${r}A`),s.col>0?this.write(`\r[${s.col}C`):this.write("\r")}clearOldRows(u){const D=u.cursor.row,t=u.end.row,e=Math.max(t-D,0);e>0&&this.write(`[${e}B`);for(let u=0;u<t;u++)this.write("\r[0K[A");this.write("\r[0K")}moveCursor(u,D){if(D.row>u.row){const t=D.row-u.row;1===t?this.write("[B"):this.write(`[${t}B`)}else if(D.row<u.row){const t=u.row-D.row;1===t?this.write("[A"):this.write(`[${t}A`)}if(D.col>u.col){const t=D.col-u.col;1===t?this.write("[C"):this.write(`[${t}C`)}else if(D.col<u.col){const t=u.col-D.col;1===t?this.write("[D"):this.write(`[${t}D`)}}};var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.IdentityHighlighter=void 0,g.IdentityHighlighter=class{highlight(u,D){return u}highlightPrompt(u){return u}highlightChar(u,D){return!1}},Object.defineProperty(C,"__esModule",{value:!0});var w=C.Readline=void 0;const b=n,v=h,m=d,T=f,k=g;w=C.Readline=class{constructor(){this.highlighter=new k.IdentityHighlighter,this.history=new m.History(50),this.disposables=[],this.watermark=0,this.highWatermark=1e4,this.lowWatermark=1e3,this.highWater=!1,this.state=new v.State(">",this.tty(),this.highlighter,this.history),this.checkHandler=()=>!0,this.ctrlCHandler=()=>{},this.pauseHandler=u=>{},this.history.restoreFromLocalStorage()}activate(u){this.term=u,this.term.onData(this.readData.bind(this)),this.term.attachCustomKeyEventHandler(this.handleKeyEvent.bind(this))}dispose(){this.disposables.forEach((u=>u.dispose()))}appendHistory(u){this.history.append(u)}setHighlighter(u){this.highlighter=u}setCheckHandler(u){this.checkHandler=u}setCtrlCHandler(u){this.ctrlCHandler=u}setPauseHandler(u){this.pauseHandler=u}writeReady(){return!this.highWater}write(u){const D=(u="\n"===u?"\r\n":(u=u.replace(/^\n/,"\r\n")).replace(/([^\r])\n/g,"$1\r\n")).length;this.watermark+=D,this.watermark>this.highWatermark&&(this.highWater=!0),this.term&&this.term.write(u,(()=>{this.watermark=Math.max(this.watermark-D,0),this.highWater&&this.watermark<this.lowWatermark&&(this.highWater=!1)}))}print(u){return this.write(u)}println(u){return this.write(u+"\r\n")}output(){return this}tty(){var u,D;return void 0!==(null===(D=null===(u=this.term)||void 0===u?void 0:u.options)||void 0===D?void 0:D.tabStopWidth)?new T.Tty(this.term.cols,this.term.rows,this.term.options.tabStopWidth,this.output()):new T.Tty(0,0,8,this.output())}read(u){return new Promise(((D,t)=>{void 0!==this.term?(this.state=new v.State(u,this.tty(),this.highlighter,this.history),this.state.refresh(),this.activeRead={prompt:u,resolve:D,reject:t}):t("addon is not active")}))}handleKeyEvent(u){return"Enter"!==u.key||!u.shiftKey||("keydown"===u.type&&this.readKey({inputType:b.InputType.ShiftEnter,data:["\r"]}),!1)}readData(u){const D=(0,b.parseInput)(u);D.length>1||D[0].inputType===b.InputType.Text&&D[0].data.length>1?this.readPaste(D):this.readKey(D[0])}readPaste(u){const D=u.map((u=>u.inputType===b.InputType.Enter?{inputType:b.InputType.Text,data:["\n"]}:u));for(const u of D)u.inputType===b.InputType.Text?this.state.editInsert(u.data.join("")):this.readKey(u)}readKey(u){var D,t,e;if(void 0!==this.activeRead)switch(u.inputType){case b.InputType.Text:this.state.editInsert(u.data.join(""));break;case b.InputType.AltEnter:case b.InputType.ShiftEnter:this.state.editInsert("\n");break;case b.InputType.Enter:this.checkHandler(this.state.buffer())?(this.state.moveCursorToEnd(),null===(D=this.term)||void 0===D||D.write("\r\n"),this.history.append(this.state.buffer()),null===(t=this.activeRead)||void 0===t||t.resolve(this.state.buffer()),this.activeRead=void 0):this.state.editInsert("\n");break;case b.InputType.CtrlC:this.state.moveCursorToEnd(),null===(e=this.term)||void 0===e||e.write("^C\r\n"),this.state=new v.State(this.activeRead.prompt,this.tty(),this.highlighter,this.history),this.state.refresh();break;case b.InputType.CtrlS:this.pauseHandler(!1);break;case b.InputType.CtrlU:this.state.update("");break;case b.InputType.CtrlK:this.state.editDeleteEndOfLine();break;case b.InputType.CtrlQ:this.pauseHandler(!0);break;case b.InputType.CtrlL:this.state.clearScreen();break;case b.InputType.Home:case b.InputType.CtrlA:this.state.moveCursorHome();break;case b.InputType.End:case b.InputType.CtrlE:this.state.moveCursorEnd();break;case b.InputType.Backspace:this.state.editBackspace(1);break;case b.InputType.Delete:case b.InputType.CtrlD:this.state.editDelete(1);break;case b.InputType.ArrowLeft:this.state.moveCursorBack(1);break;case b.InputType.ArrowRight:this.state.moveCursorForward(1);break;case b.InputType.ArrowUp:this.state.moveCursorUp(1);break;case b.InputType.ArrowDown:this.state.moveCursorDown(1);case b.InputType.UnsupportedControlChar:case b.InputType.UnsupportedEscape:}else switch(u.inputType){case b.InputType.CtrlC:this.ctrlCHandler();break;case b.InputType.CtrlL:this.write("[H[2J")}}};var I=C.__esModule;export{w as Readline,I as __esModule,C as default};
//# sourceMappingURL=xterm-readline-CP-6ePRb.js.map
