import React from "react";
import styled from "styled-components";


function FAB3() {
  return (
    <FAB>
      <Navigationclose24px src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f1d15d0ed37a01ec60564/img/navigation-close-24px@2x.svg" />
    </FAB>
  );
}

const FAB = styled.div`
  height: 56px;
  margin-left: 38px;
  margin-top: -28px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 56px;
  background-color: var(--eerie-black);
  border-radius: 50px;
  box-shadow: 0px 2px 4px #00000033, 0px 1px 10px #0000001f, 0px 4px 5px #00000024;
`;

const Navigationclose24px = styled.img`
  width: 24px;
  height: 24px;
`;

export default FAB3;
