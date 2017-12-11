function BFSFindShortestPath(graph, srcNode, dstNode) {
    var isPushed = Object.create(null),
        bfsQueue,
        currentNode,
        childNode,
        parentNodeOf = Object.create(null),
        shortestPath;

    bfsQueue = [srcNode];
    parentNodeOf[srcNode] = null;
    isPushed[srcNode] = true;

    while (bfsQueue.length > 0) {
        currentNode = bfsQueue.shift();
        if (currentNode === dstNode) break;

        for (var i = 0; i < graph[currentNode].length; i++) {
            childNode = graph[currentNode][i];
            if (isPushed[childNode]) continue;

            parentNodeOf[childNode] = currentNode;
            bfsQueue.push(childNode);
            isPushed[childNode] = true;
        }
    }

    if (!isPushed[dstNode]) {
        return {
            distance: Infinity,
            shortestPath: []
        }
    }

    shortestPath = [dstNode];
    currentNode = dstNode;

    while (parentNodeOf[currentNode]) {
        currentNode = parentNodeOf[currentNode];
        shortestPath.unshift(currentNode);
    }

    return {
        distance: shortestPath.length - 1,
        shortestPath: shortestPath
    }
}


/* TESTING */
var graph = {
    1: [2, 3],
    2: [1, 3, 4, 5],
    3: [1, 2, 4],
    4: [2, 3, 5],
    5: [2, 4],
}
var srcNode = 1, destNode = 5;

console.log(BFSFindShortestPath(graph, srcNode, destNode));