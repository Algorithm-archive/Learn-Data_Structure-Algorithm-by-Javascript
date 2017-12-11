/*
    Graph representation by Adjacency List in JavaScript
    ------------------------------------------------------

    Note: The Adjacency List represented here is constructed
        as an Object. Where the 'keys' are the vertexes along with 
        an Array as their value which consists the list of the adjacent vertexes.
*/


//Graph Class
function Graph(V) {
        //If the given parameter is a already constructed adjacency list
        //then just assign it, otherwise initialize it
        var adjList = (typeof V === 'object') ? V : {};
        var num_of_vertex = (typeof V === 'object') ? V.size() : 0;

        /*
            Adding an Edge in an Adjacency list means adding the 'dest'
            in the adjacent list of 'src'.
            If an optional 'true' value for the 'bidirectional' parameter
            passed then 'src' will be added in adjacent list of 'dest' too.
        */
        this.addEdge = function (src, dest, bidirectional) {
            this.addVertex(src); //This will add a new vertex if it isn't already exists   

            adjList[src].push(dest);

            if(bidirectional)
                this.addEdge(dest, src); 
        }
    
        /*
            Removing an Edge in an Adjacency list means removing the 'dest' from the list
            of given 'src' key.
            If an optional 'true' value for the 'bidirectional' parameter
            passed then the 'src' will be removed from the key 'dest' too.
        */
        this.removeEdge = function (src, dest, bidirectional) {
            if(!(src in adjList) || !(src in adjList))
                throw new Error('Wrong \'src\' or \'dest\' value provided');
    
            var listLength = adjList[src].length;
            for(var i = 0; i < listLength; i++)
            {
                if(adjList[src][i] === dest) {
                    adjList[src].splice(i, 1);
                    break;
                }
            }

            if(bidirectional)
                this.removeEdge(dest, src);
        }
    
        //Adding a vertex means adding an additional property in the adjacency list
        this.addVertex = function(vertex) {
            if( !(vertex in adjList) )
            {
                adjList[vertex] = [];
                num_of_vertex++;
            }
        }
    
        /*
            Removing a vertex means removing the regarding key from the Object 
            along with it's entries from other keys lists
        */
        this.removeVertex = function(vertex) {
    
            if (!(vertex in adjList))
                throw new Error('Invalid vertex provided');

            delete adjList[vertex];
            num_of_vertex--;

            for(var v in adjList)
            {
                if(adjList.hasOwnProperty(v))
                {
                    this.removeEdge(v, vertex);
                }
            }
        }
    
        //Printing the Adjacency List as a nice output
        this.printList = function() {
            console.log("--------- Printing the List ----------")
            for(var vertex in adjList)
            {
                if(adjList.hasOwnProperty(vertex))
                {
                    console.log(vertex, ': [ ', adjList[vertex].join(', '), ' ]');
                }
            }
            console.log("----------------------------------------")
        }
    
        //Checking if an Edge exists from 'src' to 'dest'
        this.hasEdge = function(src, dest) {
            if(!(src in adjList) || !(dest in adjList))
                throw new Error('Wrong \'src\' or \'dest\' value provided');
    
            var listLength = adjList[src].length;
            for(var i = 0; i < listLength; i++)
            {
                if(adjList[src][i] === dest)
                    return true;
            }

            return false;
        }

        //Get the number of vertex of the graph
        this.size = function() {
            return num_of_vertex;
        }
    
        //Get the list of Adjacent vertexes for a given vertex
        this.getNeighbours = function(v) {
            return adjList[v];
        }

        //Get the adjacency List as Object
        this.getAdjList = function() {
            return adjList;
        }
    }
    
    
    /************ Testing Graph Representation ***************/
    
    //Initializing a new Graph Object
    var graph = new Graph({
        1: [2, 3],
        2: [1, 3, 4, 5],
        3: [1, 2, 4],
        4: [2, 3, 5],
        5: [2, 4],
    });
    graph.printList();
    graph.addEdge(1, 4, true);
    graph.printList();
    graph.addVertex(6);
    graph.printList();
    graph.removeEdge(1, 2);
    graph.printList();
    graph.removeVertex(2);
    graph.printList();
    console.log(graph.hasEdge(1, 4));
    console.log(graph.hasEdge(5, 3));
    console.log(graph.getNeighbours(1));
    