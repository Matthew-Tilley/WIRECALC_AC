var app = new Vue({
    
    el:     "#app",
    
    
    data: {
        
        picked: '',
        
        
        breaker: '',

        
        
        
        breakers: [
        
            { 
                productCode:        "HOM115",
                productAmperage:    15,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM115.jpeg",
                minNMB_AWG:         "14 AWG" 
            },


            { 
                productCode:        "HOM120",
                productAmperage:    20,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM120.jpeg",
                minNMB_AWG:         "12 AWG"
            },


            { 
                productCode:        "HOM125",
                productAmperage:    25,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM125.jpeg",
                minNMB_AWG:         "10 AWG"
            },


            { 
                productCode:        "HOM130",
                productAmperage:    30,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM130.jpeg",
                minNMB_AWG:         "10 AWG" 
            },


            { 
                productCode:        "HOM140",
                productAmperage:    40,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM140.jpeg",
                minNMB_AWG:         "08 AWG" 
            },


            { 
                productCode:        "HOM150",
                productAmperage:    50,
                productPoles:       "SINGLE",
                productImage:       "ASSETS/IMAGES/HOM150.jpeg",
                minNMB_AWG:         "06 AWG" 
            }
        
        
        ],  /* END OF "BREAKERS" ARRAY */
        
        
        
    },  /* END OF "DATA" SECTION */
    
    
    
    methods: {
        
        
        productDisplay(breaker){
            
            return this.breaker;
        
        }
        
        
        /* let x = productDisplay();
        
        
        console.log(x); */
        
        
        /*
        
        Okay...here is my rationale.  I have the function (method) set up to get a value
        from dropdown menu any time the user selects something different.  I know it's
        working after testing it via console.log
        
        So, now I want to get that value "out" of the function and be able to do something
        else with it.  Here is what I tried:
        
        (1) I first attempted directly assigning function (method) to a variable of "x" just
            to test things out.  VueJS didn't like it and threw an error.
        
                let x = productDisplay(breaker){
            
                    return this.breaker;
        
                }
                
        
        
        (2) I next tried to pick up any values passed through the function by instantiating
            another variable like this:
            
                productDisplay(breaker){
            
                return this.breaker;
        
                }
                
                
                let x = productDisplay();
            
        Apparently VueJS didn't like that either.  Guessing maybe it doesn't want variables
        floating around in the "methods" section perhaps?  If so, how are we supposed to 
        pass variables to other functions (methods) and use them elsewhere in our code???
        (Not implying VueJS is somehow the 'problem' here...only that I don't understand how
        things are supposed to work.)
        
        Help...my variables are stuck and can't be extracted from functions (methods) given 
        current knowledge!!!  :(
        
        
        */
        
        
    
        
        
    }
    
    
    
})