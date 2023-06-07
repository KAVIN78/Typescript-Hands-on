var AutomationReport = /** @class */ (function () {
    function AutomationReport(testcase, status) {
        this.testcase = testcase;
        this.status = status;
    }
    AutomationReport.prototype.generateReport = function () {
        console.log("Testcase - ".concat(this.testcase, " is ").concat(this.status, ": Application issue"));
    };
    return AutomationReport;
}());
var MedicalReport = /** @class */ (function () {
    function MedicalReport(patientName, condition) {
        this.PatientName = patientName;
        this.condition = condition;
    }
    MedicalReport.prototype.generateReport = function () {
        console.log("Patient ".concat(this.PatientName, " has ").concat(this.condition, ": fever got cured"));
    };
    return MedicalReport;
}());
// Creating objects
var automationReport1 = new AutomationReport('user login', 'fail');
var medicalReport1 = new MedicalReport('Kavin', 'discharged');
var automationReport2 = new AutomationReport('user signup', 'pass');
var medicalReport2 = new MedicalReport('Bhavi', 'admitted');
// Calling generateReport() method on objects
automationReport1.generateReport(); // Output: Testcase - user login is fail: Application issue
medicalReport1.generateReport(); // Output: Patient xyz has discharged: fever got cured
automationReport2.generateReport();
medicalReport2.generateReport();
