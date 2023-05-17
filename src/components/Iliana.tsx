import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { StarIcon, EmailIcon } from "@chakra-ui/icons";

import orchstra from "../assets/orchestra.jpg";
import { Link } from "react-scroll";

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
			<Box opacity={2} w="800px" mx="auto" pt="300px" filter="brightness(200%)">
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
				<Flex gap={8} m="auto" justifyContent="center">
					<Link
						activeClass="active"
						to="about"
						smooth={true}
						offset={-70}
						duration={1900}
					>
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
							<StarIcon ml={2} mb={1} />
						</Text>
					</Link>
					<Link
						activeClass="active"
						to="approach"
						smooth={true}
						offset={-70}
						duration={1900}
					>
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
							<i
								className="fa fa-university"
								aria-hidden="true"
								style={{
									marginLeft: "4px",
								}}
							></i>
						</Text>
					</Link>
					<Link
						activeClass="active"
						to="testimonials"
						smooth={true}
						offset={-70}
						duration={1900}
					>
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
							Testimonials
							<i
								className="fa fa-hand-paper-o"
								aria-hidden="true"
								style={{
									marginLeft: "4px",
								}}
							></i>
						</Text>
					</Link>
					<Link
						activeClass="active"
						to="contact"
						smooth={true}
						offset={-70}
						duration={1900}
					>
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
							<EmailIcon ml={2} mb="3px" />
						</Text>
					</Link>
				</Flex>
			</Box>
		</Box>
	);
};

export default Iliana;
