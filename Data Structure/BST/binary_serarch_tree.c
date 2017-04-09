#include<stdio.h>
#include<stdlib.h>

typedef struct
{
    int number;
    struct node *leftChild;
    struct node *rightChild;

} node;

node* root = NULL;

void insertNode(int value)
{
    node* tempNode;
    node* currentNode = NULL;

    tempNode = (node *) malloc(sizeof(node));
    tempNode->number = value;
    tempNode->leftChild = NULL;
    tempNode->rightChild = NULL;


    if(root == NULL) //For the very first call
    {
        root = tempNode;
    }
    else
    {
        currentNode = root;

        while(1)
        {
            if(value <= currentNode->number)
            {
                if(currentNode->leftChild == NULL)
                {
                    currentNode->leftChild = tempNode;
                    break;
                }

                currentNode = currentNode->leftChild;
            }
            else
            {
                if(currentNode->rightChild == NULL)
                {
                    currentNode->rightChild = tempNode;
                    break;
                }

                currentNode = currentNode->rightChild;
            }
        }
    }
}

void inOrderPrint(node *rootNode) // InOrder Traversal (left-root-right)
{
    if(rootNode==NULL)
        return;

    inOrderPrint(rootNode->leftChild);

    printf("%d ", rootNode->number);

    inOrderPrint(rootNode->rightChild);
}

node* searchOnTree(int value)
{
    node* currentNode = root;

    while(currentNode != NULL)
    {
        if(value == currentNode->number)
        {
            break;
        }
        else if(value <= currentNode->number)
            currentNode = currentNode->leftChild;
        else
            currentNode = currentNode->rightChild;
    }

    return currentNode;
}

node * findMinimum(node *currentNode)
{
    if(currentNode->leftChild==NULL)
        return currentNode;

    return findMinimum(currentNode->leftChild);
}

node * deleteNode(node *currentNode, int value)
{
    if(currentNode==NULL) // empty tree
        return NULL;
    else if(value < currentNode->number) // value is less than node's number. so go to left subtree
        currentNode->leftChild = deleteNode(currentNode->leftChild, value);
    else if(value > currentNode->number) // value is greater than node's number. so go to right subtree
        currentNode->rightChild = deleteNode(currentNode->rightChild, value);
    else // node found. Let's delete it!
    {
        //node has no child
        if(currentNode->leftChild == NULL && currentNode->rightChild == NULL)
        {
            currentNode = NULL;
        }
        else if(currentNode->leftChild == NULL) // node has only right child
        {
            currentNode = currentNode->rightChild;
        }
        else if(currentNode->rightChild == NULL) // node has only left child
        {
            currentNode = currentNode->leftChild;
        }
        else // node has two children
        {
            node *tempNode = findMinimum(currentNode->rightChild);
            currentNode->number = tempNode->number;
            currentNode->rightChild = deleteNode(currentNode->rightChild, tempNode->number);
        }

    }

    return currentNode;
}


int main()
{
    int i, value;
    //int numbers[] = {45, 54, 40, 49, 38, 70, 30, 39, 41, 45, 44};
    int numbers[] = {5, 2, 17, 6, 20};
    int numbers_length = sizeof(numbers)/sizeof(numbers[0]);
    node* node_to_delete;

    for(i=0;i<numbers_length;i++)
    {
        insertNode(numbers[i]);
    }

    printf("\nIn-Order Tree printing:\n");
    inOrderPrint(root);
    puts("");

    value = 70;
    if(searchOnTree(value) != NULL)
        printf("\n%d is found on Tree.\n", value);
    else
        printf("\n%d is not found on Tree.\n", value);

    value = 100;
    if(searchOnTree(value) != NULL)
        printf("\n%d is found on Tree.\n", value);
    else
        printf("\n%d is not found on Tree.\n", value);

    deleteNode(root, 5);

    printf("\nIn-Order Tree printing:\n");
    inOrderPrint(root);
    puts("");

    return 0;
}
