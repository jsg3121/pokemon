module.exports = {
  apps: [
    {
      script: './dist/index.js',
      instances: 1,
      exec_mode: 'cluster',
      env_production: {
        PORT: 4000,
      },
    },
  ],
}
