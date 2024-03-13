const BasicDataTypes = () => {
  //let firstValue: string = "Many";
  //let firstValue: number = 5;
  //let firstValue: boolean = true;

  //Array syntax
  //let firstValue: number[] = [1, 2, 3, 4, 5];
  let firstValue: Array<string> = ["one", "two", "three"];

  return (
    <div className="App">
      <header className="App-header">
        The value {firstValue} is of {typeof firstValue} type.
      </header>
    </div>
  );
};

export default BasicDataTypes;
