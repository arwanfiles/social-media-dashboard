module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './src/**/*.{js,jsx}',
            './public/**/*.html'
        ]
    },
    darkMode: false,
    theme: {
        extend: {}
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
            pointerEvents: ['disabled']
        }
    },
    plugins: []
};
