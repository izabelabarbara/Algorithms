# creating the memo variable
memo = {}

def factorial (n):
  if n == 0:
    return 1
  elif n in memo:
    
    # checking if result in memo 
    return memo[n]
  else:
    result = n * factorial(n-1)
    
    # updating the memo 
    memo[n] = result
    return result 

# checking below 
print (factorial(2))
print (factorial(5))

print (memo)
