import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import piano from "../assets/piano.jpg";

interface MyApproachProps {
	id: string;
}

const MyApproach = ({ id }: MyApproachProps) => {
	return (
		<Box bg="pink.50" h="700px" w="full" id={id}>
			<Text color="#4C2A85" fontWeight="bold" fontSize="5xl">
				My Approach
			</Text>
			<Text color="#4C2A85" fontWeight="bold" fontSize="xl" my={4}>
				For both violin and piano, I use the Suzuki Method books. These books
				start with a series of variations on ‘Twinkle, Twinkle Little Star’, and
				end, (for the violin), with a major classical concerto. Through this
				method, the student learns a new skill with each piece, whilst playing
				repertoire they find enjoyable and motivating. I encourage parents of
				young children to attend the lessons as much as they can, in order to
				take notes for assisting with practice.
			</Text>
			<Flex my={16}>
				<Box
					h="400px"
					w="400px"
					color="blackAlpha.800"
					fontWeight="bold"
					textAlign="center"
					mr={20}
				>
					<Image src={piano} />
				</Box>
				<Box
					h="400px"
					w="600px"
					color="blackAlpha.800"
					fontWeight="bold"
					textAlign="center"
				>
					<Text
						color="#4C2A85"
						fontWeight="bold"
						fontSize="xl"
						textAlign="left"
					>
						In my lessons, I break new each skill into a series of
						comprehensible and achievable steps. This ensures that the student
						feels motivated and sees progress each time. As the student
						progresses with their instrument, I incorporate elements of music
						theory and work on developing musicianship. Positivity, kindness,
						and enthusiasm are always at the heart of my teaching.
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default MyApproach;
