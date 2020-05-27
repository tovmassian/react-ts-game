const path = require('path');

module.exports = (env, argv) => {
    // default to the server configuration
    const base = {
        entry: './src/server/index.ts',
        output: {
            filename: 'js/server.js',
            // path needs to be an ABSOLUTE file path
            path: path.resolve(process.cwd(), 'dist'),
            publicPath: '/',
        },
        mode: 'production',
        // Enable sourcemaps for debugging webpack's output.
        devtool: 'cheap-module-eval-source-map',
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                    ],
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader',
                },
            ],
        },
    };

    // server-specific configuration
    if (env.platform === 'server') {
        base.target = 'node';
    }

    // client-specific configurations
    if (env.platform === 'web') {
        base.entry = './src/index.tsx';
        base.output.filename = 'js/client.js';
        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        base.externals = {
            'react': 'React',
            'react-dom': 'ReactDOM',
        }
    }

    return base;
};
