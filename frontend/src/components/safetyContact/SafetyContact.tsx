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
    useColorModeValue,
    Icon,
    Stack,
} from '@chakra-ui/react'
import {
    MdPhone,
    MdEmail,
    MdFacebook,
    MdHealthAndSafety,
    MdPerson,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import styles from './SafetyContact.module.css'

export default function Contact() {
    return (
        <div>
            <Box
                w="auto"
                h="fit"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                {/* === NavBar === */}
                <Nav />
                <VStack w="full">
                    <Text
                        position={'relative'}
                        className={styles.bigTitle}
                        color={useColorModeValue('#1d1d42', '#B0D8BC')}
                    >
                        Safety Contact
                    </Text>
                    <Box
                        bg="#B0D8BC"
                        color="white"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}
                    >
                        <Box p={4}>
                            <Wrap spacing={{ base: 2, sm: 3, md: 5, lg: 2 }}>
                                <WrapItem
                                    w={{ base: '100%', lg: '45%' }}
                                    alignItems={'center'}
                                    alignContent={'center'}
                                    justifyContent={'center'}
                                >
                                    <Stack direction={'column'}>
                                        <Box p={5}>
                                            <Text
                                                fontSize={'lg'}
                                                mt={{ sm: 3, md: 3, lg: 5 }}
                                            >
                                                We will be the safeguard of your
                                                trip.
                                                <p></p>
                                                Setup an alert on Nomader and
                                                within selected time the user
                                                does not turn of the alert, we
                                                will send notification with
                                                WhatsApp to the person you trust
                                                about your safety.
                                                <p></p>
                                                Fill up your safety contact info
                                                and set the time to setup the
                                                service.
                                            </Text>
                                        </Box>
                                        <Box
                                            py={{
                                                base: 5,
                                                sm: 5,
                                                md: 5,
                                                lg: 5,
                                            }}
                                        >
                                            <VStack
                                                pl={3}
                                                spacing={1}
                                                alignItems="center"
                                            >
                                                <HStack
                                                    mt={{ base: 1, lg: 2 }}
                                                    spacing={5}
                                                    px={5}
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <IconButton
                                                        aria-label="facebook"
                                                        variant="ghost"
                                                        size="lg"
                                                        isRound={true}
                                                        _hover={{
                                                            bg: '#0D74FF',
                                                        }}
                                                        icon={
                                                            <MdFacebook size="28px" />
                                                        }
                                                    />
                                                    <IconButton
                                                        aria-label="github"
                                                        variant="ghost"
                                                        size="lg"
                                                        isRound={true}
                                                        _hover={{
                                                            bg: '#0D74FF',
                                                        }}
                                                        icon={
                                                            <BsGithub size="28px" />
                                                        }
                                                    />
                                                    <IconButton
                                                        aria-label="discord"
                                                        variant="ghost"
                                                        size="lg"
                                                        isRound={true}
                                                        _hover={{
                                                            bg: '#0D74FF',
                                                        }}
                                                        icon={
                                                            <BsDiscord size="28px" />
                                                        }
                                                    />
                                                </HStack>
                                                <Text
                                                    fontSize="20px"
                                                    fontWeight="bold"
                                                    align="center"
                                                >
                                                    Trusted Person Info
                                                </Text>
                                                {/* <Button
                                                    size="md"
                                                    height="40px"
                                                    width="200px"
                                                    variant="ghost"
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
                                                    height="40px"
                                                    width="200px"
                                                    variant="ghost"
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
                                                    height="40px"
                                                    width="200px"
                                                    variant="ghost"
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
                                                </Button> */}
                                            </VStack>
                                        </Box>
                                    </Stack>
                                </WrapItem>
                                <WrapItem
                                    w={{ base: '100%', lg: '45%' }}
                                    alignItems={'center'}
                                    alignContent={'center'}
                                    justifyContent={'center'}
                                >
                                    <Flex
                                        w={'80%'}
                                        bg="white"
                                        borderRadius="lg"
                                        alignItems={'center'}
                                        alignContent={'center'}
                                        justifyContent={'center'}
                                        direction={'column'}
                                    >
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
                                                        Trusted Person's
                                                        WhatsApp
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
                                                        placeholder="Enter your message."
                                                    />
                                                </FormControl>
                                                <FormControl id="name">
                                                    <Button
                                                        variant="solid"
                                                        // bg="#0D74FF"
                                                        colorScheme={'whatsapp'}
                                                        color="white"
                                                        _hover={{}}
                                                        onClick={() => {}}
                                                    >
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Flex>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </VStack>
                <Dock />
            </Box>
        </div>
    )
}
