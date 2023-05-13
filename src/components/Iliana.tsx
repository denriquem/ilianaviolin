import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import orchstra from "../assets/orchestra.jpg";

const Iliana = () => {
	return (
		<Box
			w="full"
			minW="full"
			h="800px"
			mx="auto"
			backgroundColor="gray"
			backgroundBlendMode="multiply"
			backgroundImage={orchstra}
			backgroundSize="cover"
			background-position="center"
			backgroundAttachment="fixed"
		>
			<Box
				opacity={2}
				w="60%"
				margin="auto"
				left="25%"
				top="12%"
				pos="absolute"
				filter="brightness(200%)"
			>
				<Heading
					pos="relative"
					fontSize="5xl"
					fontWeight="extrabold"
					color="whiteAlpha.900"
					textAlign="center"
					backdropFilter="contrast(0.5)"
					filter="contrast(300%)"
				>
					Iliana is a violin and piano teacher based in Cambridge
				</Heading>
				<Flex gap={4} m="auto" justifyContent="center">
					<Text
						fontSize="lg"
						color="whiteAlpha.900"
						textAlign="center"
						mt={10}
						cursor="pointer"
						_hover={{
							color: "#4C2A85",
						}}
					>
						About
						<StarIcon
							ml={2}
							mb={1}
							color="whiteAlpha.900"
							_hover={{
								color: "#4C2A85",
							}}
						/>
					</Text>

					<Text
						fontSize="lg"
						color="whiteAlpha.900"
						textAlign="center"
						mt={10}
						cursor="pointer"
						_hover={{
							color: "#4C2A85",
						}}
					>
						My Approach
					</Text>
					<Text
						fontSize="lg"
						color="whiteAlpha.900"
						textAlign="center"
						mt={10}
						cursor="pointer"
						_hover={{
							color: "#4C2A85",
						}}
					>
						Contact
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default Iliana;
