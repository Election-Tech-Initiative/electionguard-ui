import ElectionRow from '../components/ElectionTable/ElectionRow';

export const getElections = (): ElectionRow[] => {
    const date = new Date();
    const laterDate = new Date();
    laterDate.setDate(date.getDate() + 10);
    return [
        new ElectionRow(
            'election-1',
            'Election 1 Services',
            'Maryland',
            'Montgomery County',
            date,
            true
        ),
        new ElectionRow('election-2', 'Election 2 Services', 'Maryland', 'Montgomery County', date),
        new ElectionRow('election-3', 'Election 3 Services', 'Maryland', 'Montgomery County', date),
        new ElectionRow(
            'election-4',
            'Election 4 Services',
            'Maryland',
            'Montgomery County',
            laterDate
        ),
        new ElectionRow(
            'election-5',
            'Election 5 Services',
            'Maryland',
            'Montgomery County',
            laterDate
        ),
    ];
};

export default getElections;
