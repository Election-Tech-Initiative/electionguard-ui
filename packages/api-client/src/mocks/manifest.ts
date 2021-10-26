import { ElectionManifest } from '../models/election';
import { ElementModQ } from '../models/keyCeremony';
import { Manifest } from '../models/manifestPreview';

export const getManifest = async (_manifest_hash: string): Promise<Manifest[] | undefined> => [
    {
        manifest_hash: 'F50393532F36544827661DF2279755CFFA079D32C6E0A8E8570D1D91FBAAD245',
        manifest: {
            ballot_styles: [
                {
                    geopolitical_unit_ids: ['hamilton-county', 'congress-district-7'],
                    object_id: 'congress-district-7-hamilton-county',
                },
            ],
            candidates: [
                {
                    name: {
                        text: [{ language: 'en', value: 'Joseph Barchi and Joseph Hallaren' }],
                    },
                    object_id: 'barchi-hallaren',
                    party_id: 'whig',
                },
                {
                    name: { text: [{ language: 'en', value: 'Adam Cramer and Greg Vuocolo' }] },
                    object_id: 'cramer-vuocolo',
                    party_id: 'federalist',
                },
            ],
            contact_information: {
                address_line: ['1234 Paul Revere Run', 'Hamilton, Ozark 99999'],
                email: [
                    { annotation: 'press', value: 'inquiries@hamilton.state.gov' },
                    { annotation: 'federal', value: 'commissioner@hamilton.state.gov' },
                ],
                name: 'Hamilton State Election Commission',
                phone: [
                    { annotation: 'domestic', value: '123-456-7890' },
                    { annotation: 'international', value: '+1-123-456-7890' },
                ],
            },
            contests: [
                {
                    '@type': 'CandidateContest',
                    ballot_selections: [
                        {
                            candidate_id: 'barchi-hallaren',
                            object_id: 'barchi-hallaren-selection',
                            sequence_order: 0,
                        },
                        {
                            candidate_id: 'cramer-vuocolo',
                            object_id: 'cramer-vuocolo-selection',
                            sequence_order: 1,
                        },
                        {
                            candidate_id: 'court-blumhardt',
                            object_id: 'court-blumhardt-selection',
                            sequence_order: 2,
                        },
                        {
                            candidate_id: 'boone-lian',
                            object_id: 'boone-lian-selection',
                            sequence_order: 3,
                        },
                    ],
                    ballot_subtitle: {
                        text: [
                            { language: 'en', value: 'Vote for one' },
                            { language: 'es', value: 'Votar por uno' },
                        ],
                    },
                    ballot_title: {
                        text: [
                            {
                                language: 'en',
                                value: 'President and Vice President of the United States',
                            },
                            {
                                language: 'es',
                                value: 'Presidente y Vicepresidente de los Estados Unidos',
                            },
                        ],
                    },
                    electoral_district_id: 'hamilton-county',
                    name: 'President and Vice President of the United States',
                    number_elected: 1,
                    object_id: 'president-vice-president-contest',
                    sequence_order: 0,
                    vote_variation: 'one_of_m',
                    votes_allowed: 1,
                },
            ],
        },
    },
];

export const putManifest = async (_manifest: ElectionManifest): Promise<ElementModQ | undefined> =>
    'fake ElementModQ';

export const findManifest = async (
    _skip: number,
    _limit: number,
    _manifest_id: string
): Promise<Manifest[] | undefined> => [
    {
        manifest_hash: 'F50393532F36544827661DF2279755CFFA079D32C6E0A8E8570D1D91FBAAD245',
        manifest: {
            ballot_styles: [
                {
                    geopolitical_unit_ids: ['hamilton-county', 'congress-district-7'],
                    object_id: 'congress-district-7-hamilton-county',
                },
            ],
            candidates: [
                {
                    name: {
                        text: [{ language: 'en', value: 'Joseph Barchi and Joseph Hallaren' }],
                    },
                    object_id: 'barchi-hallaren',
                    party_id: 'whig',
                },
                {
                    name: { text: [{ language: 'en', value: 'Adam Cramer and Greg Vuocolo' }] },
                    object_id: 'cramer-vuocolo',
                    party_id: 'federalist',
                },
            ],
            contact_information: {
                address_line: ['1234 Paul Revere Run', 'Hamilton, Ozark 99999'],
                email: [
                    { annotation: 'press', value: 'inquiries@hamilton.state.gov' },
                    { annotation: 'federal', value: 'commissioner@hamilton.state.gov' },
                ],
                name: 'Hamilton State Election Commission',
                phone: [
                    { annotation: 'domestic', value: '123-456-7890' },
                    { annotation: 'international', value: '+1-123-456-7890' },
                ],
            },
            contests: [
                {
                    '@type': 'CandidateContest',
                    ballot_selections: [
                        {
                            candidate_id: 'barchi-hallaren',
                            object_id: 'barchi-hallaren-selection',
                            sequence_order: 0,
                        },
                        {
                            candidate_id: 'cramer-vuocolo',
                            object_id: 'cramer-vuocolo-selection',
                            sequence_order: 1,
                        },
                        {
                            candidate_id: 'court-blumhardt',
                            object_id: 'court-blumhardt-selection',
                            sequence_order: 2,
                        },
                        {
                            candidate_id: 'boone-lian',
                            object_id: 'boone-lian-selection',
                            sequence_order: 3,
                        },
                    ],
                    ballot_subtitle: {
                        text: [
                            { language: 'en', value: 'Vote for one' },
                            { language: 'es', value: 'Votar por uno' },
                        ],
                    },
                    ballot_title: {
                        text: [
                            {
                                language: 'en',
                                value: 'President and Vice President of the United States',
                            },
                            {
                                language: 'es',
                                value: 'Presidente y Vicepresidente de los Estados Unidos',
                            },
                        ],
                    },
                    electoral_district_id: 'hamilton-county',
                    name: 'President and Vice President of the United States',
                    number_elected: 1,
                    object_id: 'president-vice-president-contest',
                    sequence_order: 0,
                    vote_variation: 'one_of_m',
                    votes_allowed: 1,
                },
            ],
        },
    },
];

export const validateManifest = async (_manifest: ElectionManifest): Promise<string | undefined> =>
    'fake manifest';

export default getManifest;
