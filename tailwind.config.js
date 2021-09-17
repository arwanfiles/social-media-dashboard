module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'src/**/*.{js,jsx}',
            'public/**/*.html'
        ]
    },
    presets: [],
    darkMode: false,
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
