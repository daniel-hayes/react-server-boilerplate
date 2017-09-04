const env = process.env;

exports.nodeEnv = env.NODE_ENV || 'dev';

module.exports = {
  port: env.PORT || 8000,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
