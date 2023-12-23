/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: {
    modules: {
      assert: true,
      buffer: true,
      console: true,
      constants: true,
      crypto: true,
      domain: true,
      fs: true,
      events: true,
      http: true,
      https: true,
      os: true,
      path: true,
      punycode: true,
      querystring: true,
      stream: true,
      string_decoder: true,
      timers: true,
      tty: true,
      url: true,
      util: true,
      vm: true,
      zlib: true,
      child_process: true, // Add this line for child_process
      tls: true, // Add this line for tls
      dns: true, // Add this line for dns
      net: true, // Add this line for net
    },
  },
};
