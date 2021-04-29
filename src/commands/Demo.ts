import { Command, JKModule } from "../libs/Application";

/**
 * demo
 */
@Command({
  command: "demo",
  description: "Command demo",
  options: [["-n, --name <name>", "demo"]],
})
export class CheckCommand extends JKModule {
  public action = async () => {
    await this.ctx?.Demo?.echo();
  };
}
