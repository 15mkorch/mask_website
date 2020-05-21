// import App from 'next/app'

import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>GlobalU Mask Operation</title>
                <meta name="description" content="Global U is a missions team of entrepreneurs who strive to come together to solve the world’s most pressing problems." />
                <meta property="og:title" content="GlobalU Mask Operation" />
                <meta property="og:url" content="http://localhost:3000/about" />
                <meta property="og:image" content="/people.png" />

            </Head>
            <Component {...pageProps} />
        </>
    )
}


export default MyApp