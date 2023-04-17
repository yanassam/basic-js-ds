const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
 
  let dummyNode = new ListNode(null);
  dummyNode.next = l;
  
  let current = dummyNode;
  while (current.next !== null) {
    if (current.next.value === k) {
      
      current.next = current.next.next;
    } else {
     
      current = current.next;
    }
  }

  return dummyNode.next;
}



module.exports = {
  removeKFromList
};
