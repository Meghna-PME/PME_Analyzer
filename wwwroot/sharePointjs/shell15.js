/*Bundled JS: /JS/JsMVVM15.js*/Type.registerNamespace('_js');
_js.AriaRole = function() {}
_js.AriaRole.prototype = {
none: 0,
alert: 1,
alertdialog: 2,
button: 3,
checkbox: 4,
dialog: 5,
gridcell: 6,
link: 7,
log: 8,
marquee: 9,
menuitem: 10,
menuitemcheckbox: 11,
menuitemradio: 12,
option: 13,
progressbar: 14,
radio: 15,
scrollbar: 16,
slider: 17,
spinbutton: 18,
status: 19,
tab: 20,
tabpanel: 21,
textbox: 22,
timer: 23,
tooltip: 24,
treeitem: 25,
combobox: 26,
grid: 27,
listbox: 28,
menu: 29,
menubar: 30,
radiogroup: 31,
tablist: 32,
tree: 33,
treegrid: 34,
article: 35,
columnheader: 36,
definition: 37,
directory: 38,
document: 39,
group: 40,
heading: 41,
img: 42,
list: 43,
listitem: 44,
math: 45,
note: 46,
presentation: 47,
region: 48,
row: 49,
rowheader: 50,
separator: 51,
toolbar: 52,
application: 53,
banner: 54,
complementary: 55,
contentinfo: 56,
form: 57,
main: 58,
navigation: 59,
search: 60
}
_js.AriaRole.registerEnum('_js.AriaRole', false);
_js.AriaAutoComplete = function() {}
_js.AriaAutoComplete.prototype = {
none: 0,
inline: 1,
list: 2,
both: 3
}
_js.AriaAutoComplete.registerEnum('_js.AriaAutoComplete', false);
_js.AriaRelevant = function() {}
_js.AriaRelevant.prototype = {
all: 0,
text: 1,
additions: 2,
removals: 3
}
_js.AriaRelevant.registerEnum('_js.AriaRelevant', false);
_js.AriaDropEffect = function() {}
_js.AriaDropEffect.prototype = {
none: 0,
copy: 1,
move: 2,
link: 3,
execute: 4,
popup: 5
}
_js.AriaDropEffect.registerEnum('_js.AriaDropEffect', false);
_js.AriaDualState = function() {}
_js.AriaDualState.prototype = {
falsestate: 0,
truestate: 1,
undefined: 2
}
_js.AriaDualState.registerEnum('_js.AriaDualState', false);
_js.AriaTriState = function() {}
_js.AriaTriState.prototype = {
falsestate: 0,
truestate: 1,
mixedstate: 2,
undefined: 3
}
_js.AriaTriState.registerEnum('_js.AriaTriState', false);
_js.AriaInvalid = function() {}
_js.AriaInvalid.prototype = {
falsestate: 0,
truestate: 1,
grammar: 2,
spelling: 3
}
_js.AriaInvalid.registerEnum('_js.AriaInvalid', false);
_js.AriaLive = function() {}
_js.AriaLive.prototype = {
off: 0,
polite: 1,
assertive: 2
}
_js.AriaLive.registerEnum('_js.AriaLive', false);
_js.AriaOrientation = function() {}
_js.AriaOrientation.prototype = {
horizontal: 0,
vertical: 1
}
_js.AriaOrientation.registerEnum('_js.AriaOrientation', false);
_js.AriaSort = function() {}
_js.AriaSort.prototype = {
none: 0,
ascending: 1,
descending: 2,
other: 3
}
_js.AriaSort.registerEnum('_js.AriaSort', false);
_js.$1Z = function() {}
_js.$1Z.registerInterface('_js.$1Z');
_js.$2e = function() {}
_js.$2e.registerInterface('_js.$2e');
_js.$2d = function() {}
_js.$2d.registerInterface('_js.$2d');
_js.$2A = function _js_$2A($p$0, $p$1, $p$2, $p$3) {
this.instance = $p$0;
this.property = $p$1;
this.oldValue = $p$2;
this.newValue = $p$3;
}
_js.$2H = function() {}
_js.$2H.registerInterface('_js.$2H');
_js.$2f = function() {}
_js.$2f.registerInterface('_js.$2f');
_js.$1q = function() {}
_js.$1q.prototype = {
add: 0,
move: 1,
remove: 2,
replace: 3,
reset: 4
}
_js.$1q.registerEnum('_js.$1q', false);
_js.$2U = function() {}
_js.$2U.registerInterface('_js.$2U');
_js.$2V = function() {}
_js.$2V.registerInterface('_js.$2V');
_js.$1g = function _js_$1g($p$0) {
this.$57 = $p$0;
}
_js.$21 = function() {}
_js.$21.prototype = {
none: 0,
click: 1,
doubleClick: 2,
hover: 4,
mouseDown: 8,
mouseUp: 16,
focus: 32,
blur: 64,
keyUp: 128,
keyDown: 256,
change: 512,
copy: 1024,
selectStart: 2048,
dragStart: 4096,
contextMenu: 8192,
touch: 16384,
paste: 131072,
focusIn: 262144,
focusOut: 524288,
keyPress: 1048576,
input: 2097152,
mouseEnter: 4194304,
mouseLeave: 8388608,
mouseMove: 16777216
}
_js.$21.registerEnum('_js.$21', true);
_js.$5 = function _js_$5($p$0) {
this.$5K = $p$0;
}
_js.$5.$5j = function _js_$5$$5j() {
_js.$5.$Cq++;
return '_ariaId_' + _js.$5.$Cq.toString();
}
_js.$5.$EN = function _js_$5$$EN($p$0) {
return ($p$0) ? 1 : 0;
}
_js.$5.$EO = function _js_$5$$EO($p$0) {
return ($p$0) ? 1 : 0;
}
_js.$5.$JW = function _js_$5$$JW($p$0) {
switch ($p$0) {
case 0:
return 'false';
case 1:
return 'true';
default:
return null;
}
}
_js.$5.$JX = function _js_$5$$JX($p$0) {
switch ($p$0) {
case 'false':
return 0;
case 'true':
return 1;
default:
return 2;
}
}
_js.$5.$JZ = function _js_$5$$JZ($p$0) {
switch ($p$0) {
case 0:
return 'false';
case 1:
return 'true';
case 2:
return 'mixed';
default:
return null;
}
}
_js.$5.$JY = function _js_$5$$JY($p$0) {
switch ($p$0) {
case 'false':
return 0;
case 'true':
return 1;
case 'mixed':
return 2;
default:
return 3;
}
}
function $3k($p$0, $p$1) {
return $p$0.$5K.getAttribute($p$1);
}
function $5D($p$0, $p$1, $p$2) {
var $v$0 = $p$0.$5K.getAttribute($p$1);
return ($v$0 === null || $v$0 === undefined || $v$0 === '') ? $p$2 : $v$0;
}
function $22($p$0, $p$1, $p$2) {
if (!$p$2) {
$p$0.$5K.removeAttribute($p$1);
}
else {
$p$0.$5K.setAttribute($p$1, $p$2);
}
}
_js.$5.prototype = {
$5K: null,
get_$2c: function _js_$5$get_$2c() {
return _js.$16.$QQ(_js.AriaRole, $5D(this, 'role', 'none'));
},
set_$2c: function _js_$5$set_$2c($p$0) {
var $v$0 = (!$p$0) ? null : _js.$16.$Q3(_js.AriaRole, $p$0);
$22(this, 'role', $v$0);
return $p$0;
},
get_$Cc: function _js_$5$get_$Cc() {
return parseInt($5D(this, 'tabindex', '-1'));
},
set_$Cc: function _js_$5$set_$Cc($p$0) {
$22(this, 'tabindex', $p$0.toString());
return $p$0;
},
get_$n: function _js_$5$get_$n() {
return $3k(this, 'id');
},
set_$n: function _js_$5$set_$n($p$0) {
$22(this, 'id', $p$0);
return $p$0;
},
get_$KQ: function _js_$5$get_$KQ() {
return $3k(this, 'aria-flowto');
},
set_$KQ: function _js_$5$set_$KQ($p$0) {
$22(this, 'aria-flowto', $p$0);
return $p$0;
},
get_$Al: function _js_$5$get_$Al() {
return Boolean.parse($5D(this, 'aria-haspopup', 'false'));
},
set_$Al: function _js_$5$set_$Al($p$0) {
$22(this, 'aria-haspopup', $p$0.toString());
return $p$0;
},
get_$BI: function _js_$5$get_$BI() {
return $3k(this, 'aria-label');
},
set_$BI: function _js_$5$set_$BI($p$0) {
$22(this, 'aria-label', $p$0);
return $p$0;
},
get_$62: function _js_$5$get_$62() {
return $3k(this, 'aria-labelledby');
},
set_$62: function _js_$5$set_$62($p$0) {
$22(this, 'aria-labelledby', $p$0);
return $p$0;
},
get_$On: function _js_$5$get_$On() {
return $3k(this, 'aria-owns');
},
set_$On: function _js_$5$set_$On($p$0) {
$22(this, 'aria-owns', $p$0);
return $p$0;
},
get_$EH: function _js_$5$get_$EH() {
return _js.$5.$JY($3k(this, 'aria-checked'));
},
set_$EH: function _js_$5$set_$EH($p$0) {
$22(this, 'aria-checked', _js.$5.$JZ($p$0));
return $p$0;
},
get_$K2: function _js_$5$get_$K2() {
return Boolean.parse($5D(this, 'aria-disabled', 'false'));
},
set_$K2: function _js_$5$set_$K2($p$0) {
$22(this, 'aria-disabled', $p$0.toString());
return $p$0;
},
get_$Am: function _js_$5$get_$Am() {
return Boolean.parse($5D(this, 'aria-hidden', 'false'));
},
set_$Am: function _js_$5$set_$Am($p$0) {
$22(this, 'aria-hidden', ($5($p$0)) ? null : $p$0.toString());
return $p$0;
},
get_$6X: function _js_$5$get_$6X() {
return _js.$5.$JX($3k(this, 'aria-selected'));
},
set_$6X: function _js_$5$set_$6X($p$0) {
$22(this, 'aria-selected', _js.$5.$JW($p$0));
return $p$0;
}
}
_js.$w = function _js_$w() {
this.$$d_$JT = Function.createDelegate(this, this.$JT);
_js.$w.initializeBase(this);
}
function $DA($p$0) {
if (!$p$0.get_$3F()) {
$p$0.set_$3F(true);
$p$0.$2r();
}
}
function $DB($p$0) {
if ($p$0.get_$3F()) {
$p$0.set_$3F(false);
$p$0.$2a();
}
}
_js.$w.prototype = {
$CS: false,
$19: false,
get_$3F: function _js_$w$get_$3F() {
return this.$19;
},
set_$3F: function _js_$w$set_$3F($p$0) {
if (this.$19 !== $p$0) {
this.$19 = $p$0;
$4(this, 'IsActive');
}
return $p$0;
},
get_$8: function _js_$w$get_$8() {
return this.$Q;
},
set_$8: function _js_$w$set_$8($p$0) {
if (this.$Q !== $p$0) {
if (this.$Q) {
this.$Q.remove_$GM(this.$$d_$k);
this.$Q.$1j('IsActive', this.$$d_$JT);
$DB(this);
this.$Nz(this.get_$8());
}
this.$CS = true;
this.set_$5S($p$0);
this.$CS = false;
if (this.$Q) {
this.$Q.add_$GM(this.$$d_$k);
this.$Q.$1r('IsActive', this.$$d_$JT);
this.$GH(this.get_$8());
if (this.get_$8().get_$3F()) {
$DA(this);
}
}
}
return $p$0;
},
$8f: function _js_$w$$8f() {
if (!this.$CS) {
throw Error.invalidOperation('You cannot set ContextParent on Behavior; set AttachedControl instead.');
}
_js.$l.prototype.$8f.call(this);
},
$GH: function _js_$w$$GH($p$0) {
},
$2r: function _js_$w$$2r() {
},
$2a: function _js_$w$$2a() {
},
$Nz: function _js_$w$$Nz($p$0) {
},
$5r: function _js_$w$$5r() {
this.set_$8(null);
_js.$l.prototype.$5r.call(this);
},
$JT: function _js_$w$$JT($p$0, $p$1) {
if (this.get_$8() && this.get_$8().get_$3F()) {
$DA(this);
}
else {
$DB(this);
}
}
}
_js.$l = function _js_$l() {
this.$$d_$GJ = Function.createDelegate(this, this.$GJ);
this.$$d_$GU = Function.createDelegate(this, this.$GU);
this.$6K = new _js.$1L();
_js.$l.initializeBase(this);
this.$2i = [];
this.$31 = [];
this.$8n = {};
}
function $DE($p$0) {
var $v$0 = ($p$0.$Q) ? $p$0.$Q.get_$Y() : null;
if ($v$0) {
$p$0.$FM = true;
}
if ($p$0.$FM) {
if ($p$0.$4b) {
$p$0.$4b.$36($v$0);
}
else if (!$p$0.$5b) {
$DD($p$0, $v$0, true);
}
}
}
function $DC($p$0, $p$1) {
_js.$8.$1D($p$1, 'dataBinder');
if ($p$0.$8n[$p$1.$3d]) {
throw Error.argument('TargetProperty already bound to other properties');
}
$p$0.$8n[$p$1.$3d] = $p$1;
if ($p$0.$LI) {
$p$1.$Fj();
}
$p$1.$E7($p$0);
}
function $DD($p$0, $p$1, $p$2) {
if ($p$0.$e_2 !== $p$1) {
$p$0.$Ny();
if ($p$2) {
$p$0.$8E = $p$1;
}
$p$0.$e_2 = $p$1;
$p$0.$GL();
$4($p$0, 'DataContext');
}
}
_js.$l.prototype = {
$5b: false,
$FM: false,
$e_2: null,
$8E: null,
$Q: null,
$2i: null,
$31: null,
$8n: null,
$4b: null,
$LI: false,
add_$GM: function _js_$l$add_$GM($p$0) {
this.$6K.$E1($p$0);
},
remove_$GM: function _js_$l$remove_$GM($p$0) {
this.$6K.$Gs($p$0);
},
get_$Y: function _js_$l$get_$Y() {
return (this.$5b) ? this.$e_2 : this.$8E;
},
set_$Y: function _js_$l$set_$Y($p$0) {
this.$5b = true;
$DD(this, $p$0, false);
return $p$0;
},
get_$9i: function _js_$l$get_$9i() {
return (this.$5b) ? this.$e_2 : null;
},
get_$5S: function _js_$l$get_$5S() {
return this.$Q;
},
set_$5S: function _js_$l$set_$5S($p$0) {
if (this.$Q !== $p$0) {
if (this.$Q) {
this.$Q.$1j('DataContext', this.$$d_$GU);
this.$Q.$1j('IsActive', this.$$d_$GJ);
}
this.$Q = $p$0;
if (this.$Q) {
this.$Q.$1r('DataContext', this.$$d_$GU);
this.$Q.$1r('IsActive', this.$$d_$GJ);
}
$4(this, 'ContextParent');
this.$8f();
}
return $p$0;
},
get_$3F: function _js_$l$get_$3F() {
return true;
},
set_$3F: function _js_$l$set_$3F($p$0) {
return $p$0;
},
get_$M2: function _js_$l$get_$M2() {
return false;
},
$2: function _js_$l$$2($p$0) {
$DC(this, $p$0);
if ($p$0.$3d === 'DataContext') {
this.$5b = true;
this.$4b = $p$0;
$p$0.$36(this.$8E);
}
else {
this.$2i[this.$2i.length] = $p$0;
if (this.$e_2) {
$p$0.$36(this.get_$Y());
}
}
return this;
},
$6: function _js_$l$$6($p$0) {
$DC(this, $p$0);
this.$31[this.$31.length] = $p$0;
$p$0.$EY(true);
return this;
},
$5r: function _js_$l$$5r() {
this.$6K.$Gp();
this.$6K.$k();
if (this.$4b) {
this.$4b.$k();
this.$4b = null;
}
if (this.$2i) {
for (var $v$0 = 0; $v$0 < this.$2i.length; $v$0++) {
(this.$2i[$v$0]).$k();
}
}
if (this.$31) {
for (var $v$1 = 0; $v$1 < this.$31.length; $v$1++) {
(this.$31[$v$1]).$k();
}
}
this.set_$Y(null);
if (this.$Q) {
this.$Q.$1j('DataContext', this.$$d_$GU);
this.$Q.$1j('IsActive', this.$$d_$GJ);
this.$Q = null;
}
this.$8E = null;
this.$2i = null;
this.$31 = null;
this.$8n = null;
_js.$0.prototype.$5r.call(this);
},
$Ny: function _js_$l$$Ny() {
},
$GL: function _js_$l$$GL() {
for (var $v$0 = this.$2i.length - 1; $v$0 >= 0; $v$0--) {
(this.$2i[$v$0]).$36(this.$e_2);
}
},
$8f: function _js_$l$$8f() {
for (var $v$0 = this.$31.length - 1; $v$0 >= 0; $v$0--) {
(this.$31[$v$0]).$36(this.$Q);
}
$DE(this);
},
$GJ: function _js_$l$$GJ($p$0, $p$1) {
this.$GU($p$0, $p$1);
},
$GU: function _js_$l$$GU($p$0, $p$1) {
if (!this.$3G && this.$Q && (this.$Q.get_$3F() || !this.$Q.get_$Y())) {
$DE(this);
}
}
}
function JsonParser() {
}
JsonParser.serialize = function JsonParser$serialize(value, webServiceCall) {
if (webServiceCall) {
return Sys.Serialization.JavaScriptSerializer.serialize(value);
}
else {
return JSON.stringify(value);
}
}
JsonParser.deserialize = function JsonParser$deserialize(json) {
if (!json) {
return null;
}
return JSON.parse(json);
}
_js.$J = function _js_$J() {
this.$4f = new Sys.EventHandlerList();
this.$R = [];
_js.$J.initializeBase(this);
}
_js.$J.$JS = function _js_$J$$JS($p$0, $p$1) {
if (!(_js.$1Z.isInstanceOfType($p$0))) {
throw Error.argumentType('item1 must implement IEquatable in CompareIEquatable');
}
var $v$0 = $p$0;
return $v$0.$Ef($p$1);
}
function $Hn($p$0, $p$1, $p$2) {
$3l($p$0);
Array.insert($p$0.$R, $p$1, $p$2);
$34($p$0, 0, $p$1, $p$1, [ $p$2 ], null);
$4($p$0, 'Count');
}
function $DN($p$0, $p$1, $p$2) {
if (!$p$2) {
throw Error.argumentNull('items');
}
if ($p$1 > $p$0.get_$H() || $p$1 < 0) {
throw Error.argumentOutOfRange('index');
}
if (!$p$0.get_$H()) {
$p$0.$E2($p$2);
return;
}
$3l($p$0);
for (var $v$0 = 0, $v$1 = $p$2.length; $v$0 < $v$1; $v$0++) {
Array.insert($p$0.$R, $p$1 + $v$0, $p$2[$v$0]);
}
$34($p$0, 0, $p$1, $p$1, $p$2, null);
$4($p$0, 'Count');
}
function $Hl($p$0, $p$1) {
$3l($p$0);
Array.add($p$0.$R, $p$1);
var $v$0 = $p$0.get_$H() - 1;
$34($p$0, 0, $v$0, $v$0, [ $p$1 ], null);
$4($p$0, 'Count');
}
function $Hm($p$0, $p$1) {
$3l($p$0);
Array.addRange($p$0.$R, $p$1);
var $v$0 = $p$0.get_$H() - $p$1.length;
$34($p$0, 0, $v$0, $v$0, $p$1, null);
$4($p$0, 'Count');
}
function $3l($p$0) {
if ($p$0.$9r) {
throw Error.invalidOperation();
}
}
function $34($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
if (!$p$0.$3H) {
var $v$0 = $p$0.$4f.getHandler('CollectionChanged');
if ($v$0) {
$p$0.$9r = true;
try {
$p$0.$KN($v$0, $p$1, $p$2, $p$3, $p$4, $p$5);
}
finally {
$p$0.$9r = false;
}
}
}
}
_js.$J.prototype = {
$9r: false,
add_$2P: function _js_$J$add_$2P($p$0) {
this.$4f.addHandler('CollectionChanged', $p$0);
},
remove_$2P: function _js_$J$remove_$2P($p$0) {
this.$4f.removeHandler('CollectionChanged', $p$0);
},
get_$H: function _js_$J$get_$H() {
return this.$R.length;
},
get_$QI: function _js_$J$get_$QI($p$0) {
return this.$R[$p$0];
},
set_$QI: function _js_$J$set_$QI($p$0, $p$1) {
_js.$8.$Cj($p$0, 0, this.get_$H() - 1, 'index');
if (this.$R[$p$0] !== $p$1) {
var $v$0 = this.$R[$p$0];
this.$R[$p$0] = $p$1;
$34(this, 3, $p$0, $p$0, [ $p$1 ], [ $v$0 ]);
}
return $p$1;
},
$Lc: function _js_$J$$Lc($p$0, $p$1) {
$DN(this, $p$0, $p$1);
},
$Av: function _js_$J$$Av($p$0, $p$1) {
if (!$p$1) {
if (_js.$1Z.isInstanceOfType($p$0)) {
$p$1 = _js.$J.$JS;
}
else {
return Array.indexOf(this.$R, $p$0);
}
}
for (var $v$0 = 0, $v$1 = this.$R.length; $v$0 < $v$1; ++$v$0) {
if ($p$1($p$0, this.$R[$v$0])) {
return $v$0;
}
}
return -1;
},
$3p: function _js_$J$$3p($p$0) {
$Hl(this, $p$0);
},
$E2: function _js_$J$$E2($p$0) {
$Hm(this, $p$0);
},
$5Q: function _js_$J$$5Q() {
if (!this.get_$H()) {
return;
}
$3l(this);
var $v$0 = this.$R;
this.$R = [];
$34(this, 2, 0, 0, null, $v$0);
$4(this, 'Count');
},
$CH: function _js_$J$$CH($p$0) {
$3l(this);
var $v$0 = this.$R[$p$0];
Array.removeAt(this.$R, $p$0);
$34(this, 2, $p$0, $p$0, null, [ $v$0 ]);
$4(this, 'Count');
},
$GC: function _js_$J$$GC($p$0, $p$1, $p$2) {
$3l(this);
Array.removeAt(this.$R, $p$0);
Array.insert(this.$R, $p$1, $p$2);
$34(this, 1, $p$0, $p$1, [ $p$2 ], []);
},
$KN: function _js_$J$$KN($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
var $v$0 = new _js.$1r($p$1, $p$2, $p$4, $p$5, $p$3);
($p$0)(this, $v$0);
},
$5r: function _js_$J$$5r() {
this.$5Q();
_js.$0.prototype.$5r.call(this);
}
}
_js.$1r = function _js_$1r($p$0, $p$1, $p$2, $p$3, $p$4) {
this.$5B = -1;
this.$2O = $p$0;
this.$15 = $p$1;
this.$5B = $p$4;
switch ($p$0) {
case 0:
this.$y = $p$2;
break;
case 1:
this.$y = $p$2;
this.$1v = $p$3;
break;
case 2:
this.$1v = $p$3;
break;
case 3:
this.$y = $p$2;
this.$1v = $p$3;
break;
case 4:
this.$15 = -1;
break;
}
}
_js.$1r.prototype = {
$2O: 0,
$y: null,
$1v: null,
$15: 0
}
_js.$0 = function _js_$0() {
this.$$d_$5r = Function.createDelegate(this, this.$5r);
this.$$d_$k = Function.createDelegate(this, this.$k);
this.apcl = this.$1r;
this.rpcl = this.$1j;
this.dispose = this.$k;
_js.$0.initializeBase(this);
}
function $4($p$0, $p$1) {
if ($p$0.$f && !$p$0.$3H) {
var $v$0 = $p$0.$f.getHandler('$');
$4g($p$0, $p$1, $v$0);
}
}
function $6k($p$0, $p$1, $p$2) {
if ($p$0.$f && !$p$0.$3H) {
var $v$0 = $p$0.$f.getHandler('$');
$4g($p$0, $p$1, $v$0);
$4g($p$0, $p$2, $v$0);
}
}
function $Hk($p$0, $p$1, $p$2, $p$3) {
if ($p$0.$f && !$p$0.$3H) {
var $v$0 = $p$0.$f.getHandler('$');
$4g($p$0, $p$1, $v$0);
$4g($p$0, $p$2, $v$0);
$4g($p$0, $p$3, $v$0);
}
}
function $DM($p$0, $p$1, $p$2) {
var $v$0 = $p$0.$Ke($p$1);
if (!$5($v$0)) {
$v$0($p$2);
}
}
_js.$0.prototype = {
$f: null,
$Ai: 0,
$3H: false,
$3G: false,
add_$Oy: function _js_$0$add_$Oy($p$0) {
this.$1r('$', $p$0);
},
remove_$Oy: function _js_$0$remove_$Oy($p$0) {
this.$1j('$', $p$0);
},
get_$M2: function _js_$0$get_$M2() {
return true;
},
$1r: function _js_$0$$1r($p$0, $p$1) {
if (!this.$f) {
this.$f = new Sys.EventHandlerList();
}
this.$Ai++;
this.$f.addHandler($p$0, $p$1);
},
$1j: function _js_$0$$1j($p$0, $p$1) {
if (this.$f) {
this.$Ai--;
this.$f.removeHandler($p$0, $p$1);
}
},
$Ik: function _js_$0$$Ik($p$0, $p$1) {
this.$1r('~' + $p$0, $p$1);
},
$PJ: function _js_$0$$PJ($p$0, $p$1) {
this.$1j('~' + $p$0, $p$1);
},
$Ke: function _js_$0$$Ke($p$0) {
if (this.$f) {
return this.$f.getHandler('~' + $p$0);
}
return null;
},
$k: function _js_$0$$k() {
if (!this.$3H) {
this.$3H = true;
this.$Br();
var $v$0 = this.$$d_$5r;
if (this.get_$M2()) {
$v$0();
}
else {
_js.$2.get_$a().$8o(_js.$G.$7N, 'Dispose.' + Object.getType(this).getName(), $v$0);
}
this.$3G = true;
}
},
$Br: function _js_$0$$Br() {
},
$5r: function _js_$0$$5r() {
this.$Ai = 0;
this.$f = null;
},
$GV: function _js_$0$$GV($p$0) {
_js.$2j.prototype.$GV.call(this, $p$0);
$4(this, $p$0.property.$2Y);
}
}
function $4g($p$0, $p$1, $p$2) {
var $v$0 = $p$0.$f.getHandler($p$1);
if ($v$0) {
$v$0($p$0, $p$1);
}
if ($p$2) {
$p$2($p$0, $p$1);
}
}
_js.$1u = function _js_$1u() {
}
_js.$1u.$Ks = function _js_$1u$$Ks($p$0, $p$1) {
if ($5($p$1)) {
if ($p$0 === Number || Type.isEnum($p$0)) {
return 0;
}
else if ($p$0 === Boolean) {
return false;
}
else {
return null;
}
}
else {
return $p$1;
}
}
_js.$1L = function _js_$1L() {
_js.$1L.initializeBase(this);
}
_js.$1L.$P9 = function _js_$1L$$P9($p$0) {
($p$0)();
}
_js.$1L.prototype = {
$E1: function _js_$1L$$E1($p$0) {
$DJ(this, $p$0);
},
$Gs: function _js_$1L$$Gs($p$0) {
$DL(this, $p$0);
},
$Gp: function _js_$1L$$Gp() {
$DK(this, _js.$1L.$P9);
}
}
_js.$1C = function _js_$1C() {
_js.$1C.$$(this.$$gta['_js.$1C']['T']).initializeBase(this);
}
_js.$1C.$$ = function _js_$1C$$$($p$0) {
var $$cn = '$1C' + '$1' + '$' + $p$0.getName().replace(/\./g, '_');
if (!_js[$$cn]) {
var $$ccr = _js[$$cn] = function() {
(this.$$gta = this.$$gta || {})['_js.$1C'] = {'T': $p$0};
var $v$0 = [];
for (var $v$1 = 0; $v$1 < arguments.length; ++$v$1) {
$v$0[$v$1] = arguments[$v$1];
}
_js.$1C.apply(this, $v$0);
};
$$ccr.registerClass('_js.' + $$cn, _js.$k);
var $$dict_5 = _js.$1C.prototype;
for (var $$key_6 in $$dict_5) {
var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
if ('constructor' !== $$entry_7.key) {
$$ccr.prototype[$$entry_7.key] = $$entry_7.value;
}
}
}
return _js[$$cn];
}
_js.$1C.prototype = {
$E1: function _js_$1C$$E1($p$0) {
$DJ(this, $p$0);
},
$Gs: function _js_$1C$$Gs($p$0) {
$DL(this, $p$0);
},
$Gp: function _js_$1C$$Gp($p$0) {
var $$t_2 = this;
$DK(this, function($p$1_0) {
($p$1_0)($p$0);
});
}
}
_js.$k = function _js_$k() {
_js.$k.initializeBase(this);
}
function $DJ($p$0, $p$1) {
if (!$p$0.$f) {
$p$0.$f = [];
}
Array.add($p$0.$f, $p$1);
}
function $DL($p$0, $p$1) {
if ($p$0.$f) {
Array.remove($p$0.$f, $p$1);
}
}
function $DK($p$0, $p$1) {
if ($p$0.$f) {
var $v$0 = Array.clone($p$0.$f);
Array.forEach($v$0, $p$1);
$v$0 = null;
}
}
_js.$k.prototype = {
$f: null,
get_$Ak: function _js_$k$get_$Ak() {
return !!this.$f && this.$f.length > 0;
},
$5r: function _js_$k$$5r() {
this.$f = null;
}
}
_js.$2h = function _js_$2h() {
this.dispose = this.$k;
}
_js.$2h.prototype = {
$3G: false,
$k: function _js_$2h$$k() {
if (!this.$3G) {
this.$5r();
this.$3G = true;
}
}
}
_js.$16 = function _js_$16() {
}
_js.$16.$QQ = function _js_$16$$QQ($p$0, $p$1) {
return _js.$16.$Oo($p$0, $p$1);
}
_js.$16.$Oo = function _js_$16$$Oo($p$0, $p$1) {
var $v$0 = $p$1.charCodeAt(0);
if ($v$0 <= 57 && $v$0 >= 0) {
var $v$1 = parseInt($p$1);
if (isFinite($v$1) && $v$1 >= 0) {
return $v$1;
}
}
try {
return $p$0.parse($p$1, true);
}
catch ($v$2) {
var $v$3 = parseInt($p$1);
if (isFinite($v$3) && $v$3 >= 0) {
return $v$3;
}
throw $v$2;
}
}
_js.$16.$Q3 = function _js_$16$$Q3($p$0, $p$1) {
if (_js.$2H.isInstanceOfType($p$1)) {
var $v$0 = $p$1;
var $v$1 = new Sys.StringBuilder();
for (var $v$2 = 0; $v$2 < $v$0.get_$H(); $v$2++) {
var $v$3 = $v$0.get_$QI($v$2);
$v$1.append($p$0.toString($v$3));
}
return $v$1.toString(',');
}
else {
return $p$0.toString($p$1);
}
}
function $5($p$0) {
return $p$0 === null || $p$0 === undefined;
}
_js.$7 = function _js_$7() {
}
_js.$7.$1U = function _js_$7$$1U($p$0) {
return $p$0 === null || $p$0 === undefined || $p$0 === '';
}
_js.$7.$1L = function _js_$7$$1L($p$0) {
return _js.$7.$1U($p$0) || $p$0.trim() === '';
}
_js.$7.$Er = function _js_$7$$Er($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6) {
if ($p$1 !== undefined || $p$2 !== undefined || $p$3 !== undefined || $p$4 !== undefined || $p$5 !== undefined || $p$6 !== undefined) {
return String.format($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6);
}
else {
return $p$0;
}
}
_js.$2 = function _js_$2($p$0, $p$1, $p$2, $p$3, $p$4) {
this.$$d_$Gx = Function.createDelegate(this, this.$Gx);
this.$$d_$PM = Function.createDelegate(this, this.$PM);
this.$$d_$PO = Function.createDelegate(this, this.$PO);
this.$30 = [];
this.$2U = [];
this.$2k = [];
this.$2g = 0;
this.$C9 = $p$0;
this.$4O = $p$1;
this.$F5 = $p$2;
this.$3U = 0;
this.$6N = 0;
this.$2Z = $p$3;
this.$Bn = 0;
this.$2s = [];
this.$5i = $p$4;
this.$6T = {};
this.$Bp = 0;
if (_js.$O.getInstance().get_$FI() && window.addEventListener) {
var $$t_6 = this;
(window.self).addEventListener('scroll', function($p$1_0) {
$$t_6.$Jx(1);
return true;
}, false);
}
}
_js.$2.get_$a = function _js_$2$get_$a() {
if (!_js.$2.$18) {
_js.$2.$18 = new _js.$2(50, 0, 100, window.self, function() {
return new Date();
});
}
return _js.$2.$18;
}
function $3m($p$0, $p$1, $p$2) {
if (!$p$1.$5k && !$p$1.$9v) {
$p$1.$5k = true;
var $v$0 = ($p$1.$Cu) ? $p$1.$78 : $p$1.$35;
if ($p$0.$6x) {
return $p$0.$6x($v$0, $p$1.$1p, $p$1.$7J, $p$1.$3h, $p$0.$CC, false, $p$2, $p$0.$30.length, $p$0.$2k.length, $p$0.$2U.length);
}
var $v$1 = new Date();
$v$0();
return (new Date()) - $v$1;
}
return 0;
}
function $Hs($p$0, $p$1, $p$2) {
if ($p$0.$6x) {
return $p$0.$6x($p$1.$35, $p$1.$1p, $p$1.$7J, $p$1.$3h, $p$0.$CC, false, $p$2, $p$0.$30.length, $p$0.$2k.length, $p$0.$2U.length);
}
var $v$0 = new Date();
$p$1.$35();
return (new Date()) - $v$0;
}
function $Hr($p$0) {
$p$0.$8u = $p$0.$2U.length > 0;
$p$0.$6W = $p$0.$2k.length > 0;
try {
$DP($p$0, ($p$0.$2U.length > 0) ? $p$0.$2U : $p$0.$2k, $p$0.$C9 / 2);
}
finally {
$p$0.$8u = false;
$p$0.$6W = false;
}
}
function $DP($p$0, $p$1, $p$2) {
var $v$0 = $DT($p$0, $p$1);
var $v$1 = 0;
var $v$2 = false;
while ($p$1.length > 0 && $v$1 < $p$2) {
var $v$3 = Array.dequeue($p$1);
if ($p$0.$8u || $p$0.$6W) {
$v$1 += $Hs($p$0, $v$3, $v$0);
}
else {
$v$1 += $3m($p$0, $v$3, $v$0);
}
$v$2 = true;
}
return $v$2;
}
function $6m($p$0) {
if ($p$0.$24) {
if ($p$0.$Ck === (!$p$0.$30.length)) {
return;
}
$4S($p$0, $p$0.$24);
$p$0.$24 = null;
}
if ($p$0.$4O < 0) {
$p$0.$Gx();
}
else {
$p$0.$Ck = !$p$0.$30.length;
$p$0.$24 = $6l($p$0, _js.$G.$3e, 'TaskRunner.RunForQuanta', $p$0.$$d_$Gx, ($p$0.$Ck) ? $p$0.$F5 : $p$0.$4O, true, true);
}
}
function $DQ($p$0, $p$1) {
Array.enqueue($p$0.$30, $p$1);
$6m($p$0);
}
function $6l($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6) {
if ($p$0.$CC) {
var $v$0 = new _js.$2.$2z($p$0.$2g, $p$1, 'TimerCallback_' + $p$2, $p$3, $p$5);
var $$t_8 = this;
var $v$1 = function() {
$3m($p$0, $v$0, 0);
$DR($p$0, $v$0, $p$0.$5i());
};
if ($p$4 || $5($p$0.$2Z.setImmediate)) {
$v$0.$5A = $p$0.$2Z.setTimeout($v$1, $p$4);
}
else {
$v$0.$5A = $p$0.$2Z.setImmediate($v$1);
}
if ($p$6) {
$Hp($p$0, $v$0, $p$4);
}
return $v$0;
}
else {
$3m($p$0, new _js.$2.$2z($p$0.$2g, $p$1, $p$2, $p$3, $p$5), 0);
return null;
}
}
function $Hu($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
var $v$0 = new _js.$2.$2z($p$0.$2g, $p$1, $p$2, $p$3, false);
$v$0.$3V = $Hx($p$0, $v$0, $p$4);
if ($p$5) {
$Ho($p$0, $v$0, $p$4);
}
return $v$0;
}
function $Hq($p$0, $p$1) {
if ($p$1) {
$p$0.$2Z.clearTimeout($p$1);
var $$t_2 = this;
$DS($p$0, function($p$1_0) {
return $p$1_0.$5A === $p$1;
});
}
return 0;
}
function $4S($p$0, $p$1) {
$p$1.$9v = true;
if ($p$1.$3V) {
$9N($p$0, $p$1.$3V);
}
else if ($p$1.$5A) {
$Hq($p$0, $p$1.$5A);
}
}
function $9N($p$0, $p$1) {
if ($p$1) {
$p$0.$2Z.clearInterval($p$1);
var $$t_3 = this;
$DS($p$0, function($p$1_0) {
return $p$1_0.$3V === $p$1;
});
var $v$0 = ($p$1).toString();
if ((($v$0) in $p$0.$6T)) {
$9N($p$0, $p$0.$6T[$v$0]);
delete $p$0.$6T[$v$0];
}
}
return 0;
}
function $Hw($p$0, $p$1) {
Array.enqueue($p$0.$2k, $p$1);
$6m($p$0);
}
function $Hx($p$0, $p$1, $p$2) {
var $v$0 = $p$1;
var $$t_4 = this;
var $v$1 = $p$0.$2Z.setInterval(function() {
$Ht($p$0, $v$0, $p$0.$5i());
$v$0 = new _js.$2.$2z($p$1.$7J, $p$1.$3h, $p$1.$1p, $p$1.$35, false);
$v$0.$6H = $9O($p$0);
}, $p$2);
return $v$1;
}
function $Ht($p$0, $p$1, $p$2) {
$3m($p$0, $p$1, 0);
$DR($p$0, $p$1, $p$2);
}
function $DR($p$0, $p$1, $p$2) {
var $v$0 = 0;
while ($v$0 < $p$0.$2s.length) {
var $v$1 = $p$0.$2s[$v$0];
if ($Hv($p$0, $p$1, $v$1, $p$2)) {
Array.removeAt($p$0.$2s, $v$0);
}
else {
++$v$0;
}
}
}
function $Hv($p$0, $p$1, $p$2, $p$3) {
var $v$0 = false;
if ($p$2 === $p$1) {
$v$0 = true;
}
else if ($p$2.$5k) {
if ($p$3.getTime() - $p$2.$6G.getTime() > 5000) {
_js.Trace.logWarning(_js.$G.$3e, 'The pending task with component {0} and source {1} only executed via its backup', $p$2.$3h, $p$2.$1p);
$p$0.$Bp++;
if ($p$0.get_$HE()) {
$p$0.get_$HE()($p$0.$Bn, $p$0.$Bp);
}
$v$0 = true;
}
}
else if ($p$2.$6H < $p$1.$6H && $p$3.getTime() >= $p$2.$6G.getTime()) {
$p$2.$Cu = true;
$p$2.$6G = new Date($p$3.getTime() + 5000);
if ($p$2.$FF) {
if ($5($p$0.$2Z.setImmediate)) {
var $$t_4 = this;
$p$0.$2Z.setTimeout(function() {
$3m($p$0, $p$2, 0);
}, 0);
}
else {
var $$t_5 = this;
$p$0.$2Z.setImmediate(function() {
$3m($p$0, $p$2, 0);
});
}
}
else {
$DQ($p$0, $p$2);
}
}
return $v$0;
}
function $9O($p$0) {
return $p$0.$Bn++;
}
function $DT($p$0, $p$1) {
return ($p$1 === $p$0.$2U) ? 1 : ($p$1 === $p$0.$2k) ? 2 : 0;
}
function $DS($p$0, $p$1) {
for (var $v$0 = 0; $v$0 < $p$0.$2s.length; ++$v$0) {
if ($p$1($p$0.$2s[$v$0])) {
Array.removeAt($p$0.$2s, $v$0);
break;
}
}
}
function $Hp($p$0, $p$1, $p$2) {
$p$1.$6H = $9O($p$0);
$p$1.$6G = (!$p$2) ? _js.$2.$AS : new Date($p$0.$5i().getTime() + $p$2);
$p$1.$78 = $p$1.$35;
Array.add($p$0.$2s, $p$1);
}
function $Ho($p$0, $p$1, $p$2) {
$p$1.$6H = $9O($p$0);
$p$1.$6G = (!$p$2) ? _js.$2.$AS : new Date($p$0.$5i().getTime() + (2 * $p$2));
var $$t_5 = this;
$p$1.$78 = function() {
_js.Trace.logWarning(_js.$G.$3e, 'A periodic callback never fired its first callback.  Canceling and recreating that timer.');
$p$1.$35();
$9N($p$0, $p$1.$3V);
var $v$0 = false;
var $v$1 = $Hu($p$0, $p$1.$3h, $p$1.$1p, $p$1.$35, $p$2, $v$0);
var $v$2 = ($p$1.$3V).toString();
$p$0.$6T[$v$2] = $v$1.$3V;
};
Array.add($p$0.$2s, $p$1);
}
_js.$2.prototype = {
$F5: 0,
$2Z: null,
$5i: null,
$C9: 0,
$4O: 0,
$Ck: false,
$8u: false,
$6W: false,
$7v: null,
$24: null,
$CC: true,
$Bn: 0,
$2s: null,
$6T: null,
$Bp: 0,
$3U: 0,
$6N: 0,
$2g: 0,
$6x: null,
$HD: null,
get_$HE: function _js_$2$get_$HE() {
return this.$HD;
},
set_$HE: function _js_$2$set_$HE($p$0) {
this.$HD = $p$0;
return $p$0;
},
$4I: function _js_$2$$4I($p$0, $p$1, $p$2, $p$3, $p$4) {
var $v$0 = true;
var $v$1 = null;
var $$t_8 = this;
$v$1 = $v$1 || new _js.$1g($6l(this, $p$0, 'PeriodicCallback_' + $p$1, function() {
if (!$v$1) {
$v$1 = new _js.$1g(new _js.$2.$2z($$t_8.$2g, $p$0, $p$1, $p$2, false));
}
else {
$v$1.$57 = new _js.$2.$2z($$t_8.$2g, $p$0, $p$1, $p$2, false);
}
var $v$2 = $v$1.$57;
if (!$v$2.$9v) {
try {
$p$2();
}
finally {
$v$2.$5k = true;
}
}
}, $p$3, $p$4, $v$0));
return ($v$1.$57) ? $v$1 : null;
},
$4Y: function _js_$2$$4Y($p$0) {
if ($p$0 && $p$0.$57) {
$4S(this, $p$0.$57);
}
return null;
},
$Or: function _js_$2$$Or() {
if (this.$4O < 0) {
return;
}
if (this.$6N > 0) {
_js.Trace.logWarning(_js.$G.$3e, 'Pausing idle queue while all task queues are already paused is a no-op.');
return;
}
if (this.$3U > 0) {
$4S(this, this.$7v);
this.$7v = null;
}
this.$3U++;
this.$7v = $6l(this, _js.$G.$3e, 'TaskRunner.ResumeIdleTaskProcessing', this.$$d_$PO, 1000, false, true);
},
$Gv: function _js_$2$$Gv() {
if (this.$4O < 0) {
return;
}
if (this.$6N > 0) {
return;
}
if (!this.$3U) {
_js.Trace.logWarning(_js.$G.$3e, 'Idle Task processing should be paused before invoking resume');
return;
}
this.$3U--;
if (!this.$3U) {
$4S(this, this.$7v);
}
},
$8p: function _js_$2$$8p($p$0, $p$1, $p$2) {
if (this.$8u) {
this.$6S($p$0, $p$1, $p$2);
}
else if (this.$6W) {
this.$8o($p$0, $p$1, $p$2);
}
else {
var $v$0 = new _js.$2.$2z(this.$2g, $p$0, 'Task_' + $p$1, $p$2, false);
$DQ(this, $v$0);
}
},
$6S: function _js_$2$$6S($p$0, $p$1, $p$2) {
if (this.$6W) {
this.$8o($p$0, $p$1, $p$2);
}
else {
var $v$0 = new _js.$2.$2z(this.$2g, $p$0, 'IdleTask_' + $p$1, $p$2, false);
Array.enqueue(this.$2U, $v$0);
$6m(this);
}
},
$8o: function _js_$2$$8o($p$0, $p$1, $p$2) {
var $v$0 = new _js.$2.$2z(this.$2g, $p$0, 'CleanupTask_' + $p$1, $p$2, false);
$Hw(this, $v$0);
},
$Jx: function _js_$2$$Jx($p$0) {
if (this.$24) {
$4S(this, this.$24);
this.$24 = null;
}
if (this.$4O >= 0) {
this.$24 = $6l(this, _js.$G.$3e, 'TaskRunner.RunForQuanta', this.$$d_$Gx, $p$0, false, true);
}
},
$KR: function _js_$2$$KR() {
var $v$0 = null;
var $v$1 = null;
$v$0 = this.$Ab(this.$30);
if (($v$1 = this.$Ab(this.$2U))) {
$v$0 = $v$1;
}
if (($v$1 = this.$Ab(this.$2k))) {
$v$0 = $v$1;
}
if (this.$24) {
$4S(this, this.$24);
this.$24 = null;
}
if ($v$0) {
throw $v$0;
}
},
$Ab: function _js_$2$$Ab($p$0) {
var $v$0 = $DT(this, $p$0);
var $v$1 = null;
while ($p$0.length > 0) {
var $v$2 = Array.dequeue($p$0);
try {
$3m(this, $v$2, $v$0);
}
catch ($v$3) {
$v$1 = $v$3;
}
}
return $v$1;
},
$Gx: function _js_$2$$Gx() {
this.$24 = null;
if (!this.$6N) {
if (!$DP(this, this.$30, this.$C9)) {
if (!this.$3U || this.$4O < 0) {
$Hr(this);
}
}
}
if (this.$30.length > 0 || this.$2U.length > 0 || this.$2k.length > 0) {
$6m(this);
}
},
$PO: function _js_$2$$PO() {
this.$3U = 0;
},
$PM: function _js_$2$$PM() {
this.$6N = 0;
}
}
_js.$2.$2z = function _js_$2_$2z($p$0, $p$1, $p$2, $p$3, $p$4) {
this.$7J = $p$0;
this.$1p = $p$2;
this.$35 = $p$3;
this.$3h = $p$1;
this.$5k = false;
this.$FF = $p$4;
this.$5A = 0;
this.$3V = 0;
this.$Cu = false;
this.$78 = null;
}
_js.Trace = function _js_Trace() {
}
_js.Trace.logException = function _js_Trace$logException(component, exception, format, arg0, arg1, arg2, arg3, arg4, arg5) {
_js.Trace.logInternal(component, 1, exception, format, arg0, arg1, arg2, arg3, arg4, arg5);
}
_js.Trace.logInternal = function _js_Trace$logInternal(component, traceLevel, exception, format, arg0, arg1, arg2, arg3, arg4, arg5) {
}
_js.Trace.logError = function _js_Trace$logError(component, format, arg0, arg1, arg2, arg3, arg4, arg5) {
_js.Trace.logInternal(component, 1, null, format, arg0, arg1, arg2, arg3, arg4, arg5);
}
_js.Trace.logWarning = function _js_Trace$logWarning(component, format, arg0, arg1, arg2, arg3, arg4, arg5) {
_js.Trace.logInternal(component, 2, null, format, arg0, arg1, arg2, arg3, arg4, arg5);
}
_js.Trace.logPerf = function _js_Trace$logPerf(component, format, arg0, arg1, arg2, arg3, arg4, arg5) {
_js.Trace.logInternal(component, 3, null, format, arg0, arg1, arg2, arg3, arg4, arg5);
}
_js.Trace.logInfo = function _js_Trace$logInfo(component, format, arg0, arg1, arg2, arg3, arg4, arg5) {
_js.Trace.logInternal(component, 4, null, format, arg0, arg1, arg2, arg3, arg4, arg5);
}
_js.Trace.logVerbose = function _js_Trace$logVerbose(component, format, arg0, arg1, arg2, arg3, arg4, arg5) {
_js.Trace.logInternal(component, 5, null, format, arg0, arg1, arg2, arg3, arg4, arg5);
}
_js.Trace.emptyFunction = function _js_Trace$emptyFunction() {
}
_js.$3 = function _js_$3($p$0) {
this.$$d_$Pc = Function.createDelegate(this, this.$Pc);
this.$$d_$JF = Function.createDelegate(this, this.$JF);
this.$$d_$OJ = Function.createDelegate(this, this.$OJ);
this.$$d_$OL = Function.createDelegate(this, this.$OL);
this.$$d_$OF = Function.createDelegate(this, this.$OF);
this.$$d_$Nt = Function.createDelegate(this, this.$Nt);
this.$$d_$OD = Function.createDelegate(this, this.$OD);
this.$$d_$O6 = Function.createDelegate(this, this.$O6);
this.$$d_$O4 = Function.createDelegate(this, this.$O4);
this.$$d_$OO = Function.createDelegate(this, this.$OO);
this.$$d_$O2 = Function.createDelegate(this, this.$O2);
this.$$d_$OV = Function.createDelegate(this, this.$OV);
this.$$d_$Nx = Function.createDelegate(this, this.$Nx);
this.$$d_$GQ = Function.createDelegate(this, this.$GQ);
this.$$d_$Bw = Function.createDelegate(this, this.$Bw);
this.$$d_$Bu = Function.createDelegate(this, this.$Bu);
this.$$d_$O0 = Function.createDelegate(this, this.$O0);
this.$$d_$O8 = Function.createDelegate(this, this.$O8);
this.$$d_$No = Function.createDelegate(this, this.$No);
this.$$d_$Nn = Function.createDelegate(this, this.$Nn);
this.$$d_$Nq = Function.createDelegate(this, this.$Nq);
this.$$d_$GT = Function.createDelegate(this, this.$GT);
this.$$d_$GS = Function.createDelegate(this, this.$GS);
this.$3f = 0;
_js.$3.initializeBase(this);
_js.$8.$1D($p$0, 'htmlElement');
_js.$8.$99($p$0.nodeType, 1, 'domElement.NodeType');
this.$1 = $p$0;
this.$43 = _js.$3.$j($p$0);
this.$26 = [];
this.$AC = {};
this.$5V = $p$0.className;
}
_js.$3.$$cctor = function _js_$3$$$cctor() {
if ((document.documentElement).classList) {
_js.$3.$6z = function($p$1_0, $p$1_1) {
var $v$0 = ($p$1_0.get(0)).classList;
$v$0.add($p$1_1);
};
_js.$3.$8q = function($p$1_0, $p$1_1) {
var $v$1 = ($p$1_0.get(0)).classList;
$v$1.remove($p$1_1);
};
}
else {
_js.$3.$6z = function($p$1_0, $p$1_1) {
$p$1_0.addClass($p$1_1);
};
_js.$3.$8q = function($p$1_0, $p$1_1) {
$p$1_0.removeClass($p$1_1);
};
}
}
_js.$3.get_$7F = function _js_$3$get_$7F() {
if (!_js.$3.$7B) {
var $v$0 = window.document.createElement('div');
$v$0.style.display = 'none';
$v$0.id = 'uiObjectCacheNode';
_js.$3.$7B = $v$0;
}
return _js.$3.$7B;
}
_js.$3.$Ei = function _js_$3$$Ei($p$0, $p$1, $p$2) {
if (!$p$0 || $p$0 === $p$2 || ($p$0.tagName && $p$0.tagName.toLowerCase() === 'body')) {
return null;
}
return ($p$1($p$0)) ? $p$0 : _js.$3.$Ei($p$0.parentNode, $p$1, $p$2);
}
_js.$3.$FW = function _js_$3$$FW($p$0) {
return $p$0.style.display !== 'none' && $p$0.offsetWidth + $p$0.offsetHeight > 0;
}
_js.$3.$Oa = function _js_$3$$Oa($p$0) {
var $v$0 = $p$0.instance;
var $v$1 = $p$0.newValue;
if ($v$0.$1) {
$v$0.$1.setAttribute('title', $v$1);
}
}
function $5E($p$0, $p$1, $p$2) {
$6n($p$0, $p$1, false);
$6n($p$0, $p$2, true);
}
function $6n($p$0, $p$1, $p$2) {
if ($p$1) {
var $v$0 = $p$1.split(' ');
var $v$1;
for (var $v$2 = 0, $v$3 = $v$0.length; $v$2 < $v$3; $v$2++) {
$v$1 = $v$0[$v$2];
if (!$v$1) {
continue;
}
if ($p$2) {
_js.$3.$6z($p$0.$43, $v$0[$v$2]);
}
else {
_js.$3.$8q($p$0.$43, $v$0[$v$2]);
}
}
}
}
function $DU($p$0, $p$1) {
if ($5($p$0.$Aq) || $p$0.$Aq <= 0) {
$p$0.set_$1u($p$1);
return;
}
$p$0.$B4 = $p$1;
$p$0.$85 = _js.$2.get_$a().$4Y($p$0.$85);
if ($p$0.$B4 !== $p$0.get_$1u()) {
$p$0.$85 = _js.$2.get_$a().$4I($p$0.get_$3h(), 'SetIsHovered', $p$0.$$d_$Pc, $p$0.$Aq);
}
}
function $Hy($p$0, $p$1, $p$2, $p$3) {
if (!($p$1 & $p$2) || ($p$0.$3Y & $p$2)) {
return;
}
$p$3();
$p$0.$3Y |= $p$2;
}
function $9R($p$0, $p$1) {
if ($p$0.$23) {
for (var $v$0 = 0; $v$0 < $p$0.$23.length; $v$0++) {
var $v$1 = ($p$1) ? $p$0 : null;
$p$0.$23[$v$0].set_$8($v$1);
}
}
}
function $9P($p$0) {
$p$0.$84 = $p$0.$1A || ($p$0.$7t && !$p$0.get_$Y());
if (!$p$0.$84) {
$p$0.$1.style.display = '';
if ($p$0.$Gg) {
$p$0.$C3();
}
if ($p$0.$6y) {
$p$0.$z();
}
}
else {
$p$0.$1.style.display = 'none';
if ($p$0.$19) {
$p$0.$1T();
$p$0.$6y = true;
}
}
}
function $9Q($p$0) {
if (!$p$0.$At || $p$0.$At === '' || !$p$0.get_$20() || !$p$0.get_$20().get_$m()) {
return;
}
if ($p$0.get_$9k()) {
$p$0.set_$m('');
}
else {
$p$0.set_$m($p$0.get_$20().get_$m() + '.' + $p$0.$At);
}
}
_js.$3.prototype = {
$9j: null,
$At: null,
$19: false,
$86: false,
$6y: false,
$Gg: false,
$1A: false,
$84: false,
$7t: false,
$GG: null,
$43: null,
$1: null,
$26: null,
$AC: null,
$5V: null,
$3Y: 0,
$Bj: null,
$Bl: null,
$FE: false,
$7M: false,
$23: null,
$B4: false,
$85: null,
$Aq: 0,
$Dx: null,
$7V: null,
get_$7: function _js_$3$get_$7() {
return this.$5V;
},
set_$7: function _js_$3$set_$7($p$0) {
if (this.$5V !== $p$0) {
$5E(this, this.$5V, $p$0);
this.$5V = $p$0;
$4(this, 'CssClass');
}
return $p$0;
},
get_$2W: function _js_$3$get_$2W() {
return this.$1A;
},
set_$2W: function _js_$3$set_$2W($p$0) {
if (this.$1A !== $p$0) {
this.$1A = $p$0;
$9P(this);
$4(this, 'IsHidden');
}
return $p$0;
},
get_$4k: function _js_$3$get_$4k() {
return this.$7t;
},
set_$4k: function _js_$3$set_$4k($p$0) {
if ($p$0 !== this.$7t) {
this.$7t = $p$0;
$9P(this);
$4(this, 'HiddenIfNullContext');
}
return $p$0;
},
get_$HG: function _js_$3$get_$HG() {
return this.$3f;
},
set_$HG: function _js_$3$set_$HG($p$0) {
if (this.$3f === $p$0) {
return $p$0;
}
this.$3f = $p$0;
if (this.$3f === 1) {
this.$2M(2048);
this.$v('disableTextSelection');
this.$1x('allowTextSelection');
if (_js.$O.getInstance().$3z) {
this.$1.setAttribute('unselectable', 'on');
}
}
else if (this.$3f === 2) {
this.$2M(2048);
this.$v('allowTextSelection');
this.$1x('disableTextSelection');
if (_js.$O.getInstance().$3z) {
this.$1.removeAttribute('unselectable');
}
}
else {
this.$Q8(2048);
this.$1x('disableTextSelection');
this.$1x('allowTextSelection');
if (_js.$O.getInstance().$3z) {
this.$1.removeAttribute('unselectable');
}
}
$4(this, 'TextSelectionType');
return $p$0;
},
get_$EA: function _js_$3$get_$EA() {
return this.$43;
},
get_$20: function _js_$3$get_$20() {
return this.$Q;
},
set_$20: function _js_$3$set_$20($p$0) {
this.set_$5S($p$0);
return $p$0;
},
get_$1u: function _js_$3$get_$1u() {
return this.$2m(_js.$3.$3I);
},
set_$1u: function _js_$3$set_$1u($p$0) {
if ($p$0 && !this.get_$1u() && this.get_$Ao() && this.get_$Ao().$c) {
this.get_$Ao().$p();
}
this.$2N(_js.$3.$3I, $p$0);
return $p$0;
},
get_$2e: function _js_$3$get_$2e() {
return this.$2m(_js.$3.$A0);
},
set_$2e: function _js_$3$set_$2e($p$0) {
this.$2N(_js.$3.$A0, $p$0);
return $p$0;
},
get_$Ao: function _js_$3$get_$Ao() {
return this.$2m(_js.$3.$Ap);
},
set_$Ao: function _js_$3$set_$Ao($p$0) {
this.$2N(_js.$3.$Ap, $p$0);
return $p$0;
},
get_$4e: function _js_$3$get_$4e() {
return this.$2m(_js.$3.$AL);
},
set_$4e: function _js_$3$set_$4e($p$0) {
this.$2N(_js.$3.$AL, $p$0);
return $p$0;
},
get_$Bk: function _js_$3$get_$Bk() {
return this.$Bj;
},
set_$Bk: function _js_$3$set_$Bk($p$0) {
if (this.$Bj !== $p$0) {
this.$Bj = $p$0;
$4(this, 'MouseDownCommand');
}
return $p$0;
},
get_$Bm: function _js_$3$get_$Bm() {
return this.$Bl;
},
set_$Bm: function _js_$3$set_$Bm($p$0) {
if (this.$Bl !== $p$0) {
this.$Bl = $p$0;
$4(this, 'MouseUpCommand');
}
return $p$0;
},
get_$HH: function _js_$3$get_$HH() {
return this.$2m(_js.$3.$Cm);
},
set_$HH: function _js_$3$set_$HH($p$0) {
if (!$p$0) {
$p$0 = '';
}
this.$2N(_js.$3.$Cm, $p$0);
return $p$0;
},
get_$E: function _js_$3$get_$E() {
if (!this.$9j) {
this.$9j = new _js.$5(this.$1);
}
return this.$9j;
},
get_$1k: function _js_$3$get_$1k() {
return this.get_$E().get_$2c();
},
set_$1k: function _js_$3$set_$1k($p$0) {
this.get_$E().set_$2c($p$0);
return $p$0;
},
get_$1d: function _js_$3$get_$1d() {
return this.get_$E().get_$Cc();
},
set_$1d: function _js_$3$set_$1d($p$0) {
this.get_$E().set_$Cc($p$0);
return $p$0;
},
get_$m: function _js_$3$get_$m() {
return this.get_$E().get_$n();
},
set_$m: function _js_$3$set_$m($p$0) {
this.get_$E().set_$n($p$0);
return $p$0;
},
get_$5J: function _js_$3$get_$5J() {
return this.get_$E().get_$BI();
},
set_$5J: function _js_$3$set_$5J($p$0) {
this.get_$E().set_$BI($p$0);
return $p$0;
},
get_$E9: function _js_$3$get_$E9() {
return this.get_$E().get_$62();
},
set_$E9: function _js_$3$set_$E9($p$0) {
this.get_$E().set_$62($p$0);
return $p$0;
},
get_$9k: function _js_$3$get_$9k() {
return this.get_$E().get_$Am();
},
set_$9k: function _js_$3$set_$9k($p$0) {
if (this.get_$E().get_$Am() !== $p$0) {
this.get_$E().set_$Am($p$0);
$9Q(this);
$4(this, 'AriaHiddenState');
}
return $p$0;
},
get_$1J: function _js_$3$get_$1J() {
return this.$23;
},
set_$1J: function _js_$3$set_$1J($p$0) {
if (this.$23 !== $p$0) {
$9R(this, false);
this.$23 = this.$7n();
if ($p$0) {
var $$t_1;
this.$23 = ($$t_1 = this.$23).concat.apply($$t_1, $p$0);
}
$9R(this, true);
$4(this, 'Behaviors');
}
return $p$0;
},
get_$3F: function _js_$3$get_$3F() {
return this.$19;
},
set_$3F: function _js_$3$set_$3F($p$0) {
if (this.$19 !== $p$0) {
this.$19 = $p$0;
$4(this, 'IsActive');
}
return $p$0;
},
get_$F8: function _js_$3$get_$F8() {
return this.$1 === document.activeElement;
},
get_$3h: function _js_$3$get_$3h() {
return _js.$G.$7k;
},
$G: function _js_$3$$G($p$0) {
if (this.$AC[$p$0.$3d]) {
throw Error.invalidOperation('Can\'t add cssBinder, given cssClass(' + $p$0.$3d + ') has already been added');
}
this.$AC[$p$0.$3d] = $p$0;
this.$26[this.$26.length] = $p$0;
$p$0.$E7(this);
if ($p$0.$7A === 2) {
$p$0.$36(this);
}
return this;
},
$z: function _js_$3$$z() {
this.$6y = true;
if (!this.$19 && !this.$84) {
this.$C3();
this.set_$3F(true);
this.$2r();
if (this.$GG) {
this.$GG.$Gp(this);
}
if (this.$Dx) {
this.$Dx.$p();
}
}
},
$9: function _js_$3$$9($p$0, $p$1, $p$2) {
_js.$3.$9q(this.$43, $p$0, $p$1, $p$2);
},
$J: function _js_$3$$J($p$0, $p$1) {
_js.$3.$Cp(this.$43, $p$0, $p$1);
},
$C3: function _js_$3$$C3() {
this.$Gg = true;
if (!this.$86 && !this.$84) {
this.$86 = true;
this.$8g();
}
},
$1T: function _js_$3$$1T() {
this.$6y = false;
if (this.get_$3F()) {
this.set_$3F(false);
this.set_$1u(false);
this.$2a();
if (this.$7V) {
this.$7V.$p();
}
}
},
getAttachedElement: function _js_$3$getAttachedElement() {
return this.get_$EA();
},
$4h: function _js_$3$$4h() {
if (this.$1.getAttribute('disabled')) {
return false;
}
if (!this.$1A && _js.$3.$FW(this.$1)) {
try {
this.$1.focus();
return true;
}
catch ($$e_0) {
return false;
}
}
return false;
},
$FG: function _js_$3$$FG() {
return !!this.$1.getAttribute('tabindex') || ((this.$1.nodeName.toLowerCase() === 'a' || this.$1.nodeName.toLowerCase() === 'area') && !!this.$1.getAttribute('href')) || ((this.$1.nodeName.toLowerCase() === 'input' || this.$1.nodeName.toLowerCase() === 'button' || this.$1.nodeName.toLowerCase() === 'select' || this.$1.nodeName.toLowerCase() === 'textarea') && !this.$1.getAttribute('disabled'));
},
$2M: function _js_$3$$2M($p$0) {
var $v$0 = _js.$21.prototype;
var $$dict_2 = $v$0;
for (var $$key_3 in $$dict_2) {
var $v$1 = { key: $$key_3, value: $$dict_2[$$key_3] };
var $v$2 = $v$1.value;
if (0 === ($p$0 & $v$2)) {
continue;
}
var $v$3;
var $v$4 = '.UIObject' + $v$2;
switch ($v$2) {
case 4:
var $$t_8 = this;
$v$3 = function() {
$$t_8.$9('mouseenter', $$t_8.$$d_$GS, $v$4);
$$t_8.$9('mouseleave', $$t_8.$$d_$GT, $v$4);
};
break;
case 1:
var $$t_9 = this;
$v$3 = function() {
$$t_9.$9('click', $$t_9.$$d_$Nq, $v$4);
};
break;
case 64:
var $$t_A = this;
$v$3 = function() {
$$t_A.$9('blur', $$t_A.$$d_$Nn, $v$4);
};
break;
case 512:
var $$t_B = this;
$v$3 = function() {
$$t_B.$9('change', $$t_B.$$d_$No, $v$4);
};
break;
case 2097152:
var $$t_C = this;
$v$3 = function() {
$$t_C.$9('input', $$t_C.$$d_$O8, $v$4);
};
break;
case 2:
var $$t_D = this;
$v$3 = function() {
$$t_D.$9('dblclick', $$t_D.$$d_$O0, $v$4);
};
break;
case 32:
var $$t_E = this;
$v$3 = function() {
$$t_E.$9('focus', $$t_E.$$d_$Bu, $v$4);
};
break;
case 256:
var $$t_F = this;
$v$3 = function() {
$$t_F.$9('keydown', $$t_F.$$d_$Bw, $v$4);
};
break;
case 128:
var $$t_G = this;
$v$3 = function() {
$$t_G.$9('keyup', $$t_G.$$d_$GQ, $v$4);
};
break;
case 1024:
var $$t_H = this;
$v$3 = function() {
$$t_H.$9('copy', $$t_H.$$d_$Nx, $v$4);
};
break;
case 2048:
var $$t_I = this;
$v$3 = function() {
$$t_I.$9('selectstart', $$t_I.$$d_$OV, $v$4);
};
break;
case 4096:
var $$t_J = this;
$v$3 = function() {
$$t_J.$9('dragstart', $$t_J.$$d_$O2, $v$4);
};
break;
case 131072:
var $$t_K = this;
$v$3 = function() {
$$t_K.$9('paste', $$t_K.$$d_$OO, $v$4);
};
break;
case 262144:
var $$t_L = this;
$v$3 = function() {
$$t_L.$9('focusin', $$t_L.$$d_$O4, $v$4);
};
break;
case 524288:
var $$t_M = this;
$v$3 = function() {
$$t_M.$9('focusout', $$t_M.$$d_$O6, $v$4);
};
break;
case 1048576:
var $$t_N = this;
$v$3 = function() {
$$t_N.$9('keypress', $$t_N.$$d_$OD, $v$4);
};
break;
case 8192:
var $$t_O = this;
$v$3 = function() {
$$t_O.$9('contextmenu', $$t_O.$$d_$Nt, $v$4);
};
break;
case 8:
var $$t_P = this;
$v$3 = function() {
$$t_P.$9('mousedown', $$t_P.$$d_$OF, $v$4);
};
break;
case 16:
var $$t_Q = this;
$v$3 = function() {
$$t_Q.$9('mouseup', $$t_Q.$$d_$OL, $v$4);
};
break;
case 16777216:
var $$t_R = this;
$v$3 = function() {
$$t_R.$9('mousemove', $$t_R.$$d_$OJ, $v$4);
};
break;
default:
throw Error.invalidOperation('Unexpected UIEventType: ' + $v$1.value);
}
$Hy(this, $p$0, $v$2, $v$3);
}
},
$Q8: function _js_$3$$Q8($p$0) {
if (0 !== ($p$0 & this.$3Y)) {
var $v$0 = _js.$21.prototype;
var $$dict_2 = $v$0;
for (var $$key_3 in $$dict_2) {
var $v$1 = { key: $$key_3, value: $$dict_2[$$key_3] };
var $v$2 = $v$1.value;
if (0 === ($v$2 & this.$3Y) || 0 === ($v$2 & $p$0)) {
continue;
}
var $v$3 = '.UIObject' + $v$2;
switch ($v$2) {
case 4:
this.$J('mouseenter', $v$3);
this.$J('mouseleave', $v$3);
break;
default:
this.$J(_js.$1l.$KX($v$2), $v$3);
break;
}
this.$3Y &= ~$p$0;
}
}
},
$v: function _js_$3$$v($p$0) {
$6n(this, $p$0, true);
},
$1x: function _js_$3$$1x($p$0) {
$6n(this, $p$0, false);
},
$Nq: function _js_$3$$Nq($p$0) {
if (this.get_$2e() && this.get_$2e().$c) {
this.get_$2e().$p();
}
},
$O0: function _js_$3$$O0($p$0) {
if (this.get_$4e() && this.get_$4e().$c) {
this.get_$4e().$p();
}
},
$GS: function _js_$3$$GS($p$0) {
$DU(this, true);
},
$GT: function _js_$3$$GT($p$0) {
$DU(this, false);
},
$OF: function _js_$3$$OF($p$0) {
if (this.get_$Bk() && this.get_$Bk().$c) {
this.get_$Bk().$p();
}
},
$OL: function _js_$3$$OL($p$0) {
if (this.get_$Bm() && this.get_$Bm().$c) {
this.get_$Bm().$p();
}
},
$OJ: function _js_$3$$OJ($p$0) {
},
$Bu: function _js_$3$$Bu($p$0) {
},
$Nn: function _js_$3$$Nn($p$0) {
},
$GQ: function _js_$3$$GQ($p$0) {
},
$Bw: function _js_$3$$Bw($p$0) {
},
$No: function _js_$3$$No($p$0) {
},
$O8: function _js_$3$$O8($p$0) {
},
$Nx: function _js_$3$$Nx($p$0) {
},
$OU: function _js_$3$$OU($p$0) {
},
$O2: function _js_$3$$O2($p$0) {
},
$Nt: function _js_$3$$Nt($p$0) {
},
$OO: function _js_$3$$OO($p$0) {
},
$O4: function _js_$3$$O4($p$0) {
},
$O6: function _js_$3$$O6($p$0) {
},
$OD: function _js_$3$$OD($p$0) {
},
$GL: function _js_$3$$GL() {
$9P(this);
_js.$l.prototype.$GL.call(this);
for (var $v$0 = this.$26.length - 1; $v$0 >= 0; $v$0--) {
if (!(this.$26[$v$0]).$7A) {
(this.$26[$v$0]).$36(this.get_$Y());
}
}
$9Q(this);
},
$2r: function _js_$3$$2r() {
$9Q(this);
},
$8g: function _js_$3$$8g() {
if (this.$FE) {
this.$Q9(this.$FE);
}
if (!this.$23) {
this.set_$1J([]);
}
},
$2a: function _js_$3$$2a() {
},
$5r: function _js_$3$$5r() {
if (this.get_$3F()) {
this.$1T();
}
$9R(this, false);
if (this.$19 && this.$7V) {
this.$7V.$p();
}
for (var $v$0 = 0; $v$0 < this.$26.length; $v$0++) {
(this.$26[$v$0]).$k();
}
Array.clear(this.$26);
this.$3Y = 0;
this.$43.remove();
if (!$5(this.$23)) {
for (var $v$1 = 0; $v$1 < this.$23.length; $v$1++) {
this.$23[$v$1].$k();
}
}
_js.$l.prototype.$5r.call(this);
},
$Q9: function _js_$3$$Q9($p$0) {
var $v$0 = '.UIObjectcopyrestriction';
if ($p$0 && !this.$7M) {
this.$9('copy', this.$$d_$JF, $v$0);
this.$9('dragstart', this.$$d_$JF, $v$0);
this.$9('contextmenu', this.$$d_$JF, $v$0);
this.$3Y |= 13312;
this.$7M = true;
this.set_$HG(1);
}
else if (this.$7M) {
this.$J('copy', $v$0);
this.$J('dragstart', $v$0);
this.$J('contextmenu', $v$0);
this.$7M = false;
this.$3Y ^= 13312;
this.set_$HG(0);
}
},
$JF: function _js_$3$$JF($p$0) {
$p$0.$1P();
$p$0.$1y();
},
$8f: function _js_$3$$8f() {
$4(this, 'TemplatedParent');
_js.$l.prototype.$8f.call(this);
for (var $v$0 = this.$26.length - 1; $v$0 >= 0; $v$0--) {
if ((this.$26[$v$0]).$7A === 1) {
(this.$26[$v$0]).$36(this.$Q);
}
}
},
$7n: function _js_$3$$7n() {
return [];
},
$OV: function _js_$3$$OV($p$0) {
if (this.$3f === 1) {
$p$0.$1P();
}
else if (this.$3f === 2) {
$p$0.$1y();
}
this.$OU($p$0);
},
$Pc: function _js_$3$$Pc() {
this.set_$1u(this.$B4);
this.$85 = null;
}
}
_js.$2b = function() {}
_js.$2b.registerInterface('_js.$2b');
_js.$2c = function() {}
_js.$2c.registerInterface('_js.$2c');
function _C($p$0, $p$1, $p$2, $p$3, $p$4) {
this.$$d_$Bq = Function.createDelegate(this, this.$Bq);
_C.initializeBase(this);
_js.$8.$1D($p$0, 'executeCommand');
this.$HI = $p$1;
if (!$p$2) {
this.set_$7h($p$0);
}
else {
_js.$8.$1D($p$3, 'canExecuteProperty');
_js.$8.$1D($p$4, 'propertyGetter');
this.$3w = $p$0;
this.$2x = $p$2;
this.$3X = $p$3;
this.$Gj = $p$4;
this.$2x.apcl(this.$3X, this.$$d_$Bq);
this.$Bq(this.$2x, this.$3X);
}
}
_C.prototype = {
$3w: null,
$2x: null,
$3X: null,
$Gj: null,
$5r: function _C$$5r() {
if (this.$2x) {
this.$2x.rpcl(this.$3X, this.$$d_$Bq);
}
_js.$0.prototype.$5r.call(this);
},
$Bq: function _C$$Bq($p$0, $p$1) {
var $v$0 = this.$Gj();
if ($v$0) {
this.set_$7h(this.$3w);
}
else {
this.set_$7h(null);
}
}
}
function _D($p$0, $p$1, $p$2, $p$3) {
this.$$d_$9 = Function.createDelegate(this, this.$9);
_D.initializeBase(this);
_js.$8.$99($p$1.length, $p$0.length, 'propertyGetters.Length');
if ($p$3 === 2) {
_js.$8.$Ci($p$2, 'propertySetter');
}
else {
_js.$8.$99($p$2, null, 'propertySetter');
}
this.$4D = $p$3;
this.$54 = $p$0;
this.$4H = $p$1;
this.$Gk = $p$2;
}
_D.$Km = function _D$$Km($p$0, $p$1) {
return function($p$1_0, $p$1_1) {
if (!$p$0.$5O) {
return;
}
if ($p$0.$FD) {
_D.$Iu($p$0, $p$1);
}
else {
_D.$CE($p$0, $p$1);
}
};
}
_D.$Iu = function _D$$Iu($p$0, $p$1) {
_js.$2.get_$a().$8p(_js.$G.$79, 'Bind' + $p$0.$54[$p$0.$54.length - 1], function() {
_D.$CE($p$0, $p$1);
});
}
_D.$CE = function _D$$CE($p$0, $p$1) {
var $v$0 = $p$0.$3b[$p$1];
var $v$1 = $p$0.$3b.length - 1;
for (var $v$4 = $p$1; $v$4 < $v$1; $v$4++) {
if ($v$0) {
try {
$v$0 = $p$0.$4H[$v$4]($v$0);
}
catch ($v$5) {
$v$0 = null;
}
}
$D7($p$0, $v$4 + 1, $v$0);
}
var $v$2 = null;
var $v$3 = false;
if ($v$0) {
try {
$v$2 = $p$0.$4H[$v$1]($v$0);
$v$3 = true;
}
catch ($v$6) {
}
}
$p$0.$5O = true;
if ($p$0.$2F !== $v$2 || $p$0.$19 !== $v$3) {
$p$0.$2F = $v$2;
$p$0.$19 = $v$3;
if ($p$0.$6d) {
$p$0.$6d.$H9();
}
}
}
function $D7($p$0, $p$1, $p$2) {
var $v$0 = $p$0.$3b[$p$1];
if ($v$0 === $p$2) {
return;
}
if ($v$0 && ('rpcl' in $v$0)) {
($v$0).rpcl($p$0.$54[$p$1], $p$0.$5P[$p$1]);
}
$p$0.$3b[$p$1] = $p$2;
$v$0 = $p$2;
if ($v$0 && ('apcl' in $v$0)) {
($v$0).apcl($p$0.$54[$p$1], $p$0.$5P[$p$1]);
}
}
function $Hh($p$0) {
if ($p$0.$4D === 2 || (!$p$0.$AX && $p$0.$4D)) {
$p$0.$9();
}
else {
var $v$0 = $D6($p$0);
if ($p$0.$4D) {
_js.$2.get_$a().$6S(_js.$G.$79, 'Async Binding', $p$0.$$d_$9);
}
else if (!$v$0) {
var $$t_1 = this;
_js.$2.get_$a().$6S(_js.$G.$79, 'Async One-time Binding', function() {
$D6($p$0);
});
}
}
}
function $D6($p$0) {
var $v$0 = $p$0.$2x;
var $v$1 = true;
try {
var $v$2 = $p$0.$4H.length;
var $v$3 = 0;
for (; $v$3 < $v$2 && $v$0; $v$3++) {
$v$0 = $p$0.$4H[$v$3]($v$0);
}
$v$1 = $v$3 !== $v$2;
}
catch ($$e_4) {
$v$0 = null;
$v$1 = true;
}
if ($p$0.$2F !== $v$0 || $p$0.$19 !== !$v$1) {
$p$0.$2F = $v$0;
$p$0.$19 = !$v$1;
if ($p$0.$6d) {
$p$0.$6d.$H9();
}
}
return !$v$1;
}
_D.prototype = {
$54: null,
$4H: null,
$3b: null,
$5P: null,
$Gk: null,
$2F: null,
$19: false,
$FD: false,
$5O: false,
$2x: null,
$4D: 0,
$AX: false,
get_$9G: function _D$get_$9G() {
return this.$2F;
},
set_$9G: function _D$set_$9G($p$0) {
if (this.$2F !== $p$0) {
if (!this.$5O) {
this.$9();
}
this.$2F = $p$0;
if (this.$19) {
this.$Gk(this.$3b[this.$3b.length - 1], $p$0);
}
}
return $p$0;
},
get_$3F: function _D$get_$3F() {
return this.$19;
},
get_$1p: function _D$get_$1p() {
return this.$3b[0];
},
set_$1p: function _D$set_$1p($p$0) {
if ($p$0 === this.$2x) {
return $p$0;
}
this.$2x = $p$0;
this.$5O = false;
$Hh(this);
return $p$0;
},
$Fj: function _D$$Fj() {
this.$FD = true;
},
$EY: function _D$$EY($p$0) {
if (this.$AX !== $p$0) {
return;
}
this.$AX = !$p$0;
if ($p$0) {
this.$9();
}
},
$9: function _D$$9() {
if (this.$5O) {
return;
}
if (!this.$5P) {
this.$3b = new Array(this.$4H.length);
this.$5P = new Array(this.$4H.length);
for (var $v$0 = 0; $v$0 < this.$54.length; $v$0++) {
this.$5P[$v$0] = _D.$Km(this, $v$0);
}
}
$D7(this, 0, this.$2x);
_D.$CE(this, 0);
}
}
_js.$11 = function _js_$11($p$0, $p$1) {
this.$5T = $p$0;
this.$A7 = $p$1;
}
_js.$11.prototype = {
$5T: null,
$A7: null,
$A5: function _js_$11$$A5($p$0, $p$1) {
for (var $v$0 = 0; $v$0 < this.$5T.length; $v$0++) {
$p$0 = this.$5T[$v$0].$A5($p$0, this.$A7[$v$0]);
}
return $p$0;
},
$EM: function _js_$11$$EM($p$0, $p$1) {
for (var $v$0 = this.$5T.length - 1; $v$0 >= 0; $v$0--) {
$p$0 = this.$5T[$v$0].$EM($p$0, this.$A7[$v$0]);
}
return $p$0;
}
}
_js.$1V = function _js_$1V() {
_js.$1V.initializeBase(this);
}
_js.$1V.prototype = {
$c: true,
$3w_2: null,
$HI: null,
add_$9w: function _js_$1V$add_$9w($p$0) {
this.$1r('CanExecute', $p$0);
},
remove_$9w: function _js_$1V$remove_$9w($p$0) {
this.$1j('CanExecute', $p$0);
},
get_$EG: function _js_$1V$get_$EG() {
return this.$c;
},
set_$EG: function _js_$1V$set_$EG($p$0) {
if (this.$c !== $p$0) {
this.$c = $p$0;
$4(this, 'CanExecute');
}
return $p$0;
},
get_$7h: function _js_$1V$get_$7h() {
return this.$3w_2;
},
set_$7h: function _js_$1V$set_$7h($p$0) {
this.$3w_2 = $p$0;
this.set_$EG(!!this.$3w_2);
return $p$0;
},
$p: function _js_$1V$$p() {
_js.$8.$99(this.$c, true, 'Can\'t raise command when canExecute is false.');
_js.$8.$1D(this.$3w_2, 'Can\'t raise command when no execute command is specified.');
_js.$8.$Ci(this.$HI, 'Can\'t raise command when TraceComponent is undefinded.');
this.$3w_2();
}
}
_js.$F = function _js_$F($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
_js.$F.initializeBase(this, [ $p$0, 1, $p$3, $p$4 ]);
this.$7A = $p$5;
this.$1a = new _D($p$1, $p$2, null, 1);
this.$1a.$6Z(this);
this.$EP = $p$4;
}
function $DI($p$0) {
if ($p$0.$95) {
if ($p$0.$Cy && $p$0.$2F) {
$p$0.$95.$v($p$0.get_$5W());
}
else {
$p$0.$95.$1x($p$0.get_$5W());
}
}
}
_js.$F.prototype = {
$1a: null,
$EP: null,
$Cy: false,
$2F: false,
$7A: 0,
$95: null,
get_$5W: function _js_$F$get_$5W() {
return this.$3d;
},
$E7: function _js_$F$$E7($p$0) {
this.$95 = $p$0;
$DI(this);
},
$36: function _js_$F$$36($p$0) {
this.$1a.set_$1p($p$0);
},
$H9: function _js_$F$$H9() {
if (this.$1a.get_$3F()) {
var $v$0 = this.$1a.get_$9G();
if (this.$3t) {
$v$0 = this.$3t.$A5($v$0, this.$EP);
}
if (Boolean.isInstanceOfType($v$0)) {
this.$2F = $v$0;
this.$Cy = true;
}
else {
this.$2F = false;
this.$Cy = false;
}
}
else {
this.$2F = false;
}
$DI(this);
},
$Fj: function _js_$F$$Fj() {
this.$1a.$Fj();
},
$EY: function _js_$F$$EY($p$0) {
this.$1a.$EY($p$0);
}
}
function _E($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
_E.initializeBase(this, [ $p$1, $p$3, $p$4, $p$5 ]);
this.$1a = $p$0;
this.$4K = $p$2;
this.$1a.$6Z(this);
this.$4K.$6Z(this);
}
_E.$0 = function _E$$0($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6, $p$7, $p$8, $p$9) {
return new _E(new _D($p$0, $p$1, $p$2, $p$6), $p$3, new _F($p$3, $p$4, $p$5, $p$9), $p$6, $p$7, $p$8);
}
_E.$2J = function _E$$2J($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6, $p$7, $p$8, $p$9, $p$10) {
return new _E(new _js.$2R($p$0, $p$1, $p$2, $p$3, $p$7), $p$4, new _F($p$4, $p$5, $p$6, $p$10), $p$7, $p$8, $p$9);
}
_E.prototype = {
$4K: null,
$1a: null,
$AW: false,
$E7: function _E$$E7($p$0) {
this.$4K.set_$1q($p$0);
this.$H9();
},
$36: function _E$$36($p$0) {
this.$1a.set_$1p($p$0);
this.$H9();
},
$H9: function _E$$H9() {
if (!this.$4D && this.$AW) {
return;
}
if (!this.$4K.get_$3F()) {
return;
}
if (!this.$1a.get_$3F()) {
if (this.$AW) {
this.$4K.$Pa();
}
return;
}
this.$AW = true;
var $v$0 = this.$1a.get_$9G();
if (this.$3t) {
$v$0 = this.$3t.$A5($v$0, this.$A6);
}
this.$4K.set_$9G($v$0);
},
$Px: function _E$$Px() {
if (this.$4D === 2 && this.$1a.get_$3F()) {
var $v$0 = this.$4K.get_$9G();
if (this.$3t) {
$v$0 = this.$3t.$EM($v$0, this.$A6);
}
this.$1a.set_$9G($v$0);
}
},
$Fj: function _E$$Fj() {
this.$1a.$Fj();
},
$EY: function _E$$EY($p$0) {
this.$1a.$EY($p$0);
}
}
_js.$2k = function _js_$2k($p$0, $p$1, $p$2, $p$3) {
_js.$2k.initializeBase(this);
this.$3d = $p$0;
this.$3t = $p$2;
this.$A6 = $p$3;
this.$4D = $p$1;
}
_js.$2k.prototype = {
$3d: null,
$3t: null,
$A6: null,
$4D: 0,
$5r: function _js_$2k$$5r() {
this.$E7(null);
this.$36(null);
}
}
_js.$2i = function _js_$2i() {
}
_js.$2i.prototype = {
$6d: null,
$6Z: function _js_$2i$$6Z($p$0) {
this.$6d = $p$0;
}
}
_js.$2R = function _js_$2R($p$0, $p$1, $p$2, $p$3, $p$4) {
_js.$2R.initializeBase(this);
this.$93 = $p$0;
if ($p$1) {
this.$2L = new _D($p$1, $p$2, $p$3, $p$4);
this.$2L.set_$1p(this.$93);
}
else {
}
}
_js.$2R.prototype = {
$93: null,
$2L: null,
get_$9G: function _js_$2R$get_$9G() {
if (this.$2L) {
return this.$2L.get_$9G();
}
else {
return this.$93;
}
},
set_$9G: function _js_$2R$set_$9G($p$0) {
if (this.$2L) {
this.$2L.set_$9G($p$0);
}
else {
}
return $p$0;
},
get_$3F: function _js_$2R$get_$3F() {
if (this.$2L) {
return this.$2L.get_$3F();
}
else {
return true;
}
},
get_$1p: function _js_$2R$get_$1p() {
return null;
},
set_$1p: function _js_$2R$set_$1p($p$0) {
return $p$0;
},
$6Z: function _js_$2R$$6Z($p$0) {
_js.$2i.prototype.$6Z.call(this, $p$0);
if (this.$2L) {
this.$2L.$6Z($p$0);
this.$2L.set_$1p(this.$93);
}
},
$Fj: function _js_$2R$$Fj() {
},
$EY: function _js_$2R$$EY($p$0) {
}
}
_js.$1T = function _js_$1T() {
}
function $DO($p$0) {
if (!$p$0.get_$1q()) {
throw Error.invalidOperation('Can\'t get property when target is not set');
}
}
_js.$1T.prototype = {
$AD: null,
get_$3F: function _js_$1T$get_$3F() {
return !!this.get_$1q();
},
$6Z: function _js_$1T$$6Z($p$0) {
this.$AD = $p$0;
}
}
function _F($p$0, $p$1, $p$2, $p$3) {
this.$$d_$OZ = Function.createDelegate(this, this.$OZ);
_F.initializeBase(this);
_js.$8.$59($p$0, 'propertyName');
_js.$8.$1D($p$2, 'propertySetter');
this.$3X = $p$0;
this.$1z = null;
this.$Cf = $p$2;
this.$96 = $p$1;
this.$4c = ($p$3 === undefined) ? null : $p$3;
}
function $D9($p$0, $p$1) {
$DO($p$0);
if (!($p$0.$1z).$3H) {
$p$0.$Cf($p$0.$1z, $p$1);
}
}
function $D8($p$0) {
$DO($p$0);
return $p$0.$96($p$0.$1z);
}
_F.prototype = {
$Cf: null,
$96: null,
$3X: null,
$6f: null,
$4c: null,
$1z: null,
get_$1q: function _F$get_$1q() {
return this.$1z;
},
set_$1q: function _F$set_$1q($p$0) {
if (this.$1z !== $p$0) {
if (this.$1z && this.$96) {
this.$1z.rpcl(this.$3X, this.$$d_$OZ);
}
this.$1z = $p$0;
this.$6f = null;
if (this.$3X === 'IsHidden' && this.$1z) {
this.$Cf(this.$1z, this.$4c);
}
if (this.$1z && this.$96) {
this.$1z.apcl(this.$3X, this.$$d_$OZ);
this.$6f = $D8(this);
}
}
return $p$0;
},
get_$9G: function _F$get_$9G() {
return this.$6f;
},
set_$9G: function _F$set_$9G($p$0) {
$D9(this, $p$0);
return $p$0;
},
$Pa: function _F$$Pa() {
$D9(this, this.$4c);
},
$OZ: function _F$$OZ($p$0, $p$1) {
var $v$0 = $D8(this);
if (this.$6f !== $v$0) {
this.$6f = $v$0;
if (this.$AD) {
this.$AD.$Px();
}
}
}
}
_js.$2P = function _js_$2P($p$0, $p$1) {
this.$4s = $p$0;
this.$3g = $p$1;
}
_js.$2a = function() {}
_js.$2a.registerInterface('_js.$2a');
_js.$1Y = function() {}
_js.$1Y.registerInterface('_js.$1Y');
_js.$A = function _js_$A() {
this.$CF = new _js.$26();
this.$5q = [];
$DF(this);
}
function $Hi($p$0, $p$1) {
var $v$0 = $p$0.$Ah;
if ($v$0) {
$p$0.$Ah = false;
}
var $v$1;
try {
var $v$2 = $5($p$1.get_$a()) && !$5($p$1.get_$Qa());
$v$1 = $p$1.$5U();
if ($v$2) {
Array.add($p$0.$5q, new _js.$A.$Ld($v$1, $p$1.get_$Qa()));
}
if ($v$0) {
for (var $v$3 = 0; $v$3 < $p$0.$5q.length; $v$3++) {
($p$0.$5q[$v$3]).$MC();
}
}
}
finally {
if ($v$0) {
$DF($p$0);
}
}
return $v$1;
}
function $DF($p$0) {
$p$0.$Ah = true;
Array.clear($p$0.$5q);
}
_js.$A.prototype = {
$Ah: false,
$QJ: function _js_$A$$QJ($p$0) {
return new (_js.$1B.$$($p$0))(this.$CF);
},
$QK: function _js_$A$$QK($p$0) {
var $v$0 = this.$CF.$MB($p$0);
if ($5($v$0)) {
throw Error.argument('T', 'Type \'' + $p$0.getName() + '\' is not registered in the IoC container.  ' + 'Make sure you have registered the type in the application bootstrapper.');
}
return $Hi(this, $v$0);
}
}
_js.$A.$Ld = function _js_$A_$Ld($p$0, $p$1) {
this.$18 = $p$0;
this.$3s = $p$1;
}
_js.$A.$Ld.prototype = {
$18: null,
$3s: null,
$MC: function _js_$A_$Ld$$MC() {
this.$3s(this.$18);
}
}
_js.$1B = function _js_$1B($p$0) {
this.$18 = ((this.$$gta['_js.$1B']['TService'] === Number || Type.isEnum(this.$$gta['_js.$1B']['TService'])) ? 0 : (this.$$gta['_js.$1B']['TService'] === Boolean) ? false : null);
this.$CG = $p$0;
this.$CG.$Qe(this.$$gta['_js.$1B']['TService'], this);
}
_js.$1B.$$ = function _js_$1B$$$($p$0) {
var $$cn = '$1B' + '$1' + '$' + $p$0.getName().replace(/\./g, '_');
if (!_js[$$cn]) {
var $$ccr = _js[$$cn] = function() {
(this.$$gta = this.$$gta || {})['_js.$1B'] = {'TService': $p$0};
var $v$0 = [];
for (var $v$1 = 0; $v$1 < arguments.length; ++$v$1) {
$v$0[$v$1] = arguments[$v$1];
}
_js.$1B.apply(this, $v$0);
};
$$ccr.registerClass('_js.' + $$cn);
var $$dict_5 = _js.$1B.prototype;
for (var $$key_6 in $$dict_5) {
var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
if ('constructor' !== $$entry_7.key) {
$$ccr.prototype[$$entry_7.key] = $$entry_7.value;
}
}
}
return _js[$$cn];
}
_js.$1B.prototype = {
$CG: null,
$FR: false,
$7i: null,
$AT: false,
$GK: null,
get_$a: function _js_$1B$get_$a() {
return this.$18;
},
get_$Qa: function _js_$1B$get_$Qa() {
return this.$GK;
},
$Qb: function _js_$1B$$Qb($p$0) {
var $v$0 = $p$0;
var $v$1 = this.$$gta['_js.$1B']['TService'];
var $v$2 = $v$0.getName();
var $v$3 = $v$1.getName();
var $v$4 = $v$2 === $v$3;
var $v$5 = $v$1.implementsInterface($v$0);
var $v$6 = $v$1.inheritsFrom($v$0);
if (!$v$4 && !$v$5 && !$v$6) {
throw Error.argument('T', 'Type \'' + $v$1.getName() + '\' does not implement interface or derive from type \'' + $v$0.getName() + '\'');
}
this.$CG.$Qe($p$0, (this));
return this;
},
$Qc: function _js_$1B$$Qc() {
this.$FR = true;
return this;
},
$Qd: function _js_$1B$$Qd($p$0) {
this.$GK = $p$0;
return this;
},
$5U: function _js_$1B$$5U() {
if (this.$FR) {
if ($5(this.$18)) {
this.$18 = this.$ES();
}
return this.$18;
}
return this.$ES();
},
$ES: function _js_$1B$$ES() {
var $v$0;
if (!$5(this.$7i)) {
if (this.$AT) {
throw Error.invalidOperation('Type \'' + this.$$gta['_js.$1B']['TService'].getName() + '\' contains a circular reference in the IoC container.  You will need to use OnCreate and ' + 'property injection if this dependency is correct.');
}
this.$AT = true;
$v$0 = this.$7i();
this.$AT = false;
}
else {
$v$0 = new (this.$$gta['_js.$1B']['TService'])();
}
return $v$0;
}
}
_js.$26 = function _js_$26() {
this.$9s = {};
}
_js.$26.prototype = {
$Qe: function _js_$26$$Qe($p$0, $p$1) {
this.$9s[$p$0.getName()] = $p$1;
},
$MB: function _js_$26$$MB($p$0) {
return this.$9s[$p$0.getName()];
}
}
_js.$4 = function _js_$4($p$0) {
this.$2l = {};
this.addClass = this.$QX;
this.hasClass = this.$LK;
this.remove = this.$QO;
this.removeClass = this.$QY;
this.get = this.$QZ;
_js.$8.$1D($p$0, 'element');
this.$X = $p$0;
}
_js.$4.$7l = function _js_$4$$7l($p$0) {
_js.$8.$1D($p$0, 'element');
return new _js.$4($p$0);
}
_js.$4.$Kd = function _js_$4$$Kd($p$0, $p$1) {
_js.$8.$1D($p$0, 'element');
_js.$8.$59($p$1, 'name');
if (window.self.getComputedStyle) {
var $v$0 = window.self.getComputedStyle($p$0);
return $v$0[$p$1];
}
if ($p$0.currentStyle) {
return ($p$0.currentStyle)[$p$1];
}
return null;
}
_js.$4.$3x = function _js_$4$$3x($p$0) {
_js.$8.$1D($p$0, 'element');
var $v$0 = ($p$0).getBoundingClientRect();
var $v$1 = new _js.$2P($v$0.left, $v$0.top);
var $v$2 = _js.$4.$17($p$0);
if (!$v$2) {
throw Error.notImplemented('JsMVVMElement:GetOffset: could not find ownerDocument for element');
}
var $v$3 = $v$2;
var $v$4 = _js.$4.$7o($v$3);
if (!$v$4) {
throw Error.notImplemented('JsMVVMElement:GetOffset could not find windowInstance for element');
}
var $v$5 = $v$4.pageXOffset;
var $v$6 = $v$4.pageYOffset;
if (isFinite($v$5)) {
$v$1.$4s += $v$5;
}
else if (isFinite($v$2.documentElement.scrollLeft)) {
$v$1.$4s += $v$2.documentElement.scrollLeft;
}
else {
throw Error.notImplemented('JsMVVMElement:GetOffset Unsupported browser');
}
if (isFinite($v$6)) {
$v$1.$3g += $v$6;
}
else if (isFinite($v$2.documentElement.scrollTop)) {
$v$1.$3g += $v$2.documentElement.scrollTop;
}
else {
throw Error.notImplemented('JsMVVMElement:GetOffset Unsupported browser');
}
return $v$1;
}
_js.$4.$17 = function _js_$4$$17($p$0) {
if ($p$0 && $p$0.ownerDocument) {
return $p$0.ownerDocument;
}
else {
return window.document;
}
}
_js.$4.$7o = function _js_$4$$7o($p$0) {
var $v$0 = null;
if ($p$0) {
$v$0 = ($p$0.defaultView) ? $p$0.defaultView : $p$0.parentWindow;
}
if ($v$0) {
return $v$0;
}
else {
return window.self;
}
}
_js.$4.$9q = function _js_$4$$9q($p$0, $p$1, $p$2, $p$3) {
_js.$8.$1D($p$0, 'element');
_js.$8.$59($p$1, 'eventName');
_js.$8.$1D($p$2, 'handler');
$p$1 = _js.$4.$El($p$0, $p$1);
($p$0).$9($p$1, $p$2, $p$3);
}
_js.$4.$Cp = function _js_$4$$Cp($p$0, $p$1, $p$2) {
_js.$8.$1D($p$0, 'element');
_js.$8.$59($p$1, 'eventName');
$p$1 = _js.$4.$El($p$0, $p$1);
($p$0).$J($p$1, $p$2);
}
_js.$4.$El = function _js_$4$$El($p$0, $p$1) {
if ($p$1 === 'mouseenter' || $p$1 === 'mouseleave') {
if (!_js.$4.$Lx($p$0, $p$1)) {
return ($p$1 === 'mouseenter') ? 'mouseover' : 'mouseout';
}
}
return $p$1;
}
_js.$4.$Lx = function _js_$4$$Lx($p$0, $p$1) {
return (('on' + $p$1) in $p$0);
}
_js.$4.$Lq = function _js_$4$$Lq($p$0) {
var $v$0 = $p$0.get_$PI();
var $v$1 = $p$0.get_$1q();
return !$v$0 || ($v$0 !== $v$1 && !$v$1.contains($v$0));
}
_js.$4.$Fk = function _js_$4$$Fk($p$0, $p$1) {
if (!$p$1) {
return $p$0;
}
if ($p$1.startsWith('.')) {
return $p$0 + $p$1;
}
return $p$0 + '.' + $p$1;
}
function $Hj($p$0, $p$1, $p$2) {
if ($p$0.$X.addEventListener) {
($p$0.$X).addEventListener($p$1, $p$2, false);
}
else {
($p$0.$X).attachEvent('on' + $p$1, $p$2);
}
}
function $9M($p$0, $p$1, $p$2) {
if ($p$0.$X.removeEventListener) {
($p$0.$X).removeEventListener($p$1, $p$2);
}
else {
($p$0.$X).detachEvent('on' + $p$1, $p$2);
}
}
_js.$4.prototype = {
$X: null,
$QX: function _js_$4$$QX($p$0) {
_js.$8.$1D($p$0, 'className');
if ($p$0.indexOf(' ') !== -1) {
throw Error.argumentOutOfRange('className', $p$0, 'addClass - space not allowed');
}
if ((this.$X).classList) {
(this.$X).classList.add($p$0);
}
else if (_js.$7.$1U(this.$X.className)) {
this.$X.className = $p$0;
}
else {
var $v$0 = this.$X.className.split(' ');
if (!Array.contains($v$0, $p$0)) {
this.$X.className += ' ' + $p$0;
}
}
},
$LK: function _js_$4$$LK($p$0) {
_js.$8.$1D($p$0, 'className');
if ($p$0.indexOf(' ') !== -1) {
throw Error.argumentOutOfRange('className', $p$0, 'hasClass - space not allowed');
}
if (_js.$7.$1U(this.$X.className)) {
return false;
}
if ((this.$X).classList) {
return (this.$X).classList.contains($p$0);
}
var $v$0 = this.$X.className.split(' ');
return Array.contains($v$0, $p$0);
},
$QY: function _js_$4$$QY($p$0) {
_js.$8.$1D($p$0, 'className');
if ($p$0.indexOf(' ') !== -1) {
throw Error.argumentOutOfRange('className', $p$0, 'removeClass - space not allowed');
}
if ((this.$X).classList) {
(this.$X).classList.remove($p$0);
}
if (!_js.$7.$1U(this.$X.className)) {
var $v$0 = this.$X.className.split(' ');
if (Array.remove($v$0, $p$0)) {
this.$X.className = $v$0.join(' ');
}
}
},
$9: function _js_$4$$9($p$0, $p$1, $p$2) {
_js.$8.$59($p$0, 'eventName');
_js.$8.$1D($p$1, 'handler');
var $v$0 = _js.$4.$Fk($p$0, $p$2);
var $$t_7 = this;
var $v$1 = function($p$1_0) {
var $v$2 = new _js.$13($p$1_0);
if ($p$0 === 'mouseover' || $p$0 === 'mouseout') {
if (!_js.$4.$Lq($v$2)) {
return;
}
}
$p$1($v$2);
};
$Hj(this, $p$0, $v$1);
if (!(($v$0) in this.$2l)) {
this.$2l[$v$0] = [];
}
Array.add(this.$2l[$v$0], $v$1);
},
$J: function _js_$4$$J($p$0, $p$1) {
_js.$8.$59($p$0, 'eventName');
if (!$p$1) {
var $$dict_2 = this.$2l;
for (var $$key_3 in $$dict_2) {
var $v$0 = { key: $$key_3, value: $$dict_2[$$key_3] };
if ($v$0.key.startsWith($p$0) && $v$0.value) {
var $$t_9 = this;
Array.forEach($v$0.value, function($p$1_0) {
$9M($$t_9, $p$0, $p$1_0);
});
delete this.$2l[$v$0.key];
}
}
}
else {
var $v$1 = _js.$4.$Fk($p$0, $p$1);
var $v$2 = this.$2l[$v$1];
if ($v$2) {
var $$t_A = this;
Array.forEach($v$2, function($p$1_0) {
$9M($$t_A, $p$0, $p$1_0);
});
}
delete this.$2l[$v$1];
}
},
$QO: function _js_$4$$QO() {
var $$dict_0 = this.$2l;
for (var $$key_1 in $$dict_0) {
var $v$0 = { key: $$key_1, value: $$dict_0[$$key_1] };
var $v$1 = $v$0.value;
if ($v$1) {
for (var $v$2 = 0; $v$2 < $v$1.length; $v$2++) {
$9M(this, $v$0.key, $v$1[$v$2]);
}
}
}
if (this.$X.parentNode) {
this.$X.parentNode.removeChild(this.$X);
}
},
$QZ: function _js_$4$$QZ($p$0) {
_js.$8.$Cj($p$0, 0, 0, 'index');
return this.$X;
}
}
_js.$1l = function _js_$1l() {
}
_js.$1l.$KX = function _js_$1l$$KX($p$0) {
switch ($p$0) {
case 1:
return 'click';
case 2:
return 'dblclick';
case 4:
throw Error.argumentOutOfRange('eventType', 'hover is not a DOM event');
case 8:
return 'mousedown';
case 16:
return 'mouseup';
case 32:
return 'focus';
case 64:
return 'blur';
case 128:
return 'keyup';
case 256:
return 'keydown';
case 512:
return 'change';
case 1024:
return 'copy';
case 2048:
return 'selectstart';
case 4096:
return 'dragstart';
case 8192:
return 'contextmenu';
case 131072:
return 'paste';
case 262144:
return 'focusin';
case 524288:
return 'focusout';
case 1048576:
return 'keypress';
case 2097152:
return 'input';
case 4194304:
return 'mouseenter';
case 8388608:
return 'mouseleave';
case 16777216:
return 'mousemove';
default:
throw Error.invalidOperation('Unexpected UIEventType: ' + $p$0);
}
}
_js.$G = function _js_$G($p$0) {
this.$EL = $p$0;
}
_js.$G.prototype = {
$EL: 0
}
_js.$2j = function _js_$2j() {
}
_js.$2j.prototype = {
$AI: null,
$2m: function _js_$2j$$2m($p$0) {
var $v$0 = this[$p$0.$2Y];
return ($v$0 === undefined) ? $p$0.$4c : $v$0;
},
$2N: function _js_$2j$$2N($p$0, $p$1) {
if (undefined === $p$1) {
$p$1 = $p$0.$4c;
}
var $v$0 = this.$2m($p$0);
if ($v$0 !== $p$1 || $p$0.$GF) {
var $v$1 = new _js.$2A(this, $p$0, $v$0, $p$1);
$p$0.$PB($v$1);
this[$p$0.$2Y] = $p$1;
if (!this.$AI) {
this.$AI = {};
}
this.$AI[$p$0.$2Y] = true;
$p$0.$PA($v$1);
this.$GV($v$1);
}
},
$GV: function _js_$2j$$GV($p$0) {
}
}
function _G($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6, $p$7) {
this.$2Y = $p$0;
this.$Oz = $p$1;
this.$Om = $p$2;
this.$4c = ($p$6) ? $p$3 : _js.$1u.$Ks($p$1, $p$3);
this.$C7 = $p$4;
this.$C6 = $p$5;
this.$GF = $p$7;
}
_G.prototype = {
$2Y: null,
$Oz: null,
$Om: null,
$4c: null,
$C6: null,
$C7: null,
$GF: false,
$PA: function _G$$PA($p$0) {
if (this.$C6) {
this.$C6($p$0);
}
},
$PB: function _G$$PB($p$0) {
if (this.$C7) {
this.$C7($p$0);
}
}
}
_js.$13 = function _js_$13($p$0) {
this.$1n = $p$0;
this.$HJ = $p$0.type.toLowerCase();
this.$AP = _js.$13.$Kh($p$0);
this.$HS = _js.$13.$Kt($p$0);
this.$Gq = _js.$13.$Kn($p$0);
}
_js.$13.$Kt = function _js_$13$$Kt($p$0) {
var $v$0 = ($p$0).which;
switch ($p$0.type.toLowerCase()) {
case 'keypress':
if ($v$0 && !($p$0).keyCode) {
($p$0).keyCode = $v$0;
}
break;
case 'keydown':
case 'keyup':
($p$0).charCode = 0;
break;
}
if (!($v$0)) {
$v$0 = ($p$0).keyCode;
}
if (!($v$0)) {
$v$0 = ($p$0).charCode;
}
return $v$0;
}
_js.$13.$Kn = function _js_$13$$Kn($p$0) {
var $v$0 = ($p$0).relatedTarget;
if ($v$0 !== undefined) {
return $v$0;
}
switch ($p$0.type) {
case 'mouseover':
case 'dragenter':
return ($p$0).fromElement;
case 'mouseout':
case 'dragexit':
return ($p$0).toElement;
}
return null;
}
_js.$13.$Kh = function _js_$13$$Kh($p$0) {
var $v$0 = ($p$0).clientX;
var $v$1 = ($p$0).clientY;
if (document.body) {
$v$0 += document.body.scrollLeft;
$v$1 += document.body.scrollTop;
}
if (document.documentElement) {
$v$0 += document.documentElement.scrollLeft;
$v$1 += document.documentElement.scrollTop;
}
return new _js.$13.$Ja($v$0, $v$1);
}
_js.$13.prototype = {
$1n: null,
$AP: null,
$Gq: null,
$HS: 0,
$HJ: null,
$Lp: false,
$Lz: false,
get_$8i: function _js_$13$get_$8i() {
return this.$AP.x;
},
get_$3T: function _js_$13$get_$3T() {
return this.$AP.y;
},
get_$PI: function _js_$13$get_$PI() {
return this.$Gq;
},
get_$1q: function _js_$13$get_$1q() {
return this.$1n.target || this.$1n.srcElement;
},
get_$9A: function _js_$13$get_$9A() {
return (this.$1n.timeStamp || new Date().getTime());
},
get_$13: function _js_$13$get_$13() {
return this.$HS;
},
get_$4P: function _js_$13$get_$4P() {
return this.$HJ;
},
$90: function _js_$13$$90() {
return (this.$1n).shiftKey;
},
$5X: function _js_$13$$5X() {
if (_js.$O.getInstance().$B8) {
return (this.$1n).metaKey;
}
return (this.$1n).ctrlKey;
},
$Ir: function _js_$13$$Ir() {
return (this.$1n).altKey;
},
$1P: function _js_$13$$1P() {
if (this.$1n.preventDefault) {
this.$1n.preventDefault();
}
else {
this.$1n.returnValue = false;
}
this.$Lp = true;
},
$1y: function _js_$13$$1y() {
if (this.$1n.stopPropagation) {
this.$1n.stopPropagation();
}
else {
this.$1n.cancelBubble = true;
}
this.$Lz = true;
}
}
_js.$13.$Ja = function _js_$13_$Ja($p$0, $p$1) {
this.x = $p$0;
this.y = $p$1;
}
_js.$O = function _js_$O() {
this.$1Z = window.navigator.userAgent;
this.$3z = (this.$1Z.indexOf('MSIE') !== -1) || (this.$1Z.indexOf('rv:') !== -1 && this.$1Z.indexOf('Trident') !== -1);
this.$F9 = this.$1Z.indexOf('Chrome') !== -1;
this.$80 = this.$1Z.indexOf('Firefox') !== -1;
if (this.$1Z.indexOf('Safari') !== -1) {
if ((this.$1Z.indexOf('Chrome') !== -1) || (this.$1Z.indexOf('Android') !== -1)) {
this.$FC = false;
}
else {
this.$FC = true;
}
}
this.$FK = this.$1Z.indexOf('iPhone') !== -1;
this.$FJ = this.$1Z.indexOf('iPad') !== -1;
this.$7x = this.$1Z.indexOf('Android') !== -1;
this.$FX = this.$1Z.indexOf('WebKit') !== -1;
this.$B8 = window.navigator.appVersion.indexOf('Mac') !== -1;
this.$M4 = (window.navigator.appVersion.indexOf('Win') !== -1) || (window.navigator.appVersion.indexOf('NT') !== -1);
this.$LT = !this.$3z || (this.$1Z.toUpperCase().indexOf('MSIE 8') === -1 && this.$1Z.toUpperCase().indexOf('MSIE 7') === -1);
}
_js.$O.getInstance = function _js_$O$getInstance() {
if (!_js.$O.$18) {
_js.$O.$18 = new _js.$O();
}
return _js.$O.$18;
}
_js.$O.prototype = {
$3z: false,
$80: false,
$F9: false,
$FC: false,
$FK: false,
$FJ: false,
$7x: false,
$FX: false,
$B8: false,
$M4: false,
$1Z: null,
$LT: false,
get_$PD: function _js_$O$get_$PD() {
return this.$1Z;
},
get_$FB: function _js_$O$get_$FB() {
return this.$3z;
},
get_$FA: function _js_$O$get_$FA() {
return this.$80;
},
get_$FI: function _js_$O$get_$FI() {
return this.$FK || this.$FJ;
},
get_$Li: function _js_$O$get_$Li() {
return this.$7x;
},
get_$M3: function _js_$O$get_$M3() {
return this.$FX;
}
}
_js.$8 = function _js_$8() {
}
_js.$8.$1D = function _js_$8$$1D($p$0, $p$1) {
if ($p$0 === null) {
Error.argumentNull($p$1, 'Argument can\'t be null');
}
}
_js.$8.$Ci = function _js_$8$$Ci($p$0, $p$1) {
if ($5($p$0)) {
Error.argumentNull($p$1, 'Argument can\'t be null or undefined');
}
}
_js.$8.$59 = function _js_$8$$59($p$0, $p$1) {
if (!$p$0 || !$p$0.length) {
Error.argumentNull($p$1, 'Argument can\'t be null or empty');
}
}
_js.$8.$99 = function _js_$8$$99($p$0, $p$1, $p$2) {
if ($p$0 !== $p$1) {
Error.argument($p$2, 'Argument is ' + $p$0 + ' but should be equal to ' + $p$1);
}
}
_js.$8.$Cj = function _js_$8$$Cj($p$0, $p$1, $p$2, $p$3) {
if ($p$0 < $p$1 || $p$0 > $p$2) {
Error.argumentOutOfRange($p$3);
}
}
_js.$9 = function _js_$9($p$0) {
_js.$9.initializeBase(this, [ $p$0 ]);
}
function $DG($p$0, $p$1) {
if (!$p$0.$86) {
return;
}
if (!$p$1) {
$p$0.set_$Cg(null);
}
else {
var $$t_2 = this;
_js.$K.$Kr($p$1, function($p$1_0) {
if ($p$1 === $p$0.$i && !$p$0.$3G && !$p$0.$3H) {
$p$0.$2d = $p$1_0;
$p$0.set_$Cg($p$1_0.$Eu());
}
});
}
}
function $DH($p$0, $p$1) {
$p$0.$I = $p$1;
$p$0.$52();
if ($p$0.$I) {
$p$0.$I.$J8($p$0);
if ($p$0.get_$3F()) {
$p$0.$I.$z();
}
}
}
function $9L($p$0, $p$1) {
if ($p$0.$I && $p$0.$2d && $p$0.$2d.get_$Ln()) {
$Hd($p$0.$2d, $p$0.$I);
$p$0.$I = null;
if ($p$1) {
$DH($p$0, null);
}
return true;
}
return false;
}
_js.$9.prototype = {
$i: null,
$I: null,
$2d: null,
get_$D: function _js_$9$get_$D() {
return this.$i;
},
set_$D: function _js_$9$set_$D($p$0) {
if ($p$0 !== this.$i) {
this.$i = $p$0;
$DG(this, $p$0);
$4(this, 'TemplateId');
}
return $p$0;
},
get_$Cg: function _js_$9$get_$Cg() {
return this.$I;
},
set_$Cg: function _js_$9$set_$Cg($p$0) {
if (this.$I !== $p$0) {
if (!$9L(this, false) && this.$I) {
this.$I.$k();
while (this.$1.hasChildNodes()) {
this.$1.removeChild(this.$1.firstChild);
}
}
$DH(this, $p$0);
}
return $p$0;
},
get_$3h: function _js_$9$get_$3h() {
return _js.$G.$25;
},
$4h: function _js_$9$$4h() {
var $v$0 = false;
if (!this.$1A && this.$I && _js.$3.$FW(this.$1)) {
$v$0 = this.$I.$4h();
}
return $v$0 || _js.$3.prototype.$4h.call(this);
},
getChildByIndex: function _js_$9$getChildByIndex($p$0) {
if (this.$I) {
return $Hg(this.$I, $p$0);
}
return null;
},
$Br: function _js_$9$$Br() {
var $v$0 = 'Dispose: ' + this.$i;
time($v$0);
if (this.$I) {
if (!$9L(this, true)) {
this.$I.$k();
}
}
_js.$0.prototype.$Br.call(this);
timeEnd($v$0);
},
$52: function _js_$9$$52() {
},
$8g: function _js_$9$$8g() {
var $v$0 = 'FirstActivate: ' + this.$i;
time($v$0);
_js.$3.prototype.$8g.call(this);
var $v$1 = this.$i;
if ($v$1) {
$DG(this, this.$i);
}
timeEnd($v$0);
},
$2r: function _js_$9$$2r() {
var $v$0 = 'Activate: ' + this.$i;
time($v$0);
if (this.$I) {
this.$I.$z();
}
else if (this.$2d) {
this.set_$Cg(this.$2d.$Eu());
}
timeEnd($v$0);
},
$2a: function _js_$9$$2a() {
var $v$0 = 'Deactivate: ' + this.$i;
time($v$0);
_js.$3.prototype.$2a.call(this);
if (this.$I) {
if (!$9L(this, true)) {
this.$I.$1T();
}
}
timeEnd($v$0);
}
}
function _A($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6, $p$7) {
this.$7i = $p$1;
this.$i = $p$0;
this.$AE = $p$2;
this.$JV = $p$3;
this.$Lk = $p$5;
this.$Ly = $p$4;
if ($p$6) {
this.$4W = new _js.$15($p$7, _A.$JI);
}
_js.$K.$PG($p$0, this);
}
_A.$JI = function _A$$JI($p$0, $p$1) {
var $v$0 = $p$0;
var $v$1 = (($p$1) ? 'Clean_Dispose: ' : 'Clean_Deactivate: ') + $v$0.$2d.$i;
time($v$1);
if ($p$1) {
$v$0.$k();
}
else {
$He($v$0);
}
timeEnd($v$1);
}
function $Hd($p$0, $p$1) {
$Hf($p$1);
if ($p$0.$4W) {
$p$0.$4W.$KB($p$1);
}
else {
throw Error.invalidOperation('Can\'t cache non cachable template');
}
}
_A.prototype = {
$7i: null,
$Lk: false,
$i: null,
$AE: null,
$JV: null,
$Ly: false,
$4W: null,
get_$Ln: function _A$get_$Ln() {
return !!this.$4W;
},
$Eu: function _A$$Eu() {
var $v$0 = null;
if (this.$4W) {
$v$0 = this.$4W.$Jy();
}
if (!$v$0) {
$v$0 = this.$7i();
$v$0.set_$Py(this);
}
return $v$0;
}
}
function _B($p$0, $p$1) {
_B.initializeBase(this);
_js.$8.$1D($p$0, 'rootElement');
this.$1c = $p$1;
this.$5h = document.createDocumentFragment();
var $v$0 = $p$0.children;
for (var $v$1 = 0, $v$2 = $v$0.length; $v$1 < $v$2; $v$1++) {
this.$5h.appendChild($v$0[0]);
}
}
_B.$V = function _B$$V($p$0, $p$1) {
for (var $v$0 = 0; $v$0 < $p$1.length; $v$0++) {
$p$0 = $p$0.children[$p$1[$v$0]];
}
return $p$0;
}
function $Hf($p$0) {
if (!$p$0.$97) {
throw Error.invalidOperation('TemplateInstance already detached');
}
$p$0.$5h = document.createDocumentFragment();
var $v$0 = $p$0.$97.$1.children;
for (var $v$1 = 0, $v$2 = $v$0.length; $v$1 < $v$2; $v$1++) {
$p$0.$5h.appendChild($v$0[0]);
}
$p$0.$97 = null;
}
function $He($p$0) {
for (var $v$0 = 0; $v$0 < $p$0.$1c.length; $v$0++) {
$p$0.$1c[$v$0].set_$20(null);
}
$p$0.$1T();
}
function $Hg($p$0, $p$1) {
return $p$0.$1c[$p$1];
}
_B.prototype = {
$1c: null,
$5h: null,
$19: false,
$9y: null,
$7j: null,
$2d: null,
$97: null,
get_$Py: function _B$get_$Py() {
return this.$2d;
},
set_$Py: function _B$set_$Py($p$0) {
if (!this.$2d) {
this.$2d = $p$0;
}
else {
throw Error.invalidOperation();
}
return $p$0;
},
$Et: function _B$$Et() {
return this.$7j;
},
$Pb: function _B$$Pb($p$0) {
this.$7j = $p$0;
return this;
},
$4h: function _B$$4h() {
if (this.$7j) {
return this.$7j.$4h();
}
return false;
},
$1t: function _B$$1t($p$0) {
return (this.$9y) ? this.$9y[$p$0] : null;
},
getTemplateControlForTest: function _B$getTemplateControlForTest() {
if ((!$5(this.$1c)) && (this.$1c.length > 0)) {
return this.$1c[0].get_$20();
}
else {
return null;
}
},
R: function _B$R(childElementsById) {
this.$9y = childElementsById;
return this;
},
$J8: function _B$$J8($p$0) {
this.$97 = $p$0;
for (var $v$0 = this.$1c.length - 1; $v$0 >= 0; $v$0--) {
this.$1c[$v$0].set_$20($p$0);
this.$1c[$v$0].$C3();
}
$p$0.$1.appendChild(this.$5h);
},
$z: function _B$$z() {
if (!this.$19) {
this.$19 = true;
for (var $v$0 = 0; $v$0 < this.$1c.length; $v$0++) {
this.$1c[$v$0].$z();
}
}
},
$1T: function _B$$1T() {
if (this.$19) {
this.$19 = false;
for (var $v$0 = this.$1c.length - 1; $v$0 >= 0; $v$0--) {
this.$1c[$v$0].$1T();
}
}
},
$5r: function _B$$5r() {
for (var $v$0 = this.$1c.length - 1; $v$0 >= 0; $v$0--) {
this.$1c[$v$0].$k();
}
}
}
_js.$K = function _js_$K() {
}
_js.$K.get_$HF = function _js_$K$get_$HF() {
return _js.$K.$Ch;
}
_js.$K.set_$HF = function _js_$K$set_$HF($p$0) {
_js.$K.$Ch = $p$0;
return $p$0;
}
_js.$K.$PG = function _js_$K$$PG($p$0, $p$1) {
if (_js.$K.$4M[$p$0]) {
_js.Trace.logError(_js.$G.$D0, 'Template: [' + $p$0 + '] has more than one occurrence!');
}
_js.$K.$4M[$p$0] = $p$1;
if ($p$1.$AE) {
var $v$0 = $p$1.$AE.getName();
var $v$1;
if ((($v$0) in _js.$K.$9I)) {
$v$1 = _js.$K.$9I[$v$0];
}
else {
$v$1 = new Array(0);
_js.$K.$9I[$v$0] = $v$1;
}
Array.add($v$1, $p$1);
}
}
_js.$K.$Kr = function _js_$K$$Kr($p$0, $p$1) {
var $v$0 = _js.$K.$Ej($p$0);
if ($v$0) {
$p$1($v$0);
return;
}
if (!_js.$K.get_$HF()) {
throw Error.invalidOperation(String.format('Template look up failed for id {0}. Things to check:\n - You have a typo in your template reference (Foo.htm\'s template is Foo, a nested (ie, not the main body one) template\'s name will be Foo.nameOfNestedTemplate\n - The template is in an .htm file\n - The project is correctly configured for template compilation.\n   - Look at .csproj (in notepad) and make sure it is including owa.targets.\n   - Configure VS for max build log detail and look at the logs to make sure owa template parser is working.\n', $p$0));
}
_js.$K.get_$HF()($p$0, function() {
$v$0 = _js.$K.$Ej($p$0);
if (!$v$0) {
throw Error.invalidOperation(String.format('Template look up failed for id {0}. Things to check:\n - You have a typo in your template reference (Foo.htm\'s template is Foo, a nested (ie, not the main body one) template\'s name will be Foo.nameOfNestedTemplate\n - The template is in an .htm file\n - The project is correctly configured for template compilation.\n   - Look at .csproj (in notepad) and make sure it is including owa.targets.\n   - Configure VS for max build log detail and look at the logs to make sure owa template parser is working.\n', $p$0));
}
$p$1($v$0);
}, function() {
throw Error.invalidOperation(String.format('Template look up failed for id {0}. Things to check:\n - You have a typo in your template reference (Foo.htm\'s template is Foo, a nested (ie, not the main body one) template\'s name will be Foo.nameOfNestedTemplate\n - The template is in an .htm file\n - The project is correctly configured for template compilation.\n   - Look at .csproj (in notepad) and make sure it is including owa.targets.\n   - Configure VS for max build log detail and look at the logs to make sure owa template parser is working.\n', $p$0));
});
}
_js.$K.$Ej = function _js_$K$$Ej($p$0) {
var $v$0 = null;
switch (_js.$K.$65) {
case 'TouchNarrow':
$v$0 = _js.$K.$4M[$p$0 + '.Narrow'];
break;
case 'TouchWide':
$v$0 = _js.$K.$4M[$p$0 + '.Wide'];
break;
case 'Mouse':
$v$0 = _js.$K.$4M[$p$0 + '.Mouse'];
break;
default:
break;
}
if (!$v$0) {
$v$0 = _js.$K.$4M[$p$0];
}
return $v$0;
}
_js.$15 = function _js_$15($p$0, $p$1) {
this.$$d_$JJ = Function.createDelegate(this, this.$JJ);
this.$Fl = $p$0;
this.$9t = $p$1;
this.$1e = [];
this.$38 = [];
}
function $9S($p$0) {
if (!$p$0.$9z) {
$p$0.$9z = true;
_js.$2.get_$a().$8o(_js.$G.$D0, 'Cleanup View Cache Item', $p$0.$$d_$JJ);
}
}
_js.$15.prototype = {
$Fl: 0,
$1e: null,
$38: null,
$9t: null,
$9z: false,
$EI: 0,
$KB: function _js_$15$$KB($p$0) {
Array.add(this.$1e, $p$0);
Array.add(this.$38, false);
$9S(this);
},
$Jy: function _js_$15$$Jy() {
if (this.$1e.length > 0) {
if (this.$EI === this.$1e.length) {
this.$EI--;
}
var $v$0 = this.$1e[this.$1e.length - 1];
Array.removeAt(this.$1e, this.$1e.length - 1);
Array.removeAt(this.$38, this.$38.length - 1);
return $v$0;
}
return null;
},
$JJ: function _js_$15$$JJ() {
this.$9z = false;
if (this.$1e.length > this.$Fl) {
var $v$0 = this.$1e[this.$1e.length - 1];
Array.removeAt(this.$1e, this.$1e.length - 1);
Array.removeAt(this.$38, this.$38.length - 1);
$9S(this);
this.$9t($v$0, true);
return;
}
for (var $v$1 = 0; $v$1 < this.$1e.length; $v$1++) {
if (!this.$38[$v$1]) {
this.$38[$v$1] = true;
$9S(this);
this.$9t(this.$1e[$v$1], false);
return;
}
}
}
}
_js.$2A.registerClass('_js.$2A');
_js.$1g.registerClass('_js.$1g');
_js.$5.registerClass('_js.$5');
_js.$2j.registerClass('_js.$2j');
_js.$0.registerClass('_js.$0', _js.$2j, _js.$2f, Sys.IDisposable);
_js.$l.registerClass('_js.$l', _js.$0);
_js.$w.registerClass('_js.$w', _js.$l);
JsonParser.registerClass('JsonParser');
_js.$J.registerClass('_js.$J', _js.$0, _js.$2H);
_js.$1r.registerClass('_js.$1r');
_js.$1u.registerClass('_js.$1u');
_js.$2h.registerClass('_js.$2h', null, Sys.IDisposable);
_js.$k.registerClass('_js.$k', _js.$2h);
_js.$1L.registerClass('_js.$1L', _js.$k);
_js.$16.registerClass('_js.$16');
_js.$7.registerClass('_js.$7');
_js.$2.registerClass('_js.$2', null, _js.$2U);
_js.$2.$2z.registerClass('_js.$2.$2z');
_js.Trace.registerClass('_js.Trace');
_js.$3.registerClass('_js.$3', _js.$l);
_js.$1V.registerClass('_js.$1V', _js.$0);
_C.registerClass('_C', _js.$1V);
_js.$2i.registerClass('_js.$2i');
_D.registerClass('_D', _js.$2i);
_js.$11.registerClass('_js.$11', null, _js.$2c);
_js.$2k.registerClass('_js.$2k', _js.$2h, _js.$2b);
_js.$F.registerClass('_js.$F', _js.$2k);
_E.registerClass('_E', _js.$2k);
_js.$2R.registerClass('_js.$2R', _js.$2i);
_js.$1T.registerClass('_js.$1T');
_F.registerClass('_F', _js.$1T);
_js.$2P.registerClass('_js.$2P');
_js.$A.registerClass('_js.$A', null, _js.$2a);
_js.$A.$Ld.registerClass('_js.$A.$Ld');
_js.$26.registerClass('_js.$26');
_js.$4.registerClass('_js.$4', null, _js.$2e);
_js.$1l.registerClass('_js.$1l');
_js.$G.registerClass('_js.$G');
_G.registerClass('_G');
_js.$13.registerClass('_js.$13', null, _js.$2d);
_js.$13.$Ja.registerClass('_js.$13.$Ja');
_js.$O.registerClass('_js.$O', null, _js.$1Y);
_js.$8.registerClass('_js.$8');
_js.$9.registerClass('_js.$9', _js.$3);
_A.registerClass('_A');
_B.registerClass('_B', _js.$2h);
_js.$K.registerClass('_js.$K');
_js.$15.registerClass('_js.$15');
_js.$5.$6I = -1;
_js.$5.$Cq = 0;
_js.$7.$NY = new RegExp('[\n\r]+');
_js.$2.$AS = new Date();
_js.$2.$18 = null;
_js.Trace.$Q4 = 2;
_js.Trace.$1K = true;
_js.Trace.$J3 = null;
_js.Trace.$J0 = null;
_js.Trace.$J2 = null;
_js.Trace.$Iy = null;
_js.Trace.$Iz = null;
_js.Trace.$J1 = null;
_js.Trace.$Iw = null;
_js.$3.$j = _js.$4.$7l;
_js.$3.$9q = _js.$4.$9q;
_js.$3.$Cp = _js.$4.$Cp;
_js.$3.$3I = new _G('IsHovered', Boolean, _js.$3, false);
_js.$3.$A0 = new _G('ClickCommand', _js.$1V, _js.$3);
_js.$3.$Ap = new _G('HoverCommand', _js.$1V, _js.$3);
_js.$3.$AL = new _G('DoubleClickCommand', _js.$1V, _js.$3);
_js.$3.$Cm = new _G('Title', String, _js.$3, null, null, _js.$3.$Oa);
_js.$3.$6z = null;
_js.$3.$8q = null;
_js.$3.$7B = null;
_js.$3.$$cctor();
_js.$4.$QH = new _js.$4(window.self);
_js.$G.$Is = new _js.$G(0);
_js.$G.$79 = new _js.$G(1);
_js.$G.$7N = new _js.$G(3);
_js.$G.$25 = new _js.$G(2);
_js.$G.$7k = new _js.$G(4);
_js.$G.$3e = new _js.$G(5);
_js.$G.$D0 = new _js.$G(6);
_js.$O.$18 = null;
_js.$K.$4M = {};
_js.$K.$9I = {};
_js.$K.$65 = 'Mouse';
_js.$K.$Ch = null;
Type.registerNamespace('_0365f');
_0365f.$1a = function() {}
_0365f.$1a.$$ = function _0365f_$1a$$$($p$0) {
var $$cn = '$1a' + '$1' + '$' + $p$0.getName().replace(/\./g, '_');
if (!_0365f[$$cn]) {
var $$ccr = _0365f[$$cn] = function() {
};
$$ccr.registerInterface('_0365f.' + $$cn);
}
return _0365f[$$cn];
}
_0365f.$1a.registerInterface('_0365f.$1a');
_0365f.$q = function() {}
_0365f.$q.registerInterface('_0365f.$q');
_0365f.$2S = function() {}
_0365f.$2S.registerInterface('_0365f.$2S');
_0365f.$2E = function() {}
_0365f.$2E.registerInterface('_0365f.$2E');
_0365f.$X = function() {}
_0365f.$X.registerInterface('_0365f.$X');
_0365f.$1X = function() {}
_0365f.$1X.$$ = function _0365f_$1X$$$($p$0) {
var $$cn = '$1X' + '$1' + '$' + $p$0.getName().replace(/\./g, '_');
if (!_0365f[$$cn]) {
var $$ccr = _0365f[$$cn] = function() {
};
$$ccr.registerInterface('_0365f.' + $$cn);
}
return _0365f[$$cn];
}
_0365f.$1X.registerInterface('_0365f.$1X');
_0365f.$Y = function _0365f_$Y($p$0) {
this.get_count = this.get_$H;
this.get_items = this.get_$QL;
this.addRange = this.$E2;
this.indexOf = this.$Av;
this.insert = this.$QN;
this.removeAt = this.$CH;
this.add = this.$3p;
this.clear = this.$5Q;
this.contains = this.$QM;
this.remove = this.$QO;
this.$R = $p$0 || new Array(0);
}
_0365f.$Y.$$ = function _0365f_$Y$$$($p$0) {
var $$cn = '$Y' + '$1' + '$' + $p$0.getName().replace(/\./g, '_');
if (!_0365f[$$cn]) {
var $$ccr = _0365f[$$cn] = function() {
(this.$$gta = this.$$gta || {})['_0365f.$Y'] = {'T': $p$0};
var $v$0 = [];
for (var $v$1 = 0; $v$1 < arguments.length; ++$v$1) {
$v$0[$v$1] = arguments[$v$1];
}
_0365f.$Y.apply(this, $v$0);
};
$$ccr.registerClass('_0365f.' + $$cn, null, _0365f.$1a.$$($p$0));
var $$dict_5 = _0365f.$Y.prototype;
for (var $$key_6 in $$dict_5) {
var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
if ('constructor' !== $$entry_7.key) {
$$ccr.prototype[$$entry_7.key] = $$entry_7.value;
}
}
}
return _0365f[$$cn];
}
_0365f.$Y.prototype = {
$R: null,
get_$QL: function _0365f_$Y$get_$QL() {
return this.$R;
},
get_$H: function _0365f_$Y$get_$H() {
return this.$R.length;
},
get_$QI: function _0365f_$Y$get_$QI($p$0) {
return this.$R[$p$0];
},
set_$QI: function _0365f_$Y$set_$QI($p$0, $p$1) {
this.$R[$p$0] = $p$1;
return $p$1;
},
$3p: function _0365f_$Y$$3p($p$0) {
Array.add(this.$R, $p$0);
},
$E2: function _0365f_$Y$$E2($p$0) {
Array.addRange(this.$R, $p$0);
},
$5Q: function _0365f_$Y$$5Q() {
Array.clear(this.$R);
},
$QM: function _0365f_$Y$$QM($p$0) {
return Array.contains(this.$R, $p$0);
},
$Av: function _0365f_$Y$$Av($p$0, $p$1) {
$p$1 = $p$1 || 0;
return Array.indexOf(this.$R, $p$0, $p$1);
},
$QN: function _0365f_$Y$$QN($p$0, $p$1) {
Array.insert(this.$R, $p$0, $p$1);
},
$QO: function _0365f_$Y$$QO($p$0) {
Array.remove(this.$R, $p$0);
},
$CH: function _0365f_$Y$$CH($p$0) {
Array.removeAt(this.$R, $p$0);
},
$QP: function _0365f_$Y$$QP() {
var $v$0 = new Array(this.get_$H());
for (var $v$1 = 0; $v$1 < this.get_$H(); $v$1++) {
$v$0[$v$1] = this.get_$QI($v$1);
}
return $v$0;
}
}
_0365f.$U = function _0365f_$U($p$0) {
this.$7g = new Sys.EventHandlerList();
this.$Bs = {};
this.$Gy = $p$0 || _js.$2.get_$a();
}
_0365f.$U.prototype = {
$Gy: null,
$Ca: function _0365f_$U$$Ca($p$0, $p$1) {
var $v$0 = $p$0.getName();
if ((($v$0) in this.$Bs)) {
var $$t_3 = this;
this.$Gy.$8p(_0365f.$6.$7k, 'Delayed onetime event registration', function() {
$p$1($$t_3.$Bs[$v$0]);
});
}
else {
this.$7g.addHandler($v$0, $p$1);
}
},
$HM: function _0365f_$U$$HM($p$0, $p$1) {
var $v$0 = $p$0.getName();
this.$7g.removeHandler($v$0, $p$1);
},
$QW: function _0365f_$U$$QW($p$0, $p$1) {
var $v$0 = $p$0.getName();
var $v$1 = this.$7g.getHandler($v$0);
if ($v$1) {
$v$1($p$1);
}
}
}
_0365f.$1G = function _0365f_$1G($p$0) {
this.$Ol = $p$0;
}
_0365f.$1G.prototype = {
$Ol: 0
}
_0365f.$1I = function _0365f_$1I() {
}
_0365f.$1E = function _0365f_$1E($p$0, $p$1) {
this.$KC = $p$0;
this.$KD = $p$1;
}
_0365f.$1E.prototype = {
$KC: null,
$KD: 0
}
_0365f.$17 = function _0365f_$17($p$0, $p$1, $p$2, $p$3, $p$4) {
this.$$d_$Lf = Function.createDelegate(this, this.$Lf);
_0365f.$17.initializeBase(this, [ _0365f.$17.$NZ, $p$1, $p$2, $p$3, $p$4 ]);
this.$Eh = $p$0;
var $v$0 = this.$c;
this.set_$7h(this.$$d_$Lf);
this.set_$EG($v$0);
}
_0365f.$17.$NZ = function _0365f_$17$$NZ() {
}
_0365f.$17.prototype = {
$Eh: null,
$5Y: null,
$Lf: function _0365f_$17$$Lf() {
if (!this.$5Y) {
throw Error.invalidOperation('Can\'t raise command when no event arguments specified.');
}
this.$Eh(this.$5Y);
this.$5Y = null;
}
}
_0365f.$h = function _0365f_$h() {
}
_0365f.$n = function _0365f_$n() {
this.$27 = ((this.$$gta['_0365f.$n']['T'] === Number || Type.isEnum(this.$$gta['_0365f.$n']['T'])) ? 0 : (this.$$gta['_0365f.$n']['T'] === Boolean) ? false : null);
this.add_contextualCollectionChanged = this.add_$Qg;
this.remove_contextualCollectionChanged = this.remove_$Qg;
_0365f.$n.$$(this.$$gta['_0365f.$n']['T']).initializeBase(this);
}
_0365f.$n.$$ = function _0365f_$n$$$($p$0) {
var $$cn = '$n' + '$1' + '$' + $p$0.getName().replace(/\./g, '_');
if (!_0365f[$$cn]) {
var $$ccr = _0365f[$$cn] = function() {
(this.$$gta = this.$$gta || {})['_0365f.$n'] = {'T': $p$0};
var $v$0 = [];
for (var $v$1 = 0; $v$1 < arguments.length; ++$v$1) {
$v$0[$v$1] = arguments[$v$1];
}
_0365f.$n.apply(this, $v$0);
};
$$ccr.registerClass('_0365f.' + $$cn, _js.$J, _0365f.$1X.$$($p$0));
var $$dict_5 = _0365f.$n.prototype;
for (var $$key_6 in $$dict_5) {
var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
if ('constructor' !== $$entry_7.key) {
$$ccr.prototype[$$entry_7.key] = $$entry_7.value;
}
}
}
return _0365f[$$cn];
}
_0365f.$n.prototype = {
add_$Qg: function _0365f_$n$add_$Qg($p$0) {
this.$4f.addHandler('CollectionChanged', $p$0);
},
remove_$Qg: function _0365f_$n$remove_$Qg($p$0) {
this.$4f.removeHandler('CollectionChanged', $p$0);
},
$Qh: function _0365f_$n$$Qh($p$0, $p$1, $p$2) {
try {
this.$27 = $p$2;
$Hn(this, $p$0, $p$1);
}
finally {
this.$27 = ((this.$$gta['_0365f.$n']['T'] === Number || Type.isEnum(this.$$gta['_0365f.$n']['T'])) ? 0 : (this.$$gta['_0365f.$n']['T'] === Boolean) ? false : null);
}
},
$Qi: function _0365f_$n$$Qi($p$0, $p$1, $p$2) {
try {
this.$27 = $p$2;
$DN(this, $p$0, $p$1);
}
finally {
this.$27 = ((this.$$gta['_0365f.$n']['T'] === Number || Type.isEnum(this.$$gta['_0365f.$n']['T'])) ? 0 : (this.$$gta['_0365f.$n']['T'] === Boolean) ? false : null);
}
},
$Qj: function _0365f_$n$$Qj($p$0) {
try {
this.$27 = $p$0;
this.$5Q();
}
finally {
this.$27 = ((this.$$gta['_0365f.$n']['T'] === Number || Type.isEnum(this.$$gta['_0365f.$n']['T'])) ? 0 : (this.$$gta['_0365f.$n']['T'] === Boolean) ? false : null);
}
},
$Qk: function _0365f_$n$$Qk($p$0, $p$1) {
try {
this.$27 = $p$1;
this.$CH($p$0);
}
finally {
this.$27 = ((this.$$gta['_0365f.$n']['T'] === Number || Type.isEnum(this.$$gta['_0365f.$n']['T'])) ? 0 : (this.$$gta['_0365f.$n']['T'] === Boolean) ? false : null);
}
},
$Ql: function _0365f_$n$$Ql($p$0, $p$1, $p$2, $p$3) {
try {
this.$27 = $p$3;
this.$GC($p$0, $p$1, $p$2);
}
finally {
this.$27 = ((this.$$gta['_0365f.$n']['T'] === Number || Type.isEnum(this.$$gta['_0365f.$n']['T'])) ? 0 : (this.$$gta['_0365f.$n']['T'] === Boolean) ? false : null);
}
},
$KN: function _0365f_$n$$KN($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
var $v$0 = new (_0365f.$1F.$$(this.$$gta['_0365f.$n']['T']))($p$1, $p$2, $p$4, $p$5, $p$3, this.$27);
($p$0)(this, $v$0);
}
}
_0365f.$1F = function _0365f_$1F($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
this.$A2 = ((this.$$gta['_0365f.$1F']['T'] === Number || Type.isEnum(this.$$gta['_0365f.$1F']['T'])) ? 0 : (this.$$gta['_0365f.$1F']['T'] === Boolean) ? false : null);
_0365f.$1F.$$(this.$$gta['_0365f.$1F']['T']).initializeBase(this, [ $p$0, $p$1, $p$2, $p$3, $p$4 ]);
this.$A2 = $p$5;
}
_0365f.$1F.$$ = function _0365f_$1F$$$($p$0) {
var $$cn = '$1F' + '$1' + '$' + $p$0.getName().replace(/\./g, '_');
if (!_0365f[$$cn]) {
var $$ccr = _0365f[$$cn] = function() {
(this.$$gta = this.$$gta || {})['_0365f.$1F'] = {'T': $p$0};
var $v$0 = [];
for (var $v$1 = 0; $v$1 < arguments.length; ++$v$1) {
$v$0[$v$1] = arguments[$v$1];
}
_0365f.$1F.apply(this, $v$0);
};
$$ccr.registerClass('_0365f.' + $$cn, _js.$1r);
var $$dict_5 = _0365f.$1F.prototype;
for (var $$key_6 in $$dict_5) {
var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
if ('constructor' !== $$entry_7.key) {
$$ccr.prototype[$$entry_7.key] = $$entry_7.value;
}
}
}
return _0365f[$$cn];
}
_0365f.$1F.prototype = {
get_$Qf: function _0365f_$1F$get_$Qf() {
return this.$A2;
}
}
_0365f.$6 = function _0365f_$6($p$0) {
this.$EL = $p$0;
}
_0365f.$6.prototype = {
$EL: 0
}
_0365f.$1y = function _0365f_$1y($p$0) {
this.$Eo = $p$0;
}
_0365f.$1y.prototype = {
$Eo: null
}
_0365f.$1x = function _0365f_$1x($p$0) {
this.$Eo = $p$0;
}
_0365f.$1x.prototype = {
$Eo: null
}
_0365f.$1v = function _0365f_$1v() {
}
_0365f.$22 = function _0365f_$22($p$0) {
this.$Ij = $p$0;
}
_0365f.$22.prototype = {
$Ij: null
}
_0365f.$U.registerClass('_0365f.$U');
_0365f.$1G.registerClass('_0365f.$1G');
_0365f.$1I.registerClass('_0365f.$1I');
_0365f.$1E.registerClass('_0365f.$1E');
_0365f.$17.registerClass('_0365f.$17', _C);
_0365f.$h.registerClass('_0365f.$h');
_0365f.$6.registerClass('_0365f.$6');
_0365f.$1y.registerClass('_0365f.$1y');
_0365f.$1x.registerClass('_0365f.$1x');
_0365f.$1v.registerClass('_0365f.$1v');
_0365f.$22.registerClass('_0365f.$22');
_0365f.$h.$BK = 37;
_0365f.$h.$CI = 39;
_0365f.$h.$M0 = false;
_0365f.$6.$9h = new _0365f.$6(0);
_0365f.$6.$25 = new _0365f.$6(0);
_0365f.$6.$7N = new _0365f.$6(0);
_0365f.$6.$7k = new _0365f.$6(1);
_0365f.$6.$Kv = new _0365f.$6(2);
_0365f.$6.$4t = new _0365f.$6(0);
_0365f.$6.$Gf = new _0365f.$6(0);
_0365f.$6.$6c = new _0365f.$6(3);
_0365f.$6.$HA = new _0365f.$6(0);
_0365f.$6.$Na = new _0365f.$6(73);
_0365f.$6.$Os = new _0365f.$6(204);
Type.registerNamespace('_0365m');
_0365m.$1M = function() {}
_0365m.$1M.prototype = {
}
_0365m.$1M.registerEnum('_0365m.$1M', false);
_0365m.$2T = function() {}
_0365m.$2T.registerInterface('_0365m.$2T');
_0365m.$u = function _0365m_$u($p$0, $p$1, $p$2, $p$3) {
if ($p$1 === undefined) {
$p$1 = 1;
}
if ($p$2 === undefined) {
$p$2 = 'o365';
}
var $v$0;
switch ($p$1) {
case 1:
$v$0 = 'wf-size-x16';
break;
case 2:
$v$0 = 'wf-size-x22';
break;
case 3:
$v$0 = 'wf-size-x24';
break;
case 4:
$v$0 = 'wf-size-x32';
break;
case 5:
$v$0 = 'wf-size-x35';
break;
case 6:
$v$0 = 'wf-size-x48';
break;
case 7:
$v$0 = 'wf-size-x64';
break;
case 8:
$v$0 = '';
break;
default:
throw Error.argumentOutOfRange('sizeCss', $p$1);
}
if ($p$3) {
$v$0 += '-circle';
}
var $v$1 = $p$2.toLocaleLowerCase();
var $v$2 = ' wf-' + $v$1 + '-' + $p$0.toLowerCase();
var $v$3 = ' wf-family-' + $v$1;
this.$ET = 'wf ' + $v$0 + $v$2 + $v$3;
}
_0365m.$u.$5U = function _0365m_$u$$5U($p$0, $p$1, $p$2, $p$3) {
return new _0365m.$u($p$0, $p$1, $p$2, $p$3);
}
_0365m.$u.prototype = {
$ET: null,
get_$5W: function _0365m_$u$get_$5W() {
return this.$ET;
}
}
_0365m.$1P = function() {}
_0365m.$1P.registerInterface('_0365m.$1P');
_0365m.$W = function _0365m_$W($p$0) {
this.$$d_$L0 = Function.createDelegate(this, this.$L0);
this.$8J = -1;
_0365m.$W.initializeBase(this);
this.$s = new _js.$J();
this.$s.add_$2P(this.$$d_$L0);
if ($p$0) {
for (var $v$0 = 0; $v$0 < $p$0.length; ++$v$0) {
var $v$1 = $p$0[$v$0];
if (!$5($v$1)) {
this.$s.$3p($v$1);
}
}
}
}
function $D1($p$0, $p$1, $p$2) {
for (var $v$0 = 0; $v$0 < $p$1.length; $v$0++) {
if (!$5($p$1[$v$0])) {
if ($p$2) {
}
$p$1[$v$0].set_$6L($p$2);
}
}
}
_0365m.$W.prototype = {
$GA: 150,
$1o: false,
$s: null,
$GY: null,
$7L: null,
$2I: 0,
$t: null,
$7S: null,
$4a: null,
$7P: null,
$7R: null,
$7T: null,
$7U: null,
get_$By: function _0365m_$W$get_$By() {
return this.$GY;
},
set_$By: function _0365m_$W$set_$By($p$0) {
this.$GY = $p$0;
return $p$0;
},
get_$O: function _0365m_$W$get_$O() {
return this.$1o;
},
set_$O: function _0365m_$W$set_$O($p$0) {
if (this.$1o !== $p$0) {
this.$1o = $p$0;
$4(this, 'IsShown');
if (!this.$1o) {
this.set_$u(null);
}
}
return $p$0;
},
get_$Jr: function _0365m_$W$get_$Jr() {
return this.$7S;
},
set_$Jr: function _0365m_$W$set_$Jr($p$0) {
if (this.$7S !== $p$0) {
this.$7S = $p$0;
$4(this, 'CustomMenuCssClass');
}
return $p$0;
},
get_$Jl: function _0365m_$W$get_$Jl() {
return this.$7P;
},
set_$Jl: function _0365m_$W$set_$Jl($p$0) {
if (this.$7P !== $p$0) {
this.$7P = $p$0;
$4(this, 'CustomActiveItemCssClass');
}
return $p$0;
},
get_$Jp: function _0365m_$W$get_$Jp() {
return this.$7R;
},
set_$Jp: function _0365m_$W$set_$Jp($p$0) {
if (this.$7R !== $p$0) {
this.$7R = $p$0;
$4(this, 'CustomInactiveItemCssClass');
}
return $p$0;
},
get_$Ju: function _0365m_$W$get_$Ju() {
return this.$7T;
},
set_$Ju: function _0365m_$W$set_$Ju($p$0) {
if (this.$7T !== $p$0) {
this.$7T = $p$0;
$4(this, 'CustomSelectedItemCssClass');
}
return $p$0;
},
get_$Jv: function _0365m_$W$get_$Jv() {
return this.$7U;
},
set_$Jv: function _0365m_$W$set_$Jv($p$0) {
if (this.$7U !== $p$0) {
this.$7U = $p$0;
$4(this, 'CustomSeparatorCssClass');
}
return $p$0;
},
get_$A3: function _0365m_$W$get_$A3() {
return this.$7L;
},
set_$A3: function _0365m_$W$set_$A3($p$0) {
if (this.$7L !== $p$0) {
this.$7L = $p$0;
$4(this, 'ContextMenuPopupCloseCommand');
}
return $p$0;
},
get_$A4: function _0365m_$W$get_$A4() {
return this.$2I;
},
set_$A4: function _0365m_$W$set_$A4($p$0) {
if (this.$2I !== $p$0) {
this.$2I = $p$0;
$4(this, 'ContextMenuPopupId');
}
return $p$0;
},
get_$u: function _0365m_$W$get_$u() {
return this.$t;
},
set_$u: function _0365m_$W$set_$u($p$0) {
if (this.$t !== $p$0) {
if (!$5(this.$t) && _0365m.$1P.isInstanceOfType(this.$t)) {
(this.$t).set_$r(false);
}
this.$t = $p$0;
if (!$5(this.$t) && _0365m.$1P.isInstanceOfType(this.$t) && (this.$t).get_$CK()) {
(this.$t).set_$r(true);
}
$4(this, 'SelectedItem');
}
return $p$0;
},
$L0: function _0365m_$W$$L0($p$0, $p$1) {
if (!$5($p$1.$1v)) {
$D1(this, $p$1.$1v, null);
}
if (!$5($p$1.$y)) {
$D1(this, $p$1.$y, this);
}
}
}
_0365m.$2Y = function() {}
_0365m.$2Y.registerInterface('_0365m.$2Y');
_0365m.$r = function() {}
_0365m.$r.registerInterface('_0365m.$r');
_0365m.$27 = function _0365m_$27($p$0) {
_0365m.$27.initializeBase(this);
this.$1C = $p$0;
}
_0365m.$27.prototype = {
$1C: null,
$2b: null,
get_$ME: function _0365m_$27$get_$ME() {
return 'ContextMenuView.ContextMenuHeader';
},
get_$6L: function _0365m_$27$get_$6L() {
return this.$2b;
},
set_$6L: function _0365m_$27$set_$6L($p$0) {
if (this.$2b !== $p$0) {
this.$2b = $p$0;
$4(this, 'ParentContextMenu');
}
return $p$0;
},
get_$CK: function _0365m_$27$get_$CK() {
return false;
},
get_$r: function _0365m_$27$get_$r() {
return false;
},
set_$r: function _0365m_$27$set_$r($p$0) {
return $p$0;
}
}
_0365m.$1K = function _0365m_$1K() {
_0365m.$1K.initializeBase(this);
}
_0365m.$1K.prototype = {
$2b: null,
$1A: false,
get_$ME: function _0365m_$1K$get_$ME() {
return 'ContextMenuView.ContextMenuSeparator';
},
get_$6L: function _0365m_$1K$get_$6L() {
return this.$2b;
},
set_$6L: function _0365m_$1K$set_$6L($p$0) {
if (this.$2b !== $p$0) {
this.$2b = $p$0;
$4(this, 'ParentContextMenu');
}
return $p$0;
},
get_$CK: function _0365m_$1K$get_$CK() {
return false;
},
get_$r: function _0365m_$1K$get_$r() {
return false;
},
set_$r: function _0365m_$1K$set_$r($p$0) {
return $p$0;
}
}
_0365m.$1D = function _0365m_$1D($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6, $p$7) {
var $$t_8 = this;
_0365m.$1D.initializeBase(this, [ $p$0, $p$1, ($5($p$2)) ? new _C(function() {
}, _0365f.$6.$7N) : $p$2, $p$4, $p$5, null ]);
this.set_$2V($p$3);
this.$2F = $p$7;
if (!$5($p$6)) {
this.$Fo = $p$6;
}
}
_0365m.$1D.prototype = {
$Fo: 'ContextMenuView.DualStateContextMenuItem',
$2F: null,
$2n: false,
$6g: true,
get_$2V: function _0365m_$1D$get_$2V() {
return this.$2n;
},
set_$2V: function _0365m_$1D$set_$2V($p$0) {
if (this.$2n !== $p$0) {
this.$2n = $p$0;
$4(this, 'IsChecked');
$4(this, 'ShowCheckmark');
}
return $p$0;
},
get_$Q1: function _0365m_$1D$get_$Q1() {
return this.$6g;
},
set_$Q1: function _0365m_$1D$set_$Q1($p$0) {
if (this.$6g !== $p$0) {
this.$6g = $p$0;
$4(this, 'ToggleCheckedOnClick');
}
return $p$0;
},
get_$Pm: function _0365m_$1D$get_$Pm() {
return this.get_$2V();
},
get_$ME: function _0365m_$1D$get_$ME() {
return this.$Fo;
}
}
_0365m.$2g = function _0365m_$2g($p$0, $p$1) {
this.$4Z = $p$0;
this.$FO = $p$1;
}
_0365m.$2g.prototype = {
$FO: false,
$4Z: null
}
_0365m.$B = function _0365m_$B($p$0) {
this.$$d_$JU = Function.createDelegate(this, this.$JU);
this.$$d_$JQ = Function.createDelegate(this, this.$JQ);
_0365m.$B.initializeBase(this);
if (!$p$0) {
throw Error.argumentNull('groupGenerator');
}
this.$3D = $p$0;
$6j(this);
}
function $HT($p$0) {
if ($p$0.$1I) {
if (_0365f.$n.$$(_0365m.$1M).isInstanceOfType($p$0.$1I)) {
($p$0.$1I).add_$Qg($p$0.$$d_$JU);
}
else {
$p$0.$1I.add_$2P($p$0.$$d_$JQ);
}
}
}
function $Ha($p$0) {
if ($p$0.$1I) {
if (_0365f.$n.$$(_0365m.$1M).isInstanceOfType($p$0.$1I)) {
($p$0.$1I).remove_$Qg($p$0.$$d_$JU);
}
else {
$p$0.$1I.remove_$2P($p$0.$$d_$JQ);
}
}
}
function $D5($p$0, $p$1, $p$2, $p$3) {
if ($p$0.$1I !== $p$1) {
return;
}
switch ($p$2.$2O) {
case 0:
$D3($p$0, $p$2.$15, $p$2.$y.length, $p$3);
break;
case 1:
$HZ($p$0, $p$2.$15, $p$2.$5B, $p$3);
break;
case 2:
$Hc($p$0, $p$2.$15, $p$2.$1v.length, $p$3);
break;
case 4:
$6j($p$0);
break;
case 3:
default:
throw Error.notImplemented(String.format('{0} action not supported.', _js.$1q.toString($p$2.$2O)));
}
}
function $6j($p$0) {
var $v$0 = ($p$0.$1I) ? $p$0.$1I.get_$H() : 0;
$p$0.$6e = new Array($v$0);
var $v$1 = 1;
$p$0.$Qj($v$1);
if ($v$0 > 0) {
$D3($p$0, 0, $v$0, $v$1);
}
}
function $4R($p$0, $p$1) {
if (!$p$0.get_$H()) {
return $p$1;
}
else if ($p$1 < 0) {
return -1;
}
else {
var $v$0 = $p$0.$6e.length;
if ($p$1 >= $v$0) {
return $p$0.get_$H();
}
return $p$0.$6e[$p$1];
}
}
function $HU($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6) {
$p$5.val = -1;
if ($5($p$2)) {
throw Error.argumentNull('currentDataContext', 'currentDataContext must not be null');
}
var $v$0 = $p$0.$3D.$Kb($p$2, $p$3);
var $v$1 = $v$0.$4Z.get_$4i();
var $v$2 = $p$4 === $v$0.$4Z.get_$4i();
if ($v$0.$FO) {
var $v$3 = $p$0.$KM($v$0.$4Z);
if (($v$3 >= 0) && (!$p$4)) {
$p$0.$Qk($v$3, $p$6);
$p$5.val = $v$3;
}
if (!$v$2) {
Array.add($p$1, $v$0.$4Z);
}
}
return $v$0.$4Z.get_$4i();
}
function $D2($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
var $v$0 = ($p$1 > 0) ? $p$0.$1I.get_$QI($p$1 - 1) : null;
var $v$1 = $HU($p$0, $p$2, $p$0.$1I.get_$QI($p$1), $v$0, $p$3, $p$4, $p$5);
Array.add($p$2, $p$0.$1I.get_$QI($p$1));
return $v$1;
}
function $HY($p$0, $p$1, $p$2, $p$3) {
if ($p$2.length > 0) {
$p$0.$Qi($p$1, $p$2, $p$3);
}
}
function $D4($p$0, $p$1, $p$2) {
var $v$0 = null;
if ($p$2 > 0) {
var $v$1 = $p$0.get_$QI($p$2 - 1);
if (_0365m.$r.isInstanceOfType($v$1)) {
$v$0 = ($v$1).get_$4i();
}
}
return $v$0;
}
function $D3($p$0, $p$1, $p$2, $p$3) {
var $v$0 = [];
var $v$1 = $4R($p$0, $p$1);
var $v$2 = $D4($p$0, $p$1, $v$1);
for (var $v$3 = $p$1; $v$3 < $p$1 + $p$2; $v$3++) {
var $v$4;
var $$t_9, $$t_A;
var $v$5 = (($$t_A = $D2($p$0, $v$3, $v$0, $v$2, ($$t_9 = {'val': $v$4}), $p$3)), $v$4 = $$t_9.val, $$t_A);
if ($v$4 >= 0 && $v$4 < $v$1) {
$v$1--;
}
else if ($v$3 === $p$1) {
if ($v$2 && $v$2 !== $v$5) {
$v$1--;
}
$v$2 = null;
}
}
$HY($p$0, $v$1, $v$0, $p$3);
$6i($p$0);
}
function $HV($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
var $v$0 = $4R($p$0, $p$2);
var $v$1 = $D4($p$0, $p$2, $v$0);
var $v$2 = $D2($p$0, $p$2, $p$3, $v$1, $p$5, $p$4);
if (($v$1 && $v$1 !== $v$2 && $p$1 >= $p$2) || ($p$5.val >= 0 && $p$5.val < $v$0)) {
$v$0--;
}
return $v$0;
}
function $Hc($p$0, $p$1, $p$2, $p$3) {
var $v$0 = $p$1 + $p$2 - 1;
var $v$1 = $4R($p$0, $v$0);
var $v$2 = $4R($p$0, $p$1);
for (var $v$3 = $v$1; $v$3 >= $v$2; $v$3 = $4R($p$0, --$v$0)) {
$Hb($p$0, $v$3, $p$3);
}
$6i($p$0);
}
function $Hb($p$0, $p$1, $p$2) {
$p$0.$Qk($p$1, $p$2);
if (($p$1 > 0) && (_0365m.$r.isInstanceOfType($p$0.get_$QI($p$1 - 1)))) {
var $v$0 = ($p$0.get_$H() === $p$1) ? true : _0365m.$r.isInstanceOfType($p$0.get_$QI($p$1));
if ($v$0) {
$p$0.$Qk($p$1 - 1, $p$2);
}
}
}
function $HW($p$0, $p$1, $p$2, $p$3) {
var $v$0 = $4R($p$0, $p$1);
return $HX($p$0, $v$0, $p$2, $p$3);
}
function $HX($p$0, $p$1, $p$2, $p$3) {
var $v$0 = $p$0.get_$QI($p$1);
if (_0365m.$r.isInstanceOfType($p$0.get_$QI($p$1 - 1)) && ($p$1 === ($p$0.get_$H() - 1) || _0365m.$r.isInstanceOfType($p$0.get_$QI($p$1 + 1)))) {
$p$1--;
$p$0.$Qk($p$1, $p$3);
}
Array.add($p$2, $p$0.get_$QI($p$1));
return $p$1;
}
function $HZ($p$0, $p$1, $p$2, $p$3) {
var $v$0 = [];
var $v$1 = [];
var $v$2 = null;
var $v$3 = $p$0.get_$H();
var $v$4 = $HW($p$0, $p$1, $v$1, $p$3);
var $v$5 = $v$3 > $p$0.get_$H();
if ($v$5 && $p$1 <= $p$2) {
$6i($p$0);
}
var $v$6;
var $$t_B, $$t_C;
var $v$7 = (($$t_C = $HV($p$0, $p$1, $p$2, $v$0, $p$3, ($$t_B = {'val': $v$6}))), $v$6 = $$t_B.val, $$t_C);
if ($v$6 >= 0 && $v$6 < $v$4) {
$v$4--;
}
if ($v$0.length === 2) {
$v$2 = $v$0[1];
if ($p$1 >= $p$2) {
$p$0.$Qh($v$7, $v$0[0], $p$3);
$v$4++;
$v$7++;
}
else {
$v$7++;
$p$0.$Qh($v$7, $v$0[0], $p$3);
}
}
else {
$v$2 = $v$0[0];
}
$p$0.$Ql($v$4, $v$7, $v$2, $p$3);
$6i($p$0);
}
function $6i($p$0) {
$p$0.$6e = new Array($p$0.$1I.get_$H());
var $v$0 = $p$0.get_$H();
var $v$1 = 0;
for (var $v$2 = 0; $v$2 < $v$0; $v$2++) {
var $v$3 = $p$0.get_$QI($v$2);
if (!(_0365m.$r.isInstanceOfType($v$3))) {
$p$0.$6e[$v$1++] = $v$2;
}
}
}
_0365m.$B.prototype = {
$3D: null,
$1I: null,
$6e: null,
get_$1p: function _0365m_$B$get_$1p() {
return this.$1I;
},
set_$1p: function _0365m_$B$set_$1p($p$0) {
if (this.$1I !== $p$0) {
$Ha(this);
this.$1I = $p$0;
$HT(this);
$6j(this);
$4(this, 'Source');
}
return $p$0;
},
get_$Ku: function _0365m_$B$get_$Ku() {
return this.$3D;
},
set_$Ku: function _0365m_$B$set_$Ku($p$0) {
if (this.$3D !== $p$0) {
this.$3D = $p$0;
$6j(this);
$4(this, 'GroupGenerator');
}
return $p$0;
},
$KM: function _0365m_$B$$KM($p$0) {
var $$t_3 = this;
return this.$Av($p$0, function($p$1_0, $p$1_1) {
return _0365m.$r.isInstanceOfType($p$1_0) && _0365m.$r.isInstanceOfType($p$1_1) && ($p$1_0).get_$4i() === ($p$1_1).get_$4i();
});
},
$3p: function _0365m_$B$$3p($p$0) {
throw Error.invalidOperation('GroupingObservableCollection is read-only.');
},
$JQ: function _0365m_$B$$JQ($p$0, $p$1) {
$D5(this, $p$0, $p$1, 0);
},
$JU: function _0365m_$B$$JU($p$0, $p$1) {
$D5(this, $p$0, $p$1, $p$1.get_$Qf());
}
}
_0365m.$1b = function _0365m_$1b($p$0, $p$1, $p$2, $p$3, $p$4) {
_0365m.$1b.initializeBase(this, [ $p$0, $p$1, $p$2, true ]);
this.$32 = $p$3;
this.$1b = $p$4;
}
_0365m.$1b.prototype = {
$32: null,
$1b: null,
$1w: false,
get_$CK: function _0365m_$1b$get_$CK() {
return !!this.$32;
},
get_$ME: function _0365m_$1b$get_$ME() {
return 'ContextMenuView.LinkContextMenuItem';
}
}
_0365m.$1d = function _0365m_$1d($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6, $p$7) {
_0365m.$1d.initializeBase(this);
if ((!$p$0) && (!$p$1)) {
throw Error.argumentNull('Both text and imageId', 'Argument can\'t be null');
}
if ((!$p$0) && (!$p$1) && (!$p$4)) {
throw Error.argumentNull('Text and imageId and imageCss', 'Arguments can\'t be null');
}
if (($p$1) && ($p$4)) {
throw Error.argument('Both imageId and imageCss', 'Arguments can\'t be set to non-null values');
}
this.$1C = $p$0;
this.$3y = $p$1;
this.$4n = $p$7;
this.$LV = $p$4;
this.$8A = $p$2;
this.$1V = false;
this.$BJ = 'ContextMenuView.DefaultMenuItemLineTemplate';
this.$45 = this;
if ($p$5) {
this.$5I = $p$5;
}
else {
this.$5I = $p$0;
}
if ($p$6) {
this.$BH = $p$6;
}
else {
this.$BH = 'ContextMenuView.ContextMenuItem';
}
}
_0365m.$1d.prototype = {
$LV: null,
$BH: null,
$8A: null,
$3y: null,
$4n: null,
$1A: false,
$1C: null,
$1V: false,
$BJ: null,
$45: null,
$2b: null,
$5I: null,
get_$M6: function _0365m_$1d$get_$M6() {
return this.$45;
},
set_$M6: function _0365m_$1d$set_$M6($p$0) {
if (this.$45 !== $p$0) {
this.$45 = $p$0;
$4(this, 'LabelDataContext');
}
return $p$0;
},
get_$r: function _0365m_$1d$get_$r() {
return this.$1V;
},
set_$r: function _0365m_$1d$set_$r($p$0) {
if ($p$0 !== this.$1V) {
this.$1V = $p$0;
$4(this, 'IsSelected');
}
return $p$0;
},
get_$CK: function _0365m_$1d$get_$CK() {
return !$5(this.$8A) && this.$8A.$c && !this.$1A;
},
get_$ME: function _0365m_$1d$get_$ME() {
return this.$BH;
},
get_$6L: function _0365m_$1d$get_$6L() {
return this.$2b;
},
set_$6L: function _0365m_$1d$set_$6L($p$0) {
if (this.$2b !== $p$0) {
this.$2b = $p$0;
$4(this, 'ParentContextMenu');
}
return $p$0;
}
}
_0365m.$1z = function _0365m_$1z($p$0, $p$1, $p$2, $p$3) {
this.$4J = 'ContextMenuView';
_0365m.$1z.initializeBase(this, [ $p$0, $p$1, null, $p$3 ]);
this.set_$HB($p$2);
}
_0365m.$1z.prototype = {
$1B: null,
$1K: true,
$94: false,
get_$HB: function _0365m_$1z$get_$HB() {
return this.$1B;
},
set_$HB: function _0365m_$1z$set_$HB($p$0) {
if (this.$1B !== $p$0) {
this.$1B = $p$0;
$4(this, 'SubMenu');
}
return $p$0;
},
get_$Ps: function _0365m_$1z$get_$Ps() {
return this.$94;
},
set_$Ps: function _0365m_$1z$set_$Ps($p$0) {
this.$94 = $p$0;
if (this.$94 && this.get_$6L()) {
this.get_$6L().set_$u(this);
}
return $p$0;
},
get_$ME: function _0365m_$1z$get_$ME() {
return 'ContextMenuView.SubMenuContextMenuItem';
},
get_$CK: function _0365m_$1z$get_$CK() {
return this.$1K && !this.$1A;
}
}
_0365m.$u.registerClass('_0365m.$u', null, _0365m.$2T);
_0365m.$W.registerClass('_0365m.$W', _js.$0);
_0365m.$27.registerClass('_0365m.$27', _js.$0, _0365m.$1P);
_0365m.$1K.registerClass('_0365m.$1K', _js.$0, _0365m.$1P);
_0365m.$1d.registerClass('_0365m.$1d', _js.$0, _0365m.$1P);
_0365m.$1D.registerClass('_0365m.$1D', _0365m.$1d);
_0365m.$2g.registerClass('_0365m.$2g');
_0365m.$B.registerClass('_0365m.$B', _0365f.$n.$$(_0365m.$1M));
_0365m.$1b.registerClass('_0365m.$1b', _0365m.$1d);
_0365m.$1z.registerClass('_0365m.$1z', _0365m.$1d);
Type.registerNamespace('_o365c');
_o365c.$1h = function() {}
_o365c.$1h.prototype = {
left: 0,
leftCenter: 1,
center: 2,
rightCenter: 3,
right: 4,
centerLeft: 5,
centerRight: 6,
rightSide: 7,
leftSide: 8
}
_o365c.$1h.registerEnum('_o365c.$1h', false);
_o365c.$E = function _o365c_$E($p$0) {
this.$$d_$Bq = Function.createDelegate(this, this.$Bq);
_o365c.$E.initializeBase(this, [ $p$0 ]);
this.$v('o365button');
this.$1r(_js.$3.$3I.$2Y, _o365c.$E.$FH);
this.set_$D('Button.ImageLeft');
}
_o365c.$E.$FH = function _o365c_$E$$FH($p$0, $p$1) {
var $v$0 = $p$0;
$3n($v$0);
}
function $3n($p$0) {
$p$0.$4X();
$p$0.$7G();
}
function $6o($p$0, $p$1) {
if ($p$1 !== $p$0.$39) {
$5E($p$0, $p$0.$39, $p$1);
$p$0.set_$Jh($p$1);
}
}
function $6p($p$0, $p$1) {
if ($p$1 !== $p$0.$3A) {
$p$0.set_$Jj($p$1);
}
}
function $Hz($p$0) {
if ($p$0.$39) {
$5E($p$0, $p$0.$39, '');
$p$0.$39 = null;
}
}
function $I0($p$0) {
if ($p$0.$3A) {
$5E($p$0, $p$0.$3A.get_$5W(), '');
$p$0.$3A = null;
}
}
function $9T($p$0, $p$1) {
if (_0365f.$17.isInstanceOfType($p$0.get_$2e())) {
($p$0.get_$2e()).$5Y = $p$1;
}
$p$0.get_$2e().$p();
}
_o365c.$E.prototype = {
$1K: true,
$5v: false,
$1C: null,
$3y: null,
$Au: null,
$EU: null,
$44: null,
$EV: null,
$6V: null,
$5f: null,
$5e: null,
$4n: null,
$5o: null,
$Gh: null,
$6O: null,
$H6: false,
$39: null,
$3A: null,
$A1: false,
$BD: false,
$Ce: null,
$CU: null,
get_$2e: function _o365c_$E$get_$2e() {
return _js.$3.prototype.get_$2e.call(this);
},
set_$2e: function _o365c_$E$set_$2e($p$0) {
if (_js.$3.prototype.get_$2e.call(this) !== $p$0) {
if (_js.$3.prototype.get_$2e.call(this)) {
_js.$3.prototype.get_$2e.call(this).remove_$9w(this.$$d_$Bq);
}
if ($p$0) {
$p$0.add_$9w(this.$$d_$Bq);
}
this.set_$1F((!$p$0) || $p$0.$c);
_js.$3.prototype.set_$2e.call(this, $p$0);
}
return $p$0;
},
get_$1F: function _o365c_$E$get_$1F() {
return this.$1K;
},
set_$1F: function _o365c_$E$set_$1F($p$0) {
if (this.$1K !== $p$0) {
this.$1K = $p$0;
$4(this, 'IsEnabled');
this.$GO();
}
return $p$0;
},
get_$B9: function _o365c_$E$get_$B9() {
return this.$5v;
},
set_$B9: function _o365c_$E$set_$B9($p$0) {
if (this.$5v !== $p$0) {
this.$5v = $p$0;
$3n(this);
$4(this, 'IsPressed');
}
return $p$0;
},
get_$21: function _o365c_$E$get_$21() {
return this.$1C;
},
set_$21: function _o365c_$E$set_$21($p$0) {
if (this.$1C !== $p$0) {
this.$1C = $p$0 || '';
$6k(this, 'Text', 'IsTextHidden');
}
return $p$0;
},
get_$Jj: function _o365c_$E$get_$Jj() {
return this.$3A;
},
set_$Jj: function _o365c_$E$set_$Jj($p$0) {
if (this.$3A !== $p$0) {
this.$3A = $p$0;
$4(this, 'CurrentImageId');
}
return $p$0;
},
get_$Jh: function _o365c_$E$get_$Jh() {
return this.$39;
},
set_$Jh: function _o365c_$E$set_$Jh($p$0) {
if (this.$39 !== $p$0) {
this.$39 = $p$0;
$4(this, 'CurrentCssClass');
}
return $p$0;
},
get_$LW: function _o365c_$E$get_$LW() {
return this.$3y;
},
set_$LW: function _o365c_$E$set_$LW($p$0) {
if (this.$3y !== $p$0) {
this.$3y = $p$0;
this.$7G();
}
return $p$0;
},
get_$8s: function _o365c_$E$get_$8s() {
return this.$6V;
},
set_$8s: function _o365c_$E$set_$8s($p$0) {
if (this.$6V !== $p$0) {
this.$6V = $p$0;
this.$4X();
}
return $p$0;
},
get_$K1: function _o365c_$E$get_$K1() {
return this.$5f;
},
set_$K1: function _o365c_$E$set_$K1($p$0) {
if (this.$5f !== $p$0) {
this.$5f = $p$0;
this.$7G();
}
return $p$0;
},
get_$2j: function _o365c_$E$get_$2j() {
return this.$5e;
},
set_$2j: function _o365c_$E$set_$2j($p$0) {
if (this.$5e !== $p$0) {
this.$5e = $p$0;
this.$4X();
}
return $p$0;
},
get_$FV: function _o365c_$E$get_$FV() {
return this.$BD || _js.$7.$1U(this.$1C);
},
set_$FV: function _o365c_$E$set_$FV($p$0) {
if (this.$BD !== $p$0) {
this.$BD = $p$0;
$4(this, 'IsTextHidden');
}
return $p$0;
},
get_$LS: function _o365c_$E$get_$LS() {
return this.$4n;
},
set_$LS: function _o365c_$E$set_$LS($p$0) {
if (this.$4n !== $p$0) {
this.$4n = $p$0;
this.$7G();
}
return $p$0;
},
get_$4m: function _o365c_$E$get_$4m() {
return this.$5o;
},
set_$4m: function _o365c_$E$set_$4m($p$0) {
if (this.$5o !== $p$0) {
this.$5o = $p$0;
this.$4X();
}
return $p$0;
},
get_$6P: function _o365c_$E$get_$6P() {
return this.$6O;
},
set_$6P: function _o365c_$E$set_$6P($p$0) {
if (this.$6O !== $p$0) {
this.$6O = $p$0;
this.$4X();
}
return $p$0;
},
$5r: function _o365c_$E$$5r() {
if (this.get_$2e()) {
this.get_$2e().remove_$9w(this.$$d_$Bq);
}
this.$1j(_js.$3.$3I.$2Y, _o365c.$E.$FH);
_js.$3.prototype.$5r.call(this);
},
$GO: function _o365c_$E$$GO() {
if (this.get_$1F()) {
this.$1.removeAttribute('disabled');
}
else {
this.$1.setAttribute('disabled', 'true');
}
$3n(this);
},
$Nq: function _o365c_$E$$Nq($p$0) {
if (!this.$A1 && $p$0.$90() && this.$CU && this.$CU.$c) {
this.$CU.$p();
}
else if (!this.$A1 && this.get_$2e() && this.get_$2e().$c) {
$9T(this, $p$0);
}
if (this.$H6) {
$p$0.$1y();
}
},
$OF: function _o365c_$E$$OF($p$0) {
if (this.$A1 && this.get_$2e() && this.get_$2e().$c) {
$9T(this, $p$0);
}
var $v$0 = $p$0.get_$13() - 1 === 2;
if (this.get_$1F() && !$v$0) {
this.set_$B9(true);
}
},
$OL: function _o365c_$E$$OL($p$0) {
if (this.get_$1F()) {
this.set_$B9(false);
}
},
$GT: function _o365c_$E$$GT($p$0) {
_js.$3.prototype.$GT.call(this, $p$0);
if (this.get_$1F()) {
this.set_$B9(false);
}
},
$52: function _o365c_$E$$52() {
_js.$9.prototype.$52.call(this);
if (this.$I) {
this.$Au = this.$I.$1t('Image');
if (this.$EU && this.$Au) {
this.$Au.$v(this.$EU);
}
this.$44 = this.$I.$1t('Label');
if (this.$EV && this.$44) {
this.$44.$v(this.$EV);
}
if (_js.$7.$1L(this.get_$5J()) && !this.get_$E9()) {
if (this.$44) {
if (_js.$7.$1U(this.$44.get_$E().get_$n())) {
this.$44.get_$E().set_$n(_js.$5.$5j());
}
this.get_$E().set_$62(this.$44.get_$E().get_$n());
}
var $v$0 = this.$I.$1t('BtnDescription');
if ($v$0) {
if (_js.$7.$1U($v$0.get_$E().get_$n())) {
$v$0.get_$E().set_$n(_js.$5.$5j());
}
this.get_$E().set_$62(this.get_$E().get_$62() + ' ' + $v$0.get_$E().get_$n());
}
}
}
},
$2r: function _o365c_$E$$2r() {
_js.$9.prototype.$2r.call(this);
$3n(this);
},
$8g: function _o365c_$E$$8g() {
_js.$9.prototype.$8g.call(this);
var $v$0 = 8221;
if (window.IsjQueryOwaTouchMode && window.IsjQueryOwaTouchMode()) {
$v$0 |= 1048576;
}
this.$2M($v$0);
},
$GL: function _o365c_$E$$GL() {
_js.$3.prototype.$GL.call(this);
$3n(this);
},
$Nt: function _o365c_$E$$Nt($p$0) {
if (this.$H6) {
$p$0.$1y();
return;
}
if (this.$Ce && this.$Ce.$c) {
this.$Ce.$p();
}
},
$OD: function _o365c_$E$$OD($p$0) {
if ($p$0.get_$13() === 13 || $p$0.get_$13() === 32) {
this.$Nq($p$0);
}
},
$4X: function _o365c_$E$$4X() {
if (!this.get_$3F()) {
return;
}
if (!this.get_$1F() && this.$5e) {
$6o(this, this.$5e);
}
else if (this.$5v && this.$6O) {
$6o(this, this.$6O);
}
else if (this.get_$1u() && this.$5o) {
$6o(this, this.$5o);
}
else if (this.$6V) {
$6o(this, this.$6V);
}
else {
$Hz(this);
}
},
$7G: function _o365c_$E$$7G() {
if (!this.get_$3F()) {
return;
}
if (!this.get_$1F() && this.$5f) {
$6p(this, this.$5f);
}
else if (this.$5v && this.$Gh) {
$6p(this, this.$Gh);
}
else if (this.get_$1u() && this.$4n) {
$6p(this, this.$4n);
}
else if (this.$3y) {
$6p(this, this.$3y);
}
else {
$I0(this);
}
},
$Bq: function _o365c_$E$$Bq($p$0, $p$1) {
this.set_$1F(this.get_$2e().$c);
}
}
_o365c.$1H = function _o365c_$1H($p$0, $p$1, $p$2) {
this.$4G = $p$0;
this.$F7 = $p$1;
this.$Dy = $p$2;
}
_o365c.$1H.prototype = {
$F7: false,
$4G: null,
$Dy: null
}
_o365c.$x = function _o365c_$x($p$0, $p$1) {
this.$1o = $p$0;
this.$53 = $p$1;
}
_o365c.$x.prototype = {
$1o: false,
$53: 0
}
_o365c.$1J = function _o365c_$1J($p$0, $p$1) {
this.$GE = $p$0;
this.$53 = $p$1;
}
_o365c.$1J.prototype = {
$53: 0,
$GE: null
}
_o365c.$1j = function _o365c_$1j($p$0, $p$1) {
this.$$d_$Ey = Function.createDelegate(this, this.$Ey);
this.$$d_$Bt = Function.createDelegate(this, this.$Bt);
_o365c.$1j.initializeBase(this, [ $p$0 ]);
this.$B = $p$1;
this.get_$E().set_$2c(10);
this.$AR = new _0365f.$17(this.$$d_$Bt, _0365f.$6.$25);
this.set_$1J([]);
}
_o365c.$1j.prototype = {
$B: null,
$AR: null,
$2f: null,
$2I: 0,
$1V: false,
$7a: null,
$7W: null,
$7Y: null,
$2R: null,
$4a: null,
$5Z: null,
$5a: null,
$2Q: null,
get_$JN: function _o365c_$1j$get_$JN() {
return this.$2f;
},
set_$JN: function _o365c_$1j$set_$JN($p$0) {
if (this.$2f !== $p$0) {
this.$2f = $p$0;
$4(this, 'CloseMenuCommand');
}
return $p$0;
},
get_$r: function _o365c_$1j$get_$r() {
return this.$1V;
},
set_$r: function _o365c_$1j$set_$r($p$0) {
if (this.$1V !== $p$0) {
this.$1V = $p$0;
$4(this, 'IsSelected');
if (this.$1V) {
this.$v(this.$2Q || this.$2R);
}
else {
this.$1x(this.$2Q || this.$2R);
this.$4X();
}
}
return $p$0;
},
get_$7b: function _o365c_$1j$get_$7b() {
return this.$7a;
},
set_$7b: function _o365c_$1j$set_$7b($p$0) {
this.$7a = $p$0;
if (_js.$7.$1L(this.$4a)) {
this.set_$7(this.$7a);
}
return $p$0;
},
get_$Jq: function _o365c_$1j$get_$Jq() {
return this.$4a;
},
set_$Jq: function _o365c_$1j$set_$Jq($p$0) {
this.$4a = $p$0;
if (!_js.$7.$1L(this.$4a)) {
this.set_$7(this.$4a);
}
else {
this.set_$7(this.$7a);
}
return $p$0;
},
get_$7X: function _o365c_$1j$get_$7X() {
return this.$7W;
},
set_$7X: function _o365c_$1j$set_$7X($p$0) {
this.$7W = $p$0;
if (_js.$7.$1L(this.$5Z)) {
this.set_$8s(this.$7W);
}
return $p$0;
},
get_$Jk: function _o365c_$1j$get_$Jk() {
return this.$5Z;
},
set_$Jk: function _o365c_$1j$set_$Jk($p$0) {
this.$5Z = $p$0;
if (!_js.$7.$1L(this.$5Z)) {
this.set_$8s(this.$5Z);
}
else {
this.set_$8s(this.$7W);
}
return $p$0;
},
get_$7Z: function _o365c_$1j$get_$7Z() {
return this.$7Y;
},
set_$7Z: function _o365c_$1j$set_$7Z($p$0) {
this.$7Y = $p$0;
if (_js.$7.$1L(this.$5a)) {
this.set_$2j(this.$7Y);
}
return $p$0;
},
get_$Jo: function _o365c_$1j$get_$Jo() {
return this.$5a;
},
set_$Jo: function _o365c_$1j$set_$Jo($p$0) {
this.$5a = $p$0;
if (!_js.$7.$1L(this.$5a)) {
this.set_$2j(this.$5a);
}
else {
this.set_$2j(this.$7Y);
}
return $p$0;
},
get_$7c: function _o365c_$1j$get_$7c() {
return this.$2R;
},
set_$7c: function _o365c_$1j$set_$7c($p$0) {
if (this.get_$r() && !_js.$7.$1L(this.$2R)) {
this.$1x(this.$2R);
}
this.$2R = $p$0;
if (_js.$7.$1L(this.$2Q)) {
this.set_$6P(this.$2R);
if (this.get_$r()) {
this.$v(this.$2R);
}
}
return $p$0;
},
get_$Jt: function _o365c_$1j$get_$Jt() {
return this.$2Q;
},
set_$Jt: function _o365c_$1j$set_$Jt($p$0) {
if (this.get_$r() && !_js.$7.$1L(this.$2Q)) {
this.$1x(this.$2Q);
}
this.$2Q = $p$0;
if (!_js.$7.$1L(this.$2Q)) {
this.set_$6P(this.$2Q);
if (this.get_$r()) {
this.$v(this.$2Q);
}
}
else {
this.set_$6P(this.$2R);
if (this.get_$r()) {
this.$v(this.$2R);
}
}
return $p$0;
},
$Ey: function _o365c_$1j$$Ey($p$0) {
},
$8g: function _o365c_$1j$$8g() {
_o365c.$E.prototype.$8g.call(this);
this.$2M(4);
if (!$5(this.$B)) {
this.$B.$Ca(_o365c.$1R, this.$$d_$Ey);
}
},
$GS: function _o365c_$1j$$GS($p$0) {
_js.$3.prototype.$GS.call(this, $p$0);
if (!$5(this.$B) && this.get_$1F()) {
this.$B.$QW(_o365c.$1R, new _o365c.$1R(this));
}
},
$Nq: function _o365c_$1j$$Nq($p$0) {
this.$Bt($p$0);
},
$5r: function _o365c_$1j$$5r() {
_o365c.$E.prototype.$5r.call(this);
if (!$5(this.$B)) {
this.$B.$HM(_o365c.$1R, this.$$d_$Ey);
}
},
$Bt: function _o365c_$1j$$Bt($p$0) {
if (this.get_$2e() && this.get_$2e().$c && this.$2f && this.$2f.$c) {
if (this.$2f && this.$2f.$c) {
this.$2f.$p();
}
if (!$5(this.$B)) {
this.$B.$QW(_o365c.$g, _o365c.$g.get_$a());
}
$9T(this, $p$0);
}
},
$7n: function _o365c_$1j$$7n() {
var $v$0 = new _o365c.$P();
var $v$1 = new _o365c.$I();
$v$1.$2H = this.$AR;
$v$1.set_$T('ENTER');
var $v$2 = new _o365c.$I();
$v$2.$2H = this.$AR;
$v$2.set_$T('SPACE');
$v$0.set_$1g([ $v$1, $v$2 ]);
return _js.$3.prototype.$7n.call(this).concat($v$0);
}
}
_o365c.$Q = function _o365c_$Q($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
this.$$d_$Aw = Function.createDelegate(this, this.$Aw);
this.$$d_$Ax = Function.createDelegate(this, this.$Ax);
this.$$d_$LH = Function.createDelegate(this, this.$LH);
this.$$d_$L1 = Function.createDelegate(this, this.$L1);
this.$$d_$Nv = Function.createDelegate(this, this.$Nv);
this.$$d_$KF = Function.createDelegate(this, this.$KF);
this.$$d_$KG = Function.createDelegate(this, this.$KG);
this.$$d_$KH = Function.createDelegate(this, this.$KH);
this.$$d_$KI = Function.createDelegate(this, this.$KI);
this.$$d_$KE = Function.createDelegate(this, this.$KE);
_o365c.$Q.initializeBase(this, [ $p$0, $p$1, $p$2, $p$3, $p$4, $p$5 || 'contextMenuDropShadow' ]);
this.$AN = this.get_$89();
this.$1.setAttribute('IsContextMenu', '1');
this.$Eb = new _C(this.$$d_$KE, _0365f.$6.$25);
this.$HN = new _C(this.$$d_$KI, _0365f.$6.$25);
this.$Fe = new _C(this.$$d_$KH, _0365f.$6.$25);
this.$F3 = new _C(this.$$d_$KG, _0365f.$6.$25);
this.$Ee = new _C(this.$$d_$KF, _0365f.$6.$25);
this.get_$E().set_$2c(29);
this.get_$E().set_$BI(_o365c.$Q.$EX);
}
_o365c.$Q.$5U = function _o365c_$Q$$5U($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
var $v$0 = window.document.createElement('div');
$p$0.appendChild($v$0);
return new _o365c.$Q($v$0, $p$1, $p$2, $p$3, $p$4, $p$5);
}
function $DX($p$0, $p$1) {
if (!$p$0.$1M || !$p$0.$1M.$s) {
return;
}
if (!$p$0.get_$CL()) {
if ($p$1 > 0) {
$5F($p$0, -1, $p$1);
}
else {
$5F($p$0, 0, $p$1);
}
}
else {
$5F($p$0, $p$0.$1M.$s.$Av($p$0.get_$CL()), $p$1);
}
}
function $5F($p$0, $p$1, $p$2) {
var $v$0 = $p$0.$1M.$s.get_$H();
for (var $v$1 = 1; $v$1 <= $v$0; $v$1++) {
var $v$2 = $IA($p$0, $p$1 + ($v$1 * $p$2), $v$0);
var $v$3 = $p$0.$1M.$s.get_$QI($v$2);
if (_0365m.$1P.isInstanceOfType($v$3) && ($v$3).get_$CK()) {
$p$0.set_$CL($v$3);
return;
}
}
}
function $IA($p$0, $p$1, $p$2) {
var $v$0 = $p$1;
while ($v$0 >= $p$2) {
$v$0 -= $p$2;
}
while ($v$0 < 0) {
$v$0 += $p$2;
}
return $v$0;
}
_o365c.$Q.prototype = {
$Eb: null,
$HN: null,
$Fe: null,
$F3: null,
$Ee: null,
$6h: false,
$FT: false,
$An: true,
$Bz: null,
$9C: null,
$46: null,
$5x: false,
$1M: null,
get_$QF: function _o365c_$Q$get_$QF() {
return this.$6h;
},
set_$QF: function _o365c_$Q$set_$QF($p$0) {
if (this.$6h !== $p$0) {
this.$6h = $p$0;
$4(this, 'UseUpArrow');
}
return $p$0;
},
get_$89: function _o365c_$Q$get_$89() {
return this.get_$M8() !== 'Mouse';
},
get_$CL: function _o365c_$Q$get_$CL() {
return (!this.$1M) ? null : this.$1M.$t;
},
set_$CL: function _o365c_$Q$set_$CL($p$0) {
if (this.$1M) {
this.$1M.set_$u($p$0);
if (this.$46) {
this.$46.$4h();
}
}
return $p$0;
},
$Io: function _o365c_$Q$$Io($p$0) {
if (this.$9C) {
$p$0 -= this.$9C.$1.offsetWidth / 2;
this.$9C.$1.style.left = $p$0 + 'px';
}
},
$52: function _o365c_$Q$$52() {
_o365c.$D.prototype.$52.call(this);
if (this.$I) {
this.$9C = this.$I.$1t('UpArrow');
this.$46 = this.$I.$1t('MenuListView');
if (this.$46) {
this.$46.$2p = true;
}
}
},
$8g: function _o365c_$Q$$8g() {
_o365c.$D.prototype.$8g.call(this);
this.$2M(8192);
},
$2r: function _o365c_$Q$$2r() {
_o365c.$D.prototype.$2r.call(this);
this.set_$8w(false);
this.$B.$Ca(_o365c.$g, this.$$d_$Nv);
this.$B.$Ca(_o365c.$1J, this.$$d_$L1);
this.$B.$Ca(_o365c.$1A, this.$$d_$LH);
this.$B.$QW(_o365c.$x, new _o365c.$x(true, this.$d));
if (this.$46) {
this.$46.$4h();
}
},
$2a: function _o365c_$Q$$2a() {
_o365c.$D.prototype.$2a.call(this);
this.$B.$HM(_o365c.$g, this.$$d_$Nv);
this.$B.$HM(_o365c.$1J, this.$$d_$L1);
this.$B.$HM(_o365c.$1A, this.$$d_$LH);
this.$5x = false;
this.$B.$QW(_o365c.$x, new _o365c.$x(false, this.$d));
},
$7n: function _o365c_$Q$$7n() {
var $$t_0;
return ($$t_0 = _js.$3.prototype.$7n.call(this)).concat.call($$t_0, new _o365c.$2B(_js.$O.getInstance()));
},
$Es: function _o365c_$Q$$Es($p$0) {
if (this.$1h.get_$2h() !== 'TouchNarrow') {
this.$1.style.overflowY = 'hidden';
if ($p$0) {
return this.$j.$AB(this.$1, (this.get_$89()) ? 'contextualExpand' : 'contextualExpand100', true, this.$$d_$Ax);
}
return this.$j.$A9(this.$1, (this.get_$89()) ? 'contextualCollapse' : 'contextualCollapse100', true, this.$$d_$Aw);
}
return _o365c.$D.prototype.$Es.call(this, $p$0);
},
$Ax: function _o365c_$Q$$Ax() {
_o365c.$D.prototype.$Ax.call(this);
this.$1.style.overflowY = '';
this.$1.style.height = '';
},
$Aw: function _o365c_$Q$$Aw() {
_o365c.$D.prototype.$Aw.call(this);
this.$1.style.overflowY = '';
},
$EJ: function _o365c_$Q$$EJ() {
this.set_$8w(true);
_o365c.$D.prototype.$EJ.call(this);
},
$Nt: function _o365c_$Q$$Nt($p$0) {
$p$0.$1P();
},
$L1: function _o365c_$Q$$L1($p$0) {
if ($p$0.$53 === this.$d) {
this.set_$Y($p$0.$GE);
(this.get_$Y()).set_$A3(this.$1S);
(this.get_$Y()).set_$A4(this.$d);
}
},
$LH: function _o365c_$Q$$LH($p$0) {
if ($p$0.$53 === this.$d) {
this.$5x = $p$0.$5x;
}
},
$Nv: function _o365c_$Q$$Nv($p$0) {
this.set_$8w(true);
if (this.$An) {
this.set_$O(false);
}
},
$KE: function _o365c_$Q$$KE() {
$DX(this, 1);
},
$KI: function _o365c_$Q$$KI() {
$DX(this, -1);
},
$KG: function _o365c_$Q$$KG() {
if (this.$1M && this.$1M.$s) {
$5F(this, -1, 1);
}
},
$KF: function _o365c_$Q$$KF() {
if (this.$1M && this.$1M.$s) {
$5F(this, this.$1M.$s.get_$H(), -1);
}
},
$KH: function _o365c_$Q$$KH() {
if (this.$FT) {
this.$1M.set_$u(null);
this.$1S.$p();
this.$Bz.$4h();
}
}
}
_o365c.$g = function _o365c_$g() {
}
_o365c.$g.get_$a = function _o365c_$g$get_$a() {
if ($5(_o365c.$g.$18)) {
_o365c.$g.$18 = new _o365c.$g();
}
return _o365c.$g.$18;
}
_o365c.$28 = function _o365c_$28($p$0) {
_o365c.$28.initializeBase(this, [ $p$0 ]);
}
_o365c.$28.prototype = {
$AG: null,
$7Q: null,
get_$Jw: function _o365c_$28$get_$Jw() {
return this.$AG;
},
set_$Jw: function _o365c_$28$set_$Jw($p$0) {
this.$AG = $p$0;
if (_js.$7.$1L(this.$7Q)) {
this.set_$7($p$0);
}
return $p$0;
},
get_$Jn: function _o365c_$28$get_$Jn() {
return this.$7Q;
},
set_$Jn: function _o365c_$28$set_$Jn($p$0) {
this.$7Q = $p$0;
if (_js.$7.$1L(this.$7Q)) {
this.set_$7(this.$AG);
}
else {
this.set_$7($p$0);
}
return $p$0;
}
}
_o365c.$1N = function _o365c_$1N($p$0, $p$1) {
_o365c.$1N.initializeBase(this, [ $p$0, $p$1 ]);
this.get_$E().set_$2c(11);
this.get_$E().set_$EH(_js.$5.$EO(this.$2n));
}
_o365c.$1N.prototype = {
$2n: false,
$6g: true,
get_$2V: function _o365c_$1N$get_$2V() {
return this.$2n;
},
set_$2V: function _o365c_$1N$set_$2V($p$0) {
if (this.$2n !== $p$0) {
this.$2n = $p$0;
this.get_$E().set_$EH(_js.$5.$EO($p$0));
$4(this, 'IsChecked');
}
return $p$0;
},
$Bt: function _o365c_$1N$$Bt($p$0) {
if (this.get_$1F() && this.$6g) {
this.set_$2V(!this.$2n);
}
_o365c.$1j.prototype.$Bt.call(this, $p$0);
}
}
_o365c.$1p = function _o365c_$1p($p$0, $p$1) {
_o365c.$1p.initializeBase(this, [ $p$0, $p$1 ]);
this.set_$1F(!$5(this.$2T));
this.get_$E().set_$2c(7);
}
_o365c.$1p.prototype = {
$2T: null,
$1b: null,
$1w: false,
get_$5p: function _o365c_$1p$get_$5p() {
return this.$2T;
},
set_$5p: function _o365c_$1p$set_$5p($p$0) {
if (this.$2T !== $p$0) {
this.$2T = $p$0;
this.$1.setAttribute('href', $p$0);
this.set_$1F(!$5(this.$2T));
$4(this, 'Href');
}
return $p$0;
},
get_$4L: function _o365c_$1p$get_$4L() {
return this.$1b;
},
set_$4L: function _o365c_$1p$set_$4L($p$0) {
if (this.$1b !== $p$0) {
this.$1b = $p$0;
if (!_js.$7.$1L(this.$1b)) {
this.$1.setAttribute('target', this.$1b);
}
else {
this.$1.removeAttribute('target');
}
$4(this, 'TargetWindow');
}
return $p$0;
},
get_$C4: function _o365c_$1p$get_$C4() {
return this.$1w;
},
set_$C4: function _o365c_$1p$set_$C4($p$0) {
if (this.$1w !== $p$0) {
this.$1w = $p$0;
$4(this, 'PreventNavigation');
}
return $p$0;
},
$Nq: function _o365c_$1p$$Nq($p$0) {
_o365c.$1j.prototype.$Nq.call(this, $p$0);
if (this.$1w) {
$p$0.$1P();
}
},
$GO: function _o365c_$1p$$GO() {
if (!this.get_$1F()) {
this.$1.removeAttribute('href');
}
$3n(this);
},
$7n: function _o365c_$1p$$7n() {
return [];
}
}
_o365c.$1R = function _o365c_$1R($p$0) {
this.$Ar = $p$0;
}
_o365c.$1R.prototype = {
$Ar: null
}
_o365c.$T = function _o365c_$T($p$0, $p$1, $p$2, $p$3, $p$4) {
this.$$d_$LG = Function.createDelegate(this, this.$LG);
this.$$d_$OY = Function.createDelegate(this, this.$OY);
this.$$d_$OX = Function.createDelegate(this, this.$OX);
this.$$d_$Kz = Function.createDelegate(this, this.$Kz);
this.$$d_$Oi = Function.createDelegate(this, this.$Oi);
this.$$d_$LR = Function.createDelegate(this, this.$LR);
this.$$d_$JO = Function.createDelegate(this, this.$JO);
this.$$d_$Oj = Function.createDelegate(this, this.$Oj);
this.$4J = 'ContextMenuView';
_o365c.$T.initializeBase(this, [ $p$0, $p$3 ]);
this.$1h = $p$1;
this.$1l = $p$4;
this.$j = $p$2;
this.get_$E().set_$2c(10);
this.get_$E().set_$Al(true);
this.$GZ = new _C(this.$$d_$Oj, _0365f.$6.$25);
this.$EK = new _C(this.$$d_$JO, _0365f.$6.$25);
this.set_$1J([]);
}
function $Dt($p$0) {
if ($p$0.$56) {
if ($p$0.get_$5y()) {
$p$0.$B.$QW(_o365c.$1J, new _o365c.$1J($p$0.$1B, $p$0.$2I));
}
else {
if (!$p$0.get_$1Q().get_$O()) {
$Du($p$0);
}
}
}
}
function $Du($p$0) {
$p$0.$4o = null;
if (!$5($p$0.$1B)) {
$p$0.$1B.set_$A3($p$0.get_$1Q().$1S);
$p$0.$1B.set_$A4($p$0.get_$1Q().$d);
}
$p$0.get_$1Q().set_$O(true);
$p$0.$B.$QW(_o365c.$1A, new _o365c.$1A($p$0.get_$1Q().get_$O(), $p$0.$2I, $p$0.get_$1Q().$d));
}
function $Ds($p$0) {
if ($p$0.get_$1Q().get_$O()) {
$p$0.$4l = _js.$2.get_$a().$4Y($p$0.$4l);
$p$0.get_$1Q().set_$O(false);
$p$0.$B.$QW(_o365c.$1A, new _o365c.$1A($p$0.get_$1Q().get_$O(), $p$0.$2I, $p$0.get_$1Q().$d));
}
}
_o365c.$T.prototype = {
$j: null,
$GZ: null,
$EK: null,
$1h: null,
$1l: null,
$1B: null,
$6M: false,
$b: null,
$4o: null,
$4l: null,
$56: true,
$88: false,
get_$HB: function _o365c_$T$get_$HB() {
return this.$1B;
},
set_$HB: function _o365c_$T$set_$HB($p$0) {
if (this.$1B !== $p$0) {
this.$1B = $p$0;
$4(this, 'SubMenu');
if (!$5(this.$b)) {
this.$b.set_$Y(this.$1B);
}
}
return $p$0;
},
get_$Ga: function _o365c_$T$get_$Ga() {
return this.$6M;
},
set_$Ga: function _o365c_$T$set_$Ga($p$0) {
if (this.$6M !== $p$0) {
this.$6M = $p$0;
$4(this, 'ParentMenuIsShown');
if (!this.$6M && !this.get_$5y() && !$5(this.$b)) {
this.get_$1Q().set_$O(false);
}
}
return $p$0;
},
get_$Pr: function _o365c_$T$get_$Pr() {
return this.$56;
},
set_$Pr: function _o365c_$T$set_$Pr($p$0) {
if (this.$56 !== $p$0) {
this.$56 = $p$0;
if (this.$56) {
this.$1.removeAttribute('disabled');
}
else {
this.$1.setAttribute('disabled', 'true');
}
$4(this, 'SubMenuIsEnabled');
}
return $p$0;
},
get_$Pu: function _o365c_$T$get_$Pu() {
return this.$4J;
},
set_$Pu: function _o365c_$T$set_$Pu($p$0) {
if (this.$4J !== $p$0) {
this.$4J = $p$0;
}
return $p$0;
},
get_$r: function _o365c_$T$get_$r() {
return _o365c.$1j.prototype.get_$r.call(this);
},
set_$r: function _o365c_$T$set_$r($p$0) {
_o365c.$1j.prototype.set_$r.call(this, $p$0);
if (!this.get_$r() && !this.get_$5y() && this.get_$1Q().get_$O()) {
$Ds(this);
}
return $p$0;
},
get_$FS: function _o365c_$T$get_$FS() {
return this.$88;
},
set_$FS: function _o365c_$T$set_$FS($p$0) {
if (this.$88 !== $p$0) {
this.$88 = $p$0;
$4(this, 'IsSubMenuHovered');
}
return $p$0;
},
get_$1Q: function _o365c_$T$get_$1Q() {
return this.$Kq();
},
get_$5y: function _o365c_$T$get_$5y() {
return this.$1h.get_$2h() === 'TouchNarrow';
},
$Ey: function _o365c_$T$$Ey($p$0) {
_o365c.$1j.prototype.$Ey.call(this, $p$0);
if (!this.get_$5y()) {
if ($p$0.$Ar.$2I === this.$2I && $p$0.$Ar !== this) {
if (!$5(this.$b) && this.$b.get_$O() && !this.$4l) {
this.$4l = _js.$2.get_$a().$4I(this.get_$3h(), 'HideSubMenuPopup', this.$$d_$LR, 400);
}
}
}
},
$Nq: function _o365c_$T$$Nq($p$0) {
this.$Bt($p$0);
},
$Bt: function _o365c_$T$$Bt($p$0) {
$Dt(this);
},
$GS: function _o365c_$T$$GS($p$0) {
if (this.$56 && this.$1h.get_$2h() === 'Mouse') {
_o365c.$1j.prototype.$GS.call(this, $p$0);
if (!this.get_$5y() && ($5(this.$b) || !this.get_$1Q().get_$O())) {
this.$4o = _js.$2.get_$a().$4I(this.get_$3h(), 'OpenSubMenu', this.$$d_$Oi, 400);
}
}
},
$GT: function _o365c_$T$$GT($p$0) {
_o365c.$E.prototype.$GT.call(this, $p$0);
if (this.$4o) {
this.$4o = _js.$2.get_$a().$4Y(this.$4o);
}
},
$2r: function _o365c_$T$$2r() {
_o365c.$E.prototype.$2r.call(this);
this.$B.$Ca(_o365c.$x, this.$$d_$Kz);
if (!$5(this.$b)) {
this.get_$1Q().$z();
}
},
$2a: function _o365c_$T$$2a() {
_js.$9.prototype.$2a.call(this);
this.$B.$HM(_o365c.$x, this.$$d_$Kz);
if (!$5(this.$b)) {
this.get_$1Q().$1T();
}
},
$5r: function _o365c_$T$$5r() {
_o365c.$1j.prototype.$5r.call(this);
this.$B.$HM(_o365c.$x, this.$$d_$Kz);
if (!$5(this.$b)) {
this.get_$1Q().$k();
}
},
$7n: function _o365c_$T$$7n() {
var $v$0 = new _o365c.$P();
var $v$1 = new _o365c.$I();
$v$1.$2H = this.$GZ;
$v$1.set_$T('RIGHTARROW');
$v$0.set_$1g([ $v$1 ]);
return _o365c.$1j.prototype.$7n.call(this).concat($v$0);
},
$Kq: function _o365c_$T$$Kq() {
if (!this.$b) {
this.$b = _o365c.$H.$ER(this.$1, this.$4J, this.$1B, this.$j, this.$B, this.$1h, this.$1l, null);
this.$b.$1M = this.$1B;
this.$b.$FT = true;
this.$b.$AN = false;
this.$b.set_$K4(true);
this.$b.$Bz = this;
this.$b.set_$GN(this.$$d_$OX);
this.$b.add_$FQ(this.$$d_$OY);
this.$b.$2M(4);
this.$b.add_$Oy(this.$$d_$LG);
var $v$0 = new _o365c.$i(this.$j, this.$B, this.$1l);
$v$0.set_$E5(this);
$v$0.$28 = 7;
$v$0.$5n = _o365c.$T.$F4;
$v$0.$9H = _o365c.$T.$HP;
this.$b.set_$C2($v$0);
if (this.$1h.get_$2h() === 'Mouse') {
this.$b.$3v = false;
var $v$1 = new _o365c.$P();
var $v$2 = new _o365c.$I();
$v$2.set_$T('ESC');
$v$2.$2H = this.$EK;
$v$1.set_$1g([ $v$2 ]);
this.$b.set_$1J([ $v$1 ]);
}
if (this.get_$3F()) {
this.$b.$z();
}
}
return this.$b;
},
$Oj: function _o365c_$T$$Oj() {
$Dt(this);
for (var $v$0 = 0; $v$0 < this.$1B.$s.get_$H(); $v$0++) {
var $v$1 = this.$1B.$s.get_$QI($v$0);
if (!$5($v$1) && $v$1.get_$CK()) {
this.$1B.set_$u($v$1);
break;
}
}
},
$JO: function _o365c_$T$$JO() {
this.$b.$1S.$p();
this.$2f.$p();
},
$Kz: function _o365c_$T$$Kz($p$0) {
if ($p$0.$53 === this.$2I) {
this.set_$Ga($p$0.$1o);
}
},
$Oi: function _o365c_$T$$Oi() {
this.$4o = null;
if (this.$6M) {
$Du(this);
}
},
$LR: function _o365c_$T$$LR() {
this.$4l = _js.$2.get_$a().$4Y(this.$4l);
if (!this.get_$1Q().get_$1u() && !this.get_$1u()) {
$Ds(this);
}
},
$LG: function _o365c_$T$$LG($p$0, $p$1) {
if ($p$1 === _js.$3.$3I.$2Y) {
this.set_$FS(($p$0).get_$1u());
}
},
$OY: function _o365c_$T$$OY($p$0, $p$1) {
if (this.$1B) {
this.$1B.set_$O(($p$0).get_$O());
}
},
$OX: function _o365c_$T$$OX($p$0) {
$p$0.$1T();
$p$0.set_$Y(null);
$p$0.$k();
if (this.$b === $p$0) {
this.$b = null;
}
}
}
_o365c.$1A = function _o365c_$1A($p$0, $p$1, $p$2) {
this.$5x = $p$0;
this.$53 = $p$1;
this.$Pt = $p$2;
}
_o365c.$1A.prototype = {
$5x: false,
$53: 0,
$Pt: 0
}
_o365c.$b = function _o365c_$b($p$0) {
_o365c.$b.initializeBase(this, [ $p$0 ]);
this.$2M(416);
}
function $9U($p$0) {
if ($p$0.$10) {
$p$0.$10.$4h();
}
}
_o365c.$b.prototype = {
$10: null,
$C0: false,
$Gc: false,
$8k: true,
get_$r: function _o365c_$b$get_$r() {
return _o365c.$v.prototype.get_$r.call(this);
},
set_$r: function _o365c_$b$set_$r($p$0) {
_o365c.$v.prototype.set_$r.call(this, $p$0);
if (this.get_$r() && this.$8k) {
$9U(this);
}
return $p$0;
},
get_$Oq: function _o365c_$b$get_$Oq() {
return this.$8k;
},
set_$Oq: function _o365c_$b$set_$Oq($p$0) {
this.$8k = $p$0;
if (this.$8k && this.get_$r()) {
$9U(this);
}
return $p$0;
},
get_$1d: function _o365c_$b$get_$1d() {
if (this.$10 && this.$Gc) {
return this.$10.get_$1d();
}
return _js.$3.prototype.get_$1d.call(this);
},
set_$1d: function _o365c_$b$set_$1d($p$0) {
if (this.$10 && this.$Gc) {
this.$10.set_$1d($p$0);
}
else {
_js.$3.prototype.set_$1d.call(this, $p$0);
}
return $p$0;
},
get_$76: function _o365c_$b$get_$76() {
if (this.$10) {
return this.$10.get_$E().get_$6X();
}
return _o365c.$v.prototype.get_$76.call(this);
},
set_$76: function _o365c_$b$set_$76($p$0) {
if (this.$10) {
this.$10.get_$E().set_$6X($p$0);
}
else {
_o365c.$v.prototype.set_$76.call(this, $p$0);
}
return $p$0;
},
$4h: function _o365c_$b$$4h() {
return (this.$10) ? this.$10.$4h() : _js.$9.prototype.$4h.call(this);
},
$52: function _o365c_$b$$52() {
_o365c.$v.prototype.$52.call(this);
if (!this.$I) {
this.$10 = null;
}
else {
this.$10 = this.$I.$1t('FocusControl');
if (this.$10) {
this.$10.get_$E().set_$6X(_o365c.$v.prototype.get_$76.call(this));
}
}
},
$Bu: function _o365c_$b$$Bu($p$0) {
_o365c.$v.prototype.$Bu.call(this, $p$0);
if (!this.$C0 && $p$0.get_$1q() === this.$1 && this.$10) {
$p$0.$1y();
$p$0.$1P();
$9U(this);
}
},
$Bw: function _o365c_$b$$Bw($p$0) {
_js.$3.prototype.$Bw.call(this, $p$0);
if ($p$0.get_$13() === 9) {
this.$C0 = !!this.$10 && (this.$10.$1 === $p$0.get_$1q() || this.$10.$1.contains($p$0.get_$1q()));
}
},
$GQ: function _o365c_$b$$GQ($p$0) {
_js.$3.prototype.$GQ.call(this, $p$0);
this.$C0 = false;
}
}
_o365c.$2C = function _o365c_$2C($p$0) {
_o365c.$2C.initializeBase(this, [ $p$0 ]);
this.get_$E().set_$2c(41);
}
_o365c.$2D = function _o365c_$2D($p$0, $p$1) {
_o365c.$2D.initializeBase(this, [ $p$0 ]);
if ($p$1) {
this.$4p = $p$1;
this.$1.appendChild(this.$4p.$1);
}
}
_o365c.$2D.prototype = {
$4p: null,
$2r: function _o365c_$2D$$2r() {
_js.$3.prototype.$2r.call(this);
if (this.$4p) {
this.$4p.$z();
}
},
$2a: function _o365c_$2D$$2a() {
_js.$3.prototype.$2a.call(this);
if (this.$4p) {
this.$4p.$1T();
}
}
}
_o365c.$18 = function _o365c_$18($p$0, $p$1) {
_o365c.$18.initializeBase(this, [ $p$0, $p$1 ]);
}
function $IC($p$0, $p$1) {
return new _o365c.$2D(window.document.createElement('td'), $p$1);
}
function $IB($p$0) {
var $v$0 = new _js.$9(window.document.createElement('div'));
$v$0.set_$D('HorizontalPanelContainerView');
$p$0.$1.appendChild($v$0.$1);
$v$0.$z();
$p$0.$42 = $v$0.$I.$1t('Container');
for (var $v$1 = 0; $v$1 < $p$0.$11.length; $v$1++) {
var $v$2 = $p$0.$11[$v$1];
$p$0.$42.$1.appendChild($v$2.$1);
}
}
_o365c.$18.prototype = {
$42: null,
$8g: function _o365c_$18$$8g() {
_js.$3.prototype.$8g.call(this);
$IB(this);
},
$2r: function _o365c_$18$$2r() {
_o365c.$2M.prototype.$2r.call(this);
this.$42.$z();
for (var $v$0 = 0; $v$0 < this.$11.length; $v$0++) {
(this.$11[$v$0]).$z();
}
},
$2a: function _o365c_$18$$2a() {
_o365c.$2M.prototype.$2a.call(this);
this.$42.$1T();
for (var $v$0 = 0; $v$0 < this.$11.length; $v$0++) {
(this.$11[$v$0]).$1T();
}
},
$7w: function _o365c_$18$$7w($p$0, $p$1) {
if ($p$0.$1.parentNode && $p$0.$1.parentNode.nodeType !== 11) {
throw Error.argument('Can\'t add already added control to panel');
}
var $v$0 = $IC(this, $p$0);
Array.insert(this.$11, $p$1, $v$0);
if (this.$42) {
var $v$1 = (!$p$1) ? this.$42.$1.firstChild : (this.$11[$p$1 - 1]).$1.nextSibling;
this.$42.$1.insertBefore($v$0.$1, $v$1);
if (this.get_$3F()) {
$v$0.$z();
}
}
}
}
_o365c.$s = function _o365c_$s($p$0) {
_o365c.$s.initializeBase(this, [ $p$0 ]);
this.get_$E().set_$2c(47);
this.get_$EA().addClass('owaimg');
}
_o365c.$s.prototype = {
$d: null,
get_$n: function _o365c_$s$get_$n() {
return this.$d;
},
set_$n: function _o365c_$s$set_$n($p$0) {
if (this.$d !== $p$0) {
var $v$0 = this.$d;
this.$d = $p$0;
$5E(this, ($5($v$0)) ? '' : $v$0.get_$5W(), ($5(this.$d)) ? '' : this.$d.get_$5W());
$4(this, 'Id');
}
return $p$0;
},
get_$Iq: function _o365c_$s$get_$Iq() {
return this.$1.getAttribute('title');
},
set_$Iq: function _o365c_$s$set_$Iq($p$0) {
this.$1.setAttribute('title', $p$0);
return $p$0;
}
}
_o365c.$2F = function _o365c_$2F($p$0) {
_o365c.$2F.initializeBase(this, [ $p$0 ]);
}
_o365c.$R = function _o365c_$R($p$0) {
_o365c.$R.initializeBase(this, [ $p$0 ]);
var $v$0 = $p$0.lastChild;
if (!$v$0 || $v$0.nodeType !== 3) {
$v$0 = document.createTextNode('');
$p$0.appendChild($v$0);
}
this.$4N = $v$0;
}
_o365c.$R.prototype = {
$4N: null,
$1C: null,
get_$21: function _o365c_$R$get_$21() {
return this.$1C;
},
set_$21: function _o365c_$R$set_$21($p$0) {
if (this.$1C !== $p$0) {
this.$1C = $p$0;
if (!this.$4N.parentNode || this.get_$Pj()) {
while (this.$1.hasChildNodes()) {
this.$1.removeChild(this.$1.firstChild);
}
var $v$0 = (!$p$0) ? '' : $p$0;
this.$4N = document.createTextNode($v$0);
this.$1.appendChild(this.$4N);
}
else {
if (!$p$0) {
this.$4N.nodeValue = '';
}
else {
this.$4N.nodeValue = $p$0;
}
}
$4(this, 'Text');
}
return $p$0;
},
get_$Pj: function _o365c_$R$get_$Pj() {
return false;
},
$5r: function _o365c_$R$$5r() {
this.$4N = null;
_js.$3.prototype.$5r.call(this);
}
}
_o365c.$e = function _o365c_$e($p$0) {
_o365c.$e.initializeBase(this, [ $p$0 ]);
var $v$0 = this.$1.getAttribute('href');
if ($v$0) {
this.set_$5p($v$0);
}
this.set_$1k(7);
this.set_$1F(!$5(this.$2T));
}
function $IE($p$0, $p$1) {
if (!$5(window.getSelection)) {
var $v$0 = window.getSelection();
if ($v$0.toString().length > 0) {
var $v$1 = $v$0.anchorNode;
if ($v$1.parentNode === $p$1.get_$1q()) {
$p$1.$1P();
return true;
}
}
}
else if (!$5(document.selection)) {
var $v$2 = document.selection.createRange();
if ($v$2) {
var $v$3 = $v$2.text;
if (!_js.$7.$1U($v$3)) {
var $v$4 = $v$2.parentElement();
if ($v$4 === $p$1.get_$1q() || $v$4.parentNode === $p$1.get_$1q()) {
$p$1.$1P();
return true;
}
}
}
}
return false;
}
_o365c.$e.prototype = {
$2T: null,
$1b: null,
$1w: false,
get_$C4: function _o365c_$e$get_$C4() {
return this.$1w;
},
set_$C4: function _o365c_$e$set_$C4($p$0) {
if (this.$1w !== $p$0) {
this.$1w = $p$0;
}
return $p$0;
},
get_$5p: function _o365c_$e$get_$5p() {
return this.$2T;
},
set_$5p: function _o365c_$e$set_$5p($p$0) {
if (this.$2T !== $p$0) {
this.$2T = $p$0;
this.$1.setAttribute('href', $p$0);
this.set_$1F(!$5(this.$2T));
$4(this, 'Href');
}
return $p$0;
},
get_$4L: function _o365c_$e$get_$4L() {
return this.$1b;
},
set_$4L: function _o365c_$e$set_$4L($p$0) {
if (this.$1b !== $p$0) {
this.$1b = $p$0;
if (!_js.$7.$1L(this.$1b)) {
this.$1.setAttribute('target', this.$1b);
}
else {
this.$1.removeAttribute('target');
}
$4(this, 'TargetWindow');
}
return $p$0;
},
$Nq: function _o365c_$e$$Nq($p$0) {
if ($IE(this, $p$0)) {
return;
}
_o365c.$E.prototype.$Nq.call(this, $p$0);
if (this.$1w) {
$p$0.$1P();
}
},
$GO: function _o365c_$e$$GO() {
if (!this.get_$1F()) {
this.$1.removeAttribute('href');
}
$3n(this);
}
}
_o365c.$1 = function _o365c_$1($p$0, $p$1) {
this.$$d_$Nw = Function.createDelegate(this, this.$Nw);
this.$$d_$Gr = Function.createDelegate(this, this.$Gr);
this.$$d_$74 = Function.createDelegate(this, this.$74);
this.$$d_$OA = Function.createDelegate(this, this.$OA);
this.$$d_$Np = Function.createDelegate(this, this.$Np);
this.$$d_$Ns = Function.createDelegate(this, this.$Ns);
this.$$d_$PT = Function.createDelegate(this, this.$PT);
this.$$d_$KU = Function.createDelegate(this, this.$KU);
this.$$d_$KT = Function.createDelegate(this, this.$KT);
this.$$d_$KW = Function.createDelegate(this, this.$KW);
this.$$d_$KV = Function.createDelegate(this, this.$KV);
this.$$d_$PV = Function.createDelegate(this, this.$PV);
this.$$d_$PU = Function.createDelegate(this, this.$PU);
this.$$d_$PZ = Function.createDelegate(this, this.$PZ);
this.$$d_$PX = Function.createDelegate(this, this.$PX);
this.$$d_$PY = Function.createDelegate(this, this.$PY);
this.$$d_$PW = Function.createDelegate(this, this.$PW);
this.$FY = 0;
this.$Pn = 1;
this.$63 = new Sys.UI.Point(-1, -1);
_o365c.$1.initializeBase(this, [ $p$0 ]);
this.$1h = $p$1;
}
function $IL($p$0, $p$1) {
var $v$0 = null;
if ($p$0.$3C) {
$v$0 = $p$0.$3C.$Q5($p$1);
}
else {
$v$0 = $p$1;
}
return $v$0;
}
function $IU($p$0, $p$1) {
if ($p$0.$3B === $p$1) {
return;
}
$6q($p$0);
$p$1.set_$BF(true);
$p$0.$3B = $p$1;
var $v$0 = $p$1.get_$5g();
var $$t_3 = this;
$v$0.$9('mouseup', function($p$1_0) {
$6q($p$0);
}, 'ListViewIsTouched');
}
function $6q($p$0) {
if ($p$0.$3B) {
$p$0.$3B.set_$BF(false);
$p$0.$3B.get_$5g().$J('mouseup', 'ListViewIsTouched');
$p$0.$3B.get_$5g().$J('mouseleave', 'ListViewIsTouched');
$p$0.$3B = null;
}
}
function $6r($p$0, $p$1) {
var $v$0 = $p$0.$S.$P.get_$H();
for (var $v$1 = 0; $v$1 < $v$0; $v$1++) {
var $v$2 = $p$0.$S.$P.get_$QI($v$1);
if ($p$0.$3E && _0365m.$r.isInstanceOfType($v$2)) {
continue;
}
var $v$3 = $9X($p$0, ($v$2).get_$9i());
if ($p$0.$74($p$1, $v$3)) {
return $v$1;
}
}
return -1;
}
function $9X($p$0, $p$1) {
var $v$0 = null;
if (!$5($p$0.$3C)) {
$v$0 = $p$0.$3C.$PR($p$1);
}
else {
$v$0 = $p$1;
}
return $v$0;
}
function $9V($p$0, $p$1, $p$2, $p$3) {
$4T($p$0, $p$1, $p$2, $p$3);
}
function $3o($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
if ($p$0.$S) {
var $v$0 = $p$1 + $p$2 - 1;
var $v$1 = false;
for (var $v$2 = $v$0, $v$3 = $p$2 - 1; $v$2 >= $p$1; $v$2--, $v$3--) {
if ($p$0.get_$u() === $p$3[$v$3]) {
$v$1 = true;
}
$IS($p$0, $v$2, $p$4, $p$5);
}
$p$0.$LF($v$1);
}
}
function $IS($p$0, $p$1, $p$2, $p$3) {
var $v$0 = $p$0.$S.$P.get_$QI($p$1);
if ($v$0) {
$p$0.$PK($v$0, $p$1, $p$2, $p$3);
}
}
function $6t($p$0, $p$1) {
if ($p$0.$Pq && ($p$1.$5X() || $p$1.$90())) {
$p$1.$1y();
}
}
function $IT($p$0) {
if ($p$0.$S && $p$0.$S.$P) {
var $v$0 = $p$0.$S.$P;
var $v$1 = $v$0.get_$H();
for (var $v$2 = 0; $v$2 < $v$1; $v$2++) {
if (_o365c.$v.isInstanceOfType($v$0.get_$QI($v$2))) {
$p$0.$6U($v$0.get_$QI($v$2));
break;
}
}
}
}
function $IQ($p$0) {
return ($p$0.$1 === document.activeElement) || (!!document.activeElement && $p$0.$1.contains(document.activeElement));
}
function $9W($p$0) {
$p$0.$14 = 0;
$p$0.$x = 0;
$p$0.$81 = false;
$p$0.$7z = false;
$p$0.$Gd = false;
if ($p$0.$5M) {
$p$0.$5M = _js.$2.get_$a().$4Y($p$0.$5M);
}
}
function $IN($p$0, $p$1) {
return $IL($p$0, $IO($p$0, $p$1));
}
function $Da($p$0) {
_js.Trace.logInfo($p$0.get_$3h(), 'ListView::CompleteChunking: panel children count: {0}, data count: {1}', $p$0.$S.$P.get_$H(), $p$0.$7m());
$9W($p$0);
$p$0.$AU();
if ($p$0.$5w) {
$p$0.$Gr();
}
}
function $9Y($p$0, $p$1, $p$2) {
$p$0.$81 = true;
if (!$p$0.$7z) {
$p$0.$7z = true;
var $$t_2 = this;
$p$0.$5M = _js.$2.get_$a().$4I($p$0.get_$3h(), 'InsertPanelItems', function() {
$IG($p$0, $p$1, $p$2);
}, 0);
}
else {
}
}
function $IG($p$0, $p$1, $p$2) {
$p$0.$5M = null;
$p$0.$7z = false;
if ($p$0.get_$Cv() && $p$0.$Gd) {
$p$0.$Jg = $p$1;
$p$0.$Ji = $p$2;
return;
}
if (!$p$0.$3G) {
if ($p$0.$14 > $p$0.$S.$P.get_$H() || $p$0.$14 >= $p$0.$7m() || !$p$0.$x) {
if ($p$1) {
$p$1();
}
$Da($p$0);
}
else {
$4T($p$0, $p$0.$14, $p$0.$x, $p$2, $p$1);
}
}
}
function $6v($p$0, $p$1) {
var $v$0 = $6r($p$0, $p$1);
var $v$1 = $p$0.$S.$P.get_$QI($v$0);
if ($v$1 && !$v$1.$1A) {
$p$0.set_$u($p$1);
return true;
}
return false;
}
function $6s($p$0, $p$1, $p$2) {
$p$2 = $p$2 || 1;
var $v$0 = $p$0.get_$2w();
if ($v$0 && $v$0.$40) {
return;
}
var $v$1 = $p$0.$Kp();
switch ($p$1) {
case 0:
var $v$2 = $p$0.get_$16().get_$H();
for (var $v$3 = Math.min($v$1 + $p$2, $v$2 - 1); $v$3 < $v$2; $v$3++) {
if ($6v($p$0, $p$0.get_$16().get_$QI($v$3))) {
return;
}
}
break;
case 1:
for (var $v$4 = Math.max($v$1 - $p$2, 0); $v$4 >= 0; $v$4--) {
if ($6v($p$0, $p$0.get_$16().get_$QI($v$4))) {
return;
}
}
break;
default:
return;
}
}
function $Db($p$0, $p$1) {
var $v$0 = ($p$0.get_$2G()) ? $6r($p$0, $p$0.get_$2G()) : -1;
var $v$1 = null;
switch ($p$1) {
case 0:
var $v$2 = $p$0.get_$16().get_$H();
for (var $v$3 = $v$0 + 1; $v$3 < $v$2; $v$3++) {
$v$1 = $p$0.get_$16().get_$QI($v$3);
if ($6u($p$0, $v$1)) {
$p$0.set_$2G($v$1);
return;
}
}
break;
case 1:
for (var $v$4 = $v$0 - 1; $v$4 >= 0; $v$4--) {
$v$1 = $p$0.get_$16().get_$QI($v$4);
if ($6u($p$0, $v$1)) {
$p$0.set_$2G($v$1);
return;
}
}
break;
default:
return;
}
}
function $6u($p$0, $p$1) {
var $v$0 = $6r($p$0, $p$1);
if ($v$0 !== -1) {
var $v$1 = $p$0.$S.$P.get_$QI($v$0);
if ($v$1) {
$v$1.set_$1d($p$0.get_$Dz());
return $v$1.$4h();
}
}
return false;
}
function $IO($p$0, $p$1) {
if ($p$0.$3E) {
return $p$0.$q.get_$QI($p$1);
}
else {
return $p$0.$1m.get_$QI($p$1);
}
}
function $IP($p$0, $p$1, $p$2) {
switch ($p$1.$2O) {
case 0:
$9Z($p$0, $p$1.$15, $p$1.$y, $p$2);
return true;
case 2:
$9a($p$0, $p$1.$15, $p$1.$1v, $p$2);
return true;
case 1:
$9a($p$0, $p$1.$15, $p$1.$y, $p$2);
$9Z($p$0, $p$1.$5B, $p$1.$y, $p$2);
return true;
case 3:
$9a($p$0, $p$1.$15, $p$1.$1v, 0);
$9Z($p$0, $p$1.$15, $p$1.$y, 0);
return true;
}
return false;
}
function $9Z($p$0, $p$1, $p$2, $p$3) {
var $v$0 = $p$0.$14 + $p$0.$x;
if ($p$1 >= $p$0.$14) {
if ($p$1 <= $v$0) {
$p$0.$x += $p$2.length;
}
else {
$4T($p$0, $p$1 - $p$0.$x, $p$2.length, $p$3, null, true, $p$1);
}
}
else {
$p$0.$14 += $p$2.length;
$4T($p$0, $p$1, $p$2.length, $p$3, null, true, $p$1);
}
}
function $9a($p$0, $p$1, $p$2, $p$3) {
var $v$0 = $p$0.$14 + $p$0.$x;
var $v$1 = $p$2.length;
if ($p$1 >= $p$0.$14) {
if ($p$1 < $v$0) {
if ($p$1 + $v$1 <= $v$0) {
$p$0.$x -= $v$1;
}
else {
var $v$2 = $p$1 + $v$1 - $v$0;
var $v$3 = new Array($v$2);
for (var $v$5 = 0, $v$6 = $v$1 - $v$2; $v$6 < $v$1; $v$6++, $v$5++) {
$v$3[$v$5] = $p$2[$v$6];
}
$3o($p$0, $v$0 - $p$0.$x, $v$2, $v$3, 2, $p$3);
var $v$4 = $v$1 - $v$2;
$p$0.$x -= $v$4;
}
}
else {
if ($p$1 !== $v$0) {
}
$3o($p$0, $p$1 - $p$0.$x, $v$1, $p$2, 2, $p$3);
}
}
else {
if ($p$1 + $v$1 <= $p$0.$14) {
$p$0.$14 -= $v$1;
$3o($p$0, $p$1, $v$1, $p$2, 2, $p$3);
}
else {
var $v$7 = $p$0.$14 - $p$1;
var $v$8 = new Array($v$7);
for (var $v$9 = 0; $v$9 < $v$7; $v$9++) {
$v$8[$v$9] = $p$2[$v$9];
}
$3o($p$0, $p$1, $v$7, $v$8, 2, $p$3);
$p$0.$14 -= $v$7;
if ($v$1 - $v$7 <= $p$0.$x) {
$p$0.$x -= $v$1 - $v$7;
}
else {
var $v$A = $v$1 - $v$7 - $p$0.$x;
$p$0.$x = 0;
$v$8 = new Array($v$A);
for (var $v$B = 0, $v$C = $v$1 - $v$A; $v$C < $v$1; $v$C++, $v$B++) {
$v$8[$v$B] = $p$2[$v$C];
}
$3o($p$0, $p$0.$14, $v$A, $v$8, 2, $p$3);
}
}
}
}
function $IF($p$0) {
var $v$0 = ($p$0.$3E) ? $p$0.$q : $p$0.$1m;
if ($v$0) {
if (_0365f.$n.$$(_0365m.$1M).isInstanceOfType($v$0)) {
($v$0).add_$Qg($p$0.$$d_$Nw);
}
else {
$v$0.add_$2P($p$0.$$d_$Ns);
}
}
}
function $Dc($p$0) {
var $v$0 = ($p$0.$3E) ? $p$0.$q : $p$0.$1m;
if ($v$0) {
if (_0365f.$n.$$(_0365m.$1M).isInstanceOfType($v$0)) {
($v$0).remove_$Qg($p$0.$$d_$Nw);
}
else {
$v$0.remove_$2P($p$0.$$d_$Ns);
}
}
}
function $IV($p$0, $p$1) {
if ($p$0.$3D) {
if (!$p$0.$q || $p$1) {
if ($p$0.$q) {
$p$0.$q.set_$1p(null);
}
$p$0.set_$Ew(new _0365m.$B($p$0.$3D));
$p$0.$q.set_$1p($p$0.$1m);
}
else if ($p$0.$q) {
$p$0.$q.set_$Ku($p$0.$3D);
}
}
else if ($p$0.$q) {
$p$0.set_$Ew(null);
}
}
function $5G($p$0) {
if (!$p$0.get_$3F()) {
$p$0.$8r = true;
return;
}
$IH($p$0);
$p$0.$KL();
if ($p$0.$2p) {
$p$0.$6U($p$0.get_$2w());
}
}
function $IH($p$0) {
$9W($p$0);
if ($p$0.$S) {
var $v$0 = $p$0.$S.$P.get_$H();
for (var $v$1 = 0; $v$1 < $v$0; $v$1++) {
var $v$2 = $p$0.$S.$P.get_$QI(0);
$p$0.$S.$P.$CH(0);
$p$0.$9u($v$2);
}
}
}
function $IM($p$0, $p$1) {
if (!$5($p$0.$3C) && !$5($p$1)) {
$p$0.$3C.$K6($p$1);
}
}
function $II($p$0, $p$1) {
var $v$0 = $p$0.$Jc();
var $v$1 = $p$0.$q.get_$QI($p$1);
$v$0.set_$Y($v$1);
if ($v$1.get_$2W()) {
$v$0.set_$2W(true);
}
$v$0.set_$20($p$0);
if ($p$0.$92 && $p$0.$4V) {
$v$0.$z();
}
return $v$0;
}
function $IK($p$0, $p$1) {
if ($p$0.$3E) {
var $v$0 = $p$0.$q.get_$QI($p$1);
if (_0365m.$r.isInstanceOfType($v$0)) {
return $II($p$0, $p$1);
}
}
return $p$0.$Jf($p$1);
}
function $IJ($p$0, $p$1, $p$2, $p$3) {
var $v$0 = $IK($p$0, $p$2);
Array.add($p$3, $v$0);
}
function $4T($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6) {
if (!$p$0.$S) {
return;
}
if ($p$2 <= 0) {
return;
}
if (!$p$0.$1m) {
return;
}
var $v$0 = $p$0.get_$Cv();
var $v$1 = ($p$5 || $p$3 === 5) ? false : $v$0;
var $v$2 = ($v$1) ? $p$0.$4U : $p$2;
if ($5($p$6)) {
if (!$v$1 || $p$3 !== 3) {
$p$6 = $p$1;
}
else {
$p$6 = $p$1 + $p$2 - $v$2;
}
}
var $v$3 = [];
if ($p$2 < $v$2) {
$v$2 = $p$2;
}
for (var $v$5 = 0; $v$5 < $v$2; $v$5++) {
var $v$6 = $p$1 + $v$5;
var $v$7 = $p$6 + $v$5;
$IJ($p$0, $v$6, $v$7, $v$3);
}
var $v$4 = $v$3.length;
$p$0.$Il($p$1, $v$3, $p$3);
$p$0.$OB($p$1, $v$4, $p$3);
if ($v$1) {
$IR($p$0, $p$2, $p$1, $v$4, $p$3, $p$4);
}
else if (!$v$0) {
$p$0.$AU();
}
}
function $IR($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
$p$1 -= $p$3;
if ($p$4 !== 3) {
$p$2 += $p$3;
}
if (!$p$1) {
if ($p$5) {
$p$5();
}
$Da($p$0);
return;
}
$p$0.$14 = $p$2;
$p$0.$x = $p$1;
if ($p$4 === 1) {
var $v$0 = $p$0.$Ko($p$4);
if ($v$0 > 0) {
if ($v$0 > $p$0.$x) {
$v$0 = $p$0.$x;
}
$4T($p$0, $p$0.$14, $v$0, 0, null, true, $p$0.$14);
$p$0.$14 += $v$0;
$p$0.$x -= $v$0;
if ($p$0.$x > 0) {
$9Y($p$0, $p$5, 2);
}
else {
$p$0.$AU();
}
}
else if (!$v$0) {
$9Y($p$0, $p$5, 2);
}
else {
$4T($p$0, $p$0.$14, $p$0.$x, $p$4, $p$5);
}
}
else {
$9Y($p$0, $p$5, $p$4);
}
}
_o365c.$1.prototype = {
$4U: 10000,
$QB: false,
$7z: false,
$CP: false,
$Pq: false,
$H1: false,
$KA: true,
$14: 0,
$x: 0,
$H0: 0,
$BG: null,
$S: null,
$5c: null,
$Ag: null,
$3C: null,
$1m: null,
$t: null,
$9f: null,
$2t: null,
$61: null,
$5z: null,
$4V: false,
$3D: null,
$3E: false,
$q: null,
$8r: false,
$K3: false,
$8v: false,
$Eq: false,
$Ac: false,
$3B: null,
$AV: null,
$Bv: null,
$2p: false,
$8F: 0,
$BB: false,
$KZ: false,
$1h: null,
$81: false,
$Gd: false,
$5w: false,
$92: false,
$Jg: null,
$5M: null,
$Ji: 0,
get_$4r: function _o365c_$1$get_$4r() {
return (!this.$61 || !this.$61.length) ? 'div' : this.$61;
},
set_$4r: function _o365c_$1$set_$4r($p$0) {
if (this.$61 !== $p$0) {
this.$61 = $p$0;
$4(this, 'ItemTagName');
}
return $p$0;
},
get_$4q: function _o365c_$1$get_$4q() {
return (!this.$5z || !this.$5z.length) ? null : this.$5z;
},
set_$4q: function _o365c_$1$set_$4q($p$0) {
if (this.$5z !== $p$0) {
this.$5z = $p$0;
$4(this, 'ItemClassName');
}
return $p$0;
},
get_$60: function _o365c_$1$get_$60() {
return this.$BG;
},
set_$60: function _o365c_$1$set_$60($p$0) {
if (this.$BG !== $p$0) {
this.$BG = $p$0;
$4(this, 'ItemFactory');
}
return $p$0;
},
get_$7f: function _o365c_$1$get_$7f() {
return this.$2m(_o365c.$1.$AQ);
},
set_$7f: function _o365c_$1$set_$7f($p$0) {
this.$2N(_o365c.$1.$AQ, $p$0);
return $p$0;
},
get_$16: function _o365c_$1$get_$16() {
return this.$1m;
},
set_$16: function _o365c_$1$set_$16($p$0) {
if ($p$0 !== this.get_$16()) {
$Dc(this);
this.$1m = $p$0;
if (this.$3E) {
if (!this.$q) {
$IV(this, true);
}
else {
this.$q.set_$1p(this.$1m);
}
}
$IF(this);
$5G(this);
$4(this, 'DataSource');
}
return $p$0;
},
get_$u: function _o365c_$1$get_$u() {
return this.$t;
},
set_$u: function _o365c_$1$set_$u($p$0) {
if (this.$3G) {
return $p$0;
}
if ($p$0 === this.$t) {
return $p$0;
}
var $v$0 = this.get_$2w();
if ($v$0) {
$v$0.set_$r(false);
}
if (!$p$0) {
}
this.set_$Lg($p$0);
$v$0 = this.get_$2w();
if ($v$0) {
$v$0.set_$r(true);
if (this.$2p) {
this.$6U(this.get_$2w());
if (this.$I) {
this.$I.$Pb($v$0);
}
}
}
this.set_$M7(0);
$4(this, 'SelectedItem');
return $p$0;
},
get_$2G: function _o365c_$1$get_$2G() {
return this.$9f;
},
set_$2G: function _o365c_$1$set_$2G($p$0) {
this.$9f = $p$0;
return $p$0;
},
get_$EW: function _o365c_$1$get_$EW() {
return this.$5c;
},
set_$EW: function _o365c_$1$set_$EW($p$0) {
if ($p$0 !== this.$5c) {
this.$5c = $p$0;
$5G(this);
$4(this, 'DataTemplateId');
}
return $p$0;
},
get_$H2: function _o365c_$1$get_$H2() {
return this.$2m(_o365c.$1.$CQ);
},
set_$H2: function _o365c_$1$set_$H2($p$0) {
this.$2N(_o365c.$1.$CQ, $p$0);
return $p$0;
},
get_$2w: function _o365c_$1$get_$2w() {
if (this.$t && this.$S) {
var $v$0 = $6r(this, this.$t);
if ($v$0 !== -1) {
return this.$S.$P.get_$QI($v$0);
}
}
return null;
},
get_$M7: function _o365c_$1$get_$M7() {
return this.$8F;
},
set_$M7: function _o365c_$1$set_$M7($p$0) {
if (this.$8F !== $p$0) {
this.$8F = $p$0;
$4(this, 'LastSelectionSource');
}
return $p$0;
},
get_$FP: function _o365c_$1$get_$FP() {
return this.$BB;
},
set_$FP: function _o365c_$1$set_$FP($p$0) {
if (this.$BB !== $p$0) {
this.$BB = $p$0;
$4(this, 'IsSelectedItemExpanded');
}
return $p$0;
},
get_$1f: function _o365c_$1$get_$1f() {
return '#ListView';
},
get_$3h: function _o365c_$1$get_$3h() {
return _0365f.$6.$4t;
},
get_$Lg: function _o365c_$1$get_$Lg() {
return this.$t;
},
set_$Lg: function _o365c_$1$set_$Lg($p$0) {
if (this.$t !== $p$0) {
this.$t = $p$0;
this.$KS();
this.set_$2G($p$0);
}
return $p$0;
},
get_$Ew: function _o365c_$1$get_$Ew() {
return this.$q;
},
set_$Ew: function _o365c_$1$set_$Ew($p$0) {
if (this.$q !== $p$0) {
if (this.$q) {
this.$q.remove_$2P(this.$$d_$Ns);
this.$q.$k();
}
this.$q = $p$0;
}
return $p$0;
},
get_$LL: function _o365c_$1$get_$LL() {
return false;
},
get_$Cv: function _o365c_$1$get_$Cv() {
return this.$QB;
},
get_$Dz: function _o365c_$1$get_$Dz() {
if (this.get_$1d() >= 0) {
return this.get_$1d();
}
return 0;
},
$Br: function _o365c_$1$$Br() {
$Dc(this);
if (this.$S) {
var $v$0 = this.$S.$P.get_$H();
for (var $v$1 = 0; $v$1 < $v$0; $v$1++) {
this.$9u(this.$S.$P.get_$QI($v$1));
}
this.$S.$P.$5Q();
}
if (this.$4V) {
var $v$2 = _o365c.$1.$4u[this.$i];
if ($v$2) {
var $v$3 = $v$2.length;
for (var $v$4 = 0; $v$4 < $v$3; $v$4++) {
var $v$5 = $v$2[$v$4];
this.$K0($v$5);
$v$5.$B3 = false;
}
}
}
_js.$9.prototype.$Br.call(this);
},
$5r: function _o365c_$1$$5r() {
this.set_$16(null);
this.$2t = null;
this.$9f = null;
this.$t = null;
$6q(this);
$9W(this);
_js.$3.prototype.$5r.call(this);
},
$2r: function _o365c_$1$$2r() {
_js.$9.prototype.$2r.call(this);
if (this.$8r) {
$5G(this);
this.$8r = false;
}
if (this.$Ac) {
this.$3i();
}
},
$8g: function _o365c_$1$$8g() {
_js.$9.prototype.$8g.call(this);
if (this.$2p) {
this.$2M(524288);
}
},
$52: function _o365c_$1$$52() {
_js.$9.prototype.$52.call(this);
if (this.$I) {
var $v$0 = this.$I.$1t('ListPanel');
if (_o365c.$2M.isInstanceOfType($v$0)) {
this.$S = $v$0;
this.$S.set_$1k(0);
this.$S.set_$5J(null);
if (this.$4V && this.$92) {
this.$S.$H8 = true;
}
}
}
else {
this.$S = null;
}
this.$PN();
},
$PN: function _o365c_$1$$PN() {
if (!this.get_$16()) {
return;
}
$5G(this);
},
$Jf: function _o365c_$1$$Jf($p$0) {
var $v$0 = this.$Jd($p$0);
if (this.$KA && !$v$0.get_$FU()) {
$v$0.add_$GX(this.$$d_$Np);
}
if (this.$92 && this.$4V && !$v$0.get_$3F()) {
$v$0.$z();
}
if ($v$0.get_$FU() && !$v$0.$B3) {
this.$F6($v$0);
}
$v$0.set_$4t(this);
return $v$0;
},
$F6: function _o365c_$1$$F6($p$0) {
var $v$0 = $p$0.get_$5g();
var $$t_G = this;
var $v$1 = function($p$1_0) {
startMeasure('Switch start');
$$t_G.$OG($p$0, $p$1_0);
};
this.$La($v$0, $v$1);
var $$t_H = this;
var $v$2 = function($p$1_0) {
$$t_H.$OM($p$0, $p$1_0);
};
$v$0.$9('mouseup', $v$2, this.get_$1f());
var $$t_I = this;
var $v$3 = function($p$1_0) {
startMeasure('listViewClick');
$$t_I.$Nr($p$0, $p$1_0);
};
$v$0.$9('click', $v$3, this.get_$1f());
var $$t_J = this;
var $v$4 = function($p$1_0) {
$$t_J.$OS($p$0, $p$1_0);
};
$v$0.$9('contextmenu', $v$4, this.get_$1f());
var $$t_K = this;
var $v$5 = function($p$1_0) {
$$t_K.$O1($p$0, $p$1_0);
};
$v$0.$9('dblclick', $v$5, this.get_$1f());
if (this.$8v || this.$Eq) {
var $$t_L = this;
var $v$6 = function($p$1_0) {
$$t_L.$OK($p$0, $p$1_0);
};
$v$0.$9('mousemove', $v$6, this.get_$1f());
}
if (this.$H1 || this.$2p) {
var $$t_M = this;
var $v$7 = function($p$1_0) {
$$t_M.$O5($p$0, $p$1_0);
};
$v$0.$9('focusin', $v$7, this.get_$1f());
$p$0.$1r('HasFocus', this.$$d_$OA);
}
$p$0.$LY();
$p$0.$B3 = true;
},
$La: function _o365c_$1$$La($p$0, $p$1) {
$p$0.$9('mousedown', $p$1, this.get_$1f());
},
$K0: function _o365c_$1$$K0($p$0) {
var $v$0 = $p$0.get_$5g();
$v$0.$J('click', this.get_$1f());
$v$0.$J('dblclick', this.get_$1f());
$v$0.$J('contextmenu', this.get_$1f());
$v$0.$J('mousedown', this.get_$1f());
$v$0.$J('mouseup', this.get_$1f());
$v$0.$J('mousemove', this.get_$1f());
$v$0.$J('focusin', this.get_$1f());
$v$0.$J('contextmenu', this.get_$1f());
$p$0.$1j('HasFocus', this.$$d_$OA);
$p$0.$Jz();
},
$Jd: function _o365c_$1$$Jd($p$0) {
var $v$0 = $IN(this, $p$0);
var $v$1 = this.$Kc($v$0);
if (this.get_$4q()) {
$v$1.set_$7(this.get_$4q());
}
$v$1.set_$r(false);
if (this.get_$LL()) {
$v$1.set_$D(null);
}
if (this.$5c) {
$v$1.set_$D(this.$5c);
}
$v$1.set_$Y($v$0);
if (this.$3C) {
var $v$2 = this.$3C.$Ka($v$1.get_$Y());
if (!_js.$7.$1U($v$2)) {
$v$1.set_$5J($v$2);
}
}
$v$1.set_$20(this);
return $v$1;
},
$Je: function _o365c_$1$$Je() {
var $v$0;
if (this.get_$60()) {
$v$0 = this.get_$60()();
if ($v$0.$1.parentNode) {
$v$0.$1.parentNode.removeChild($v$0.$1);
}
}
else {
$v$0 = new _o365c.$v(window.document.createElement(this.get_$4r()));
}
if (this.$2p) {
$v$0.set_$1d(_js.$5.$6I);
}
$v$0.set_$1k(this.$FY);
$v$0.set_$4t(this);
return $v$0;
},
$Jc: function _o365c_$1$$Jc() {
var $v$0 = new _o365c.$2C(window.document.createElement(this.get_$4r()));
if (this.$Ag) {
$v$0.set_$D(this.$Ag);
}
return $v$0;
},
$OG: function _o365c_$1$$OG($p$0, $p$1) {
if (this.$CP) {
var $v$0 = $p$1.get_$13();
if ($v$0 - 1 === 0) {
this.$FZ($p$0, $p$1);
}
else if ($v$0 - 1 === 2 && this.get_$H2()) {
this.$Fb($p$0, $p$1);
}
}
if (this.$1h.get_$2h() !== 'Mouse') {
this.set_$7f(new _0365f.$1E($p$1, 0));
}
$IU(this, $p$0);
$6t(this, $p$1);
},
$OM: function _o365c_$1$$OM($p$0, $p$1) {
},
$Nr: function _o365c_$1$$Nr($p$0, $p$1) {
if (!this.$CP) {
this.$FZ($p$0, $p$1);
}
$6t(this, $p$1);
},
$OS: function _o365c_$1$$OS($p$0, $p$1) {
if (!this.$CP && this.get_$H2()) {
this.$Fb($p$0, $p$1);
}
$6t(this, $p$1);
},
$O1: function _o365c_$1$$O1($p$0, $p$1) {
this.set_$7f(new _0365f.$1E($p$1, 16));
if (this.get_$4e() && this.get_$4e().$c && $p$0.get_$r()) {
this.get_$4e().$p();
$p$1.$1y();
}
else {
$6t(this, $p$1);
}
},
$OK: function _o365c_$1$$OK($p$0, $p$1) {
if ($p$1.get_$8i() === this.$63.x && $p$1.get_$3T() === this.$63.y) {
return;
}
this.$63.x = $p$1.get_$8i();
this.$63.y = $p$1.get_$3T();
if (this.$8v) {
this.$9D($p$0);
}
if (this.$Eq) {
$p$0.$4h();
}
},
$O5: function _o365c_$1$$O5($p$0, $p$1) {
if (this.$H1) {
this.$9D($p$0);
}
this.set_$2G($p$0.get_$Y());
this.$6U($p$0);
},
$OA: function _o365c_$1$$OA($p$0, $p$1) {
var $v$0 = $p$0;
if ($v$0.get_$5l()) {
if (this.$2t && this.$2t !== $v$0 && this.$2t.get_$5l()) {
this.$2t.$ED();
}
this.$2t = $v$0;
}
},
$O6: function _o365c_$1$$O6($p$0) {
var $v$0 = !!document.activeElement && this.$1.contains(document.activeElement);
if (!$v$0) {
this.set_$2G(this.get_$u());
this.$2t = null;
this.$PP();
}
},
$PP: function _o365c_$1$$PP() {
this.$6U(this.get_$2w());
},
$FZ: function _o365c_$1$$FZ($p$0, $p$1) {
this.set_$7f(new _0365f.$1E($p$1, 3));
this.$9D($p$0);
if (this.$Bv && this.$Bv.$c) {
this.$Bv.$p();
}
},
$Fb: function _o365c_$1$$Fb($p$0, $p$1) {
this.set_$7f(new _0365f.$1E($p$1, 4));
this.$9D($p$0);
},
$Ex: function _o365c_$1$$Ex($p$0, $p$1, $p$2) {
if (this.$8r) {
return;
}
if (this.$S) {
if (this.get_$Cv()) {
}
if (this.$81 && $IP(this, $p$1, $p$2)) {
return;
}
}
switch ($p$1.$2O) {
case 0:
$9V(this, $p$1.$15, $p$1.$y.length, $p$2);
break;
case 1:
this.$NX($p$1.$15, $p$1.$5B, $p$1.$y);
break;
case 2:
$3o(this, $p$1.$15, $p$1.$1v.length, $p$1.$1v, $p$1.$2O, $p$2);
break;
case 3:
$3o(this, $p$1.$15, $p$1.$1v.length, $p$1.$1v, $p$1.$2O, 0);
$9V(this, $p$1.$15, $p$1.$y.length, 0);
break;
case 4:
$5G(this);
break;
default:
break;
}
},
$OU: function _o365c_$1$$OU($p$0) {
$p$0.$1P();
},
$Kc: function _o365c_$1$$Kc($p$0) {
if (this.$i && this.$4V) {
var $v$0 = _o365c.$1.$4u[this.$i];
if ($v$0 && $v$0.length > 0) {
for (var $v$1 = 0, $v$2 = $v$0.length; $v$1 < $v$2; $v$1++) {
var $v$3 = $v$0[$v$1];
if (this.$Pk($p$0, $v$3)) {
Array.removeAt($v$0, $v$1);
if ($v$3.$1.parentNode) {
$v$3.$1.parentNode.removeChild($v$3.$1);
}
return $v$3;
}
}
}
}
return this.$Je();
},
$9u: function _o365c_$1$$9u($p$0) {
var $v$0 = false;
var $v$1 = null;
if (!this.$3E || _o365c.$v.isInstanceOfType($p$0)) {
$v$1 = ($p$0).get_$9i();
if (this.$i && this.$4V && _o365c.$v.isInstanceOfType($p$0)) {
var $v$2 = _o365c.$1.$4u[this.$i];
if (!$v$2) {
$v$2 = [];
_o365c.$1.$4u[this.$i] = $v$2;
}
if ($v$2.length < 50) {
var $v$3 = $p$0;
$v$3.$JL();
if (this.$3B === $p$0) {
$6q(this);
}
if (!this.$92) {
$v$3.$1T();
}
if (!this.$5w) {
this.$5w = true;
_js.$2.get_$a().$6S(this.get_$3h(), 'ListView::AddListViewItemToCache - Trigger release cached items datacontext', this.$$d_$Gr);
}
$v$3.set_$20(null);
$v$3.set_$4t(null);
Array.enqueue($v$2, $p$0);
_js.$3.get_$7F().appendChild($p$0.$1);
$v$0 = true;
}
}
}
if (!$v$0) {
this.$Nl($p$0);
($p$0).$k();
}
$IM(this, $v$1);
if (this.$2t === $p$0) {
this.$2t = null;
}
},
$Nl: function _o365c_$1$$Nl($p$0) {
},
$Pd: function _o365c_$1$$Pd($p$0) {
$p$0.set_$r(true);
},
$NX: function _o365c_$1$$NX($p$0, $p$1, $p$2) {
if (this.$S) {
var $v$0 = this.$S.$P.get_$QI($p$0);
if (!$5($v$0)) {
this.$S.$P.$GC($p$0, $p$1, $v$0);
}
}
},
$Lo: function _o365c_$1$$Lo($p$0) {
return this.$74($p$0, this.get_$u());
},
$OB: function _o365c_$1$$OB($p$0, $p$1, $p$2) {
for (var $v$0 = $p$0; $v$0 < $p$0 + $p$1; $v$0++) {
var $v$1 = this.$S.$P.get_$QI($v$0);
if ($v$1.$i !== this.$Ag) {
var $v$2 = $9X(this, $v$1.get_$Y());
if (this.$Lo($v$2)) {
this.$Pd($v$1);
}
}
}
if (!this.get_$u()) {
$IT(this);
}
},
$Nm: function _o365c_$1$$Nm($p$0, $p$1, $p$2) {
},
$LF: function _o365c_$1$$LF($p$0) {
if ($p$0) {
this.set_$u(null);
}
},
$9D: function _o365c_$1$$9D($p$0) {
if (!this.$K3) {
var $v$0 = $9X(this, $p$0.get_$9i());
if (!this.$74(this.get_$u(), $v$0)) {
this.set_$u($v$0);
}
}
$4(this, 'UserActionTaken');
},
$7m: function _o365c_$1$$7m() {
var $v$0 = -1;
if (this.$3E) {
if (this.$q) {
$v$0 = this.$q.get_$H();
}
}
else {
if (this.$1m) {
$v$0 = this.$1m.get_$H();
}
}
return $v$0;
},
$KV: function _o365c_$1$$KV() {
$Db(this, 0);
},
$KW: function _o365c_$1$$KW() {
$Db(this, 1);
},
$PT: function _o365c_$1$$PT() {
if (this.get_$2G()) {
this.set_$u(this.get_$2G());
}
},
$PW: function _o365c_$1$$PW() {
$6s(this, 0);
this.$3i();
},
$PY: function _o365c_$1$$PY() {
$6s(this, 1);
this.$3i();
},
$PX: function _o365c_$1$$PX() {
$6s(this, 0, this.$H0);
this.$3i();
},
$PZ: function _o365c_$1$$PZ() {
$6s(this, 1, this.$H0);
this.$3i();
},
$PU: function _o365c_$1$$PU() {
var $v$0 = this.get_$16().get_$H();
for (var $v$1 = 0; $v$1 < $v$0; $v$1++) {
var $v$2 = this.get_$16().get_$QI($v$1);
if ($6v(this, $v$2)) {
this.$3i();
return;
}
}
},
$PV: function _o365c_$1$$PV() {
for (var $v$0 = this.get_$16().get_$H(); $v$0 >= 0; $v$0--) {
var $v$1 = this.$1m.get_$QI($v$0);
if ($6v(this, $v$1)) {
this.$3i();
return;
}
}
},
$KT: function _o365c_$1$$KT() {
var $v$0 = this.get_$16().get_$H();
for (var $v$1 = 0; $v$1 < $v$0; $v$1++) {
var $v$2 = this.get_$16().get_$QI($v$1);
if ($6u(this, $v$2)) {
this.set_$2G($v$2);
return;
}
}
},
$KU: function _o365c_$1$$KU() {
for (var $v$0 = this.get_$16().get_$H(); $v$0 >= 0; $v$0--) {
var $v$1 = this.$1m.get_$QI($v$0);
if ($6u(this, $v$1)) {
this.set_$2G($v$1);
return;
}
}
},
$3i: function _o365c_$1$$3i() {
var $v$0 = this.get_$2w();
if ($v$0) {
$v$0.$4h();
}
},
$Kp: function _o365c_$1$$Kp() {
return (!this.get_$u()) ? -1 : this.get_$16().$Av(this.get_$u(), this.$$d_$74);
},
$6U: function _o365c_$1$$6U($p$0) {
if (this.$2p && this.$S && this.$S.$P) {
var $v$0 = this.$S.$P;
var $v$1 = $v$0.get_$H();
for (var $v$2 = 0; $v$2 < $v$1; $v$2++) {
if (_o365c.$v.isInstanceOfType($v$0.get_$QI($v$2))) {
($v$0.get_$QI($v$2)).set_$Ep(_js.$5.$6I);
}
else {
($v$0.get_$QI($v$2)).set_$1d(_js.$5.$6I);
}
}
if ($p$0) {
$p$0.set_$Ep(this.get_$Dz());
}
}
},
$Il: function _o365c_$1$$Il($p$0, $p$1, $p$2) {
this.$S.$P.$Lc($p$0, $p$1);
},
$PK: function _o365c_$1$$PK($p$0, $p$1, $p$2, $p$3) {
this.$Nm($p$1, 1, $p$3);
this.$S.$P.$CH($p$1);
this.$9u($p$0);
},
$KS: function _o365c_$1$$KS() {
var $v$0 = this.get_$2w();
if ((this.get_$3F() && this.$Ac) && (!this.$8F || $IQ(this))) {
if ($v$0) {
$v$0.$1.blur();
}
this.$3i();
}
},
$74: function _o365c_$1$$74($p$0, $p$1) {
if ($p$0 && $p$1 && Object.getType($p$0) !== Object.getType($p$1)) {
return false;
}
if ($p$0) {
if (_0365f.$2E.isInstanceOfType($p$0)) {
return ($p$0).$Le($p$1);
}
else if (_js.$1Z.isInstanceOfType($p$0)) {
return ($p$0).$Ef($p$1);
}
}
return $p$0 === $p$1;
},
$Ko: function _o365c_$1$$Ko($p$0) {
return 0;
},
$Pk: function _o365c_$1$$Pk($p$0, $p$1) {
return !$p$1.$1X || $p$1.$1X === this;
},
$AU: function _o365c_$1$$AU() {
$4(this, 'FinishedRendering');
if (this.$AV && this.$AV.$c) {
this.$AV.$p();
}
},
$KL: function _o365c_$1$$KL() {
if (this.$1m && this.$7m() > 0) {
$9V(this, 0, this.$7m(), 1);
}
if (!this.$1m) {
this.set_$u(null);
}
},
$Np: function _o365c_$1$$Np($p$0) {
$p$0.remove_$GX(this.$$d_$Np);
this.$F6($p$0);
},
$Gr: function _o365c_$1$$Gr() {
if (this.$81) {
return;
}
var $v$0 = _o365c.$1.$4u[this.$i];
if (!$v$0) {
this.$5w = false;
return;
}
var $v$1 = false;
for (var $v$2 = $v$0.length - 1; $v$2 >= 0; $v$2--) {
var $v$3 = $v$0[$v$2];
if ($v$3.get_$Y()) {
$v$1 = true;
$v$3.set_$Y(null);
break;
}
}
if (!$v$1) {
this.$5w = false;
}
else {
_js.$2.get_$a().$6S(this.get_$3h(), 'ListView::ReleaseCachedItemsDataContext', this.$$d_$Gr);
}
},
$Ns: function _o365c_$1$$Ns($p$0, $p$1) {
this.$Ex($p$0, $p$1, 0);
},
$Nw: function _o365c_$1$$Nw($p$0, $p$1) {
this.$Ex($p$0, $p$1, $p$1.get_$Qf());
}
}
_o365c.$v = function _o365c_$v($p$0) {
this.$$d_$OI = Function.createDelegate(this, this.$OI);
this.$$d_$OH = Function.createDelegate(this, this.$OH);
this.$$d_$Q2 = Function.createDelegate(this, this.$Q2);
this.$$d_$OE = Function.createDelegate(this, this.$OE);
_o365c.$v.initializeBase(this, [ $p$0 ]);
}
_o365c.$v.prototype = {
$1V: false,
$EB: true,
$40: false,
$JG: false,
$BE: false,
$BC: false,
$B5: false,
$Aj: false,
$CW: false,
$1X: null,
$2o: null,
$4F: null,
$B3: false,
add_$GX: function _o365c_$v$add_$GX($p$0) {
if (!this.$4F) {
this.$4F = new (_js.$1C.$$(_o365c.$v))();
}
this.$4F.$E1($p$0);
},
remove_$GX: function _o365c_$v$remove_$GX($p$0) {
if (this.$4F) {
this.$4F.$Gs($p$0);
}
},
get_$83: function _o365c_$v$get_$83() {
return this.$40;
},
set_$83: function _o365c_$v$set_$83($p$0) {
if (this.$40 !== $p$0) {
this.$40 = $p$0;
if (this.$1X && this === this.$1X.get_$2w()) {
this.$1X.set_$FP(this.$40);
}
$4(this, 'IsExpanded');
$4(this, 'ShowSelectionColor');
}
return $p$0;
},
get_$r: function _o365c_$v$get_$r() {
return this.$1V;
},
set_$r: function _o365c_$v$set_$r($p$0) {
if (this.$1V !== $p$0) {
this.$1V = $p$0;
$4(this, 'IsSelected');
if (this.get_$EC()) {
this.set_$76(_js.$5.$EN($p$0));
}
}
this.set_$H7($p$0);
if (!this.$1V) {
this.set_$83(false);
}
else if (this.$1X) {
this.$1X.set_$FP(this.$40);
}
return $p$0;
},
get_$EC: function _o365c_$v$get_$EC() {
return this.$EB;
},
set_$EC: function _o365c_$v$set_$EC($p$0) {
this.$EB = $p$0;
return $p$0;
},
get_$BF: function _o365c_$v$get_$BF() {
return this.$BE;
},
set_$BF: function _o365c_$v$set_$BF($p$0) {
if (this.$BE !== $p$0) {
this.$BE = $p$0;
$4(this, 'IsTouched');
}
return $p$0;
},
get_$M1: function _o365c_$v$get_$M1() {
return this.$BC;
},
set_$M1: function _o365c_$v$set_$M1($p$0) {
if (this.$BC !== $p$0) {
this.$BC = $p$0;
$4(this, 'IsSwiped');
}
return $p$0;
},
get_$5l: function _o365c_$v$get_$5l() {
return this.$Aj;
},
set_$5l: function _o365c_$v$set_$5l($p$0) {
if (this.$Aj !== $p$0) {
this.$Aj = $p$0;
$4(this, 'HasFocus');
}
return $p$0;
},
get_$H7: function _o365c_$v$get_$H7() {
return this.$CW;
},
set_$H7: function _o365c_$v$set_$H7($p$0) {
if (this.$CW !== $p$0) {
this.$CW = $p$0;
this.$OW();
$Hk(this, 'ShowSelected', 'ShowSelectionColor', 'IsItemHoveredOrShowSelected');
}
return $p$0;
},
get_$B6: function _o365c_$v$get_$B6() {
return this.$B5;
},
set_$B6: function _o365c_$v$set_$B6($p$0) {
if (this.$B5 !== $p$0) {
this.$B5 = $p$0;
this.$O9();
$6k(this, 'IsItemHovered', 'IsItemHoveredOrShowSelected');
}
return $p$0;
},
get_$4t: function _o365c_$v$get_$4t() {
return this.$1X;
},
set_$4t: function _o365c_$v$set_$4t($p$0) {
if (this.$1X !== $p$0) {
if (this.$1X) {
this.$1X.$1j('DataContext', this.$$d_$OE);
}
this.$1X = $p$0;
if (this.$1X) {
this.$1X.$1r('DataContext', this.$$d_$OE);
}
$4(this, 'ParentViewModel');
}
return $p$0;
},
get_$5g: function _o365c_$v$get_$5g() {
return (this.$2o) ? this.$2o : this;
},
get_$Ep: function _o365c_$v$get_$Ep() {
if (this.$I) {
var $v$0 = this.$I.$Et();
if ($v$0) {
return $v$0.get_$1d();
}
}
return this.get_$1d();
},
set_$Ep: function _o365c_$v$set_$Ep($p$0) {
if (this.$I) {
var $v$0 = this.$I.$Et();
if ($v$0) {
$v$0.set_$1d($p$0);
return $p$0;
}
}
this.set_$1d($p$0);
return $p$0;
},
get_$76: function _o365c_$v$get_$76() {
return this.get_$E().get_$6X();
},
set_$76: function _o365c_$v$set_$76($p$0) {
this.get_$E().set_$6X($p$0);
return $p$0;
},
get_$FU: function _o365c_$v$get_$FU() {
return !!this.$I;
},
$Q6: function _o365c_$v$$Q6() {
if (this.$JG) {
this.set_$83(true);
}
},
$JP: function _o365c_$v$$JP() {
this.set_$83(false);
},
$ED: function _o365c_$v$$ED() {
this.set_$5l(false);
},
$JL: function _o365c_$v$$JL() {
this.set_$r(false);
this.set_$83(false);
this.set_$BF(false);
this.set_$M1(false);
this.set_$1u(false);
this.set_$B6(false);
this.set_$5l(false);
this.set_$H7(false);
},
$LY: function _o365c_$v$$LY() {
if (this.$2o) {
this.$2o.$9('mouseenter', this.$$d_$OH, '#ListViewItem');
this.$2o.$9('mouseleave', this.$$d_$OI, '#ListViewItem');
}
},
$Jz: function _o365c_$v$$Jz() {
if (this.$2o) {
this.$2o.$J('mouseenter', '#ListViewItem');
this.$2o.$J('mouseleave', '#ListViewItem');
}
},
$5r: function _o365c_$v$$5r() {
this.set_$4t(null);
_js.$3.prototype.$5r.call(this);
},
$8g: function _o365c_$v$$8g() {
_js.$9.prototype.$8g.call(this);
this.$2M(96);
},
$52: function _o365c_$v$$52() {
_js.$9.prototype.$52.call(this);
if (!$5(this.$I)) {
this.$2o = this.$I.$1t('MainItemContainer');
}
if (!this.get_$m() && this.$1X && this.$1X.$KZ) {
this.set_$m(_js.$5.$5j());
}
if (this.$4F) {
this.$4F.$Gp(this);
}
},
$Bu: function _o365c_$v$$Bu($p$0) {
_js.$3.prototype.$Bu.call(this, $p$0);
this.set_$5l(true);
},
$Nn: function _o365c_$v$$Nn($p$0) {
_js.$3.prototype.$Bu.call(this, $p$0);
this.$ED();
},
$O9: function _o365c_$v$$O9() {
},
$OW: function _o365c_$v$$OW() {
},
$OH: function _o365c_$v$$OH($p$0) {
this.set_$B6(true);
},
$OI: function _o365c_$v$$OI($p$0) {
this.set_$B6(false);
},
$OE: function _o365c_$v$$OE($p$0, $p$1) {
$4(this, 'ParentViewModel');
},
$Q2: function _o365c_$v$$Q2() {
if (this.$40) {
this.$JP();
}
else {
this.$Q6();
}
}
}
_o365c.$2M = function _o365c_$2M($p$0) {
this.$$d_$GI = Function.createDelegate(this, this.$GI);
_o365c.$2M.initializeBase(this, [ $p$0 ]);
this.$P = new _js.$J();
this.$11 = [];
this.$P.add_$2P(this.$$d_$GI);
}
_o365c.$2M.prototype = {
$P: null,
$11: null,
$H8: false,
$GI: function _o365c_$2M$$GI($p$0, $p$1) {
if (!$p$1.$2O || $p$1.$2O === 3) {
for (var $v$0 = 0; $v$0 < $p$1.$y.length; $v$0++) {
if (!(_js.$3.isInstanceOfType($p$1.$y[$v$0])) || !$p$1.$y[$v$0]) {
throw Error.invalidOperation('Can\'t add any other element to Panel.Children');
}
}
}
},
$2r: function _o365c_$2M$$2r() {
_js.$3.prototype.$2r.call(this);
for (var $v$0 = 0, $v$1 = this.$P.get_$H(); $v$0 < $v$1; $v$0++) {
(this.$P.get_$QI($v$0)).$z();
}
},
$2a: function _o365c_$2M$$2a() {
_js.$3.prototype.$2a.call(this);
for (var $v$0 = 0, $v$1 = this.$P.get_$H(); $v$0 < $v$1; $v$0++) {
(this.$P.get_$QI($v$0)).$1T();
}
},
$Br: function _o365c_$2M$$Br() {
for (var $v$0 = this.$P.get_$H() - 1; $v$0 >= 0; $v$0--) {
(this.$P.get_$QI($v$0)).$k();
}
_js.$0.prototype.$Br.call(this);
},
$5r: function _o365c_$2M$$5r() {
this.$P.remove_$2P(this.$$d_$GI);
for (var $v$0 = 0, $v$1 = this.$P.get_$H(); $v$0 < $v$1; $v$0++) {
var $v$2 = this.$P.get_$QI($v$0);
if ($v$2) {
$v$2.$k();
}
}
_js.$3.prototype.$5r.call(this);
}
}
_o365c.$N = function _o365c_$N($p$0) {
this.$$d_$GP = Function.createDelegate(this, this.$GP);
this.$$d_$OT = Function.createDelegate(this, this.$OT);
this.$$d_$ON = Function.createDelegate(this, this.$ON);
this.$Fm = -1;
_o365c.$N.initializeBase(this, [ $p$0 ]);
this.$FN = true;
this.$v('pickerContainer');
this.set_$D('Picker');
this.$o = new _0365m.$W(new Array(0));
this.$2M(256);
var $$t_1 = this;
this.$o.set_$By(function() {
$$t_1.$o.$8J = $$t_1.$Fm;
$$t_1.$o.$GA = $$t_1.$I.$1t('PickerButtonId').$1.offsetWidth;
});
}
function $De($p$0) {
$p$0.$o.$s.$5Q();
if (!$p$0.$2C) {
return;
}
for (var $v$0 = 0; $v$0 < $p$0.$2C.get_$H(); $v$0++) {
var $v$1 = new _0365m.$1D('not_used', null, new _C($IX($p$0, $p$0.$2C.get_$QI($v$0), $v$0), $p$0.get_$3h()), !$v$0, true, null, 'Picker.DualStateContextMenuItem', null);
$v$1.set_$M6($p$0.$2C.get_$QI($v$0));
$v$1.$BJ = $p$0.$Ge;
$p$0.$o.$s.$3p($v$1);
}
if ($p$0.$2C.get_$H() > 0) {
if ($5($p$0.get_$CO())) {
$9b($p$0, $p$0.$2C.get_$QI(0));
}
$Df($p$0);
}
}
function $9b($p$0, $p$1) {
$p$0.$CN = $p$1;
$6k($p$0, 'SelectedValue', 'DisplayedValue');
}
function $Df($p$0) {
var $v$0 = false;
var $v$1 = $p$0.$o.$s.get_$H();
for (var $v$2 = 0; $v$2 < $v$1; $v$2++) {
var $v$3 = $p$0.$o.$s.get_$QI($v$2);
if ($v$0) {
$v$3.set_$2V(false);
}
else {
$v$3.set_$2V($v$3.$45 === $p$0.get_$CO());
$v$0 = $v$3.get_$2V();
if ($v$0) {
$p$0.$CM = $v$3;
$p$0.$o.set_$u($v$3);
}
}
}
}
function $IX($p$0, $p$1, $p$2) {
var $$t_4 = this;
return function() {
var $v$0 = $p$0.$o.$s.get_$H();
for (var $v$1 = 0; $v$1 < $v$0; $v$1++) {
($p$0.$o.$s.get_$QI($v$1)).set_$2V($v$1 === $p$2);
}
$9b($p$0, $p$1);
$p$0.$CM = $p$0.$o.$s.get_$QI($p$2);
};
}
_o365c.$N.prototype = {
$3W: null,
$o: null,
$2C: null,
$CN: null,
$CM: null,
$Ge: null,
$FN: false,
$9n: 0,
$9l: null,
get_$1d: function _o365c_$N$get_$1d() {
return this.$9n;
},
set_$1d: function _o365c_$N$set_$1d($p$0) {
if (this.$9n !== $p$0) {
this.$9n = $p$0;
$4(this, 'AriaTabIndex');
}
return $p$0;
},
get_$Ok: function _o365c_$N$get_$Ok() {
return this.$2C;
},
set_$Ok: function _o365c_$N$set_$Ok($p$0) {
if ($p$0 === this.$2C) {
return $p$0;
}
if (this.$2C) {
this.$2C.remove_$2P(this.$$d_$ON);
}
this.$2C = $p$0;
if ($p$0) {
this.$2C.add_$2P(this.$$d_$ON);
}
$4(this, 'Options');
$De(this);
return $p$0;
},
get_$CO: function _o365c_$N$get_$CO() {
return this.$CN;
},
set_$CO: function _o365c_$N$set_$CO($p$0) {
if (this.$CN === $p$0) {
return $p$0;
}
$9b(this, $p$0);
$Df(this);
$4(this, 'DisplayedValue');
return $p$0;
},
get_$K5: function _o365c_$N$get_$K5() {
if (this.$o.$1o && this.$o.$t) {
return (this.$o.$t).$45;
}
else {
return this.get_$CO();
}
},
get_$E9: function _o365c_$N$get_$E9() {
return this.$9l;
},
set_$E9: function _o365c_$N$set_$E9($p$0) {
if (this.$9l !== $p$0) {
this.$9l = $p$0;
$4(this, 'PickerButtonAriaLabelledBy');
}
return $p$0;
},
get_$Ot: function _o365c_$N$get_$Ot() {
var $v$0 = this.get_$E9() || '';
if (this.$3W) {
if ($v$0 !== '') {
$v$0 += ' ';
}
$v$0 += this.$3W.get_$E().get_$n();
}
return $v$0;
},
$8g: function _o365c_$N$$8g() {
_js.$9.prototype.$8g.call(this);
this.$o.$1r('SelectedItem', this.$$d_$OT);
this.$o.$1r('IsShown', this.$$d_$GP);
},
$52: function _o365c_$N$$52() {
_js.$9.prototype.$52.call(this);
if (!$5(this.$I)) {
this.$3W = this.$I.$1t('PickerButtonId');
if (!$5(this.$3W)) {
if (_js.$7.$1U(this.$3W.get_$E().get_$n())) {
this.$3W.get_$E().set_$n(_js.$5.$5j());
}
$4(this, 'PickerButtonAriaLabelledBy');
}
}
},
$Bw: function _o365c_$N$$Bw($p$0) {
if ($p$0.get_$13() === 40) {
$p$0.$1y();
$p$0.$1P();
if (this.$3W) {
this.$3W.$1.click();
}
}
},
$5r: function _o365c_$N$$5r() {
this.set_$Ok(null);
this.$o.$1j('SelectedItem', this.$$d_$OT);
this.$o.$1j('IsShown', this.$$d_$GP);
_js.$3.prototype.$5r.call(this);
},
$ON: function _o365c_$N$$ON($p$0, $p$1) {
$De(this);
},
$OT: function _o365c_$N$$OT($p$0, $p$1) {
$4(this, 'DisplayedValue');
},
$GP: function _o365c_$N$$GP($p$0, $p$1) {
if (this.$o.$1o) {
this.$o.set_$u(this.$CM);
}
}
}
_o365c.$D = function _o365c_$D($p$0, $p$1, $p$2, $p$3, $p$4, $p$5) {
this.$$d_$Aw = Function.createDelegate(this, this.$Aw);
this.$$d_$Ax = Function.createDelegate(this, this.$Ax);
this.$$d_$Kx = Function.createDelegate(this, this.$Kx);
this.$$d_$Ky = Function.createDelegate(this, this.$Ky);
this.$$d_$L5 = Function.createDelegate(this, this.$L5);
this.$$d_$LB = Function.createDelegate(this, this.$LB);
this.$$d_$L9 = Function.createDelegate(this, this.$L9);
this.$$d_$5H = Function.createDelegate(this, this.$5H);
this.$$d_$Kw = Function.createDelegate(this, this.$Kw);
this.$$d_$EJ = Function.createDelegate(this, this.$EJ);
this.$Fc = 0;
_o365c.$D.initializeBase(this, [ $p$0 ]);
this.set_$2W(true);
this.$B = $p$2;
this.$j = $p$1;
this.$1h = $p$3;
this.$1l = $p$4;
this.$2K = $p$5 || this.$Kg();
var $$t_6 = this;
this.$CR = new _C(this.$$d_$EJ, this.get_$3h(), this, 'IsShown', function() {
return $$t_6.get_$O();
});
this.set_$JM(this.$CR);
this.$d = _o365c.$D.$EQ++;
this.set_$9E(true);
this.$1.setAttribute('IsPopup', 1);
}
_o365c.$D.$Lv = function _o365c_$D$$Lv($p$0) {
try {
$p$0.$1.id = $p$0.$1.id;
}
catch ($$e_1) {
return false;
}
return true;
}
_o365c.$D.$AO = function _o365c_$D$$AO($p$0) {
return !!$p$0 && $p$0.nodeType === 1 && $p$0.getAttribute('IsPopup') === '1';
}
_o365c.$D.$K9 = function _o365c_$D$$K9($p$0) {
if (!$p$0 || $p$0.nodeType !== 1) {
return false;
}
var $v$0 = $p$0.getAttribute('IsModal');
return !!$v$0 && Boolean.parse($v$0);
}
_o365c.$D.$Ls = function _o365c_$D$$Ls($p$0) {
return ($p$0.$5X() && $p$0.get_$13() === 78) || ($p$0.$5X() && $p$0.get_$13() === 117);
}
_o365c.$D.$Lu = function _o365c_$D$$Lu($p$0) {
try {
if ($p$0.src === '') {
return true;
}
}
catch ($v$0) {
if (_js.$O.getInstance().$3z && $v$0['number'] === -2146828218) {
return false;
}
throw $v$0;
}
return true;
}
_o365c.$D.$Lr = function _o365c_$D$$Lr($p$0, $p$1) {
if (_js.$7.$1U($p$0.src) || $p$0.src.toLowerCase() === 'about:blank') {
return true;
}
$p$1.href = $p$0.src;
var $v$0 = ($p$1)['hostname'];
var $v$1 = ($p$1)['protocol'];
var $v$2 = ($p$1)['port'];
if ($v$2 === '0') {
$v$2 = '';
}
var $v$3 = window.location.port;
if ($v$3 === '0') {
$v$3 = '';
}
return $v$0 === window.location.hostname && $v$2 === $v$3 && $v$1 === window.location.protocol;
}
function $6w($p$0, $p$1) {
if ($p$0.$1A === $p$1) {
$p$0.set_$2W(!$p$1);
$4($p$0, 'IsShown');
}
}
function $Ia($p$0, $p$1) {
switch ($p$1.get_$13()) {
case 27:
$p$0.$L2($p$1);
break;
case 117:
if ($p$0.$1S && $p$0.$1S.$c) {
$p$0.$1S.$p();
}
break;
}
}
function $Di($p$0) {
var $v$0 = [];
var $v$1 = _js.$4.$17($p$0.$1).getElementsByTagName('iframe');
var $v$2 = document.createElement('a');
for (var $v$3 = 0; $v$3 < $v$1.length; $v$3++) {
var $v$4 = $v$1[$v$3];
if (_o365c.$D.$Lu($v$4) && _o365c.$D.$Lr($v$4, $v$2) && $v$4.contentDocument && $v$4.contentDocument.body) {
Array.add($v$0, $v$4.contentDocument.body);
}
}
return $v$0;
}
function $Dg($p$0, $p$1) {
$p$0.$87 = $p$1;
if ($p$0.get_$Lh() && (($p$1 && $p$0.$QE) || (!$p$1 && $p$0.$QC))) {
$p$0.set_$B1(true);
var $v$0 = $p$0.$Es($p$1);
$v$0.$CZ();
}
else if ($p$1) {
$p$0.$Ax();
}
else {
$p$0.$Aw();
}
}
function $Dh($p$0, $p$1) {
var $v$0 = $p$0.$1 === $p$1 || $p$0.$1.contains($p$1) || $Dj($p$0, $p$1);
if (!$v$0) {
$p$0.set_$O(false);
}
}
function $Dj($p$0, $p$1) {
if (!$p$1 || ($p$1.tagName && $p$1.tagName.toLowerCase() === 'body')) {
return false;
}
if (_o365c.$D.$AO($p$1)) {
if (_o365c.$D.$K9($p$1) && $p$0.$1.style.zIndex < $p$1.style.zIndex) {
return true;
}
var $v$0 = $p$1.getAttribute('ParentIds');
return !!$v$0 && $v$0.indexOf(String.format('({0})', $p$0.$d)) !== -1;
}
if (!$p$0.$7d && $p$0.get_$20() && $p$1 === $p$0.get_$20().$1) {
return true;
}
return $Dj($p$0, $p$1.parentNode);
}
function $Id($p$0, $p$1) {
try {
if (($p$0.$1.style).outline !== $p$1) {
($p$0.$1.style).outline = $p$1;
}
}
catch ($v$0) {
var $v$1 = ($v$0['number'] || -1);
if ($v$1 !== -2147467259) {
throw $v$0;
}
}
}
function $IY($p$0) {
var $v$0 = $p$0.$Pp;
if ($v$0 <= 0) {
$v$0 = 2001;
var $v$1 = $p$0.$1.parentNode.childNodes;
if ($v$1.length > 0) {
var $v$2 = $IZ($p$0, $v$1);
if (isFinite($v$2)) {
$v$0 = Math.max(2000, $v$2) + 1;
}
}
}
$p$0.$1.style.zIndex = $v$0;
}
function $Ib($p$0) {
var $v$0 = _js.$4.$17($p$0.$1);
if ($p$0.$1.parentNode !== $v$0.body) {
$Ie($p$0);
$v$0.body.appendChild($p$0.$1);
}
}
function $Ie($p$0) {
var $v$0 = _js.$3.$Ei($p$0.$1.parentNode, _o365c.$D.$AO);
var $v$1 = '';
if (!$v$0 || _js.$7.$1U($v$1 = $v$0.getAttribute('ParentIds'))) {
$p$0.$1.setAttribute('ParentIds', String.format('({0})', $p$0.$d));
}
else {
$p$0.$1.setAttribute('ParentIds', String.format('{0}({1})', $v$1, $p$0.$d));
}
}
function $IZ($p$0, $p$1) {
var $v$0 = Number.MIN_VALUE;
for (var $v$1 = 0; $v$1 < $p$1.length; $v$1++) {
if ($p$1[$v$1] === $p$0.$1) {
continue;
}
if (_o365c.$D.$AO($p$1[$v$1])) {
var $v$2 = $p$1[$v$1].style.zIndex;
if (!isNaN($v$2) && isFinite($v$2)) {
$v$0 = Math.max($v$0, $v$2);
}
}
}
return $v$0;
}
function $Ic($p$0) {
if ($p$0.$w) {
if ($p$0.$4j) {
$p$0.$w.$1x('clearModalBackground');
$p$0.$w.$v('modalBackground');
}
else {
$p$0.$w.$1x('modalBackground');
$p$0.$w.$v('clearModalBackground');
}
}
}
_o365c.$D.prototype = {
$d: 0,
$2K: null,
$3v: true,
$2v: null,
$Cw: false,
$1S: null,
$CR: null,
$4j: false,
$AN: false,
$w: null,
$Gi: false,
$Gu: false,
$Ct: false,
$QE: true,
$QC: true,
$Js: null,
$Jm: null,
$7d: true,
$PQ: null,
$GW: null,
$8h: null,
$8l: null,
$j: null,
$7y: false,
$Pp: 0,
$87: false,
$1Y: null,
$6a: true,
$5m: false,
$B: null,
$1h: null,
$1l: null,
$3u: null,
add_$FQ: function _o365c_$D$add_$FQ($p$0) {
this.$1r('IsShown', $p$0);
},
remove_$FQ: function _o365c_$D$remove_$FQ($p$0) {
this.$1j('IsShown', $p$0);
},
add_$Lt: function _o365c_$D$add_$Lt($p$0) {
this.$1r(_js.$3.$3I.$2Y, $p$0);
},
remove_$Lt: function _o365c_$D$remove_$Lt($p$0) {
this.$1j(_js.$3.$3I.$2Y, $p$0);
},
get_$C2: function _o365c_$D$get_$C2() {
return this.$1Y;
},
set_$C2: function _o365c_$D$set_$C2($p$0) {
if (this.$1Y !== $p$0) {
if (!$5(this.$1Y) && this.$86) {
this.$1Y.$JK(this);
this.$1Y.set_$5S(null);
}
this.$1Y = $p$0;
$4(this, 'PopupLayout');
if (!$5(this.$1Y)) {
this.$1Y.set_$5S(this);
if (this.get_$3F()) {
this.$5H();
}
}
}
return $p$0;
},
get_$K4: function _o365c_$D$get_$K4() {
return this.$7d;
},
set_$K4: function _o365c_$D$set_$K4($p$0) {
if (this.$7d !== $p$0) {
this.$7d = $p$0;
$4(this, 'DismissOnParentFocus');
}
return $p$0;
},
get_$O: function _o365c_$D$get_$O() {
return !this.$1A;
},
set_$O: function _o365c_$D$set_$O($p$0) {
if (this.$7y) {
this.$87 = $p$0;
}
if (this.$1A === $p$0) {
if ($p$0) {
this.$1.style.left = '-10000px';
$6w(this, $p$0);
}
else {
this.$LP();
}
}
return $p$0;
},
get_$LJ: function _o365c_$D$get_$LJ() {
return this.$4j;
},
set_$LJ: function _o365c_$D$set_$LJ($p$0) {
this.$4j = $p$0;
this.$1.setAttribute('IsModal', this.$4j);
return $p$0;
},
get_$8w: function _o365c_$D$get_$8w() {
return this.$6a;
},
set_$8w: function _o365c_$D$set_$8w($p$0) {
if (this.$6a !== $p$0) {
this.$6a = $p$0;
$4(this, 'SetFocusOnPreviousElement');
}
return $p$0;
},
get_$9E: function _o365c_$D$get_$9E() {
return this.$Cw;
},
set_$9E: function _o365c_$D$set_$9E($p$0) {
this.$Cw = $p$0;
if (this.$Cw) {
this.$v(this.$2K);
}
else {
this.$1x(this.$2K);
}
return $p$0;
},
get_$JM: function _o365c_$D$get_$JM() {
return this.$1S;
},
set_$JM: function _o365c_$D$set_$JM($p$0) {
if (this.$1S !== $p$0) {
this.$1S = $p$0;
$4(this, 'CloseCommand');
}
return $p$0;
},
get_$GN: function _o365c_$D$get_$GN() {
return this.$8h;
},
set_$GN: function _o365c_$D$set_$GN($p$0) {
this.$8h = $p$0;
return $p$0;
},
get_$C1: function _o365c_$D$get_$C1() {
if (!this.$8l && this.$I) {
this.$8l = this.$I.$1t('PopupContent');
}
return this.$8l;
},
get_$M8: function _o365c_$D$get_$M8() {
return this.$1h.get_$2h();
},
get_$1O: function _o365c_$D$get_$1O() {
return '.PopupHandler' + this.$d;
},
get_$Lh: function _o365c_$D$get_$Lh() {
return this.$Ct && this.$j.get_$Lj();
},
get_$3h: function _o365c_$D$get_$3h() {
return _0365f.$6.$Gf;
},
get_$77: function _o365c_$D$get_$77() {
if ($5(this.$w)) {
this.$w = new _o365c.$D(_js.$4.$17(this.$1).createElement('div'), this.$j, this.$B, this.$1h, this.$1l);
this.$w.$3v = false;
this.$w.set_$9E(false);
this.$w.$Ct = false;
this.$w.set_$8w(false);
this.$w.$Gi = true;
this.$w.$1.setAttribute('IsModal', this.$4j);
this.$w.$9('mousedown', this.$$d_$Kw, this.get_$1O());
var $v$0 = new _o365c.$1w(this.$j, this.$1l);
$v$0.set_$3j(0);
$v$0.set_$4Q(0);
$v$0.$AZ = false;
$v$0.$Aa = false;
this.$w.set_$C2($v$0);
$Ic(this);
if (this.get_$3F()) {
this.$w.$z();
}
}
return this.$w;
},
get_$QA: function _o365c_$D$get_$QA() {
return this.$4j || this.$AN;
},
get_$B1: function _o365c_$D$get_$B1() {
return this.$7y;
},
set_$B1: function _o365c_$D$set_$B1($p$0) {
if (this.$7y !== $p$0) {
this.$7y = $p$0;
var $v$0 = _js.$4.$Kd(document.body, 'minWidth') || '0px';
var $v$1 = parseInt($v$0.substr(0, $v$0.length - 2), 10);
if ($p$0 && _js.$4.$17(this.$1).documentElement.clientWidth >= $v$1) {
document.body.style.overflow = 'hidden';
}
else {
document.body.style.overflow = '';
}
}
return $p$0;
},
$Kg: function _o365c_$D$$Kg() {
return 'popupShadow';
},
$8g: function _o365c_$D$$8g() {
_js.$9.prototype.$8g.call(this);
this.$1.tabIndex = _js.$5.$6I;
this.$1.style.position = 'absolute';
(this.$1.style)['boxSizing'] = 'border-box';
$Id(this, '0px');
if (this.$3v) {
this.$2v = new _o365c.$D.$Ou(this);
this.$2v.$Lb();
}
this.$2M(4);
},
$GL: function _o365c_$D$$GL() {
_js.$3.prototype.$GL.call(this);
this.$PQ = new _C(this.$$d_$5H, this.get_$3h());
$4(this, 'ResizeCommand');
},
$2r: function _o365c_$D$$2r() {
if (this.get_$QA()) {
this.get_$77().$z();
this.get_$77().set_$O(true);
}
var $v$0 = new _o365c.$1H(this, true, document.activeElement);
_js.$9.prototype.$2r.call(this);
$Ib(this);
this.$B.$QW(_o365c.$1H, $v$0);
$IY(this);
this.$Pl();
this.$5m = false;
},
$2a: function _o365c_$D$$2a() {
this.$5m = !!(this.$5m | this.get_$F8() || this.$1.contains(_js.$4.$17(this.$1).activeElement));
_js.$9.prototype.$2a.call(this);
$6w(this, false);
this.$B.$QW(_o365c.$1H, new _o365c.$1H(this, false, document.activeElement));
if (this.$w) {
this.$w.$1T();
this.get_$77().set_$O(false);
}
},
$52: function _o365c_$D$$52() {
_js.$9.prototype.$52.call(this);
if (this.$I) {
this.$8l = this.$I.$1t('PopupContent');
}
},
$5r: function _o365c_$D$$5r() {
this.$HK();
this.$CR.$k();
this.set_$O(false);
if (this.$w) {
this.$w.$J('mousedown', this.get_$1O());
this.get_$77().$k();
}
if (this.$1Y) {
this.$1Y.$k();
}
if (this.$2v) {
this.$2v.$k();
this.$2v = null;
}
_js.$3.prototype.$5r.call(this);
},
$Pl: function _o365c_$D$$Pl() {
this.$1.style.left = '';
this.$5H();
this.$J6();
this.$1.style.display = 'block';
$Dg(this, true);
},
$LP: function _o365c_$D$$LP() {
this.$5m = this.get_$F8() || this.$1.contains(_js.$4.$17(this.$1).activeElement);
this.$HK();
$Dg(this, false);
},
$J6: function _o365c_$D$$J6() {
this.$B.$Ca(_0365f.$1v, this.$$d_$L9);
var $v$0 = _js.$4.$17(this.$1);
var $v$1 = _js.$4.$7o($v$0);
_js.$4.$7l($v$1).$9('resize', this.$$d_$LB, this.get_$1O());
this.$9('keydown', this.$$d_$L5, this.get_$1O());
this.$J5();
},
$HK: function _o365c_$D$$HK() {
this.$B.$HM(_0365f.$1v, this.$$d_$L9);
var $v$0 = _js.$4.$17(this.$1);
var $v$1 = _js.$4.$7o($v$0);
if ($v$1) {
_js.$4.$7l($v$1).$J('resize', this.get_$1O());
}
this.$J('keydown', this.get_$1O());
this.$Q7();
},
$J5: function _o365c_$D$$J5() {
if (this.$3v) {
this.$3u = [];
if (this.$2v) {
this.$2v.$J7();
}
var $v$0 = new _js.$3(_js.$4.$17(this.$1).body);
$v$0.$9('contextmenu', this.$$d_$Ky, this.get_$1O());
$v$0.$9('mousedown', this.$$d_$Ky, this.get_$1O());
$v$0.$9('keydown', this.$$d_$Kx, this.get_$1O());
Array.add(this.$3u, $v$0);
var $v$1 = $Di(this);
for (var $v$2 = 0; $v$2 < $v$1.length; $v$2++) {
var $v$3 = new _js.$3($v$1[$v$2]);
$v$3.$9('contextmenu', this.$$d_$Ky, this.get_$1O());
$v$3.$9('mousedown', this.$$d_$Ky, this.get_$1O());
$v$3.$9('keydown', this.$$d_$Kx, this.get_$1O());
Array.add(this.$3u, $v$3);
}
}
},
$Q7: function _o365c_$D$$Q7() {
if (this.$2v) {
this.$2v.$HL();
}
if (this.$3u) {
var $v$0 = $Di(this);
for (var $v$1 = 0; $v$1 < this.$3u.length; $v$1++) {
var $v$2 = this.$3u[$v$1];
if (_o365c.$D.$Lv($v$2)) {
if ($v$2.$1 === _js.$4.$17(this.$1).body || Array.contains($v$0, $v$2.$1)) {
$v$2.$J('contextmenu', this.get_$1O());
$v$2.$J('mousedown', this.get_$1O());
$v$2.$J('keydown', this.get_$1O());
}
}
}
}
this.$3u = null;
},
$LB: function _o365c_$D$$LB($p$0) {
if (this.$1Y && this.$1Y.get_$PE()) {
this.$5H();
}
},
$L5: function _o365c_$D$$L5($p$0) {
if (this.$3v) {
$Ia(this, $p$0);
}
if (_o365c.$D.$Ls($p$0)) {
$p$0.$1P();
}
if ($p$0.get_$13() !== 9 && $p$0.get_$13() !== 117) {
$p$0.$1y();
}
},
$L2: function _o365c_$D$$L2($p$0) {
if (this.$1S && this.$1S.$c) {
this.$1S.$p();
}
},
$5H: function _o365c_$D$$5H() {
if (this.get_$O() && this.$1Y) {
this.$1Y.$5H(this);
}
},
$Es: function _o365c_$D$$Es($p$0) {
var $v$0 = ($p$0) ? this.$Js : this.$Jm;
if ($v$0) {
return this.$j.$7O($v$0, this.$1, ($p$0) ? this.$$d_$Ax : this.$$d_$Aw, false);
}
if (this.$1Y) {
return this.$1Y.$Kf(this, $p$0, ($p$0) ? this.$$d_$Ax : this.$$d_$Aw);
}
throw Error.invalidOperation('No animation has been specified and no layout exists');
},
$Ax: function _o365c_$D$$Ax() {
this.set_$B1(false);
if (this.$GW) {
this.$GW(this);
}
$6w(this, this.$87);
},
$Aw: function _o365c_$D$$Aw() {
this.set_$B1(false);
$6w(this, this.$87);
if (this.$8h) {
this.$8h(this);
}
},
$EJ: function _o365c_$D$$EJ() {
this.set_$O(false);
},
$Ky: function _o365c_$D$$Ky($p$0) {
$Dh(this, $p$0.get_$1q());
},
$Kx: function _o365c_$D$$Kx($p$0) {
if ($p$0.get_$13() === 9) {
$Dh(this, $p$0.get_$1q());
}
},
$Kw: function _o365c_$D$$Kw($p$0) {
$p$0.$1P();
},
$L9: function _o365c_$D$$L9($p$0) {
if (this.$Fc !== 1) {
this.set_$O(false);
}
}
}
_o365c.$D.$Ou = function _o365c_$D_$Ou($p$0) {
this.$$d_$LE = Function.createDelegate(this, this.$LE);
_o365c.$D.$Ou.initializeBase(this);
this.$4G = $p$0;
}
_o365c.$D.$Ou.prototype = {
$4G: null,
$2D: null,
$55: null,
$Lb: function _o365c_$D_$Ou$$Lb() {
this.$2D = [];
var $v$0 = this.$4G.$1.parentNode;
while ($v$0 && $v$0 !== document.body) {
var $v$1 = _js.$4.$7l($v$0);
if ($v$1.$LK('scrollContainer')) {
Array.add(this.$2D, $v$1);
}
$v$0 = $v$0.parentNode;
}
},
$J7: function _o365c_$D_$Ou$$J7() {
for (var $v$1 = 0; $v$1 < this.$2D.length; $v$1++) {
(this.$2D[$v$1]).$9('scroll', this.$$d_$LE, this.$4G.get_$1O());
}
var $v$0 = _js.$O.getInstance();
if (($v$0.$80 || $v$0.$7x) && this.$2D.length > 0) {
this.$55 = new (_0365f.$Y.$$(Sys.UI.Point))();
for (var $v$2 = 0; $v$2 < this.$2D.length; $v$2++) {
var $v$3 = this.$2D[$v$2];
this.$55.$3p(new Sys.UI.Point($v$3.$X.scrollLeft, $v$3.$X.scrollTop));
}
}
},
$HL: function _o365c_$D_$Ou$$HL() {
for (var $v$0 = 0; $v$0 < this.$2D.length; $v$0++) {
(this.$2D[$v$0]).$J('scroll', this.$4G.get_$1O());
}
this.$55 = null;
},
$5r: function _o365c_$D_$Ou$$5r() {
this.$HL();
this.$2D = null;
},
$LE: function _o365c_$D_$Ou$$LE($p$0) {
var $v$0 = _js.$O.getInstance();
if (($v$0.$80 || $v$0.$7x) && this.$55) {
for (var $v$1 = 0; $v$1 < this.$2D.length; $v$1++) {
var $v$2 = this.$2D[$v$1];
if ($v$2.$X === $p$0.get_$1q()) {
if ($v$2.$X.scrollLeft === this.$55.get_$QI($v$1).x && $v$2.$X.scrollTop === this.$55.get_$QI($v$1).y) {
return;
}
break;
}
}
}
this.$4G.set_$O(false);
}
}
_o365c.$i = function _o365c_$i($p$0, $p$1, $p$2) {
this.$$d_$L8 = Function.createDelegate(this, this.$L8);
this.$$d_$LA = Function.createDelegate(this, this.$LA);
this.$28 = 0;
_o365c.$i.initializeBase(this, [ $p$0, $p$2 ]);
this.$B = $p$1;
this.$BA = !$p$2.get_$5s();
}
function $If($p$0, $p$1, $p$2, $p$3) {
$p$1.$1.style.left = $p$2.x.toString() + 'px';
if ($p$3) {
$p$1.$1.style.bottom = $p$2.y.toString() + 'px';
}
else {
$p$1.$1.style.top = $p$2.y.toString() + 'px';
}
}
function $Dk($p$0) {
if (!$p$0.$BA) {
switch ($p$0.$28) {
case 4:
return 0;
case 7:
return 8;
case 3:
return 1;
case 0:
return 4;
case 1:
return 3;
case 6:
return 5;
case 5:
return 6;
default:
return $p$0.$28;
}
}
else {
return $p$0.$28;
}
}
function $9c($p$0) {
return ($p$0.$BA) ? $p$0.$5n : -$p$0.$5n;
}
_o365c.$i.prototype = {
$B: null,
$BA: false,
$1R: null,
$5n: 0,
$9H: 0,
$KO: 0,
$Ek: false,
$AY: false,
get_$E5: function _o365c_$i$get_$E5() {
return this.$1R;
},
set_$E5: function _o365c_$i$set_$E5($p$0) {
if (this.$1R !== $p$0) {
this.$1R = $p$0;
$4(this, 'AnchorElement');
}
return $p$0;
},
get_$PE: function _o365c_$i$get_$PE() {
return true;
},
get_$Ov: function _o365c_$i$get_$Ov() {
return false;
},
$5H: function _o365c_$i$$5H($p$0) {
if (!this.$1R) {
throw Error.invalidOperation('No anchor element was provided for PopupAnchorLayout.');
}
if (this.$Ek || this.$AY) {
var $v$1 = (this.$1R.$1.offsetWidth + this.$KO).toString() + 'px';
if (this.$AY) {
$p$0.$1.style.minWidth = $v$1;
}
else {
$p$0.$1.style.width = $v$1;
}
}
var $v$0 = this.$JD($p$0);
$v$0 = this.$In($p$0, $v$0);
$If(this, $p$0, $v$0, this.get_$Ov());
},
$JK: function _o365c_$i$$JK($p$0) {
$p$0.$1.style.left = '';
$p$0.$1.style.top = '';
if (this.$Ek) {
$p$0.$1.style.width = '';
}
else if (this.$AY) {
$p$0.$1.style.minWidth = '';
}
},
$Kf: function _o365c_$i$$Kf($p$0, $p$1, $p$2) {
if ($p$1) {
$p$0.$1.style.overflowY = 'hidden';
var $$t_3 = this;
return this.$j.$AB($p$0.$1, 'contextualExpand', true, function() {
$p$0.$1.style.overflowY = '';
$p$2();
});
}
else {
return this.$j.$A9($p$0.$1, 'contextualCollapse', true, $p$2);
}
},
$JD: function _o365c_$i$$JD($p$0) {
var $v$0 = _js.$4.$3x(this.$1R.$1);
var $v$1 = _o365c.$V.$E3($v$0.$4s, this.$82, _js.$4.$17($p$0.$1)) + $9c(this);
var $v$2 = $v$0.$3g + this.$9H;
if (this.$28 !== 7 && this.$28 !== 8) {
$v$2 += this.$1R.$1.offsetHeight;
}
if (_js.$O.getInstance().$F9) {
var $v$3 = _js.$4.$17($p$0.$1).body.children;
for (var $v$4 = 0; $v$4 < $v$3.length; $v$4++) {
if ($v$3[$v$4].nodeType === 1 && $v$3[$v$4].tagName && $v$3[$v$4].tagName.toLowerCase() === 'iframe' && $v$3[$v$4].id !== 'manifestLoaderFrame') {
$v$2 -= $v$3[$v$4].offsetHeight;
}
}
}
switch ($Dk(this)) {
case 0:
break;
case 1:
$v$1 += this.$1R.$1.offsetWidth / 2;
break;
case 2:
$v$1 += (this.$1R.$1.offsetWidth - $p$0.$1.offsetWidth) / 2;
break;
case 3:
$v$1 += (this.$1R.$1.offsetWidth / 2) - $p$0.$1.offsetWidth;
break;
case 4:
$v$1 += this.$1R.$1.offsetWidth - $p$0.$1.offsetWidth;
break;
case 7:
$v$1 += this.$1R.$1.offsetWidth;
if (this.$70($v$1, $p$0) !== $v$1) {
$v$1 -= $p$0.$1.offsetWidth + this.$1R.$1.offsetWidth + (2 * $9c(this));
}
break;
case 8:
$v$1 -= $p$0.$1.offsetWidth;
if (this.$70($v$1, $p$0) !== $v$1) {
$v$1 += this.$1R.$1.offsetWidth + $p$0.$1.offsetWidth - (2 * $9c(this));
}
break;
case 5:
$v$1 -= $p$0.$1.offsetWidth / 2;
break;
case 6:
$v$1 += this.$1R.$1.offsetWidth - ($p$0.$1.offsetWidth / 2);
break;
default:
throw Error.invalidOperation('Popup doesnt support the aligment type passed as parameter: ' + _o365c.$1h.toString($Dk(this)));
}
return new Sys.UI.Point($v$1, $v$2);
},
$In: function _o365c_$i$$In($p$0, $p$1) {
var $v$0 = this.$70($p$1.x, $p$0);
var $v$1 = this.$9g($p$1.y, $p$0);
if ($Do(this, $p$0, $v$1) > 0) {
var $v$2 = _js.$4.$3x(this.$1R.$1);
$v$1 = this.$9g($v$2.$3g - $p$0.$1.clientHeight, $p$0);
}
return new Sys.UI.Point($v$0, $v$1);
},
$GJ: function _o365c_$i$$GJ($p$0, $p$1) {
_js.$l.prototype.$GJ.call(this, $p$0, $p$1);
if (this.$Q.get_$3F()) {
this.$B.$Ca(_0365f.$1I, this.$$d_$LA);
this.$B.$Ca(_0365f.$1G, this.$$d_$L8);
}
else {
this.$B.$HM(_0365f.$1I, this.$$d_$LA);
this.$B.$HM(_0365f.$1G, this.$$d_$L8);
}
},
$8f: function _o365c_$i$$8f() {
_js.$l.prototype.$8f.call(this);
if (!this.$Q) {
this.$B.$HM(_0365f.$1I, this.$$d_$LA);
this.$B.$HM(_0365f.$1G, this.$$d_$L8);
}
else if (this.$Q.get_$3F()) {
this.$B.$Ca(_0365f.$1I, this.$$d_$LA);
this.$B.$Ca(_0365f.$1G, this.$$d_$L8);
}
},
$5r: function _o365c_$i$$5r() {
_js.$l.prototype.$5r.call(this);
this.$B.$HM(_0365f.$1I, this.$$d_$LA);
this.$B.$HM(_0365f.$1G, this.$$d_$L8);
},
$LA: function _o365c_$i$$LA($p$0) {
if (this.$Q && this.$Q.get_$3F() && _js.$3.isInstanceOfType(this.$Q)) {
this.$5H(this.$Q);
}
},
$L8: function _o365c_$i$$L8($p$0) {
if (this.$Q && this.$Q.get_$3F() && _o365c.$D.isInstanceOfType(this.$Q)) {
(this.$Q).$1S.$p();
}
}
}
_o365c.$1S = function _o365c_$1S($p$0, $p$1) {
this.$AJ = 1;
_o365c.$1S.initializeBase(this, [ $p$0, $p$1 ]);
}
function $Dl($p$0, $p$1, $p$2) {
switch ($p$0.get_$4d()) {
case 0:
$p$1.$1.style.top = $p$2;
break;
case 1:
$p$1.$1.style.right = $p$2;
break;
case 2:
$p$1.$1.style.bottom = $p$2;
break;
case 3:
$p$1.$1.style.left = $p$2;
break;
default:
throw Error.invalidOperation('Invalid PopupDockDirection');
}
}
_o365c.$1S.prototype = {
get_$PE: function _o365c_$1S$get_$PE() {
return false;
},
get_$4d: function _o365c_$1S$get_$4d() {
return this.$AJ;
},
set_$4d: function _o365c_$1S$set_$4d($p$0) {
this.$AJ = $p$0;
return $p$0;
},
$5H: function _o365c_$1S$$5H($p$0) {
$Dl(this, $p$0, '0px');
this.$It($p$0);
},
$JK: function _o365c_$1S$$JK($p$0) {
$Dl(this, $p$0, '');
this.$PL($p$0);
},
$Kf: function _o365c_$1S$$Kf($p$0, $p$1, $p$2) {
var $v$0;
switch (this.get_$4d()) {
case 0:
$v$0 = ($p$1) ? 'slideInT' : 'slideOutT';
break;
case 2:
$v$0 = ($p$1) ? 'taskInD' : 'taskOutD';
break;
case 3:
$v$0 = ($p$1) ? 'slideInL' : 'slideOutL';
break;
case 1:
$v$0 = ($p$1) ? 'slideInR' : 'slideOutR';
break;
default:
throw Error.invalidOperation('Invalid PopupDockDirection');
}
return this.$j.$7O($v$0, $p$0.$1, $p$2, false);
},
$It: function _o365c_$1S$$It($p$0) {
switch (this.get_$4d()) {
case 0:
case 2:
$p$0.$1.style.width = '100%';
$p$0.$1.style.left = '0px';
$p$0.$1.style.right = '0px';
break;
case 1:
case 3:
$p$0.$1.style.height = '100%';
$p$0.$1.style.top = '0px';
$p$0.$1.style.bottom = '0px';
break;
default:
throw Error.invalidOperation('Invalid PopupDockDirection');
}
},
$PL: function _o365c_$1S$$PL($p$0) {
switch (this.get_$4d()) {
case 0:
case 2:
$p$0.$1.style.width = '';
$p$0.$1.style.left = '';
$p$0.$1.style.right = '';
break;
case 1:
case 3:
$p$0.$1.style.height = '';
$p$0.$1.style.top = '';
$p$0.$1.style.bottom = '';
break;
default:
throw Error.invalidOperation('Invalid PopupDockDirection');
}
}
}
_o365c.$1w = function _o365c_$1w($p$0, $p$1) {
_o365c.$1w.initializeBase(this, [ $p$0, $p$1 ]);
}
_o365c.$1w.prototype = {
$9J: 0,
$9K: 0,
$AZ: false,
$KP: false,
$Aa: false,
$Pi: true,
$5L: null,
get_$PE: function _o365c_$1w$get_$PE() {
return false;
},
get_$3j: function _o365c_$1w$get_$3j() {
return this.$9J;
},
set_$3j: function _o365c_$1w$set_$3j($p$0) {
this.$9J = $p$0;
if (!$5(this.$5L)) {
this.$5H(this.$5L);
}
return $p$0;
},
get_$4Q: function _o365c_$1w$get_$4Q() {
return this.$9K;
},
set_$4Q: function _o365c_$1w$set_$4Q($p$0) {
this.$9K = $p$0;
if (!$5(this.$5L)) {
this.$5H(this.$5L);
}
return $p$0;
},
$5H: function _o365c_$1w$$5H($p$0) {
this.$5L = $p$0;
var $v$0 = this.$9J;
if ((this.$AZ && $Ig(this, $p$0, this.$9J) > 0) || (this.$82 && this.$KP)) {
$v$0 = $v$0 - $p$0.$1.offsetWidth;
}
$p$0.$1.style.left = this.$70($v$0, $p$0).toString() + 'px';
var $v$1 = this.$9K;
if (this.$Aa && $Do(this, $p$0, this.$9K) > 0) {
$v$1 = $v$1 - $p$0.$1.offsetHeight;
}
if (this.$Pi) {
$v$1 = this.$9g($v$1, $p$0);
}
$p$0.$1.style.top = $v$1.toString() + 'px';
},
$JK: function _o365c_$1w$$JK($p$0) {
$p$0.$1.style.left = '';
$p$0.$1.style.top = '';
},
$Kf: function _o365c_$1w$$Kf($p$0, $p$1, $p$2) {
if ($p$1) {
$p$0.$1.style.overflowY = 'hidden';
var $$t_3 = this;
return this.$j.$AB($p$0.$1, 'contextualExpand', true, function() {
$p$0.$1.style.overflowY = '';
$p$2();
});
}
else {
return this.$j.$A9($p$0.$1, 'contextualCollapse', true, $p$2);
}
}
}
_o365c.$V = function _o365c_$V($p$0, $p$1) {
_o365c.$V.initializeBase(this);
this.$82 = $p$1.get_$5s();
this.$j = $p$0;
}
_o365c.$V.$E3 = function _o365c_$V$$E3($p$0, $p$1, $p$2) {
var $v$0 = 0;
if ($p$1) {
var $v$1 = $p$2.documentElement.clientWidth - $p$2.body.clientWidth;
if ($v$1 < 0) {
$v$0 = -$v$1;
}
}
return $v$0 + $p$0;
}
function $Dn($p$0, $p$1) {
var $v$0 = $p$1.documentElement.clientWidth;
var $v$1 = $p$1.body.clientWidth;
if ($p$0.$82 && ($v$1 > $v$0)) {
return $v$1;
}
return Math.min($v$0, $v$1);
}
function $Dm($p$0, $p$1) {
return Math.min($p$1.documentElement.clientHeight, $p$1.body.clientHeight);
}
function $Ig($p$0, $p$1, $p$2) {
var $v$0 = ($p$2 + $p$1.$1.offsetWidth) - $Dn($p$0, _js.$4.$17($p$1.$1));
return Math.max(0, $v$0);
}
function $Do($p$0, $p$1, $p$2) {
var $v$0 = ($p$2 + $p$1.$1.offsetHeight) - $Dm($p$0, _js.$4.$17($p$1.$1));
return Math.max(0, $v$0);
}
_o365c.$V.prototype = {
$j: null,
$82: false,
$70: function _o365c_$V$$70($p$0, $p$1) {
var $v$0 = _js.$4.$17($p$1.$1);
var $v$1 = _js.$4.$7o($v$0);
var $v$2 = $v$1.pageXOffset;
var $v$3 = ($v$2 !== undefined) ? $v$2 : $v$0.body.scrollLeft;
var $v$4 = Math.min($p$0, $Dn(this, _js.$4.$17($p$1.$1)) - $p$1.$1.offsetWidth + $v$3);
$v$4 = Math.max($v$4, 0);
return $v$4;
},
$9g: function _o365c_$V$$9g($p$0, $p$1) {
var $v$0 = Math.min($p$0, $Dm(this, _js.$4.$17($p$1.$1)) - $p$1.$1.offsetHeight);
$v$0 = Math.max($v$0, 0);
return $v$0;
}
}
_o365c.$2O = function _o365c_$2O($p$0, $p$1) {
_o365c.$2O.initializeBase(this, [ $p$0, $p$1 ]);
_o365c.$1S.prototype.set_$4d.call(this, 1);
}
_o365c.$2O.prototype = {
get_$4d: function _o365c_$2O$get_$4d() {
return _o365c.$1S.prototype.get_$4d.call(this);
},
set_$4d: function _o365c_$2O$set_$4d($p$0) {
throw Error.invalidOperation('Cannot change the DockDirection of a PopupOverlayLayout');
return $p$0;
},
$Kf: function _o365c_$2O$$Kf($p$0, $p$1, $p$2) {
var $v$0 = this.$j.$7O(($p$1) ? 'overlayIn' : 'overlayOut', $p$0.$1, $p$2, false);
if ($p$1) {
var $v$1 = this.$j.$7O('fadeIn', $p$0.get_$C1().$1, null, false);
$p$0.get_$C1().set_$2W(true);
var $v$2 = new _o365c.$24();
$v$2.$E0($v$0, 0);
var $$t_6 = this;
$v$2.$E0($v$1, 200, function() {
$p$0.get_$C1().set_$2W(false);
});
return $v$2;
}
else {
return $v$0;
}
}
}
_o365c.$t = function _o365c_$t($p$0, $p$1, $p$2, $p$3) {
this.$$d_$PC = Function.createDelegate(this, this.$PC);
this.$$d_$LC = Function.createDelegate(this, this.$LC);
this.$$d_$LD = Function.createDelegate(this, this.$LD);
this.$4E = new _js.$1L();
this.$B = new _0365f.$U();
_o365c.$t.initializeBase(this, [ $p$0 ]);
this.$3r = $p$1;
this.$5t = this.$3r.get_$FI() && _o365c.$t.$Op(this.$3r.get_$PD(), 'OS') >= 6;
this.$B = $p$3;
if (this.$5t) {
this.$9x = new _o365c.$j($p$2.get_$2h());
}
}
_o365c.$t.$Op = function _o365c_$t$$Op($p$0, $p$1) {
var $v$0 = $p$0.indexOf($p$1) + $p$1.length + 1;
var $v$1 = $p$0.indexOf(' ', $v$0);
var $v$2 = $p$0.substr($v$0, $v$1 - $v$0);
return parseFloat($v$2.replace('_', '.'));
}
function $IW($p$0) {
$p$0.$1.style.display = 'none';
var $v$0 = $p$0.$1.offsetWidth;
$p$0.$1.style.display = '';
return $v$0;
}
function $Dd($p$0) {
if (!$p$0.$5u && ($p$0.$4E.get_$Ak() || $p$0.$3Z)) {
var $$t_0 = this;
$p$0.$9('scroll', function() {
if ($p$0.$3Z && $p$0.get_$Az()) {
$p$0.$7D = $p$0.$1.scrollLeft;
$p$0.$7E = $p$0.$1.scrollTop;
}
if ($p$0.$4E.get_$Ak()) {
$p$0.$4E.$Gp();
}
}, 'NativeScrollRegion');
$p$0.$5u = true;
}
else if ($p$0.$5u && !$p$0.$4E.get_$Ak() && !$p$0.$3Z) {
$p$0.$J('scroll', 'NativeScrollRegion');
$p$0.$5u = false;
}
}
_o365c.$t.prototype = {
$5t: false,
$3r: null,
$QD: false,
$3Z: false,
$7D: 0,
$7E: 0,
$7C: null,
$5u: false,
$PF: false,
$9x: null,
add_$Bx: function _o365c_$t$add_$Bx($p$0) {
this.$4E.$E1($p$0);
$Dd(this);
},
remove_$Bx: function _o365c_$t$remove_$Bx($p$0) {
this.$4E.$Gs($p$0);
$Dd(this);
},
get_$3j: function _o365c_$t$get_$3j() {
return (this.$3Z && !this.get_$Az()) ? this.$7D : this.$1.scrollLeft;
},
set_$3j: function _o365c_$t$set_$3j($p$0) {
this.$1.scrollLeft = $p$0;
if (this.$3Z) {
this.$7D = $p$0;
}
return $p$0;
},
get_$4Q: function _o365c_$t$get_$4Q() {
return (this.$3Z && !this.get_$Az()) ? this.$7E : this.$1.scrollTop;
},
set_$4Q: function _o365c_$t$set_$4Q($p$0) {
this.$1.scrollTop = $p$0;
if (this.$3Z) {
this.$7E = $p$0;
}
return $p$0;
},
get_$Ez: function _o365c_$t$get_$Ez() {
return this.$3r.get_$M3() && !this.$3r.get_$Li();
},
get_$Az: function _o365c_$t$get_$Az() {
return !this.$1A && this.get_$3F() && this.$1.style.visibility !== 'none';
},
$2r: function _o365c_$t$$2r() {
_js.$3.prototype.$2r.call(this);
if (this.$3Z) {
this.set_$3j(this.$7D);
this.set_$4Q(this.$7E);
}
if (this.get_$Ez() && !this.$5t && this.$PF) {
var $$t_2 = this;
_js.$2.get_$a().$4I(this.get_$3h(), 'NativeScrollRegion.OnActivate', function() {
var $v$0 = $$t_2.get_$3j();
var $v$1 = $$t_2.get_$4Q();
$IW($$t_2);
if ($v$0 > 0) {
$$t_2.set_$3j($v$0);
}
if ($v$1 > 0) {
$$t_2.set_$4Q($v$1);
}
}, 90);
}
if (this.$3r.get_$FB()) {
this.$B.$Ca(_0365f.$1y, this.$$d_$LD);
this.$B.$Ca(_0365f.$1x, this.$$d_$LC);
}
},
$2a: function _o365c_$t$$2a() {
_js.$3.prototype.$2a.call(this);
if (this.$3r.get_$FB()) {
this.$B.$HM(_0365f.$1y, this.$$d_$LD);
this.$B.$HM(_0365f.$1x, this.$$d_$LC);
}
},
$8g: function _o365c_$t$$8g() {
_js.$3.prototype.$8g.call(this);
if (!this.$5t && this.get_$Ez()) {
this.$v('customScrollBar');
if (this.$QD) {
this.$v('customScrollBarLight');
}
}
this.$v('scrollContainer');
if (this.$5t) {
this.$v('nativeScrollInertia');
}
this.add_$Bx(this.$$d_$PC);
},
$5r: function _o365c_$t$$5r() {
_js.$3.prototype.$5r.call(this);
this.remove_$Bx(this.$$d_$PC);
if (this.$5u) {
this.$J('scroll', 'NativeScrollRegion');
}
},
$7n: function _o365c_$t$$7n() {
if (this.$9x) {
return [ this.$9x ];
}
else {
return _js.$3.prototype.$7n.call(this);
}
},
$LD: function _o365c_$t$$LD($p$0) {
this.$7C = new Sys.UI.Point(this.get_$3j(), this.get_$4Q());
},
$LC: function _o365c_$t$$LC($p$0) {
if (this.$7C) {
this.set_$3j(this.$7C.x);
this.set_$4Q(this.$7C.y);
}
},
$PC: function _o365c_$t$$PC() {
this.$B.$QW(_0365f.$22, new _0365f.$22('NativeScrollRegion scroll'));
}
}
_o365c.$L = function _o365c_$L($p$0, $p$1) {
this.$$d_$Ix = Function.createDelegate(this, this.$Ix);
this.$$d_$Of = Function.createDelegate(this, this.$Of);
this.$1W = -1;
this.$4U = 1000;
_o365c.$L.initializeBase(this, [ $p$0 ]);
this.$j = $p$1;
}
function $Ii($p$0) {
for (var $v$0 = $p$0.$11.length - 1; $v$0 >= 0; $v$0--) {
$9e($p$0, $v$0);
}
$p$0.$1W = -1;
$p$0.$12 = 0;
$Ih($p$0, $p$0.$P, 0);
}
function $9e($p$0, $p$1) {
_js.$8.$Cj($p$1, 0, $p$0.$11.length, 'index');
var $v$0 = $p$0.$11[$p$1];
if ($p$0.$JH !== $v$0 && $v$0.$1.parentNode) {
$v$0.$1.parentNode.removeChild($v$0.$1);
}
Array.removeAt($p$0.$11, $p$1);
if ($p$0.$Co && !$p$0.$9B) {
_js.Trace.logInfo($p$0.get_$3h(), 'StackPanel->RemoveItemAt calling CheckUIObjectVisible to update child being removed');
var $v$1 = $p$0.$1.clientHeight;
var $v$2 = $p$0.$1.scrollTop;
var $v$3 = _js.$4.$3x($p$0.$1).$3g;
$9d($p$0, $v$0, $v$1, $v$2, $v$3);
}
}
function $Dp($p$0, $p$1, $p$2) {
for (var $v$0 = 0, $v$1 = $p$2.length; $v$0 < $v$1; $v$0++) {
var $v$2 = $p$1 + $v$0;
if ($v$2 <= $p$0.$1W) {
$p$0.$1W++;
}
if ($v$2 <= $p$0.$12 && $v$2 - $p$0.$1W <= $p$0.$4U) {
$p$0.$12++;
$p$0.$7w($p$2[$v$0], $p$1 + $v$0);
}
else {
$Dq($p$0);
}
}
if ($p$0.$9B) {
$p$0.$Pg();
}
}
function $Dr($p$0, $p$1, $p$2) {
for (var $v$0 = $p$2.length - 1; $v$0 >= 0; $v$0--) {
var $v$1 = $p$1 + $v$0;
if ($v$1 <= $p$0.$1W) {
$p$0.$1W--;
}
if ($v$1 < $p$0.$12) {
$p$0.$12--;
$9e($p$0, $p$1 + $v$0);
}
}
if (!$p$0.$P.get_$H()) {
$p$0.$1W = -1;
$p$0.$12 = 0;
}
}
function $Ih($p$0, $p$1, $p$2) {
var $v$0 = $p$1.get_$H();
for (var $v$1 = 0; $v$1 < $v$0; $v$1++) {
if ($v$1 <= $p$0.$1W) {
$p$0.$1W++;
}
if ($v$1 < $p$0.$12) {
$p$0.$12++;
}
else if ($p$0.$12 - $p$0.$1W <= $p$0.$4U) {
var $v$2 = $p$1.get_$QI($v$1);
$p$0.$7w($v$2, $v$1 + $p$2);
}
}
}
function $9d($p$0, $p$1, $p$2, $p$3, $p$4) {
var $v$0 = $p$1.$1;
var $v$1 = $p$3 + $p$2;
var $v$2 = $v$0.offsetTop - $p$4;
var $v$3 = $v$0.offsetHeight;
var $v$4 = $v$2 + $v$3;
if (($p$3 > $v$4) || ($v$1 < $v$2)) {
$p$1.$2N(_o365c.$L.$Ay, false);
return;
}
$p$1.$2N(_o365c.$L.$Ay, true);
}
function $Dq($p$0) {
$p$0.$1W = $p$0.$12;
if (!$p$0.$B0) {
_js.Trace.logInfo($p$0.get_$3h(), 'EnqueueBackgroundActivate: adding to queue - lastActivatedIndex: {0} ', $p$0.$12);
$p$0.$B0 = true;
_js.$2.get_$a().$8p($p$0.get_$3h(), 'StackPanel.EnqueueBackgroundActivate', $p$0.$$d_$Ix);
}
}
_o365c.$L.prototype = {
$12: 0,
$B0: false,
$Co: false,
$9B: false,
$JH: null,
$j: null,
get_$3h: function _o365c_$L$get_$3h() {
return _0365f.$6.$HA;
},
$Pg: function _o365c_$L$$Pg() {
_js.Trace.logInfo(this.get_$3h(), 'SetViewportOffset');
if (!this.$9B) {
return;
}
var $v$0 = this.$1.offsetTop;
_js.Trace.logInfo(this.get_$3h(), 'SetViewportOffset-> stackPanelTop: ' + $v$0);
for (var $v$1 = 0, $v$2 = this.$11.length; $v$1 < $v$2; ++$v$1) {
var $v$3 = this.$11[$v$1];
var $v$4 = $v$3.$1;
var $v$5 = $v$4.offsetTop - $v$0;
$v$3.$2N(_o365c.$L.$HQ, $v$5);
_js.Trace.logInfo(this.get_$3h(), 'SetViewportOffset-> setting StackPanel.ViewportOffsetProperty: {0}', $v$5);
}
},
$GI: function _o365c_$L$$GI($p$0, $p$1) {
_o365c.$2M.prototype.$GI.call(this, $p$0, $p$1);
switch ($p$1.$2O) {
case 0:
$Dp(this, $p$1.$15, $p$1.$y);
break;
case 2:
$Dr(this, $p$1.$15, $p$1.$1v);
break;
case 1:
$Dr(this, $p$1.$15, $p$1.$y);
$Dp(this, $p$1.$5B, $p$1.$y);
break;
case 3:
var $v$0;
var $v$1 = $p$1.$15;
for (var $v$2 = 0, $v$3 = $p$1.$y.length; $v$2 < $v$3; $v$2++) {
$v$0 = $v$1 + $v$2;
if ($v$0 < this.$12) {
$9e(this, $v$0);
this.$7w($p$1.$y[$v$2], $v$0);
}
}
break;
case 4:
$Ii(this);
break;
}
},
$Im: function _o365c_$L$$Im($p$0, $p$1) {
if ($p$0.$1.parentNode && $p$0.$1.parentNode.nodeType !== 11) {
throw Error.argument('Can\'t add already added control to panel');
}
if ($p$1 === this.$11.length) {
this.$1.appendChild($p$0.$1);
}
else {
this.$1.insertBefore($p$0.$1, (this.$11[$p$1]).$1);
}
},
$7w: function _o365c_$L$$7w($p$0, $p$1) {
this.$Im($p$0, $p$1);
Array.insert(this.$11, $p$1, $p$0);
if (!this.$H8 && this.get_$3F()) {
$p$0.$z();
}
if (this.$Co && !this.$9B) {
var $v$0 = this.$1.clientHeight;
var $v$1 = this.$1.scrollTop;
var $v$2 = _js.$4.$3x(this.$1).$3g;
$9d(this, $p$0, $v$0, $v$1, $v$2);
}
},
$5r: function _o365c_$L$$5r() {
if (this.$Co) {
this.$J('scroll', '.StackPanel');
}
_o365c.$2M.prototype.$5r.call(this);
},
$Of: function _o365c_$L$$Of($p$0) {
var $v$0 = this.$1.clientHeight;
var $v$1 = this.$1.scrollTop;
var $v$2 = _js.$4.$3x(this.$1).$3g;
for (var $v$3 = 0, $v$4 = this.$11.length; $v$3 < $v$4; ++$v$3) {
var $v$5 = this.$11[$v$3];
$9d(this, $v$5, $v$0, $v$1, $v$2);
}
},
$Ix: function _o365c_$L$$Ix() {
_js.Trace.logInfo(this.get_$3h(), 'BackgroundActivate');
if (!this.$3G) {
this.$B0 = false;
for (var $v$0 = this.$P.get_$H(); this.$12 < $v$0 && this.$12 - this.$1W <= this.$4U; this.$12++) {
this.$7w(this.$P.get_$QI(this.$12), this.$12);
}
if (this.$12 - this.$1W <= this.$4U) {
this.$1W = 10000;
this.$12 = 10001;
}
else {
this.$1W = this.$12 - 1;
$Dq(this);
}
}
}
}
_o365c.$2W = function() {}
_o365c.$2W.registerInterface('_o365c.$2W');
_o365c.$c = function() {}
_o365c.$c.registerInterface('_o365c.$c');
_o365c.$24 = function _o365c_$24() {
this.$3q = new (_0365f.$Y.$$(_o365c.$24.$E6))();
this.$5d = new (_0365f.$Y.$$(_js.$1g))();
}
_o365c.$24.prototype = {
$E0: function _o365c_$24$$E0($p$0, $p$1, $p$2) {
var $v$0 = new _o365c.$24.$E6();
$v$0.$72 = $p$0;
$v$0.$AH = $p$1;
$v$0.$5N = $p$2;
this.$3q.$3p($v$0);
},
$CZ: function _o365c_$24$$CZ() {
for (var $v$0 = 0; $v$0 < this.$3q.get_$H(); $v$0++) {
var $v$1 = this.$3q.get_$QI($v$0);
if ($v$1.$AH <= 0) {
if ($v$1.$5N) {
$v$1.$5N();
}
$v$1.$72.$CZ();
}
else {
var $$t_2 = this;
this.$5d.$3p(_js.$2.get_$a().$4I(_0365f.$6.$9h, 'BatchedAnimation.Start', function() {
if (!$5($v$1.$5N)) {
$v$1.$5N();
}
$v$1.$72.$CZ();
}, $v$1.$AH));
}
}
},
$JE: function _o365c_$24$$JE($p$0) {
for (var $v$0 = 0; $v$0 < this.$5d.get_$H(); $v$0++) {
_js.$2.get_$a().$4Y(this.$5d.get_$QI($v$0));
}
this.$5d.$5Q();
for (var $v$1 = 0; $v$1 < this.$3q.get_$H(); $v$1++) {
this.$3q.get_$QI($v$1).$72.$JE($p$0);
}
this.$3q.$5Q();
}
}
_o365c.$24.$E6 = function _o365c_$24_$E6() {
}
_o365c.$24.$E6.prototype = {
$72: null,
$AH: 0,
$5N: null
}
_o365c.$1e = function _o365c_$1e($p$0) {
this.$3s = $p$0;
}
_o365c.$1e.prototype = {
$3s: null,
$F0: false,
$CZ: function _o365c_$1e$$CZ() {
if (this.$3s) {
var $$t_0 = this;
_js.$2.get_$a().$8p(_0365f.$6.$9h, 'NullAnimation.End', function() {
$$t_0.$F0 = true;
$$t_0.$3s();
});
}
},
$JE: function _o365c_$1e$$JE($p$0) {
if (this.$F0) {
return;
}
if ($p$0 && this.$3s) {
this.$3s();
}
}
}
_o365c.$2L = function _o365c_$2L() {
}
_o365c.$2L.prototype = {
get_$Lj: function _o365c_$2L$get_$Lj() {
return false;
},
$7O: function _o365c_$2L$$7O($p$0, $p$1, $p$2, $p$3) {
return new _o365c.$1e($p$2);
},
$AB: function _o365c_$2L$$AB($p$0, $p$1, $p$2, $p$3) {
return new _o365c.$1e($p$3);
},
$A9: function _o365c_$2L$$A9($p$0, $p$1, $p$2, $p$3) {
return new _o365c.$1e($p$3);
}
}
_o365c.$2l = function _o365c_$2l($p$0) {
_o365c.$2l.initializeBase(this);
this.$j = $p$0;
this.$1K = true;
}
_o365c.$2l.prototype = {
$j: null,
$i: null,
$1o: false,
$A_4: null,
$1K: false,
$Cd: false,
get_$D: function _o365c_$2l$get_$D() {
return this.$i;
},
set_$D: function _o365c_$2l$set_$D($p$0) {
this.$i = $p$0;
if (this.$A_4) {
this.$A_4.set_$D(this.$i);
}
return $p$0;
},
get_$O: function _o365c_$2l$get_$O() {
return this.$1o;
},
set_$O: function _o365c_$2l$set_$O($p$0) {
if (this.$1o !== $p$0) {
this.$1o = $p$0;
$4(this, 'IsShown');
this.$GP();
}
return $p$0;
},
get_$1F: function _o365c_$2l$get_$1F() {
return this.$1K;
},
set_$1F: function _o365c_$2l$set_$1F($p$0) {
this.$1K = $p$0;
this.$GO();
return $p$0;
},
$5r: function _o365c_$2l$$5r() {
this.$Cs();
this.$EZ();
_js.$w.prototype.$5r.call(this);
},
$2r: function _o365c_$2l$$2r() {
_js.$w.prototype.$2r.call(this);
if (!this.get_$8().$FG()) {
this.get_$8().get_$E().set_$Cc(0);
this.$Cd = true;
}
else {
this.$Cd = false;
}
this.get_$8().get_$E().set_$Al(true);
if (this.$1K) {
this.$HC();
}
},
$2a: function _o365c_$2l$$2a() {
_js.$w.prototype.$2a.call(this);
if (this.$Cd) {
this.get_$8().$1.removeAttribute('tabindex');
}
this.get_$8().get_$E().set_$Al(false);
if (this.$1K) {
this.$Cs();
}
},
$GP: function _o365c_$2l$$GP() {
if (this.$A_4) {
this.$A_4.set_$O(this.get_$O());
if (!this.get_$O()) {
this.$A_4.$1T();
this.$EZ();
}
}
},
$GO: function _o365c_$2l$$GO() {
if (this.$1K) {
this.$HC();
}
else {
this.$Cs();
}
if (!$5(this.get_$8())) {
this.get_$8().get_$E().set_$K2(!this.$1K);
}
},
$J4: function _o365c_$2l$$J4() {
},
$EZ: function _o365c_$2l$$EZ() {
this.$J4();
if (this.$A_4) {
this.$A_4.set_$Y(null);
this.$A_4.$k();
this.$A_4 = null;
}
}
}
_o365c.$I = function _o365c_$I() {
this.$3S = 0;
_o365c.$I.initializeBase(this);
}
_o365c.$I.$Kk = function _o365c_$I$$Kk($p$0) {
if (!_o365c.$I.$8C) {
_o365c.$I.$LZ();
}
var $v$0 = _o365c.$I.$8C[$p$0];
if ($v$0) {
return $v$0;
}
if ($p$0.length !== 1) {
throw Error.invalidOperation('Cannot convert key to keycode (key = \'' + $p$0 + '\')');
}
return $p$0.toUpperCase().charCodeAt(0);
}
_o365c.$I.$K8 = function _o365c_$I$$K8() {
}
_o365c.$I.$LZ = function _o365c_$I$$LZ() {
_o365c.$I.$8C = { BACKSPACE: 8, DELETE: 46, INSERT: 45, ENTER: 13, TAB: 9, ESC: 27, LEFTARROW: _0365f.$h.$BK, UPARROW: 38, RIGHTARROW: _0365f.$h.$CI, DOWNARROW: 40, HOME: 36, END: 35, PAGEUP: 33, PAGEDOWN: 34, SPACE: 32, F2: 113, F6: 117 };
}
_o365c.$I.prototype = {
$2H: null,
$M5: null,
$8B: null,
$Fd: 0,
$LU: false,
$Ip: false,
$6Q: true,
$2y: true,
get_$T: function _o365c_$I$get_$T() {
return this.$8B;
},
set_$T: function _o365c_$I$set_$T($p$0) {
if (this.$8B !== $p$0) {
this.$8B = $p$0;
this.$Fd = _o365c.$I.$Kk(this.$8B);
}
return $p$0;
},
$L6: function _o365c_$I$$L6($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6) {
var $v$0 = ($p$4) ? this.$M5 : this.$2H;
if (!$v$0) {
return false;
}
if ($p$5 && this.$LU) {
return false;
}
if (_js.$O.getInstance().$B8 && $p$0 === 8) {
$p$0 = 46;
}
if ($p$0 === this.$Fd && $p$1 === (!!(this.$3S & 1)) && $p$2 === (!!(this.$3S & 2)) && $p$3 === (!!(this.$3S & 4))) {
if ($v$0.$c) {
if (_0365f.$17.isInstanceOfType($v$0)) {
($v$0).$5Y = $p$6;
}
$v$0.$p();
return true;
}
return this.$Ip;
}
return false;
}
}
_o365c.$P = function _o365c_$P() {
this.$$d_$OC = Function.createDelegate(this, this.$OC);
_o365c.$P.initializeBase(this);
}
_o365c.$P.$Lw = function _o365c_$P$$Lw($p$0) {
return $p$0.tagName.toUpperCase() === 'INPUT' || $p$0.tagName.toUpperCase() === 'TEXTAREA';
}
function $ID($p$0) {
if ($p$0.get_$8()) {
$p$0.get_$8().$9('keydown', $p$0.$$d_$OC, 'HotKey');
$p$0.get_$8().$9('keyup', $p$0.$$d_$OC, 'HotKey');
}
}
function $DY($p$0) {
if ($p$0.get_$8()) {
$p$0.get_$8().$J('keydown', 'HotKey');
$p$0.get_$8().$J('keyup', 'HotKey');
}
}
function $DZ($p$0, $p$1) {
if ($p$0.$2S) {
for (var $v$0 = 0; $v$0 < $p$0.$2S.length; $v$0++) {
$p$0.$2S[$v$0].set_$5S($p$1);
}
}
}
_o365c.$P.prototype = {
$2S: null,
$8t: false,
$Ow: false,
get_$1g: function _o365c_$P$get_$1g() {
return this.$2S;
},
set_$1g: function _o365c_$P$set_$1g($p$0) {
$DZ(this, null);
this.$2S = $p$0;
$DZ(this, this);
return $p$0;
},
$5r: function _o365c_$P$$5r() {
if (this.get_$8()) {
this.$Nz(this.get_$8());
}
this.set_$1g(null);
$DY(this);
_js.$w.prototype.$5r.call(this);
},
$GH: function _o365c_$P$$GH($p$0) {
if (!this.get_$8().$FG() && !this.$Ow) {
this.$8t = true;
this.get_$8().set_$1d(0);
}
else {
this.$8t = false;
}
},
$2r: function _o365c_$P$$2r() {
_js.$w.prototype.$2r.call(this);
$ID(this);
},
$2a: function _o365c_$P$$2a() {
_js.$w.prototype.$2a.call(this);
$DY(this);
},
$Nz: function _o365c_$P$$Nz($p$0) {
if (this.get_$8() && this.$8t) {
this.get_$8().$1.removeAttribute('tabindex');
this.$8t = false;
}
},
$OC: function _o365c_$P$$OC($p$0) {
if (this.$2S) {
var $v$0 = $p$0.get_$13();
var $v$1 = $p$0.$90();
var $v$2 = $p$0.$5X();
var $v$3 = $p$0.$Ir();
var $v$4 = $p$0.get_$4P() === 'keyup';
var $v$5 = _o365c.$P.$Lw($p$0.get_$1q());
for (var $v$6 = 0; $v$6 < this.$2S.length; $v$6++) {
if (this.$2S[$v$6].$L6($v$0, $v$1, $v$2, $v$3, $v$4, $v$5, $p$0)) {
if (this.$2S[$v$6].$6Q) {
$p$0.$1P();
}
if (this.$2S[$v$6].$2y) {
$p$0.$1y();
}
}
}
}
}
}
_o365c.$j = function _o365c_$j($p$0) {
this.$$d_$Ob = Function.createDelegate(this, this.$Ob);
this.$$d_$Oc = Function.createDelegate(this, this.$Oc);
this.$$d_$Od = Function.createDelegate(this, this.$Od);
this.$$d_$Bx = Function.createDelegate(this, this.$Bx);
_o365c.$j.initializeBase(this);
this.$65 = $p$0;
}
function $I2($p$0) {
if ($p$0.$65 !== 'Mouse') {
$p$0.get_$8().$9('scroll', $p$0.$$d_$Bx, 'CaptureClick');
$p$0.get_$8().$9('mousedown', $p$0.$$d_$Od, 'CaptureClick');
}
}
function $I3($p$0) {
if ($p$0.$65 !== 'Mouse') {
$p$0.get_$8().$J('scroll', 'CaptureClick');
$p$0.get_$8().$J('mousedown', 'CaptureClick');
$p$0.$2E = null;
$p$0.$64 = null;
$p$0.$8G = null;
$p$0.$8D = null;
}
}
function $DV($p$0) {
if ($p$0.$41) {
$p$0.$41 = false;
_js.$2.get_$a().$Gv();
}
}
function $I1($p$0, $p$1) {
if (!$p$0.$2E) {
$p$0.$2E = [];
}
Array.add($p$0.$2E, $p$1);
if ($p$0.$2E.length > 2) {
Array.removeAt($p$0.$2E, 0);
}
}
function $I4($p$0, $p$1) {
if ($p$0.$8G && Math.abs($p$0.$64.get_$3T() - $p$0.$8G.get_$3T()) <= 20) {
return;
}
if (!$p$0.$2E || $p$0.$2E.length < 2) {
$p$0.$41 = true;
return;
}
if (Math.abs(($p$0.$2E[1]).get_$3T() - ($p$0.$2E[0]).get_$3T()) > 1) {
$p$0.$41 = true;
}
}
_o365c.$j.prototype = {
$1K: true,
$2E: null,
$8G: null,
$64: null,
$8D: null,
$41: false,
$65: 0,
$2r: function _o365c_$j$$2r() {
_js.$w.prototype.$2r.call(this);
if (this.$1K) {
$I2(this);
}
},
$2a: function _o365c_$j$$2a() {
_js.$w.prototype.$2a.call(this);
if (this.$1K) {
$I3(this);
}
},
$Bx: function _o365c_$j$$Bx($p$0) {
this.$8D = $p$0;
if (!this.$64) {
return;
}
var $v$0 = $p$0.get_$9A() - this.$64.get_$9A();
if (this.$41 && $v$0 > 125) {
$DV(this);
}
},
$Od: function _o365c_$j$$Od($p$0) {
this.get_$8().$J('mousemove', 'CaptureClick');
this.get_$8().$J('mouseup', 'CaptureClick');
this.get_$8().$9('mousemove', this.$$d_$Oc, 'CaptureClick');
this.get_$8().$9('mouseup', this.$$d_$Ob, 'CaptureClick');
this.$2E = null;
this.$8G = $p$0;
if (this.$41 || (this.$8D && $p$0.get_$9A() < this.$8D.get_$9A())) {
$p$0.$1y();
}
$DV(this);
_js.$2.get_$a().$Or();
},
$Oc: function _o365c_$j$$Oc($p$0) {
$I1(this, $p$0);
},
$Ob: function _o365c_$j$$Ob($p$0) {
this.get_$8().$J('mousemove', 'CaptureClick');
this.get_$8().$J('mouseup', 'CaptureClick');
this.$64 = $p$0;
$I4(this, $p$0);
this.$2E = null;
if (!this.$41) {
_js.$2.get_$a().$Gv();
}
}
}
_o365c.$2B = function _o365c_$2B($p$0) {
this.$$d_$L4 = Function.createDelegate(this, this.$L4);
this.$$d_$L3 = Function.createDelegate(this, this.$L3);
_o365c.$2B.initializeBase(this);
this.$Cx = $p$0;
}
_o365c.$2B.prototype = {
$Cx: null,
$GH: function _o365c_$2B$$GH($p$0) {
_js.$w.prototype.$GH.call(this, $p$0);
this.get_$8().$v('removeFocusOutline');
},
$2r: function _o365c_$2B$$2r() {
this.get_$8().$J('keydown', '.focusHandling');
this.get_$8().$J('mousedown', '.focusHandling');
if (this.get_$8().$1.className.indexOf('removeFocusOutline') !== -1) {
this.get_$8().$9('keydown', this.$$d_$L3, '.focusHandling');
}
else {
this.get_$8().$9('mousedown', this.$$d_$L4, '.focusHandling');
}
_js.$w.prototype.$2r.call(this);
},
$2a: function _o365c_$2B$$2a() {
this.get_$8().$J('keydown', '.focusHandling');
this.get_$8().$J('mousedown', '.focusHandling');
_js.$w.prototype.$2a.call(this);
},
$L4: function _o365c_$2B$$L4($p$0) {
if (this.$Cx.get_$FA()) {
this.get_$8().$1x('addFocusOutline');
}
this.get_$8().$v('removeFocusOutline');
this.get_$8().$J('mousedown', '.focusHandling');
this.get_$8().$9('keydown', this.$$d_$L3, '.focusHandling');
},
$L3: function _o365c_$2B$$L3($p$0) {
if (($p$0.get_$13() === 9) || ($p$0.get_$13() === 117 && $p$0.$5X()) || ($p$0.get_$13() === 40) || ($p$0.get_$13() === 38) || ($p$0.get_$13() === _0365f.$h.$BK) || ($p$0.get_$13() === _0365f.$h.$CI)) {
this.get_$8().$1x('removeFocusOutline');
if (this.$Cx.get_$FA()) {
this.get_$8().$v('addFocusOutline');
}
this.get_$8().$J('keydown', '.focusHandling');
this.get_$8().$9('mousedown', this.$$d_$L4, '.focusHandling');
}
}
}
_o365c.$H = function _o365c_$H($p$0, $p$1, $p$2, $p$3) {
this.$$d_$OQ = Function.createDelegate(this, this.$OQ);
this.$$d_$OR = Function.createDelegate(this, this.$OR);
this.$$d_$O7 = Function.createDelegate(this, this.$O7);
this.$$d_$LQ = Function.createDelegate(this, this.$LQ);
this.$$d_$L7 = Function.createDelegate(this, this.$L7);
this.$$d_$Bw = Function.createDelegate(this, this.$Bw);
this.$$d_$CV = Function.createDelegate(this, this.$CV);
this.$1E = 2;
this.$1s = 0;
this.$9m = 29;
_o365c.$H.initializeBase(this, [ $p$0 ]);
this.$B = $p$1;
this.set_$D('ContextMenuView');
this.$1h = $p$2;
this.$1l = $p$3;
}
_o365c.$H.add_$GR = function _o365c_$H$add_$GR($p$0) {
_o365c.$H.$7u.addHandler('MenuShown', $p$0);
}
_o365c.$H.remove_$GR = function _o365c_$H$remove_$GR($p$0) {
_o365c.$H.$7u.removeHandler('MenuShown', $p$0);
}
_o365c.$H.$ER = function _o365c_$H$$ER($p$0, $p$1, $p$2, $p$3, $p$4, $p$5, $p$6, $p$7) {
var $v$0 = _o365c.$Q.$5U($p$0, $p$3, $p$4, $p$5, $p$6, $p$7);
$v$0.set_$D($p$1);
$v$0.set_$Y($p$2);
$v$0.set_$7('contextMenuPopup');
$v$0.set_$9E(true);
$v$0.$Ct = false;
$v$0.$Gi = true;
$v$0.$Gu = true;
return $v$0;
}
function $I9($p$0) {
var $v$0 = _o365c.$H.$7u.getHandler('MenuShown');
if (!$5($v$0)) {
$v$0($p$0.get_$8());
}
}
function $DW($p$0, $p$1, $p$2, $p$3) {
if (!$p$0.$A) {
$p$0.$A = _o365c.$H.$ER($p$0.get_$8().$1, $p$0.$i, $p$0.$e, $p$0.$j, $p$0.$B, $p$0.$1h, $p$0.$1l, $p$0.$2K);
$p$0.$A.$1M = $p$0.$e;
$p$0.$A.$Bz = $p$0.get_$8();
$p$0.$A.$3v = $p$0.$3v;
$p$0.$A.$An = $p$0.$An;
$p$0.$A.set_$GN($p$0.$$d_$O7);
$p$0.$A.$1.style.minWidth = $p$0.$e.$GA + 'px';
$p$0.$A.set_$9E(true);
if ($p$0.$e.$8J > 0) {
$p$0.$A.$1.style.maxWidth = $p$0.$e.$8J + 'px';
}
$p$0.$A.add_$FQ($p$0.$$d_$OR);
$p$0.$A.add_$Lt($p$0.$$d_$OQ);
if (!$5($p$0.$e)) {
$p$0.$e.set_$A3($p$0.$A.$1S);
$p$0.$e.set_$A4($p$0.$A.$d);
}
$p$0.$A.get_$E().set_$2c($p$0.$9m);
}
var $v$0 = null;
$v$0 = $I7($p$0, $p$1, $p$2, $p$3);
$p$0.$A.set_$C2($v$0);
$p$0.$A.set_$LJ($p$0.$1h.get_$2h() === 'TouchNarrow');
if ($p$0.$A.get_$Y() !== $p$0.$e) {
$p$0.$A.set_$Y($p$0.$e);
}
$p$0.$A.$z();
$p$0.$A.set_$O(true);
var $v$1 = _js.$4.$3x($p$0.get_$8().$1);
$p$0.$A.set_$QF($p$0.$6h);
if ($p$0.$6h) {
$I5($p$0, $v$1);
}
}
function $I7($p$0, $p$1, $p$2, $p$3) {
if ($p$0.$1h.get_$2h() !== 'TouchNarrow') {
return $I6($p$0, $p$1, $p$2, $p$3);
}
return $I8($p$0);
}
function $I8($p$0) {
return new _o365c.$2O($p$0.$j, $p$0.$1l);
}
function $I6($p$0, $p$1, $p$2, $p$3) {
if (!$p$1) {
var $v$0 = new _o365c.$1w($p$0.$j, $p$0.$1l);
if ($p$0.$1l.get_$5s()) {
$v$0.set_$3j(_o365c.$V.$E3($p$2 - $p$0.$A.$1.offsetWidth, $p$0.$1l.get_$5s(), _js.$4.$17($p$0.$A.$1)));
}
else {
$v$0.set_$3j($p$2);
}
$v$0.set_$4Q($p$3);
$v$0.$AZ = true;
$v$0.$Aa = true;
return $v$0;
}
else {
var $v$1 = new _o365c.$i($p$0.$j, $p$0.$B, $p$0.$1l);
$v$1.set_$E5($p$0.get_$8());
$v$1.$5n = $p$0.$5n;
$v$1.$9H = $p$0.$9H;
switch ($p$1) {
case 1:
$v$1.$28 = 0;
break;
case 2:
$v$1.$28 = 1;
break;
case 3:
$v$1.$28 = 2;
break;
case 4:
$v$1.$28 = 3;
break;
case 5:
$v$1.$28 = 4;
break;
}
return $v$1;
}
}
function $I5($p$0, $p$1) {
var $v$0 = 0;
if ($p$0.get_$Dw() === 1) {
$v$0 = $p$0.$HO;
}
else if ($p$0.get_$Dw() === 5) {
$v$0 = $p$0.$A.$1.offsetWidth - $p$0.$HO;
}
else {
var $v$1 = _js.$4.$3x($p$0.$A.$1);
$v$0 = $p$1.$4s + ($p$0.get_$8().$1.offsetWidth / 2) - $v$1.$4s;
}
$p$0.$A.$Io($v$0);
}
_o365c.$H.prototype = {
$A: null,
$e: null,
$B: null,
$1h: null,
$1l: null,
$2K: null,
$6h: false,
$3v: true,
$An: true,
$HO: 0,
$5n: 0,
$9H: 0,
$91: false,
$9o: false,
$3a: false,
get_$Fn: function _o365c_$H$get_$Fn() {
return this.$e;
},
set_$Fn: function _o365c_$H$set_$Fn($p$0) {
this.$e = $p$0;
if (this.$A) {
if ($p$0) {
this.$A.set_$Y(this.$e);
}
else {
this.set_$O(false);
}
}
return $p$0;
},
get_$Dw: function _o365c_$H$get_$Dw() {
if (this.$1l.get_$5s()) {
switch (this.$1s) {
case 2:
return 4;
case 4:
return 2;
case 1:
return 5;
case 5:
return 1;
default:
return this.$1s;
}
}
else {
return this.$1s;
}
},
$GP: function _o365c_$H$$GP() {
if (this.$A) {
this.$A.set_$O(this.get_$O());
}
else {
if (this.get_$O() && this.$3a) {
this.$CV(null);
}
}
},
$HC: function _o365c_$H$$HC() {
if (this.$1K) {
if ((this.$1E & 2)) {
this.get_$8().$9('contextmenu', this.$$d_$CV, '#ContextMenu');
this.get_$8().$9('keydown', this.$$d_$Bw, '#ContextMenu');
}
if ((this.$1E & 1)) {
this.get_$8().$9('click', this.$$d_$CV, '#ContextMenu');
}
if ((this.$1E & 4)) {
_o365c.$H.add_$GR(this.$$d_$L7);
this.get_$8().$9('mouseenter', this.$$d_$CV, '#ContextMenu');
this.get_$8().$9('mouseleave', this.$$d_$LQ, '#ContextMenu');
}
if ((this.$1E & 8)) {
this.get_$8().$9('focus', this.$$d_$CV, '#ContextMenu');
}
}
},
$Cs: function _o365c_$H$$Cs() {
if (this.get_$8()) {
if ((this.$1E & 2)) {
this.get_$8().$J('contextmenu', '#ContextMenu');
this.get_$8().$J('keydown', '#ContextMenu');
}
if ((this.$1E & 1)) {
this.get_$8().$J('click', '#ContextMenu');
}
if ((this.$1E & 4)) {
_o365c.$H.remove_$GR(this.$$d_$L7);
this.get_$8().$J('mouseenter', '#ContextMenu');
this.get_$8().$J('mouseleave', '#ContextMenu');
}
if ((this.$1E & 8)) {
this.get_$8().$J('focus', '#ContextMenu');
}
}
},
$EZ: function _o365c_$H$$EZ() {
if (this.$A) {
this.$A.$k();
this.$A = null;
}
},
$O7: function _o365c_$H$$O7($p$0) {
if (!this.get_$O() && !(this.$1E & 4)) {
$p$0.$1T();
$p$0.set_$Y(null);
$p$0.$k();
if ($p$0 === this.$A) {
this.$A = null;
}
}
},
$CV: function _o365c_$H$$CV($p$0) {
if (this.$i && this.$1K) {
if (this.$A && this.$A.get_$O()) {
if ($p$0) {
$p$0.$1P();
$p$0.$1y();
}
return;
}
if (!$5(this.$e) && !$5(this.$e.get_$By())) {
this.$e.get_$By()();
}
var $v$0 = !!this.$e && !!this.$e.$s && this.$e.$s.get_$H() > 0;
if ($v$0) {
if ($p$0 && $p$0.get_$4P() && 'mouseenter' === $p$0.get_$4P().toLowerCase()) {
this.$91 = true;
this.$9o = true;
$I9(this);
}
else {
this.$91 = false;
}
if ($p$0 && (($p$0.get_$8i() > 0) || ($p$0.get_$3T() > 0))) {
$DW(this, this.$1s, $p$0.get_$8i(), $p$0.get_$3T());
}
else {
$DW(this, 1, 0, 0);
}
this.$A.get_$E().set_$n(_js.$5.$5j());
this.get_$8().get_$E().set_$On(this.$A.get_$E().get_$n());
this.get_$8().get_$E().set_$KQ(this.$A.get_$E().get_$n());
if ($p$0) {
$p$0.$1P();
$p$0.$1y();
}
}
else {
if ((this.$1E & 2) && $p$0 && $p$0.get_$4P() && 'contextmenu' === $p$0.get_$4P().toLowerCase()) {
$p$0.$1P();
}
}
}
},
$Bw: function _o365c_$H$$Bw($p$0) {
if ($p$0.get_$13() === 121 && $p$0.$90()) {
this.$CV($p$0);
}
},
$LQ: function _o365c_$H$$LQ($p$0) {
if ($p$0.get_$4P() && 'mouseleave' === $p$0.get_$4P().toLowerCase()) {
this.$9o = false;
var $$t_1 = this;
_js.$2.get_$a().$4I(_0365f.$6.$25, 'ContextMenu.HideContextMenu', function() {
if ($$t_1.$91 && !$$t_1.$A.get_$1u()) {
$$t_1.$A.set_$O(false);
}
}, 0);
}
},
$L7: function _o365c_$H$$L7($p$0) {
if ($p$0 !== this.get_$8()) {
this.set_$O(false);
}
},
$OR: function _o365c_$H$$OR($p$0, $p$1) {
this.set_$O(($p$0).get_$O());
},
$OQ: function _o365c_$H$$OQ($p$0, $p$1) {
if (this.$91) {
if (($p$0).get_$1u() || this.$9o) {
this.$A.set_$O(true);
}
else {
this.$A.set_$O(this.$A.$5x);
}
}
}
}
_o365c.$25 = function _o365c_$25() {
}
_o365c.$25.prototype = {
$A5: function _o365c_$25$$A5($p$0, $p$1) {
return _js.$5.$EN($p$0);
},
$EM: function _o365c_$25$$EM($p$0, $p$1) {
throw Error.notImplemented();
}
}
_o365c.$1i = function _o365c_$1i() {
}
_o365c.$1i.prototype = {
$A5: function _o365c_$1i$$A5($p$0, $p$1) {
if ($p$0 === null || $p$0 === undefined) {
return true;
}
else if (Boolean.isInstanceOfType($p$0)) {
return !($p$0);
}
else {
return $p$0;
}
},
$EM: function _o365c_$1i$$EM($p$0, $p$1) {
throw Error.notImplemented();
}
}
_o365c.$2I = function _o365c_$2I() {
}
_o365c.$2I.prototype = {
$A5: function _o365c_$2I$$A5($p$0, $p$1) {
return !$5($p$0) && $p$1 === Object.getType($p$0);
},
$EM: function _o365c_$2I$$EM($p$0, $p$1) {
throw Error.invalidOperation();
}
}
_o365c.$1s = function _o365c_$1s() {
}
_o365c.$1s.prototype = {
$A5: function _o365c_$1s$$A5($p$0, $p$1) {
if ($5($p$0)) {
return true;
}
if (String.isInstanceOfType($p$0) && _js.$7.$1L($p$0)) {
return true;
}
return false;
},
$EM: function _o365c_$1s$$EM($p$0, $p$1) {
throw Error.notImplemented();
}
}
_o365c.$1t = function _o365c_$1t() {
}
_o365c.$1t.prototype = {
$A5: function _o365c_$1t$$A5($p$0, $p$1) {
return !$p$0;
},
$EM: function _o365c_$1t$$EM($p$0, $p$1) {
throw Error.notImplemented();
}
}
_o365c.$1m = function _o365c_$1m($p$0) {
_o365c.$1m.initializeBase(this, [ $p$0 ]);
}
_o365c.$14 = function _o365c_$14($p$0) {
_o365c.$14.initializeBase(this, [ $p$0 ]);
var $v$0 = this.$1.getAttribute('src');
if ($v$0) {
this.set_$1p($v$0);
}
}
_o365c.$14.prototype = {
get_$1p: function _o365c_$14$get_$1p() {
return this.$2m(_o365c.$14.$CY);
},
set_$1p: function _o365c_$14$set_$1p($p$0) {
if (this.get_$1p() !== $p$0) {
this.$2N(_o365c.$14.$CY, $p$0);
if (!_js.$7.$1L($p$0)) {
this.$1.setAttribute('src', $p$0);
}
else {
this.$1.removeAttribute('src');
}
}
return $p$0;
}
}
_o365c._TI = function _o365c__TI() {
}
_o365c._TI.$$cctor = function _o365c__TI$$$cctor() {
new _A('Button.ImageLeft', function() {
var $v$0 = _o365c._TI._hf.childNodes[0].cloneNode(true);
var $v$1 = new _o365c.$R($v$0.children[1]);
$v$1.$6(_E.$0([ 'Text' ], [ _o365c._TI.$2q ], null, 'Text', null, _o365c._TI.$1G, 1)).$6(_E.$0([ 'IsTextHidden' ], [ _o365c._TI.$BO ], null, 'IsHidden', null, _o365c._TI.$N, 1, null, null, true));
$v$1.$G(new _js.$F('_o365c_2', [ 'CurrentImageId' ], [ _o365c._TI.$47 ], new _js.$11([ _o365c._TI.$g, _o365c._TI.$W ], [ null, null ]), null, 1));
$v$1.set_$7('_o365c_4 o365buttonLabel');
var $v$2 = new _o365c.$s($v$0.children[0]);
$v$2.$6(_E.$0([ 'CurrentImageId' ], [ _o365c._TI.$47 ], null, 'Id', null, _o365c._TI.$2X, 1)).$6(_E.$0([ 'CurrentImageId' ], [ _o365c._TI.$47 ], null, 'IsHidden', null, _o365c._TI.$N, 1, _o365c._TI.$g, null, true));
$v$2.set_$7('_o365c_3');
return new _B($v$0, [ $v$2, $v$1 ]).R({ Image: $v$2, Label: $v$1 });
}, Object, _o365c.$E, false, false, false, 0);
new _A('Button.ImageRight', function() {
var $v$3 = _o365c._TI._hf.childNodes[0].cloneNode(true);
var $v$4 = new _o365c.$s($v$3.children[1]);
$v$4.$6(_E.$0([ 'CurrentImageId' ], [ _o365c._TI.$47 ], null, 'Id', null, _o365c._TI.$2X, 1)).$6(_E.$0([ 'CurrentImageId' ], [ _o365c._TI.$47 ], null, 'IsHidden', null, _o365c._TI.$N, 1, _o365c._TI.$g, null, true));
$v$4.set_$7('_o365c_3');
var $v$5 = new _o365c.$R($v$3.children[0]);
$v$5.$6(_E.$0([ 'Text' ], [ _o365c._TI.$2q ], null, 'Text', null, _o365c._TI.$1G, 1)).$6(_E.$0([ 'IsTextHidden' ], [ _o365c._TI.$BO ], null, 'IsHidden', null, _o365c._TI.$N, 1, null, null, true));
$v$5.$G(new _js.$F('_o365c_2', [ 'CurrentImageId' ], [ _o365c._TI.$47 ], new _js.$11([ _o365c._TI.$g, _o365c._TI.$W ], [ null, null ]), null, 1));
$v$5.set_$7('_o365c_4');
return new _B($v$3, [ $v$5, $v$4 ]).R({ Label: $v$5, Image: $v$4 });
}, Object, _o365c.$E, false, false, false, 0);
new _A('ContextMenuView._tid1', function() {
var $v$6 = _o365c._TI._hf.childNodes[1].cloneNode(true);
var $v$7 = new _o365c.$L($v$6.children[0], (_js.$A.Instance).$QK(_o365c.$c));
return new _B($v$6, [ $v$7 ]).R({ ListPanel: $v$7 });
}, _0365m.$W, _o365c.$1, false, true, false, 0);
new _A('ContextMenuView.ContextMenuList._tid2', function() {
var $v$8 = _o365c._TI._hf.childNodes[1].cloneNode(true);
var $v$9 = new _o365c.$L($v$8.children[0], (_js.$A.Instance).$QK(_o365c.$c));
return new _B($v$8, [ $v$9 ]).R({ ListPanel: $v$9 });
}, _0365m.$W, _o365c.$1, false, true, false, 0);
new _A('ContextMenuView.ContextMenuList', function() {
var $v$A = _o365c._TI._hf.childNodes[2].cloneNode(true);
var $v$B = new _o365c.$1($v$A.children[0], (_js.$A.Instance).$QK(_0365f.$X));
$v$B.$2(_E.$0([ 'ContextMenuItems' ], [ _o365c._TI.$BZ ], null, 'DataSource', null, _o365c._TI.$6B, 1)).$2(_E.$0([ 'SelectedItem' ], [ _o365c._TI.$Ba ], _o365c._TI.$Bb, 'SelectedItem', _o365c._TI.$BW, _o365c._TI.$BX, 2));
$v$B.$2p = true;
$v$B.set_$4r('div');
$v$B.set_$4q('_o365c_7');
$v$B.$8v = true;
$v$B.set_$7('_o365c_6');
var $v$C = new _o365c.$P();
var $v$D = new _o365c.$I();
$v$D.$6(_E.$0([ 'ContextParent', 'ContextParent', 'ContextParent', 'DownArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$69 ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$D.set_$T('DOWNARROW');
var $v$E = new _o365c.$I();
$v$E.$6(_E.$0([ 'ContextParent', 'ContextParent', 'ContextParent', 'DownArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$69 ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$E.set_$T('TAB');
$v$E.$2y = false;
var $v$F = new _o365c.$I();
$v$F.$6(_E.$0([ 'ContextParent', 'ContextParent', 'ContextParent', 'UpArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$6A ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$F.set_$T('UPARROW');
var $v$G = new _o365c.$I();
$v$G.$6(_E.$0([ 'ContextParent', 'ContextParent', 'ContextParent', 'UpArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$6A ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$G.set_$T('TAB');
$v$G.$3S = 1;
$v$G.$2y = false;
var $v$H = new _o365c.$I();
$v$H.$6(_E.$0([ 'ContextParent', 'ContextParent', 'ContextParent', 'LeftArrowSubMenuCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BS ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$H.set_$T('LEFTARROW');
var $v$I = new _o365c.$I();
$v$I.$6(_E.$0([ 'ContextParent', 'ContextParent', 'ContextParent', 'HomeCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BR ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$I.set_$T('HOME');
var $v$J = new _o365c.$I();
$v$J.$6(_E.$0([ 'ContextParent', 'ContextParent', 'ContextParent', 'EndCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BQ ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$J.set_$T('END');
$v$C.set_$1g([ $v$D, $v$E, $v$F, $v$G, $v$H, $v$I, $v$J ]);
$v$B.set_$1J([ $v$C ]);
$v$B.set_$60(function() {
var $v$K = window.document.createElement('div');
$v$K.innerHTML = '<div></div>';
var $v$L = new _o365c.$b(_B.$V($v$K, []).cloneNode(true));
$v$L.$2(_E.$0([ 'MenuItemTemplateId' ], [ _o365c._TI.$Bc ], null, 'TemplateId', null, _o365c._TI.$1i, 1));
return $v$L;
});
$v$B.set_$D('ContextMenuView.ContextMenuList._tid2');
return new _B($v$A, [ $v$B ]);
}, _0365m.$W, _js.$9, false, false, false, 0);
new _A('ContextMenuView.GenericContextMenuItem', function() {
var $v$M = _o365c._TI._hf.childNodes[2].cloneNode(true);
var $v$N = new _js.$9($v$M.children[0]);
$v$N.$2(_E.$0([ 'MenuItemTemplateId' ], [ _o365c._TI.$Bc ], null, 'TemplateId', null, _o365c._TI.$1i, 1));
return new _B($v$M, [ $v$N ]);
}, _0365m.$1P, _o365c.$v, false, false, false, 0);
new _A('ContextMenuView.ContextMenuSeparator', function() {
var $v$O = _o365c._TI._hf.childNodes[2].cloneNode(true);
var $v$P = new _o365c.$28($v$O.children[0]);
$v$P.$2(_E.$0([ 'IsHidden' ], [ _o365c._TI.$Mm ], null, 'IsHidden', null, _o365c._TI.$N, 1, null, null, true)).$2(_E.$0([ 'ParentContextMenu', 'CustomSeparatorCssClass' ], [ _o365c._TI.$Mn, _o365c._TI.$N1 ], null, 'CustomCssClass', null, _o365c._TI.$MM, 1));
$v$P.set_$Jw('_o365c_o');
return new _B($v$O, [ $v$P ]);
}, _0365m.$1K, _o365c.$b, false, false, false, 0);
new _A('ContextMenuView.ContextMenuHeader', function() {
var $v$Q = _o365c._TI._hf.childNodes[3].cloneNode(true);
var $v$R = new _o365c.$R($v$Q.children[0]);
$v$R.$2(_E.$0([ 'Text' ], [ _o365c._TI.$Ml ], null, 'Text', null, _o365c._TI.$1G, 1));
$v$R.set_$7('_o365c_a');
return new _B($v$Q, [ $v$R ]);
}, _0365m.$27, _o365c.$b, false, false, false, 0);
new _A('ContextMenuView.ContextMenuItem._tid3', function() {
var $v$S = _o365c._TI._hf.childNodes[2].cloneNode(true);
var $v$T = new _js.$9($v$S.children[0]);
$v$T.$2(_E.$0([ 'LabelDataContext' ], [ _o365c._TI.$8U ], null, 'DataContext', null, _o365c._TI.$1H, 1)).$2(_E.$0([ 'LabelTemplateId' ], [ _o365c._TI.$8V ], null, 'TemplateId', null, _o365c._TI.$1i, 1));
$v$T.set_$7('_o365c_c _o365c_e');
return new _B($v$S, [ $v$T ]);
}, _0365m.$1d, _o365c.$1j, false, true, false, 0);
new _A('ContextMenuView.ContextMenuItem', function() {
var $v$U = _o365c._TI._hf.childNodes[4].cloneNode(true);
var $v$V = new _o365c.$1j($v$U.children[0], (_js.$A.Instance).$QK(_0365f.$U));
$v$V.$2(_E.$0([ 'IsSelected' ], [ _o365c._TI.$6D ], null, 'IsSelected', null, _o365c._TI.$BP, 1, null, null, false)).$2(_E.$0([ 'Command' ], [ _o365c._TI.$4B ], null, 'ClickCommand', null, _o365c._TI.$2A, 1)).$2(_E.$0([ 'ParentContextMenu', 'ContextMenuPopupCloseCommand' ], [ _o365c._TI.$h, _o365c._TI.$8W ], null, 'CloseMenuCommand', null, _o365c._TI.$67, 1)).$2(_E.$0([ 'ParentContextMenu', 'ContextMenuPopupId' ], [ _o365c._TI.$h, _o365c._TI.$8X ], null, 'ContextMenuPopupId', null, _o365c._TI.$68, 1, null, null, 0)).$2(_E.$0([ 'ParentContextMenu', 'CustomItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8a ], null, 'CustomItemCssClass', null, _o365c._TI.$8Q, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomActiveItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8Y ], null, 'CustomActiveCssClass', null, _o365c._TI.$8O, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomInactiveItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8Z ], null, 'CustomInactiveCssClass', null, _o365c._TI.$8P, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomSelectedItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8b ], null, 'CustomSelectedCssClass', null, _o365c._TI.$8R, 1)).$2(_E.$0([ 'IsHidden' ], [ _o365c._TI.$3P ], null, 'IsHidden', null, _o365c._TI.$N, 1, null, null, true)).$2(_E.$0([ 'IsHidden' ], [ _o365c._TI.$3P ], null, 'AriaHiddenState', null, _o365c._TI.$8S, 1, null, null, false));
$v$V.set_$7b('_o365c_9');
$v$V.set_$7X('_o365c_h');
$v$V.set_$7Z('_o365c_i');
$v$V.set_$7c('_o365c_m');
$v$V.set_$D('ContextMenuView.ContextMenuItem._tid3');
return new _B($v$U, [ $v$V ]).R({ FocusControl: $v$V });
}, _0365m.$1d, _o365c.$b, false, false, false, 0);
new _A('ContextMenuView.DualStateContextMenuItem._tid4', function() {
var $v$W = _o365c._TI._hf.childNodes[5].cloneNode(true);
var $v$X = new _js.$9(_B.$V($v$W, [ 1, 0 ]));
$v$X.$2(_E.$0([ 'LabelDataContext' ], [ _o365c._TI.$8U ], null, 'DataContext', null, _o365c._TI.$1H, 1)).$2(_E.$0([ 'LabelTemplateId' ], [ _o365c._TI.$8V ], null, 'TemplateId', null, _o365c._TI.$1i, 1));
$v$X.set_$7('_o365c_e');
var $v$Y = new _js.$3($v$W.children[1]);
$v$Y.$G(new _js.$F('_o365c_c', [ 'ShowCheckmark' ], [ _o365c._TI.$4y ], _o365c._TI.$W, null, 0));
var $v$Z = new _o365c.$s($v$W.children[0]);
$v$Z.$2(_E.$0([ 'ShowCheckmark' ], [ _o365c._TI.$4y ], null, 'IsHidden', null, _o365c._TI.$N, 1, _o365c._TI.$W, null, true)).$2(_E.$2J(_o365c.$H.$7H, null, null, null, 'Id', null, _o365c._TI.$2X, 0));
$v$Z.set_$7('_o365c_8');
return new _B($v$W, [ $v$Z, $v$Y, $v$X ]);
}, _0365m.$1D, _o365c.$1N, false, true, false, 0);
new _A('ContextMenuView.DualStateContextMenuItem', function() {
var $v$a = _o365c._TI._hf.childNodes[6].cloneNode(true);
var $v$b = new _o365c.$1N($v$a.children[0], (_js.$A.Instance).$QK(_0365f.$U));
$v$b.$2(_E.$0([ 'IsSelected' ], [ _o365c._TI.$6D ], null, 'IsSelected', null, _o365c._TI.$BP, 1, null, null, false)).$2(_E.$0([ 'IsChecked' ], [ _o365c._TI.$Mo ], _o365c._TI.$Mr, 'IsChecked', _o365c._TI.$MN, _o365c._TI.$MO, 2, null, null, false)).$2(_E.$0([ 'ToggleCheckedOnClick' ], [ _o365c._TI.$Mq ], null, 'ToggleCheckedOnClick', null, _o365c._TI.$MP, 1, null, null, false)).$2(_E.$0([ 'Command' ], [ _o365c._TI.$4B ], null, 'ClickCommand', null, _o365c._TI.$2A, 1)).$2(_E.$0([ 'ParentContextMenu', 'ContextMenuPopupCloseCommand' ], [ _o365c._TI.$h, _o365c._TI.$8W ], null, 'CloseMenuCommand', null, _o365c._TI.$67, 1)).$2(_E.$0([ 'ParentContextMenu', 'ContextMenuPopupId' ], [ _o365c._TI.$h, _o365c._TI.$8X ], null, 'ContextMenuPopupId', null, _o365c._TI.$68, 1, null, null, 0)).$2(_E.$0([ 'ParentContextMenu', 'CustomItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8a ], null, 'CustomItemCssClass', null, _o365c._TI.$8Q, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomActiveItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8Y ], null, 'CustomActiveCssClass', null, _o365c._TI.$8O, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomInactiveItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8Z ], null, 'CustomInactiveCssClass', null, _o365c._TI.$8P, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomSelectedItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8b ], null, 'CustomSelectedCssClass', null, _o365c._TI.$8R, 1)).$2(_E.$0([ 'IsHidden' ], [ _o365c._TI.$3P ], null, 'IsHidden', null, _o365c._TI.$N, 1, null, null, true)).$2(_E.$0([ 'IsHidden' ], [ _o365c._TI.$3P ], null, 'AriaHiddenState', null, _o365c._TI.$8S, 1, null, null, false));
$v$b.set_$7b('_o365c_9');
$v$b.set_$7X('_o365c_h');
$v$b.set_$7Z('_o365c_i');
$v$b.set_$7c('_o365c_m');
$v$b.set_$D('ContextMenuView.DualStateContextMenuItem._tid4');
return new _B($v$a, [ $v$b ]).R({ FocusControl: $v$b });
}, _0365m.$1D, _o365c.$b, false, false, false, 0);
new _A('ContextMenuView.SubMenuContextMenuItem._tid5', function() {
var $v$c = _o365c._TI._hf.childNodes[7].cloneNode(true);
var $v$d = new _o365c.$s($v$c.children[1]);
$v$d.$2(_E.$2J(_o365c.$H.$En, null, null, null, 'Id', null, _o365c._TI.$2X, 0));
$v$d.set_$7('_o365c_l');
var $v$e = new _js.$9($v$c.children[0]);
$v$e.$2(_E.$0([ 'LabelDataContext' ], [ _o365c._TI.$8U ], null, 'DataContext', null, _o365c._TI.$1H, 1)).$2(_E.$0([ 'LabelTemplateId' ], [ _o365c._TI.$8V ], null, 'TemplateId', null, _o365c._TI.$1i, 1));
$v$e.set_$7('_o365c_c _o365c_e _o365c_g');
return new _B($v$c, [ $v$e, $v$d ]);
}, _0365m.$1z, _o365c.$T, false, true, false, 0);
new _A('ContextMenuView.SubMenuContextMenuItem', function() {
var $v$f = _o365c._TI._hf.childNodes[8].cloneNode(true);
var $v$g = new _o365c.$T($v$f.children[0], (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_o365c.$c), (_js.$A.Instance).$QK(_0365f.$U), (_js.$A.Instance).$QK(_0365f.$q));
$v$g.$2(_E.$0([ 'IsSelected' ], [ _o365c._TI.$6D ], null, 'IsSelected', null, _o365c._TI.$Mc, 1, null, null, false)).$2(_E.$0([ 'SubMenuTemplateId' ], [ _o365c._TI.$Mz ], null, 'SubMenuTemplateId', null, _o365c._TI.$Mh, 0)).$2(_E.$0([ 'Command' ], [ _o365c._TI.$4B ], null, 'ClickCommand', null, _o365c._TI.$2A, 1)).$2(_E.$0([ 'ParentContextMenu', 'ContextMenuPopupCloseCommand' ], [ _o365c._TI.$h, _o365c._TI.$8W ], null, 'CloseMenuCommand', null, _o365c._TI.$67, 1)).$2(_E.$0([ 'ParentContextMenu', 'ContextMenuPopupId' ], [ _o365c._TI.$h, _o365c._TI.$8X ], null, 'ContextMenuPopupId', null, _o365c._TI.$68, 1, null, null, 0)).$2(_E.$0([ 'IsEnabled' ], [ _o365c._TI.$Mw ], null, 'SubMenuIsEnabled', null, _o365c._TI.$Mg, 1, null, null, false)).$2(_E.$0([ 'SubMenuIsHovered' ], [ _o365c._TI.$My ], _o365c._TI.$N0, 'IsSubMenuHovered', _o365c._TI.$Mb, _o365c._TI.$Md, 2, null, null, false)).$2(_E.$0([ 'ParentContextMenu', 'CustomItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8a ], null, 'CustomItemCssClass', null, _o365c._TI.$8Q, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomActiveItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8Y ], null, 'CustomActiveCssClass', null, _o365c._TI.$8O, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomInactiveItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8Z ], null, 'CustomInactiveCssClass', null, _o365c._TI.$8P, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomSelectedItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8b ], null, 'CustomSelectedCssClass', null, _o365c._TI.$8R, 1)).$2(_E.$0([ 'IsHidden' ], [ _o365c._TI.$3P ], null, 'IsHidden', null, _o365c._TI.$N, 1, null, null, true)).$2(_E.$0([ 'IsHidden' ], [ _o365c._TI.$3P ], null, 'AriaHiddenState', null, _o365c._TI.$8S, 1, null, null, false)).$2(_E.$0([ 'SubMenu' ], [ _o365c._TI.$Mx ], null, 'SubMenu', null, _o365c._TI.$Mf, 1)).$2(_E.$0([ 'ParentContextMenu', 'IsShown' ], [ _o365c._TI.$h, _o365c._TI.$L ], null, 'ParentMenuIsShown', null, _o365c._TI.$Me, 1, null, null, false));
$v$g.set_$7b('_o365c_9');
$v$g.set_$7X('_o365c_h');
$v$g.set_$7Z('_o365c_i');
$v$g.set_$7c('_o365c_m');
$v$g.set_$D('ContextMenuView.SubMenuContextMenuItem._tid5');
return new _B($v$f, [ $v$g ]).R({ FocusControl: $v$g });
}, _0365m.$1z, _o365c.$b, false, false, false, 0);
new _A('ContextMenuView.LinkContextMenuItem._tid6', function() {
var $v$h = _o365c._TI._hf.childNodes[0].cloneNode(true);
var $v$i = new _o365c.$R($v$h.children[1]);
$v$i.$2(_E.$0([ 'Text' ], [ _o365c._TI.$Fx ], null, 'Text', null, _o365c._TI.$1G, 1));
$v$i.set_$7('_o365c_c _o365c_e');
var $v$j = new _o365c.$s($v$h.children[0]);
$v$j.$2(_E.$0([ 'ImageId' ], [ _o365c._TI.$8T ], null, 'IsHidden', null, _o365c._TI.$N, 1, _o365c._TI.$g, null, true)).$2(_E.$0([ 'ImageId' ], [ _o365c._TI.$8T ], null, 'Id', null, _o365c._TI.$2X, 1));
$v$j.set_$7('contextMenuItemImage');
return new _B($v$h, [ $v$j, $v$i ]);
}, _0365m.$1b, _o365c.$1p, false, true, false, 0);
new _A('ContextMenuView.LinkContextMenuItem', function() {
var $v$k = _o365c._TI._hf.childNodes[9].cloneNode(true);
var $v$l = new _o365c.$1p($v$k.children[0], (_js.$A.Instance).$QK(_0365f.$U));
$v$l.$2(_E.$0([ 'IsSelected' ], [ _o365c._TI.$6D ], null, 'IsSelected', null, _o365c._TI.$BP, 1, null, null, false)).$2(_E.$0([ 'IsHidden' ], [ _o365c._TI.$3P ], null, 'IsHidden', null, _o365c._TI.$N, 1, null, null, true)).$2(_E.$0([ 'IsHidden' ], [ _o365c._TI.$3P ], null, 'AriaHiddenState', null, _o365c._TI.$8S, 1, null, null, false)).$2(_E.$0([ 'Url' ], [ _o365c._TI.$Mu ], null, 'Href', null, _o365c._TI.$MT, 1)).$2(_E.$0([ 'TargetWindow' ], [ _o365c._TI.$Mt ], null, 'TargetWindow', null, _o365c._TI.$MV, 1)).$2(_E.$0([ 'PreventNavigation' ], [ _o365c._TI.$Ms ], null, 'PreventNavigation', null, _o365c._TI.$MU, 1, null, null, false)).$2(_E.$0([ 'Command' ], [ _o365c._TI.$4B ], null, 'ClickCommand', null, _o365c._TI.$2A, 1)).$2(_E.$0([ 'ParentContextMenu', 'ContextMenuPopupCloseCommand' ], [ _o365c._TI.$h, _o365c._TI.$8W ], null, 'CloseMenuCommand', null, _o365c._TI.$67, 1)).$2(_E.$0([ 'ParentContextMenu', 'ContextMenuPopupId' ], [ _o365c._TI.$h, _o365c._TI.$8X ], null, 'ContextMenuPopupId', null, _o365c._TI.$68, 1, null, null, 0)).$2(_E.$0([ 'ParentContextMenu', 'CustomItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8a ], null, 'CustomItemCssClass', null, _o365c._TI.$8Q, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomActiveItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8Y ], null, 'CustomActiveCssClass', null, _o365c._TI.$8O, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomInactiveItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8Z ], null, 'CustomInactiveCssClass', null, _o365c._TI.$8P, 1)).$2(_E.$0([ 'ParentContextMenu', 'CustomSelectedItemCssClass' ], [ _o365c._TI.$h, _o365c._TI.$8b ], null, 'CustomSelectedCssClass', null, _o365c._TI.$8R, 1));
$v$l.set_$7b('_o365c_9 _o365c_n');
$v$l.set_$7X('_o365c_h');
$v$l.set_$7Z('_o365c_i');
$v$l.set_$7c('_o365c_m');
$v$l.set_$D('ContextMenuView.LinkContextMenuItem._tid6');
return new _B($v$k, [ $v$l ]).R({ FocusControl: $v$l });
}, _0365m.$1b, _o365c.$b, false, false, false, 0);
new _A('ContextMenuView.DefaultMenuItemLineTemplate', function() {
var $v$m = _o365c._TI._hf.childNodes[10].cloneNode(true);
var $v$n = new _o365c.$R($v$m.children[1]);
$v$n.$2(_E.$0([ 'Text' ], [ _o365c._TI.$Fx ], null, 'Text', null, _o365c._TI.$1G, 1)).$2(_E.$0([ 'AriaLabel' ], [ _o365c._TI.$Mv ], null, 'AriaLabel', null, _o365c._TI.$49, 1));
var $v$o = new _o365c.$s($v$m.children[0]);
$v$o.$2(_E.$0([ 'ImageId' ], [ _o365c._TI.$8T ], null, 'Id', null, _o365c._TI.$2X, 1)).$2(_E.$0([ 'ImageId' ], [ _o365c._TI.$8T ], null, 'IsHidden', null, _o365c._TI.$N, 1, _o365c._TI.$g, null, true));
$v$o.set_$7('_o365c_f');
return new _B($v$m, [ $v$o, $v$n ]);
}, _0365m.$1d, _js.$9, false, false, false, 0);
new _A('ContextMenuView', function() {
var $v$p = _o365c._TI._hf.childNodes[11].cloneNode(true);
var $v$q = new _o365c.$1(_B.$V($v$p, [ 0, 0, 0 ]), (_js.$A.Instance).$QK(_0365f.$X));
$v$q.$2(_E.$0([ 'ContextMenuItems' ], [ _o365c._TI.$BZ ], null, 'DataSource', null, _o365c._TI.$6B, 1)).$2(_E.$0([ 'SelectedItem' ], [ _o365c._TI.$Ba ], _o365c._TI.$Bb, 'SelectedItem', _o365c._TI.$BW, _o365c._TI.$BX, 2)).$2(_E.$2J(_o365c.$H.$5I, null, null, null, 'AriaLabel', null, _o365c._TI.$49, 0)).$6(_E.$0([ 'IsTouch' ], [ _o365c._TI.$Fq ], null, 'SelectItemOnHover', null, _o365c._TI.$Fs, 0, _o365c._TI.$W, null, false));
$v$q.set_$4r('div');
$v$q.set_$4q('_o365c_7');
$v$q.$2p = true;
$v$q.set_$7('_o365c_6');
var $v$r = new _o365c.$P();
var $v$s = new _o365c.$I();
$v$s.$6(_E.$0([ 'ContextParent', 'ContextParent', 'DownArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$69 ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$s.set_$T('DOWNARROW');
var $v$t = new _o365c.$I();
$v$t.$6(_E.$0([ 'ContextParent', 'ContextParent', 'DownArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$69 ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$t.set_$T('TAB');
$v$t.$2y = false;
var $v$u = new _o365c.$I();
$v$u.$6(_E.$0([ 'ContextParent', 'ContextParent', 'UpArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$6A ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$u.set_$T('UPARROW');
var $v$v = new _o365c.$I();
$v$v.$6(_E.$0([ 'ContextParent', 'ContextParent', 'UpArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$6A ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$v.set_$T('TAB');
$v$v.$3S = 1;
$v$v.$2y = false;
var $v$w = new _o365c.$I();
$v$w.$6(_E.$0([ 'ContextParent', 'ContextParent', 'LeftArrowSubMenuCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BS ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$w.set_$T('LEFTARROW');
var $v$x = new _o365c.$I();
$v$x.$6(_E.$0([ 'ContextParent', 'ContextParent', 'HomeCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BR ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$x.set_$T('HOME');
var $v$y = new _o365c.$I();
$v$y.$6(_E.$0([ 'ContextParent', 'ContextParent', 'EndCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BQ ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$y.set_$T('END');
$v$r.set_$1g([ $v$s, $v$t, $v$u, $v$v, $v$w, $v$x, $v$y ]);
$v$q.set_$1J([ $v$r ]);
$v$q.set_$60(function() {
var $v$11 = window.document.createElement('div');
$v$11.innerHTML = '<div></div>';
var $v$12 = new _o365c.$b(_B.$V($v$11, []).cloneNode(true));
$v$12.$2(_E.$0([ 'MenuItemTemplateId' ], [ _o365c._TI.$Bc ], null, 'TemplateId', null, _o365c._TI.$1i, 1)).$2(_E.$0([ 'ParentContextMenu', 'IsShown' ], [ _o365c._TI.$N2, _o365c._TI.$L ], null, 'PassFocusOnSelection', null, _o365c._TI.$MR, 1, null, null, false));
return $v$12;
});
$v$q.set_$D('ContextMenuView._tid1');
var $v$z = new _o365c.$t(_B.$V($v$p, [ 0, 0 ]), (_js.$A.Instance).$QK(_js.$1Y), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$U));
$v$z.set_$7('_o365c_p _o365c_5');
var $v$10 = new _js.$3($v$p.children[0]);
$v$10.$2(_E.$0([ 'CustomMenuCssClass' ], [ _o365c._TI.$Fz ], null, 'CssClass', null, _o365c._TI.$Mk, 1));
$v$10.$G(new _js.$F('_o365c_k', [ 'CustomMenuCssClass' ], [ _o365c._TI.$Fz ], _o365c._TI.$3N, null, 0));
return new _B($v$p, [ $v$10, $v$z, $v$q ]).R({ PopupContent: $v$z, MenuListView: $v$q });
}, _0365m.$W, _o365c.$Q, false, false, false, 0);
new _A('HorizontalPanelContainerView', function() {
var $v$13 = _o365c._TI._hf.childNodes[12].cloneNode(true);
var $v$14 = new _js.$3(_B.$V($v$13, [ 0, 0, 0 ]));
return new _B($v$13, [ $v$14 ]).R({ Container: $v$14 });
}, Object, _o365c.$18, false, false, false, 0);
new _A('Picker._tid7', function() {
var $v$15 = _o365c._TI._hf.childNodes[13].cloneNode(true);
var $v$16 = new _o365c.$s(_B.$V($v$15, [ 1, 1 ]));
$v$16.$2(_E.$2J(_o365c.$N.$AM, null, null, null, 'Id', null, _o365c._TI.$2X, 0)).$6(_E.$0([ 'TemplatedParent', 'ContextMenu', 'IsShown' ], [ _o365c._TI.$1N, _o365c._TI.$6C, _o365c._TI.$L ], null, 'IsHidden', null, _o365c._TI.$N, 1, _o365c._TI.$W, null, true));
$v$16.set_$7('_o365c_z');
var $v$17 = new _o365c.$s(_B.$V($v$15, [ 1, 0 ]));
$v$17.$6(_E.$0([ 'CurrentImageId' ], [ _o365c._TI.$47 ], null, 'Id', null, _o365c._TI.$2X, 1)).$6(_E.$0([ 'TemplatedParent', 'ContextMenu', 'IsShown' ], [ _o365c._TI.$1N, _o365c._TI.$6C, _o365c._TI.$L ], null, 'IsHidden', null, _o365c._TI.$N, 1, null, null, true));
$v$17.set_$7('_o365c_z');
var $v$18 = new _js.$9($v$15.children[0]);
$v$18.$6(_E.$0([ 'TemplatedParent', 'DisplayedValue' ], [ _o365c._TI.$1N, _o365c._TI.$MX ], null, 'DataContext', null, _o365c._TI.$1H, 1)).$6(_E.$0([ 'TemplatedParent', 'PickerOptionTemplateId' ], [ _o365c._TI.$1N, _o365c._TI.$MZ ], null, 'TemplateId', null, _o365c._TI.$1i, 1));
$v$18.set_$9k(true);
$v$18.set_$7('_o365c_s');
return new _B($v$15, [ $v$18, $v$17, $v$16 ]);
}, Object, _o365c.$E, false, true, false, 0);
new _A('Picker.ContextMenu._tid8', function() {
var $v$19 = _o365c._TI._hf.childNodes[1].cloneNode(true);
var $v$1A = new _o365c.$L($v$19.children[0], (_js.$A.Instance).$QK(_o365c.$c));
return new _B($v$19, [ $v$1A ]).R({ ListPanel: $v$1A });
}, _0365m.$W, _o365c.$1, false, true, false, 0);
new _A('Picker.ContextMenu', function() {
var $v$1B = _o365c._TI._hf.childNodes[14].cloneNode(true);
var $v$1C = new _o365c.$1(_B.$V($v$1B, [ 0, 0, 0 ]), (_js.$A.Instance).$QK(_0365f.$X));
$v$1C.$2(_E.$0([ 'ContextMenuItems' ], [ _o365c._TI.$BZ ], null, 'DataSource', null, _o365c._TI.$6B, 1)).$2(_E.$0([ 'SelectedItem' ], [ _o365c._TI.$Ba ], _o365c._TI.$Bb, 'SelectedItem', _o365c._TI.$BW, _o365c._TI.$BX, 2)).$6(_E.$0([ 'IsTouch' ], [ _o365c._TI.$Fq ], null, 'SelectItemOnHover', null, _o365c._TI.$Fs, 0, _o365c._TI.$W, null, false));
$v$1C.set_$4r('div');
$v$1C.set_$4q('_o365c_B');
$v$1C.set_$7('_o365c_O');
$v$1C.$Ac = true;
var $v$1D = new _o365c.$P();
var $v$1E = new _o365c.$I();
$v$1E.$6(_E.$0([ 'ContextParent', 'ContextParent', 'DownArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$69 ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$1E.set_$T('DOWNARROW');
var $v$1F = new _o365c.$I();
$v$1F.$6(_E.$0([ 'ContextParent', 'ContextParent', 'CloseCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BY ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$1F.set_$T('TAB');
$v$1F.$6Q = false;
$v$1F.$2y = false;
var $v$1G = new _o365c.$I();
$v$1G.$6(_E.$0([ 'ContextParent', 'ContextParent', 'UpArrowCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$6A ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$1G.set_$T('UPARROW');
var $v$1H = new _o365c.$I();
$v$1H.$6(_E.$0([ 'ContextParent', 'ContextParent', 'CloseCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BY ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$1H.set_$T('TAB');
$v$1H.$3S = 1;
$v$1H.$6Q = false;
$v$1H.$2y = false;
var $v$1I = new _o365c.$I();
$v$1I.$6(_E.$0([ 'ContextParent', 'ContextParent', 'LeftArrowSubMenuCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BS ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$1I.set_$T('LEFTARROW');
var $v$1J = new _o365c.$I();
$v$1J.$6(_E.$0([ 'ContextParent', 'ContextParent', 'HomeCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BR ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$1J.set_$T('HOME');
var $v$1K = new _o365c.$I();
$v$1K.$6(_E.$0([ 'ContextParent', 'ContextParent', 'EndCommand' ], [ _o365c._TI.$F, _o365c._TI.$F, _o365c._TI.$BQ ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$1K.set_$T('END');
$v$1D.set_$1g([ $v$1E, $v$1F, $v$1G, $v$1H, $v$1I, $v$1J, $v$1K ]);
$v$1C.set_$1J([ $v$1D ]);
$v$1C.set_$60(function() {
var $v$1M = window.document.createElement('div');
$v$1M.innerHTML = '<div></div>';
var $v$1N = new _o365c.$b(_B.$V($v$1M, []).cloneNode(true));
$v$1N.$2(_E.$0([ 'MenuItemTemplateId' ], [ _o365c._TI.$Mp ], null, 'TemplateId', null, _o365c._TI.$1i, 1)).$2(_E.$0([ 'ShowCheckmark' ], [ _o365c._TI.$4y ], null, 'AriaSelectedState', null, _o365c._TI.$MQ, 1, _o365c._TI.$Fr, null, 0));
$v$1N.set_$EC(false);
return $v$1N;
});
$v$1C.set_$D('Picker.ContextMenu._tid8');
var $v$1L = new _o365c.$t(_B.$V($v$1B, [ 0, 0 ]), (_js.$A.Instance).$QK(_js.$1Y), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$U));
$v$1L.set_$7('_o365c_N _o365c_A');
return new _B($v$1B, [ $v$1L, $v$1C ]).R({ PopupContent: $v$1L, MenuListView: $v$1C });
}, _0365m.$W, _o365c.$Q, false, false, false, 0);
new _A('Picker.DualStateContextMenuItem._tid9', function() {
var $v$1O = _o365c._TI._hf.childNodes[15].cloneNode(true);
var $v$1P = new _js.$9(_B.$V($v$1O, [ 1, 0 ]));
$v$1P.$2(_E.$0([ 'LabelDataContext' ], [ _o365c._TI.$8U ], null, 'DataContext', null, _o365c._TI.$1H, 1)).$6(_E.$0([ 'DataContext', 'LabelTemplateId' ], [ _o365c._TI.$48, _o365c._TI.$8V ], null, 'TemplateId', null, _o365c._TI.$1i, 1));
$v$1P.set_$7('_o365c_G');
var $v$1Q = new _js.$3($v$1O.children[1]);
$v$1Q.$G(new _js.$F('_o365c_E', [ 'ShowCheckmark' ], [ _o365c._TI.$4y ], _o365c._TI.$W, null, 0));
var $v$1R = new _o365c.$s($v$1O.children[0]);
$v$1R.$2(_E.$2J(_o365c.$N.$7H, null, null, null, 'Id', null, _o365c._TI.$2X, 0)).$2(_E.$0([ 'ShowCheckmark' ], [ _o365c._TI.$4y ], null, 'IsHidden', null, _o365c._TI.$N, 1, _o365c._TI.$W, null, true));
$v$1R.set_$7('_o365c_H');
return new _B($v$1O, [ $v$1R, $v$1Q, $v$1P ]);
}, _0365m.$1D, _o365c.$1N, false, true, false, 0);
new _A('Picker.DualStateContextMenuItem', function() {
var $v$1S = _o365c._TI._hf.childNodes[16].cloneNode(true);
var $v$1T = new _o365c.$1N($v$1S.children[0], (_js.$A.Instance).$QK(_0365f.$U));
$v$1T.$2(_E.$0([ 'Command' ], [ _o365c._TI.$4B ], null, 'ClickCommand', null, _o365c._TI.$2A, 1)).$6(_E.$0([ 'TemplatedParent', 'TemplatedParent', 'CloseCommand' ], [ _o365c._TI.$1N, _o365c._TI.$1N, _o365c._TI.$BY ], null, 'CloseMenuCommand', null, _o365c._TI.$67, 1)).$6(_E.$0([ 'TemplatedParent', 'TemplatedParent', 'PopupId' ], [ _o365c._TI.$1N, _o365c._TI.$1N, _o365c._TI.$Ma ], null, 'ContextMenuPopupId', null, _o365c._TI.$68, 1, null, null, 0));
$v$1T.$G(new _js.$F('_o365c_M', [ 'ShowCheckmark' ], [ _o365c._TI.$4y ], null, null, 0)).$G(new _js.$F('_o365c_L', [ 'Command', 'CanExecute' ], [ _o365c._TI.$4B, _o365c._TI.$Fu ], _o365c._TI.$W, null, 0)).$G(new _js.$F('_o365c_K', [ 'Command', 'CanExecute' ], [ _o365c._TI.$4B, _o365c._TI.$Fu ], null, null, 0)).$G(new _js.$F('_o365c_D', [ 'IsSelected' ], [ _o365c._TI.$6D ], null, null, 0));
$v$1T.set_$1k(13);
$v$1T.set_$7('_o365c_I');
$v$1T.set_$6P('_o365c_D');
var $v$1U = new _o365c.$P();
var $v$1V = new _o365c.$I();
$v$1V.$6(_E.$0([ 'ContextParent', 'ClickCommand' ], [ _o365c._TI.$F, _o365c._TI.$Fv ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$1V.set_$T('TAB');
$v$1V.$6Q = false;
$v$1V.$2y = false;
var $v$1W = new _o365c.$I();
$v$1W.$6(_E.$0([ 'ContextParent', 'ClickCommand' ], [ _o365c._TI.$F, _o365c._TI.$Fv ], null, 'Command', null, _o365c._TI.$Z, 1));
$v$1W.set_$T('TAB');
$v$1W.$3S = 1;
$v$1W.$6Q = false;
$v$1W.$2y = false;
$v$1U.set_$1g([ $v$1V, $v$1W ]);
$v$1T.set_$1J([ $v$1U ]);
$v$1T.set_$D('Picker.DualStateContextMenuItem._tid9');
return new _B($v$1S, [ $v$1T ]).R({ FocusControl: $v$1T });
}, _0365m.$1D, _o365c.$b, false, false, false, 0);
new _A('Picker', function() {
var $v$1X = _o365c._TI._hf.childNodes[17].cloneNode(true);
var $v$1Y = new _o365c.$E($v$1X.children[0]);
$v$1Y.$2(_E.$2J(_o365c.$N.$Ed, null, null, null, 'ImageId', null, _o365c._TI.$MK, 0)).$2(_E.$2J(_o365c.$N.$AM, null, null, null, 'HoveredImageId', null, _o365c._TI.$MJ, 0)).$2(_E.$2J(_o365c.$N.$Ec, null, null, null, 'DisabledImageId', null, _o365c._TI.$MI, 0)).$6(_E.$0([ 'IsPickerEnabled' ], [ _o365c._TI.$Ft ], null, 'IsEnabled', null, _o365c._TI.$ML, 1, null, null, false)).$6(_E.$0([ 'AriaTabIndex' ], [ _o365c._TI.$MW ], null, 'AriaTabIndex', null, _o365c._TI.$Mj, 1, null, null, 0)).$6(_E.$0([ 'PickerButtonAriaLabelledBy' ], [ _o365c._TI.$MY ], null, 'AriaLabelledBy', null, _o365c._TI.$Mi, 1));
$v$1Y.$G(new _js.$F('_o365c_x', [ 'ContextMenu', 'IsShown' ], [ _o365c._TI.$6C, _o365c._TI.$L ], null, null, 1));
$v$1Y.set_$7('_o365c_r');
$v$1Y.set_$8s('_o365c_t');
$v$1Y.set_$6P('_o365c_u');
$v$1Y.set_$2j('_o365c_v');
$v$1Y.set_$4m('_o365c_w');
$v$1Y.set_$1k(26);
var $v$1Z = new _o365c.$H((_js.$A.Instance).$QK(_o365c.$c), (_js.$A.Instance).$QK(_0365f.$U), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$q));
$v$1Z.$6(_E.$0([ 'TemplatedParent', 'ContextMenu' ], [ _o365c._TI.$1N, _o365c._TI.$6C ], null, 'MenuDataContext', null, _o365c._TI.$3M, 1)).$6(_E.$0([ 'TemplatedParent', 'IsPickerEnabled' ], [ _o365c._TI.$1N, _o365c._TI.$Ft ], null, 'IsEnabled', null, _o365c._TI.$MH, 1, null, null, false)).$6(_E.$0([ 'TemplatedParent', 'ContextMenu', 'IsShown' ], [ _o365c._TI.$1N, _o365c._TI.$6C, _o365c._TI.$L ], _o365c._TI.$3Q, 'IsShown', _o365c._TI.$3K, _o365c._TI.$3L, 2, null, null, false));
$v$1Z.$9m = 28;
$v$1Z.set_$D('Picker.ContextMenu');
$v$1Z.$1E = 3;
$v$1Z.$1s = 1;
$v$1Y.set_$1J([ $v$1Z ]);
$v$1Y.set_$D('Picker._tid7');
return new _B($v$1X, [ $v$1Y ]).R({ PickerButtonId: $v$1Y });
}, Object, _o365c.$N, false, false, false, 0);
}
_o365c._TI.$As = function _o365c__TI$$As() {
var $v$0 = window.document.createElement('DIV');
$v$0.innerHTML = '<div> <span></span> <span></span> </div><div>   <div></div> </div><div> <div></div> </div><div> <span></span> </div><div> <div autoid=\"_o365c_1\"></div> </div><div> <span></span> <div class=\'_o365c_d _o365c_q\'> <div></div> </div> </div><div> <div autoid=\"_o365c_2\"></div> </div><div> <div></div> <span></span> </div><div> <div autoid=\"_o365c_3\"></div> </div><div> <a></a> </div><div> <span></span> <span autoid=\"_o365c_4\"></span> </div><div> <div> <div> <div role=\'menu\' autoid=\"_o365c_0\"></div> </div> </div>          </div><div> <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"> <tbody> <tr> </tr> </tbody> </table> </div><div>  <div autoid=\"_o365c_6\"></div> <div class=\'_o365c_y\'> <span></span> <span></span> </div> </div><div> <div class=\'_o365c_C\'> <div> <div autoid=\"_o365c_7\"></div> </div> </div> </div><div>  <span></span> <div class=\'_o365c_F _o365c_P\'> <div autoid=\"_o365c_9\"></div> </div> </div><div> <div autoid=\"_o365c_8\"></div> </div><div> <button autoid=\"_o365c_5\" type=\'button\'></button>   </div>';
_js.$3.get_$7F().appendChild($v$0);
return $v$0;
}
_o365c._TI.$47 = function _o365c__TI$$47($p$0) {
return ($p$0).$3A;
}
_o365c._TI.$2q = function _o365c__TI$$2q($p$0) {
return ($p$0).$1C;
}
_o365c._TI.$BO = function _o365c__TI$$BO($p$0) {
return ($p$0).get_$FV();
}
_o365c._TI.$BZ = function _o365c__TI$$BZ($p$0) {
return ($p$0).$s;
}
_o365c._TI.$Ba = function _o365c__TI$$Ba($p$0) {
return ($p$0).$t;
}
_o365c._TI.$BW = function _o365c__TI$$BW($p$0) {
return ($p$0).get_$u();
}
_o365c._TI.$F = function _o365c__TI$$F($p$0) {
return ($p$0).$Q;
}
_o365c._TI.$69 = function _o365c__TI$$69($p$0) {
return ($p$0).$Eb;
}
_o365c._TI.$6A = function _o365c__TI$$6A($p$0) {
return ($p$0).$HN;
}
_o365c._TI.$BS = function _o365c__TI$$BS($p$0) {
return ($p$0).$Fe;
}
_o365c._TI.$BR = function _o365c__TI$$BR($p$0) {
return ($p$0).$F3;
}
_o365c._TI.$BQ = function _o365c__TI$$BQ($p$0) {
return ($p$0).$Ee;
}
_o365c._TI.$Bc = function _o365c__TI$$Bc($p$0) {
return ($p$0).get_$ME();
}
_o365c._TI.$Mm = function _o365c__TI$$Mm($p$0) {
return ($p$0).$1A;
}
_o365c._TI.$Mn = function _o365c__TI$$Mn($p$0) {
return ($p$0).$2b;
}
_o365c._TI.$N1 = function _o365c__TI$$N1($p$0) {
return ($p$0).$7U;
}
_o365c._TI.$Ml = function _o365c__TI$$Ml($p$0) {
return ($p$0).$1C;
}
_o365c._TI.$8U = function _o365c__TI$$8U($p$0) {
return ($p$0).$45;
}
_o365c._TI.$8V = function _o365c__TI$$8V($p$0) {
return ($p$0).$BJ;
}
_o365c._TI.$6D = function _o365c__TI$$6D($p$0) {
return ($p$0).get_$r();
}
_o365c._TI.$4B = function _o365c__TI$$4B($p$0) {
return ($p$0).$8A;
}
_o365c._TI.$h = function _o365c__TI$$h($p$0) {
return ($p$0).get_$6L();
}
_o365c._TI.$8W = function _o365c__TI$$8W($p$0) {
return ($p$0).$7L;
}
_o365c._TI.$8X = function _o365c__TI$$8X($p$0) {
return ($p$0).$2I;
}
_o365c._TI.$8a = function _o365c__TI$$8a($p$0) {
return ($p$0).$4a;
}
_o365c._TI.$8Y = function _o365c__TI$$8Y($p$0) {
return ($p$0).$7P;
}
_o365c._TI.$8Z = function _o365c__TI$$8Z($p$0) {
return ($p$0).$7R;
}
_o365c._TI.$8b = function _o365c__TI$$8b($p$0) {
return ($p$0).$7T;
}
_o365c._TI.$3P = function _o365c__TI$$3P($p$0) {
return ($p$0).$1A;
}
_o365c._TI.$4y = function _o365c__TI$$4y($p$0) {
return ($p$0).get_$Pm();
}
_o365c._TI.$Mo = function _o365c__TI$$Mo($p$0) {
return ($p$0).get_$2V();
}
_o365c._TI.$MN = function _o365c__TI$$MN($p$0) {
return ($p$0).$2n;
}
_o365c._TI.$Mq = function _o365c__TI$$Mq($p$0) {
return ($p$0).get_$Q1();
}
_o365c._TI.$Mz = function _o365c__TI$$Mz($p$0) {
return ($p$0).$4J;
}
_o365c._TI.$Mw = function _o365c__TI$$Mw($p$0) {
return ($p$0).$1K;
}
_o365c._TI.$My = function _o365c__TI$$My($p$0) {
return ($p$0).$94;
}
_o365c._TI.$Mb = function _o365c__TI$$Mb($p$0) {
return ($p$0).$88;
}
_o365c._TI.$Mx = function _o365c__TI$$Mx($p$0) {
return ($p$0).$1B;
}
_o365c._TI.$L = function _o365c__TI$$L($p$0) {
return ($p$0).$1o;
}
_o365c._TI.$8T = function _o365c__TI$$8T($p$0) {
return ($p$0).$3y;
}
_o365c._TI.$Fx = function _o365c__TI$$Fx($p$0) {
return ($p$0).$1C;
}
_o365c._TI.$Mu = function _o365c__TI$$Mu($p$0) {
return ($p$0).$32;
}
_o365c._TI.$Mt = function _o365c__TI$$Mt($p$0) {
return ($p$0).$1b;
}
_o365c._TI.$Ms = function _o365c__TI$$Ms($p$0) {
return ($p$0).$1w;
}
_o365c._TI.$Mv = function _o365c__TI$$Mv($p$0) {
return ($p$0).$5I;
}
_o365c._TI.$Fz = function _o365c__TI$$Fz($p$0) {
return ($p$0).$7S;
}
_o365c._TI.$Fq = function _o365c__TI$$Fq($p$0) {
return ($p$0).get_$89();
}
_o365c._TI.$N2 = function _o365c__TI$$N2($p$0) {
return ($p$0).get_$6L();
}
_o365c._TI.$1N = function _o365c__TI$$1N($p$0) {
return ($p$0).get_$20();
}
_o365c._TI.$MX = function _o365c__TI$$MX($p$0) {
return ($p$0).get_$K5();
}
_o365c._TI.$MZ = function _o365c__TI$$MZ($p$0) {
return ($p$0).$Ge;
}
_o365c._TI.$6C = function _o365c__TI$$6C($p$0) {
return ($p$0).$o;
}
_o365c._TI.$BY = function _o365c__TI$$BY($p$0) {
return ($p$0).$1S;
}
_o365c._TI.$Mp = function _o365c__TI$$Mp($p$0) {
return ($p$0).get_$ME();
}
_o365c._TI.$48 = function _o365c__TI$$48($p$0) {
return ($p$0).get_$Y();
}
_o365c._TI.$Ma = function _o365c__TI$$Ma($p$0) {
return ($p$0).$d;
}
_o365c._TI.$Fu = function _o365c__TI$$Fu($p$0) {
return ($p$0).$c;
}
_o365c._TI.$Fv = function _o365c__TI$$Fv($p$0) {
return ($p$0).get_$2e();
}
_o365c._TI.$Ft = function _o365c__TI$$Ft($p$0) {
return ($p$0).$FN;
}
_o365c._TI.$MW = function _o365c__TI$$MW($p$0) {
return ($p$0).get_$1d();
}
_o365c._TI.$MY = function _o365c__TI$$MY($p$0) {
return ($p$0).get_$Ot();
}
_o365c._TI.$3K = function _o365c__TI$$3K($p$0) {
return ($p$0).get_$O();
}
_o365c._TI.$2X = function _o365c__TI$$2X($p$0, $p$1) {
($p$0).set_$n($p$1);
}
_o365c._TI.$N = function _o365c__TI$$N($p$0, $p$1) {
($p$0).set_$2W($p$1);
}
_o365c._TI.$1G = function _o365c__TI$$1G($p$0, $p$1) {
($p$0).set_$21($p$1);
}
_o365c._TI.$6B = function _o365c__TI$$6B($p$0, $p$1) {
($p$0).set_$16($p$1);
}
_o365c._TI.$Bb = function _o365c__TI$$Bb($p$0, $p$1) {
($p$0).set_$u($p$1);
}
_o365c._TI.$BX = function _o365c__TI$$BX($p$0, $p$1) {
($p$0).set_$u($p$1);
}
_o365c._TI.$Z = function _o365c__TI$$Z($p$0, $p$1) {
($p$0).$2H = $p$1;
}
_o365c._TI.$1i = function _o365c__TI$$1i($p$0, $p$1) {
($p$0).set_$D($p$1);
}
_o365c._TI.$MM = function _o365c__TI$$MM($p$0, $p$1) {
($p$0).set_$Jn($p$1);
}
_o365c._TI.$1H = function _o365c__TI$$1H($p$0, $p$1) {
($p$0).set_$Y($p$1);
}
_o365c._TI.$BP = function _o365c__TI$$BP($p$0, $p$1) {
($p$0).set_$r($p$1);
}
_o365c._TI.$2A = function _o365c__TI$$2A($p$0, $p$1) {
($p$0).set_$2e($p$1);
}
_o365c._TI.$67 = function _o365c__TI$$67($p$0, $p$1) {
($p$0).set_$JN($p$1);
}
_o365c._TI.$68 = function _o365c__TI$$68($p$0, $p$1) {
($p$0).$2I = $p$1;
}
_o365c._TI.$8Q = function _o365c__TI$$8Q($p$0, $p$1) {
($p$0).set_$Jq($p$1);
}
_o365c._TI.$8O = function _o365c__TI$$8O($p$0, $p$1) {
($p$0).set_$Jk($p$1);
}
_o365c._TI.$8P = function _o365c__TI$$8P($p$0, $p$1) {
($p$0).set_$Jo($p$1);
}
_o365c._TI.$8R = function _o365c__TI$$8R($p$0, $p$1) {
($p$0).set_$Jt($p$1);
}
_o365c._TI.$8S = function _o365c__TI$$8S($p$0, $p$1) {
($p$0).set_$9k($p$1);
}
_o365c._TI.$Mr = function _o365c__TI$$Mr($p$0, $p$1) {
($p$0).set_$2V($p$1);
}
_o365c._TI.$MO = function _o365c__TI$$MO($p$0, $p$1) {
($p$0).set_$2V($p$1);
}
_o365c._TI.$MP = function _o365c__TI$$MP($p$0, $p$1) {
($p$0).$6g = $p$1;
}
_o365c._TI.$Mc = function _o365c__TI$$Mc($p$0, $p$1) {
($p$0).set_$r($p$1);
}
_o365c._TI.$Mh = function _o365c__TI$$Mh($p$0, $p$1) {
($p$0).set_$Pu($p$1);
}
_o365c._TI.$Mg = function _o365c__TI$$Mg($p$0, $p$1) {
($p$0).set_$Pr($p$1);
}
_o365c._TI.$N0 = function _o365c__TI$$N0($p$0, $p$1) {
($p$0).set_$Ps($p$1);
}
_o365c._TI.$Md = function _o365c__TI$$Md($p$0, $p$1) {
($p$0).set_$FS($p$1);
}
_o365c._TI.$Mf = function _o365c__TI$$Mf($p$0, $p$1) {
($p$0).set_$HB($p$1);
}
_o365c._TI.$Me = function _o365c__TI$$Me($p$0, $p$1) {
($p$0).set_$Ga($p$1);
}
_o365c._TI.$MT = function _o365c__TI$$MT($p$0, $p$1) {
($p$0).set_$5p($p$1);
}
_o365c._TI.$MV = function _o365c__TI$$MV($p$0, $p$1) {
($p$0).set_$4L($p$1);
}
_o365c._TI.$MU = function _o365c__TI$$MU($p$0, $p$1) {
($p$0).set_$C4($p$1);
}
_o365c._TI.$49 = function _o365c__TI$$49($p$0, $p$1) {
($p$0).set_$5J($p$1);
}
_o365c._TI.$Mk = function _o365c__TI$$Mk($p$0, $p$1) {
($p$0).set_$7($p$1);
}
_o365c._TI.$Fs = function _o365c__TI$$Fs($p$0, $p$1) {
($p$0).$8v = $p$1;
}
_o365c._TI.$MR = function _o365c__TI$$MR($p$0, $p$1) {
($p$0).set_$Oq($p$1);
}
_o365c._TI.$MQ = function _o365c__TI$$MQ($p$0, $p$1) {
($p$0).set_$76($p$1);
}
_o365c._TI.$MK = function _o365c__TI$$MK($p$0, $p$1) {
($p$0).set_$LW($p$1);
}
_o365c._TI.$MJ = function _o365c__TI$$MJ($p$0, $p$1) {
($p$0).set_$LS($p$1);
}
_o365c._TI.$MI = function _o365c__TI$$MI($p$0, $p$1) {
($p$0).set_$K1($p$1);
}
_o365c._TI.$ML = function _o365c__TI$$ML($p$0, $p$1) {
($p$0).set_$1F($p$1);
}
_o365c._TI.$Mj = function _o365c__TI$$Mj($p$0, $p$1) {
($p$0).set_$1d($p$1);
}
_o365c._TI.$Mi = function _o365c__TI$$Mi($p$0, $p$1) {
($p$0).set_$E9($p$1);
}
_o365c._TI.$3M = function _o365c__TI$$3M($p$0, $p$1) {
($p$0).set_$Fn($p$1);
}
_o365c._TI.$MH = function _o365c__TI$$MH($p$0, $p$1) {
($p$0).set_$1F($p$1);
}
_o365c._TI.$3Q = function _o365c__TI$$3Q($p$0, $p$1) {
($p$0).set_$O($p$1);
}
_o365c._TI.$3L = function _o365c__TI$$3L($p$0, $p$1) {
($p$0).set_$O($p$1);
}
_o365c.$E.registerClass('_o365c.$E', _js.$9);
_o365c.$1H.registerClass('_o365c.$1H');
_o365c.$x.registerClass('_o365c.$x');
_o365c.$1J.registerClass('_o365c.$1J');
_o365c.$1j.registerClass('_o365c.$1j', _o365c.$E);
_o365c.$D.registerClass('_o365c.$D', _js.$9);
_o365c.$Q.registerClass('_o365c.$Q', _o365c.$D);
_o365c.$g.registerClass('_o365c.$g');
_o365c.$28.registerClass('_o365c.$28', _js.$3);
_o365c.$1N.registerClass('_o365c.$1N', _o365c.$1j);
_o365c.$1p.registerClass('_o365c.$1p', _o365c.$1j);
_o365c.$1R.registerClass('_o365c.$1R');
_o365c.$T.registerClass('_o365c.$T', _o365c.$1j);
_o365c.$1A.registerClass('_o365c.$1A');
_o365c.$v.registerClass('_o365c.$v', _js.$9);
_o365c.$b.registerClass('_o365c.$b', _o365c.$v);
_o365c.$2C.registerClass('_o365c.$2C', _js.$9);
_o365c.$2D.registerClass('_o365c.$2D', _js.$3);
_o365c.$2M.registerClass('_o365c.$2M', _js.$3);
_o365c.$L.registerClass('_o365c.$L', _o365c.$2M);
_o365c.$18.registerClass('_o365c.$18', _o365c.$L);
_o365c.$s.registerClass('_o365c.$s', _js.$3);
_o365c.$2F.registerClass('_o365c.$2F', _o365c.$s);
_o365c.$R.registerClass('_o365c.$R', _js.$3);
_o365c.$e.registerClass('_o365c.$e', _o365c.$E);
_o365c.$1.registerClass('_o365c.$1', _js.$9);
_o365c.$N.registerClass('_o365c.$N', _js.$9);
_o365c.$D.$Ou.registerClass('_o365c.$D.$Ou', _js.$2h);
_o365c.$V.registerClass('_o365c.$V', _js.$l);
_o365c.$i.registerClass('_o365c.$i', _o365c.$V);
_o365c.$1S.registerClass('_o365c.$1S', _o365c.$V);
_o365c.$1w.registerClass('_o365c.$1w', _o365c.$V);
_o365c.$2O.registerClass('_o365c.$2O', _o365c.$1S);
_o365c.$t.registerClass('_o365c.$t', _js.$3);
_o365c.$24.registerClass('_o365c.$24', null, _o365c.$2W);
_o365c.$24.$E6.registerClass('_o365c.$24.$E6');
_o365c.$1e.registerClass('_o365c.$1e', null, _o365c.$2W);
_o365c.$2L.registerClass('_o365c.$2L', null, _o365c.$c);
_o365c.$2l.registerClass('_o365c.$2l', _js.$w);
_o365c.$I.registerClass('_o365c.$I', _js.$l);
_o365c.$P.registerClass('_o365c.$P', _js.$w);
_o365c.$j.registerClass('_o365c.$j', _js.$w);
_o365c.$2B.registerClass('_o365c.$2B', _js.$w);
_o365c.$H.registerClass('_o365c.$H', _o365c.$2l);
_o365c.$25.registerClass('_o365c.$25', null, _js.$2c);
_o365c.$1i.registerClass('_o365c.$1i', null, _js.$2c);
_o365c.$2I.registerClass('_o365c.$2I', null, _js.$2c);
_o365c.$1s.registerClass('_o365c.$1s', null, _js.$2c);
_o365c.$1t.registerClass('_o365c.$1t', null, _js.$2c);
_o365c.$14.registerClass('_o365c.$14', _js.$3);
_o365c.$1m.registerClass('_o365c.$1m', _o365c.$14);
_o365c._TI.registerClass('_o365c._TI');
_o365c.$Q.$EX = null;
_o365c.$g.$18 = null;
_o365c.$T.$HP = -1;
_o365c.$T.$F4 = -5;
_o365c.$1.$4u = {};
_o365c.$1.$AQ = new _G('EventInfo', _0365f.$1E, _o365c.$1);
_o365c.$1.$CQ = new _G('SelectOnRightClick', Boolean, _o365c.$1, false);
_o365c.$N.$Ed = null;
_o365c.$N.$AM = null;
_o365c.$N.$Ec = null;
_o365c.$N.$7H = null;
_o365c.$D.$EQ = 0;
_o365c.$L.$Ay = new _G('InView', Boolean, _js.$3);
_o365c.$L.$HQ = new _G('ViewportOffset', Number, _js.$3);
_o365c.$I.$Pw = new _C(_o365c.$I.$K8, _0365f.$6.$6c);
_o365c.$I.$8C = null;
_o365c.$H.$7u = new Sys.EventHandlerList();
_o365c.$H.$En = null;
_o365c.$H.$7H = null;
_o365c.$H.$5I = null;
_o365c.$14.$CY = new _G('Source', String, _o365c.$14);
_o365c._TI._hf = _o365c._TI.$As();
_o365c._TI.$g = new _o365c.$1t();
_o365c._TI.$W = new _o365c.$1i();
_o365c._TI.$3N = new _o365c.$1s();
_o365c._TI.$Fr = new _o365c.$25();
_o365c._TI.$$cctor();
Type.registerNamespace('_o365b');
_o365b.$p = function _o365b_$p() {
}
_o365b.$p.$$cctor = function _o365b_$p$$$cctor() {
_o365b.$20.$LX();
_o365b.$p.$7I = _o365b.$1n.$PH();
}
_o365b.$p.$J9 = function _o365b_$p$$J9($p$0) {
_o365b.$p.$7I.$QK(_o365b.$1k).$B2 = $p$0;
return _o365b.$p.$7I;
}
_o365b.$1k = function _o365b_$1k() {
}
_o365b.$1k.prototype = {
$B2: false,
get_$5s: function _o365b_$1k$get_$5s() {
return this.$B2;
},
set_$5s: function _o365b_$1k$set_$5s($p$0) {
this.$B2 = $p$0;
return $p$0;
}
}
_o365b.$1n = function _o365b_$1n() {
}
_o365b.$1n.$PH = function _o365b_$1n$$PH() {
var $v$0 = new _js.$A();
$v$0.$QJ(_0365f.$U).$Qc();
$v$0.$QJ(_o365b.$2J).$Qb(_0365f.$X).$Qc();
$v$0.$QJ(_o365b.$1k).$Qb(_0365f.$q).$Qc();
$v$0.$QJ(_js.$O).$Qb(_js.$1Y).$Qc();
$v$0.$QJ(_o365c.$2L).$Qb(_o365c.$c).$Qc();
_js.$A.Instance = $v$0;
return $v$0;
}
_o365b.$2J = function _o365b_$2J() {
}
_o365b.$2J.prototype = {
get_$2h: function _o365b_$2J$get_$2h() {
return 'Mouse';
},
set_$2h: function _o365b_$2J$set_$2h($p$0) {
return $p$0;
}
}
_o365b.$20 = function _o365b_$20() {
}
_o365b.$20.$LX = function _o365b_$20$$LX() {
window.startMeasure = window.endMeasure = window.timeStamp = window.time = window.timeEnd = function() {};;
}
_o365b.$p.registerClass('_o365b.$p');
_o365b.$1k.registerClass('_o365b.$1k', null, _0365f.$q);
_o365b.$1n.registerClass('_o365b.$1n');
_o365b.$2J.registerClass('_o365b.$2J', null, _0365f.$X);
_o365b.$20.registerClass('_o365b.$20');
_o365b.$p.$7I = null;
_o365b.$p.$$cctor();
;/*Bundled JS: /JS/O365ShellCoreStrings.js*/(function(){
  Type.registerNamespace("_u");
  if (typeof (_u.Strings) !== "function") {
    _u.Strings = function(){};
    _u.Strings.registerClass("_u.Strings");
  }
  var strings = _u.Strings;
strings.l_ShellCore_Device_Signout_Text='sign out';
strings.l_ShellCore_O365_Text='Office 365';
strings.l_ShellCore_Affordance_Text='More';
strings.l_ShellCore_Settings_Text='Settings';
strings.l_ShellCore_Help_Text='Help';
strings.l_ShellCore_UserSettings_Text='User settings';
strings.l_ShellCore_Device_GlobalNav_Text='Open Office 365 global navigation';
strings.l_ShellCore_Device_Moremenu_Text='Open the More menu to navigate to more options';
strings.l_ShellCore_Device_Closemenu_Text='Close Office 365 global navigation and return to the previous page';
}());;/*Bundled JS: /JS/O365Shell15.js*/Type.registerNamespace('_o365s15');

_o365s15.bvi = function _o365s15_bvi() {
}


Type.registerNamespace('O365Shell15_Common');

O365Shell15_Common.$M = function O365Shell15_Common_$M() {
}
O365Shell15_Common.$M.get_$CT = function O365Shell15_Common_$M$get_$CT() {
    return O365Shell15_Common.$M.$U;
}
O365Shell15_Common.$M.set_$CT = function O365Shell15_Common_$M$set_$CT($p$0) {
    O365Shell15_Common.$M.$U = $p$0;
    if (!$5(O365Shell15_Common.$M.$U.ClientData)) {
        O365Shell15_Common.$M.$5R = JsonParser.deserialize(O365Shell15_Common.$M.$U.ClientData);
    }
    return $p$0;
}


O365Shell15_Common.$10 = function O365Shell15_Common_$10() {
}
O365Shell15_Common.$10.get_$Em = function O365Shell15_Common_$10$get_$Em() {
    return O365Shell15_Common.$M.$U.FlipHelpIcon;
}


Type.registerNamespace('O365Shell15_Navigation');

O365Shell15_Navigation.$1f = function O365Shell15_Navigation_$1f() {
    O365Shell15_Navigation.$1f.initializeBase(this);
}
O365Shell15_Navigation.$1f.prototype = {
    $BM: null,
    $Ff: null,
    $Gw: null
}


O365Shell15_Navigation.$1o = function O365Shell15_Navigation_$1o() {
}
O365Shell15_Navigation.$1o.prototype = {
    Id: null,
    Url: null,
    Cancel: false
}


O365Shell15_Navigation.$1U = function O365Shell15_Navigation_$1U() {
    O365Shell15_Navigation.$1U.initializeBase(this);
}
O365Shell15_Navigation.$1U.prototype = {
    $8I: null,
    $Lm: false,
    $BN: null,
    $Fh: null,
    $EF: null,
    $1A: false,
    
    get_$Fi: function O365Shell15_Navigation_$1U$get_$Fi() {
        return this.$8I;
    },
    set_$Fi: function O365Shell15_Navigation_$1U$set_$Fi($p$0) {
        if (this.$8I !== $p$0) {
            this.$8I = $p$0;
            $4(this, 'LogoUrl');
        }
        return $p$0;
    },
    
    get_$2W: function O365Shell15_Navigation_$1U$get_$2W() {
        return this.$1A;
    },
    set_$2W: function O365Shell15_Navigation_$1U$set_$2W($p$0) {
        if ($p$0 !== this.$1A) {
            this.$1A = $p$0;
            $4(this, 'IsHidden');
        }
        return $p$0;
    }
}


O365Shell15_Navigation.$12 = function O365Shell15_Navigation_$12() {
    O365Shell15_Navigation.$12.initializeBase(this);
}
O365Shell15_Navigation.$12.prototype = {
    $1V: false,
    $2H: null,
    
    get_$r: function O365Shell15_Navigation_$12$get_$r() {
        return this.$1V;
    },
    set_$r: function O365Shell15_Navigation_$12$set_$r($p$0) {
        if (this.$1V !== $p$0) {
            this.$1V = $p$0;
            $4(this, 'IsSelected');
        }
        return $p$0;
    },
    
    get_$JR: function O365Shell15_Navigation_$12$get_$JR() {
        return this.$2H;
    },
    set_$JR: function O365Shell15_Navigation_$12$set_$JR($p$0) {
        if (this.$2H !== $p$0) {
            this.$2H = $p$0;
            $4(this, 'Command');
        }
        return $p$0;
    }
}


O365Shell15_Navigation.$1O = function O365Shell15_Navigation_$1O() {
    O365Shell15_Navigation.$1O.initializeBase(this);
}
O365Shell15_Navigation.$1O.prototype = {
    $d: null,
    $75: null,
    $1C: null,
    $8K: null,
    $29: null,
    
    get_$n: function O365Shell15_Navigation_$1O$get_$n() {
        return this.$d;
    },
    set_$n: function O365Shell15_Navigation_$1O$set_$n($p$0) {
        if (this.$d !== $p$0) {
            this.$d = $p$0;
            $4(this, 'Id');
        }
        return $p$0;
    },
    
    get_$m: function O365Shell15_Navigation_$1O$get_$m() {
        if ($5(this.$75)) {
            return this.$d;
        }
        return this.$75;
    },
    set_$m: function O365Shell15_Navigation_$1O$set_$m($p$0) {
        if (this.$75 !== $p$0) {
            this.$75 = $p$0;
            $4(this, 'AriaId');
        }
        return $p$0;
    },
    
    get_$21: function O365Shell15_Navigation_$1O$get_$21() {
        return this.$1C;
    },
    set_$21: function O365Shell15_Navigation_$1O$set_$21($p$0) {
        if (this.$1C !== $p$0) {
            this.$1C = $p$0;
            $4(this, 'Text');
        }
        return $p$0;
    },
    
    get_$MD: function O365Shell15_Navigation_$1O$get_$MD() {
        return this.$8K;
    },
    set_$MD: function O365Shell15_Navigation_$1O$set_$MD($p$0) {
        if (this.$8K !== $p$0) {
            this.$8K = $p$0;
            $4(this, 'MenuCommand');
        }
        return $p$0;
    },
    
    get_$4w: function O365Shell15_Navigation_$1O$get_$4w() {
        return this.$29;
    },
    set_$4w: function O365Shell15_Navigation_$1O$set_$4w($p$0) {
        if (this.$29 !== $p$0) {
            this.$29 = $p$0;
            $4(this, 'MenuViewModel');
        }
        return $p$0;
    }
}


O365Shell15_Navigation.$d = function O365Shell15_Navigation_$d() {
    O365Shell15_Navigation.$d.initializeBase(this);
}
O365Shell15_Navigation.$d.prototype = {
    $32: null,
    $1b: null,
    $1w: false,
    
    get_$5C: function O365Shell15_Navigation_$d$get_$5C() {
        return this.$32;
    },
    set_$5C: function O365Shell15_Navigation_$d$set_$5C($p$0) {
        if (this.$32 !== $p$0) {
            this.$32 = $p$0;
            $4(this, 'Url');
        }
        return $p$0;
    },
    
    get_$4L: function O365Shell15_Navigation_$d$get_$4L() {
        return this.$1b;
    },
    set_$4L: function O365Shell15_Navigation_$d$set_$4L($p$0) {
        if (this.$1b !== $p$0) {
            this.$1b = $p$0;
            $4(this, 'TargetWindow');
        }
        return $p$0;
    },
    
    get_$C4: function O365Shell15_Navigation_$d$get_$C4() {
        return this.$1w;
    },
    set_$C4: function O365Shell15_Navigation_$d$set_$C4($p$0) {
        if (this.$1w !== $p$0) {
            this.$1w = $p$0;
            $4(this, 'PreventNavigation');
        }
        return $p$0;
    }
}


O365Shell15_Navigation.$1c = function O365Shell15_Navigation_$1c() {
    O365Shell15_Navigation.$1c.initializeBase(this);
}
O365Shell15_Navigation.$1c.prototype = {
    $7p: null,
    $73: null,
    $71: null,
    $8j: null,
    
    get_$F1: function O365Shell15_Navigation_$1c$get_$F1() {
        return this.$7p;
    },
    set_$F1: function O365Shell15_Navigation_$1c$set_$F1($p$0) {
        if (this.$7p !== $p$0) {
            this.$7p = $p$0;
            $4(this, 'HeaderMenus');
        }
        return $p$0;
    },
    
    get_$E8: function O365Shell15_Navigation_$1c$get_$E8() {
        return this.$73;
    },
    set_$E8: function O365Shell15_Navigation_$1c$set_$E8($p$0) {
        if (this.$73 !== $p$0) {
            this.$73 = $p$0;
            $4(this, 'AppsMenuViewModel');
        }
        return $p$0;
    },
    
    get_$E4: function O365Shell15_Navigation_$1c$get_$E4() {
        return this.$71;
    },
    set_$E4: function O365Shell15_Navigation_$1c$set_$E4($p$0) {
        if (this.$71 !== $p$0) {
            this.$71 = $p$0;
            $4(this, 'AdminMenuViewModel');
        }
        return $p$0;
    },
    
    get_$Gb: function O365Shell15_Navigation_$1c$get_$Gb() {
        return this.$8j;
    },
    set_$Gb: function O365Shell15_Navigation_$1c$set_$Gb($p$0) {
        if (this.$8j !== $p$0) {
            this.$8j = $p$0;
            $4(this, 'PartnerMenuViewModel');
        }
        return $p$0;
    }
}


O365Shell15_Navigation.$2N = function O365Shell15_Navigation_$2N($p$0) {
    this.$1C = $p$0;
}
O365Shell15_Navigation.$2N.prototype = {
    $1C: null
}


O365Shell15_Navigation.$C = function O365Shell15_Navigation_$C($p$0) {
    O365Shell15_Navigation.$C.initializeBase(this);
    this.set_$JA($p$0);
}
function $Ng($p$0) {
    $Nf($p$0);
    if ($p$0.$M.IsAuthenticated) {
        var $v$0 = new O365Shell15_Navigation.$1c();
        if (!$5($p$0.$M.WorkloadLinks)) {
            var $v$1 = new _js.$J();
            for (var $v$2 = 0; $v$2 < $p$0.$M.WorkloadLinks.length; $v$2++) {
                var $v$3 = $p$0.$M.WorkloadLinks[$v$2];
                var $v$4 = new O365Shell15_Navigation.$d();
                $v$4.set_$n($v$3.Id);
                $v$4.set_$m('O365_MainLink_' + $v$3.Id);
                $v$4.set_$4L($v$3.TargetWindow);
                $v$4.set_$21($v$3.Text);
                $v$4.set_$5C($v$3.Url);
                $v$4.set_$r($v$3.Id === $p$0.$M.CurrentMainLinkElementID);
                $8e($p$0, $v$4, null);
                $v$1.$3p($v$4);
            }
            $v$0.set_$F1($v$1);
        }
        else {
            $v$0.set_$F1(null);
        }
        if (!$5($p$0.$M.AppsLinks)) {
            var $v$5 = [];
            $50($p$0, $v$5, $p$0.$M.AppsLinks);
            var $v$6 = new O365Shell15_Navigation.$1O();
            $v$6.set_$n('Apps');
            $v$6.set_$m('O365_MainLink_Apps');
            $v$6.set_$21(_u.Strings.l_ShellCore_Affordance_Text);
            $v$6.set_$4w(new _0365m.$W($v$5));
            $51($p$0, $v$6);
            $4z($p$0, $v$6.$29);
            $v$0.set_$E8($v$6);
        }
        else {
            $v$0.set_$E8(null);
        }
        if (!$5($p$0.$M.AdminLink)) {
            var $v$7 = $p$0.$M.AdminLink;
            var $v$8 = new O365Shell15_Navigation.$d();
            $v$8.set_$n($v$7.Id);
            $v$8.set_$m('O365_MainLink_' + $v$7.Id);
            $v$8.set_$21($v$7.Text);
            $v$8.set_$r($v$7.Id === $p$0.$M.CurrentMainLinkElementID);
            if (!$5($v$7.SubLinks)) {
                var $v$9 = [];
                $50($p$0, $v$9, $v$7.SubLinks);
                $v$8.set_$4w(new _0365m.$W($v$9));
                $51($p$0, $v$8);
                $v$8.set_$5C('#');
                $4z($p$0, $v$8.$29);
            }
            else {
                $v$8.set_$4L($v$7.TargetWindow);
                $v$8.set_$5C($v$7.Url);
                $8e($p$0, $v$8, null);
            }
            $v$0.set_$E4($v$8);
        }
        else {
            $v$0.set_$E4(null);
        }
        if (!$5($p$0.$M.PartnerLink)) {
            var $v$A = $p$0.$M.PartnerLink;
            var $v$B = new O365Shell15_Navigation.$d();
            $v$B.set_$n($v$A.Id);
            $v$B.set_$m('O365_MainLink_' + $v$A.Id);
            $v$B.set_$21($v$A.Text);
            $v$B.set_$r($v$A.Id === $p$0.$M.CurrentMainLinkElementID);
            if (!$5($v$A.SubLinks)) {
                var $v$C = [];
                $50($p$0, $v$C, $v$A.SubLinks);
                $v$B.set_$4w(new _0365m.$W($v$C));
                $51($p$0, $v$B);
                $v$B.set_$5C('#');
                $4z($p$0, $v$B.$29);
            }
            else {
                $v$B.set_$4L($v$A.TargetWindow);
                $v$B.set_$5C($v$A.Url);
                $8e($p$0, $v$B, null);
            }
            $v$0.set_$Gb($v$B);
        }
        else {
            $v$0.set_$Gb(null);
        }
        $p$0.set_$BL($v$0);
        $Ni($p$0);
        $Nj($p$0);
        $Nh($p$0);
    }
    else {
        $p$0.set_$BL(null);
    }
}
function $Nf($p$0) {
    var $v$0 = new O365Shell15_Navigation.$1f();
    $v$0.$BN = $p$0.$M.LogoNavigationUrl;
    $v$0.$Lm = true;
    $v$0.$EF = _u.Strings.l_ShellCore_O365_Text;
    $v$0.$Fh = _u.Strings.l_ShellCore_O365_Text;
    if (!$5($p$0.$M.PoweredByText)) {
        var $v$2 = $p$0.$M.PoweredByText.split('{0}');
        if ($v$2.length === 2) {
            $v$0.$Ff = (O365Shell15_Common.$M.$5R.IsRTL) ? $v$2[1] : $v$2[0];
            $v$0.$Gw = (O365Shell15_Common.$M.$5R.IsRTL) ? $v$2[0] : $v$2[1];
        }
    }
    if (!$5($p$0.$M.LogoIconID)) {
        $v$0.$BM = _0365m.$u.$5U($p$0.$M.LogoIconID, 2, 'o365');
    }
    else {
        $v$0.$BM = _0365m.$u.$5U('o365logo', 2, 'o365');
    }
    $p$0.set_$EE($v$0);
    var $v$1 = new O365Shell15_Navigation.$1U();
    if ($p$0.$M.HasTenantBranding && $p$0.$M.TenantLogoUrl && !$p$0.$M.UseSPOBehaviors) {
        $v$1.set_$Fi($p$0.$M.TenantLogoUrl.Url);
    }
    else {
        $v$1.set_$2W(true);
    }
    $p$0.set_$Q0($v$1);
}
function $Ni($p$0) {
    if (!$5($p$0.$M.UserDisplayName)) {
        var $v$0;
        var $v$1 = [];
        if (!$5($p$0.$M.TruncatedUserDisplayName)) {
            $v$0 = $p$0.$M.TruncatedUserDisplayName;
        }
        else {
            $v$0 = $p$0.$M.UserDisplayName;
        }
        $6J($p$0, $v$1, $p$0.$M.AboutMeLink);
        $6J($p$0, $v$1, $p$0.$M.SignOutLink);
        if (!$5($p$0.$M.CurrentWorkloadUserSubLinks) && $p$0.$M.CurrentWorkloadUserSubLinks.length > 0) {
            Array.add($v$1, new _0365m.$1K());
        }
        $50($p$0, $v$1, $p$0.$M.CurrentWorkloadUserSubLinks);
        var $v$2 = new O365Shell15_Navigation.$d();
        $v$2.set_$n('Me');
        $v$2.set_$m('O365_MainLink_Me');
        $v$2.set_$21($v$0);
        $v$2.set_$4w(new _0365m.$W($v$1));
        $51($p$0, $v$2);
        $4z($p$0, $v$2.$29);
        $p$0.set_$Fp($v$2);
    }
    else {
        $p$0.set_$Fp(null);
    }
}
function $Nj($p$0) {
    if (!$5($p$0.$M.CurrentWorkloadSettingsSubLinks) || !$5($p$0.$M.CurrentWorkloadSettingsLink) || !$5($p$0.$M.O365SettingsLink)) {
        var $v$0 = [];
        $50($p$0, $v$0, $p$0.$M.CurrentWorkloadSettingsSubLinks);
        if ($v$0.length > 0) {
            Array.add($v$0, new _0365m.$1K());
        }
        $6J($p$0, $v$0, $p$0.$M.CurrentWorkloadSettingsLink);
        $6J($p$0, $v$0, $p$0.$M.O365SettingsLink);
        var $v$1 = new O365Shell15_Navigation.$12();
        $v$1.set_$n('Settings');
        $v$1.set_$m('O365_MainLink_Settings');
        $v$1.set_$21(_u.Strings.l_ShellCore_Settings_Text);
        $v$1.set_$4w(new _0365m.$W($v$0));
        $51($p$0, $v$1);
        $4z($p$0, $v$1.$29);
        $p$0.set_$H4($v$1);
    }
    else {
        $p$0.set_$H4(null);
    }
}
function $Nh($p$0) {
    if (!$5($p$0.$M.HelpLink)) {
        var $v$0 = [];
        $50($p$0, $v$0, $p$0.$M.CurrentWorkloadHelpSubLinks);
        var $v$1 = new O365Shell15_Navigation.$d();
        $v$1.set_$n('Help');
        $v$1.set_$m('O365_MainLink_Help');
        $v$1.set_$21(_u.Strings.l_ShellCore_Help_Text);
        $v$1.set_$5C('#');
        if ($v$0.length > 0) {
            $v$1.set_$4w(new _0365m.$W($v$0));
            $51($p$0, $v$1);
            $4z($p$0, $v$1.$29);
        }
        else {
            var $v$2;
            var $v$3 = 'javascript:';
            if (!$p$0.$M.HelpLink.Url.toLowerCase().startsWith($v$3)) {
                var $$t_4 = this;
                $v$2 = function() {
                    window.open($p$0.$M.HelpLink.Url, $p$0.$M.HelpLink.TargetWindow, 'width=400,height=500,menubar=no,status=no,scrollbars=no,titlebar=no,toolbar=no,resizable=yes');
                };
            }
            else {
                var $$t_5 = this;
                $v$2 = function() {
                    new Function($p$0.$M.HelpLink.Url.substr($v$3.length)).call($p$0);
                };
            }
            $8e($p$0, $v$1, $v$2);
        }
        $p$0.set_$F2($v$1);
    }
    else {
        $p$0.set_$F2(null);
    }
}
function $8e($p$0, $p$1, $p$2) {
    if (!$5($p$1.$32)) {
        var $$t_3 = this;
        $p$1.set_$JR(new _C(function() {
            var $v$0 = new O365Shell15_Navigation.$1o();
            $v$0.Id = $p$1.$d;
            $v$0.Url = $p$1.$32;
            $DM($p$0, 'LinkClick', $v$0);
            $p$1.set_$C4($v$0.Cancel);
            if (!$v$0.Cancel && $p$2) {
                $p$2();
            }
        }, _0365f.$6.$6c));
    }
}
function $51($p$0, $p$1) {
    var $$t_1 = this;
    $p$1.set_$MD(new _C(function() {
        if (!$5($p$1.$29)) {
            $p$1.$29.set_$O(true);
        }
    }, _0365f.$6.$6c));
}
function $6J($p$0, $p$1, $p$2) {
    if (!$5($p$2)) {
        var $v$0 = null;
        if (!$5($p$2.Url)) {
            var $$t_6 = this;
            $v$0 = new _0365f.$17(function($p$1_0) {
                var $v$2 = new O365Shell15_Navigation.$1o();
                $v$2.Id = $p$2.Id;
                $v$2.Url = $p$2.Url;
                $DM($p$0, 'LinkClick', $v$2);
                if ($v$2.Cancel) {
                    $p$1_0.$1P();
                }
            }, _0365f.$6.$6c);
        }
        var $v$1 = new _0365m.$1b($p$2.Text, null, $v$0, $p$2.Url, $p$2.TargetWindow);
        Array.add($p$1, $v$1);
    }
}
function $50($p$0, $p$1, $p$2) {
    if (!$5($p$2)) {
        for (var $v$0 = 0; $v$0 < $p$2.length; $v$0++) {
            var $v$1 = $p$2[$v$0];
            if ($v$1) {
                $6J($p$0, $p$1, $v$1);
            }
            else {
                Array.add($p$1, new _0365m.$1K());
            }
        }
    }
}
function $4z($p$0, $p$1) {
    if ($p$1) {
        $p$1.set_$Jr('o365cs-contextMenu');
        $p$1.set_$Jl('o365cs-contextMenuItem');
        $p$1.set_$Ju('o365cs-contextMenuItemHover');
        $p$1.set_$Jp('o365cs-contextMenuInactiveItem');
        $p$1.set_$Jv('o365cs-nav-headerContextMenu o365cs-spo-menuSeparator');
    }
}
O365Shell15_Navigation.$C.prototype = {
    $M: null,
    $37: null,
    $58: null,
    $3J: null,
    $8N: null,
    $8z: null,
    $7s: null,
    
    add_$M9: function O365Shell15_Navigation_$C$add_$M9($p$0) {
        this.$Ik('LinkClick', $p$0);
    },
    remove_$M9: function O365Shell15_Navigation_$C$remove_$M9($p$0) {
        this.$PJ('LinkClick', $p$0);
    },
    
    get_$JA: function O365Shell15_Navigation_$C$get_$JA() {
        return this.$M;
    },
    set_$JA: function O365Shell15_Navigation_$C$set_$JA($p$0) {
        if ($p$0 !== this.$M) {
            this.$M = $p$0;
            $Ng(this);
            $4(this, 'BposNavBarData');
        }
        return $p$0;
    },
    
    get_$EE: function O365Shell15_Navigation_$C$get_$EE() {
        return this.$37;
    },
    set_$EE: function O365Shell15_Navigation_$C$set_$EE($p$0) {
        if ($p$0 !== this.$37) {
            this.$37 = $p$0;
            $4(this, 'BrandingData');
        }
        return $p$0;
    },
    
    get_$Q0: function O365Shell15_Navigation_$C$get_$Q0() {
        return this.$58;
    },
    set_$Q0: function O365Shell15_Navigation_$C$set_$Q0($p$0) {
        if ($p$0) {
            this.$58 = $p$0;
            $4(this, 'TenantBrandingViewModel');
        }
        return $p$0;
    },
    
    get_$BL: function O365Shell15_Navigation_$C$get_$BL() {
        return this.$3J;
    },
    set_$BL: function O365Shell15_Navigation_$C$set_$BL($p$0) {
        if ($p$0 !== this.$3J) {
            this.$3J = $p$0;
            $4(this, 'LinksViewModel');
        }
        return $p$0;
    },
    
    get_$Fp: function O365Shell15_Navigation_$C$get_$Fp() {
        return this.$8N;
    },
    set_$Fp: function O365Shell15_Navigation_$C$set_$Fp($p$0) {
        if ($p$0 !== this.$8N) {
            this.$8N = $p$0;
            $4(this, 'MeTileViewModel');
        }
        return $p$0;
    },
    
    get_$H4: function O365Shell15_Navigation_$C$get_$H4() {
        return this.$8z;
    },
    set_$H4: function O365Shell15_Navigation_$C$set_$H4($p$0) {
        if ($p$0 !== this.$8z) {
            this.$8z = $p$0;
            $4(this, 'SettingsViewModel');
        }
        return $p$0;
    },
    
    get_$F2: function O365Shell15_Navigation_$C$get_$F2() {
        return this.$7s;
    },
    set_$F2: function O365Shell15_Navigation_$C$set_$F2($p$0) {
        if ($p$0 !== this.$7s) {
            this.$7s = $p$0;
            $4(this, 'HelpViewModel');
        }
        return $p$0;
    }
}


_o365s15.$19 = function _o365s15_$19($p$0) {
    _o365s15.$19.initializeBase(this, [ $p$0 ]);
    this.set_$D('SharedHeaderMouseView');
}
function $Dv($p$0) {
    var $v$0 = '.o365cs-nav-header .o365cs-p-c,.o365cs-nav-header .o365cs-p-ch:hover{color:Primary;}.o365cs-nav-header .o365cs-nav-leftAlign,.o365cs-nav-header .o365cs-nav-headerRegion,.o365cs-nav-header .o365cs-p-bg,.o365cs-nav-header .o365cs-p-bgh:hover{background-color:Primary;}.o365cs-nav-header .o365cs-p-b,.o365cs-nav-header .o365cs-p-bh:hover{border-color:Primary;}.o365cs-nav-header .o365cs-s-c,.o365cs-nav-header .o365cs-s-ch:hover{color:Secondary;}.o365cs-nav-header .o365cs-s-bg,.o365cs-nav-header .o365cs-s-bgh:hover{background-color:Secondary;}.o365cs-nav-header .o365cs-s-b,.o365cs-nav-header .o365cs-s-bh:hover{border-color:Secondary;}.o365cs-nav-header .o365cs-t-c,.o365cs-nav-header .o365cs-t-ch:hover{color:Tertiary;}.o365cs-nav-header .o365cs-t-bg,.o365cs-nav-header .o365cs-t-bgh:hover{background-color:Tertiary;}.o365cs-nav-header .o365cs-t-b,.o365cs-nav-header .o365cs-t-bh:hover{border-color:Tertiary;}.o365cs-nav-headerContextMenu .o365cs-contextMenuItemHover{background-color:Light;}.o365cs-nav-header .o365cs-topnavLink,.o365cs-nav-header .o365cs-spo-topnavLink{color:TopnavLink}';
    var $v$1 = '.o365cs-nav-headerContextMenu .o365cs-contextMenuItem{color:Primary;}.o365cs-nav-headerContextMenu .o365cs-contextMenuInactiveItem{color:Tertiary;}.o365cs-nav-header .o365cs-spo-topbar{background-color:TBBackground;color:TBText;}.o365cs-nav-header .o365cs-spo-topbar button{color:TBText;}.o365cs-nav-header .o365cs-nav-topbarLinkNoMenu:hover{color:TBHoverText;}.o365cs-nav-header button.o365cs-spo-topbarMenuOpen,.o365cs-nav-header button.o365cs-spo-topbarHover,.o365cs-nav-header a.o365cs-spo-topbarMenuOpen,.o365cs-nav-header a.o365cs-spo-topbarHover{background-color:CMBackground;color:CMText;border-color:CMBorder;}.o365cs-nav-headerContextMenu .o365cs-contextMenu{background-color:CMBackground;}.o365cs-nav-headerContextMenu .o365cs-contextMenuItem{color:CMText;}.o365cs-nav-headerContextMenu{border-color:CMBorder;}';
    var $v$2 = '.o365cs-nav-header .o365cs-spo-menuSeparator{color:MenuSeparator;}';
    if (!$5($p$0.$U) && !$5($p$0.$U.ThemeColors)) {
        var $v$3 = false;
        if (!$p$0.$3c) {
            $p$0.$3c = document.createElement('style');
            $p$0.$3c.setAttribute('type', 'text/css');
            $v$3 = true;
        }
        var $v$4 = '';
        if ($p$0.$U.ThemeColors.length === 5) {
            $v$4 = $v$0.replace(new RegExp('Primary', 'g'), $p$0.$U.ThemeColors[0]).replace(new RegExp('Secondary', 'g'), $p$0.$U.ThemeColors[1]).replace(new RegExp('Tertiary', 'g'), $p$0.$U.ThemeColors[2]).replace(new RegExp('Light', 'g'), $p$0.$U.ThemeColors[3]).replace(new RegExp('TopnavLink', 'g'), $p$0.$U.ThemeColors[4]);
        }
        else if ($p$0.$U.ThemeColors.length >= 11) {
            $v$4 = ($v$0 + $v$1).replace(new RegExp('Primary', 'g'), $p$0.$U.ThemeColors[0]).replace(new RegExp('Secondary', 'g'), $p$0.$U.ThemeColors[1]).replace(new RegExp('Tertiary', 'g'), $p$0.$U.ThemeColors[2]).replace(new RegExp('Light', 'g'), $p$0.$U.ThemeColors[3]).replace(new RegExp('TBBackground', 'g'), $p$0.$U.ThemeColors[4]).replace(new RegExp('TBText', 'g'), $p$0.$U.ThemeColors[5]).replace(new RegExp('TBHoverText', 'g'), $p$0.$U.ThemeColors[6]).replace(new RegExp('CMText', 'g'), $p$0.$U.ThemeColors[7]).replace(new RegExp('CMBackground', 'g'), $p$0.$U.ThemeColors[8]).replace(new RegExp('CMBorder', 'g'), $p$0.$U.ThemeColors[9]).replace(new RegExp('TopnavLink', 'g'), $p$0.$U.ThemeColors[10]);
            if ($p$0.$U.ThemeColors.length >= 12) {
                $v$4 += $v$2.replace(new RegExp('MenuSeparator', 'g'), $p$0.$U.ThemeColors[11]);
            }
        }
        if ($p$0.$3c.styleSheet && $p$0.$3c.styleSheet.cssText!=null) {
            $p$0.$3c.styleSheet.cssText = $v$4;
        }
        else {
            $p$0.$3c.appendChild(document.createTextNode($v$4));
        }
        if ($v$3) {
            document.getElementsByTagName('head')[0].appendChild($p$0.$3c);
        }
    }
}
_o365s15.$19.prototype = {
    $U: null,
    $37: null,
    $98: null,
    $3J: null,
    $JC: null,
    $JB: null,
    $Nc: null,
    $Nb: null,
    $8M: null,
    $8L: null,
    $8y: null,
    $8x: null,
    $7r: null,
    $7q: null,
    $KK: null,
    $KJ: null,
    $LM: null,
    $PS: null,
    $3c: null,
    
    get_$CT: function _o365s15_$19$get_$CT() {
        return this.$U;
    },
    set_$CT: function _o365s15_$19$set_$CT($p$0) {
        if ($p$0 !== this.$U) {
            O365Shell15_Common.$M.set_$CT($p$0);
            this.$U = $p$0;
            $Dv(this);
            $6k(this, 'ShellData', 'IsAuthenticated');
        }
        return $p$0;
    },
    
    get_$Ll: function _o365s15_$19$get_$Ll() {
        return (this.$U) ? this.$U.IsAuthenticated : false;
    },
    
    get_$EE: function _o365s15_$19$get_$EE() {
        return this.$37;
    },
    set_$EE: function _o365s15_$19$set_$EE($p$0) {
        if ($p$0 !== this.$37) {
            this.$37 = $p$0;
            $4(this, 'BrandingData');
        }
        return $p$0;
    },
    
    get_$Pz: function _o365s15_$19$get_$Pz() {
        return this.$98;
    },
    set_$Pz: function _o365s15_$19$set_$Pz($p$0) {
        if ($p$0 !== this.$98) {
            this.$98 = $p$0;
            $4(this, 'TenantBrandingData');
        }
        return $p$0;
    },
    
    get_$BL: function _o365s15_$19$get_$BL() {
        return this.$3J;
    },
    set_$BL: function _o365s15_$19$set_$BL($p$0) {
        if ($p$0 !== this.$3J) {
            this.$3J = $p$0;
            $4(this, 'LinksViewModel');
        }
        return $p$0;
    },
    
    get_$MG: function _o365s15_$19$get_$MG() {
        return this.$8M;
    },
    set_$MG: function _o365s15_$19$set_$MG($p$0) {
        if ($p$0 !== this.$8M) {
            this.$8M = $p$0;
            $4(this, 'MeTileTemplateId');
        }
        return $p$0;
    },
    
    get_$MF: function _o365s15_$19$get_$MF() {
        return this.$8L;
    },
    set_$MF: function _o365s15_$19$set_$MF($p$0) {
        if ($p$0 !== this.$8L) {
            this.$8L = $p$0;
            $4(this, 'MeTileDataContext');
        }
        return $p$0;
    },
    
    get_$Pf: function _o365s15_$19$get_$Pf() {
        return this.$8y;
    },
    set_$Pf: function _o365s15_$19$set_$Pf($p$0) {
        if ($p$0 !== this.$8y) {
            this.$8y = $p$0;
            $4(this, 'SettingsTemplateId');
        }
        return $p$0;
    },
    
    get_$Pe: function _o365s15_$19$get_$Pe() {
        return this.$8x;
    },
    set_$Pe: function _o365s15_$19$set_$Pe($p$0) {
        if ($p$0 !== this.$8x) {
            this.$8x = $p$0;
            $4(this, 'SettingsDataContext');
        }
        return $p$0;
    },
    
    get_$LO: function _o365s15_$19$get_$LO() {
        return this.$7r;
    },
    set_$LO: function _o365s15_$19$set_$LO($p$0) {
        if ($p$0 !== this.$7r) {
            this.$7r = $p$0;
            $4(this, 'HelpTemplateId');
        }
        return $p$0;
    },
    
    get_$LN: function _o365s15_$19$get_$LN() {
        return this.$7q;
    },
    set_$LN: function _o365s15_$19$set_$LN($p$0) {
        if ($p$0 !== this.$7q) {
            this.$7q = $p$0;
            $4(this, 'HelpDataContext');
        }
        return $p$0;
    },
    
    $2r: function _o365s15_$19$$2r() {
        $Dv(this);
        _js.$9.prototype.$2r.call(this);
    }
}


Type.registerNamespace('O365Shell15_Shim');

_o365s15.$2X = function() {}
_o365s15.$2X.registerInterface('_o365s15.$2X');


Type.registerNamespace('O365Shell_Shim');

O365Shell15_Shim.$1W = function O365Shell15_Shim_$1W() {
    this.$$d_$OP = Function.createDelegate(this, this.$OP);
    this.$$d_$Nu = Function.createDelegate(this, this.$Nu);
    this.$$d_$Oh = Function.createDelegate(this, this.$Oh);
    this.$$d_$O3 = Function.createDelegate(this, this.$O3);
    this.$7K = O365Shell15_Shim.$f.$A8('ContextMenuPopup');
    this.$Cr = O365Shell15_Shim.$f.$A8('WindowUnload');
    var $v$0 = _o365b.$p.$J9(O365Shell15_Common.$M.$5R.IsRTL);
    var $v$1 = $v$0.$QJ(_0365f.$U).$Qc();
    $v$1.$Qd(this.$$d_$O3);
    $Nk(this, 'unload', this.$$d_$Oh);
}
function $Nk($p$0, $p$1, $p$2) {
    if (window.self.addEventListener) {
        window.addEventListener($p$1, $p$2, false);
    }
    else {
        window.attachEvent('on' + $p$1, $p$2);
    }
}
O365Shell15_Shim.$1W.prototype = {
    $7K: null,
    $Cr: null,
    $8m: null,
    
    FlushTaskRunnerQueue: function O365Shell15_Shim_$1W$FlushTaskRunnerQueue() {
        _js.$2.get_$a().$KR();
    },
    
    OnContextMenuPopup: function O365Shell15_Shim_$1W$OnContextMenuPopup($p$0) {
        return this.$7K.$Ca($p$0);
    },
    
    $Oe: function O365Shell15_Shim_$1W$$Oe($p$0) {
        this.$Cr.$Ca($p$0);
    },
    
    RemoveOnContextMenuPopup: function O365Shell15_Shim_$1W$RemoveOnContextMenuPopup($p$0) {
        this.$7K.$HM($p$0);
    },
    
    $O3: function O365Shell15_Shim_$1W$$O3($p$0) {
        $p$0.$Ca(_o365c.$x, this.$$d_$Nu);
        $p$0.$Ca(_o365c.$1H, this.$$d_$OP);
    },
    
    $Nu: function O365Shell15_Shim_$1W$$Nu($p$0) {
        this.$7K.$K($p$0.$1o);
    },
    
    $OP: function O365Shell15_Shim_$1W$$OP($p$0) {
        var $v$0 = $p$0.$4G;
        if ($p$0.$F7) {
            if ($v$0.$6a) {
                this.$8m = $p$0.$Dy;
            }
        }
        else {
            if ($v$0.$6a && (!$v$0.$Gu || $v$0.$5m)) {
                if (!$5(this.$8m)) {
                    this.$8m.focus();
                }
            }
            this.$8m = null;
        }
    },
    
    $Oh: function O365Shell15_Shim_$1W$$Oh() {
        this.FlushTaskRunnerQueue();
        this.$Cr.$K(null);
    }
}


O365Shell15_Shim.$f = function O365Shell15_Shim_$f() {
}
O365Shell15_Shim.$f.$A8 = function O365Shell15_Shim_$f$$A8($p$0) {
    var $v$0 = null;
    if ($5(O365Shell15_Shim.$f.$2u[$p$0])) {
        $v$0 = new O365Shell15_Shim.$f.$Ph($p$0);
        O365Shell15_Shim.$f.$2u[$p$0] = $v$0;
    }
    else {
        $v$0 = O365Shell15_Shim.$f.$2u[$p$0];
    }
    return $v$0;
}


O365Shell15_Shim.$f.$Ph = function O365Shell15_Shim_$f_$Ph($p$0) {
    this.$2u = {};
    this.$Eg = $p$0;
}
O365Shell15_Shim.$f.$Ph.prototype = {
    $Bo: 0,
    $Eg: null,
    
    $Ca: function O365Shell15_Shim_$f_$Ph$$Ca($p$0) {
        this.$2u[this.$Bo.toString()] = $p$0;
        return ++this.$Bo - 1;
    },
    
    $HM: function O365Shell15_Shim_$f_$Ph$$HM($p$0) {
        this.$2u[$p$0.toString()] = null;
    },
    
    $K: function O365Shell15_Shim_$f_$Ph$$K($p$0) {
        var $v$0 = new Array(0);
        for (var $v$1 = 0; $v$1 < this.$Bo; $v$1++) {
            if (!$5(this.$2u[$v$1.toString()])) {
                var $v$2 = this.$2u[$v$1.toString()];
                try {
                    $v$2($p$0);
                }
                catch ($v$3) {
                    Array.add($v$0, $v$3);
                }
            }
        }
        if ($v$0.length > 0) {
            throw Error.invalidOperation(this.$Eg);
        }
    }
}


O365Shell_Shim.$2K = function O365Shell_Shim_$2K($p$0) {
    this.$$d_$Og = Function.createDelegate(this, this.$Og);
    this.$6b = $p$0;
    this.$6b.add_$M9(this.$$d_$Og);
    this.$8H = O365Shell15_Shim.$f.$A8('LinkClick');
}
O365Shell_Shim.$2K.prototype = {
    $6b: null,
    $8H: null,
    
    OnLinkClick: function O365Shell_Shim_$2K$OnLinkClick($p$0) {
        return this.$8H.$Ca($p$0);
    },
    
    RemoveOnLinkClick: function O365Shell_Shim_$2K$RemoveOnLinkClick($p$0) {
        this.$8H.$HM($p$0);
    },
    
    $Og: function O365Shell_Shim_$2K$$Og($p$0) {
        this.$8H.$K($p$0);
    }
}


function O365Shell() {
}
O365Shell.SetData = function O365Shell$SetData(shellData) {
    O365Shell15_Common.$M.set_$CT(shellData);
    if (shellData && !$5(shellData.StringsOverride)) {
        var $$dict_1 = shellData.StringsOverride;
        for (var $$key_2 in $$dict_1) {
            var $v$0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            _u.Strings[$v$0.key] = $v$0.value;
        }
    }
}
O365Shell.Render = function O365Shell$Render(renderSettings, callback) {
    _js.$8.$Ci(renderSettings, 'renderSettings');
    O365Shell.Host = new O365Shell15_Shim.$1W();
    O365Shell15_Common.$M.$Gt = renderSettings;
    O365Shell15_Common.$M.$H5 = callback;
    if ($5(renderSettings.layout) || (renderSettings.layout !== 'Tnarrow' && renderSettings.layout !== 'Twide')) {
        renderSettings.layout = 'Mouse';
    }
    if (renderSettings.layout === 'Mouse') {
        var $v$0 = new O365Shell15_Navigation.$C(O365Shell15_Common.$M.$U);
        O365Shell.Navigation = new O365Shell_Shim.$2K($v$0);
        if (!$5(renderSettings.top)) {
            var $v$1 = renderSettings.top;
            var $v$2 = $get($v$1);
            $v$2.innerHTML = '';
            var $v$3 = new _o365s15.$19($v$2);
            $v$3.set_$D('SharedHeaderMouseView');
            $v$3.set_$CT($v$0.$M);
            $v$3.set_$EE($v$0.$37);
            $v$3.set_$Pz($v$0.$58);
            $v$3.set_$BL($v$0.$3J);
            $v$3.set_$MG('SharedHeaderMouseView.HeaderMeTileLinkMenu');
            $v$3.set_$MF($v$0.$8N);
            $v$3.set_$Pf('SharedHeaderMouseView.HeaderSettingsLinkMenu');
            $v$3.set_$Pe($v$0.$8z);
            $v$3.set_$LO('SharedHeaderMouseView.HeaderHelpLinkMenu');
            $v$3.set_$LN($v$0.$7s);
            $v$3.$z();
            O365Shell.Host.$Oe(function() {
                $v$3.$1T();
            });
        }
    }
    else {
        throw Error.notImplemented();
    }
    if (!$5(callback)) {
        callback();
    }
}
O365Shell.SetTenantBrandingProperties = function O365Shell$SetTenantBrandingProperties(isVisible, logoUrl, logoNavigationUrl) {
    if (!$5(logoUrl)) {
        O365Shell.Navigation.$6b.$58.set_$Fi(logoUrl);
    }
    if (!$5(logoNavigationUrl)) {
        O365Shell.Navigation.$6b.$58.$BN = logoNavigationUrl;
    }
    if (!$5(isVisible)) {
        O365Shell.Navigation.$6b.$58.set_$2W(!isVisible);
    }
}


_o365s15._TI = function _o365s15__TI() {
}
_o365s15._TI.$$cctor = function _o365s15__TI$$$cctor() {
    new _A('SharedHeaderMouseView._tid1._tid2', function() {
        var $v$0 = _o365s15._TI._hf.childNodes[0].cloneNode(true);
        var $v$1 = new _o365c.$1m($v$0.children[0]);
        $v$1.$2(_E.$0([ 'LogoUrl' ], [ _o365s15._TI.$N5 ], null, 'Source', null, _o365s15._TI.$Fy, 1)).$2(_E.$0([ 'LogoAltText' ], [ _o365s15._TI.$8c ], null, 'Title', null, _o365s15._TI.$4A, 1));
        return new _B($v$0, [ $v$1 ]);
    }, O365Shell15_Navigation.$1U, _js.$9, false, true, false, 0);
    new _A('SharedHeaderMouseView._tid1', function() {
        var $v$2 = _o365s15._TI._hf.childNodes[1].cloneNode(true);
        var $v$3 = new _js.$9($v$2.children[0]);
        $v$3.$2(_E.$0([ 'LogoAltText' ], [ _o365s15._TI.$8c ], null, 'Title', null, _o365s15._TI.$4A, 1));
        $v$3.set_$7('o365cs-nav-tenantLogo');
        $v$3.set_$m('O365_MainLink_TenantLogo');
        $v$3.set_$D('SharedHeaderMouseView._tid1._tid2');
        return new _B($v$2, [ $v$3 ]);
    }, O365Shell15_Navigation.$1U, _js.$9, false, true, false, 0);
    new _A('SharedHeaderMouseView._tid3._tid4', function() {
        var $v$4 = _o365s15._TI._hf.childNodes[2].cloneNode(true);
        var $v$5 = new _o365c.$2F($v$4.children[0]);
        $v$5.$2(_E.$0([ 'LogoIconImageID' ], [ _o365s15._TI.$Bg ], null, 'Id', null, _o365s15._TI.$2X, 1));
        return new _B($v$4, [ $v$5 ]);
    }, O365Shell15_Navigation.$1f, _o365c.$e, false, true, false, 0);
    new _A('SharedHeaderMouseView._tid3', function() {
        var $v$6 = _o365s15._TI._hf.childNodes[3].cloneNode(true);
        var $v$7 = new _o365c.$R($v$6.children[3]);
        $v$7.$2(_E.$0([ 'BrandingLabelText' ], [ _o365s15._TI.$N3 ], null, 'Text', null, _o365s15._TI.$1G, 1)).$2(_E.$0([ 'LogoIconImageID' ], [ _o365s15._TI.$Bg ], null, 'IsHidden', null, _o365s15._TI.$N, 1, new _js.$11([ _o365s15._TI.$g, _o365s15._TI.$W ], [ null, null ]), null, true));
        $v$7.set_$7('o365cs-nav-brandingLabel');
        var $v$8 = new _o365c.$R($v$6.children[2]);
        $v$8.$2(_E.$0([ 'RightText' ], [ _o365s15._TI.$NB ], null, 'Text', null, _o365s15._TI.$1G, 1)).$6(_E.$0([ 'TemplatedParent', 'TenantBrandingData', 'IsHidden' ], [ _o365s15._TI.$1N, _o365s15._TI.$Bi, _o365s15._TI.$Bd ], null, 'IsHidden', null, _o365s15._TI.$N, 1, null, null, true));
        $v$8.set_$7('o365cs-nav-brandingRightText');
        var $v$9 = new _o365c.$e($v$6.children[1]);
        $v$9.$2(_E.$0([ 'LogoIconImageID' ], [ _o365s15._TI.$Bg ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true)).$2(_E.$0([ 'LogoNavigationUrl' ], [ _o365s15._TI.$N4 ], null, 'Href', null, _o365s15._TI.$4x, 1)).$2(_E.$0([ 'LogoAltText' ], [ _o365s15._TI.$8c ], null, 'Title', null, _o365s15._TI.$4A, 1)).$2(_E.$0([ 'LogoAltText' ], [ _o365s15._TI.$8c ], null, 'AriaLabel', null, _o365s15._TI.$49, 1));
        $v$9.set_$7('o365cs-nav-bposLogo');
        $v$9.set_$m('O365_MainLink_Logo');
        $v$9.set_$D('SharedHeaderMouseView._tid3._tid4');
        var $v$A = new _o365c.$R($v$6.children[0]);
        $v$A.$2(_E.$0([ 'LeftText' ], [ _o365s15._TI.$NA ], null, 'Text', null, _o365s15._TI.$1G, 1)).$6(_E.$0([ 'TemplatedParent', 'TenantBrandingData', 'IsHidden' ], [ _o365s15._TI.$1N, _o365s15._TI.$Bi, _o365s15._TI.$Bd ], null, 'IsHidden', null, _o365s15._TI.$N, 1, null, null, true));
        $v$A.set_$7('o365cs-nav-brandingLeftText');
        return new _B($v$6, [ $v$A, $v$9, $v$8, $v$7 ]);
    }, O365Shell15_Navigation.$1f, _js.$9, false, true, false, 0);
    new _A('SharedHeaderMouseView._tid5', function() {
        var $v$B = _o365s15._TI._hf.childNodes[4].cloneNode(true);
        var $v$C = new _js.$9($v$B.children[1]);
        $v$C.$6(_E.$0([ 'TemplatedParent', 'LinksViewModel' ], [ _o365s15._TI.$1N, _o365s15._TI.$NJ ], null, 'DataContext', null, _o365s15._TI.$1H, 1));
        $v$C.set_$7('o365cs-nav-O365LinksContainer');
        $v$C.set_$D('SharedHeaderMouseView.BposHeaderLinks');
        $v$C.set_$4k(true);
        var $v$D = new _js.$9($v$B.children[0]);
        $v$D.$6(_E.$0([ 'TemplatedParent', 'NotificationsDataContext' ], [ _o365s15._TI.$1N, _o365s15._TI.$NL ], null, 'DataContext', null, _o365s15._TI.$1H, 1)).$6(_E.$0([ 'TemplatedParent', 'NotificationsTemplateId' ], [ _o365s15._TI.$1N, _o365s15._TI.$G3 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true)).$6(_E.$0([ 'TemplatedParent', 'NotificationsTemplateId' ], [ _o365s15._TI.$1N, _o365s15._TI.$G3 ], null, 'TemplateId', null, _o365s15._TI.$1i, 1));
        $v$D.set_$7('o365cs-nav-notifications');
        $v$D.set_$4k(true);
        return new _B($v$B, [ $v$D, $v$C ]);
    }, Object, _js.$9, false, true, false, 0);
    new _A('SharedHeaderMouseView.BposHeaderLinks._tid6', function() {
        var $v$E = _o365s15._TI._hf.childNodes[1].cloneNode(true);
        var $v$F = new _o365c.$L($v$E.children[0], (_js.$A.Instance).$QK(_o365c.$c));
        return new _B($v$E, [ $v$F ]).R({ ListPanel: $v$F });
    }, O365Shell15_Navigation.$1c, _o365c.$1, false, true, false, 0);
    new _A('SharedHeaderMouseView.BposHeaderLinks', function() {
        var $v$G = _o365s15._TI._hf.childNodes[5].cloneNode(true);
        var $v$H = new _js.$9($v$G.children[3]);
        $v$H.$2(_E.$0([ 'PartnerMenuViewModel' ], [ _o365s15._TI.$N9 ], null, 'DataContext', null, _o365s15._TI.$1H, 1));
        $v$H.set_$7('o365cs-nav-O365Links');
        $v$H.set_$D('SharedHeaderMouseView.HeaderPartnerLinkMenu');
        var $v$I = new _js.$9($v$G.children[2]);
        $v$I.$2(_E.$0([ 'AdminMenuViewModel' ], [ _o365s15._TI.$N6 ], null, 'DataContext', null, _o365s15._TI.$1H, 1));
        $v$I.set_$7('o365cs-nav-O365Links');
        $v$I.set_$D('SharedHeaderMouseView.HeaderAdminMenu');
        var $v$J = new _js.$9($v$G.children[1]);
        $v$J.$2(_E.$0([ 'AppsMenuViewModel' ], [ _o365s15._TI.$N7 ], null, 'DataContext', null, _o365s15._TI.$1H, 1));
        $v$J.set_$7('o365cs-nav-appsContainer');
        $v$J.set_$D('SharedHeaderMouseView.HeaderAppsMenu');
        var $v$K = new _o365c.$1($v$G.children[0], (_js.$A.Instance).$QK(_0365f.$X));
        $v$K.$2(_E.$0([ 'HeaderMenus' ], [ _o365s15._TI.$N8 ], null, 'DataSource', null, _o365s15._TI.$6B, 1));
        $v$K.set_$7('o365cs-nav-O365Links');
        $v$K.set_$EW('SharedHeaderMouseView.WorkloadLink');
        $v$K.set_$4r('div');
        $v$K.set_$4q('o365cs-nav-O365LinksItem');
        $v$K.set_$D('SharedHeaderMouseView.BposHeaderLinks._tid6');
        return new _B($v$G, [ $v$K, $v$J, $v$I, $v$H ]);
    }, O365Shell15_Navigation.$1c, _js.$9, false, false, false, 0);
    new _A('SharedHeaderMouseView.WorkloadLink', function() {
        var $v$L = _o365s15._TI._hf.childNodes[6].cloneNode(true);
        var $v$M = new _js.$9($v$L.children[1]);
        $v$M.$6(_E.$0([ 'DataContext' ], [ _o365s15._TI.$48 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$BT, O365Shell15_Navigation.$d, true));
        $v$M.set_$D('SharedHeaderMouseView.HeaderButtonMenu');
        var $v$N = new _js.$9($v$L.children[0]);
        $v$N.$6(_E.$0([ 'DataContext' ], [ _o365s15._TI.$48 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, new _js.$11([ _o365s15._TI.$BT, _o365s15._TI.$W ], [ O365Shell15_Navigation.$d, null ]), null, true));
        $v$N.set_$D('SharedHeaderMouseView.HeaderLinkMenu');
        return new _B($v$L, [ $v$N, $v$M ]);
    }, O365Shell15_Navigation.$1O, _o365c.$v, false, false, false, 0);
    new _A('SharedHeaderMouseView.HeaderLinkMenu._tid7', function() {
        var $v$O = _o365s15._TI._hf.childNodes[7].cloneNode(true);
        var $v$P = new _js.$9($v$O.children[1]);
        $v$P.$2(_E.$0([ 'IsSelected' ], [ _o365s15._TI.$8d ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$W, null, true));
        $v$P.set_$7('o365cs-activeLinkIndicator o365cs-nw-b');
        var $v$Q = new _o365c.$R($v$O.children[0]);
        $v$Q.$6(_E.$0([ 'Text' ], [ _o365s15._TI.$2q ], null, 'Text', null, _o365s15._TI.$1G, 1)).$6(_E.$0([ 'Text' ], [ _o365s15._TI.$2q ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$3N, null, true));
        return new _B($v$O, [ $v$Q, $v$P ]).R({ Label: $v$Q });
    }, O365Shell15_Navigation.$d, _o365c.$e, false, true, false, 0);
    new _A('SharedHeaderMouseView.HeaderLinkMenu', function() {
        var $v$R = _o365s15._TI._hf.childNodes[8].cloneNode(true);
        var $v$S = new _o365c.$e($v$R.children[0]);
        $v$S.$2(_E.$0([ 'Command' ], [ _o365s15._TI.$6E ], null, 'ClickCommand', null, _o365s15._TI.$2A, 1)).$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'Text', null, _o365s15._TI.$66, 1)).$2(_E.$0([ 'Url' ], [ _o365s15._TI.$6F ], null, 'Href', null, _o365s15._TI.$4x, 1)).$2(_E.$0([ 'TargetWindow' ], [ _o365s15._TI.$Bf ], null, 'TargetWindow', null, _o365s15._TI.$BV, 1)).$2(_E.$0([ 'PreventNavigation' ], [ _o365s15._TI.$Be ], null, 'PreventNavigation', null, _o365s15._TI.$BU, 1, null, null, false)).$2(_E.$0([ 'AriaId' ], [ _o365s15._TI.$3R ], null, 'AriaId', null, _o365s15._TI.$3O, 1)).$6(_E.$0([ 'DataContext' ], [ _o365s15._TI.$48 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true));
        $v$S.$G(new _js.$F('o365cs-s-bg', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-topnavLink', [ 'Url' ], [ _o365s15._TI.$6F ], new _js.$11([ _o365s15._TI.$3N, _o365s15._TI.$W ], [ null, null ]), null, 0)).$G(new _js.$F('o365cs-spo-topnavLink', [ 'Url' ], [ _o365s15._TI.$6F ], new _js.$11([ _o365s15._TI.$3N, _o365s15._TI.$W ], [ null, null ]), null, 0));
        $v$S.set_$7('o365cs-nav-navItem  o365cs-nav-workloadLink');
        $v$S.set_$4m('o365cs-s-bg');
        $v$S.set_$2j('o365cs-nav-itemDisabled o365cs-t-c');
        $v$S.set_$1k(10);
        $v$S.set_$D('SharedHeaderMouseView.HeaderLinkMenu._tid7');
        return new _B($v$R, [ $v$S ]);
    }, O365Shell15_Navigation.$d, _js.$9, false, false, false, 0);
    new _A('SharedHeaderMouseView.HeaderButtonMenu._tid8', function() {
        var $v$T = _o365s15._TI._hf.childNodes[9].cloneNode(true);
        var $v$U = new _js.$9($v$T.children[1]);
        $v$U.$2(_E.$0([ 'IsSelected' ], [ _o365s15._TI.$8d ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$W, null, true));
        $v$U.set_$7('o365cs-activeLinkIndicator o365cs-nw-b');
        var $v$V = new _o365c.$R($v$T.children[0]);
        $v$V.$6(_E.$0([ 'Text' ], [ _o365s15._TI.$2q ], null, 'Text', null, _o365s15._TI.$1G, 1)).$6(_E.$0([ 'IsTextHidden' ], [ _o365s15._TI.$BO ], null, 'IsHidden', null, _o365s15._TI.$N, 1, null, null, true));
        return new _B($v$T, [ $v$V, $v$U ]).R({ Label: $v$V });
    }, O365Shell15_Navigation.$12, _o365c.$E, false, true, false, 0);
    new _A('SharedHeaderMouseView.HeaderButtonMenu', function() {
        var $v$W = _o365s15._TI._hf.childNodes[10].cloneNode(true);
        var $v$X = new _o365c.$E($v$W.children[0]);
        $v$X.$2(_E.$0([ 'Command' ], [ _o365s15._TI.$6E ], null, 'ClickCommand', null, _o365s15._TI.$2A, 1)).$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'Text', null, _o365s15._TI.$66, 1)).$2(_E.$0([ 'AriaId' ], [ _o365s15._TI.$3R ], null, 'AriaId', null, _o365s15._TI.$3O, 1));
        $v$X.$G(new _js.$F('o365cs-s-bg', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0));
        $v$X.set_$7('o365cs-nav-navItem o365cs-topnavLink o365cs-nav-workloadLink');
        $v$X.set_$4m('o365cs-s-bg');
        $v$X.set_$2j('o365cs-nav-itemDisabled o365cs-t-c');
        $v$X.set_$1k(10);
        var $v$Y = new _o365c.$P();
        var $v$Z = new _o365c.$I();
        $v$Z.$2(_E.$0([ 'MenuCommand' ], [ _o365s15._TI.$4C ], null, 'Command', null, _o365s15._TI.$Z, 1));
        $v$Z.set_$T('DOWNARROW');
        $v$Y.set_$1g([ $v$Z ]);
        var $v$a = new _o365c.$H((_js.$A.Instance).$QK(_o365c.$c), (_js.$A.Instance).$QK(_0365f.$U), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$q));
        $v$a.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'MenuDataContext', null, _o365s15._TI.$3M, 1)).$2(_E.$0([ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$3Q, 'IsShown', _o365s15._TI.$3K, _o365s15._TI.$3L, 2, null, null, false));
        $v$a.$1s = 5;
        $v$a.$3a = true;
        $v$a.$1E = 1;
        $v$a.$2K = 'o365cs-nav-headerContextMenu';
        $v$X.set_$1J([ $v$Y, $v$a ]);
        $v$X.set_$D('SharedHeaderMouseView.HeaderButtonMenu._tid8');
        return new _B($v$W, [ $v$X ]);
    }, O365Shell15_Navigation.$12, _js.$9, false, false, false, 0);
    new _A('SharedHeaderMouseView.HeaderAppsMenu._tid9', function() {
        var $v$b = _o365s15._TI._hf.childNodes[11].cloneNode(true);
        return new _B($v$b, []);
    }, O365Shell15_Navigation.$1O, _o365c.$E, false, true, false, 0);
    new _A('SharedHeaderMouseView.HeaderAppsMenu', function() {
        var $v$c = _o365s15._TI._hf.childNodes[10].cloneNode(true);
        var $v$d = new _o365c.$E($v$c.children[0]);
        $v$d.$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'Title', null, _o365s15._TI.$4A, 1)).$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'AriaLabel', null, _o365s15._TI.$49, 1)).$2(_E.$0([ 'AriaId' ], [ _o365s15._TI.$3R ], null, 'AriaId', null, _o365s15._TI.$3O, 1)).$6(_E.$0([ 'DataContext' ], [ _o365s15._TI.$48 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true));
        $v$d.$G(new _js.$F('o365cs-p-c', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nw-bg', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-topnavLink', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$W, null, 0)).$G(new _js.$F('o365cs-s-bgh', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$W, null, 0)).$G(new _js.$F('o365cs-spo-topnavLink', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$W, null, 0)).$G(new _js.$F('o365cs-nav-menuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-spo-topbarMenuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0));
        $v$d.set_$7('o365cs-nav-navIcon o365cs-navIconWidth o365cs-topnavLink o365cs-s-bgh o365cs-nav-workloadLink o365cs-nav-menu');
        $v$d.set_$2j('o365cs-nav-itemDisabled o365cs-t-c');
        $v$d.set_$1k(10);
        var $v$e = new _o365c.$P();
        var $v$f = new _o365c.$I();
        $v$f.$2(_E.$0([ 'MenuCommand' ], [ _o365s15._TI.$4C ], null, 'Command', null, _o365s15._TI.$Z, 1));
        $v$f.set_$T('DOWNARROW');
        $v$e.set_$1g([ $v$f ]);
        var $v$g = new _o365c.$H((_js.$A.Instance).$QK(_o365c.$c), (_js.$A.Instance).$QK(_0365f.$U), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$q));
        $v$g.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'MenuDataContext', null, _o365s15._TI.$3M, 1)).$2(_E.$0([ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$3Q, 'IsShown', _o365s15._TI.$3K, _o365s15._TI.$3L, 2, null, null, false));
        $v$g.$1s = 5;
        $v$g.$3a = true;
        $v$g.$1E = 1;
        $v$g.$2K = 'o365cs-nav-headerContextMenu';
        $v$d.set_$1J([ $v$e, $v$g ]);
        $v$d.set_$D('SharedHeaderMouseView.HeaderAppsMenu._tid9');
        return new _B($v$c, [ $v$d ]);
    }, O365Shell15_Navigation.$1O, _js.$9, false, false, false, 0);
    new _A('SharedHeaderMouseView.HeaderAdminMenu._tida', function() {
        var $v$h = _o365s15._TI._hf.childNodes[12].cloneNode(true);
        var $v$i = new _js.$9($v$h.children[2]);
        $v$i.$2(_E.$0([ 'IsSelected' ], [ _o365s15._TI.$8d ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$W, null, true));
        $v$i.set_$7('o365cs-activeLinkIndicator o365cs-nw-b');
        var $v$j = new _o365c.$R($v$h.children[1]);
        $v$j.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true));
        $v$j.set_$7('wf');
        var $v$k = new _o365c.$R($v$h.children[0]);
        $v$k.$6(_E.$0([ 'Text' ], [ _o365s15._TI.$2q ], null, 'Text', null, _o365s15._TI.$1G, 1)).$6(_E.$0([ 'Text' ], [ _o365s15._TI.$2q ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$3N, null, true));
        return new _B($v$h, [ $v$k, $v$j, $v$i ]).R({ Label: $v$k });
    }, O365Shell15_Navigation.$d, _o365c.$e, false, true, false, 0);
    new _A('SharedHeaderMouseView.HeaderAdminMenu', function() {
        var $v$l = _o365s15._TI._hf.childNodes[8].cloneNode(true);
        var $v$m = new _o365c.$e($v$l.children[0]);
        $v$m.$2(_E.$0([ 'Command' ], [ _o365s15._TI.$6E ], null, 'ClickCommand', null, _o365s15._TI.$2A, 1)).$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'Text', null, _o365s15._TI.$66, 1)).$2(_E.$0([ 'Url' ], [ _o365s15._TI.$6F ], null, 'Href', null, _o365s15._TI.$4x, 1)).$2(_E.$0([ 'TargetWindow' ], [ _o365s15._TI.$Bf ], null, 'TargetWindow', null, _o365s15._TI.$BV, 1)).$2(_E.$0([ 'PreventNavigation' ], [ _o365s15._TI.$Be ], null, 'PreventNavigation', null, _o365s15._TI.$BU, 1, null, null, false)).$2(_E.$0([ 'AriaId' ], [ _o365s15._TI.$3R ], null, 'AriaId', null, _o365s15._TI.$3O, 1)).$6(_E.$0([ 'DataContext' ], [ _o365s15._TI.$48 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true));
        $v$m.$G(new _js.$F('o365cs-p-c', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nw-bg', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-topnavLink', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$W, null, 0)).$G(new _js.$F('o365cs-s-bgh', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$W, null, 0)).$G(new _js.$F('o365cs-spo-topnavLink', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$W, null, 0)).$G(new _js.$F('o365cs-nav-menuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-spo-topbarMenuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0));
        $v$m.set_$7('o365cs-nav-navItem o365cs-topnavLink o365cs-s-bgh o365cs-nav-workloadLink o365cs-nav-menu');
        $v$m.set_$2j('o365cs-nav-itemDisabled o365cs-t-c');
        $v$m.set_$1k(10);
        var $v$n = new _o365c.$P();
        var $v$o = new _o365c.$I();
        $v$o.$2(_E.$0([ 'MenuCommand' ], [ _o365s15._TI.$4C ], null, 'Command', null, _o365s15._TI.$Z, 1));
        $v$o.set_$T('DOWNARROW');
        $v$n.set_$1g([ $v$o ]);
        var $v$p = new _o365c.$H((_js.$A.Instance).$QK(_o365c.$c), (_js.$A.Instance).$QK(_0365f.$U), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$q));
        $v$p.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'MenuDataContext', null, _o365s15._TI.$3M, 1)).$2(_E.$0([ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$3Q, 'IsShown', _o365s15._TI.$3K, _o365s15._TI.$3L, 2, null, null, false));
        $v$p.$1s = 5;
        $v$p.$3a = true;
        $v$p.$1E = 1;
        $v$p.$2K = 'o365cs-nav-headerContextMenu';
        $v$m.set_$1J([ $v$n, $v$p ]);
        $v$m.set_$D('SharedHeaderMouseView.HeaderAdminMenu._tida');
        return new _B($v$l, [ $v$m ]);
    }, O365Shell15_Navigation.$d, _js.$9, false, false, false, 0);
    new _A('SharedHeaderMouseView.HeaderPartnerLinkMenu._tidb', function() {
        var $v$q = _o365s15._TI._hf.childNodes[12].cloneNode(true);
        var $v$r = new _js.$9($v$q.children[2]);
        $v$r.$2(_E.$0([ 'IsSelected' ], [ _o365s15._TI.$8d ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$W, null, true));
        $v$r.set_$7('o365cs-activeLinkIndicator o365cs-nw-b');
        var $v$s = new _o365c.$R($v$q.children[1]);
        $v$s.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true));
        $v$s.set_$7('wf');
        var $v$t = new _o365c.$R($v$q.children[0]);
        $v$t.$6(_E.$0([ 'Text' ], [ _o365s15._TI.$2q ], null, 'Text', null, _o365s15._TI.$1G, 1)).$6(_E.$0([ 'Text' ], [ _o365s15._TI.$2q ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$3N, null, true));
        return new _B($v$q, [ $v$t, $v$s, $v$r ]).R({ Label: $v$t });
    }, O365Shell15_Navigation.$d, _o365c.$e, false, true, false, 0);
    new _A('SharedHeaderMouseView.HeaderPartnerLinkMenu', function() {
        var $v$u = _o365s15._TI._hf.childNodes[8].cloneNode(true);
        var $v$v = new _o365c.$e($v$u.children[0]);
        $v$v.$2(_E.$0([ 'Command' ], [ _o365s15._TI.$6E ], null, 'ClickCommand', null, _o365s15._TI.$2A, 1)).$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'Text', null, _o365s15._TI.$66, 1)).$2(_E.$0([ 'Url' ], [ _o365s15._TI.$6F ], null, 'Href', null, _o365s15._TI.$4x, 1)).$2(_E.$0([ 'TargetWindow' ], [ _o365s15._TI.$Bf ], null, 'TargetWindow', null, _o365s15._TI.$BV, 1)).$2(_E.$0([ 'PreventNavigation' ], [ _o365s15._TI.$Be ], null, 'PreventNavigation', null, _o365s15._TI.$BU, 1, null, null, false)).$2(_E.$0([ 'AriaId' ], [ _o365s15._TI.$3R ], null, 'AriaId', null, _o365s15._TI.$3O, 1)).$6(_E.$0([ 'DataContext' ], [ _o365s15._TI.$48 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true));
        $v$v.$G(new _js.$F('o365cs-p-c', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nw-bg', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-topnavLink', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$W, null, 0)).$G(new _js.$F('o365cs-s-bgh', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$W, null, 0)).$G(new _js.$F('o365cs-spo-topnavLink', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$W, null, 0)).$G(new _js.$F('o365cs-nav-menuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-spo-topbarMenuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0));
        $v$v.set_$7('o365cs-nav-navItem o365cs-topnavLink o365cs-s-bgh o365cs-nav-workloadLink');
        $v$v.set_$2j('o365cs-nav-itemDisabled o365cs-t-c');
        $v$v.set_$1k(10);
        var $v$w = new _o365c.$P();
        var $v$x = new _o365c.$I();
        $v$x.$2(_E.$0([ 'MenuCommand' ], [ _o365s15._TI.$4C ], null, 'Command', null, _o365s15._TI.$Z, 1));
        $v$x.set_$T('DOWNARROW');
        $v$w.set_$1g([ $v$x ]);
        var $v$y = new _o365c.$H((_js.$A.Instance).$QK(_o365c.$c), (_js.$A.Instance).$QK(_0365f.$U), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$q));
        $v$y.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'MenuDataContext', null, _o365s15._TI.$3M, 1)).$2(_E.$0([ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$3Q, 'IsShown', _o365s15._TI.$3K, _o365s15._TI.$3L, 2, null, null, false));
        $v$y.$1s = 5;
        $v$y.$3a = true;
        $v$y.$1E = 1;
        $v$y.$2K = 'o365cs-nav-headerContextMenu';
        $v$v.set_$1J([ $v$w, $v$y ]);
        $v$v.set_$D('SharedHeaderMouseView.HeaderPartnerLinkMenu._tidb');
        return new _B($v$u, [ $v$v ]);
    }, O365Shell15_Navigation.$d, _js.$9, false, false, false, 0);
    new _A('SharedHeaderMouseView.HeaderMeTileLinkMenu._tidc', function() {
        var $v$z = _o365s15._TI._hf.childNodes[13].cloneNode(true);
        var $v$10 = new _o365c.$R(_B.$V($v$z, [ 0, 1 ]));
        $v$10.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true));
        var $v$11 = new _o365c.$R(_B.$V($v$z, [ 0, 0 ]));
        $v$11.$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'Text', null, _o365s15._TI.$1G, 1));
        return new _B($v$z, [ $v$11, $v$10 ]);
    }, O365Shell15_Navigation.$d, _o365c.$E, false, true, false, 0);
    new _A('SharedHeaderMouseView.HeaderMeTileLinkMenu', function() {
        var $v$12 = _o365s15._TI._hf.childNodes[14].cloneNode(true);
        var $v$13 = new _o365c.$E($v$12.children[0]);
        $v$13.$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'Title', null, _o365s15._TI.$4A, 1)).$2(_E.$0([ 'AriaId' ], [ _o365s15._TI.$3R ], null, 'AriaId', null, _o365s15._TI.$3O, 1));
        $v$13.$G(new _js.$F('o365cs-nw-bg', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nb-c', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nav-menuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-spo-topbarMenuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0));
        $v$13.set_$7('o365cs-nav-headerButton o365cs-nav-meTile');
        $v$13.set_$4m('o365cs-nav-menuHovered o365cs-spo-topbarHover');
        $v$13.set_$1k(10);
        var $v$14 = new _o365c.$P();
        var $v$15 = new _o365c.$I();
        $v$15.$2(_E.$0([ 'MenuCommand' ], [ _o365s15._TI.$4C ], null, 'Command', null, _o365s15._TI.$Z, 1));
        $v$15.set_$T('DOWNARROW');
        $v$14.set_$1g([ $v$15 ]);
        var $v$16 = new _o365c.$H((_js.$A.Instance).$QK(_o365c.$c), (_js.$A.Instance).$QK(_0365f.$U), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$q));
        $v$16.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'MenuDataContext', null, _o365s15._TI.$3M, 1)).$2(_E.$0([ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$3Q, 'IsShown', _o365s15._TI.$3K, _o365s15._TI.$3L, 2, null, null, false));
        $v$16.$3a = true;
        $v$16.$1E = 1;
        $v$16.$1s = 5;
        $v$16.$2K = 'o365cs-nav-headerContextMenu';
        $v$13.set_$1J([ $v$14, $v$16 ]);
        $v$13.set_$D('SharedHeaderMouseView.HeaderMeTileLinkMenu._tidc');
        return new _B($v$12, [ $v$13 ]);
    }, O365Shell15_Navigation.$d, _js.$9, false, false, false, 0);
    new _A('SharedHeaderMouseView.HeaderSettingsLinkMenu._tidd', function() {
        var $v$17 = _o365s15._TI._hf.childNodes[15].cloneNode(true);
        return new _B($v$17, []);
    }, O365Shell15_Navigation.$12, _o365c.$E, false, true, false, 0);
    new _A('SharedHeaderMouseView.HeaderSettingsLinkMenu', function() {
        var $v$18 = _o365s15._TI._hf.childNodes[14].cloneNode(true);
        var $v$19 = new _o365c.$E($v$18.children[0]);
        $v$19.$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'Title', null, _o365s15._TI.$4A, 1)).$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'AriaLabel', null, _o365s15._TI.$49, 1)).$2(_E.$0([ 'AriaId' ], [ _o365s15._TI.$3R ], null, 'AriaId', null, _o365s15._TI.$3O, 1));
        $v$19.$G(new _js.$F('o365cs-nw-bg', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nb-c', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nav-menuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-spo-topbarMenuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0));
        $v$19.set_$7('o365cs-nav-headerButton o365cs-nav-menu o365cs-navIconWidth');
        $v$19.set_$4m('o365cs-nav-menuHovered o365cs-spo-topbarHover');
        $v$19.set_$1k(10);
        var $v$1A = new _o365c.$P();
        var $v$1B = new _o365c.$I();
        $v$1B.$2(_E.$0([ 'MenuCommand' ], [ _o365s15._TI.$4C ], null, 'Command', null, _o365s15._TI.$Z, 1));
        $v$1B.set_$T('DOWNARROW');
        $v$1A.set_$1g([ $v$1B ]);
        var $v$1C = new _o365c.$H((_js.$A.Instance).$QK(_o365c.$c), (_js.$A.Instance).$QK(_0365f.$U), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$q));
        $v$1C.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'MenuDataContext', null, _o365s15._TI.$3M, 1)).$2(_E.$0([ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$3Q, 'IsShown', _o365s15._TI.$3K, _o365s15._TI.$3L, 2, null, null, false));
        $v$1C.$3a = true;
        $v$1C.$1E = 1;
        $v$1C.$1s = 5;
        $v$1C.$2K = 'o365cs-nav-headerContextMenu';
        $v$19.set_$1J([ $v$1A, $v$1C ]);
        $v$19.set_$D('SharedHeaderMouseView.HeaderSettingsLinkMenu._tidd');
        return new _B($v$18, [ $v$19 ]);
    }, O365Shell15_Navigation.$12, _js.$9, false, false, false, 0);
    new _A('SharedHeaderMouseView.HeaderHelpLinkMenu._tide', function() {
        var $v$1D = _o365s15._TI._hf.childNodes[16].cloneNode(true);
        var $v$1E = new _o365c.$R($v$1D.children[1]);
        $v$1E.$2(_E.$2J(O365Shell15_Common.$10.get_$Em(), null, null, null, 'IsHidden', null, _o365s15._TI.$N, 0, _o365s15._TI.$W, null, true));
        $v$1E.set_$7('wf');
        var $v$1F = new _o365c.$R($v$1D.children[0]);
        $v$1F.$2(_E.$2J(O365Shell15_Common.$10.get_$Em(), null, null, null, 'IsHidden', null, _o365s15._TI.$N, 0, null, null, true));
        $v$1F.set_$7('wf');
        return new _B($v$1D, [ $v$1F, $v$1E ]);
    }, O365Shell15_Navigation.$12, _o365c.$E, false, true, false, 0);
    new _A('SharedHeaderMouseView.HeaderHelpLinkMenu', function() {
        var $v$1G = _o365s15._TI._hf.childNodes[14].cloneNode(true);
        var $v$1H = new _o365c.$E($v$1G.children[0]);
        $v$1H.$2(_E.$0([ 'Command' ], [ _o365s15._TI.$6E ], null, 'ClickCommand', null, _o365s15._TI.$2A, 1)).$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'Title', null, _o365s15._TI.$4A, 1)).$2(_E.$0([ 'Text' ], [ _o365s15._TI.$2B ], null, 'AriaLabel', null, _o365s15._TI.$49, 1)).$2(_E.$0([ 'AriaId' ], [ _o365s15._TI.$3R ], null, 'AriaId', null, _o365s15._TI.$3O, 1));
        $v$1H.$G(new _js.$F('o365cs-nw-bg', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nb-c', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nav-menuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-spo-topbarMenuOpen', [ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], null, null, 0)).$G(new _js.$F('o365cs-nav-topbarLinkNoMenu', [ 'MenuViewModel' ], [ _o365s15._TI.$C ], _o365s15._TI.$g, null, 0));
        $v$1H.set_$7('o365cs-nav-headerButton o365cs-nav-menu o365cs-navIconWidth');
        $v$1H.set_$4m('o365cs-nav-menuHovered o365cs-spo-topbarHover');
        $v$1H.set_$1k(10);
        var $v$1I = new _o365c.$P();
        var $v$1J = new _o365c.$I();
        $v$1J.$2(_E.$0([ 'MenuCommand' ], [ _o365s15._TI.$4C ], null, 'Command', null, _o365s15._TI.$Z, 1));
        $v$1J.set_$T('DOWNARROW');
        $v$1I.set_$1g([ $v$1J ]);
        var $v$1K = new _o365c.$H((_js.$A.Instance).$QK(_o365c.$c), (_js.$A.Instance).$QK(_0365f.$U), (_js.$A.Instance).$QK(_0365f.$X), (_js.$A.Instance).$QK(_0365f.$q));
        $v$1K.$2(_E.$0([ 'MenuViewModel' ], [ _o365s15._TI.$C ], null, 'MenuDataContext', null, _o365s15._TI.$3M, 1)).$2(_E.$0([ 'MenuViewModel', 'IsShown' ], [ _o365s15._TI.$C, _o365s15._TI.$L ], _o365s15._TI.$3Q, 'IsShown', _o365s15._TI.$3K, _o365s15._TI.$3L, 2, null, null, false));
        $v$1K.$3a = true;
        $v$1K.$1E = 1;
        $v$1K.$1s = 5;
        $v$1K.$2K = 'o365cs-nav-headerContextMenu';
        $v$1H.set_$1J([ $v$1I, $v$1K ]);
        $v$1H.set_$D('SharedHeaderMouseView.HeaderHelpLinkMenu._tide');
        return new _B($v$1G, [ $v$1H ]);
    }, O365Shell15_Navigation.$12, _js.$9, false, false, false, 0);
    new _A('SharedHeaderMouseView', function() {
        var $v$1L = _o365s15._TI._hf.childNodes[17].cloneNode(true);
        var $v$1M = new _js.$9(_B.$V($v$1L, [ 0, 1, 1, 0, 3 ]));
        $v$1M.$6(_E.$0([ 'FeedbackDataContext' ], [ _o365s15._TI.$NF ], null, 'DataContext', null, _o365s15._TI.$1H, 1)).$6(_E.$0([ 'FeedbackTemplateId' ], [ _o365s15._TI.$G0 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true)).$6(_E.$0([ 'FeedbackTemplateId' ], [ _o365s15._TI.$G0 ], null, 'TemplateId', null, _o365s15._TI.$1i, 1));
        $v$1M.set_$7('o365cs-nav-rightSideButton');
        $v$1M.set_$4k(true);
        $v$1M.$1.parentNode.removeChild($v$1M.$1);
        var $v$1N = new _js.$9(_B.$V($v$1L, [ 0, 1, 1, 0, 2 ]));
        $v$1N.$6(_E.$0([ 'HelpDataContext' ], [ _o365s15._TI.$NH ], null, 'DataContext', null, _o365s15._TI.$1H, 1)).$6(_E.$0([ 'HelpTemplateId' ], [ _o365s15._TI.$G1 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true)).$6(_E.$0([ 'HelpTemplateId' ], [ _o365s15._TI.$G1 ], null, 'TemplateId', null, _o365s15._TI.$1i, 1));
        $v$1N.set_$7('o365cs-nav-rightSideButton');
        $v$1N.set_$4k(true);
        $v$1N.$1.parentNode.removeChild($v$1N.$1);
        var $v$1O = new _js.$9(_B.$V($v$1L, [ 0, 1, 1, 0, 1 ]));
        $v$1O.$6(_E.$0([ 'SettingsDataContext' ], [ _o365s15._TI.$NN ], null, 'DataContext', null, _o365s15._TI.$1H, 1)).$6(_E.$0([ 'SettingsTemplateId' ], [ _o365s15._TI.$G4 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true)).$6(_E.$0([ 'SettingsTemplateId' ], [ _o365s15._TI.$G4 ], null, 'TemplateId', null, _o365s15._TI.$1i, 1));
        $v$1O.set_$7('o365cs-nav-rightSideButton');
        $v$1O.set_$4k(true);
        $v$1O.$1.parentNode.removeChild($v$1O.$1);
        var $v$1P = new _js.$9(_B.$V($v$1L, [ 0, 1, 1, 0, 0 ]));
        $v$1P.$6(_E.$0([ 'MeTileDataContext' ], [ _o365s15._TI.$NK ], null, 'DataContext', null, _o365s15._TI.$1H, 1)).$6(_E.$0([ 'MeTileTemplateId' ], [ _o365s15._TI.$G2 ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true)).$6(_E.$0([ 'MeTileTemplateId' ], [ _o365s15._TI.$G2 ], null, 'TemplateId', null, _o365s15._TI.$1i, 1));
        $v$1P.set_$7('o365cs-nav-rightSideButton');
        $v$1P.set_$4k(true);
        $v$1P.$1.parentNode.removeChild($v$1P.$1);
        var $v$1Q = new _o365c.$18(_B.$V($v$1L, [ 0, 1, 1, 0 ]), (_js.$A.Instance).$QK(_o365c.$c));
        $v$1Q.$2(_E.$2J(_u.Strings.l_ShellCore_UserSettings_Text, null, null, null, 'AriaLabel', null, _o365s15._TI.$49, 0));
        $v$1Q.set_$7('o365cs-nav-rightSidePanel');
        $v$1Q.set_$1k(54);
        var $v$1R = new _js.$3(_B.$V($v$1L, [ 0, 1, 1 ]));
        $v$1R.$6(_E.$0([ 'RightSideBehaviors' ], [ _o365s15._TI.$NM ], null, 'Behaviors', null, _o365s15._TI.$Fw, 1));
        var $v$1S = new _js.$9(_B.$V($v$1L, [ 0, 1, 0 ]));
        $v$1S.$6(_E.$0([ 'HeaderRegionBehaviors' ], [ _o365s15._TI.$NG ], null, 'Behaviors', null, _o365s15._TI.$Fw, 1));
        $v$1S.set_$7('o365cs-nav-headerRegion');
        $v$1S.set_$D('SharedHeaderMouseView._tid5');
        var $v$1T = new _js.$3(_B.$V($v$1L, [ 0, 1 ]));
        $v$1T.$G(new _js.$F('o365cs-display-none', [ 'IsAuthenticated' ], [ _o365s15._TI.$NI ], _o365s15._TI.$W, null, 1));
        $v$1T.set_$7('o365cs-nav-rightAlign');
        $v$1T.set_$m('O365_TopMenu');
        var $v$1U = new _js.$9(_B.$V($v$1L, [ 0, 0, 0, 2 ]));
        $v$1U.$6(_E.$0([ 'BrandingData' ], [ _o365s15._TI.$ND ], null, 'DataContext', null, _o365s15._TI.$1H, 1)).$6(_E.$0([ 'BrandingTemplateId' ], [ _o365s15._TI.$Bh ], null, 'IsHidden', null, _o365s15._TI.$N, 1, new _js.$11([ _o365s15._TI.$g, _o365s15._TI.$W ], [ null, null ]), null, true));
        $v$1U.set_$7('o365cs-nav-branding o365cs-topnavLink');
        $v$1U.set_$D('SharedHeaderMouseView._tid3');
        var $v$1V = new _js.$9(_B.$V($v$1L, [ 0, 0, 0, 1 ]));
        $v$1V.$2(_E.$0([ 'IsHidden' ], [ _o365s15._TI.$Bd ], null, 'IsHidden', null, _o365s15._TI.$N, 1, null, null, true)).$6(_E.$0([ 'TenantBrandingData' ], [ _o365s15._TI.$Bi ], null, 'DataContext', null, _o365s15._TI.$1H, 1));
        $v$1V.set_$7('o365cs-nav-tenantBranding o365cs-p-c');
        $v$1V.set_$D('SharedHeaderMouseView._tid1');
        var $v$1W = new _js.$9(_B.$V($v$1L, [ 0, 0, 0, 0 ]));
        $v$1W.$6(_E.$0([ 'BrandingDataContext' ], [ _o365s15._TI.$NE ], null, 'DataContext', null, _o365s15._TI.$1H, 1)).$6(_E.$0([ 'BrandingTemplateId' ], [ _o365s15._TI.$Bh ], null, 'IsHidden', null, _o365s15._TI.$N, 1, _o365s15._TI.$g, null, true)).$6(_E.$0([ 'BrandingTemplateId' ], [ _o365s15._TI.$Bh ], null, 'TemplateId', null, _o365s15._TI.$1i, 1));
        $v$1W.set_$7('o365cs-nav-branding o365cs-topnavLink');
        var $v$1X = new _js.$3($v$1L.children[0]);
        $v$1X.set_$m('O365_NavHeader');
        $v$1Q.$P.$3p($v$1P);
        $v$1Q.$P.$3p($v$1O);
        $v$1Q.$P.$3p($v$1N);
        $v$1Q.$P.$3p($v$1M);
        return new _B($v$1L, [ $v$1X, $v$1W, $v$1V, $v$1U, $v$1T, $v$1S, $v$1R, $v$1Q, $v$1P, $v$1O, $v$1N, $v$1M ]);
    }, Object, _o365s15.$19, false, false, false, 0);
    new _A('PlaceholderView', function() {
        var $v$1Y = _o365s15._TI._hf.childNodes[18].cloneNode(true);
        var $v$1Z = new _o365c.$R(_B.$V($v$1Y, [ 0, 0 ]));
        $v$1Z.$2(_E.$0([ 'Text' ], [ _o365s15._TI.$NC ], null, 'Text', null, _o365s15._TI.$1G, 1));
        return new _B($v$1Y, [ $v$1Z ]);
    }, O365Shell15_Navigation.$2N, _js.$9, false, false, false, 0);
}
_o365s15._TI.$As = function _o365s15__TI$$As() {
    var $v$0 = window.document.createElement('DIV');
    $v$0.innerHTML = '<div> <img/> </div><div> <div></div> </div><div> <div class=\'o365cs-topnavLink\'></div> </div><div> <span></span> <a></a> <span></span> <span></span> </div><div>  <div></div>  <div></div> </div><div> <div></div> <div></div> <div></div> <div></div> </div><div> <div></div> <div></div> </div><div> <span></span> <div></div> </div><div> <a></a> </div><div>  <span></span> <div></div> </div><div> <button type=\'button\'></button> </div><div>  <span role=\"presentation\" class=\'wf wf-size-x22 wf-family-o365 wf-o365-x18\'>\ue045</span> </div><div>  <span></span> <span><span role=\"presentation\" class=\'wf wf-size-x22 wf-family-o365 header-downcarat\'>\ue052</span></span> <div></div> </div><div>  <div class=\'o365cs-nav-userName\'> <span></span> <span><span role=\"presentation\" class=\'wf wf-size-x22 wf-family-o365\'>\ue052</span></span> </div> </div><div>  <button type=\'button\'></button> </div><div>  <span role=\"presentation\" class=\'wf wf-size-x22 wf-family-o365 wf-o365-x18\'>\ue035</span> </div><div>  <span> <span role=\"presentation\" class=\'wf wf-size-x22 wf-family-o365 wf-o365-x18\'>\ue006</span> </span> <span> <span role=\"presentation\" class=\'wf wf-size-x22 wf-family-o365 wf-o365-x18\'>\ue03a</span> </span> </div><div> <div class=\'o365cs-nav-header\'> <div class=\'o365cs-nav-leftAlign\'> <div> <div></div>  <div></div>  <div></div> </div> </div> <div> <div></div><div class=\'o365cs-nav-rightMenus o365cs-nl1-bg o365cs-spo-topbar\'> <div>  <div></div>  <div></div>  <div></div>  <div></div> </div> </div> </div> </div>           </div><div> <div> <span></span> </div> </div>';
    _js.$3.get_$7F().appendChild($v$0);
    return $v$0;
}
_o365s15._TI.$N5 = function _o365s15__TI$$N5($p$0) {
    return ($p$0).$8I;
}
_o365s15._TI.$8c = function _o365s15__TI$$8c($p$0) {
    return ($p$0).$Fh;
}
_o365s15._TI.$Bg = function _o365s15__TI$$Bg($p$0) {
    return ($p$0).$BM;
}
_o365s15._TI.$NA = function _o365s15__TI$$NA($p$0) {
    return ($p$0).$Ff;
}
_o365s15._TI.$1N = function _o365s15__TI$$1N($p$0) {
    return ($p$0).get_$20();
}
_o365s15._TI.$Bi = function _o365s15__TI$$Bi($p$0) {
    return ($p$0).$98;
}
_o365s15._TI.$Bd = function _o365s15__TI$$Bd($p$0) {
    return ($p$0).$1A;
}
_o365s15._TI.$N4 = function _o365s15__TI$$N4($p$0) {
    return ($p$0).$BN;
}
_o365s15._TI.$NB = function _o365s15__TI$$NB($p$0) {
    return ($p$0).$Gw;
}
_o365s15._TI.$N3 = function _o365s15__TI$$N3($p$0) {
    return ($p$0).$EF;
}
_o365s15._TI.$NL = function _o365s15__TI$$NL($p$0) {
    return ($p$0).$Nb;
}
_o365s15._TI.$G3 = function _o365s15__TI$$G3($p$0) {
    return ($p$0).$Nc;
}
_o365s15._TI.$NJ = function _o365s15__TI$$NJ($p$0) {
    return ($p$0).$3J;
}
_o365s15._TI.$N8 = function _o365s15__TI$$N8($p$0) {
    return ($p$0).$7p;
}
_o365s15._TI.$N7 = function _o365s15__TI$$N7($p$0) {
    return ($p$0).$73;
}
_o365s15._TI.$N6 = function _o365s15__TI$$N6($p$0) {
    return ($p$0).$71;
}
_o365s15._TI.$N9 = function _o365s15__TI$$N9($p$0) {
    return ($p$0).$8j;
}
_o365s15._TI.$48 = function _o365s15__TI$$48($p$0) {
    return ($p$0).get_$Y();
}
_o365s15._TI.$2q = function _o365s15__TI$$2q($p$0) {
    return ($p$0).$1C;
}
_o365s15._TI.$8d = function _o365s15__TI$$8d($p$0) {
    return ($p$0).$1V;
}
_o365s15._TI.$6E = function _o365s15__TI$$6E($p$0) {
    return ($p$0).$2H;
}
_o365s15._TI.$2B = function _o365s15__TI$$2B($p$0) {
    return ($p$0).$1C;
}
_o365s15._TI.$6F = function _o365s15__TI$$6F($p$0) {
    return ($p$0).$32;
}
_o365s15._TI.$Bf = function _o365s15__TI$$Bf($p$0) {
    return ($p$0).$1b;
}
_o365s15._TI.$Be = function _o365s15__TI$$Be($p$0) {
    return ($p$0).$1w;
}
_o365s15._TI.$3R = function _o365s15__TI$$3R($p$0) {
    return ($p$0).get_$m();
}
_o365s15._TI.$C = function _o365s15__TI$$C($p$0) {
    return ($p$0).$29;
}
_o365s15._TI.$L = function _o365s15__TI$$L($p$0) {
    return ($p$0).$1o;
}
_o365s15._TI.$BO = function _o365s15__TI$$BO($p$0) {
    return ($p$0).get_$FV();
}
_o365s15._TI.$4C = function _o365s15__TI$$4C($p$0) {
    return ($p$0).$8K;
}
_o365s15._TI.$3K = function _o365s15__TI$$3K($p$0) {
    return ($p$0).get_$O();
}
_o365s15._TI.$NE = function _o365s15__TI$$NE($p$0) {
    return ($p$0).$JB;
}
_o365s15._TI.$Bh = function _o365s15__TI$$Bh($p$0) {
    return ($p$0).$JC;
}
_o365s15._TI.$ND = function _o365s15__TI$$ND($p$0) {
    return ($p$0).$37;
}
_o365s15._TI.$NI = function _o365s15__TI$$NI($p$0) {
    return ($p$0).get_$Ll();
}
_o365s15._TI.$NG = function _o365s15__TI$$NG($p$0) {
    return ($p$0).$LM;
}
_o365s15._TI.$NM = function _o365s15__TI$$NM($p$0) {
    return ($p$0).$PS;
}
_o365s15._TI.$NK = function _o365s15__TI$$NK($p$0) {
    return ($p$0).$8L;
}
_o365s15._TI.$G2 = function _o365s15__TI$$G2($p$0) {
    return ($p$0).$8M;
}
_o365s15._TI.$NN = function _o365s15__TI$$NN($p$0) {
    return ($p$0).$8x;
}
_o365s15._TI.$G4 = function _o365s15__TI$$G4($p$0) {
    return ($p$0).$8y;
}
_o365s15._TI.$NH = function _o365s15__TI$$NH($p$0) {
    return ($p$0).$7q;
}
_o365s15._TI.$G1 = function _o365s15__TI$$G1($p$0) {
    return ($p$0).$7r;
}
_o365s15._TI.$NF = function _o365s15__TI$$NF($p$0) {
    return ($p$0).$KJ;
}
_o365s15._TI.$G0 = function _o365s15__TI$$G0($p$0) {
    return ($p$0).$KK;
}
_o365s15._TI.$NC = function _o365s15__TI$$NC($p$0) {
    return ($p$0).$1C;
}
_o365s15._TI.$Fy = function _o365s15__TI$$Fy($p$0, $p$1) {
    ($p$0).set_$1p($p$1);
}
_o365s15._TI.$4A = function _o365s15__TI$$4A($p$0, $p$1) {
    ($p$0).set_$HH($p$1);
}
_o365s15._TI.$2X = function _o365s15__TI$$2X($p$0, $p$1) {
    ($p$0).set_$n($p$1);
}
_o365s15._TI.$1G = function _o365s15__TI$$1G($p$0, $p$1) {
    ($p$0).set_$21($p$1);
}
_o365s15._TI.$N = function _o365s15__TI$$N($p$0, $p$1) {
    ($p$0).set_$2W($p$1);
}
_o365s15._TI.$4x = function _o365s15__TI$$4x($p$0, $p$1) {
    ($p$0).set_$5p($p$1);
}
_o365s15._TI.$49 = function _o365s15__TI$$49($p$0, $p$1) {
    ($p$0).set_$5J($p$1);
}
_o365s15._TI.$1H = function _o365s15__TI$$1H($p$0, $p$1) {
    ($p$0).set_$Y($p$1);
}
_o365s15._TI.$1i = function _o365s15__TI$$1i($p$0, $p$1) {
    ($p$0).set_$D($p$1);
}
_o365s15._TI.$6B = function _o365s15__TI$$6B($p$0, $p$1) {
    ($p$0).set_$16($p$1);
}
_o365s15._TI.$2A = function _o365s15__TI$$2A($p$0, $p$1) {
    ($p$0).set_$2e($p$1);
}
_o365s15._TI.$66 = function _o365s15__TI$$66($p$0, $p$1) {
    ($p$0).set_$21($p$1);
}
_o365s15._TI.$BV = function _o365s15__TI$$BV($p$0, $p$1) {
    ($p$0).set_$4L($p$1);
}
_o365s15._TI.$BU = function _o365s15__TI$$BU($p$0, $p$1) {
    ($p$0).set_$C4($p$1);
}
_o365s15._TI.$3O = function _o365s15__TI$$3O($p$0, $p$1) {
    ($p$0).set_$m($p$1);
}
_o365s15._TI.$Z = function _o365s15__TI$$Z($p$0, $p$1) {
    ($p$0).$2H = $p$1;
}
_o365s15._TI.$3M = function _o365s15__TI$$3M($p$0, $p$1) {
    ($p$0).set_$Fn($p$1);
}
_o365s15._TI.$3Q = function _o365s15__TI$$3Q($p$0, $p$1) {
    ($p$0).set_$O($p$1);
}
_o365s15._TI.$3L = function _o365s15__TI$$3L($p$0, $p$1) {
    ($p$0).set_$O($p$1);
}
_o365s15._TI.$Fw = function _o365s15__TI$$Fw($p$0, $p$1) {
    ($p$0).set_$1J($p$1);
}


_o365s15.bvi.registerClass('_o365s15.bvi');
O365Shell15_Common.$M.registerClass('O365Shell15_Common.$M');
O365Shell15_Common.$10.registerClass('O365Shell15_Common.$10');
O365Shell15_Navigation.$1U.registerClass('O365Shell15_Navigation.$1U', _js.$0);
O365Shell15_Navigation.$1f.registerClass('O365Shell15_Navigation.$1f', O365Shell15_Navigation.$1U);
O365Shell15_Navigation.$1o.registerClass('O365Shell15_Navigation.$1o');
O365Shell15_Navigation.$1O.registerClass('O365Shell15_Navigation.$1O', _js.$0);
O365Shell15_Navigation.$12.registerClass('O365Shell15_Navigation.$12', O365Shell15_Navigation.$1O);
O365Shell15_Navigation.$d.registerClass('O365Shell15_Navigation.$d', O365Shell15_Navigation.$12);
O365Shell15_Navigation.$1c.registerClass('O365Shell15_Navigation.$1c', _js.$0);
O365Shell15_Navigation.$2N.registerClass('O365Shell15_Navigation.$2N');
O365Shell15_Navigation.$C.registerClass('O365Shell15_Navigation.$C', _js.$0);
_o365s15.$19.registerClass('_o365s15.$19', _js.$9);
O365Shell15_Shim.$1W.registerClass('O365Shell15_Shim.$1W');
O365Shell15_Shim.$f.registerClass('O365Shell15_Shim.$f');
O365Shell15_Shim.$f.$Ph.registerClass('O365Shell15_Shim.$f.$Ph', null, _o365s15.$2X);
O365Shell_Shim.$2K.registerClass('O365Shell_Shim.$2K');
O365Shell.registerClass('O365Shell');
_o365s15._TI.registerClass('_o365s15._TI');
_o365s15.bvi.afv = '3.06.4715.15';
O365Shell15_Common.$M.$Gt = null;
O365Shell15_Common.$M.$H5 = null;
O365Shell15_Common.$M.$5R = null;
O365Shell15_Common.$M.$U = null;
O365Shell15_Common.$10.$Ne = _0365m.$u.$5U('o365logo', 2, 'o365');
O365Shell15_Common.$10.$Nd = _0365m.$u.$5U('o365gallatinlogo', 2, 'o365');
O365Shell15_Shim.$f.$2u = {};
O365Shell.Navigation = null;
O365Shell.Host = null;
_o365s15._TI._hf = _o365s15._TI.$As();
_o365s15._TI.$g = new _o365c.$1t();
_o365s15._TI.$W = new _o365c.$1i();
_o365s15._TI.$BT = new _o365c.$2I();
_o365s15._TI.$3N = new _o365c.$1s();
_o365s15._TI.$$cctor();
;