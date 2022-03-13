import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Arthur Ribeiro</Text>
          <Text color="gray.300" fontSize="small">
            Arthur.Carvalho@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Arthur Ribeiro"
        src="https://github.com/Arth-cr.png"
      />
    </Flex>
  )
}
