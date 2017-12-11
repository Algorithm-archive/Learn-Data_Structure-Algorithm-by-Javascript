/*
    BFS(Breadth First Search) implementation in JavaScript
    ------------------------------------------------------
*/

/**
 * Processing BFS for the given srcNode in the Graph
 * If the 'dstNode' is not given, then it will process shortest path for all of the nodes from 'srcNode'
 * @param {Array} graph (will be an adjacency list) 
 * @param {Number} srcNode (0-indexed)
 * @param {Number} dstNode (Optional, 0-indexed) 
 */
function BFS(graph, srcNode, dstNode) {
    var isProcessed = [],
        bfsQueue = [],
        parentNodeOf = [],
        distance = [],
        currentNode,
        childNode;


    //Processing the distance and path from the given graph
    this.init = function() {
        //Initializing for the 'srcNode'
        bfsQueue.push(srcNode);
        parentNodeOf[srcNode] = null;
        isProcessed[srcNode] = true;
        distance[srcNode] = 0;

        while (bfsQueue.length > 0) {
            currentNode = bfsQueue.shift();
            if (currentNode === dstNode) break;

            var listLength = graph[currentNode].length;

            for (var i = 0; i < listLength; i++) {
                childNode = graph[currentNode][i];
                if (isProcessed[childNode]) continue; //already entered in the queue, so don't need to add again

                parentNodeOf[childNode] = currentNode;
                distance[childNode] = distance[currentNode] + 1;
                bfsQueue.push(childNode);
                isProcessed[childNode] = true;
            }
        }
    }

    this.init();

    //Get the shortest distance from the processed 'distance' Array
    this.getShortestDistance = function (dstNode) {
        if (!isProcessed[dstNode]) {
            return Infinity;
        } else {
            return distance[dstNode];
        }
    }

    //Get the Shortest Path from the breadcrumb of the 'parentNodeOf'
    this.getShortestPath = function(dstNode) {
        var shortestPath = [dstNode];
        var currentNode = dstNode;

        if (!isProcessed[dstNode]) return [];

        while (parentNodeOf[currentNode]) {
            currentNode = parentNodeOf[currentNode];
            shortestPath.unshift(currentNode);
        }

        return shortestPath;
    }
}


/************ Testing BFS ***************/
var graph = {
    0: [1, 2],
    1: [0, 2, 3, 4],
    2: [0, 1, 3],
    3: [1, 2, 4],
    4: [1, 3],
}
var srcNode = 1, dstNode = 4;

var bfs = new BFS(graph, srcNode);

console.log(bfs.getShortestDistance(dstNode));
console.log(bfs.getShortestPath(dstNode));