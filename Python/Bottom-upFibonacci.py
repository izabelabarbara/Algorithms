# bottom-up fibonacci

def fib(n):
  if n == 0 or n == 1:
    return n
  else:
    twoBehind = 0 # for the result of n-1
    oneBehind = 1 # for the result of n-2
    result = 0 
    for i in range (n-1):
      result = oneBehind + twoBehind # update the result
      twoBehind = oneBehind # update 
      oneBehind = result # update 
    return result

for j in range (0,10):
  print (fib(j))
