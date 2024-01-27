import React from 'react';

const CompanyData = ({ currentCompany }: any) => {
  console.log(currentCompany, 'currentCompany to CompanyData');
  return (
    <div style={{ padding: '100px' }}>
      <div style={{ display: 'flex', gap: '50px' }}>
        <div style={{ width: '200px', height: '200px', background: `${currentCompany?.color}` }} />
        <div>
          <h3>{currentCompany?.companyName}</h3>
          <div>{currentCompany?.companyDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyData;
