module.exports = {
    apps: [
        {
            name: 'nextjs-app',
            script: 'npm',
            args: 'start', // Next.js의 시작 스크립트
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};