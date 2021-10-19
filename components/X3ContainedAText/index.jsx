import React from "react";
import styled from "styled-components";
import { InterBoldWhite16px } from "../../styledMixins";


function X3ContainedAText(props) {
  const { children } = props;

  return (
    <X3ContainedAText1>
      <Label>{children}</Label>
    </X3ContainedAText1>
  );
}

const X3ContainedAText1 = styled.div`
  height: 44px;
  align-self: flex-end;
  margin-top: 149px;
  display: flex;
  padding: 0 14px;
  align-items: center;
  min-width: 84px;
  background-color: var(--eerie-black);
  border-radius: 4px;
`;

const Label = styled.div`
  ${InterBoldWhite16px}
  min-height: 24px;
  min-width: 56px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default X3ContainedAText;
