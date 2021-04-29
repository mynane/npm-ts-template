import chalk from "chalk";
import open from "open";
import { JKUtil } from "../libs/Application";

const pack = require("../../package.json");

class Demo extends JKUtil {
  /**
   * demo
   */
  public echo() {
    console.log(chalk.green("success !!!"));
  }
}

export default Demo;
