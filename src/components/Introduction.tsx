import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import orchstra from "../assets/orchestra.jpg";

export const Introduction = () => {
	return (
		<>
			<Box w="60%" h="20%" m="auto" mt={10}>
				<Text
					fontSize="5xl"
					fontWeight="bold"
					color="whiteAlpha.900"
					textAlign="center"
				>
					Iliana is a violin and piano teacher based in Cambridge
				</Text>
			</Box>
			<Flex h="20%" w="70%" mt={4}>
				<Image src={orchstra} alt="" m="auto" mr={16} />
				<Box maxW="250px">
					<Text fontWeight="bold" color="whiteAlpha.900">
						“Music is the language of the heart without words.”
					</Text>
					<Text fontWeight="bold" color="whiteAlpha.900" mt={2}>
						{" "}
						- Shinichi Suzuki
					</Text>
					<Text fontWeight="bold" color="whiteAlpha.900" mt={8}>
						“I can only think of music as something inherent in every human
						being – a birthright. Music coordinates mind, body and spirit.”
					</Text>
					<Text fontWeight="bold" color="whiteAlpha.900" mt={2}>
						{" "}
						- Yehudi Menuhin
					</Text>
				</Box>
			</Flex>
		</>
	);
};
