def power(x, n):
  if n == 0:
    return 1
  elif n < 0:
    return 1/power(x, -n)
  elif n%2 != 0:
    return x * power(x,n-1)
  elif n%2 == 0:
    z = power (x, n/2)
    return z*z


def displayPower(x, n):
    print(f"{x} to the power of {n} is {power(x, n)}")

# test
displayPower(3, 2)
