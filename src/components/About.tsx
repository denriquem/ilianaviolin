import React from "react";
import { Box, Text } from "@chakra-ui/react";

const About = () => {
	return (
		<Box w="60%" mt={20}>
			<Text color="#4C2A85" fontWeight="bold" fontSize="5xl">
				About Iliana
			</Text>
			<Text color="#4C2A85" fontWeight="bold" fontSize="xl" my={4}>
				Iliana began playing the violin and piano at age seven, and gave her
				first recital at the age of nine. She began learning both instruments
				through the Suzuki method in Cambridge, and went on to do her ABRSM
				Diploma in Violin Performance at the age of sixteen.
			</Text>
			<Text color="#4C2A85" fontWeight="bold" fontSize="xl" my={4}>
				She has also performed in a variety of musical ensembles over the years,
				and taken leadership roles in orchestras. She completed a master’s
				degree in literature before deciding to return to all things violin and
				piano.At the age of fifteen, Iliana took on her first piano student
				after taking Suzuki teacher training sessions.
			</Text>
			<Text color="#4C2A85" fontWeight="bold" fontSize="xl">
				Iliana now has a lively young practice, teaching violin and piano from
				her home in Chesterton, Cambridge. Iliana believes that every child has
				the potential to excel in a musical instrument.
			</Text>
		</Box>
	);
};

export default About;
