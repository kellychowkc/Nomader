import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react'
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
    MdHealthAndSafety,
    MdPerson,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'

export default function Contact() {
    return (
        <Flex
            w="90vw"
            h="auto"
            mb="3"
            direction="column"
            justify="center"
            align="center"
        >
            <Container
                bg="#43BeBD"
                maxW="full"
                mt={0}
                centerContent
                overflow="hidden"
            >
                <Flex>
                    <Box
                        bg="#0ABAB5"
                        color="white"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}
                    >
                        <Box p={4}>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading>
                                            Safety Contact
                                            <MdHealthAndSafety />
                                        </Heading>
                                        <Text
                                            mt={{ sm: 3, md: 3, lg: 5 }}
                                            color="gray.500"
                                        >
                                            Notify the person you trust about
                                            your safety. <p></p>Fill up your
                                            safety contact info to setup the
                                            service.
                                        </Text>
                                        <Box
                                            py={{
                                                base: 5,
                                                sm: 5,
                                                md: 8,
                                                lg: 10,
                                            }}
                                        >
                                            <VStack
                                                pl={0}
                                                spacing={3}
                                                alignItems="flex-start"
                                            >
                                                <Text
                                                    fontSize="20px"
                                                    fontWeight="bold"
                                                >
                                                    Trusted Person Info
                                                </Text>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{
                                                        border: '2px solid #1C6FEB',
                                                    }}
                                                    leftIcon={
                                                        <MdPerson
                                                            color="#1970F1"
                                                            size="20px"
                                                        />
                                                    }
                                                >
                                                    Name
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{
                                                        border: '2px solid #1C6FEB',
                                                    }}
                                                    leftIcon={
                                                        <MdPhone
                                                            color="#1970F1"
                                                            size="20px"
                                                        />
                                                    }
                                                >
                                                    +852-66336633
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{
                                                        border: '2px solid #1C6FEB',
                                                    }}
                                                    leftIcon={
                                                        <MdEmail
                                                            color="#1970F1"
                                                            size="20px"
                                                        />
                                                    }
                                                >
                                                    person@iTrust.com
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{
                                                        border: '2px solid #1C6FEB',
                                                    }}
                                                    leftIcon={
                                                        <MdLocationOn
                                                            color="#1970F1"
                                                            size="20px"
                                                        />
                                                    }
                                                >
                                                    Hong Kong, Hong Kong
                                                </Button>
                                            </VStack>
                                        </Box>
                                        <HStack
                                            mt={{ lg: 10, md: 10 }}
                                            spacing={5}
                                            px={5}
                                            alignItems="flex-start"
                                        >
                                            <IconButton
                                                aria-label="facebook"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={
                                                    <MdFacebook size="28px" />
                                                }
                                            />
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsGithub size="28px" />}
                                            />
                                            <IconButton
                                                aria-label="discord"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsDiscord size="28px" />}
                                            />
                                        </HStack>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <VStack spacing={5}>
                                                <FormControl id="name">
                                                    <FormLabel>
                                                        Your Name
                                                    </FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={
                                                                <BsPerson color="gray.800" />
                                                            }
                                                        />
                                                        <Input
                                                            type="text"
                                                            size="md"
                                                            placeholder="Default to user full name"
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>
                                                        Message to Trusted
                                                        Person
                                                    </FormLabel>
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius:
                                                                'gray.300',
                                                        }}
                                                        placeholder="Enter your message. Default message will include event location & time, and the deadline to deactivate safety check."
                                                    />
                                                </FormControl>
                                                <FormControl
                                                    id="name"
                                                    float="right"
                                                >
                                                    <Button
                                                        variant="solid"
                                                        bg="#0D74FF"
                                                        color="white"
                                                        _hover={{}}
                                                    >
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Flex>
    )
}
