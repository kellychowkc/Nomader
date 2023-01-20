import {
  Box,
  Center,
  Image,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

export interface InterestCardData {
  name: string;
  city: string;
  country?: string;
  picture?: string;
  like?: boolean;
  rating?: string;
  link: string;
}

function link(link: string) {
  window.open(`${link}`, "_blank", "noopener,noreferrer");
}

export default function InterestCard(props: { data: InterestCardData }) {
  const assetLink = props.data.picture;
  console.log(assetLink);
  return (
    <Center py={5} mx={"10px"} w="auto">
      <Box
        role={"group"}
        p={6}
        maxW={"400px"}
        w={{ base: "50vw", sm: "45vw", md: "45vw" }}
        boxShadow={"lg"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        onClick={() => link(props.data.link)}
      >
        <Box
          rounded={"lg"}
          mt={"-10px"}
          pos={"relative"}
          height={"200px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 1,
            left: 0,
            backgroundImage: `url(${props.data.picture})`,
            filter: "blur(8px)",
            zIndex: -1,
          }}
          _groupHover={{ _after: { filter: "blur(12px)" } }}
        >
          <Image
            rounded={"lg"}
            height={200}
            width={"full"}
            objectFit={"cover"}
            src={require(`../../assets/${assetLink}`)}
          />
        </Box>
        <Stack pt="10px" align={"flex-start"} position="relative">
          <Heading
            className="interestTitle"
            fontSize={"xl"}
            fontWeight={"bold"}
          >
            {props.data.name}
          </Heading>
          <HStack className="interestLocation" align={"center"}>
            <Text>
              {props.data.city},{props.data.country}
            </Text>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
}
