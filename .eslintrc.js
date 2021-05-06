module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
        'prettier',
    ],
    plugins: ['react-hooks', 'formatjs'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'class-methods-use-this': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        curly: 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/jsx-one-expression-per-line': 0,
        'import/no-extraneous-dependencies': 'off',
        'formatjs/no-offset': 'error',
        'formatjs/enforce-id': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['**/*.stories.tsx'],
            rules: {
                'react/jsx-props-no-spreading': 'off',
            },
        },
    ],
    ignorePatterns: ['node_modules/'],
};
