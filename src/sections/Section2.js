import React from "react";
import { Box, SimpleGrid, Center, Heading } from "@chakra-ui/react";
import {
  ArrowUpIcon,
  LockIcon,
  RepeatClockIcon,
  ViewIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

const Section2 = () => {
  return (
    <div className="section2">
      <Heading
        as="h4"
        size="md"
        style={{
          textAlign: "center",
          color: "#00e5ff",
          fontSize: "15px",
          padding: "20px 0 0 10px",
        }}
      >
        DEPLOY FASTER
      </Heading>
      <Heading
        as="h3"
        size="lg"
        style={{ textAlign: "center", padding: "0px 0 0 10px" }}
      >
        Everythings you need to deploy your app
      </Heading>
      <Heading
        as="h6"
        size="xs"
        style={{
          textAlign: "center",
          padding: "5px 0 0 10px",
          opacity: "0.7",
        }}
      >
        Snippy is a rich coding snippets app that lets you create your own code
        snippets, categorize <br />
        them, and even sync them in the cloud so you can use them anywhere.
      </Heading>
      <SimpleGrid
        columns={3}
        spacing={10}
        style={{ marginTop: "50px", marginLeft: "4%" }}
      >
        <Box bg="#f9f7f7" width="90%" height="190px">
          <Center
            bg="#00e5ff"
            width="17%"
            height="50px"
            style={{
              position: "relative",
              left: "40%",
              bottom: "25px",
              padding: "0px",
              borderRadius: "10px",
            }}
          >
            <ArrowUpIcon w={5} h={5} />
          </Center>
          <Heading
            as="h4"
            size="md"
            style={{
              textAlign: "center",
              color: "black",
              fontSize: "13px",
              padding: "0px 0px 10px 0px",
            }}
          >
            Push to Deploy
          </Heading>
          <Heading
            as="h6"
            size="xs"
            style={{
              textAlign: "center",
              padding: "5px 30px 0 30px",
              color: "rgb(199 183 183)",
            }}
          >
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them in the cloud so you can use them
            anywhere.
          </Heading>
        </Box>
        <Box bg="#f9f7f7" width="90%" height="190px">
          <Center
            bg="#00e5ff"
            width="17%"
            height="50px"
            style={{
              position: "relative",
              left: "40%",
              bottom: "25px",
              padding: "0px",
              borderRadius: "10px",
            }}
          >
            <LockIcon w={5} h={5} />
          </Center>
          <Heading
            as="h4"
            size="md"
            style={{
              textAlign: "center",
              color: "black",
              fontSize: "13px",
              padding: "0px 0px 10px 0px",
            }}
          >
            SSL Certificates
          </Heading>
          <Heading
            as="h6"
            size="xs"
            style={{
              textAlign: "center",
              padding: "5px 30px 0 30px",
              color: "rgb(199 183 183)",
            }}
          >
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them in the cloud so you can use them
            anywhere.
          </Heading>
        </Box>
        <Box bg="#f9f7f7" width="90%" height="190px">
          <Center
            bg="#00e5ff"
            width="17%"
            height="50px"
            style={{
              position: "relative",
              left: "40%",
              bottom: "25px",
              padding: "0px",
              borderRadius: "10px",
            }}
          >
            <RepeatClockIcon w={5} h={5} />
          </Center>
          <Heading
            as="h4"
            size="md"
            style={{
              textAlign: "center",
              color: "black",
              fontSize: "13px",
              padding: "0px 0px 10px 0px",
            }}
          >
            Simple Queues
          </Heading>
          <Heading
            as="h6"
            size="xs"
            style={{
              textAlign: "center",
              padding: "5px 30px 0 30px",
              color: "rgb(199 183 183)",
            }}
          >
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them in the cloud so you can use them
            anywhere.
          </Heading>
        </Box>
        <Box bg="#f9f7f7" width="90%" height="190px">
          <Center
            bg="#00e5ff"
            width="17%"
            height="50px"
            style={{
              position: "relative",
              left: "40%",
              bottom: "25px",
              padding: "0px",
              borderRadius: "10px",
            }}
          >
            <ViewIcon w={5} h={5} />
          </Center>
          <Heading
            as="h4"
            size="md"
            style={{
              textAlign: "center",
              color: "black",
              fontSize: "13px",
              padding: "0px 0px 10px 0px",
            }}
          >
            Advanced Security
          </Heading>
          <Heading
            as="h6"
            size="xs"
            style={{
              textAlign: "center",
              padding: "5px 30px 0 30px",
              color: "rgb(199 183 183)",
            }}
          >
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them in the cloud so you can use them
            anywhere.
          </Heading>
        </Box>
        <Box bg="#f9f7f7" width="90%" height="190px">
          <Center
            bg="#00e5ff"
            width="17%"
            height="50px"
            style={{
              position: "relative",
              left: "40%",
              bottom: "25px",
              padding: "0px",
              borderRadius: "10px",
            }}
          >
            <SettingsIcon w={5} h={5} />
          </Center>
          <Heading
            as="h4"
            size="md"
            style={{
              textAlign: "center",
              color: "black",
              fontSize: "13px",
              padding: "0px 0px 10px 0px",
            }}
          >
            Powerful API
          </Heading>
          <Heading
            as="h6"
            size="xs"
            style={{
              textAlign: "center",
              padding: "5px 30px 0 30px",
              color: "rgb(199 183 183)",
            }}
          >
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them in the cloud so you can use them
            anywhere.
          </Heading>
        </Box>
        <Box bg="#f9f7f7" width="90%" height="190px">
          <Center
            bg="#00e5ff"
            width="17%"
            height="50px"
            style={{
              position: "relative",
              left: "40%",
              bottom: "25px",
              padding: "0px",
              borderRadius: "10px",
            }}
          >
            <ArrowUpIcon w={5} h={5} />
          </Center>
          <Heading
            as="h4"
            size="md"
            style={{
              textAlign: "center",
              color: "black",
              fontSize: "13px",
              padding: "0px 0px 10px 0px",
            }}
          >
            Database Backups
          </Heading>
          <Heading
            as="h6"
            size="xs"
            style={{
              textAlign: "center",
              padding: "5px 30px 0 30px",
              color: "rgb(199 183 183)",
            }}
          >
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them in the cloud so you can use them
            anywhere.
          </Heading>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Section2;
