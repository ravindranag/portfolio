import { Outlet } from "react-router-dom"
import Background from "./components/Background"
import Footer from "./components/Footer"
import Header from "./components/Header"

const Root = () => {
	return (
		<Background>
			<Header />
			<Outlet />
			<Footer />
		</Background>
	)
}

export default Root