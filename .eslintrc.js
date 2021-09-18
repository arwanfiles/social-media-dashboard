module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jest/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'standard'
    ],
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/']
            }
        },
        react: {
            version: 'latest'
        }
    },
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
        indent: ['error', 4],
        camelcase: 'off',
        'react/prop-types': [0]
    }
};
