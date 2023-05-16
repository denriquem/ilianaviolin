import Iliana from "./components/Iliana";
import { Box, Stack } from "@chakra-ui/react";
import About from "./components/About";
import MyApproach from "./components/MyApproach";
import Testimonials from "./components/Testimonials";

function App() {
	return (
		<Box h="3000px" w="full" bg="pink.50" backgroundSize="cover">
			<Iliana />
			<Stack mx="auto" w="800px" gap={20}>
				<About id="about" />
				<MyApproach id="approach" />
				<Testimonials id="testimonials" />
			</Stack>
		</Box>
	);
}

export default App;
