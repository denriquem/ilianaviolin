import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import orchstra from "../assets/orchestra.jpg";
import violin from "../assets/violin.jpg";

export const Introduction = () => {
	return (
		<Flex w="80%" mt={20}>
			<Image src={orchstra} w="full" />

			{/* <Box h="200px">
				<Text fontWeight="bold" color="#4C2A85" fontSize="lg" maxH="180px">
					“Music is the language of the heart without words.”
				</Text>
				<Text
					fontWeight="bold"
					color="#4C2A85"
					fontSize="lg"
					mt={2}
					maxH="180px"
				>
					{" "}
					- Shinichi Suzuki
				</Text>
				<Text
					fontWeight="bold"
					color="#4C2A85"
					fontSize="lg"
					mt={8}
					maxH="180px"
				>
					“I can only think of music as something inherent in every human being
					– a birthright. Music coordinates mind, body and spirit.”
				</Text>
				<Text fontWeight="bold" color="#4C2A85" fontSize="lg" mt={2}>
					{" "}
					- Yehudi Menuhin
				</Text>
			</Box> */}
		</Flex>
	);
};
