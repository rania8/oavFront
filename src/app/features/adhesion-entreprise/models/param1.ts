export class Param1 {
  id: number;
  options: string[];
  type: string;
  selected: string[];
  answer: string;
  values: boolean[];

  constructor(id: number, options: string[], t: string) {
    this.id = id;
    this.options = options;
    this.type = t;

    if (options) {
      console.log("in the init" + options);
      this.values = options.map(function () {
        return false;
      });
    }

  }

  log() {
    console.log(this.values);
  }

  select(option: string) {

    if (this.type == "single") {
      this.selected.pop();
    }

    this.selected.push(option);
    this.selected = Array.from(new Set(this.selected));
  }
}