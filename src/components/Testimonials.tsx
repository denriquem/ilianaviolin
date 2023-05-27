import React from "react";
import { Box, Stack, Text, Flex, Image } from "@chakra-ui/react";
import violin from "../assets/violin.jpg";

interface TestimonialProps {
	id: string;
}

const Testimonials = ({ id }: TestimonialProps) => {
	return (
		<Box w="full" id={id}>
			<Flex>
				<Stack
					gap={8}
					h="400px"
					w="600px"
					color="blackAlpha.800"
					fontWeight="bold"
					textAlign="center"
				>
					<Text
						color="#4C2A85"
						fontWeight="bold"
						fontSize="5xl"
						textAlign="left"
					>
						Testimonials
					</Text>
					<Text
						color="#4C2A85"
						fontWeight="bold"
						fontSize="xl"
						textAlign="left"
					>
						“My 6 year old son just had his very first lesson. Iliana was great,
						a gentle and patient teacher who knows how to make a lesson both fun
						and easily understandable for a child.”
					</Text>
					<Text
						color="#4C2A85"
						fontWeight="bold"
						fontSize="lg"
						textAlign="left"
					>
						- Parent of violin student, age 6
					</Text>
					<Text
						color="#4C2A85"
						fontWeight="bold"
						fontSize="xl"
						textAlign="left"
					>
						“Iliana is a pleasure to work with. She is techically accomplished,
						clear and patient, whilst providing structured lessons with clear
						objectives.”
					</Text>
					<Text
						color="#4C2A85"
						fontWeight="bold"
						fontSize="lg"
						textAlign="left"
					>
						- Adult piano student
					</Text>
				</Stack>
				<Box
					h="400px"
					w="400px"
					color="blackAlpha.800"
					fontWeight="bold"
					textAlign="center"
					ml={10}
				>
					<Image src={violin} mt={5} />
				</Box>
			</Flex>
		</Box>
	);
};

export default Testimonials;
