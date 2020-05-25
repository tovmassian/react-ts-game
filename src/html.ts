const html = ({ body }: { body: string }): string => `
  <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>Hello React!!</title>
            <style type="text/css">
                .game {
                    max-width: 500px;
                    margin: 0 auto;
                }
                
                .body {
                    display: flex;
                }
                
                .help {
                    color: #666;
                    margin: 10px;
                    text-align: center;
                }
                
                .left {
                    text-align: center;
                    width: 50%;
                    border: thin solid #ddd;
                }
                
                .right {
                    text-align: center;
                    padding: 10px;
                    width: 50%;
                    border: thin solid #ddd;
                }
                
                .star {
                    display: inline-block;
                    margin: 0 15px;
                }
                
                .star:after {
                    content: "\\2605";
                    font-size: 45px;
                }
                
                .number {
                    background-color: #eee;
                    border: thin solid #ddd;
                    width: 45px;
                    height: 45px;
                    margin: 10px;
                    font-size: 25px;
                }
                
                .number:focus, .number:active {
                    outline: none;
                    border: thin solid #ddd;
                }
                
                .timer {
                    color: #666;
                    margin-top: 3px;
                    margin-left: 3px;
                }
                
                .game-done .message {
                    font-size: 250%;
                    font-weight: bold;
                    margin: 15px;
                }

            </style>
        </head>
        <body>
            <div id="game">${body}</div>
            <!-- Dependencies -->
            <script src="node_modules/react/umd/react.development.js"></script>
            <script src="node_modules/react-dom/umd/react-dom.development.js"></script>
            
            <!-- Main -->
<!--            <script src="js/client.js"></script>-->
        </body>
    </html>
`;

export default html;
