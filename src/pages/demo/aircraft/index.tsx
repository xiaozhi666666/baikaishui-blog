import React, { FC } from "react";
import DemoLayout from "../../../components/Demo/DemoLayout";

interface IAircraftProps {}

const Aircraft: FC<IAircraftProps> = (props) => {
  return (
    <DemoLayout>
      <div>Aircraft</div>
    </DemoLayout>
  );
};

export default Aircraft;
