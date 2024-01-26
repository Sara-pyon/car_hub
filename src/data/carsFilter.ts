const markers = [
    'Toyota',
    'Honda',
    'Nissan',
    'Mitsubishi',
    'Mazda',
    'Suzuki',
    'Subaru',
    'Lexus',
    'Hino',
    'Isuzu',
    'Ford',
    'General Motors',
    'Fiat Chrysler Automobiles',
    'Volkswagen',
    'Mercedes-Benz',
    'BMW',
    'Audi',
    'Porsche',
    'Jaguar Land Rover',
    'Ferrari',
  ];

  const years = [];
  for (let i=2010; i<2024; i++){
    years.push(i);
  }

  const fuelType = ['Gas','Diesel','Electricity'];

  const drives = ['FWD','RWD','AED','4WD'];

  const transmission = ['Manual', 'Automatic']

  export default {markers, years, fuelType, drives, transmission};

  