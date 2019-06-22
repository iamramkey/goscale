webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-content/app-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app-content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-content/app-content.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app-content {\n  position: relative;\n  min-height: calc(100% - 247px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-content/app-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:25:32
 * @modify date 2019-05-26 18:25:32
 * @desc [this is a route component which will be redirected when you came to the root path]
 */

var AppContentComponent = (function () {
    function AppContentComponent() {
    }
    return AppContentComponent;
}());
AppContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__("../../../../../src/app/app-content/app-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-content/app-content.component.sass")]
    })
], AppContentComponent);

//# sourceMappingURL=app-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-content/question-details/question-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-xs-9\">\n    <ng-container *ngIf=\"question | deepFind: QUESTIONS_RESPONSE_KEYS?.TEXT | safe: 'html'; else noData\">\n      <fieldset class=\"question-detail\">\n        <legend class=\"question-detail\">Question:</legend>\n        <div [innerHTML]=\"question | deepFind: QUESTIONS_RESPONSE_KEYS?.TEXT | safe: 'html'\"></div>\n      </fieldset>\n    </ng-container>\n  </div>\n  <div class=\"col-xs-3\">\n    <div class=\"votest-container upvotes text-center\">\n      <span\n        class=\"glyphicon glyphicon-triangle-top\"\n        [class.up-voted]=\"question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_UP_VOTED\"\n      ></span>\n      <span class=\"votes-count\">\n        {{ (question | deepFind: QUESTIONS_RESPONSE_KEYS?.UP_VOTES) || '0' }}\n      </span>\n      <button\n        class=\"btn btn-success btn-block\"\n        (click)=\"upVote(question)\"\n        [disabled]=\"question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_UP_VOTED\"\n        [attr.title]=\"\n          (question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_UP_VOTED)\n            ? QUESTIONS_RESPONSE_KEYS?.QUESTION_UP_VOTED_BY_YOU\n            : QUESTIONS_RESPONSE_KEYS?.QUESTION_IS_APPROPRIATE\n        \"\n      >\n        <span class=\"glyphicon glyphicon-thumbs-up\"></span>\n        Was this question helpful ?\n      </button>\n    </div>\n    <div class=\"votest-container downvotes text-center\">\n      <span\n        class=\"glyphicon glyphicon-triangle-bottom\"\n        [class.down-voted]=\"question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_DOWN_VOTED\"\n      ></span>\n      <span class=\"votes-count\">\n        {{ (question | deepFind: QUESTIONS_RESPONSE_KEYS?.DOWN_VOTES) || '0' }}\n      </span>\n      <button\n        class=\"btn btn-warning btn-block\"\n        (click)=\"downVote(question)\"\n        [disabled]=\"question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_DOWN_VOTED\"\n        [attr.title]=\"\n          (question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_DOWN_VOTED)\n            ? QUESTIONS_RESPONSE_KEYS?.QUESTION_DOWN_VOTED_BY_YOU\n            : QUESTIONS_RESPONSE_KEYS?.QUESTION_NOT_PROPER\n        \"\n      >\n        <span class=\"glyphicon glyphicon-thumbs-down\"></span>\n        Not a proper question\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"col-xs-12\">\n    <fieldset class=\"question-detail\">\n      <legend class=\"question-detail\">Answers:</legend>\n\n      <div *ngFor=\"let answer of answersList; trackBy: trackByFunction\">\n        <div class=\"col-xs-2\">\n          <div class=\"votest-container upvotes text-center col-xs-6\">\n            <p class=\"glyphicon glyphicon-triangle-top\"></p>\n            <p class=\"votes-count\">\n              {{ (answer | deepFind: QUESTIONS_RESPONSE_KEYS?.UP_VOTES) || '0' }}\n            </p>\n          </div>\n          <div class=\"votest-container downvotes text-center col-xs-6\">\n            <p class=\"glyphicon glyphicon-triangle-bottom\"></p>\n            <p class=\"votes-count\">\n              {{ (answer | deepFind: QUESTIONS_RESPONSE_KEYS?.DOWN_VOTES) || '0' }}\n            </p>\n          </div>\n        </div>\n        <div class=\"col-xs-10\" [innerHTML]=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.ANSWER | safe: 'html'\"></div>\n        <div class=\"clearfix\"></div>\n        <div class=\"pull-right created-by-container\">\n          <div\n            class=\"col-xs-3 avatar-container\"\n            *ngIf=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY | deepFind: ANSWER_RESPONSE_KEYS?.AVATAR\"\n          >\n            <img\n              [src]=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY | deepFind: ANSWER_RESPONSE_KEYS?.AVATAR\"\n              class=\"answer-avatar\"\n              alt=\"answer avatar\"\n            />\n          </div>\n          <div\n            class=\" answer-creator\"\n            [ngClass]=\"[\n              !(answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY | deepFind: ANSWER_RESPONSE_KEYS?.AVATAR)\n                ? 'col-xs-9 col-xs-offset-3'\n                : 'col-xs-9'\n            ]\"\n          >\n            <ng-container\n              *ngIf=\"\n                answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY | deepFind: ANSWER_RESPONSE_KEYS?.NAME;\n                else simpleCreatedBy\n              \"\n            >\n              <p\n                class=\"person-name\"\n                [attr.title]=\"\n                  (answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY | deepFind: ANSWER_RESPONSE_KEYS?.NAME) +\n                  ' ' +\n                  (answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY | deepFind: ANSWER_RESPONSE_KEYS?.SURNAME)\n                \"\n                *ngIf=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY | deepFind: ANSWER_RESPONSE_KEYS?.NAME\"\n              >\n                {{\n                  (answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY | deepFind: ANSWER_RESPONSE_KEYS?.NAME) +\n                    ' ' +\n                    (answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY | deepFind: ANSWER_RESPONSE_KEYS?.SURNAME)\n                }}\n              </p>\n              <p\n                class=\"created-date\"\n                [attr.title]=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_AT | date: 'medium'\"\n                *ngIf=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_AT\"\n              >\n                {{ answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_AT | date: 'medium' }}\n              </p>\n            </ng-container>\n            <ng-template #simpleCreatedBy>\n              <p\n                class=\"person-name\"\n                *ngIf=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY\"\n                [attr.title]=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY\"\n              >\n                {{ answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_BY }}\n              </p>\n              <p\n                class=\"created-date\"\n                *ngIf=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_AT\"\n                [attr.title]=\"answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_AT | date: 'medium'\"\n              >\n                {{ answer | deepFind: ANSWER_RESPONSE_KEYS?.CREATED_AT | date: 'medium' }}\n              </p>\n            </ng-template>\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <hr />\n      </div>\n\n      <h4>Your Answer :</h4>\n      <div class=\"answer-errors\">\n        <div class=\"alert alert-danger\" *ngFor=\"let error of newAnswerErrors; trackBy: trackByFunction\">\n          <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n          {{ error }}\n        </div>\n      </div>\n      <quill-editor name=\"newAnswerControl\" [formControl]=\"newAnswerControl\"></quill-editor>\n      <div class=\"pull-right submit-answer-container\">\n        <button class=\"btn btn-primary btn-lg\" [disabled]=\"!newAnswerControl?.valid\" (click)=\"saveAnswer()\">\n          Submit your answer\n        </button>\n      </div>\n      <div class=\"clearfix\"></div>\n    </fieldset>\n  </div>\n</div>\n\n<app-loader [loading]=\"answersListLoading\"></app-loader>\n\n<ng-template #noData>\n  <div class=\"alert alert-info\">\n    No Questions Available at this moment. Please come back and try again...\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/app-content/question-details/question-details.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset.question-detail {\n  border: 1px groove #ddd !important;\n  padding: 0 1.4em 1.4em 1.4em !important;\n  margin: 0 0 1.5em 0 !important;\n  box-shadow: 0px 0px 0px 0px #000; }\n\nlegend.question-detail {\n  font-size: 1.2em !important;\n  font-weight: bold !important;\n  text-align: left !important;\n  width: auto;\n  padding: 0 10px;\n  border-bottom: none; }\n\n.btn.btn-block {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.submit-answer-container {\n  margin-top: 20px; }\n\n.glyphicon.up-voted {\n  color: #0a0;\n  cursor: not-allowed; }\n\n.glyphicon.down-voted {\n  color: #f60;\n  cursor: not-allowed; }\n\n.answer-avatar {\n  height: 40px; }\n\n.created-by-container {\n  margin-right: 20px;\n  min-width: 250px; }\n  .created-by-container .avatar-container {\n    padding-right: 10px; }\n  .created-by-container .answer-creator .person-name, .created-by-container .answer-creator .created-date {\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-content/question-details/question-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__ = __webpack_require__("../../../../../src/app/services/AppConstants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_object_utils_service__ = __webpack_require__("../../../../../src/app/services/object-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_app_content_model__ = __webpack_require__("../../../../../src/app/app-content/shared/app-content.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_app_loader_service__ = __webpack_require__("../../../../../src/app/services/app-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_app_toaster_service__ = __webpack_require__("../../../../../src/app/services/app-toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_app_content_service__ = __webpack_require__("../../../../../src/app/app-content/shared/app-content.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:23:44
 * @modify date 2019-05-26 18:23:44
 * @desc [This is a route component and this will show the detais of the question you selected in questions list component]
 */










var QuestionDetailsComponent = (function () {
    function QuestionDetailsComponent(appContent, route, appContentService, router) {
        this.appContent = appContent;
        this.route = route;
        this.appContentService = appContentService;
        this.router = router;
        this.answersListLoading = true;
        this.newAnswerControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]();
        this.newAnswerErrors = [];
        this.QUESTIONS_RESPONSE_KEYS = __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["b" /* QUESTIONS_RESPONSE_KEYS */];
        this.ANSWER_RESPONSE_KEYS = __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["c" /* ANSWER_RESPONSE_KEYS */];
    }
    QuestionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParamsSubscription = this.route.params.subscribe(function (params) {
            _this.selectedQuestionId = params['id'];
            if (_this.appContent.questionsList.length > 0) {
                _this.updateQuestionByQuestionId();
            }
            else {
                _this.appContentService.loadQuestions().subscribe(function (res) {
                    if (res instanceof Object) {
                        var questions = __WEBPACK_IMPORTED_MODULE_5__services_object_utils_service__["a" /* ObjectUtils */].deepFind(res, __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["b" /* QUESTIONS_RESPONSE_KEYS */].LIST);
                        if (questions instanceof Array && questions.length > 0) {
                            _this.appContent.questionsList = questions;
                            _this.updateQuestionByQuestionId();
                        }
                    }
                    return res;
                }, function (err) {
                    _this.appContent.questionsList = [];
                    __WEBPACK_IMPORTED_MODULE_8__services_app_toaster_service__["a" /* AppToasterService */].populateToaster(__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["d" /* TOASTER_MESSAGE_TYPES */].ERROR, __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["e" /* QUESTION_DETAILS_TOASTER_MESSAGES */].FAILED_TO_LOAD_ANSWERS);
                    _this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["a" /* APP_ROUTING_PATHS */].ROOT_PATH_URL]);
                });
            }
        });
    };
    QuestionDetailsComponent.prototype.loadAnswers = function () {
        var _this = this;
        this.answersListSubscription = this.appContentService.loadAnswers().subscribe(function (res) {
            if (res instanceof Object) {
                var answersList = __WEBPACK_IMPORTED_MODULE_5__services_object_utils_service__["a" /* ObjectUtils */].deepFind(res, __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["c" /* ANSWER_RESPONSE_KEYS */].LIST);
                var answersForCurrentQuestion_1 = [];
                if (answersList instanceof Array && answersList.length > 0) {
                    answersList.forEach(function (a) {
                        var questionId = __WEBPACK_IMPORTED_MODULE_5__services_object_utils_service__["a" /* ObjectUtils */].deepFind(a, __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["c" /* ANSWER_RESPONSE_KEYS */].QUESTION_ID);
                        if (questionId === _this.selectedQuestionId) {
                            answersForCurrentQuestion_1.push(a);
                        }
                    });
                    var userAnsweredQuestions = _this.appContent.answersMap.get(_this.selectedQuestionId);
                    if (userAnsweredQuestions instanceof Set && userAnsweredQuestions.size > 0) {
                        answersForCurrentQuestion_1 = answersForCurrentQuestion_1.concat(Array.from(userAnsweredQuestions));
                    }
                }
                answersForCurrentQuestion_1.sort(function (a, b) {
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                });
                _this.answersList = answersForCurrentQuestion_1;
            }
            _this.answersListLoading = false;
            _this.createAnswerControl();
        }, function (err) {
            _this.answersListLoading = false;
            __WEBPACK_IMPORTED_MODULE_8__services_app_toaster_service__["a" /* AppToasterService */].populateToaster(__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["d" /* TOASTER_MESSAGE_TYPES */].ERROR, __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["e" /* QUESTION_DETAILS_TOASTER_MESSAGES */].FAILED_TO_LOAD_ANSWERS);
            _this.answersList = [];
            _this.createAnswerControl();
        });
    };
    QuestionDetailsComponent.prototype.createAnswerControl = function () {
        this.newAnswerControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(500)
        ]);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["f" /* UNSUBSCRIBE */])(this.newAnswerSubscription);
        this.newAnswerSubscription = this.newAnswerControl.valueChanges.subscribe(this.newAnswerValueChanged.bind(this));
    };
    QuestionDetailsComponent.prototype.newAnswerValueChanged = function (val) {
        this.showErrorsForNewQuestion(this.newAnswerControl);
        console.log(val);
    };
    QuestionDetailsComponent.prototype.showErrorsForNewQuestion = function (control) {
        var _this = this;
        this.newAnswerErrors.length = 0;
        if (control.errors instanceof Object) {
            Object.keys(control.errors).forEach(function (e) {
                switch (e) {
                    case __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["g" /* VALIDATION_ERROR_TYPES */].REQUIRED:
                        _this.newAnswerErrors.push(__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["h" /* NEW_ANSWER_VALIDATION_MESSAGES */].REQUIRED);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["g" /* VALIDATION_ERROR_TYPES */].MIN_LENGTH:
                        _this.newAnswerErrors.push(__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["h" /* NEW_ANSWER_VALIDATION_MESSAGES */].MIN_LENGTH);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["g" /* VALIDATION_ERROR_TYPES */].MAX_LENGTH:
                        _this.newAnswerErrors.push(__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["h" /* NEW_ANSWER_VALIDATION_MESSAGES */].MAX_LENGTH);
                        break;
                }
            });
        }
    };
    QuestionDetailsComponent.prototype.updateQuestionByQuestionId = function () {
        var _this = this;
        this.question = this.appContent.questionsList.find(function (e) { return __WEBPACK_IMPORTED_MODULE_5__services_object_utils_service__["a" /* ObjectUtils */].deepFind(e, __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["b" /* QUESTIONS_RESPONSE_KEYS */].ID) === _this.selectedQuestionId; });
        if (!(this.question instanceof Object)) {
            __WEBPACK_IMPORTED_MODULE_8__services_app_toaster_service__["a" /* AppToasterService */].populateToaster(__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["d" /* TOASTER_MESSAGE_TYPES */].WARNING, __WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["e" /* QUESTION_DETAILS_TOASTER_MESSAGES */].FAILED_TO_LOAD_QUESTION + this.selectedQuestionId);
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["a" /* APP_ROUTING_PATHS */].ROOT_PATH_URL]);
        }
        else {
            this.loadAnswers();
        }
    };
    QuestionDetailsComponent.prototype.copyQuestionAndUpdateModel = function (question) {
        var index = this.appContent.questionsList.findIndex(function (i) { return i === question; });
        if (index > -1) {
            return (this.appContent.questionsList[index] = __WEBPACK_IMPORTED_MODULE_5__services_object_utils_service__["a" /* ObjectUtils */].copy(question));
        }
        return question;
    };
    QuestionDetailsComponent.prototype.upVote = function (question) {
        // this function updates the questions upvotes
        if (question.downVoted) {
            question.downvotes = (+(question.downvotes || 0) - 1).toString();
            question.downVoted = false;
        }
        question.upvotes = (+(question.upvotes || 0) + 1).toString();
        question.upVoted = true;
        this.question = this.copyQuestionAndUpdateModel(question);
    };
    QuestionDetailsComponent.prototype.downVote = function (question) {
        // this function updates the downvotes
        if (question.upVoted) {
            question.upvotes = (+(question.upvotes || 0) - 1).toString();
            question.upVoted = false;
        }
        question.downvotes = (+(question.downvotes || 0) + 1).toString();
        question.downVoted = true;
        this.question = this.copyQuestionAndUpdateModel(question);
    };
    QuestionDetailsComponent.prototype.saveAnswer = function () {
        if (!this.appContent.answersMap.has(this.selectedQuestionId)) {
            this.appContent.answersMap.set(this.selectedQuestionId, new Set());
        }
        var answersList = this.appContent.answersMap.get(this.selectedQuestionId);
        var answerObject = {};
        answerObject.Answer = this.newAnswerControl.value;
        answerObject.Id = 'A-' + Math.random();
        answerObject['Question-Id'] = this.selectedQuestionId;
        answerObject.created_at = new Date().getTime().toString();
        answerObject.created_by = 'You';
        answerObject.downvotes = answerObject.upvotes = '0';
        answersList.add(answerObject);
        this.newAnswerControl.reset();
        this.newAnswerErrors.length = 0;
        this.answersList.push(answerObject);
    };
    QuestionDetailsComponent.prototype.trackByFunction = function (index) {
        return index;
    };
    QuestionDetailsComponent.prototype.ngOnDestroy = function () {
        this.routeParamsSubscription.unsubscribe();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["f" /* UNSUBSCRIBE */])(this.answersListSubscription);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_AppConstants__["f" /* UNSUBSCRIBE */])(this.newAnswerSubscription);
        __WEBPACK_IMPORTED_MODULE_7__services_app_loader_service__["a" /* AppLoaderService */].showLoader();
    };
    return QuestionDetailsComponent;
}());
QuestionDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-question-details',
        template: __webpack_require__("../../../../../src/app/app-content/question-details/question-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-content/question-details/question-details.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_app_content_model__["a" /* AppContent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_app_content_model__["a" /* AppContent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__shared_app_content_service__["a" /* AppContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_app_content_service__["a" /* AppContentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], QuestionDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=question-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-content/questions-list/questions-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"questionsResponse$ | async as questionsListResponse; else loading\">\n  <ng-container *ngIf=\"questionsListResponse | deepFind: QUESTIONS_RESPONSE_KEYS?.LIST as questionsList; else noData\">\n    <ng-container *ngIf=\"questionsList?.length > 0; else noData\">\n      <div class=\"container-fluid\">\n        <div *ngFor=\"let question of questionsList; trackBy: index\" class=\"question-row\">\n          <ng-container\n            *ngIf=\"\n              (question | deepFind: QUESTIONS_RESPONSE_KEYS?.TEXT | safe: 'html') &&\n              (question | deepFind: QUESTIONS_RESPONSE_KEYS?.ID)?.length > 0\n            \"\n          >\n            <span class=\"pull-left voting-count voting-up-count\">\n              <span\n                class=\"glyphicon glyphicon-triangle-top\"\n                (click)=\"upVote(question)\"\n                [attr.title]=\"\n                  (question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_UP_VOTED)\n                    ? QUESTIONS_RESPONSE_KEYS?.QUESTION_UP_VOTED_BY_YOU\n                    : QUESTIONS_RESPONSE_KEYS?.QUESTION_IS_APPROPRIATE\n                \"\n                [class.up-voted]=\"question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_UP_VOTED\"\n              ></span>\n              {{ (question | deepFind: QUESTIONS_RESPONSE_KEYS?.UP_VOTES) || '0' }}\n            </span>\n            <span class=\"pull-left voting-count voting-down-count\">\n              <span\n                class=\"glyphicon glyphicon-triangle-bottom\"\n                (click)=\"downVote(question)\"\n                [attr.title]=\"\n                  (question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_DOWN_VOTED)\n                    ? QUESTIONS_RESPONSE_KEYS?.QUESTION_DOWN_VOTED_BY_YOU\n                    : QUESTIONS_RESPONSE_KEYS?.QUESTION_NOT_PROPER\n                \"\n                [class.down-voted]=\"question | deepFind: QUESTIONS_RESPONSE_KEYS?.QUESTION_DOWN_VOTED\"\n              ></span>\n              {{ (question | deepFind: QUESTIONS_RESPONSE_KEYS?.DOWN_VOTES) || '0' }}\n            </span>\n            <div class=\"pull-left question-text\">\n              <div\n                class=\"question-link\"\n                [innerHTML]=\"question | deepFind: QUESTIONS_RESPONSE_KEYS?.TEXT | safe: 'html'\"\n                (click)=\"showDetails(question)\"\n              ></div>\n            </div>\n            <div class=\"clearfix\"></div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #loading>\n  <app-loader [loading]=\"true\"></app-loader>\n</ng-template>\n<ng-template #noData>\n  <div class=\"alert alert-info\">\n    No Questions Available at this moment. Please come back and try again...\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/app-content/questions-list/questions-list.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".voting-count {\n  text-align: center;\n  min-width: 60px; }\n  .voting-count.voting-down-count {\n    margin-left: 10px; }\n    .voting-count.voting-down-count .glyphicon:hover, .voting-count.voting-down-count .glyphicon.down-voted {\n      color: #f60; }\n    .voting-count.voting-down-count .glyphicon.down-voted {\n      cursor: not-allowed; }\n  .voting-count .glyphicon {\n    font-size: 24px;\n    display: block;\n    cursor: pointer; }\n  .voting-count:not(.voting-down-count) .glyphicon:hover, .voting-count .glyphicon.up-voted {\n    color: #0a0; }\n  .voting-count .glyphicon.up-voted {\n    cursor: not-allowed; }\n\n.question-row {\n  border-bottom: 1px solid #ccc;\n  padding: 10px 0; }\n  .question-row:hover {\n    background-color: #f0f0f0; }\n\n.question-text {\n  width: calc(100% - 140px);\n  margin-left: 10px; }\n  .question-text .question-link {\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 16px;\n    line-height: 24px;\n    color: #369;\n    cursor: pointer; }\n    .question-text .question-link:hover {\n      text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-content/questions-list/questions-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__ = __webpack_require__("../../../../../src/app/services/AppConstants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_object_utils_service__ = __webpack_require__("../../../../../src/app/services/object-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_app_content_model__ = __webpack_require__("../../../../../src/app/app-content/shared/app-content.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_app_content_service__ = __webpack_require__("../../../../../src/app/app-content/shared/app-content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_AppConstants__ = __webpack_require__("../../../../../src/app/services/AppConstants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:21:35
 * @modify date 2019-05-26 18:21:35
 * @desc [This Component will list all the questions available from the JSON feed]
 */










var QuestionsListComponent = (function () {
    function QuestionsListComponent(appContentService, appContent, router) {
        this.appContentService = appContentService;
        this.appContent = appContent;
        this.router = router;
        this.QUESTIONS_RESPONSE_KEYS = __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__["b" /* QUESTIONS_RESPONSE_KEYS */];
    }
    Object.defineProperty(QuestionsListComponent.prototype, "questionsResponse", {
        set: function (val) {
            if (val instanceof Object) {
                var questionsList = __WEBPACK_IMPORTED_MODULE_6__services_object_utils_service__["a" /* ObjectUtils */].deepFind(val, __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__["b" /* QUESTIONS_RESPONSE_KEYS */].LIST);
                this._questionsResponse = val;
                this.appContent.questionsList = questionsList instanceof Array ? questionsList : [];
            }
            else {
                this.appContent.questionsList = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    QuestionsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.appContent.questionsList.length === 0) {
            this.questionsResponse$ = this.appContentService
                .loadQuestions()
                .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return (_this.questionsResponse = res); }));
        }
        else {
            this.loadQuestionsFromModel();
        }
    };
    QuestionsListComponent.prototype.loadQuestionsFromModel = function () {
        var questionsResponse = {};
        __WEBPACK_IMPORTED_MODULE_6__services_object_utils_service__["a" /* ObjectUtils */].setToValue(questionsResponse, this.appContent.questionsList, __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__["b" /* QUESTIONS_RESPONSE_KEYS */].LIST);
        this.questionsResponse$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](questionsResponse);
    };
    QuestionsListComponent.prototype.copyQuestionAndUpdateModel = function (question) {
        var index = this.appContent.questionsList.findIndex(function (i) { return i === question; });
        if (index > -1) {
            this.appContent.questionsList[index] = __WEBPACK_IMPORTED_MODULE_6__services_object_utils_service__["a" /* ObjectUtils */].copy(question);
            this.loadQuestionsFromModel();
        }
    };
    QuestionsListComponent.prototype.upVote = function (question) {
        // this function updates the questions upvotes
        if (question.downVoted) {
            question.downvotes = (+(question.downvotes || 0) - 1).toString();
            question.downVoted = false;
        }
        question.upvotes = (+(question.upvotes || 0) + 1).toString();
        question.upVoted = true;
        this.copyQuestionAndUpdateModel(question);
    };
    QuestionsListComponent.prototype.downVote = function (question) {
        // this function updates the downvotes
        if (question.upVoted) {
            question.upvotes = (+(question.upvotes || 0) - 1).toString();
            question.upVoted = false;
        }
        question.downvotes = (+(question.downvotes || 0) + 1).toString();
        question.downVoted = true;
        this.copyQuestionAndUpdateModel(question);
    };
    QuestionsListComponent.prototype.showDetails = function (question) {
        // this function helps the user to show the details of the question he is interested in by taking question object
        this.router.navigate([
            __WEBPACK_IMPORTED_MODULE_9__services_AppConstants__["a" /* APP_ROUTING_PATHS */].ROOT_PATH + __WEBPACK_IMPORTED_MODULE_9__services_AppConstants__["a" /* APP_ROUTING_PATHS */].APP_PATH,
            __WEBPACK_IMPORTED_MODULE_6__services_object_utils_service__["a" /* ObjectUtils */].deepFind(question, __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__["b" /* QUESTIONS_RESPONSE_KEYS */].ID)
        ]);
    };
    return QuestionsListComponent;
}());
QuestionsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-questions-list',
        template: __webpack_require__("../../../../../src/app/app-content/questions-list/questions-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-content/questions-list/questions-list.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__shared_app_content_service__["a" /* AppContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_app_content_service__["a" /* AppContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__shared_app_content_model__["a" /* AppContent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_app_content_model__["a" /* AppContent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], QuestionsListComponent);

var _a, _b, _c;
//# sourceMappingURL=questions-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-content/shared/app-content.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContent; });
var AppContent = (function () {
    function AppContent() {
        this.questionsList = [];
        this.answersMap = new Map();
        this.answersList = [];
    }
    return AppContent;
}());

//# sourceMappingURL=app-content.model.js.map

/***/ }),

/***/ "../../../../../src/app/app-content/shared/app-content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_content_model__ = __webpack_require__("../../../../../src/app/app-content/shared/app-content.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:30:23
 * @modify date 2019-05-26 18:30:23
 * @desc [This is the application level service file through which any http call will be fired]
 */





var AppContentService = (function () {
    function AppContentService(http, appContent) {
        this.http = http;
        this.appContent = appContent;
    }
    AppContentService.prototype.loadQuestions = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].questionsUrl).pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res; }));
    };
    AppContentService.prototype.loadAnswers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].answersUrl).pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res; }));
    };
    return AppContentService;
}());
AppContentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_content_model__["a" /* AppContent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_content_model__["a" /* AppContent */]) === "function" && _b || Object])
], AppContentService);

var _a, _b;
//# sourceMappingURL=app-content.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"section footer-classic text-center\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <a class=\"brand\" routerLink=\"/\"\n          ><img class=\"brand-logo\" src=\"assets/qa-logo-white.png\" alt=\"Question An Answers Application\"\n        /></a>\n        <!-- Rights-->\n        <p class=\"rights\">\n          <span>© </span><span class=\"copyright-year\">2019</span><span> </span><span>Question & Answers</span\n          ><span>. </span><span>All Rights Reserved.</span>\n        </p>\n      </div>\n      <div class=\"col-md-3\">\n        <p class=\"company-info\">\n          We are an top rated Question and Answers Forum, dedicated to the support developers to achieve best result in\n          coding to make a better community.\n        </p>\n      </div>\n      <div class=\"col-md-3\">\n        <h5>Contact</h5>\n        <dl class=\"contact-list\">\n          <dt>Address:</dt>\n          <dd>798 South Park Avenue, New York, United States of America</dd>\n        </dl>\n        <dl class=\"contact-list\">\n          <dt>Email:</dt>\n          <dd><a href=\"mailto:support@qanda.com\">support@qanda.com</a></dd>\n        </dl>\n      </div>\n      <div class=\"col-md-2\">\n        <dl class=\"phones-list\">\n          <dt>Phones:</dt>\n          <dd><a href=\"tel:+1234567890\">+1 (234) 567890</a></dd>\n          <dd><a href=\"tel:+1234567890\">+1 (234) 567890</a></dd>\n          <dd><a href=\"tel:+1234567890\">+1 (234) 567890</a></dd>\n        </dl>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app-footer/app-footer.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer.footer-classic {\n  background: #2d3246;\n  color: #ccc; }\n  footer.footer-classic a {\n    color: inherit;\n    text-decoration: underline; }\n\n.brand {\n  display: block; }\n  .brand .brand-logo {\n    width: 200px;\n    display: block;\n    margin: auto; }\n\n.phones-list {\n  margin-top: 20px; }\n\n.company-info {\n  margin-top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:26:43
 * @modify date 2019-05-26 18:26:43
 * @desc [This component is the application level footer]
 */

var AppFooterComponent = (function () {
    function AppFooterComponent() {
    }
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/app-footer/app-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-footer/app-footer.component.sass")]
    })
], AppFooterComponent);

//# sourceMappingURL=app-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button\n        type=\"button\"\n        class=\"navbar-toggle collapsed\"\n        data-toggle=\"collapse\"\n        data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\"\n      >\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">\n        <img alt=\"Question and Answer Logo\" src=\"assets/qa-logo.png\" />\n        Question & Answers\n      </a>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/app-header/app-header.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand {\n  padding: 5px; }\n  .navbar-brand img {\n    height: 100%;\n    display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:27:45
 * @modify date 2019-05-26 18:27:45
 * @desc [this is the application level header component]
 */

var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
    }
    return AppHeaderComponent;
}());
AppHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/app-header/app-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-header/app-header.component.sass")]
    })
], AppHeaderComponent);

//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_content_app_content_component__ = __webpack_require__("../../../../../src/app/app-content/app-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_content_question_details_question_details_component__ = __webpack_require__("../../../../../src/app/app-content/question-details/question-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_content_questions_list_questions_list_component__ = __webpack_require__("../../../../../src/app/app-content/questions-list/questions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__ = __webpack_require__("../../../../../src/app/services/AppConstants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });






var routes = [
    {
        path: __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__["a" /* APP_ROUTING_PATHS */].ROOT_PATH,
        redirectTo: __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__["a" /* APP_ROUTING_PATHS */].APP_PATH,
        pathMatch: 'full'
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__["a" /* APP_ROUTING_PATHS */].APP_PATH,
        component: __WEBPACK_IMPORTED_MODULE_1__app_content_app_content_component__["a" /* AppContentComponent */],
        data: { title: '' },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__app_content_questions_list_questions_list_component__["a" /* QuestionsListComponent */],
                pathMatch: 'full'
            },
            {
                path: __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__["a" /* APP_ROUTING_PATHS */].QUESTION_ID,
                component: __WEBPACK_IMPORTED_MODULE_2__app_content_question_details_question_details_component__["a" /* QuestionDetailsComponent */]
            }
        ]
    },
    { path: __WEBPACK_IMPORTED_MODULE_5__services_AppConstants__["a" /* APP_ROUTING_PATHS */].NOT_FOUND, component: __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<app-loader [loading]=\"AppLoaderService.loading\"></app-loader>\n<div id=\"toasterContainer\">\n  <toaster-container [toasterconfig]=\"AppToasterService.configToaster\"></toaster-container>\n</div>\n<div id=\"app-main\">\n  <app-header></app-header>\n  <!-- <app-content></app-content> -->\n  <router-outlet></router-outlet>\n\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app-main {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_loader_service__ = __webpack_require__("../../../../../src/app/services/app-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_toaster_service__ = __webpack_require__("../../../../../src/app/services/app-toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_title_service__ = __webpack_require__("../../../../../src/app/services/title.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:22:52
 * @modify date 2019-05-26 18:22:52
 * @desc [This is the root component where angular application will initiate]
 */







var AppComponent = (function () {
    function AppComponent(toasterService, titleService, router, appTitleService) {
        this.toasterService = toasterService;
        this.titleService = titleService;
        this.router = router;
        this.appTitleService = appTitleService;
        this.AppLoaderService = __WEBPACK_IMPORTED_MODULE_4__services_app_loader_service__["a" /* AppLoaderService */];
        this.AppToasterService = __WEBPACK_IMPORTED_MODULE_5__services_app_toaster_service__["a" /* AppToasterService */];
        __WEBPACK_IMPORTED_MODULE_5__services_app_toaster_service__["a" /* AppToasterService */].setToasterService(toasterService);
        this.appTitleService.init();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_title_service__["a" /* AppTitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_title_service__["a" /* AppTitleService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_quill__ = __webpack_require__("../../../../ngx-quill/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_content_app_content_component__ = __webpack_require__("../../../../../src/app/app-content/app-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_content_question_details_question_details_component__ = __webpack_require__("../../../../../src/app/app-content/question-details/question-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_content_questions_list_questions_list_component__ = __webpack_require__("../../../../../src/app/app-content/questions-list/questions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_content_shared_app_content_model__ = __webpack_require__("../../../../../src/app/app-content/shared/app-content.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_content_shared_app_content_service__ = __webpack_require__("../../../../../src/app/app-content/shared/app-content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_footer_app_footer_component__ = __webpack_require__("../../../../../src/app/app-footer/app-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_header_app_header_component__ = __webpack_require__("../../../../../src/app/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loader_loader_component__ = __webpack_require__("../../../../../src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_deep_find_pipe__ = __webpack_require__("../../../../../src/app/pipes/deep-find.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_safe_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_title_service__ = __webpack_require__("../../../../../src/app/services/title.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:21:14
 * @modify date 2019-05-26 18:21:14
 * @desc [Main App Module]
 */






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__app_header_app_header_component__["a" /* AppHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__app_footer_app_footer_component__["a" /* AppFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_content_app_content_component__["a" /* AppContentComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_deep_find_pipe__["a" /* ReadNestedPropertyPipe */],
            __WEBPACK_IMPORTED_MODULE_20__pipes_safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_18__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_content_question_details_question_details_component__["a" /* QuestionDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_content_questions_list_questions_list_component__["a" /* QuestionsListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_loading__["a" /* NgxLoadingModule */].forRoot({}),
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["a" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_quill__["a" /* QuillModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_12__app_content_shared_app_content_service__["a" /* AppContentService */], __WEBPACK_IMPORTED_MODULE_11__app_content_shared_app_content_model__["a" /* AppContent */], __WEBPACK_IMPORTED_MODULE_21__services_title_service__["a" /* AppTitleService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-25 15:29:43
 * @modify date 2019-05-25 15:29:43
 * @desc [description]
 */

var LoaderComponent = (function () {
    function LoaderComponent() {
        this.loaderConfig = {
            backdropBackgroundColour: 'rgba(255,255,255,0.3)',
            fullScreenBackdrop: 'true',
            primaryColour: '#1C4E84',
            secondaryColour: '#1C4E84',
            tertiaryColour: '#1C4E84'
        };
    }
    return LoaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], LoaderComponent.prototype, "loading", void 0);
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-loader',
        template: "\n    <div id=\"loaderParent\" *ngIf=\"loading\">\n      <ngx-loading [show]=\"loading\" [config]=\"loaderConfig\"></ngx-loading>\n    </div>\n  "
    })
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Error Page -->\n<div class=\"error\">\n  <div class=\"container-floud\">\n      <div class=\"col-xs-12 ground-color text-center\">\n          <div class=\"container-error-404\">\n              <div class=\"clip\"><div class=\"shadow\"><span class=\"digit thirdDigit\">4</span></div></div>\n              <div class=\"clip\"><div class=\"shadow\"><span class=\"digit secondDigit\">0</span></div></div>\n              <div class=\"clip\"><div class=\"shadow\"><span class=\"digit firstDigit\">4</span></div></div>              \n          </div>\n          <h2 class=\"h1\">Sorry! Page not found</h2>\n      </div>\n  </div>\n</div>\n<!-- Error Page -->"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n  overflow: hidden;\n  position: relative;\n  min-height: calc(100% - 247px); }\n  .error .clip .shadow {\n    height: 180px; }\n  .error .clip:nth-of-type(2) .shadow {\n    width: 130px; }\n  .error .clip:nth-of-type(1) .shadow, .error .clip:nth-of-type(3) .shadow {\n    width: 250px; }\n  .error .digit {\n    width: 150px;\n    height: 150px;\n    line-height: 150px;\n    font-size: 120px;\n    font-weight: bold; }\n  .error h2 {\n    font-size: 32px; }\n  .error .container-error-404 {\n    margin-top: 10%;\n    position: relative;\n    height: 250px;\n    padding-top: 40px; }\n    .error .container-error-404 .clip {\n      display: inline-block;\n      transform: skew(-45deg); }\n  .error .clip .shadow {\n    overflow: hidden; }\n  .error .clip:nth-of-type(2) .shadow {\n    overflow: hidden;\n    position: relative;\n    box-shadow: inset 20px 0px 20px -15px rgba(150, 150, 150, 0.8), 20px 0px 20px -15px rgba(150, 150, 150, 0.8); }\n  .error .clip:nth-of-type(3) .shadow:after, .error .clip:nth-of-type(1) .shadow:after {\n    content: \"\";\n    position: absolute;\n    right: -8px;\n    bottom: 0px;\n    z-index: 9999;\n    height: 100%;\n    width: 10px;\n    background: linear-gradient(90deg, transparent, rgba(173, 173, 173, 0.8), transparent);\n    border-radius: 50%; }\n  .error .clip:nth-of-type(3) .shadow:after {\n    left: -8px; }\n  .error .digit {\n    position: relative;\n    top: 8%;\n    color: white;\n    background: #07B3F9;\n    border-radius: 50%;\n    display: inline-block;\n    transform: skew(45deg); }\n  .error .clip:nth-of-type(2) .digit {\n    left: -10%; }\n  .error .clip:nth-of-type(1) .digit {\n    right: -20%; }\n  .error .clip:nth-of-type(3) .digit {\n    left: -20%; }\n  .error h2 {\n    color: #A2A2A2;\n    font-weight: bold;\n    padding-bottom: 20px; }\n  .error .msg {\n    position: relative;\n    z-index: 9999;\n    display: block;\n    background: #535353;\n    color: #A2A2A2;\n    border-radius: 50%;\n    font-style: italic; }\n  .error .triangle {\n    position: absolute;\n    z-index: 999;\n    transform: rotate(45deg);\n    content: \"\";\n    width: 0;\n    height: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:28:17
 * @modify date 2019-05-26 18:28:17
 * @desc [This component will render when there is a not matching route available]
 */

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.sass")]
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/deep-find.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_object_utils_service__ = __webpack_require__("../../../../../src/app/services/object-utils.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadNestedPropertyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReadNestedPropertyPipe = (function () {
    function ReadNestedPropertyPipe() {
    }
    ReadNestedPropertyPipe.prototype.transform = function (obj, readKey) {
        if (obj instanceof Object && (readKey || '').toString().trim().length > 0) {
            return __WEBPACK_IMPORTED_MODULE_1__services_object_utils_service__["a" /* ObjectUtils */].deepFind(obj, readKey);
        }
        return null;
    };
    return ReadNestedPropertyPipe;
}());
ReadNestedPropertyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'deepFind', pure: true })
], ReadNestedPropertyPipe);

//# sourceMappingURL=deep-find.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Invalid safe type specified: " + type);
        }
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/AppConstants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOASTER_MESSAGE_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return QUESTION_DETAILS_TOASTER_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QUESTIONS_RESPONSE_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ANSWER_RESPONSE_KEYS; });
/* unused harmony export EMPTY_STRING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING_PATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NEW_ANSWER_VALIDATION_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return VALIDATION_ERROR_TYPES; });
/* unused harmony export APPLICATION_MAIN_TITLE */
/* harmony export (immutable) */ __webpack_exports__["f"] = UNSUBSCRIBE;
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-25 15:29:56
 * @modify date 2019-05-25 15:29:56
 * @desc This file contains all the application level constants
 */
var TOASTER_MESSAGE_TYPES = {
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info'
};
var QUESTION_DETAILS_TOASTER_MESSAGES = {
    FAILED_TO_LOAD_QUESTION: 'No Question found for the question id : ',
    FAILED_TO_LOAD_ANSWERS: 'Unable to Retreive the available answers...'
};
var QUESTIONS_RESPONSE_KEYS = {
    LIST: 'feed_questions',
    ID: 'Id',
    TEXT: 'Text',
    UP_VOTES: 'upvotes',
    DOWN_VOTES: 'downvotes',
    QUESTION_DOWN_VOTED: 'downVoted',
    QUESTION_UP_VOTED: 'upVoted',
    QUESTION_DOWN_VOTED_BY_YOU: 'You felt that this is not a proper question',
    QUESTION_NOT_PROPER: 'Question is not proper',
    QUESTION_IS_APPROPRIATE: 'This is a valid question and everyone has a question like this',
    QUESTION_UP_VOTED_BY_YOU: 'You felt this question is thought provoking!'
};
var ANSWER_RESPONSE_KEYS = {
    LIST: 'feed_answers',
    ID: 'Id',
    QUESTION_ID: 'Question-Id',
    ANSWER: 'Answer',
    UPVOTES: 'upvotes',
    DOWNVOTES: 'downvotes',
    CREATED_AT: 'created_at',
    NAME: 'Name',
    SURNAME: 'Surname',
    AVATAR: 'Avatar',
    CREATED_BY: 'created_by'
};
var EMPTY_STRING = '';
var APP_ROUTING_PATHS = {
    ROOT_PATH: EMPTY_STRING,
    APP_PATH: 'app',
    NOT_FOUND: '**',
    QUESTION_ID: ':id',
    ROOT_PATH_URL: '/'
};
var NEW_ANSWER_VALIDATION_MESSAGES = {
    REQUIRED: 'Please enter your answer',
    MIN_LENGTH: 'Please enter minimum 10 characters',
    MAX_LENGTH: 'Please consice your answer to maximum of 500 characters'
};
var VALIDATION_ERROR_TYPES = {
    REQUIRED: 'required',
    MIN_LENGTH: 'minLength',
    MAX_LENGTH: 'maxLength'
};
var APPLICATION_MAIN_TITLE = 'Questions & Answers';
function UNSUBSCRIBE(sub) {
    if (sub instanceof Object && sub.unsubscribe instanceof Function) {
        sub.unsubscribe();
    }
}
//# sourceMappingURL=AppConstants.js.map

/***/ }),

/***/ "../../../../../src/app/services/app-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoaderService; });
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-25 15:29:52
 * @modify date 2019-05-25 15:29:52
 * @desc [description]
 */
var AppLoaderService = (function () {
    function AppLoaderService() {
    }
    AppLoaderService.showLoader = function (bool) {
        if (bool === void 0) { bool = false; }
        this.loading = bool;
    };
    return AppLoaderService;
}());

AppLoaderService.loading = false;
//# sourceMappingURL=app-loader.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/app-toaster.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppToasterService; });
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-25 15:29:27
 * @modify date 2019-05-25 15:29:27
 * @desc [description]
 */

/*
Purpose : This is the application level toaster which will help to show the toaster to user.
Usage : AppToasterService.populateToaster(TOASTER_MESSAGE_TYPES.INFO, <message to display|HTML message to display>, [<false|true>]);'
*/
var AppToasterService = (function () {
    function AppToasterService() {
    }
    AppToasterService.populateToaster = function (toastertype, toasterMessage, toastWithBodyFlag) {
        var toast = {
            type: toastertype
        };
        if (toastWithBodyFlag) {
            toast.body = "<div class=\"toast-msg " + toastertype + "-msg\">" + toasterMessage + "</div>";
            toast.bodyOutputType = __WEBPACK_IMPORTED_MODULE_0_angular2_toaster__["c" /* BodyOutputType */].TrustedHtml;
        }
        else {
            toast.title = toasterMessage;
        }
        return this.toasts[this.toasts.push(this.toasterService.pop(toast))];
    };
    AppToasterService.setToasterService = function (toasterService) {
        this.toasterService = toasterService;
    };
    AppToasterService.clearAllToasts = function () {
        if (this.toasts instanceof Array && this.toasts.length > 0) {
            this.toasts.forEach(this.clearLastToast.bind(this));
        }
    };
    AppToasterService.clearLastToast = function () {
        if (this.toasts instanceof Array && this.toasts.length > 0) {
            this.toasts.pop();
            this.toasterService.clear();
        }
    };
    return AppToasterService;
}());

AppToasterService.toasts = [];
AppToasterService.configToaster = new __WEBPACK_IMPORTED_MODULE_0_angular2_toaster__["d" /* ToasterConfig */]({
    positionClass: 'toast-top-right',
    timeout: 20000,
    limit: 1
});
//# sourceMappingURL=app-toaster.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/object-utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectUtils; });
var ObjectUtils = (function () {
    function ObjectUtils() {
    }
    /**
     *  Get a value deep inside an object or array
     *
     * @param {object | array} object or array to get the values inside
     * @param {path} location of key to read from the object
     * @returns {string|number}
     *
     */
    ObjectUtils.deepFind = function (obj, path) {
        if (obj instanceof Object) {
            if (typeof path === 'string') {
                if (path.length > 0) {
                    var paths = path.split('.');
                    var current = obj;
                    var i = void 0;
                    for (i = 0; i < paths.length; ++i) {
                        if (current[paths[i]] === undefined) {
                            return undefined;
                        }
                        else {
                            current = current[paths[i]];
                        }
                    }
                    return current;
                }
            }
        }
        return null;
    };
    /**
     *  Set a value deep inside an object or array
     *
     * @param {object | array} object or array to get the values inside
     * @param {any} any datatype which is used to set for given key
     * @param {path} location of key to set a value
     *
     */
    ObjectUtils.setToValue = function (obj, value, path) {
        path = path.split('.');
        for (var i = 0; i < path.length - 1; i++) {
            obj = obj[path[i]];
        }
        obj[path[i]] = value;
    };
    ObjectUtils.copy = function (value) {
        return JSON.parse(JSON.stringify(value));
    };
    return ObjectUtils;
}());

//# sourceMappingURL=object-utils.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/title.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTitleService; });
/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:08:07
 * @modify date 2019-05-26 18:08:07
 * @desc [Updates the browser title based on route in which you are in]
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var APP_TITLE = 'Questions & Answers ';
var SEPARATOR = ' | ';
var AppTitleService = AppTitleService_1 = (function () {
    function AppTitleService(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    AppTitleService.ucFirst = function (string) {
        if (!string) {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    AppTitleService.prototype.init = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]; })
            .map(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .map(function (data) {
            if (data.title) {
                // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
                return data.title;
            }
            else {
                // If not, we do a little magic on the url to create an approximation
                return _this.router.url.split('/').reduce(function (acc, frag) {
                    if (acc && frag) {
                        acc += SEPARATOR;
                    }
                    return acc + AppTitleService_1.ucFirst(frag);
                });
            }
        })
            .subscribe(function (pathString) { return _this.titleService.setTitle(APP_TITLE + " " + pathString); });
    };
    return AppTitleService;
}());
AppTitleService = AppTitleService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], AppTitleService);

var AppTitleService_1, _a, _b, _c;
//# sourceMappingURL=title.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'https://api.myjson.com/bins/',
    questionsUrl: 'dck5b',
    answersUrl: 'hildr'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map