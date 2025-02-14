def find_sum_of_three(nums, target):
  sorted_nums = sorted(nums)
  array_length = len(sorted_nums)

  for idx in range(array_length):
    low = idx + 1
    high = array_length - 1
    while low < high:
      current_sum = sorted_nums[idx] + sorted_nums[low] + sorted_nums[high]
      if current_sum < target:
        low += 1
      elif current_sum > target:
        high -= 1
      elif current_sum == target:
        return True
  
  return False