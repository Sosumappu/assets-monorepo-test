import styled from 'styled-components';
import NxWelcome from './nx-welcome';

import { ApplePayIcon } from "@github-test/shared/ui";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <ApplePayIcon />
      <NxWelcome title="git-test" />
    </StyledApp>
  );
}

export default App;
