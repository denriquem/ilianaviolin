import { useState, ChangeEvent } from "react";
import {
	Box,
	Button,
	Stack,
	Input,
	Textarea,
	useToast,
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";

const Contact = () => {
	const [showContactForm, setShowContactForm] = useState(false);
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const toast = useToast();

	const handleSendMessage = async () => {
		const templateParams = {
			firstName,
			lastName,
			email,
			message,
		};

		const serviceId = process.env.REACT_APP_SERVICE_ID;
		const templateId = process.env.REACT_APP_TEMPLATE_ID;
		const publicEmailId = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

		try {
			if (serviceId && templateId && publicEmailId) {
				const response = await emailjs.send(
					serviceId,
					templateId,
					templateParams,
					publicEmailId
				);
				console.log(response);

				toast({
					title: "Message sent!",
					description: "Your message has been sent to Iliana",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
			}
		} catch (err) {
			toast({
				title: "Please try again",
				description: "There was a problem sending your message ",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
			console.log(err);
		}
		setShowContactForm(false);
	};

	return (
		<Box id="contact">
			<Button
				ml="350px"
				bg="#4C2A85"
				size="lg"
				color="white"
				_hover={{
					boxShadow: "0px 0px 0px 4px rgb(75, 203, 178)",
					color: "rgb(75, 203, 178)",
					transform: "scale(1.025)",
					transitionDuration: "0.5s",
				}}
				onClick={() => setShowContactForm(!showContactForm)}
			>
				Contact Iliana
			</Button>
			{showContactForm && (
				<Stack spacing={3} mt={4}>
					<Input
						variant="flushed"
						placeholder="Fist Name"
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							setFirstname(event.target.value)
						}
					/>
					<Input
						variant="flushed"
						placeholder="Last Name"
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							setLastname(event.target.value)
						}
					/>
					<Input
						variant="flushed"
						placeholder="Email"
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							setEmail(event.target.value)
						}
					/>
					<Textarea
						variant="flushed"
						placeholder="Message"
						onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
							setMessage(event.target.value)
						}
					/>
					<Button
						w="40%"
						bg="#4C2A85"
						color="white"
						_hover={{
							boxShadow: "0px 0px 0px 4px rgb(75, 203, 178)",
							color: "rgb(75, 203, 178)",
							transform: "scale(1.025)",
							transitionDuration: "0.5s",
						}}
						onClick={handleSendMessage}
					>
						Send your message
					</Button>
				</Stack>
			)}
		</Box>
	);
};

export default Contact;
