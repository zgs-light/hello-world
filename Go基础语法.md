## 初识Go
实例:
```
package main //定义包名

import "fmt"

func main() {
   /* 这是我的第一个简单的程序 */
   fmt.Println("Hello, World!")
}
```
Go语言在众多大师的丰富实战经验的基础上诞生，去除了C语言语法中一些冗余、烦琐的部分。下面的代码是C语言的数值循环：
>去掉循环冗余括号

// C语言的for数值循环
```
for(int a =0;a<10;a++){// 循环代码}
```
在Go语言中，这样的循环变为：

```for a :=0;a<10;a++{// 循环代码}```
for 两边的括号被去掉，int 声明被简化为:=，直接通过编译器右值推导获得 a 的变量类型并声明。

>去掉表达式冗余括号

同样的简化也可以在判断语句中体现出来，以下是C语言的判断语句：

```
if(表达式){// 表达式成立}
```
在Go语言中，无须添加表达式括号，代码如下：
```
if 表达式 {//表达式成立}
```

>Go语言中，左括号必须紧接着语句不换行。


>不再纠结于 i++ 和 ++i,只有i++
## 数据类型
|序号|类型|
|:--|:--|
|1| bool|
|2|int,float32,float64,uint,uint8,int16,complex64,complex128...|
|3|string|
>派送类型：
a) 指针类型（Pointer）
(b) 数组类型
(c) 结构化类型(struct)
(d) Channel 类型
(e) 函数类型
(f) 切片类型
(g) 接口类型（interface）
(h) Map 类型

## 变量
#### 变量定义
```
package main

var x, y int
var (  // 这种因式分解关键字的写法一般用于声明全局变量
    a int
    b bool
)

var c, d int = 1, 2
var e, f = 123, "hello"

//这种不带声明格式的只能在函数体中出现
//g, h := 123, "hello"

func main(){
    g, h := 123, "hello" //g,h必须为没有声明过的变量
    println(x, y, a, b, c, d, e, f, g, h)
}
```
#### 变量初始值
bool为false
数值类型为0
string 为空字符

#### 交换变量
> a，b =b ，a//类型必须相同
## 常量
常量中的数据类型只可以是布尔型、数字型（整数型、浮点型和复数）和字符串型

定义：
>显式：const a int= 4
隐式：const b = "hllo"

ioto的用法：
```
func main() {
    const (
            a = iota   //0
            b          //1
            c          //2
            d = "ha"   //独立值，iota += 1
            e          //"ha"   iota += 1
            f = 100    //iota +=1
            g          //100  iota +=1
            h = iota   //7,恢复计数
            i          //8
    )
    fmt.Println(a,b,c,d,e,f,g,h,i)
}
```
结果:
>0 1 2 ha ha 100 100 7 8

## Go 语言条件语句
#### if
- if后条件可以不用（）
- if后面执行语句用{}，若用else，须跟在”}“后面
#### switch
switch 语句用于基于不同条件执行不同动作，每一个 case 分支都是唯一的，从上至下逐一测试，直到匹配为止。

switch 语句执行的过程从上至下，直到找到匹配项，匹配项后面也不需要再加 break。

switch 默认情况下 case 最后**自带 break 语句**，匹配成功后就不会执行其他 case，(与c++相反）如果我们需要执行后面的 case，可以使用 **fallthrough** 。
```
var score = 90

switch score {
    case 90 :
    fmt.Println("A")
    case 80 :
    fmt.Println("B")
    case 70,60,50 :
    fmt.Println("C")
    default:
    fmt.Println("D")
}
```
switch 若不带参数，默认为bool
```
var a int
	fmt.Scanln(&a)
	switch {//默认为bool型，不能用a作参数
	case a < 40:

		fmt.Println(1)
	case a < 50:

		fmt.Println(2)
	default:
		fmt.Println(3)

	}
```
#### for 

```
1：
for i:=1;i<10;i++ {
    执行语句
}
2：
i：=1
for i<10 {} //相当于while
3：
for {} //无限循环
4：
var str string
//用于遍历数组，切片，返回下标和值
for i:=range str{
    fmt.Print(i)
    fmt.Print(str[i])
}
```









