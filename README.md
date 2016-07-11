# es6-instead-lodash
用es6替代lodash


[lodash](http://lodashjs.com/docs/)是一个非常流行的语言增强库，随着es6和es7的发布，js语言本身功能越来越强大，很多lodash的功能就不需要了，在此学习和记录一下


## Array

* _.compact
    - 创建一个新数组并包含原数组中所有的非假值元素。例如 false、null、 0、""、undefined 和 NaN 都是“假值”

```
// lodash
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

//es6
[0, 1, false, 2, '', 3].filter(v=>v)

```

* _.difference(arr1,arr2)
    - 求arr1里有，arr2里没有的元素

```
// lodash
_.difference([1, 2, 3], [4, 2]);
// => [1, 3]

//es6
[1, 2, 3].filter(v=>[4, 2].indexOf(v)<0)

```











## 暂时搞不定的

* _.chunk
* 
