import * as React from "react";
import styled from "@emotion/styled";
import * as CSS from "csstype";
import { css } from "@styled-system/css";
import {
  ResponsiveValue,
  layout,
  color,
  PositionProps,
  BackgroundColorProps,
  LayoutProps,
  SpaceProps,
  space,
  border,
  BorderProps,
  position,
  borderRadius,
  BorderRadiusProps
} from "styled-system";
import { animated, useSpring } from "react-spring";

export type TextColorProps = {
  textColor?: ResponsiveValue<CSS.ColorProperty>;
};
type ColorProps = TextColorProps & BackgroundColorProps;

const Box = styled("div")<
  PositionProps & ColorProps & LayoutProps & SpaceProps & BorderProps
>(space, layout, color, border, position);

const Btn = styled("button")<
  ColorProps & SpaceProps & BorderProps & BorderRadiusProps
>(
  color,
  space,
  border,
  borderRadius,
  css({
    cursor: "pointer",
    outline: 0,
    ":hover": {
      backgroundColor: "#EEE"
    }
  })
);

export default function App() {
  const [status, toggle] = React.useState(false);
  const props = useSpring({ opacity: status ? 1 : 0 });
  const handleClick = () => {
    console.log(status, props);
    toggle(!status);
  };

  return (
    <div>
      <animated.div style={props}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width="2rem"
          height="2rem"
          bg="#4cc"
        />
      </animated.div>
      <Btn
        type="button"
        p="1rem"
        bg="#FFF"
        color="222"
        border="1px solid #666"
        borderRadius="0.5rem"
        onClick={handleClick}
      >
        btn
      </Btn>
    </div>
  );
}
