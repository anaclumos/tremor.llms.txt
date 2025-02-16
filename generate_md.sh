#!/bin/bash

cd "$(dirname "$0")"

for dir in src/molecule/*/; do
  if [ -d "$dir" ]; then
    dirname=$(basename "$dir")
    output_file="$dirname.md"
    
    # Create or clear the output file
    > "$output_file"
    
    # Find all tsx files in the directory
    find "$dir" -name "*.tsx" | while read -r file; do
      filename=$(basename "$file")
      echo -e "\`\`\`example/$dirname-${filename}\n$(cat "$file")\n\`\`\`\n\n" >> "$output_file"
    done
  fi
done
