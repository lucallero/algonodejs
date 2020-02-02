/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const Mocha = require('mocha')
const mocha = new Mocha()
const chai = require('chai')
const expect = require('chai').expect

mocha.suite.emit('pre-require', this, 'solution', mocha)

class Graph {
  constructor () {
    this.adjacencyList = {}
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge (v1, v2) {
    if (!v1 || !v2) throw new Error('An edge need two vertexes')
    if (!this.adjacencyList[v1]) this.addVertex(v1)
    if (!this.adjacencyList[v2]) this.addVertex(v2)
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge (v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(e => e !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(e => e !== v1)
  }

  removeVertex (vertex) {
    for (const v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstTraversal (vertex) {
    const result = []
    const visited = {}

    const dfs = (vertex) => {
      if (!this.adjacencyList[vertex].length) return
      visited[vertex] = true
      result.push(vertex)
      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          dfs(neighbor)
        }
      }
    }
    dfs(vertex)
    return result
  }

  depthFirstTraversalIterative (vertex) {
    const result = []
    const visited = {}
    const stack = []
    let current = null

    stack.push(vertex)
    visited[vertex] = true

    while (stack.length) {
      current = stack.pop()
      result.push(current)

      for (const neighbor of this.adjacencyList[current]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      }
    }
    return result
  }

  breadthFirstTraversal (vertex) {
    const result = []
    const visited = {}
    const queue = []
    visited[vertex] = true

    const bfs = (v) => {
      if (!this.adjacencyList[v].length) return

      result.push(v)

      for (const neighbor of this.adjacencyList[v]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      }
      if (queue.length) bfs(queue.shift())
    }
    bfs(vertex)
    return result
  }

  breadthFirstTraversalIterative (vertex) {
    const result = []
    const visited = {}
    const queue = []
    let current = {}

    queue.push(vertex)
    visited[vertex] = true

    while (queue.length) {
      current = queue.shift()
      result.push(current)
      for (const neighbor of this.adjacencyList[current]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      }
    }
    return result
  }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.depthFirstTraversal('A'))
console.log(g.depthFirstTraversalIterative('A'))
console.log(g.breadthFirstTraversalIterative('A'))
console.log(g.breadthFirstTraversal('A'))

describe('| TESTS |', () => {
  const graph = new Graph()

  it('Should test Graph class', () => {
    graph.addVertex('Rio')
    expect(graph.adjacencyList.Rio).to.be.an('Array')

    graph.addEdge('Rio', 'Toronto')
    graph.addEdge('Rio', 'London')
    graph.addEdge('Tokio', 'London')
    graph.addEdge('Tokio', 'Toronto')
    graph.addEdge('London', 'Toronto')

    const invalidEdge = () => graph.addEdge('Madrid')
    expect(invalidEdge).to.throw()
    const removeRioToronto = () => graph.removeEdge('Rio', 'Toronto')
    expect(removeRioToronto).not.to.throw()
    console.log(graph)
  })
})

// mocha.run()
