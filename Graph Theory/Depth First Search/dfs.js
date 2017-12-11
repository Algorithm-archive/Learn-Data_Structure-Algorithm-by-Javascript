/*
    DFS(Depth First Search) implementation in JavaScript
    ------------------------------------------------------
*/

/**
 * Processing DFS for the given srcNode in the Graph
 * @param {Array} graph (will be an adjacency list) 
 * @param {Number or String} srcNode 
 * @param {Number or String} dstNode
 */
function DFS(graph, srcNode, dstNode) {
    var isVisited = {},
        isFound,
        dfsPath = [],
        nextNode;

    //Recursively traverse to the deep of the graph
    function dfsTraverse(node) {
        isVisited[node] = true;
        dfsPath.push(node);
        isFound = (node === dstNode);

        for (var i = 0; !isFound && i < graph[node].length; i++) {
            nextNode = graph[node][i];
            if (isVisited[nextNode]) continue;
            dfsTraverse(nextNode);
        }
    }

    if (!graph[srcNode])
        throw new Error('Node not exists in the graph');

        dfsTraverse(srcNode);

    return {
        distance: isFound ? (dfsPath.length - 1) : Infinity,
        path: isFound ? dfsPath : []
    }
}

/************ Testing DFS ***************/
var graph = {
    1: [2, 3],
    2: [1, 3, 4, 5],
    3: [1, 2, 4],
    4: [2, 3, 5],
    5: [2, 4],
}
var srcNode = 1, dstNode = 5;

console.log(DFS(graph, srcNode, dstNode));