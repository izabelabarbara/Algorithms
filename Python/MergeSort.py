import math

def merge(list1, list2):
  left = 0
  right = 0
  res = []
  while left < len(list1) and right < len(list2):
      if list1[left] <= list2[right]:
          res.append(list1[left])
          left += 1
      else:
          res.append(list2[right])
          right += 1
  while left < len(list1):
      res.append(list1[left])
      left += 1
  while right < len(list2):
      res.append(list2[right])
      right += 1
  return res

def merge_sort(arr):
  if len(arr) < 2:
      return arr
  mid = int(math.floor(len(arr) / 2))
  left = arr[0:mid]
  right = arr[mid:len(arr)]
  return merge(merge_sort(left), merge_sort(right))

# test
x = merge_sort([9,7,45,78,0,33,12,3,7])
print (x)
