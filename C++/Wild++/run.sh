#!/bin/bash

# Check if a .cpp file is provided as a command-line argument
if [ $# -lt 1 ] || [ $# -gt 2 ]; then
  echo "Usage: $0 <filename.cpp> [rm]"
  exit 1
fi

cpp_file="$1"
rm_flag=false

# Check for the rm flag
if [ $# -eq 2 ] && [ "$2" == "rm" ]; then
  rm_flag=true
fi

# Check if the file has a .cpp extension
if [[ "$cpp_file" != *.cpp ]]; then
  echo "Error: Input file must have a .cpp extension."
  exit 1
fi

# Construct the output executable name
executable_name="${cpp_file%.cpp}"

# Compile the C++ file
g++ "$cpp_file" -o "$executable_name"

# Check if compilation was successful
if [ $? -ne 0 ]; then
  echo "Compilation failed."
  exit 1
fi

# Run the compiled executable and display the output
./"$executable_name"

# Remove the executable if the rm flag is set, otherwise save it.
if $rm_flag; then
  rm "$executable_name"
fi

exit 0
