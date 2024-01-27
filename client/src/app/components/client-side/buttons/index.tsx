'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const CompanyButtons = ({ companiesData }: any) => {
  const router = useRouter();
  const handleButtonClick = (companyId: number) => {
    const newPath = `/${companyId}`;
    router.push(newPath);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: '16px',
        gap: '16px',
      }}
    >
      {companiesData?.map((company: any) => (
        <button
          key={company.id}
          style={{
            width: '50px',
            height: '50px',
            background: `${company.color}`,
            border: '1px solid black',
          }}
          onClick={() => handleButtonClick(company.id)}
        >
          {company.id}
        </button>
      ))}
    </div>
  );
};

export default CompanyButtons;
