module.exports = {
    verbose: false,
    testTimeout: 5 * 60 * 1000,
    plugins: {
        sauce: {
            disabled: true,
            browsers: [
                {
                    'browserName': 'MicrosoftEdge',
                    'platform': 'Windows 10',
                    'version': '14.14393'
                },
                {
                    'browserName': 'Chrome',
                    'platform': 'Windows 10',
                    'version': '55.0'
                },
                {
                    'browserName': 'Firefox',
                    'platform': 'Windows 10',
                    'version': '50.0'
                },
                {
                    'browserName': 'safari',
                    'platform': 'OS X 10.11',
                    'version': '10.0'
                }
            ]
        }
    }
};
