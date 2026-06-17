// This file overwrites the stock UV config.js

self['{{__uv$config}}'] = {
  prefix: '{{route}}{{/uv/service/}}',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '{{route}}{{/uv/uv.handler.js}}',
  client: '{{route}}{{/uv/uv.client.js}}',
  bundle: '{{route}}{{/uv/uv.bundle.js}}',
  config: '{{route}}{{/uv/uv.config.js}}',
  sw: '{{route}}{{/uv/uv.sw.js}}',
  inject: [
    {
      host: '.*',
      injectTo: 'head',
      html: `
        <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
        <script>
          // DOMContentLoadedを待つ
          (function waitForEruda() {
            if (document.readyState === 'complete') {
              eruda.init();
            } else {
              document.addEventListener('DOMContentLoaded', () => eruda.init());
            }
          })();
        </script>
      `
    }
  ]
};
