const html = ({ body }: { body: string }): string => `
  <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>Hello React!!</title>
        </head>
        <body>
            <div id="game">${body}</div>
            <!-- Dependencies -->
            <script src="node_modules/react/umd/react.development.js"></script>
            <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
            
            <!-- Main -->
            <script src="js/client.js"></script>
        </body>
    </html>
`;

export default html;
