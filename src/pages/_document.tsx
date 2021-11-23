import Document, {Html, Head, Main, NextScript} from 'next/document'
import 'firebase/firestore';
export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
                
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase.js"></script>
                </body>
            </Html>
        )
    }
}