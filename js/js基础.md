#首先 javascript 是一种弱类型、动态的、解释型的脚本语言。

##弱类型：类型检查不严格，偏向于容忍隐式类型转换。

##强类型：类型检查严格，偏向于不容忍隐式类型转换。

##动态类型：运行的时候执行类型检查。 

##静态类型：编译的时候就知道每个变量的类型。

##解释型：程序不需要编译，程序在运行的时候才翻译成机器语言，每执行一次都要翻译一次，因此效率比较低，但是跨平台性好。

##编译型：程序在执行之前需要一个专门的翻译过程，把程序编译为机器语言的文件，运行时直接使用编译的结果就行了。 

##标记语言：标记语言的存在就是用来被读取(浏览)的，而其本身是没有行为能力的，在标记语言里你会看到<和>这些尖括号，这是用来写出“层次”和”属性”的，换句话说，它是被动的。并不具备与访问者互动的能力。

##编程语言：它是具有逻辑性和行为能力，这是主动的。说通俗一点，它是有思想的。

##脚本语言：它介于标记语言和编程语言之间，脚本语言不需要编译，可以直接用，由解释器来负责解释。

#js代码解析原则

- 首先js引擎在读取js代码时会进行两个步骤，第一个步骤是解释，第二个步骤是执行。
- 所谓解释就是会先通篇扫描所有的Js代码，然后把所有声明提升到顶端，第二步是执行，执行就是操作一类的。
  

  - 例子1：
     ``` 
     <script type="text/javascript">
        console.log(a);//输出结果 undefined
        var a=10;
    </script>
    ```
  - 原因： 变量提升（把变量声明提升到当前执行环境的最顶端） 
  ```
    上段代码相当于：
    var a; 
    console.log(a);//由于未赋值 所以输出undefined 
    a=10;
  ```
  - 例2：
  ```
    foo();
    function foo(){
        console.log("aaa");
    }
  ``` 
   - 结果输出： aaa 
   - 原理：函数声明提升 （函数声明提升直接把整个函数提到执行环境的最顶端）
   - 相当于：
   ```
    function foo(){
        console.log("aaa");
    }

    foo();
   ```

   - 变量提升只提升函数名 而函数提升会提升整个函数题 注意：函数提升在变量提升上面。
   - 例3：
   ```
   foo();
    var foo = function(){
        console.log("aaa");
    }
     运行结果是： foo is not a function

   原因： 还是进行了变量提升 
   相当于
    var foo;
    console.log(foo);  //undefined
    foo(); //foo is not a function
    foo = function(){
        console.log("aaa");
    }
   ```
   - 上面代码输出undefined 是因为变量提升后并没有赋值因此输出undefined
   - 输出foo is not a function 原因是：js解析遇到 foo()时会默认当做函数来解析
   ```
    console.log(foo);
    var foo=10;
    console.log(foo);
    function foo(){
        console.log(10);
     }
    console.log(foo);
    输出结果： 
    function foo(){
        console.log(10);
        }
    var foo;
    console.log(foo);
    foo=10;
    console.log(foo);
    console.log(foo);
   ```
   - 注意： 函数提升在变量提升上面，第一个console.log(foo);为什么会输出函数题呢，原因在于 var foo; 并未有赋值只是声明，因此他会调用上面的值
   - 例如:
   ```
    var b=10;
    b=10;
    console.log(b); //10 输出上一个值不会输出undefined
    但是更改后：
    var b=10;
    b=20;
    console.log(b); //20 输出20不是上一个值
   ```

##总结：关于变量提升，一定要注意细心思考一下，还有就是要牢记，函数提升在变量提升之上