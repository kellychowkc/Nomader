import React, { useEffect, useRef, useState } from 'react'
import styles from './Forum.module.css'
import {
    Box,
    Text,
    useColorModeValue,
    VStack,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Icon,
    Button,
} from '@chakra-ui/react'
import Nav from '../common/navBar/NavBar'
import Dock from '../common/dock/Dock'
import { useNavigate } from 'react-router'
import PostList from './LastestPostList'
import HotPostList from './HotPost'
import SideMenu from '../common/sideMenu/SideMenu'
import { AddIcon } from '@chakra-ui/icons'

const { REACT_APP_API_SERVER } = process.env

export interface Post {
    id?: number
    title: string
    content: string
    category?: string
    username?: string
    created_at?: string
    profile?: string
    image?: string
}

const Forum = () => {
    const navigate = useNavigate()
    const color = useColorModeValue('#1d1d42', '#B0D8BC')
    const windowWidth = window.innerWidth

    return (
        <div>
            <Nav />
            <Box className="bodyBox">
                {windowWidth > 850 ? <SideMenu /> : <></>}
                <VStack className={styles.forumBox}>
                    <div className={styles.head}>
                        <Text
                            as="h1"
                            className={styles.headTitle}
                            color={color}
                        >
                            Nomad Blog
                        </Text>
                    </div>
                    <VStack w="auto">
                        <Tabs isFitted>
                            <TabList>
                                <Tab>Hot</Tab>
                                <Tab>Latest</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <VStack
                                        w={{
                                            base: '90vw',
                                            lg: '85vw',
                                            xl: '75vw',
                                        }}
                                        paddingTop="20px"
                                        spacing="2"
                                        alignItems="center"
                                    >
                                        <HotPostList />
                                    </VStack>
                                </TabPanel>
                                <TabPanel>
                                    <VStack
                                        w={{
                                            base: '90vw',
                                            lg: '85vw',
                                            xl: '75vw',
                                        }}
                                        paddingTop="20px"
                                        spacing="2"
                                        alignItems="center"
                                    >
                                        <PostList />
                                    </VStack>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Box className={styles.btnBox}>
                            <Button
                                borderRadius={'50%'}
                                className={styles.addbtn}
                                bgImage={
                                    'linear-gradient(to right,#569ee6, #67d6f8, #b0d8bc)'
                                }
                                onClick={() => {
                                    navigate('/newPost')
                                }}
                            >
                                <Icon as={AddIcon} w={6} h={6} />
                            </Button>
                        </Box>
                    </VStack>
                </VStack>
            </Box>
            {windowWidth > 850 ? <></> : <Dock />}
        </div>
    )
}

export default Forum
