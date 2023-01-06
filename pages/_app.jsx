import Router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Loader from '../components/loader/Loader'
import '../styles/globals.css'
import AppTheme from '../theme/AppTheme'

function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const showLoading = () => setIsLoading(true)
	const hideLoading = () => setIsLoading(false)

	useEffect(() => {
		if(!router.isReady) return
		router.events.on('routeChangeStart', showLoading)
		router.events.on('routeChangeComplete', hideLoading)
		router.events.on('routeChangeError', hideLoading)
	}, [router.isReady])

  return (
		<AppTheme>
			<Component {...pageProps} />
			<Loader 
				open={isLoading}
			/>
		</AppTheme>
	)
}

export default MyApp
