import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat.jsx";
import { ChatState } from "../Context/ChatProvider.jsx";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      p={3}
      background="white"
      width={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;