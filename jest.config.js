/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    global: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
};
