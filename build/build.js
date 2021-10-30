/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Person": () => (/* binding */ Person),
/* harmony export */   "configs": () => (/* binding */ configs)
/* harmony export */ });
class Person{
    constructor(cfg_obj){   
        for(let key in cfg_obj){
            if(cfg_obj[key]!=null){
                this[key]=cfg_obj[key]
            }
        }
    }
    isDead(){
        console.log(this.name + " is dead")
        if(this.dropList.exp_per_kill){return this.dropList.exp_per_kill}
    }
}
let configs={
    base:{
        type:'not assigned',
        name:'not assigned',
        enemy:false,
        class:'not assigned',
        lvl:1,
        exp:0,
        live:false,
        exp_boost:1,
        gold_boost:1,
        mineral_boost:1,
        drop_boost:1,
        max_hp:10,
        current_hp:5,
        regeration_hp:0.2,
        max_mp:5,
        current_mp:2,
        regeration_hp:0.1,
        phisic_def:0,
        magic_def:0,
        phisic_attak:1,
        magic_attak:1,
        phisic_attak_spd:10,
        magic_attak_spd:10,
        crit_chance:1,
        crit_rate:1.1,
        accuracy:10,
        evasion:10,
        fire_resistance:0,
        woter_resistance:0,
        wind_resistance:0,
        earth_resistance:0,
        holy_resistance:0,
        dark_resistance:0,
        fire_wekness:0,
        woter_wekness:0,
        wind_wekness:0,
        earth_wekness:0,
        holy_wekness:0,
        dark_wekness:0,
        dropList:'not assigned',
        inventory:'not assigned',
        activeInventoryPlayer:'not assigned',
        spell:'not assigned',
        skill :'not assigned'
    },
    player:{},
    monsters:{}
}





/*
type,name,enemy,_class,lvl,exp,live,exp_boost,gold_boost,mineral_boost,drop_boost,max_hp,current_hp,regeration_hp,max_mp,current_mp,regeration_mp,phisic_def,magic_def,
phisic_attak,magic_attak,phisic_attak_spd,magic_attak_spd,crit_chance,crit_rate,accuracy,evasion,
fire_resistance,woter_resistance,wind_resistance,earth_resistance,holy_resistance,dark_resistance,
fire_wekness,woter_wekness,wind_wekness,earth_wekness,holy_wekness,dark_wekness
*/

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/person */ "./src/person.js");


//let Player = new Person(merge(configs.base,{type:'player',name:'ferius',enemy:false,class:'worior'}))

//let Monsters = new Person(merge(configs.base,{type:'monsters',name:'ork',enemy:true,class:'worior',crit_chance:50}))




let win=[0,0]

for(let i =0;i<100;i++){
    battle (
        new _src_person__WEBPACK_IMPORTED_MODULE_0__.Person(merge(_src_person__WEBPACK_IMPORTED_MODULE_0__.configs.base,{type:'player',name:'ferius',enemy:false,class:'worior'})),
        new _src_person__WEBPACK_IMPORTED_MODULE_0__.Person(merge(_src_person__WEBPACK_IMPORTED_MODULE_0__.configs.base,{type:'monsters',name:'ork',enemy:true,class:'worior',crit_chance:1,crit_rate:2}))
    )
}


function merge(a,b){
    let c = {};
    for (let att in a) { c[att] = a[att]; }
    for (let att in b) { c[att] = b[att]; }
    return c;
}
function battle (_a,_b){
    let a,b
    let sys_battle_obj = {}
if(gRI(0,1)>0){
    a = _a;
    b = _b;
}else{
    a=_b
    b=_a
}
    sys_battle_obj.a_si = setInterval(kik,1000/a.phisic_attak_spd,a,b,sys_battle_obj)
    sys_battle_obj.b_si = setInterval(kik,1000/b.phisic_attak_spd,b,a,sys_battle_obj)
}
function kik(a,b,sys){
    if(b.current_hp <= 0){
        b.alive=false;
        if(b.enemy==true){win[0]++}
        if(b.enemy==false){win[1]++}
        b.isDead();
        clearInterval(sys.a_si);
        clearInterval(sys.b_si);
        console.log(win)
    }

    let attak = undefined
    if(gRI(0, 100)<=a.crit_chance){
        attak=a.phisic_attak*a.crit_rate
    }else{
        attak=a.phisic_attak
    }

    b.current_hp=b.current_hp-(attak-b.phisic_def)
}
function gRI(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN6RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQztBQUMzQztBQUNBLDhDQUE4Qyx1REFBdUQ7QUFDckc7QUFDQSxnREFBZ0Qsb0VBQW9FO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBLFlBQVksK0NBQU0sT0FBTyxxREFBWSxFQUFFLHVEQUF1RDtBQUM5RixZQUFZLCtDQUFNLE9BQU8scURBQVksRUFBRSwrRUFBK0U7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWUvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQZXJzb257XHJcbiAgICBjb25zdHJ1Y3RvcihjZmdfb2JqKXsgICBcclxuICAgICAgICBmb3IobGV0IGtleSBpbiBjZmdfb2JqKXtcclxuICAgICAgICAgICAgaWYoY2ZnX29ialtrZXldIT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XT1jZmdfb2JqW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzRGVhZCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSArIFwiIGlzIGRlYWRcIilcclxuICAgICAgICBpZih0aGlzLmRyb3BMaXN0LmV4cF9wZXJfa2lsbCl7cmV0dXJuIHRoaXMuZHJvcExpc3QuZXhwX3Blcl9raWxsfVxyXG4gICAgfVxyXG59XHJcbmxldCBjb25maWdzPXtcclxuICAgIGJhc2U6e1xyXG4gICAgICAgIHR5cGU6J25vdCBhc3NpZ25lZCcsXHJcbiAgICAgICAgbmFtZTonbm90IGFzc2lnbmVkJyxcclxuICAgICAgICBlbmVteTpmYWxzZSxcclxuICAgICAgICBjbGFzczonbm90IGFzc2lnbmVkJyxcclxuICAgICAgICBsdmw6MSxcclxuICAgICAgICBleHA6MCxcclxuICAgICAgICBsaXZlOmZhbHNlLFxyXG4gICAgICAgIGV4cF9ib29zdDoxLFxyXG4gICAgICAgIGdvbGRfYm9vc3Q6MSxcclxuICAgICAgICBtaW5lcmFsX2Jvb3N0OjEsXHJcbiAgICAgICAgZHJvcF9ib29zdDoxLFxyXG4gICAgICAgIG1heF9ocDoxMCxcclxuICAgICAgICBjdXJyZW50X2hwOjUsXHJcbiAgICAgICAgcmVnZXJhdGlvbl9ocDowLjIsXHJcbiAgICAgICAgbWF4X21wOjUsXHJcbiAgICAgICAgY3VycmVudF9tcDoyLFxyXG4gICAgICAgIHJlZ2VyYXRpb25faHA6MC4xLFxyXG4gICAgICAgIHBoaXNpY19kZWY6MCxcclxuICAgICAgICBtYWdpY19kZWY6MCxcclxuICAgICAgICBwaGlzaWNfYXR0YWs6MSxcclxuICAgICAgICBtYWdpY19hdHRhazoxLFxyXG4gICAgICAgIHBoaXNpY19hdHRha19zcGQ6MTAsXHJcbiAgICAgICAgbWFnaWNfYXR0YWtfc3BkOjEwLFxyXG4gICAgICAgIGNyaXRfY2hhbmNlOjEsXHJcbiAgICAgICAgY3JpdF9yYXRlOjEuMSxcclxuICAgICAgICBhY2N1cmFjeToxMCxcclxuICAgICAgICBldmFzaW9uOjEwLFxyXG4gICAgICAgIGZpcmVfcmVzaXN0YW5jZTowLFxyXG4gICAgICAgIHdvdGVyX3Jlc2lzdGFuY2U6MCxcclxuICAgICAgICB3aW5kX3Jlc2lzdGFuY2U6MCxcclxuICAgICAgICBlYXJ0aF9yZXNpc3RhbmNlOjAsXHJcbiAgICAgICAgaG9seV9yZXNpc3RhbmNlOjAsXHJcbiAgICAgICAgZGFya19yZXNpc3RhbmNlOjAsXHJcbiAgICAgICAgZmlyZV93ZWtuZXNzOjAsXHJcbiAgICAgICAgd290ZXJfd2VrbmVzczowLFxyXG4gICAgICAgIHdpbmRfd2VrbmVzczowLFxyXG4gICAgICAgIGVhcnRoX3dla25lc3M6MCxcclxuICAgICAgICBob2x5X3dla25lc3M6MCxcclxuICAgICAgICBkYXJrX3dla25lc3M6MCxcclxuICAgICAgICBkcm9wTGlzdDonbm90IGFzc2lnbmVkJyxcclxuICAgICAgICBpbnZlbnRvcnk6J25vdCBhc3NpZ25lZCcsXHJcbiAgICAgICAgYWN0aXZlSW52ZW50b3J5UGxheWVyOidub3QgYXNzaWduZWQnLFxyXG4gICAgICAgIHNwZWxsOidub3QgYXNzaWduZWQnLFxyXG4gICAgICAgIHNraWxsIDonbm90IGFzc2lnbmVkJ1xyXG4gICAgfSxcclxuICAgIHBsYXllcjp7fSxcclxuICAgIG1vbnN0ZXJzOnt9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBQZXJzb24sIGNvbmZpZ3MgfVxyXG5cclxuXHJcbi8qXHJcbnR5cGUsbmFtZSxlbmVteSxfY2xhc3MsbHZsLGV4cCxsaXZlLGV4cF9ib29zdCxnb2xkX2Jvb3N0LG1pbmVyYWxfYm9vc3QsZHJvcF9ib29zdCxtYXhfaHAsY3VycmVudF9ocCxyZWdlcmF0aW9uX2hwLG1heF9tcCxjdXJyZW50X21wLHJlZ2VyYXRpb25fbXAscGhpc2ljX2RlZixtYWdpY19kZWYsXHJcbnBoaXNpY19hdHRhayxtYWdpY19hdHRhayxwaGlzaWNfYXR0YWtfc3BkLG1hZ2ljX2F0dGFrX3NwZCxjcml0X2NoYW5jZSxjcml0X3JhdGUsYWNjdXJhY3ksZXZhc2lvbixcclxuZmlyZV9yZXNpc3RhbmNlLHdvdGVyX3Jlc2lzdGFuY2Usd2luZF9yZXNpc3RhbmNlLGVhcnRoX3Jlc2lzdGFuY2UsaG9seV9yZXNpc3RhbmNlLGRhcmtfcmVzaXN0YW5jZSxcclxuZmlyZV93ZWtuZXNzLHdvdGVyX3dla25lc3Msd2luZF93ZWtuZXNzLGVhcnRoX3dla25lc3MsaG9seV93ZWtuZXNzLGRhcmtfd2VrbmVzc1xyXG4qLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtQZXJzb24sY29uZmlnc30gZnJvbSAnLi9zcmMvcGVyc29uJ1xyXG5cclxuLy9sZXQgUGxheWVyID0gbmV3IFBlcnNvbihtZXJnZShjb25maWdzLmJhc2Use3R5cGU6J3BsYXllcicsbmFtZTonZmVyaXVzJyxlbmVteTpmYWxzZSxjbGFzczond29yaW9yJ30pKVxyXG5cclxuLy9sZXQgTW9uc3RlcnMgPSBuZXcgUGVyc29uKG1lcmdlKGNvbmZpZ3MuYmFzZSx7dHlwZTonbW9uc3RlcnMnLG5hbWU6J29yaycsZW5lbXk6dHJ1ZSxjbGFzczond29yaW9yJyxjcml0X2NoYW5jZTo1MH0pKVxyXG5cclxuXHJcblxyXG5cclxubGV0IHdpbj1bMCwwXVxyXG5cclxuZm9yKGxldCBpID0wO2k8MTAwO2krKyl7XHJcbiAgICBiYXR0bGUgKFxyXG4gICAgICAgIG5ldyBQZXJzb24obWVyZ2UoY29uZmlncy5iYXNlLHt0eXBlOidwbGF5ZXInLG5hbWU6J2Zlcml1cycsZW5lbXk6ZmFsc2UsY2xhc3M6J3dvcmlvcid9KSksXHJcbiAgICAgICAgbmV3IFBlcnNvbihtZXJnZShjb25maWdzLmJhc2Use3R5cGU6J21vbnN0ZXJzJyxuYW1lOidvcmsnLGVuZW15OnRydWUsY2xhc3M6J3dvcmlvcicsY3JpdF9jaGFuY2U6MSxjcml0X3JhdGU6Mn0pKVxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWVyZ2UoYSxiKXtcclxuICAgIGxldCBjID0ge307XHJcbiAgICBmb3IgKGxldCBhdHQgaW4gYSkgeyBjW2F0dF0gPSBhW2F0dF07IH1cclxuICAgIGZvciAobGV0IGF0dCBpbiBiKSB7IGNbYXR0XSA9IGJbYXR0XTsgfVxyXG4gICAgcmV0dXJuIGM7XHJcbn1cclxuZnVuY3Rpb24gYmF0dGxlIChfYSxfYil7XHJcbiAgICBsZXQgYSxiXHJcbiAgICBsZXQgc3lzX2JhdHRsZV9vYmogPSB7fVxyXG5pZihnUkkoMCwxKT4wKXtcclxuICAgIGEgPSBfYTtcclxuICAgIGIgPSBfYjtcclxufWVsc2V7XHJcbiAgICBhPV9iXHJcbiAgICBiPV9hXHJcbn1cclxuICAgIHN5c19iYXR0bGVfb2JqLmFfc2kgPSBzZXRJbnRlcnZhbChraWssMTAwMC9hLnBoaXNpY19hdHRha19zcGQsYSxiLHN5c19iYXR0bGVfb2JqKVxyXG4gICAgc3lzX2JhdHRsZV9vYmouYl9zaSA9IHNldEludGVydmFsKGtpaywxMDAwL2IucGhpc2ljX2F0dGFrX3NwZCxiLGEsc3lzX2JhdHRsZV9vYmopXHJcbn1cclxuZnVuY3Rpb24ga2lrKGEsYixzeXMpe1xyXG4gICAgaWYoYi5jdXJyZW50X2hwIDw9IDApe1xyXG4gICAgICAgIGIuYWxpdmU9ZmFsc2U7XHJcbiAgICAgICAgaWYoYi5lbmVteT09dHJ1ZSl7d2luWzBdKyt9XHJcbiAgICAgICAgaWYoYi5lbmVteT09ZmFsc2Upe3dpblsxXSsrfVxyXG4gICAgICAgIGIuaXNEZWFkKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzeXMuYV9zaSk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzeXMuYl9zaSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cod2luKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBhdHRhayA9IHVuZGVmaW5lZFxyXG4gICAgaWYoZ1JJKDAsIDEwMCk8PWEuY3JpdF9jaGFuY2Upe1xyXG4gICAgICAgIGF0dGFrPWEucGhpc2ljX2F0dGFrKmEuY3JpdF9yYXRlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBhdHRhaz1hLnBoaXNpY19hdHRha1xyXG4gICAgfVxyXG5cclxuICAgIGIuY3VycmVudF9ocD1iLmN1cnJlbnRfaHAtKGF0dGFrLWIucGhpc2ljX2RlZilcclxufVxyXG5mdW5jdGlvbiBnUkkobWluLCBtYXgpIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IFxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==