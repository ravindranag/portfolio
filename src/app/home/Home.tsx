import { Stack, Typography } from "@mui/material"
import Intro from "./components/Intro"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const Home = () => {
	return (
		<Stack >
			<Intro />
			<Projects />
			<Services />
			<Contact />
		</Stack>
	)
}

export default Home