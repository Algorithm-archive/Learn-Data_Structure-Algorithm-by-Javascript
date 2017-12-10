/*
    Graph representation by Adjacency Matrix in JavaScript
    ------------------------------------------------------

    Note: The Adjacency Matrix represented here is constructed
        as a Square matrix. And the vertexes are considered 0-indexed. 
        That means for 3 Vertex Graph the vertexes will be considered 0, 1 and 2.
*/


//Graph Class
function Graph(V) {

    var matrix = [];
    var num_of_vertex = 0;
    
    //Initializing a 2D matrix of size V*V with 0 values
    this.init = function() {
        //If the given parameter is a already constructed matrix
        //then just assign it, otherwise initialize it with '0' values
        if (typeof V === 'object')
        {
            matrix = V;
            num_of_vertex = matrix[0].length;
        }     
        else
        {
            num_of_vertex = V;

            for (var i = 0; i < num_of_vertex; i++) 
            {
                var arraySize = num_of_vertex;
                matrix[i] = [];
                while(arraySize--)
                    matrix[i].push(0);
            }
        }
    }

    this.init(V);

    /*
        Adding an Edge in an Adjacency matrix means marking the 
        regarding row, column values with 1. 
        If an optional 'true' value for the 'bidirectional' parameter
        passed then the reverse position will be marked as 1 too.
    */
    this.addEdge = function (u, v, bidirectional) {
        if(u >= num_of_vertex || v >= num_of_vertex)
            throw new Error('Wrong u or v value provided');

        matrix[u][v] = 1;

        if(bidirectional) //optional Boolean parameter
            matrix[v][u] = 1;
    }

    /*
        Removing an Edge in an Adjacency matrix means marking the 
        regarding row, column values with 0. 
        If an optional 'true' value for the 'bidirectional' parameter
        passed then the reverse position will be marked as 0 too.
    */
    this.removeEdge = function (u, v, bidirectional) {
        if(u >= num_of_vertex || v >= num_of_vertex)
            throw new Error('Wrong u or v value provided');

        matrix[u][v] = 0;

        if(bidirectional) //optional Boolean parameter
            matrix[v][u] = 0;
    }

    //Adding a vertex means adding an additional Row and column in the matrix
    this.addVertex = function() {
        
        //Adding a new Row
        matrix[num_of_vertex] = [];

        for (var i = 0; i < num_of_vertex; i++)
            matrix[num_of_vertex].push(0);
        
        num_of_vertex++;

        for (var i = 0; i < num_of_vertex; i++)
            matrix[i].push(0);
    }

    //Removing a vertex means removing the regarding Row and column from the matrix
    this.removeVertex = function(vertex) {

        if (vertex >= num_of_vertex)
            throw new Error('Invalid vertex number');
        
        //Removing the Row
        matrix.splice(vertex, 1);

        num_of_vertex--;

        //Removing the Column
        for (var i = 0; i < num_of_vertex; i++)
            matrix[i].splice(vertex, 1);
    }

    //Printing the Matrix with as a nice output
    this.printMatrix = function() {
        console.log("--------- Printing the Matrix ----------")
        matrix.forEach(function(row) {
            console.log(row.join(' | '));
        });
        console.log("----------------------------------------")
    }

    this.size = function() {
        return num_of_vertex;
    }

    //Checking if an Edge exists between vertex 'u' and 'v'
    this.isAdjacent = function(u, v) {
        if(u >= num_of_vertex || v >= num_of_vertex)
            throw new Error('Wrong u or v value provided');

        return (matrix[u][v] === 1);
    }

    //Get the list of Adjacent vertexes for a given vertex
    this.getNeighbours = function(v) {
        var neighbours = [];

        for (var i = 0; i < num_of_vertex; i++)
        {
            if (matrix[v][i] === 1)
                neighbours.push(i);
        }

        return neighbours;
    }
}


/************ Graph Representation ***************/

//Initializing a new Graph Object by giving it's size as a parameter
var graph = new Graph(5);
graph.printMatrix();
graph.addEdge(1, 2, true);
graph.printMatrix();
graph.addVertex();
graph.printMatrix();
graph.removeEdge(1, 2);
graph.printMatrix();
graph.removeVertex(2);
graph.printMatrix();
console.log(graph.isAdjacent(1, 2));
console.log(graph.isAdjacent(2, 3));
console.log(graph.getNeighbours(1));


//Initializing a new Graph Object by it a 2D matrix
var existingGraph = new Graph([
    [ 1, 0, 1],
    [ 1, 0, 1],
    [ 1, 0, 0]
]);

existingGraph.printMatrix();
existingGraph.addEdge(0, 1);
existingGraph.printMatrix();
existingGraph.addVertex();
existingGraph.printMatrix();
existingGraph.removeEdge(1, 2);
existingGraph.printMatrix();
existingGraph.removeVertex(1);
existingGraph.printMatrix();
console.log(existingGraph.isAdjacent(0, 1));
console.log(existingGraph.isAdjacent(1, 1));
console.log(existingGraph.getNeighbours(0));
