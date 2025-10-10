import { createTheme } from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";

const createColor = (hex: string): MantineColorsTuple =>
  Array(10).fill(hex) as unknown as MantineColorsTuple;
const themeColors = {
  primary: [
    "#e9f0ff",
    "#d2dbff",
    "#a4b5f8",
    "#728cf1",
    "#4263eb",
    "#2e53e9",
    "#1e47e9",
    "#0f39cf",
    "#0432ba",
    "#002ba5",
  ] as const satisfies MantineColorsTuple,
  darkPrimary: createColor("#364FC7"),
  black1: createColor("#0F0F10"),
  gray: createColor("#0F0F1080"),
  lightGray: createColor("#0F0F104D"),
  preLight: createColor("#0F0F1033"),
  ultraLight: createColor("#0F0F101A"),
  background: createColor("#F6F6F7"),
  white: createColor("#FFFFFF"),
};

export const theme = createTheme({
  primaryColor: "primary",
  primaryShade: 4,
  fontFamily: "Open Sans, sans-serif",
  colors: themeColors,
});
