import StaffList from '@/components/staffList';
import React from 'react';

const page = () => {
  const dummyData : userData[] = [
    {
      id: 1,
      name: 'Kristen Ramos',
      email: 'kristenRamos@example.com',
      title: 'manager',
      image:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqNYUeYP1uol6YjNiPCEAKDy9W6J-rS6R83H1Zhs6xeTWb0gAs',
    },
    {
      id: 2,
      name: 'Floyd Miles',
      email: 'floydmiles@example.com',
      title: 'manager',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-Vz5wVNPPDN0uf6zm2FhWdPAEVUdglgKDoOvqZqd4eMjRyF96',
    },
    {
      id: 3,
      name: 'Courtney Henry',
      email: 'henry@example.com',
      title: 'manager',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIDJad0ZxiIGhaUvJkS1OROWs_jRrUmi1Jm_k1DdpVRYEKuTi',
    },
    {
      id: 4,
      name: 'Ted Fox',
      email: 'kristenRamos@example.com',
      title: 'manager',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdmN5klo-ONHICypQf2Ud5Qf-NljMjvUoRel3nPMJX2iD6EYP',
    },
  ];
  return (
    <div className='h-screen bg-sky-900 '>
      <StaffList data={dummyData} />
    </div>
  );
};

export default page;
