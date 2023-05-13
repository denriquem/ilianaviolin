import { Navbar } from "./components/Navbar";
import { Introduction } from "./components/Introduction";
import Iliana from "./components/Iliana";
import { Box, Stack } from "@chakra-ui/react";
import About from "./components/About";
import MyApproach from "./components/MyApproach";

function App() {
	return (
		<Box h="2500px" w="full" bg="pink.50" backgroundSize="cover">
			<Iliana />
			<Stack mx={60} w="90%" gap={20}>
				<About />
				<MyApproach />
			</Stack>
		</Box>
	);
}

export default App;
