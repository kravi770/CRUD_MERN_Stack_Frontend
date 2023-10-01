import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
  margin: 50px;
  & > div {
    margin-top: 50px;
  }
`;

const CodeForInterview = () => {
  return (
    <Header>
      <Typography variant="h4">Welcome to Ravi CRUD</Typography>
      <Box style={{ display: 'flex' }}></Box>
    </Header>
  );
};

export default CodeForInterview;
