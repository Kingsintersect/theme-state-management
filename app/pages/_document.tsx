import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Other head elements */}
                </Head>
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                (function() {
                  const savedTheme = localStorage.getItem('theme') || 'light';
                  document.body.setAttribute('data-theme', savedTheme);
                })();
              `,
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
