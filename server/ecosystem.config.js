module.exports = {
  apps: [
    {
      script: './build/index.js',
      instances: 1,
      exec_mode: 'cluster',
      env_production: {
        PORT: 4000,
      },
    },
  ],
}
