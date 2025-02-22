import chalk, { supportsColor } from "chalk";

export const useColor =
  supportsColor &&
  // https://no-color.org/
  !process.env.NO_COLOR;

const K = (x: any) => x;

export const heading = useColor ? chalk.underline : K;
export const arg = useColor ? chalk.yellowBright : K;
export const error = useColor ? chalk.red : K;
export const warning = useColor ? chalk.yellow : K;
export const hint = useColor ? chalk.blue : K;

export const logoBlue = useColor ? chalk.blueBright : K;
export const logoGreen = useColor ? chalk.greenBright : K;
export const logoYellow = useColor ? chalk.yellowBright : K;
export const logoPink = useColor ? chalk.magentaBright : K;
export const logoRed = useColor ? chalk.redBright : K;

export const gray = useColor ? chalk.gray : K;
export const blue = useColor ? chalk.blue : K;
