'use server';
import React from 'react';
import { UserComponent } from '../user-data/user-component';
async function fetchStats(companyId: any) {
  try {
    const response = await fetch(`http://localhost:3000/company/${companyId}/stats`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const companyStats = await response.json();
    return companyStats;
  } catch (error) {
    console.error(`Error fetching company stats for company ${companyId}`, error);
  }
}
const CompanyStats = async ({ params }: any) => {
  const companyId = params?.id;

  const companyStats = await fetchStats(companyId);

  console.log(companyStats, 'companyStats');

  return (
    <div style={{ display: 'flex', gap: '50px', padding: '100px' }}>
      <div>
        <div>{`Company ${companyStats?.id}`}</div>
        <div>{`Company users: ${companyStats?.companyUsers}`}</div>
        <div>{`Company activity: ${companyStats?.companyActivity}`}</div>
        <UserComponent />
      </div>
    </div>
  );
};

export default CompanyStats;
