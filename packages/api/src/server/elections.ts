import ElectionRow from '../models/ElectionRow';

export const getElections = (): ElectionRow[] => {
    const date = new Date();
    const laterDate = new Date();
    laterDate.setDate(date.getDate() + 10);
    return [
        new ElectionRow('election-1s', 'Election 1 server', 'Maryland', 'Montgomery County', date, true),
        new ElectionRow('election-2s', 'Election 2 server', 'Maryland', 'Montgomery County', date),
        new ElectionRow('election-3s', 'Election 3 server', 'Maryland', 'Montgomery County', date),
        new ElectionRow('election-4s', 'Election 4 server', 'Maryland', 'Montgomery County', laterDate),
        new ElectionRow('election-5s', 'Election 5 server', 'Maryland', 'Montgomery County', laterDate),
    ];
};

export default getElections;
