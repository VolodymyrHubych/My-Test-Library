;(function(global){
    
    var arrayProto = Array.prototype,
        stringProto = String.prototype;
    
    //get type 
    if(!Object.prototype.getType) {
	    Object.prototype.getType = function (obj) {
			if(obj === undefined) return 'Undefined';
			if(obj === null) return 'Null';

			var typeString = Object.prototype.toString.call(obj);
			return typeString.slice(typeString.indexOf(' ') + 1, -1);
	    };
    }

    //Adding extensions to Array
    //check if all element are numbers
    arrayProto.isAllNumbers = function() {
        return this.every(function(element, index, array) {
            return typeof element === "number";
        });
    }

    //convert all elements to string
    arrayProto.toStringArray = function() {
        return this.map(function(elm) {
            return elm.toString();
        });
    }

    //finding the average value of array.
    arrayProto.average = function() {
        //if all elements are numbers returns average of this numbers
        if (this.isAllNumbers()) {
            return sum.call(this) / this.length;
        } else {
             // Else return average length string representation of elements
            return this.map(function(word) {
                return JSON.stringify(word).length;
            }).average();
        }
    }

    //sum of array
    var sum = function() {
        return this.reduce(function(a, b) {
            return a + b;
        });
    }


    //sort array
    arrayProto.sortArray = function() {
        if (this.isAllNumbers()) {
            this.sort(function (a,b) {
                 return a - b;
            });
        } else {
            //else if elements are not numbers sort elements lexicographically
            this.sort();
        }
        return this;
    }


    //adding array to another array
    arrayProto.addArray = function(arr) {
        //if all elements in array are numbers, then  result will be something like sum of two vectors
        if(Object.getType(arr)==="Array") {
            if (this.isAllNumbers()) {
                var result = [];
                for (var i = 0; i < Math.max(this.length, arr.length); i++) {
                    result.push((this[i] || 0) + (arr[i] || 0));
                }
                return result;
            }
        //else returns concatenation of two arrays
            return this.concat(arr);
        }
        return this;
    }

    //convert array to string
    arrayProto.toString = function() {
        return this.toStringArray().reduce(function(a, b) {
            return b.toString() !== '' ? a + " " + b : a;
        }, '').trim();
    }

    //Adding extensions to String
    //convert string to array
    stringProto.toArray = function() {
        return this.split(" ");
    }

    //get negative and float numbers from string
    stringProto.getAllNumbers = function() {
        var numberPattern =  /[-]{0,1}[\d.]*[\d]+/g;
        return this.match( numberPattern ).map(function(elem) {
            return parseFloat(elem);
        });
    }

    //get integer numbers from string
    stringProto.getIntegers = function() {
        var numberPattern =  /\d+/g;
        return this.match( numberPattern ).map(function(elem) {
            return parseFloat(elem);
        });
    }

    stringProto.sortByWords = function() {
        return this.toArray().sortArray().toString().trim();
    }

    stringProto.addWord = function(word) {
        if (Object.getType(word)==='String') {
            return this.concat(" " +  word);             
        }
        return this;
    }

    //
    
    var types = ["String", "Array"];


    var Lib = function(obj) {
 
        var idx = types.indexOf( Object.getType(obj) );
        //Obj must be a String or Array type
        return idx === -1 ? obj : new Lib.init(obj);      
    }

    Lib.prototype = {
        //get all numbers of array or string
        getAllNumbers : function() {
            return this.instance.toString().getAllNumbers();
        },

        //get integer
        getIntegers : function() {
            return this.instance.toString().getIntegers();
        },


        //adding string or array to instance
        add : function(obj) {
            var idx = types.indexOf( Object.getType(obj) );
            if(idx === -1) {
                //Obj must be a String or Array type
                return this;
            }
            if (this.type === "String") {
                // if instance is string add obj converted to string to instance
                this.instance = this.instance.addWord(obj);
            } else {
                //else add obj converted to array to instance
                var arr = idx === 0 ? obj.toArray() : obj;
                this.instance = this.instance.addArray(arr);
            }
            return this;
        },


        //finding average value  
        //convert instance to array 
        //if all elements are numbers returns average of this numbers
        //else returns average length string representation of elements
        average : function() {
            if (this.type === "String") {
                return this.instance.toArray().average();
            } else {
                return this.instance.average();
            }
        },


        //sort instance
        //if type of instance is string sort it by words
        sort : function() {
            if (this.type === "String") {
                this.instance = this.instance.sortByWords();
            } else {
                this.instance =  this.instance.sortArray();
            }
            return this;
        },

        display : function() {
            console.log("Intance : " + this.instance.toString());
        }
    };

    Lib.init =  function(obj) {
        this.instance = obj;
        this.type =  Object.getType(obj);
    }

    Lib.init.prototype = Lib.prototype;

    global.Lib = global.L$ = Lib;

}(window));