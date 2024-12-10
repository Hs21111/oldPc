def remove_characters(input_list, chars_to_remove):
    # Create a set of characters to remove for faster lookup
    chars_to_remove_set = set(chars_to_remove)

    # Use list comprehension to filter out unwanted characters
    input_list[:] = [char for char in input_list if char not in chars_to_remove_set]


# Example usage
input_list = ['a', 'b', 'c', 'd', 'e', 'f']
chars_to_remove = ['b', 'd', 'f']
remove_characters(input_list, chars_to_remove)
print("Resulting list:", input_list)
