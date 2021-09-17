module.exports = {
    extends: "stylelint-config-standard",
    ignoreFiles: ["./src/styles.output.css"],
    rules: {
        indentation: 4,
        'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }]
    }
};
