module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jest/recommended',
        'standard'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4]
    }
};
