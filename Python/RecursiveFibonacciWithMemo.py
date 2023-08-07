memo = {}

def fib (n):
  if n == 0 or n == 1:
    return n
  elif n in memo:
    return memo[n]
  else:
    x = fib(n-1)+fib(n-2)
    memo[n] = x
    return x

print (fib(7))
