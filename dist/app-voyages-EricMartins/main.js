(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eric\Documents\GitHub\App-voyages\src\main.ts */"zUnb");


/***/ }),

/***/ "1JYN":
/*!************************************************************!*\
  !*** ./src/app/administration/administration.component.ts ***!
  \************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _forfaits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forfaits.service */ "tYIZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _graphique_destinations_graphique_destinations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphique-destinations/graphique-destinations.component */ "KIBf");
/* harmony import */ var _graphique_prix_moyen_prix_total_destination_graphique_prix_moyen_prix_total_destination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphique-prix-moyen-prix-total-destination/graphique-prix-moyen-prix-total-destination.component */ "lALC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function AdministrationComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date de d\u00E9part ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministrationComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forfait_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, forfait_r15.dateDepart, "yyyy-MM-dd"), " ");
} }
function AdministrationComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date d\u2019arriv\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministrationComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forfait_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, forfait_r16.dateRetour, "yyyy-MM-dd"), " ");
} }
function AdministrationComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Destination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministrationComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forfait_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", forfait_r17.destination, " ");
} }
function AdministrationComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nom de l\u2019h\u00F4tel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministrationComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forfait_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", forfait_r18.hotel.nom, " ");
} }
function AdministrationComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Prix ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministrationComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forfait_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", forfait_r19.prix - forfait_r19.rabais, "$ ");
} }
function AdministrationComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["editForfait/", a1]; };
function AdministrationComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdministrationComponent_td_25_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const forfait_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onEdit(forfait_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdministrationComponent_td_25_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const forfait_r20 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onDelete(forfait_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forfait_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, forfait_r20._id));
} }
function AdministrationComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
} }
function AdministrationComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
} }
class AdministrationComponent {
    constructor(forfaitsService, _snackBar) {
        this.forfaitsService = forfaitsService;
        this._snackBar = _snackBar;
        this.columnsToDisplay = ['dateDepart', 'dateRetour', 'destination', 'nomHotel', 'prix', 'actions'];
    }
    ngOnInit() {
        this.getForfaits();
    }
    onSelect(forfait) {
        this.selectedForfait = forfait;
    }
    getForfaits() {
        this.forfaitsService.getForfaits()
            .subscribe(resultat => {
            this.mesForfaits = resultat;
            //console.log(this.mesForfaits);
        });
    }
    onDelete(forfait) {
        this.forfaitsService.deleteForfait(forfait._id)
            .subscribe(result => {
            this.mesForfaits = this.mesForfaits.filter(h => h !== forfait);
            this._snackBar.open("Administration", "Forfait supprimé", {
                duration: 2000,
                verticalPosition: 'top'
            });
        });
    }
    onEdit(forfait) {
        //console.log(forfait.destination, forfait._id);
    }
}
AdministrationComponent.ɵfac = function AdministrationComponent_Factory(t) { return new (t || AdministrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
AdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdministrationComponent, selectors: [["app-administration"]], decls: 38, vars: 5, consts: [["mat-stretch-tabs", "", 2, "margin", "20px", 3, "color", "backgroundColor"], ["label", "Gestion des forfaits"], ["mat-raised-button", "", "routerLink", "nouveauForfait", "color", "primary", 2, "margin", "20px"], [1, "material-icons"], ["mat-table", "", 3, "dataSource"], ["tableForfaits", ""], ["matColumnDef", "dateDepart"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dateRetour"], ["matColumnDef", "destination"], ["matColumnDef", "nomHotel"], ["matColumnDef", "prix"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "boutonsAction", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Tableau de bord"], [2, "margin", "30px", "display", "flex"], [2, "flex", "1", "text-align", "center"], [2, "background-color", "#3F51B5", "color", "white", "margin-right", "10px", "margin-bottom", "25px"], [2, "flex", "1", "text-align", "center", "margin-left", "10px"], [2, "background-color", "#3F51B5", "color", "white", "margin-bottom", "25px"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "boutonsAction"], [2, "display", "flex"], [3, "ngSubmit"], ["matTooltip", "\u00C9diter le forfait", "matTooltipClass", "tooltip-red", "matTooltipPosition", "left", "mat-button", "", 3, "routerLink"], ["mat-button", "", "matTooltipPosition", "right", "matTooltipClass", "tooltip-red", "matTooltip", "Supprimer le forfait"], ["mat-header-row", ""], ["mat-row", ""]], template: function AdministrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ajouter un nouveau forfait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdministrationComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdministrationComponent_td_10_Template, 3, 4, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdministrationComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdministrationComponent_td_13_Template, 3, 4, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdministrationComponent_th_15_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdministrationComponent_td_16_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdministrationComponent_th_18_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdministrationComponent_td_19_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdministrationComponent_th_21_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdministrationComponent_td_22_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdministrationComponent_th_24_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdministrationComponent_td_25_Template, 10, 3, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdministrationComponent_tr_26_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdministrationComponent_tr_27_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nombre de r\u00E9servations par destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-graphique-destinations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Prix moyen pay\u00E9 par passager par destination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-graphique-prix-moyen-prix-total-destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary")("backgroundColor", "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.mesForfaits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _graphique_destinations_graphique_destinations_component__WEBPACK_IMPORTED_MODULE_7__["GraphiqueDestinationsComponent"], _graphique_prix_moyen_prix_total_destination_graphique_prix_moyen_prix_total_destination_component__WEBPACK_IMPORTED_MODULE_8__["GraphiquePrixMoyenPrixTotalDestinationComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n }\r\n\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n  .tooltip-red {\r\n    background: orangered;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6ImFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuXHJcbnRhYmxlIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxudGFibGUgdGQgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRvb2x0aXAtcmVkIHtcclxuICAgIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcclxuICB9XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdministrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-administration',
                templateUrl: './administration.component.html',
                styleUrls: ['./administration.component.css']
            }]
    }], function () { return [{ type: _forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "8Fqc":
/*!*****************************************!*\
  !*** ./src/app/reservations.service.ts ***!
  \*****************************************/
/*! exports provided: ReservationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsService", function() { return ReservationsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class ReservationsService {
    constructor(http) {
        this.http = http;
        this.reservationsUrl = 'https://forfaits-voyages.herokuapp.com/api/reservations';
    }
    getReservations() {
        return this.http.get(this.reservationsUrl);
    }
}
ReservationsService.ɵfac = function ReservationsService_Factory(t) { return new (t || ReservationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ReservationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReservationsService, factory: ReservationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReservationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8fRa":
/*!********************************************************!*\
  !*** ./src/app/mini-forfait/mini-forfait.component.ts ***!
  \********************************************************/
/*! exports provided: MiniForfaitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniForfaitComponent", function() { return MiniForfaitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etoiles/etoiles.component */ "xOlq");





function MiniForfaitComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FORFAIT VEDETTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MiniForfaitComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.forfait.prix, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.forfait.rabais, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.forfait.prix - ctx_r1.forfait.rabais, "$");
} }
function MiniForfaitComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.forfait.prix, "$");
} }
class MiniForfaitComponent {
    constructor() {
    }
    ngOnInit() {
        let date1 = new Date(this.forfait.dateDepart);
        //console.log(date1);
        //console.log('Forfait:', this.forfait );
    }
    duree(dateDeDepart, dateDeRetour) {
        let date1 = new Date(dateDeDepart);
        let date2 = new Date(dateDeRetour);
        var difference = date2.getTime() - date1.getTime();
        var days = Math.ceil(difference / (1000 * 3600 * 24));
        return days;
    }
    date(date) {
        return new Date(date);
    }
}
MiniForfaitComponent.ɵfac = function MiniForfaitComponent_Factory(t) { return new (t || MiniForfaitComponent)(); };
MiniForfaitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiniForfaitComponent, selectors: [["app-mini-forfait"]], inputs: { forfait: "forfait" }, decls: 22, vars: 12, consts: [[1, "cardMiniForfait"], [1, "cardHeader"], [1, "destination"], [1, "destinationVillePays"], [1, "villeDepart"], [4, "ngIf"], [1, "hotel"], [1, "sectionPrix"], ["class", "cardPrix", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "footer"], [1, "etoiles", 3, "etoiles"], [1, "jours"], [1, "forfaitVedette"], [1, "cardPrix"], [1, "prixSansRabais"], [1, "prixRabais"], [1, "prixAvecRabais"], [1, "cardPrix", "prixNormal"]], template: function MiniForfaitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MiniForfaitComponent_span_7_Template, 3, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MiniForfaitComponent_div_11_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MiniForfaitComponent_ng_template_12_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-etoiles", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.forfait.destination, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" de ", ctx.forfait.villeDepart, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forfait.vedette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.forfait.hotel.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forfait.rabais > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("etoiles", ctx.forfait.hotel.nombreEtoiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 9, ctx.forfait.dateDepart, "dd-MM-yyyy"), ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.duree(ctx.forfait.dateDepart, ctx.forfait.dateRetour), " jours");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_3__["EtoilesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".cardMiniForfait[_ngcontent-%COMP%]{\r\n    background-image: linear-gradient(  #00bcd4,lightblue,#b2ebf2); \r\n    display: flex; flex-direction: \r\n    column; \r\n    line-height: normal ;  \r\n    padding:1em; \r\n    margin-left: 0.5em; \r\n    margin-right: 0.5em; \r\n    margin-top: 0.5em;\r\n}\r\n\r\n.cardHeader[_ngcontent-%COMP%]{\r\n    display: flex; \r\n    flex-direction: row; \r\n    justify-content: space-between; \r\n    flex:1\r\n}\r\n\r\n.destination[_ngcontent-%COMP%]{\r\n    display: flex; \r\n    flex-direction: column;\r\n}\r\n\r\n.destinationVillePays[_ngcontent-%COMP%]{\r\n    font-size: 1.2em;\r\n}\r\n\r\n.villeDepart[_ngcontent-%COMP%]{\r\n    display: flex; \r\n    justify-content: flex-end; \r\n    font-size: 0.7em; \r\n    color: gray;\r\n}\r\n\r\n.forfaitVedette[_ngcontent-%COMP%]{\r\n    box-shadow: 0.2em 0.3em #888888;\r\n    background-color: goldenrod;  \r\n    font-weight: lighter; \r\n    border-radius: 0.5em;\r\n    font-size: 1.2em; \r\n    padding: 0.2em 0.5em 0.2em 0.5em;\r\n}\r\n\r\n.hotel[_ngcontent-%COMP%]{\r\n    display: flex; \r\n    flex-direction: row; \r\n    justify-content: center;\r\n    flex:1;\r\n    font-size: 2em;\r\n    color: darkblue;\r\n    margin-bottom: 0.8em; \r\n    margin-top: 0.8em; \r\n    font-weight: bolder;\r\n}\r\n\r\n.sectionPrix[_ngcontent-%COMP%]{\r\n    margin-bottom: 1.5em;\r\n    \r\n}\r\n\r\n.cardPrix[_ngcontent-%COMP%]{\r\n    display:flex; \r\n    justify-content: space-around;\r\n    font-size:1.6em;\r\n    align-items: center;\r\n}\r\n\r\n.prixRabais[_ngcontent-%COMP%]{\r\n    color: green;\r\n}\r\n\r\n.prixSansRabais[_ngcontent-%COMP%]{\r\n    text-decoration: line-through; \r\n    color: red;\r\n}\r\n\r\n.prixAvecRabais[_ngcontent-%COMP%]{\r\n    color: black;\r\n    border: goldenrod 3px solid;\r\n    padding: 1px;\r\n    border-radius: 25%;\r\n}\r\n\r\n.prixNormal[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    display: flex; \r\n    flex-direction: row; \r\n    font-size: 1.2em;\r\n    justify-content: space-between;\r\n    flex:1; \r\n    align-items:flex-end;\r\n}\r\n\r\n.etoiles[_ngcontent-%COMP%]{\r\n    font-size: 1em;\r\n    color: goldenrod\r\n}\r\n\r\n.jours[_ngcontent-%COMP%]{\r\n    color: firebrick;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 375.98px) { \r\n    .mat-card[_ngcontent-%COMP%]{\r\n        font-size: 20%;\r\n    }\r\n }\r\n\r\n\r\n\r\n@media (min-width: 376px) and (max-width: 575.98px) { .mat-card[_ngcontent-%COMP%]{\r\n    font-size: 25%;\r\n} }\r\n\r\n\r\n\r\n@media (min-width: 576px) and (max-width: 767.98px) { \r\n    .mat-card[_ngcontent-%COMP%]{\r\n    font-size: 42%;\r\n} }\r\n\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 991.98px) { \r\n    .mat-card[_ngcontent-%COMP%]{\r\n    font-size: 55%;\r\n} }\r\n\r\n\r\n\r\n@media (min-width: 992px) and (max-width: 1199.98px) { \r\n    .mat-card[_ngcontent-%COMP%]{\r\n    font-size: 75%;\r\n} }\r\n\r\n\r\n\r\n@media (min-width: 1200px) { \r\n    .mat-card[_ngcontent-%COMP%]{\r\n    font-size: 85%;\r\n} }\r\n\r\n\r\n\r\n@media (min-width: 1500px) { \r\n    .mat-card[_ngcontent-%COMP%]{\r\n    font-size: 120%;\r\n} }\r\n\r\n\r\n\r\n@media (min-width: 1700px) { \r\n    .mat-card[_ngcontent-%COMP%]{\r\n    font-size: 130%;\r\n} }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmktZm9yZmFpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOERBQThEO0lBQzlELGFBQWEsRUFBRTtVQUNUO0lBQ04sb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsTUFBTTtJQUNOLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFLQSw0REFBNEQ7O0FBQzVEO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0NBQ0g7O0FBQ0QsbURBQW1EOztBQUNsRCxzREFBc0Q7SUFDbkQsY0FBYztBQUNsQixFQUFFOztBQUVGLG1EQUFtRDs7QUFDbkQ7SUFDSTtJQUNBLGNBQWM7QUFDbEIsRUFBRTs7QUFFRiwwQ0FBMEM7O0FBQzFDO0lBQ0k7SUFDQSxjQUFjO0FBQ2xCLEVBQUU7O0FBRUYsMENBQTBDOztBQUMxQztJQUNJO0lBQ0EsY0FBYztBQUNsQixFQUFFOztBQUVGLHdEQUF3RDs7QUFDeEQ7SUFDSTtJQUNBLGNBQWM7QUFDbEIsRUFBRTs7QUFFRix3REFBd0Q7O0FBQ3hEO0lBQ0k7SUFDQSxlQUFlO0FBQ25CLEVBQUU7O0FBRUYsd0RBQXdEOztBQUN4RDtJQUNJO0lBQ0EsZUFBZTtBQUNuQixFQUFFIiwiZmlsZSI6Im1pbmktZm9yZmFpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRNaW5pRm9yZmFpdHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggICMwMGJjZDQsbGlnaHRibHVlLCNiMmViZjIpOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBcclxuICAgIGNvbHVtbjsgXHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsIDsgIFxyXG4gICAgcGFkZGluZzoxZW07IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtOyBcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07IFxyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbn1cclxuXHJcbi5jYXJkSGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXHJcbiAgICBmbGV4OjFcclxufVxyXG5cclxuLmRlc3RpbmF0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZGVzdGluYXRpb25WaWxsZVBheXN7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4udmlsbGVEZXBhcnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IFxyXG4gICAgZm9udC1zaXplOiAwLjdlbTsgXHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmZvcmZhaXRWZWRldHRle1xyXG4gICAgYm94LXNoYWRvdzogMC4yZW0gMC4zZW0gIzg4ODg4ODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDsgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBmb250LXNpemU6IDEuMmVtOyBcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtIDAuMmVtIDAuNWVtO1xyXG59XHJcblxyXG4uaG90ZWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4OjE7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtOyBcclxuICAgIG1hcmdpbi10b3A6IDAuOGVtOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uUHJpeHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jYXJkUHJpeHtcclxuICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZvbnQtc2l6ZToxLjZlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcml4UmFiYWlze1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucHJpeFNhbnNSYWJhaXN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgXHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucHJpeEF2ZWNSYWJhaXN7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IGdvbGRlbnJvZCAzcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbn1cclxuXHJcbi5wcml4Tm9ybWFse1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4OjE7IFxyXG4gICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5ldG9pbGVze1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogZ29sZGVucm9kXHJcbn1cclxuXHJcbi5qb3Vyc3tcclxuICAgIGNvbG9yOiBmaXJlYnJpY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuICAzNzZweCkqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMzc1Ljk4cHgpIHsgXHJcbiAgICAubWF0LWNhcmR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMCU7XHJcbiAgICB9XHJcbiB9XHJcbi8qIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuIEBtZWRpYSAobWluLXdpZHRoOiAzNzZweCkgYW5kIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7IC5tYXQtY2FyZHtcclxuICAgIGZvbnQtc2l6ZTogMjUlO1xyXG59IH1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHsgXHJcbiAgICAubWF0LWNhcmR7XHJcbiAgICBmb250LXNpemU6IDQyJTtcclxufSB9XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7IFxyXG4gICAgLm1hdC1jYXJke1xyXG4gICAgZm9udC1zaXplOiA1NSU7XHJcbn0gfVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHsgXHJcbiAgICAubWF0LWNhcmR7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxufSB9XHJcblxyXG4vKiAgRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyBcclxuICAgIC5tYXQtY2FyZHtcclxuICAgIGZvbnQtc2l6ZTogODUlO1xyXG59IH1cclxuXHJcbi8qICBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7IFxyXG4gICAgLm1hdC1jYXJke1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG59IH1cclxuXHJcbi8qICBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTcwMHB4KSB7IFxyXG4gICAgLm1hdC1jYXJke1xyXG4gICAgZm9udC1zaXplOiAxMzAlO1xyXG59IH1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniForfaitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mini-forfait',
                templateUrl: './mini-forfait.component.html',
                styleUrls: ['./mini-forfait.component.css']
            }]
    }], function () { return []; }, { forfait: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AZKv":
/*!********************************************************************!*\
  !*** ./src/app/formulaire-forfait/formulaire-forfait.component.ts ***!
  \********************************************************************/
/*! exports provided: FormulaireForfaitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireForfaitComponent", function() { return FormulaireForfaitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _forfaits_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forfaits.service */ "tYIZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../etoiles/etoiles.component */ "xOlq");
/* harmony import */ var _caracteristiques_caracteristiques_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../caracteristiques/caracteristiques.component */ "LDQS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function FormulaireForfaitComponent_form_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Creer un nouveau forfait de voyage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ajouter Forfait");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00C9diter le forfait de voyage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enregistrer Forfait");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La destination est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obligatoire!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const destination_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", destination_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", destination_r28, " ");
} }
function FormulaireForfaitComponent_form_6_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La ville de d\u00E9part est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obligatoire!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ville_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ville_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ville_r29, " ");
} }
function FormulaireForfaitComponent_form_6_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La date de d\u00E9part est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obligatoire!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " La date de retour est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obligatoire!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le prix du forfait est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obligatoire!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le nom de l'h\u00F4tel est ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obligatoire!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le nom de l'h\u00F4tel doit contenir au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_mat_error_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Les coordonn\u00E9es de l'hotel sont ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "obligatoires!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormulaireForfaitComponent_form_6_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Les coordonn\u00E9s de l'h\u00F4tel doivent contenir au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function FormulaireForfaitComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormulaireForfaitComponent_form_6_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.id === null ? ctx_r30.onAdd(_r1) : ctx_r30.onEdit(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormulaireForfaitComponent_form_6_div_2_Template, 7, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormulaireForfaitComponent_form_6_ng_template_3_Template, 7, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "D\u00E9tails sur le forfait");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.newForfait.destination = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormulaireForfaitComponent_form_6_mat_error_12_Template, 4, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-autocomplete", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormulaireForfaitComponent_form_6_mat_option_15_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.newForfait.villeDepart = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormulaireForfaitComponent_form_6_mat_error_20_Template, 4, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-autocomplete", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FormulaireForfaitComponent_form_6_mat_option_23_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date de d\u00E9part");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.newForfait.dateDepart = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker-toggle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-datepicker", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, FormulaireForfaitComponent_form_6_mat_error_34_Template, 4, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Date de retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.newForfait.dateRetour = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-datepicker-toggle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-datepicker", 24, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, FormulaireForfaitComponent_form_6_mat_error_43_Template, 4, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_input_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.newForfait.prix = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, FormulaireForfaitComponent_form_6_mat_error_50_Template, 4, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Rabais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_input_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.newForfait.rabais = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_mat_checkbox_ngModelChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.newForfait.vedette = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Forfait Vedette");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "D\u00E9tails sur l'h\u00F4tel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Nom de l\u2019h\u00F4tel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_input_ngModelChange_66_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.newForfait.hotel.nom = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, FormulaireForfaitComponent_form_6_mat_error_68_Template, 4, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, FormulaireForfaitComponent_form_6_mat_error_69_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u00C9toiles: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-slider", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_mat_slider_ngModelChange_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.newForfait.hotel.nombreEtoiles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-etoiles", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Coordonn\u00E9es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_input_ngModelChange_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.newForfait.hotel.coordonnees = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, FormulaireForfaitComponent_form_6_mat_error_81_Template, 4, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, FormulaireForfaitComponent_form_6_mat_error_82_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Nombre de chambres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireForfaitComponent_form_6_Template_input_ngModelChange_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.newForfait.hotel.nombreChambres = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "app-caracteristiques", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("caractChange", function FormulaireForfaitComponent_form_6_Template_app_caracteristiques_caractChange_87_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.caracteristiques = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.id === null)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r7)("ngModel", ctx_r0.newForfait.destination)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 45, ctx_r0.filteredDestinations));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r11)("ngModel", ctx_r0.newForfait.villeDepart)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 47, ctx_r0.filteredVillesDepart));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r14)("ngModel", ctx_r0.newForfait.dateDepart)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r17)("ngModel", ctx_r0.newForfait.dateRetour)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newForfait.prix)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newForfait.rabais)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newForfait.vedette)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newForfait.hotel.nom)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newForfait.hotel.nombreEtoiles)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c0))("displayWith", ctx_r0.formatLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("etoiles", ctx_r0.newForfait.hotel.nombreEtoiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newForfait.hotel.coordonnees)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r25.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newForfait.hotel.nombreChambres)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("caract", ctx_r0.caracteristiques)("caracteristiquesEdit", ctx_r0.newForfait.hotel.caracteristiques);
} }
const _c1 = function (a0, a1) { return { "vedette": a0, "pasVedette": a1 }; };
/**
 * @title Highlight the first autocomplete option
 */
class FormulaireForfaitComponent {
    constructor(forfaitsService, route, router, _snackBar) {
        this.forfaitsService = forfaitsService;
        this.route = route;
        this.router = router;
        this._snackBar = _snackBar;
        this.nbEtoiles = 2;
        this.destinationsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.villesDepartControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.villesDepart = ['Montréal', 'Toronto', 'Québec', 'Ottawa'];
        this.destinations = ['Méxique', 'Cuba', 'République dominicaine', 'Costa Rica', 'Guadaloupe', 'Haïti', 'Jamaïque', 'Martinique', 'Honduras'];
    }
    ngOnInit() {
        //console.log(this.newForfait);
        this.id = this.route.snapshot.paramMap.get('id');
        //console.log(this.id);
        if (this.id !== null) {
            this.forfaitsService.getForfait(this.id).subscribe(result => {
                this.newForfait = result;
                //console.log(this.newForfait);
            });
        }
        else {
            this.newForfait = {
                da: "1996489",
                hotel: {
                    caracteristiques: []
                }
            };
        }
        this.filteredDestinations = this.destinationsControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this.filterDestinations(value)));
        this.filteredVillesDepart = this.villesDepartControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this.filterVillesDepart(value)));
    }
    onAdd(forfaitFormAjout) {
        this.getCarateristiques();
        this.newForfait.dateDepart = this.newForfait.dateDepart.toLocaleDateString('en-CA');
        this.newForfait.dateRetour = this.newForfait.dateRetour.toLocaleDateString('en-CA');
        this.forfaitsService.addForfait(this.newForfait)
            .subscribe(forfait => {
            forfaitFormAjout.resetForm();
            this.router.navigate(['/admin']);
            this._snackBar.open("Administration", "Forfait ajouté", {
                duration: 2000,
                verticalPosition: 'top'
            });
        });
    }
    onEdit(forfaitFormAjout) {
        //console.log('Edit');
        //console.log(this.caracteristiques);
        if (this.caracteristiques) {
            this.newForfait.hotel.caracteristiques = [];
            this.getCarateristiques();
        }
        this.forfaitsService.updateForfait(this.newForfait)
            .subscribe(() => {
            this.newForfait = null;
            this.router.navigate(['/admin']);
            this._snackBar.open("Administration", "Forfait édité", {
                duration: 2000,
                verticalPosition: 'top'
            });
        });
    }
    filterDestinations(value) {
        const filterValue = value.toLowerCase();
        return this.destinations.filter(destination => destination.toLowerCase().includes(filterValue));
    }
    filterVillesDepart(value) {
        const filterValue = value.toLowerCase();
        return this.villesDepart.filter(ville => ville.toLowerCase().includes(filterValue));
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    getCarateristiques() {
        this.caracteristiques.map(item => {
            if (item.selected)
                this.newForfait.hotel.caracteristiques.push(item.name);
        });
    }
}
FormulaireForfaitComponent.ɵfac = function FormulaireForfaitComponent_Factory(t) { return new (t || FormulaireForfaitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forfaits_service__WEBPACK_IMPORTED_MODULE_3__["ForfaitsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
FormulaireForfaitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormulaireForfaitComponent, selectors: [["app-formulaire-forfait"]], inputs: { caracteristiques: "caracteristiques" }, decls: 7, vars: 5, consts: [[2, "padding", "15px", "padding-bottom", "0px", "font-size", "20px"], [1, "material-icons"], ["routerLink", "/admin", "color", "primary"], [3, "ngClass"], ["class", "example-form", "id", "forfaitFormAjout", 3, "ngSubmit", 4, "ngIf"], ["id", "forfaitFormAjout", 1, "example-form", 3, "ngSubmit"], ["forfaitFormAjout", "ngForm"], ["style", "display: flex; justify-content: space-between;", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [2, "display", "flex"], [2, "flex", "1"], [1, "example-full-width"], ["type", "text", "name", "destination", "required", "", "placeholder", "Destination", "aria-label", "Number", "matInput", "", 3, "matAutocomplete", "ngModel", "ngModelOptions", "ngModelChange"], ["destination", "ngModel"], [4, "ngIf"], ["auto1", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "villeDepart", "required", "", "placeholder", "Ville de d\u00E9part", "aria-label", "Number", "matInput", "", 3, "matAutocomplete", "ngModel", "ngModelOptions", "ngModelChange"], ["villeDepart", "ngModel"], ["auto2", "matAutocomplete"], [2, "display", "flex", "width", "90%"], ["matInput", "", "required", "", "name", "dateDepart", 3, "matDatepicker", "ngModel", "ngModelOptions", "ngModelChange"], ["dateDepart", "ngModel"], ["matSuffix", "", 3, "for"], ["required", ""], ["pickerDepart", ""], [1, "example-full-width", 2, "margin-left", "10px"], ["matInput", "", "required", "", "name", "dateRetour", 3, "matDatepicker", "ngModel", "ngModelOptions", "ngModelChange"], ["dateRetour", "ngModel"], ["pickerRetour", ""], ["matInput", "", "required", "", "type", "number", "min", "1", "placeholder", "Prix...", "name", "prix", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["prix", "ngModel"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Rabais...", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "display", "flex", "margin-top", "20px"], [1, "example-margin", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "width", "75%"], ["type", "text", "name", "nom", "matInput", "", "minlength", "2", "required", "", "placeholder", "Nom de l\u2019h\u00F4tel...", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nom", "ngModel"], [2, "display", "flex", "align-items", "center"], ["name", "etoiles", "required", "", "thumbLabel", "", "tickInterval", "1", "min", "1", "max", "6", 3, "ngModel", "ngModelOptions", "displayWith", "ngModelChange"], ["etoiles", "ngModel"], [2, "color", "goldenrod", 3, "etoiles"], ["matInput", "", "required", "", "name", "coordonnees", "minlength", "2", "placeholder", "Adresse...", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["coordonnees", "ngModel"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Nombre de chambres...", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "caract", "caracteristiquesEdit", "caractChange"], [2, "display", "flex", "justify-content", "space-between"], [2, "text-transform", "uppercase", "background-color", "#3F51B5", "color", "beige", "padding", "5px"], ["color", "warn", "mat-raised-button", "", "type", "submit"], ["color", "accent", "mat-raised-button", "", "type", "submit"], [3, "value"]], template: function FormulaireForfaitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "subdirectory_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Retourner \u00E0 la liste de forfaits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormulaireForfaitComponent_form_6_Template, 88, 60, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.newForfait.vedette, !ctx.newForfait.vedette));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newForfait !== undefined);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSlider"], _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_13__["EtoilesComponent"], _caracteristiques_caracteristiques_component__WEBPACK_IMPORTED_MODULE_14__["CaracteristiquesComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".example-full-width[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n\r\n  .vedette[_ngcontent-%COMP%]{\r\n    padding:20px;\r\n    margin:20px; \r\n    border: 3px solid goldenrod;\r\n  }\r\n\r\n  .pasVedette[_ngcontent-%COMP%]{\r\n    padding:20px;\r\n    margin:20px; \r\n    border: 3px solid black;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm11bGFpcmUtZm9yZmFpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6ImZvcm11bGFpcmUtZm9yZmFpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLnZlZGV0dGV7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBtYXJnaW46MjBweDsgXHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBnb2xkZW5yb2Q7XHJcbiAgfVxyXG5cclxuICAucGFzVmVkZXR0ZXtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIG1hcmdpbjoyMHB4OyBcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormulaireForfaitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formulaire-forfait',
                templateUrl: './formulaire-forfait.component.html',
                styleUrls: ['./formulaire-forfait.component.css']
            }]
    }], function () { return [{ type: _forfaits_service__WEBPACK_IMPORTED_MODULE_3__["ForfaitsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, { caracteristiques: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Buut":
/*!**************************************************************!*\
  !*** ./src/app/forfait-complet/forfait-complet.component.ts ***!
  \**************************************************************/
/*! exports provided: ForfaitCompletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForfaitCompletComponent", function() { return ForfaitCompletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etoiles/etoiles.component */ "xOlq");
/* harmony import */ var _forfait_vedette_forfait_vedette_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forfait-vedette/forfait-vedette.component */ "U4DW");







function ForfaitCompletComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-forfait-vedette");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForfaitCompletComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00B7 ", item_r5, " ");
} }
function ForfaitCompletComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.forfait.prix, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.forfait.rabais, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.forfait.prix - ctx_r2.forfait.rabais, "$");
} }
function ForfaitCompletComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.forfait.prix, "$");
} }
const _c0 = function (a0, a1) { return { "forfaitComplet": a0, "forfaitCompletVedette": a1 }; };
class ForfaitCompletComponent {
    constructor() {
        this.faPlaneDeparture = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlaneDeparture"];
        this.faPlaneArrival = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlaneArrival"];
    }
    ngOnInit() {
        //console.log('Forfait:', this.forfait );
    }
    duree(dateDeDepart, dateDeRetour) {
        let date1 = new Date(dateDeDepart);
        let date2 = new Date(dateDeRetour);
        var difference = date2.getTime() - date1.getTime();
        var days = Math.ceil(difference / (1000 * 3600 * 24));
        return days;
    }
}
ForfaitCompletComponent.ɵfac = function ForfaitCompletComponent_Factory(t) { return new (t || ForfaitCompletComponent)(); };
ForfaitCompletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForfaitCompletComponent, selectors: [["app-forfait-complet"]], inputs: { forfait: "forfait" }, decls: 45, vars: 24, consts: [[3, "ngClass"], [2, "display", "flex", "justify-content", "space-between"], [2, "display", "flex", "width", "80%"], ["src", "https://milesopedia.com/wp-content/uploads/2019/05/IMG_0661.jpg", "alt", "", "width", "500px", "height", "360px", 2, "border-right", "2px solid gray", "border-top-left-radius", "23px", "border-bottom-left-radius", "23px"], [2, "display", "flex", "flex-direction", "column", "margin", "10px", "justify-content", "space-between", "width", "100%"], [2, "display", "flex", "flex-direction", "column", "align-items", "flex-end"], [2, "font-size", "1.5em", "font-weight", "lighter"], [2, "font-size", "0.9em", "font-weight", "bold"], [4, "ngIf"], [2, "margin-top", "0.6em", "display", "flex", "flex-direction", "row", "align-items", "center"], [2, "color", "rgb(69, 69, 238)", "font-size", "3em", "line-height", "normal"], [2, "font-size", "2em", "margin-left", "25px", "color", "goldenrod", 3, "etoiles"], [2, "font-size", "0.9em"], [2, "font-size", "1em", "margin-top", "10px"], [4, "ngFor", "ngForOf"], [2, "font-size", "1em"], [2, "display", "flex", "flex-direction", "column", "justify-content", "space-between"], [2, "display", "flex", "flex-direction", "column", "align-items", "flex-end", "margin", "10px"], ["style", "font-size: 2em; text-align: right; display: flex; flex-direction: column ;", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [2, "display", "flex", "flex-direction", "column", "margin", "0.8em", "align-items", "flex-end"], [1, "jours"], [2, "font-size", "2em", "text-align", "right", "display", "flex", "flex-direction", "column"], [2, "text-decoration", "line-through", "color", "red", "font-size", "60%"], [2, "color", "green", "font-size", "60%"], [2, "font-size", "2em"]], template: function ForfaitCompletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForfaitCompletComponent_div_11_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-etoiles", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ForfaitCompletComponent_span_20_Template, 2, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00B7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ForfaitCompletComponent_div_28_Template, 7, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ForfaitCompletComponent_ng_template_29_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "tx et frais incl. par adulte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " au ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, !ctx.forfait.vedette, ctx.forfait.vedette));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.forfait.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" de ", ctx.forfait.villeDepart, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forfait.vedette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.forfait.hotel.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("etoiles", ctx.forfait.hotel.nombreEtoiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.forfait.hotel.nombreChambres, " chambres)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.forfait.hotel.caracteristiques);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.forfait.hotel.coordonnees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.duree(ctx.forfait.dateDepart, ctx.forfait.dateRetour), " jours \u00E0 partir de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forfait.rabais > 0)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.duree(ctx.forfait.dateDepart, ctx.forfait.dateRetour), " jours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 15, ctx.forfait.dateDepart, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 18, ctx.forfait.dateRetour, "yyyy-MM-dd"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_3__["EtoilesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _forfait_vedette_forfait_vedette_component__WEBPACK_IMPORTED_MODULE_4__["ForfaitVedetteComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".forfaitComplet[_ngcontent-%COMP%]{\r\n    line-height: normal;\r\n    border: 2px solid gray; \r\n    line-height: normal;\r\n    background-image: linear-gradient( #00bcd4,lightblue,#D2AA6D); \r\n    border-radius: 25px;\r\n    margin: 5px;\r\n}\r\n\r\n\r\n\r\n.forfaitCompletVedette[_ngcontent-%COMP%] {\r\n    line-height: normal;\r\n    border: 2px solid #14a5ff;\r\n    background-image: linear-gradient( #00bcd4,lightblue,#D2AA6D); \r\n    border-radius: 25px;\r\n    box-shadow: 0 0 15px #22cef9, 0 0 10px #22cef9, 0 0 4px #22cef9, 0 0 2px #22cef9;\r\n    z-index: -9990;\r\n    margin: 5px;\r\n  }\r\n\r\n\r\n\r\n.jours[_ngcontent-%COMP%]{\r\n    color: firebrick;\r\n    font-weight: bold;\r\n    font-size: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmZhaXQtY29tcGxldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkRBQTZEO0lBQzdELG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsNkRBQTZEO0lBQzdELG1CQUFtQjtJQUNuQixnRkFBZ0Y7SUFDaEYsY0FBYztJQUNkLFdBQVc7RUFDYjs7OztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6ImZvcmZhaXQtY29tcGxldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmZhaXRDb21wbGV0e1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7IFxyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggIzAwYmNkNCxsaWdodGJsdWUsI0QyQUE2RCk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5mb3JmYWl0Q29tcGxldFZlZGV0dGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxNGE1ZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICMwMGJjZDQsbGlnaHRibHVlLCNEMkFBNkQpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMjJjZWY5LCAwIDAgMTBweCAjMjJjZWY5LCAwIDAgNHB4ICMyMmNlZjksIDAgMCAycHggIzIyY2VmOTtcclxuICAgIHotaW5kZXg6IC05OTkwO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuam91cnN7XHJcbiAgICBjb2xvcjogZmlyZWJyaWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForfaitCompletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forfait-complet',
                templateUrl: './forfait-complet.component.html',
                styleUrls: ['./forfait-complet.component.css']
            }]
    }], function () { return []; }, { forfait: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "EWKk":
/*!*******************************************!*\
  !*** ./src/app/recherche-forfait.pipe.ts ***!
  \*******************************************/
/*! exports provided: RechercheForfaitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheForfaitPipe", function() { return RechercheForfaitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RechercheForfaitPipe {
    transform(forfaits, recherche) {
        let caracteristiques = [];
        recherche.caracteristiques.map(item => {
            if (item.selected === true)
                caracteristiques.push(item.name);
        });
        let forfaitsFilter = forfaits;
        if (recherche.nbEtoiles === null && recherche.duree === null && recherche.dateDepart === null && recherche.caracteristiques.length === 0) {
            return forfaits;
        }
        if (recherche.nbEtoiles !== null) {
            forfaitsFilter = forfaitsFilter.filter(forfait => forfait.hotel.nombreEtoiles === recherche.nbEtoiles);
        }
        if (recherche.duree !== null) {
            forfaitsFilter = forfaitsFilter.filter(forfait => this.duree(forfait.dateDepart, forfait.dateRetour) === recherche.duree);
        }
        if (recherche.dateDepart !== null) {
            forfaitsFilter = forfaitsFilter.filter(forfait => new Date(forfait.dateDepart).toISOString().slice(0, 10) === new Date(recherche.dateDepart).toISOString().slice(0, 10));
        }
        if (caracteristiques.length > 0) {
            caracteristiques.map(item => {
                forfaitsFilter = forfaitsFilter.filter(forfait => forfait.hotel.caracteristiques.includes(item));
            });
        }
        //console.log(forfaitsFilter);
        return forfaitsFilter;
    }
    duree(dateDeDepart, dateDeRetour) {
        let date1 = new Date(dateDeDepart);
        let date2 = new Date(dateDeRetour);
        var difference = date2.getTime() - date1.getTime();
        var days = Math.ceil(difference / (1000 * 3600 * 24));
        return days;
    }
}
RechercheForfaitPipe.ɵfac = function RechercheForfaitPipe_Factory(t) { return new (t || RechercheForfaitPipe)(); };
RechercheForfaitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rechercheForfait", type: RechercheForfaitPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RechercheForfaitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'rechercheForfait'
            }]
    }], null, null); })();


/***/ }),

/***/ "I2e7":
/*!**********************************************!*\
  !*** ./src/app/accueil/accueil.component.ts ***!
  \**********************************************/
/*! exports provided: AccueilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilComponent", function() { return AccueilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _forfaits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forfaits.service */ "tYIZ");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _formulaire_recherche_formulaire_recherche_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formulaire-recherche/formulaire-recherche.component */ "eLiL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _liste_forfaits_liste_forfaits_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../liste-forfaits/liste-forfaits.component */ "i7eW");
/* harmony import */ var _mini_forfait_mini_forfait_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mini-forfait/mini-forfait.component */ "8fRa");










function AccueilComponent_span_3_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mini-forfait", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forfait", item_r2);
} }
function AccueilComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccueilComponent_span_3_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.vedette);
} }
class AccueilComponent {
    constructor(forfaitsService) {
        this.forfaitsService = forfaitsService;
        this.recherche = {
            dateDepart: null,
            duree: null,
            caracteristiques: [],
            nbEtoiles: null
        };
    }
    ngOnInit() {
        this.getForfaits();
    }
    getForfaits() {
        this.forfaitsService.getForfaits()
            .subscribe(resultat => {
            this.mesForfaits = resultat;
        });
    }
}
AccueilComponent.ɵfac = function AccueilComponent_Factory(t) { return new (t || AccueilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"])); };
AccueilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccueilComponent, selectors: [["app-accueil"]], inputs: { recherche: "recherche", closeDrawer: "closeDrawer" }, decls: 11, vars: 7, consts: [["autosize", "", 1, "example-container"], ["cols", "3", "rowHeight", "2:1"], [4, "ngFor", "ngForOf"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [3, "recherche", "rechercheChange", "closeDrawer"], ["type", "button", "mat-button", "", "mat-raised-button", "", "color", "primary", 1, "my-class", 3, "click"], [3, "recherche", "rechercheChange"], [4, "ngIf"], [2, "width", "100%", 3, "forfait"]], template: function AccueilComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccueilComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-drawer", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-formulaire-recherche", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rechercheChange", function AccueilComponent_Template_app_formulaire_recherche_rechercheChange_7_listener($event) { return ctx.recherche = $event; })("closeDrawer", function AccueilComponent_Template_app_formulaire_recherche_closeDrawer_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccueilComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Rechercher forfait ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-liste-forfaits", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rechercheChange", function AccueilComponent_Template_app_liste_forfaits_rechercheChange_10_listener($event) { return ctx.recherche = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 3, ctx.mesForfaits, 0, 7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recherche", ctx.recherche);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recherche", ctx.recherche);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _formulaire_recherche_formulaire_recherche_component__WEBPACK_IMPORTED_MODULE_5__["FormulaireRechercheComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _liste_forfaits_liste_forfaits_component__WEBPACK_IMPORTED_MODULE_7__["ListeForfaitsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _mini_forfait_mini_forfait_component__WEBPACK_IMPORTED_MODULE_8__["MiniForfaitComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".my-class[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n    min-width: unset;\r\n    margin-left: 1%;\r\n    margin-right: 1%;\r\n    margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY3VlaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYWNjdWVpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNsYXNze1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1pbi13aWR0aDogdW5zZXQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccueilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accueil',
                templateUrl: './accueil.component.html',
                styleUrls: ['./accueil.component.css']
            }]
    }], function () { return [{ type: _forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"] }]; }, { recherche: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeDrawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IT/S":
/*!********************************************!*\
  !*** ./src/app/entete/entete.component.ts ***!
  \********************************************/
/*! exports provided: EnteteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnteteComponent", function() { return EnteteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class EnteteComponent {
    constructor() { }
    ngOnInit() {
    }
}
EnteteComponent.ɵfac = function EnteteComponent_Factory(t) { return new (t || EnteteComponent)(); };
EnteteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnteteComponent, selectors: [["app-entete"]], decls: 20, vars: 0, consts: [[2, "color", "white", "height", "15vh", "font-size", "3em", "background-color", "orangered"], ["routerLink", "accueil", 1, "logo", 2, "text-decoration", "none", "color", "white", "border", "2px solid white", "padding", "2px"], [2, "border", "2px solid white", "padding", "15px"], [2, "font-size", "95%", "font-style", "oblique"], [1, "space"], ["routerLinkActive", "active-link", "mat-button", "", "routerLink", "accueil", 2, "font-size", "55%"], ["routerLinkActive", "active-link", "mat-button", "", "routerLink", "forfaitsCuba", 2, "font-size", "55%"], ["routerLinkActive", "active-link", "mat-button", "", "routerLink", "forfaitsMexique", 2, "font-size", "55%"], ["routerLinkActive", "active-link", "mat-button", "", "routerLink", "apropos", 2, "font-size", "55%"], ["routerLinkActive", "active-link", "mat-raised-button", "", "routerLink", "admin", "color", "primary", 2, "font-size", "55%"]], template: function EnteteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "flight_takeoff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " APP VOYAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "flight_land");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Forfaits Cuba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forfaits M\u00E9xique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00C0 propos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".space[_ngcontent-%COMP%]{\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    transform: scale(2);\r\n    margin-right: 25px;\r\n    margin-left: 25px;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    text-decoration: underline;\r\n    transition-timing-function: ease;\r\n    transition: 0.4s;\r\n\r\n}\r\n\r\n.active-link[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover {\r\n    background-color: white;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%] {\r\n    background-color: orangered;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJlbnRldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcblxyXG59XHJcblxyXG4uYWN0aXZlLWxpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbn1cclxuXHJcbi5sb2dvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nbzpob3ZlciBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnteteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-entete',
                templateUrl: './entete.component.html',
                styleUrls: ['./entete.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KIBf":
/*!****************************************************************************!*\
  !*** ./src/app/graphique-destinations/graphique-destinations.component.ts ***!
  \****************************************************************************/
/*! exports provided: GraphiqueDestinationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphiqueDestinationsComponent", function() { return GraphiqueDestinationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _reservations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reservations.service */ "8Fqc");





class GraphiqueDestinationsComponent {
    constructor(reservationsService) {
        this.reservationsService = reservationsService;
        this.labels = [];
        this.data = [];
        this.pieChartOptions = {
            responsive: true,
        };
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        this.pieChartColors = [
            {
                backgroundColor: []
            },
        ];
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_1__["monkeyPatchChartJsTooltip"])();
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_1__["monkeyPatchChartJsLegend"])();
    }
    ngOnInit() {
        this.getReservations();
    }
    getReservations() {
        this.reservationsService.getReservations()
            .subscribe(resultat => {
            this.reservations = resultat;
            //console.log(this.reservations);
            this.getLabels();
            this.getValues();
            this.addValues();
        });
    }
    getLabels() {
        this.reservations.map(reservation => {
            if (!this.labels.includes(reservation.destination)) {
                this.labels.push(reservation.destination);
            }
        });
        //console.log(this.labels);
    }
    getValues() {
        this.data = new Array(this.labels.length).fill(0);
        this.reservations.map(reservation => {
            if (this.labels.includes(reservation.destination)) {
                let index = this.labels.indexOf(reservation.destination);
                this.data[index]++;
            }
        });
        //console.log(this.data);
    }
    addValues() {
        for (let i = 0; i < this.labels.length; i++) {
            this.pieChartLabels.push(this.labels[i]);
            this.pieChartData.push(this.data[i]);
            this.pieChartColors[0].backgroundColor.push(this.getRandomColor());
        }
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
GraphiqueDestinationsComponent.ɵfac = function GraphiqueDestinationsComponent_Factory(t) { return new (t || GraphiqueDestinationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reservations_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsService"])); };
GraphiqueDestinationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphiqueDestinationsComponent, selectors: [["app-graphique-destinations"]], decls: 2, vars: 7, consts: [[2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType", "options", "plugins", "legend", "colors"]], template: function GraphiqueDestinationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("options", ctx.pieChartOptions)("plugins", ctx.pieChartPlugins)("legend", ctx.pieChartLegend)("colors", ctx.pieChartColors);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaGlxdWUtZGVzdGluYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphiqueDestinationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graphique-destinations',
                templateUrl: './graphique-destinations.component.html',
                styleUrls: ['./graphique-destinations.component.css']
            }]
    }], function () { return [{ type: _reservations_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsService"] }]; }, null); })();


/***/ }),

/***/ "LDQS":
/*!****************************************************************!*\
  !*** ./src/app/caracteristiques/caracteristiques.component.ts ***!
  \****************************************************************/
/*! exports provided: CaracteristiquesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristiquesComponent", function() { return CaracteristiquesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function CaracteristiquesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CaracteristiquesComponent_div_4_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const caracteristique_r1 = ctx.$implicit; return caracteristique_r1.selected = $event; })("ngModelChange", function CaracteristiquesComponent_div_4_Template_mat_checkbox_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const caracteristique_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.change(caracteristique_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const caracteristique_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", caracteristique_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](caracteristique_r1.name);
} }
class CaracteristiquesComponent {
    constructor() {
        this.caractChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.caracteristiques = [
            { name: 'Face à la plage', selected: false, id: 1 },
            { name: "Dans un lieu situé à proximité d'un parc/lieu naturel", selected: false, id: 2 },
            { name: 'Ascenseur', selected: false, id: 3 },
            { name: 'Miniclub', selected: false, id: 4 },
            { name: 'Mariages', selected: false, id: 5 },
            { name: 'Plage ', selected: false, id: 6 },
            { name: 'Parque aquiatique', selected: false, id: 7 },
            { name: "Salle d'exercice", selected: false, id: 8 },
            { name: 'Collations 24 h', selected: false, id: 9 },
            { name: 'Wi-Fi : dans tout le complexe', selected: false, id: 10 },
            { name: 'Coffret de sûreté', selected: false, id: 11 },
            { name: 'Spa ($)', selected: false, id: 12 },
            { name: "Près d'un lieu culturel", selected: false, id: 13 },
        ];
    }
    change(nouvelleValeur) {
        this.caractChange.emit(this.caracteristiques);
    }
    ngOnInit() {
        if (this.caracteristiquesEdit !== undefined) {
            this.caracteristiques.map(item => {
                if (this.caracteristiquesEdit.includes(item.name)) {
                    item.selected = true;
                }
            });
        }
    }
}
CaracteristiquesComponent.ɵfac = function CaracteristiquesComponent_Factory(t) { return new (t || CaracteristiquesComponent)(); };
CaracteristiquesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaracteristiquesComponent, selectors: [["app-caracteristiques"]], inputs: { direction: "direction", caract: "caract", caracteristiquesEdit: "caracteristiquesEdit" }, outputs: { caractChange: "caractChange" }, decls: 5, vars: 3, consts: [[2, "display", "flex", "justify-content", "flex-start", "flex-wrap", "wrap"], ["style", "margin: 5px;", 4, "ngFor", "ngForOf"], [2, "margin", "5px"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function CaracteristiquesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Caract\u00E9ristiques:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CaracteristiquesComponent_div_4_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-direction", ctx.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.caracteristiques);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJhY3RlcmlzdGlxdWVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaracteristiquesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-caracteristiques',
                templateUrl: './caracteristiques.component.html',
                styleUrls: ['./caracteristiques.component.css']
            }]
    }], function () { return []; }, { direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], caract: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], caractChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], caracteristiquesEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LshM":
/*!********************************************************!*\
  !*** ./src/app/pied-de-page/pied-de-page.component.ts ***!
  \********************************************************/
/*! exports provided: PiedDePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedDePageComponent", function() { return PiedDePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");



class PiedDePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PiedDePageComponent.ɵfac = function PiedDePageComponent_Factory(t) { return new (t || PiedDePageComponent)(); };
PiedDePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PiedDePageComponent, selectors: [["app-pied-de-page"]], decls: 3, vars: 0, consts: [[2, "color", "white", "height", "10vh", "font-size", "3em", "background-color", "orangered", "display", "flex", "justify-content", "center"], [2, "font-size", "50%"]], template: function PiedDePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A9 Eric Martins 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWVkLWRlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PiedDePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pied-de-page',
                templateUrl: './pied-de-page.component.html',
                styleUrls: ['./pied-de-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entete_entete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entete/entete.component */ "IT/S");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pied_de_page_pied_de_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pied-de-page/pied-de-page.component */ "LshM");





class AppComponent {
    constructor() {
        this.title = 'app-voyages-EricMartins';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-entete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pied-de-page");
    } }, directives: [_entete_entete_component__WEBPACK_IMPORTED_MODULE_1__["EnteteComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _pied_de_page_pied_de_page_component__WEBPACK_IMPORTED_MODULE_3__["PiedDePageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "U4DW":
/*!**************************************************************!*\
  !*** ./src/app/forfait-vedette/forfait-vedette.component.ts ***!
  \**************************************************************/
/*! exports provided: ForfaitVedetteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForfaitVedetteComponent", function() { return ForfaitVedetteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ForfaitVedetteComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForfaitVedetteComponent.ɵfac = function ForfaitVedetteComponent_Factory(t) { return new (t || ForfaitVedetteComponent)(); };
ForfaitVedetteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForfaitVedetteComponent, selectors: [["app-forfait-vedette"]], decls: 6, vars: 0, consts: [[1, "containeur"], [1, "aroundText"], [1, "glow"]], template: function ForfaitVedetteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FORFAIT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "VEDETTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@keyframes blinker {\r\n    50% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n  .containeur[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .glow[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    text-align: center;\r\n    color: whitesmoke;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n  }\r\n\r\n  @keyframes glow {\r\n    from {\r\n      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px goldenrod, 0 0 30px goldenrod, 0 0 40px goldenrod, 0 0 50px goldenrod, 0 0 60px goldenrod;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px gold, 0 0 30px gold, 0 0 40px gold, 0 0 50px gold, 0 0 60px gold, 0 0 70px gold;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmZhaXQtdmVkZXR0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBSUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUdqQixpREFBaUQ7RUFDbkQ7O0VBRUE7SUFDRTtNQUNFLDRJQUE0STtJQUM5STtJQUNBO01BQ0Usb0hBQW9IO0lBQ3RIO0VBQ0YiLCJmaWxlIjoiZm9yZmFpdC12ZWRldHRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICBAa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgNTAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIC5nbG93IHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBnbG93IHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCBnb2xkZW5yb2QsIDAgMCAzMHB4IGdvbGRlbnJvZCwgMCAwIDQwcHggZ29sZGVucm9kLCAwIDAgNTBweCBnb2xkZW5yb2QsIDAgMCA2MHB4IGdvbGRlbnJvZDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4IGdvbGQsIDAgMCAzMHB4IGdvbGQsIDAgMCA0MHB4IGdvbGQsIDAgMCA1MHB4IGdvbGQsIDAgMCA2MHB4IGdvbGQsIDAgMCA3MHB4IGdvbGQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForfaitVedetteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forfait-vedette',
                templateUrl: './forfait-vedette.component.html',
                styleUrls: ['./forfait-vedette.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./accueil/accueil.component */ "I2e7");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./administration/administration.component */ "1JYN");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _apropos_apropos_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./apropos/apropos.component */ "pl65");
/* harmony import */ var _caracteristiques_caracteristiques_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./caracteristiques/caracteristiques.component */ "LDQS");
/* harmony import */ var _entete_entete_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./entete/entete.component */ "IT/S");
/* harmony import */ var _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./etoiles/etoiles.component */ "xOlq");
/* harmony import */ var _forfait_complet_forfait_complet_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./forfait-complet/forfait-complet.component */ "Buut");
/* harmony import */ var _forfait_vedette_forfait_vedette_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./forfait-vedette/forfait-vedette.component */ "U4DW");
/* harmony import */ var _forfaits_cuba_forfaits_cuba_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./forfaits-cuba/forfaits-cuba.component */ "hVU6");
/* harmony import */ var _forfaits_mexique_forfaits_mexique_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./forfaits-mexique/forfaits-mexique.component */ "r/aY");
/* harmony import */ var _forfaits_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./forfaits.service */ "tYIZ");
/* harmony import */ var _formulaire_forfait_formulaire_forfait_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./formulaire-forfait/formulaire-forfait.component */ "AZKv");
/* harmony import */ var _formulaire_recherche_formulaire_recherche_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./formulaire-recherche/formulaire-recherche.component */ "eLiL");
/* harmony import */ var _graphique_destinations_graphique_destinations_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./graphique-destinations/graphique-destinations.component */ "KIBf");
/* harmony import */ var _liste_forfaits_liste_forfaits_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./liste-forfaits/liste-forfaits.component */ "i7eW");
/* harmony import */ var _mini_forfait_mini_forfait_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./mini-forfait/mini-forfait.component */ "8fRa");
/* harmony import */ var _pied_de_page_pied_de_page_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pied-de-page/pied-de-page.component */ "LshM");
/* harmony import */ var _graphique_prix_moyen_prix_total_destination_graphique_prix_moyen_prix_total_destination_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./graphique-prix-moyen-prix-total-destination/graphique-prix-moyen-prix-total-destination.component */ "lALC");
/* harmony import */ var _recherche_forfait_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./recherche-forfait.pipe */ "EWKk");


















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _forfaits_service__WEBPACK_IMPORTED_MODULE_39__["ForfaitsService"],
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], useValue: 'fr-CA' }
    ], imports: [[
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_26__["ChartsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"],
        _liste_forfaits_liste_forfaits_component__WEBPACK_IMPORTED_MODULE_43__["ListeForfaitsComponent"],
        _mini_forfait_mini_forfait_component__WEBPACK_IMPORTED_MODULE_44__["MiniForfaitComponent"],
        _forfait_complet_forfait_complet_component__WEBPACK_IMPORTED_MODULE_35__["ForfaitCompletComponent"],
        _formulaire_forfait_formulaire_forfait_component__WEBPACK_IMPORTED_MODULE_40__["FormulaireForfaitComponent"],
        _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_34__["EtoilesComponent"],
        _forfait_vedette_forfait_vedette_component__WEBPACK_IMPORTED_MODULE_36__["ForfaitVedetteComponent"],
        _formulaire_recherche_formulaire_recherche_component__WEBPACK_IMPORTED_MODULE_41__["FormulaireRechercheComponent"],
        _caracteristiques_caracteristiques_component__WEBPACK_IMPORTED_MODULE_32__["CaracteristiquesComponent"],
        _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_27__["AccueilComponent"],
        _entete_entete_component__WEBPACK_IMPORTED_MODULE_33__["EnteteComponent"],
        _pied_de_page_pied_de_page_component__WEBPACK_IMPORTED_MODULE_45__["PiedDePageComponent"],
        _apropos_apropos_component__WEBPACK_IMPORTED_MODULE_31__["AproposComponent"],
        _forfaits_cuba_forfaits_cuba_component__WEBPACK_IMPORTED_MODULE_37__["ForfaitsCubaComponent"],
        _forfaits_mexique_forfaits_mexique_component__WEBPACK_IMPORTED_MODULE_38__["ForfaitsMexiqueComponent"],
        _administration_administration_component__WEBPACK_IMPORTED_MODULE_28__["AdministrationComponent"],
        _graphique_destinations_graphique_destinations_component__WEBPACK_IMPORTED_MODULE_42__["GraphiqueDestinationsComponent"],
        _graphique_prix_moyen_prix_total_destination_graphique_prix_moyen_prix_total_destination_component__WEBPACK_IMPORTED_MODULE_46__["GraphiquePrixMoyenPrixTotalDestinationComponent"],
        _recherche_forfait_pipe__WEBPACK_IMPORTED_MODULE_47__["RechercheForfaitPipe"]], imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_26__["ChartsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"],
                    _liste_forfaits_liste_forfaits_component__WEBPACK_IMPORTED_MODULE_43__["ListeForfaitsComponent"],
                    _mini_forfait_mini_forfait_component__WEBPACK_IMPORTED_MODULE_44__["MiniForfaitComponent"],
                    _forfait_complet_forfait_complet_component__WEBPACK_IMPORTED_MODULE_35__["ForfaitCompletComponent"],
                    _formulaire_forfait_formulaire_forfait_component__WEBPACK_IMPORTED_MODULE_40__["FormulaireForfaitComponent"],
                    _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_34__["EtoilesComponent"],
                    _forfait_vedette_forfait_vedette_component__WEBPACK_IMPORTED_MODULE_36__["ForfaitVedetteComponent"],
                    _formulaire_recherche_formulaire_recherche_component__WEBPACK_IMPORTED_MODULE_41__["FormulaireRechercheComponent"],
                    _caracteristiques_caracteristiques_component__WEBPACK_IMPORTED_MODULE_32__["CaracteristiquesComponent"],
                    _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_27__["AccueilComponent"],
                    _entete_entete_component__WEBPACK_IMPORTED_MODULE_33__["EnteteComponent"],
                    _pied_de_page_pied_de_page_component__WEBPACK_IMPORTED_MODULE_45__["PiedDePageComponent"],
                    _apropos_apropos_component__WEBPACK_IMPORTED_MODULE_31__["AproposComponent"],
                    _forfaits_cuba_forfaits_cuba_component__WEBPACK_IMPORTED_MODULE_37__["ForfaitsCubaComponent"],
                    _forfaits_mexique_forfaits_mexique_component__WEBPACK_IMPORTED_MODULE_38__["ForfaitsMexiqueComponent"],
                    _administration_administration_component__WEBPACK_IMPORTED_MODULE_28__["AdministrationComponent"],
                    _graphique_destinations_graphique_destinations_component__WEBPACK_IMPORTED_MODULE_42__["GraphiqueDestinationsComponent"],
                    _graphique_prix_moyen_prix_total_destination_graphique_prix_moyen_prix_total_destination_component__WEBPACK_IMPORTED_MODULE_46__["GraphiquePrixMoyenPrixTotalDestinationComponent"],
                    _recherche_forfait_pipe__WEBPACK_IMPORTED_MODULE_47__["RechercheForfaitPipe"]
                ],
                imports: [
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_26__["ChartsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"]
                ],
                providers: [
                    _forfaits_service__WEBPACK_IMPORTED_MODULE_39__["ForfaitsService"],
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], useValue: 'fr-CA' }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eLiL":
/*!************************************************************************!*\
  !*** ./src/app/formulaire-recherche/formulaire-recherche.component.ts ***!
  \************************************************************************/
/*! exports provided: FormulaireRechercheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireRechercheComponent", function() { return FormulaireRechercheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _caracteristiques_caracteristiques_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../caracteristiques/caracteristiques.component */ "LDQS");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../etoiles/etoiles.component */ "xOlq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function FormulaireRechercheComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const duree_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", duree_r2.valeur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", duree_r2.valeurAffichee, " ");
} }
class FormulaireRechercheComponent {
    constructor() {
        this.direction = "column";
        this.nbEtoiles = 0;
        this.rechercheChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeDrawer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.durees = [
            { valeur: 7, valeurAffichee: '7 jours' },
            { valeur: 10, valeurAffichee: '10 jours' },
            { valeur: 14, valeurAffichee: '14 jours' }
        ];
    }
    handleClick(event) {
        this.closeDrawer.emit(event);
    }
    changeDateDepart(nouvelleValeur) {
        let nouvelleRecherche = { dateDepart: nouvelleValeur,
            duree: this.recherche.duree,
            caracteristiques: this.recherche.caracteristiques,
            nbEtoiles: this.recherche.nbEtoiles
        };
        this.recherche = nouvelleRecherche;
        this.rechercheChange.emit(nouvelleRecherche);
    }
    changeDuree(nouvelleValeur) {
        let nouvelleRecherche = { dateDepart: this.recherche.dateDepart,
            duree: nouvelleValeur,
            caracteristiques: this.recherche.caracteristiques,
            nbEtoiles: this.recherche.nbEtoiles
        };
        this.recherche = nouvelleRecherche;
        this.rechercheChange.emit(nouvelleRecherche);
    }
    changeNbEtoiles(nouvelleValeur) {
        let nouvelleRecherche = { dateDepart: this.recherche.dateDepart,
            duree: this.recherche.duree,
            caracteristiques: this.recherche.caracteristiques,
            nbEtoiles: nouvelleValeur
        };
        this.recherche = nouvelleRecherche;
        this.rechercheChange.emit(nouvelleRecherche);
    }
    changeCaracteristiques(nouvelleValeur) {
        let nouvelleRecherche = { dateDepart: this.recherche.dateDepart,
            duree: this.recherche.duree,
            caracteristiques: nouvelleValeur,
            nbEtoiles: this.recherche.nbEtoiles
        };
        this.recherche = nouvelleRecherche;
        this.rechercheChange.emit(nouvelleRecherche);
    }
    ngOnInit() {
    }
    resetRecherche() {
        let nouvelleRecherche = {
            dateDepart: null,
            duree: null,
            caracteristiques: [],
            nbEtoiles: null
        };
        this.recherche.caracteristiques.map(item => {
            item.selected = false;
        });
        this.rechercheChange.emit(nouvelleRecherche);
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
FormulaireRechercheComponent.ɵfac = function FormulaireRechercheComponent_Factory(t) { return new (t || FormulaireRechercheComponent)(); };
FormulaireRechercheComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormulaireRechercheComponent, selectors: [["app-formulaire-recherche"]], inputs: { recherche: "recherche", caracteristiques: "caracteristiques" }, outputs: { rechercheChange: "rechercheChange", closeDrawer: "closeDrawer" }, decls: 27, vars: 10, consts: [[1, "containerFormRecherche"], [1, "titre"], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerDepart", ""], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "direction", "caract", "caractChange"], [2, "display", "flex", "align-items", "center"], ["required", "", "thumbLabel", "", "tickInterval", "1", "min", "0", "max", "6", 3, "ngModel", "displayWith", "ngModelChange"], [2, "color", "goldenrod", 3, "etoiles"], [2, "display", "flex", "justify-content", "space-between"], ["mat-raised-button", "", "color", "warn", 2, "flex", "1", "margin-right", "2px", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "flex", "1", "margin-left", "2px", 3, "click"], [3, "value"]], template: function FormulaireRechercheComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recherche Forfait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date de d\u00E9part");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireRechercheComponent_Template_input_ngModelChange_6_listener($event) { return ctx.recherche.dateDepart = $event; })("ngModelChange", function FormulaireRechercheComponent_Template_input_ngModelChange_6_listener($event) { return ctx.changeDateDepart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-datepicker", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dur\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireRechercheComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.recherche.duree = $event; })("ngModelChange", function FormulaireRechercheComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.changeDuree($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormulaireRechercheComponent_mat_option_14_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-caracteristiques", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("caractChange", function FormulaireRechercheComponent_Template_app_caracteristiques_caractChange_15_listener($event) { return ctx.recherche.caracteristiques = $event; })("caractChange", function FormulaireRechercheComponent_Template_app_caracteristiques_caractChange_15_listener($event) { return ctx.changeCaracteristiques($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00C9toiles: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-slider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormulaireRechercheComponent_Template_mat_slider_ngModelChange_20_listener($event) { return ctx.recherche.nbEtoiles = $event; })("ngModelChange", function FormulaireRechercheComponent_Template_mat_slider_ngModelChange_20_listener($event) { return ctx.changeNbEtoiles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-etoiles", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormulaireRechercheComponent_Template_button_click_23_listener() { return ctx.resetRecherche(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Reset recherche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormulaireRechercheComponent_Template_button_click_25_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.recherche.dateDepart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recherche.duree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.durees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", ctx.direction)("caract", ctx.recherche.caracteristiques);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recherche.nbEtoiles)("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("etoiles", ctx.recherche.nbEtoiles);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _caracteristiques_caracteristiques_component__WEBPACK_IMPORTED_MODULE_7__["CaracteristiquesComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _etoiles_etoiles_component__WEBPACK_IMPORTED_MODULE_9__["EtoilesComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: [".containerFormRecherche[_ngcontent-%COMP%]{\r\n    padding: 10px; \r\n    display: flex; \r\n    flex-direction: column;\r\n}\r\n.titre[_ngcontent-%COMP%]{\r\n    background-color: #3F51B5;\r\n    color: white;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm11bGFpcmUtcmVjaGVyY2hlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiZm9ybXVsYWlyZS1yZWNoZXJjaGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJGb3JtUmVjaGVyY2hle1xyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnRpdHJle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormulaireRechercheComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formulaire-recherche',
                templateUrl: './formulaire-recherche.component.html',
                styleUrls: ['./formulaire-recherche.component.css']
            }]
    }], function () { return []; }, { recherche: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rechercheChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], caracteristiques: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeDrawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "hVU6":
/*!**********************************************************!*\
  !*** ./src/app/forfaits-cuba/forfaits-cuba.component.ts ***!
  \**********************************************************/
/*! exports provided: ForfaitsCubaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForfaitsCubaComponent", function() { return ForfaitsCubaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _forfaits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forfaits.service */ "tYIZ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _forfait_complet_forfait_complet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forfait-complet/forfait-complet.component */ "Buut");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");







function ForfaitsCubaComponent_span_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-forfait-complet", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forfait", item_r1);
} }
function ForfaitsCubaComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForfaitsCubaComponent_span_1_ng_template_1_Template, 3, 1, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contains(item_r1.destination, "Cuba"));
} }
class ForfaitsCubaComponent {
    constructor(forfaitsService) {
        this.forfaitsService = forfaitsService;
    }
    contains(destination, pays) {
        if (destination.includes(pays)) {
            return true;
        }
    }
    ngOnInit() {
        this.getForfaits();
    }
    getForfaits() {
        this.forfaitsService.getForfaits()
            .subscribe(resultat => {
            this.mesForfaits = resultat;
        });
    }
}
ForfaitsCubaComponent.ɵfac = function ForfaitsCubaComponent_Factory(t) { return new (t || ForfaitsCubaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"])); };
ForfaitsCubaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForfaitsCubaComponent, selectors: [["app-forfaits-cuba"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "ngIf"], [2, "height", "auto", "padding-bottom", "10px", "padding-top", "10px"], [2, "width", "100%", 3, "forfait"]], template: function ForfaitsCubaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForfaitsCubaComponent_span_1_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mesForfaits);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _forfait_complet_forfait_complet_component__WEBPACK_IMPORTED_MODULE_4__["ForfaitCompletComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JmYWl0cy1jdWJhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForfaitsCubaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forfaits-cuba',
                templateUrl: './forfaits-cuba.component.html',
                styleUrls: ['./forfaits-cuba.component.css']
            }]
    }], function () { return [{ type: _forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"] }]; }, null); })();


/***/ }),

/***/ "i7eW":
/*!************************************************************!*\
  !*** ./src/app/liste-forfaits/liste-forfaits.component.ts ***!
  \************************************************************/
/*! exports provided: ListeForfaitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeForfaitsComponent", function() { return ListeForfaitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _forfaits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forfaits.service */ "tYIZ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _forfait_complet_forfait_complet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forfait-complet/forfait-complet.component */ "Buut");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _recherche_forfait_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recherche-forfait.pipe */ "EWKk");








function ListeForfaitsComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-forfait-complet", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forfait", item_r1);
} }
class ListeForfaitsComponent {
    constructor(forfaitsService) {
        this.forfaitsService = forfaitsService;
        this.recherche = {
            dateDepart: null,
            duree: null,
            caracteristiques: [],
            nbEtoiles: null
        };
    }
    ngOnInit() {
        this.getForfaits();
    }
    getForfaits() {
        this.forfaitsService.getForfaits()
            .subscribe(resultat => {
            this.mesForfaits = resultat;
        });
    }
}
ListeForfaitsComponent.ɵfac = function ListeForfaitsComponent_Factory(t) { return new (t || ListeForfaitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"])); };
ListeForfaitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListeForfaitsComponent, selectors: [["app-liste-forfaits"]], inputs: { recherche: "recherche" }, decls: 3, vars: 4, consts: [[2, "min-height", "80vh"], [4, "ngFor", "ngForOf"], [2, "height", "auto", "padding-bottom", "10px", "padding-top", "10px"], [2, "width", "100%", 3, "forfait"]], template: function ListeForfaitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListeForfaitsComponent_span_1_Template, 4, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "rechercheForfait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.mesForfaits, ctx.recherche));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _forfait_complet_forfait_complet_component__WEBPACK_IMPORTED_MODULE_4__["ForfaitCompletComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"]], pipes: [_recherche_forfait_pipe__WEBPACK_IMPORTED_MODULE_6__["RechercheForfaitPipe"]], styles: [".listeStyle[_ngcontent-%COMP%]{\r\n    background-color: yellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RlLWZvcmZhaXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoibGlzdGUtZm9yZmFpdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0ZVN0eWxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListeForfaitsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-liste-forfaits',
                templateUrl: './liste-forfaits.component.html',
                styleUrls: ['./liste-forfaits.component.css']
            }]
    }], function () { return [{ type: _forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"] }]; }, { recherche: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lALC":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/graphique-prix-moyen-prix-total-destination/graphique-prix-moyen-prix-total-destination.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: GraphiquePrixMoyenPrixTotalDestinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphiquePrixMoyenPrixTotalDestinationComponent", function() { return GraphiquePrixMoyenPrixTotalDestinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _reservations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reservations.service */ "8Fqc");





class GraphiquePrixMoyenPrixTotalDestinationComponent {
    constructor(reservationsService) {
        this.reservationsService = reservationsService;
        this.labels = [];
        this.venteTotal = [];
        this.nombrePassagers = [];
        this.prixMoyen = [];
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [], label: 'Prix moyen ($)' },
        ];
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_1__["monkeyPatchChartJsTooltip"])();
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_1__["monkeyPatchChartJsLegend"])();
    }
    ngOnInit() {
        this.getReservations();
    }
    getReservations() {
        this.reservationsService.getReservations()
            .subscribe(resultat => {
            this.reservations = resultat;
            //console.log(this.reservations);
            this.getLabels();
            this.getValues();
            this.addValues();
        });
    }
    addValues() {
        for (let i = 0; i < this.labels.length; i++) {
            this.barChartLabels.push(this.labels[i]);
            this.barChartData[0].data.push(this.prixMoyen[i]);
            //this.barChartData[1].data.push(this.nombrePassagers[i]);
        }
    }
    getLabels() {
        this.reservations.map(reservation => {
            if (!this.labels.includes(reservation.destination)) {
                this.labels.push(reservation.destination);
            }
        });
        //console.log(this.labels);
    }
    getValues() {
        this.venteTotal = new Array(this.labels.length).fill(0);
        this.nombrePassagers = new Array(this.labels.length).fill(0);
        this.prixMoyen = new Array(this.labels.length).fill(0);
        this.reservations.map(reservation => {
            if (this.labels.includes(reservation.destination)) {
                let index = this.labels.indexOf(reservation.destination);
                this.venteTotal[index] += reservation.prixTotal;
                this.nombrePassagers[index] += reservation.nombrePassagers;
            }
        });
        //console.log(this.venteTotal);
        //console.log(this.nombrePassagers);
        for (let i = 0; i < this.labels.length; i++) {
            this.prixMoyen[i] = Number((this.venteTotal[i] / this.nombrePassagers[i]).toFixed());
        }
        //console.log(this.prixMoyen);
    }
}
GraphiquePrixMoyenPrixTotalDestinationComponent.ɵfac = function GraphiquePrixMoyenPrixTotalDestinationComponent_Factory(t) { return new (t || GraphiquePrixMoyenPrixTotalDestinationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reservations_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsService"])); };
GraphiquePrixMoyenPrixTotalDestinationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphiquePrixMoyenPrixTotalDestinationComponent, selectors: [["app-graphique-prix-moyen-prix-total-destination"]], decls: 2, vars: 6, consts: [[2, "display", "block"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function GraphiquePrixMoyenPrixTotalDestinationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaGlxdWUtcHJpeC1tb3llbi1wcml4LXRvdGFsLWRlc3RpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphiquePrixMoyenPrixTotalDestinationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graphique-prix-moyen-prix-total-destination',
                templateUrl: './graphique-prix-moyen-prix-total-destination.component.html',
                styleUrls: ['./graphique-prix-moyen-prix-total-destination.component.css']
            }]
    }], function () { return [{ type: _reservations_service__WEBPACK_IMPORTED_MODULE_2__["ReservationsService"] }]; }, null); })();


/***/ }),

/***/ "pl65":
/*!**********************************************!*\
  !*** ./src/app/apropos/apropos.component.ts ***!
  \**********************************************/
/*! exports provided: AproposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AproposComponent", function() { return AproposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AproposComponent {
    constructor() { }
    ngOnInit() {
    }
}
AproposComponent.ɵfac = function AproposComponent_Factory(t) { return new (t || AproposComponent)(); };
AproposComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AproposComponent, selectors: [["app-apropos"]], decls: 7, vars: 0, consts: [[1, "lorem"], [1, "item"]], template: function AproposComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\nCumque quibusdam provident, culpa perspiciatis veniam dolorem necessitatibus fugit, doloribus laudantium, quod odio temporibus quae esse quidem maiores similique officia? Facere, doloremque?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" Illum provident doloribus inventore expedita cupiditate itaque aliquid praesentium veritatis rem! Laboriosam velit deleniti corporis consequatur similique? Saepe, rem! Deleniti odio voluptatem porro nobis dolorem sequi corporis sunt odit inventore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\" Illum provident doloribus inventore expedita cupiditate itaque aliquid praesentium veritatis rem! Laboriosam velit deleniti corporis consequatur similique? Saepe, rem! Deleniti odio voluptatem porro nobis dolorem sequi corporis sunt odit inventore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lorem[_ngcontent-%COMP%]{\r\n    min-height: 75vh;\r\n    font-size: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-left: 15vw;\r\n    padding-right: 15vw;\r\n    background-color:#3F51B5;\r\n    color: papayawhip;\r\n    border-top: 3px solid  #3F51B5;\r\n    border-bottom: 3px solid  #3F51B5;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    margin-top: 35px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcm9wb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJhcHJvcG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgLmxvcmVte1xyXG4gICAgbWluLWhlaWdodDogNzV2aDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTV2dztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzRjUxQjU7XHJcbiAgICBjb2xvcjogcGFwYXlhd2hpcDtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAgIzNGNTFCNTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAgIzNGNTFCNTtcclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AproposComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apropos',
                templateUrl: './apropos.component.html',
                styleUrls: ['./apropos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "r/aY":
/*!****************************************************************!*\
  !*** ./src/app/forfaits-mexique/forfaits-mexique.component.ts ***!
  \****************************************************************/
/*! exports provided: ForfaitsMexiqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForfaitsMexiqueComponent", function() { return ForfaitsMexiqueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _forfaits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forfaits.service */ "tYIZ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _forfait_complet_forfait_complet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forfait-complet/forfait-complet.component */ "Buut");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");







function ForfaitsMexiqueComponent_span_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-forfait-complet", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forfait", item_r1);
} }
function ForfaitsMexiqueComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForfaitsMexiqueComponent_span_1_ng_template_1_Template, 3, 1, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.destination.includes("M\u00E9xique") || item_r1.destination.includes("Mexique"));
} }
class ForfaitsMexiqueComponent {
    constructor(forfaitsService) {
        this.forfaitsService = forfaitsService;
    }
    ngOnInit() {
        this.getForfaits();
    }
    getForfaits() {
        this.forfaitsService.getForfaits()
            .subscribe(resultat => {
            this.mesForfaits = resultat;
        });
    }
}
ForfaitsMexiqueComponent.ɵfac = function ForfaitsMexiqueComponent_Factory(t) { return new (t || ForfaitsMexiqueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"])); };
ForfaitsMexiqueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForfaitsMexiqueComponent, selectors: [["app-forfaits-mexique"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "ngIf"], [2, "height", "auto", "padding-bottom", "10px", "padding-top", "10px"], [2, "width", "100%", 3, "forfait"]], template: function ForfaitsMexiqueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForfaitsMexiqueComponent_span_1_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mesForfaits);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _forfait_complet_forfait_complet_component__WEBPACK_IMPORTED_MODULE_4__["ForfaitCompletComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JmYWl0cy1tZXhpcXVlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForfaitsMexiqueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forfaits-mexique',
                templateUrl: './forfaits-mexique.component.html',
                styleUrls: ['./forfaits-mexique.component.css']
            }]
    }], function () { return [{ type: _forfaits_service__WEBPACK_IMPORTED_MODULE_1__["ForfaitsService"] }]; }, null); })();


/***/ }),

/***/ "tYIZ":
/*!*************************************!*\
  !*** ./src/app/forfaits.service.ts ***!
  \*************************************/
/*! exports provided: ForfaitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForfaitsService", function() { return ForfaitsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class ForfaitsService {
    constructor(http) {
        this.http = http;
        this.forfaitsUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';
    }
    getForfaits() {
        return this.http.get(this.forfaitsUrl + 'da/1996489');
    }
    getForfait(id) {
        return this.http.get(this.forfaitsUrl + id);
    }
    addForfait(forfait) {
        console.log(forfait);
        return this.http.post(this.forfaitsUrl, forfait, httpOptions);
    }
    /** PUT: mise à jour du forfait */
    updateForfait(forfait) {
        const id = forfait._id;
        return this.http.put(this.forfaitsUrl + id, forfait, httpOptions);
    }
    /** DELETE: suppression du forfait */
    deleteForfait(id) {
        return this.http.delete(this.forfaitsUrl + id, httpOptions);
    }
}
ForfaitsService.ɵfac = function ForfaitsService_Factory(t) { return new (t || ForfaitsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ForfaitsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ForfaitsService, factory: ForfaitsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ForfaitsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accueil/accueil.component */ "I2e7");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administration/administration.component */ "1JYN");
/* harmony import */ var _apropos_apropos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apropos/apropos.component */ "pl65");
/* harmony import */ var _forfaits_cuba_forfaits_cuba_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forfaits-cuba/forfaits-cuba.component */ "hVU6");
/* harmony import */ var _forfaits_mexique_forfaits_mexique_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forfaits-mexique/forfaits-mexique.component */ "r/aY");
/* harmony import */ var _formulaire_forfait_formulaire_forfait_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formulaire-forfait/formulaire-forfait.component */ "AZKv");










const routes = [
    { path: 'accueil', component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_2__["AccueilComponent"] },
    { path: 'apropos', component: _apropos_apropos_component__WEBPACK_IMPORTED_MODULE_4__["AproposComponent"] },
    { path: 'forfaitsCuba', component: _forfaits_cuba_forfaits_cuba_component__WEBPACK_IMPORTED_MODULE_5__["ForfaitsCubaComponent"] },
    { path: 'forfaitsMexique', component: _forfaits_mexique_forfaits_mexique_component__WEBPACK_IMPORTED_MODULE_6__["ForfaitsMexiqueComponent"] },
    { path: 'admin/nouveauForfait', component: _formulaire_forfait_formulaire_forfait_component__WEBPACK_IMPORTED_MODULE_7__["FormulaireForfaitComponent"] },
    { path: 'admin/editForfait/:id', component: _formulaire_forfait_formulaire_forfait_component__WEBPACK_IMPORTED_MODULE_7__["FormulaireForfaitComponent"] },
    { path: 'admin', component: _administration_administration_component__WEBPACK_IMPORTED_MODULE_3__["AdministrationComponent"] },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xOlq":
/*!**********************************************!*\
  !*** ./src/app/etoiles/etoiles.component.ts ***!
  \**********************************************/
/*! exports provided: EtoilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtoilesComponent", function() { return EtoilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





function EtoilesComponent_div_0_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faStar);
} }
const _c0 = function () { return []; };
function EtoilesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EtoilesComponent_div_0_fa_icon_1_Template, 1, 1, "fa-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).constructor(ctx_r0.etoiles));
} }
class EtoilesComponent {
    constructor() {
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
    }
    ngOnInit() {
    }
}
EtoilesComponent.ɵfac = function EtoilesComponent_Factory(t) { return new (t || EtoilesComponent)(); };
EtoilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EtoilesComponent, selectors: [["app-etoiles"]], inputs: { etoiles: "etoiles", color: "color" }, decls: 1, vars: 1, consts: [["style", "display: flex;", 4, "ngIf"], [2, "display", "flex"], [3, "icon", 4, "ngFor", "ngForOf"], [3, "icon"]], template: function EtoilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EtoilesComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.etoiles > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldG9pbGVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EtoilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-etoiles',
                templateUrl: './etoiles.component.html',
                styleUrls: ['./etoiles.component.css']
            }]
    }], function () { return []; }, { etoiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map