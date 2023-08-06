def insert(array, rightIndex, value):
    i = rightIndex
    while i >= 0 and value < array[i]:
        array[i + 1] = array[i]
        i -= 1
    array[i + 1] = value
    return array

# some test below
array = [3, 5, 7, 11, 13, 2, 9, 6]
insert(array, 4, 2)
print("Array after inserting 2: ", array)
