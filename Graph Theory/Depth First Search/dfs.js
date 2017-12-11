function DFSFindPath(graph, srcNode, destNode) {
    var isVisited = Object.create(null),
        isFound,
        dfsPath,
        nextNode;

    dfsPath = [];
    dfsTraverse(srcNode);

    return {
        distance: isFound ? dfsPath.length - 1 : Infinity,
        path: isFound ? dfsPath : []
    }

    function dfsTraverse(node) {
        isVisited[node] = true;
        dfsPath.push(node);
        isFound = node === destNode;
        if (isFound) return;

        for (var i = 0; i < graph[node].length; i++) {
            nextNode = graph[node][i];
            if (isVisited[nextNode]) continue;
            dfsTraverse(nextNode);
            if (isFound) return;
        }
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

console.log(DFSFindPath(graph, srcNode, destNode));