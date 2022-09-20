import {
    Box,
    Button,
    Circle,
    HStack,
    Table,
    Text,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    VStack,
} from '@chakra-ui/react'

import type { IUser } from './ManageUser'

export const UsersList = (props: { list: IUser[] }) => (
    <Table variant="striped" colorScheme="teal" w="100%">
        <Thead position="sticky" top={0} bg="#FFFFFF" zIndex={10}>
            <Tr>
                <Th>User</Th>
                <Th>View Detail</Th>
            </Tr>
        </Thead>

        <Tbody>
            {props.list.map((user: IUser, idx: number) => (
                <Tr key={idx}>
                    <Td py="5px">
                        <HStack>
                            <Box className="friendAvatar">
                                <Circle size="30px" bg={user.avatar} />
                            </Box>
                            <VStack align="left">
                                <Text className="nickname" fontWeight="bold">
                                    {user.fullname}
                                </Text>
                                <Text className="username">
                                    {user.username}
                                </Text>
                            </VStack>
                        </HStack>
                    </Td>
                    <Td py="5px">
                        <Button m="1" size="md">
                            Detail
                        </Button>
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
)
