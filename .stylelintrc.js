module.exports = {
    extends: "stylelint-config-standard",
    ignoreFiles: ["./src/styles.output.css"],
    rules: {
        indentation: 4,
        'block-no-empty': [false],
        'rule-empty-line-before': ['always-multi-line', {
            except: ['after-rule'],
            ignore: ['after-comment', 'inside-block']
        }],
        'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'screen'] }]
    }
};
