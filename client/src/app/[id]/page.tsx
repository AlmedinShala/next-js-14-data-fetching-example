import { Suspense } from 'react';
import CompanyData from '../components/company-data';
import CompanyStats from '../components/company-stats';

const Page = async ({ params }: any) => {
  async function fetchCompany(companyId: any) {
    try {
      const response = await fetch(`http://localhost:3000/company/${companyId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const companyData = await response.json();
      return companyData;
    } catch (error) {
      console.error(`Error fetching company data for company ${companyId}`, error);
    }
  }
  const currentCompany = await fetchCompany(params.id);
  console.log(currentCompany, 'currentCompany Data to Page');
  return (
    <div>
      <CompanyData currentCompany={currentCompany} />
      <Suspense fallback={<div style={{ padding: '50px' }}>Loading from suspense...</div>}>
        <CompanyStats params={params} />
      </Suspense>
    </div>
  );
};
export default Page;
