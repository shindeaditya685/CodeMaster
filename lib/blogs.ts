export const blogs: BlogType[] = [
  {
    id: "1",
    title: "Maximum sum of subarray.",
    description:
      "This article delves into the concept of finding the maximum sum of a contiguous subarray within a one-dimensional numerical array, commonly known as the Maximum Subarray Problem. We will explore various approaches to solve this problem, including the naive method and more efficient algorithms like Kadane's Algorithm. Through step-by-step explanations and code examples in Java, readers will gain a comprehensive understanding of how to implement these solutions and the underlying principles that make them effective. This is a fundamental problem in computer science that helps in enhancing problem-solving skills and understanding dynamic programming concepts.",
    tags: ["algorithm", "data structures"],
    likes: 100,
    javaCode: `public class MaxSubarray {
  public static void main(String[] args) {
    int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    System.out.println(maxSubArray(nums));
  }

  public static int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
}`,
    cppCode: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxSubArray(const vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (size_t i = 1; i < nums.size(); ++i) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}

int main() {
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << maxSubArray(nums) << endl;
    return 0;
}`,
    jsCode: `function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));`,
    pythonCode: `def max_sub_array(nums):
    max_sum = current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(max_sub_array(nums))`,
    userId: "",
    createdAt: "hello",
    updatedAt: "hello",
  },
  {
    id: "2",
    title: "Solving the Knapsack Problem.",
    description:
      "The Knapsack Problem is a classic algorithmic problem in the field of combinatorial optimization. This blog explores different methods to solve this problem, such as the greedy approach, dynamic programming, and backtracking. Through detailed explanations and code snippets in Python, readers will learn how to tackle the 0/1 knapsack problem efficiently.",
    tags: ["dynamic programming", "optimization"],
    likes: 120,
    javaCode: `public class Knapsack {
  public static int knapSack(int W, int[] wt, int[] val, int n) {
    int[][] K = new int[n + 1][W + 1];
    for (int i = 0; i <= n; i++) {
      for (int w = 0; w <= W; w++) {
        if (i == 0 || w == 0) {
          K[i][w] = 0;
        } else if (wt[i - 1] <= w) {
          K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
        } else {
          K[i][w] = K[i - 1][w];
        }
      }
    }
    return K[n][W];
  }

  public static void main(String[] args) {
    int[] val = {60, 100, 120};
    int[] wt = {10, 20, 30};
    int W = 50;
    int n = val.length;
    System.out.println(knapSack(W, wt, val, n));
  }
}`,
    cppCode: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int knapSack(int W, const vector<int>& wt, const vector<int>& val, int n) {
    vector<vector<int>> K(n + 1, vector<int>(W + 1, 0));
    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            if (i == 0 || w == 0) {
                K[i][w] = 0;
            } else if (wt[i - 1] <= w) {
                K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
            } else {
                K[i][w] = K[i - 1][w];
            }
        }
    }
    return K[n][W];
}

int main() {
    vector<int> val = {60, 100, 120};
    vector<int> wt = {10, 20, 30};
    int W = 50;
    int n = val.size();
    cout << knapSack(W, wt, val, n) << endl;
    return 0;
}`,
    jsCode: `function knapSack(W, wt, val) {
  const n = val.length;
  const K = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (i === 0 || w === 0) {
        K[i][w] = 0;
      } else if (wt[i - 1] <= w) {
        K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      } else {
        K[i][w] = K[i - 1][w];
      }
    }
  }
  return K[n][W];
}

const val = [60, 100, 120];
const wt = [10, 20, 30];
const W = 50;
console.log(knapSack(W, wt, val));`,
    pythonCode: `def knap_sack(W, wt, val):
    n = len(val)
    K = [[0 for _ in range(W + 1)] for _ in range(n + 1)]
    for i in range(n + 1):
        for w in range(W + 1):
            if i == 0 or w == 0:
                K[i][w] = 0
            elif wt[i - 1] <= w:
                K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w])
            else:
                K[i][w] = K[i - 1][w]
    return K[n][W]

val = [60, 100, 120]
wt = [10, 20, 30]
W = 50
print(knap_sack(W, wt, val))`,
    userId: "",
    createdAt: "hello",
    updatedAt: "hello",
  },
  {
    id: "3",
    title: "Graph Traversal Techniques.",
    description:
      "Graph traversal is a fundamental concept in computer science. In this article, we cover two primary graph traversal techniques: Depth-First Search (DFS) and Breadth-First Search (BFS). Using clear examples and Python code, we explain how these algorithms work, their applications, and how to implement them effectively.",
    tags: ["graphs", "algorithms"],
    likes: 90,
    javaCode: `import java.util.*;

public class GraphTraversal {
  static class Graph {
    private final Map<Integer, List<Integer>> adjList = new HashMap<>();
    void addEdge(int u, int v) {
      adjList.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
    }

    void dfs(int start) {
      Set<Integer> visited = new HashSet<>();
      dfsUtil(start, visited);
    }

    private void dfsUtil(int vertex, Set<Integer> visited) {
      visited.add(vertex);
      System.out.print(vertex + " ");
      for (int neighbor : adjList.getOrDefault(vertex, Collections.emptyList())) {
        if (!visited.contains(neighbor)) {
          dfsUtil(neighbor, visited);
        }
      }
    }

    void bfs(int start) {
      Set<Integer> visited = new HashSet<>();
      Queue<Integer> queue = new LinkedList<>();
      visited.add(start);
      queue.add(start);

      while (!queue.isEmpty()) {
        int vertex = queue.poll();
        System.out.print(vertex + " ");
        for (int neighbor : adjList.getOrDefault(vertex, Collections.emptyList())) {
          if (!visited.contains(neighbor)) {
            visited.add(neighbor);
            queue.add(neighbor);
          }
        }
      }
    }
  }

  public static void main(String[] args) {
    Graph graph = new Graph();
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    System.out.println("DFS:");
    graph.dfs(0);
    System.out.println("\nBFS:");
    graph.bfs(0);
  }
}`,
    cppCode: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
#include <unordered_map>

using namespace std;

class Graph {
  unordered_map<int, vector<int>> adjList;

public:
  void addEdge(int u, int v) {
    adjList[u].push_back(v);
  }

  void dfs(int start) {
    unordered_set<int> visited;
    dfsUtil(start, visited);
  }

  void dfsUtil(int vertex, unordered_set<int>& visited) {
    visited.insert(vertex);
    cout << vertex << " ";
    for (int neighbor : adjList[vertex]) {
      if (visited.find(neighbor) == visited.end()) {
        dfsUtil(neighbor, visited);
      }
    }
  }

  void bfs(int start) {
    unordered_set<int> visited;
    queue<int> q;
    visited.insert(start);
    q.push(start);

    while (!q.empty()) {
      int vertex = q.front();
      q.pop();
      cout << vertex << " ";
      for (int neighbor : adjList[vertex]) {
        if (visited.find(neighbor) == visited.end()) {
          visited.insert(neighbor);
          q.push(neighbor);
        }
      }
    }
  }
};

int main() {
  Graph graph;
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 3);

  cout << "DFS:" << endl;
  graph.dfs(0);
  cout << endl << "BFS:" << endl;
  graph.bfs(0);
  return 0;
}`,
    jsCode: `class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdge(u, v) {
    if (!this.adjList.has(u)) this.adjList.set(u, []);
    if (!this.adjList.has(v)) this.adjList.set(v, []);
    this.adjList.get(u).push(v);
  }

  dfs(start) {
    const visited = new Set();
    this.dfsUtil(start, visited);
  }

  dfsUtil(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);
    (this.adjList.get(vertex) || []).forEach(neighbor => {
      if (!visited.has(neighbor)) {
        this.dfsUtil(neighbor, visited);
      }
    });
  }

  bfs(start) {
    const visited = new Set();
    const queue = [];
    visited.add(start);
    queue.push(start);

    while (queue.length) {
      const vertex = queue.shift();
      console.log(vertex);
      (this.adjList.get(vertex) || []).forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
  }
}

const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);

console.log("DFS:");
graph.dfs(0);
console.log("BFS:");
graph.bfs(0);`,
    pythonCode: `class Graph:
    def __init__(self):
        self.adj_list = {}

    def add_edge(self, u, v):
        if u not in self.adj_list:
            self.adj_list[u] = []
        if v not in self.adj_list:
            self.adj_list[v] = []
        self.adj_list[u].append(v)

    def dfs(self, start):
        visited = set()
        self._dfs_util(start, visited)

    def _dfs_util(self, vertex, visited):
        visited.add(vertex)
        print(vertex)
        for neighbor in self.adj_list.get(vertex, []):
            if neighbor not in visited:
                self._dfs_util(neighbor, visited)

    def bfs(self, start):
        visited = set()
        queue = [start]
        visited.add(start)

        while queue:
            vertex = queue.pop(0)
            print(vertex)
            for neighbor in self.adj_list.get(vertex, []):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

graph = Graph()
graph.add_edge(0, 1)
graph.add_edge(0, 2)
graph.add_edge(1, 3)
graph.add_edge(2, 3)

print("DFS:")
graph.dfs(0)
print("BFS:")
graph.bfs(0)`,
    userId: "",
    createdAt: "hello",
    updatedAt: "hello",
  },
  {
    id: "4",
    title: "Finding the Longest Common Subsequence.",
    description:
      "The Longest Common Subsequence (LCS) problem is an important problem in dynamic programming. This blog provides a thorough explanation of the LCS problem, including a step-by-step guide to solving it using dynamic programming techniques. Examples in C++ are provided to help readers understand the implementation details.",
    tags: ["dynamic programming", "string algorithms"],
    likes: 110,
    javaCode: `public class LongestCommonSubsequence {
  public static int longestCommonSubsequence(String text1, String text2) {
    int m = text1.length();
    int n = text2.length();
    int[][] dp = new int[m + 1][n + 1];

    for (int i = 1; i <= m; i++) {
      for (int j = 1; j <= n; j++) {
        if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[m][n];
  }

  public static void main(String[] args) {
    String text1 = "abcde";
    String text2 = "ace";
    System.out.println(longestCommonSubsequence(text1, text2));
  }
}`,
    cppCode: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

int longestCommonSubsequence(const string& text1, const string& text2) {
    int m = text1.size();
    int n = text2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

int main() {
    string text1 = "abcde";
    string text2 = "ace";
    cout << longestCommonSubsequence(text1, text2) << endl;
    return 0;
}`,
    jsCode: `function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

const text1 = "abcde";
const text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));`,
    pythonCode: `def longest_common_subsequence(text1, text2):
    m = len(text1)
    n = len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[m][n]

text1 = "abcde"
text2 = "ace"
print(longest_common_subsequence(text1, text2))`,
    userId: "",
    createdAt: "hello",
    updatedAt: "hello",
  },
  {
    id: "5",
    title: "Efficient Sorting Algorithms.",
    description:
      "Sorting algorithms are essential for optimizing the performance of other algorithms that require sorted data. In this blog, we review several efficient sorting algorithms, including QuickSort, MergeSort, and HeapSort. We discuss the time complexities of these algorithms and provide JavaScript code examples for each, helping readers understand how to implement them in their own projects.",
    tags: ["sorting", "algorithms"],
    likes: 140,
    javaCode: `public class SortingAlgorithms {
  public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
      int pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }

  private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }

  public static void main(String[] args) {
    int[] arr = {10, 7, 8, 9, 1, 5};
    quickSort(arr, 0, arr.length - 1);
    for (int num : arr) {
      System.out.print(num + " ");
    }
  }
}`,
    cppCode: `#include <iostream>
#include <vector>

using namespace std;

void quickSort(vector<int>& arr, int low, int high);
int partition(vector<int>& arr, int low, int high);

int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};
    quickSort(arr, 0, arr.size() - 1);
    for (int num : arr) {
        cout << num << " ";
    }
    return 0;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}`,
    jsCode: `function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);`,
    pythonCode: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

arr = [10, 7, 8, 9, 1, 5]
quick_sort(arr, 0, len(arr) - 1)
print(arr)`,
    userId: "",
    createdAt: "hello",
    updatedAt: "hello",
  },
];

export const userBlog: BlogType[] = [
  {
    id: "1",
    title: "Maximum sum of subarray.",
    description:
      "This article delves into the concept of finding the maximum sum of a contiguous subarray within a one-dimensional numerical array, commonly known as the Maximum Subarray Problem. We will explore various approaches to solve this problem, including the naive method and more efficient algorithms like Kadane's Algorithm. Through step-by-step explanations and code examples in Java, readers will gain a comprehensive understanding of how to implement these solutions and the underlying principles that make them effective. This is a fundamental problem in computer science that helps in enhancing problem-solving skills and understanding dynamic programming concepts.",
    tags: ["algorithm", "data structures"],
    likes: 100,
    javaCode: `public class MaxSubarray {
  public static void main(String[] args) {
    int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    System.out.println(maxSubArray(nums));
  }

  public static int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
}`,
    cppCode: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxSubArray(const vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (size_t i = 1; i < nums.size(); ++i) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}

int main() {
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << maxSubArray(nums) << endl;
    return 0;
}`,
    jsCode: `function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));`,
    pythonCode: `def max_sub_array(nums):
    max_sum = current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(max_sub_array(nums))`,
    userId: "",
    createdAt: "hello",
    updatedAt: "hello",
  },
];
