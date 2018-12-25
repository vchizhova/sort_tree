//Пример дерева
var treeView = {
  name: "root",
  leafs: {
    weight: 5,
    next: {
      weight: 88,
      next: {
        weight: 96,
        next: {
          weight: 55,
          next: {
            weight: 111,
            next: {
              weight: 0,
            }
          }
        }
      }
    }
  },
  arr: [
    {
      name: "child_1",
      arr: [
        {
          name: "child_1-1",
          leafs: {
            weight: 20,
            next: {
              weight: 20,
              next: {
                weight: 20,
                next: {
                  weight: 20,
                  next: {
                    weight: 10,
                    next: {
                      weight: 9,
                    }
                  }
                }
              }
            }
          }
        },
        {
          name: "child_1-2",
          leafs: {
            weight: 22,
            next: {
              weight: 33,
              next: {
                weight: 12,
                next: {
                  weight: 18,
                  next: {
                    weight: 19,
                    next: {
                      weight: 20,
                    }
                  }
                }
              }
            }
          },
          arr: [
            {
              name: "child_1-2-1",
              leafs: {
                weight: 9,
                next: {
                  weight: 6,
                  next: {
                    weight: 8,
                    next: {
                      weight: 3,
                      next: {
                        weight: 7,
                        next: {
                          weight: 1,
                        }
                      }
                    }
                  }
                }
              }
            },
            {
              name: "child_1-2-2",
              leafs: {
                weight: 20,
                next: {
                  weight: 10,
                  next: {
                    weight: 10,
                    next: {
                      weight: 10,
                      next: {
                        weight: 13,
                        next: {
                          weight: 0,
                        }
                      }
                    }
                  }
                }
              }
            }],
        }],
      leafs: {
        weight: 4,
        next: {
          weight: 77,
          next: {
            weight: 1,
            next: {
              weight: 2,
              next: {
                weight: 0,
                next: {
                  weight: 6,
                }
              }
            }
          }
        }
      }
    },
    {
      name: "child_2",
      leafs: {
        weight: 6,
        next: {
          weight: 3,
          next: {
            weight: 13,
            next: {
              weight: 9,
              next: {
                weight: 11,
                next: {
                  weight: 9,
                }
              }
            }
          }
        }
      }
    },
    {
      name: "child_3",
      leafs: {
        weight: 4,
        next: {
          weight: 77,
          next: {
            weight: 1,
            next: {
              weight: 2,
              next: {
                weight: 0,
                next: {
                  weight: 6,
                }
              }
            }
          }
        }
      }
    }
  ]
};

const W = 100;
const SORT_KEY = "weight";
const KEY_NAME = "name";
const ROOT_NAME = "root";
var diffArray = [];
var weightLeafs = 0;


//Разворачиваем однонаправленный связанный список в одномерный массив
function getPlainArray(list) {
  var temp = list;
  var Arr = [];
  while (temp && Object.keys(temp).length) {
    var obj = {};
    obj[SORT_KEY] = temp[SORT_KEY];
    Arr.push(obj);
    temp = temp.next;
  }
  return Arr;
}

//Сортировка одномерномерного массива
function sortArray(arr) {
  for (var i = 0, endI = arr.length - 1; i < arr.length - 1; i++) {
    for (var j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j][SORT_KEY] > arr[j + 1][SORT_KEY]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//Выкидываем из массива лишние листья, которые не соответствуют условию
function seperateArray(array) {
  var arrayLength = array.length;
  for (var i = 0; i < arrayLength - 1; i++) {
    if (weightLeafs <= W) {
      weightLeafs += array[i][SORT_KEY];
    } else {
      weightLeafs = 0;
      diffArray = array.slice(-(arrayLength - i + 1));
      return array.slice(0, i - 1);
    }
  }
}

//Функция добавления нового узла однонаправленного списка
function addNode(value) {
  var currentNode = this.unidirectionalList;
  
  if (!currentNode) {    
    return this.unidirectionalList = value;
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = value;

  return this.unidirectionalList;
}

//Получаем однонаправленный отсортированный массив листьев
function formUnidirectionalList(array) {
  this.unidirectionalList = null;
  for (var i = 0; i < array.length; i++) {
    addNode.call(this, array[i]);
  }
  return this.unidirectionalList;
}

//Заполняем дерево отсортированными данными с учетом суммы коэффициента W
function prepareTree(tree) {
  var arrayForSort = new getPlainArray(tree.leafs);
  arrayForSort = arrayForSort.concat(diffArray);
  var sortedArray = new sortArray(arrayForSort);
  sortedArray = seperateArray(sortedArray);
  tree.leafs = formUnidirectionalList(sortedArray);
}

function sortTreeView(tree) {
  prepareTree(tree);

  var temp = tree;
  while (temp.arr && temp.arr.length) {
    for (var i = 0; i < temp.arr.length; i++) {
      sortTreeView(temp.arr[i]);
    }
    temp = temp.arr;
  }
  if (tree[KEY_NAME] === ROOT_NAME) {
    console.log(tree);
  }
}

sortTreeView(treeView);


