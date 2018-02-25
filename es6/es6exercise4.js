var counter = {
    count: 0,
    inc: function () {
      this.count++;
    }
    /* You should not use the arrow function in this instance.
        /*
    inc: () => {
        this.count++;
    }
    */
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one
