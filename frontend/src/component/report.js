import React from 'react'
import Navbar from './navbar.js';
import Footer from './footer.js';
import { useState } from 'react'; 

function Report() {
  const [generated, setGenerated] = useState(false); 
  const [reportData, setReportData] = useState([]); 

  const generateReport = () => {
    if (!generated) { 
      const dummyReport = [
        { id: 1, name: 'John Doe', age: 30, condition: 'Fever' },
        { id: 2, name: 'Jane Smith', age: 25, condition: 'Headache' },
        { id: 3, name: 'Alice Johnson', age: 35, condition: 'Back Pain' },
      ];
      setReportData(dummyReport); 
      setGenerated(true); 
    }
  };

  return (
    <>
    <Navbar/>
    <div>
      <div className="generate-report-container">
        <button onClick={generateReport} disabled={generated}>Generate Report</button>
        {generated && (
          <div>
            <h2>Patient Report</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Condition</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map(patient => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Report;
