module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',["4R3yGwmInnJsCPGPKqf/Cw==","Yt6XTD/3eUJ3D3t1Pt67VA=="]),
  },
});
