import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  font-weight: bold;
`;

function Loading() {
  return <LoadingWrapper>Loading...</LoadingWrapper>;
}

export default Loading;
