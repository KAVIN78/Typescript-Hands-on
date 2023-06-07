interface Report {
    generateReport(): void;
  }
  
  class AutomationReport implements Report {
   testcase : string;
    status: 'pass' | 'fail';
  
    constructor(testcase: string, status: 'pass' | 'fail') {
      this.testcase = testcase;
      this.status = status;
    }
  
    generateReport() {
      console.log(`Testcase - ${this.testcase} is ${this.status}: Application issue`);
    }
  }
  
  class MedicalReport implements Report {
    PatientName: string;
    condition: 'discharged' | 'admitted';
  
    constructor(patientName: string, condition: 'discharged' | 'admitted') {
      this.PatientName = patientName;
      this.condition = condition;
    }
  
    generateReport() {
      console.log(`Patient ${this.PatientName} has ${this.condition}: fever got cured`);
    }
  }
  
  // Creating objects
  const automationReport1 = new AutomationReport('user login', 'fail');
  const medicalReport1 = new MedicalReport('Kavin', 'discharged');

  const automationReport2 = new AutomationReport('user signup','pass');
  const medicalReport2 = new MedicalReport('Bhavi','admitted');
  
  // Calling generateReport() method on objects
  automationReport1.generateReport(); // Output: Testcase - user login is fail: Application issue
  medicalReport1.generateReport(); // Output: Patient xyz has discharged: fever got cured
  
  automationReport2.generateReport();
  medicalReport2.generateReport();