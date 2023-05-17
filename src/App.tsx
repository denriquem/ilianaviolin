import Iliana from "./components/Iliana";
import { Box, Stack } from "@chakra-ui/react";
import About from "./components/About";
import MyApproach from "./components/MyApproach";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
	return (
		<Box h="3200px" w="full" bg="pink.50" backgroundSize="cover">
			<Iliana />
			<Stack mx="auto" w="800px" gap={20}>
				<About id="about" />
				<MyApproach id="approach" />
				<Testimonials id="testimonials" />
				<Contact />
			</Stack>
		</Box>
	);
}

export default App;
