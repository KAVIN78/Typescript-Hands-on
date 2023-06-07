var AutomationReports = /** @class */ (function () {
    function AutomationReports(testcase, status) {
        this.testcase = testcase;
        this.status = status;
    }
    AutomationReports.prototype.generateReport = function () {
        return "Testcase - ".concat(this.testcase, " is ").concat(this.status, ": Application issue");
    };
    return AutomationReports;
}());
var MedicalReports = /** @class */ (function () {
    function MedicalReports(patientName, condition) {
        this.patientName = patientName;
        this.condition = condition;
    }
    MedicalReports.prototype.generateReport = function () {
        return "Patient ".concat(this.patientName, " has ").concat(this.condition, ": fever got cured");
    };
    return MedicalReports;
}());
function logReport(report1, report2) {
    console.log("1. ".concat(report1.generateReport(), " ").concat(report2.generateReport()));
}
var automationReport = {
    generateReport: function () {
        return "Testcase - user login is fail: Application issue";
    }
};
var medicalReport = {
    generateReport: function () {
        return "Patient xyz has discharged: fever got cured";
    }
};
logReport(new AutomationReports('user login', 'fail'), new MedicalReports('xyz', 'discharged'));
logReport({
    generateReport: function () {
        return "Testcase - user signup is pass: success";
    }
}, {
    generateReport: function () {
        return "Patient abc has admitted: leg injury";
    }
});
