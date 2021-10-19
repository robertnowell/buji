import React from "react";
import styled from "styled-components";
import { RobotoNormalPinkSwan16px, RobotoNormalMediumPurple12px } from "../../styledMixins";


function X2OutlinedcFocused(props) {
  const { inputText, label2 } = props;

  return (
    <X2OutlinedcFocused1>
      <OverlapGroup>
        <Label src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/label-6@2x.svg" />
        <InputText>{inputText}</InputText>
        <Label1>
          <Label2>{label2}</Label2>
          <UpperSurface src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f1d15d0ed37a01ec60564/img/upper-surface@2x.svg" />
        </Label1>
      </OverlapGroup>
    </X2OutlinedcFocused1>
  );
}

const X2OutlinedcFocused1 = styled.div`
  height: 72px;
  margin-top: 31px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 312px;
`;

const OverlapGroup = styled.div`
  width: 314px;
  height: 62px;
  position: relative;
  margin-top: -7px;
`;

const Label = styled.img`
  position: absolute;
  width: 314px;
  height: 56px;
  top: 6px;
  left: 0;
`;

const InputText = styled.div`
  ${RobotoNormalPinkSwan16px}
  position: absolute;
  top: 23px;
  left: 17px;
  letter-spacing: 0.15px;
  line-height: 24px;
  white-space: nowrap;
`;

const Label1 = styled.div`
  position: absolute;
  height: 14px;
  top: 0;
  left: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 285px;
`;

const Label2 = styled.div`
  ${RobotoNormalMediumPurple12px}
  min-height: 16px;
  margin-top: -1px;
  min-width: 72px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 211px;
  height: 2px;
  align-self: center;
  margin-left: 3px;
`;

export default X2OutlinedcFocused;
