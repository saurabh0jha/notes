def is_palindrome(s):
  start_pointer = 0
  end_pointer = len(s) - 1
  while s[start_pointer].lower() == s[end_pointer].lower() and (start_pointer < end_pointer):
    start_pointer += 1
    end_pointer -= 1
  if start_pointer >= end_pointer:
    return True
  # Replace this placeholder return statement with your code
  return False


def is_palindrome_better(s):
    left = 0
    right = len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left = left + 1 
        right = right - 1
    return True



# test cases
assert(is_palindrome('abcddcba') == True)
assert(is_palindrome('abcdcba') == True)
assert(is_palindrome('aBcdDcba') == True)
assert(is_palindrome('aBcdDca') == False)
