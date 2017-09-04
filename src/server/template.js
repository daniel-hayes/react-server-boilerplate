export default ({ title, body, state }) => (
  `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
      <link rel="icon" href="/favicon.ico" type="image/x-icon">
      <title>${title}</title>
      <link rel="stylesheet" href="/styles.css" />
    </head>
    
    <body>
      <div id="root">${body}</div>
    </body>
    
    <script>window.PRELOADED_STATE = ${JSON.stringify(state).replace(/</g, '\\u003c')}</script>
    <script src="/bundle.js"></script>
  </html>
  `
);
