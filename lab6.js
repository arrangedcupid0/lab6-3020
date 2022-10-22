function depthFirstSearch(graph, start, node)
{
	if(graph[start - 1] == [])
	{
		return false;
	}
	var found = false;
//	console.log(graph[start - 1]);
	for(var i = 0; i < graph[start - 1].length; i++)
	{
//		console.log(graph[start - 1][i]);
		if(graph[start - 1][i][0] == node)
		{
			return true;
		}
		if(graph[start - 1][i][1] == false)
		{
			found = depthFirstSearch(graph, graph[start - 1][i][0], node);
			graph[start - 1][i][1] = true;
			if(found == true)
			{
				return true;
			}
		}
	}
	return false;
}

function testThisBS()
{
	var test1 = [
			[[2, false], [3, false]], 
			[[3, false], [5, false], [4, false]], 
			[], 
			[], 
			[]
		];
	var test2 = [
			[[2, false]], 
			[[3, false]], 
			[[4, false]], 
			[[5, false]], 
			[[6, false]], 
			[[1, false]]
		];
	var test3 = [
			[[2, false]],
			[[3, false]], 
			[[4, false]], 
			[[5, false]], 
			[[6, false]], 
			[]
		];
	var test4 = [
			[[6, false], [7, false]], 
			[[3, false], [5, false]], 
			[[4, false]], 
			[], 
			[[4, false]], 
			[[2, false]], 
			[[2, false]]
		];

	console.log("This result should be true");
	console.log(depthFirstSearch(test1, 1, 5));
	console.log("This result should be false");
	console.log(depthFirstSearch(test1, 4, 5));
	console.log("This result should be true");
	console.log(depthFirstSearch(test2, 2, 1));
	console.log("This result should be false");
	console.log(depthFirstSearch(test2, 1, 7));
	console.log("This result should be true");
	console.log(depthFirstSearch(test3, 2, 6));
	console.log("This result should be false");
	console.log(depthFirstSearch(test3, 2, 1));
	console.log("This result should be true");
	console.log(depthFirstSearch(test4, 1, 4));
	console.log("This result should be false");
	console.log(depthFirstSearch(test4, 4, 1));
}
testThisBS();
