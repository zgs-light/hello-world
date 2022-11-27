## 函数
定义：
>func 函数名 （参数，参数···） （函数返回值）{
    函数体
}
函数多返回值
如：
```
func swap (x,y int) (int,int) {
    return y,x
}
a,b :=swap(a,b)
```
函数传参：
- 值传递：int，flaot，bool等
- 引用传递：arr，chan，map，slice

- 函数可作为参数传递，实现回调

#### 指针
定义：
> var p *int

空指针：
> if p != nil //判断指针不为空
> if p == nil

#### 匿名函数

func (x int){
    return x
}();

#### 函数闭包
func getSequence() func() int {
   i:=0
   return func() int {
      i+=1
     return i  
   }
}

