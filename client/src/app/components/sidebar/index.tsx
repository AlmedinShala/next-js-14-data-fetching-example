import React from 'react';
import CompanyButtons from '../client-side/buttons';

const Sidebar = async () => {
  async function fetchAllCompanies() {
    try {
      const response = await fetch(`http://localhost:3000/companies`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const companies = await response.json();
      console.log(companies, 'companies');
      return companies;
    } catch (error) {
      console.error('Error fetching company data:', error);
    }
  }

  const companiesData = await fetchAllCompanies();

  console.log(companiesData, 'companiesData to SideBar');
  return (
    <div style={{ width: '150px', height: '100vh', backgroundColor: 'gray' }}>
      <CompanyButtons companiesData={companiesData} />
    </div>
  );
};

export default Sidebar;
