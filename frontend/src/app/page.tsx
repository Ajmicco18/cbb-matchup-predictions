import { Box, Text, Link, Heading } from "@chakra-ui/react";

export default function Home() {

  return (
    <>
      <Box>
        <Heading>
          Welcome to ML Model Simulation
        </Heading>
        <Heading size={"md"}>
          <Link href={"/Landing"}>
            <Box>
              <Text color={"white"} _hover={{ textDecoration: "underline", textDecorationColor: "#C80815" }}>Get Started!</Text>
            </Box>
          </Link>
        </Heading>
      </Box>
    </>
  );
}
