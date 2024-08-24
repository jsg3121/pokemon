module.exports = {
  apps: [
    {
      script: './build/index.js',
      instances: 2,
      exec_mode: 'cluster',
      env_production: {
        PORT: 4000,
      },
    },
  ],
}
