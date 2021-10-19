import React from "react";
import X2OutlinedcFocused from "../X2OutlinedcFocused";
import X3ContainedAText from "../X3ContainedAText";
import FAB3 from "../FAB3";
import styled from "styled-components";
import { InterSemiBoldBlack24px, ValignTextMiddle } from "../../styledMixins";
import "./SignUpPopUp2.css";

function SignUpPopUp2(props) {
  const { text3, x2OutlinedcFocusedProps, x3ContainedATextProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-up-pop-up-2-1 screen">
        <AlmostThere src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/almost-there-@2x.svg" />
        <FlexCol>
          <Text1>{text3}</Text1>
          <X2OutlinedcFocused inputText={x2OutlinedcFocusedProps.inputText} label2={x2OutlinedcFocusedProps.label2} />
          <X3ContainedAText>{x3ContainedATextProps.children}</X3ContainedAText>
        </FlexCol>
        <FAB3 />
      </div>
    </div>
  );
}

const AlmostThere = styled.img`
  width: 237px;
  height: 28px;
  margin-left: 162px;
  margin-top: 266.5px;
`;

const FlexCol = styled.div`
  width: 339px;
  position: relative;
  margin-left: 196px;
  margin-top: 139px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 383px;
`;

const Text1 = styled.h1`
  ${ValignTextMiddle}
  ${InterSemiBoldBlack24px}
            width: 312px;
  height: 87px;
  letter-spacing: 0;
`;

export default SignUpPopUp2;
