(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SlotMachine", [], factory);
	else if(typeof exports === 'object')
		exports["SlotMachine"] = factory();
	else
		root["SlotMachine"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony export Game */
class Game {
    constructor(saldo) {
        this.saldoCliente = 200;
        this.saldoCasa = 200;
        this.roleta1 = 99;
        this.roleta2 = 99;
        this.roleta3 = 99;
        this.ultimoGanho = 0;
        console.log(saldo);
        this.saldoCliente = saldo;
    }
    debitarCliente(valor) {
        if (this.saldoCliente > 0) {
            if (valor < 0) {
                this.ultimoGanho = valor * -1;
            }
            this.saldoCliente -= valor;
            this.saldoCasa += valor;
            console.log("Cliente:" + String(this.saldoCliente));
            console.log("Casa:" + String(this.saldoCasa));
            return this.saldoCliente;
        }
        else {
            alert("Você não possui saldo !!, bora fazer um PIX ?");
            return this.saldoCliente;
        }
    }
    getSaldoCasa() {
        return this.saldoCasa;
    }
    getSaldoCliente() {
        return this.saldoCliente;
    }
    getUltimoGanho() {
        let valorShow = this.ultimoGanho;
        this.ultimoGanho = 0;
        return valorShow;
    }
    depositaPIX() {
        this.saldoCliente += 100;
    }
    verificaPremio() {
        if (this.roleta1 == this.roleta2 && this.roleta3 == this.roleta2) {
            if (this.roleta3 == 0) {
                return this.debitarCliente(-5);
            }
            if (this.roleta3 == 1) {
                return this.debitarCliente(-10);
            }
            if (this.roleta3 == 2) {
                return this.debitarCliente(-20);
            }
            if (this.roleta3 == 3) {
                return this.debitarCliente(-30);
            }
            if (this.roleta3 == 4) {
                return this.debitarCliente(-50);
            }
            if (this.roleta3 == 5) {
                return this.debitarCliente(-100);
            }
            return 0;
        }
        else if (this.roleta1 == this.roleta2 && this.roleta3 != this.roleta2) {
            if (this.roleta3 == 0) {
                return this.debitarCliente(-1);
            }
            if (this.roleta3 == 1) {
                return this.debitarCliente(-2);
            }
            if (this.roleta3 == 2) {
                return this.debitarCliente(-3);
            }
            if (this.roleta3 == 3) {
                return this.debitarCliente(-4);
            }
            if (this.roleta3 == 4) {
                return this.debitarCliente(-5);
            }
            if (this.roleta3 == 5) {
                return this.debitarCliente(-6);
            }
            return 0;
        }
        else if (this.roleta1 == this.roleta2 && this.roleta3 == 5) {
            return this.debitarCliente(-15);
        }
        else if (this.roleta1 == 5 && this.roleta2 == 5 && this.roleta3 != 5) {
            return this.debitarCliente(-30);
        }
        else if (this.roleta1 == 5 || this.roleta2 == 5 || this.roleta3 == 5) {
            return this.debitarCliente(-1);
        }
        else {
            return this.debitarCliente(10);
        }
    }
}

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=game.js.map