enum TestStatus {
    Pass = 'pass',
    Fail = 'fail'
}
interface Report {
    generateReport(): string;
  }
  
  class AutomationReports implements Report {
    constructor(public testcase: string, public status: 'pass' | 'fail') {}
  
    generateReport(): string {
      return (`Testcase - ${this.testcase} is ${this.status}: Application issue`);
    }
  }
  
  class MedicalReports implements Report {
    constructor(public patientName: string, public condition: 'discharged' | 'admitted') {}
  
    generateReport(): string {
      return (`Patient ${this.patientName} has ${this.condition}: fever got cured`);
    }
  }
  
  function logReports(...reports: Report[]) {
    reports.forEach((report, index) => {
      console.log(`${index + 1}. ${report.generateReport()}`);
    });
  }
  
  logReports(
    new AutomationReports('user login', 'fail'),
    new MedicalReports('xyz', 'discharged'),
    new AutomationReports('user signup', 'pass'),
    new MedicalReports('abc', 'admitted')
  );
