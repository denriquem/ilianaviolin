import { Navbar } from "./components/Navbar";
import { Introduction } from "./components/Introduction";
import { Box } from "@chakra-ui/react";

function App() {
	return (
		<Box h="1200px" w="full" bg="blue.900" backgroundSize="cover">
			<Navbar />;
			<Introduction />
		</Box>
	);
}

export default App;
