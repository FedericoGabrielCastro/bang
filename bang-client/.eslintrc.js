module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            js: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
