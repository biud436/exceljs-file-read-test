import excel from "exceljs";
import { Command } from "commander";
import chalk from "chalk";

namespace ExcelTest {
  export class ExcelApp {
    private command: Command;

    constructor() {
      this.command = new Command();
      this.parseCommandLineParameters();
    }

    parseCommandLineParameters() {
      this.command
        .option("-f, --file <file>", "The file to read")
        .parse(process.argv);
    }

    start() {
      const file = this.command.getOptionValue("file");

      if (!file) {
        console.log("Please specify a file to read");
        return;
      }

      const workbook = new excel.Workbook();
      workbook.xlsx.readFile(file).then(() => {
        const worksheet = workbook.getWorksheet(1);
        worksheet.eachRow((row, rowNumber) => {
          console.table(row.values);
          //   row.eachCell((cell, colNumber) => {
          //     console.table(chalk.red(`${colNumber}: ${cell.value}`));
          //   });
        });
      });
    }
  }
}

const app = new ExcelTest.ExcelApp();
app.start();
