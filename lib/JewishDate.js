"use strict";
(function (months) {
    months[months["NISSAN"] = 1] = "NISSAN";
    months[months["IYAR"] = 2] = "IYAR";
    months[months["SIVAN"] = 3] = "SIVAN";
    months[months["TAMMUZ"] = 4] = "TAMMUZ";
    months[months["AV"] = 5] = "AV";
    months[months["ELUL"] = 6] = "ELUL";
    months[months["TISHREI"] = 7] = "TISHREI";
    months[months["CHESVAN"] = 8] = "CHESVAN";
    months[months["KISLEV"] = 9] = "KISLEV";
    months[months["TEVET"] = 10] = "TEVET";
    months[months["SHEVAT"] = 11] = "SHEVAT";
    months[months["ADAR_I"] = 12] = "ADAR_I";
    months[months["ADAR_II"] = 13] = "ADAR_II";
})(exports.months || (exports.months = {}));
var months = exports.months;
(function (years) {
    years[years["CHASER"] = 0] = "CHASER";
    years[years["KESIDRAN"] = 1] = "KESIDRAN";
    years[years["SHALEM"] = 2] = "SHALEM";
})(exports.years || (exports.years = {}));
var years = exports.years;
var JewishDate = (function () {
    function JewishDate() {
        this.JEWISH_EPOCH = -1373429;
        this.CHALAKIM_PER_MINUTE = 18;
        this.CHALAKIM_PER_HOUR = this.CHALAKIM_PER_MINUTE * 60;
        this.CHALAKIM_PER_DAY = this.CHALAKIM_PER_HOUR * 24;
        this.CHALAKIM_PER_MONTH = (29 * 24 + 12) * this.CHALAKIM_PER_MINUTE + 793;
        this.CHALAKIM_MOLAD_TOHU = 31524;
    }
    Object.defineProperty(JewishDate.prototype, "moladHours", {
        get: function () {
            return this._moladHours;
        },
        set: function (newMoladHours) {
            this._moladHours = newMoladHours;
        },
        enumerable: true,
        configurable: true
    });
    return JewishDate;
}());
exports.JewishDate = JewishDate;
