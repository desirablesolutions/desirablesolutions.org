import "@views/libs/tailwind.css"
import "@views/libs/globals.css"

import Store from "@components/Store"

export default function Application({ Component, pageProps }) {
  
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  )
}
