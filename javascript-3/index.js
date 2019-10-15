function getPath(node) {
    let path;
    while (node) {
        let selector = node.localName;
        if (!selector) {
            break;
        }
        selector = selector.toLowerCase();
        const parent = node.parentElement;
        if (parent) {
            const children = parent.children;
            if (children.length > 1) {
                let index;
                for (let i = 0; i < children.length; i++) {
                    if (children[i] === node) {
                        index = i + 1;
                    }
                }
                selector += ':nth-child(' + index + ')';
             }
         }
         path = selector + (path ? '>' + path : '');
         node = parent;
      }
      return path;
}      
            
