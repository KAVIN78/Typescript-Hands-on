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
      return `Testcase - ${this.testcase} is ${this.status}: Application issue`;
    }
  }
  
  class MedicalReports implements Report {
    constructor(public patientName: string, public condition: 'discharged' | 'admitted') {}
  
    generateReport(): string {
      return `Patient ${this.patientName} has ${this.condition}: fever got cured`;
    }
  }
  
  function logReport(report1: Report, report2: Report) {
    console.log(`${report1.generateReport()} ${report2.generateReport()}`);
  }
  
  const automationReport: Report = {
    generateReport() {
      return "Testcase - user login is fail: Application issue";
    }
  };
  
  const medicalReport: Report = {
    generateReport() {
      return "Patient xyz has discharged: fever got cured";
    }
  };
  
  logReport(
    new AutomationReports('user login', 'fail'),
    new MedicalReports('xyz', 'discharged')
  );
  
  logReport(
    {
      generateReport() {
        return "Testcase - user signup is pass: success";
      }
    },
    {
      generateReport() {
        return "Patient abc has admitted: leg injury";
      }
    }
  );