import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./app/root/Root"
import Home from "./app/home/Home"

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />
			}
		]
	}
])

const App = () => {
	return (
		<RouterProvider router={router} />
	)
}

export default App