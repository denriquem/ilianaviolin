import React from "react";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

export const Navbar = () => {
	return (
		<Flex w="full" h="7%" bg="pink.300" top={0} bottom={0}>
			<Grid templateColumns="repeat(5, 1fr)" gap={6} w="full">
				<GridItem w="90%" minW="240px" h="10" m="auto">
					<Text fontWeight="bold" fontSize="2xl" color="whiteAlpha.900">
						Iliana Gutch Marinov
					</Text>
				</GridItem>
				<GridItem w="80%" h="10" m="auto" />
				<GridItem w="80%" minW="174px" h="10" m="auto">
					<Text fontWeight="bold" fontSize="2xl" color="whiteAlpha.900">
						My Approach
					</Text>
				</GridItem>
				<GridItem w="80%" minW="174px" h="10" m="auto">
					<Text fontWeight="bold" fontSize="2xl" color="whiteAlpha.900">
						Testimonials
					</Text>
				</GridItem>
				<GridItem w="80%" minW="174px" h="10" m="auto">
					<Text fontWeight="bold" fontSize="2xl" color="whiteAlpha.900">
						Contact Info
					</Text>
				</GridItem>
			</Grid>
		</Flex>
	);
};
