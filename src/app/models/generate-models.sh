#!/bin/sh
#
# SCRIPT: Template
# AUTHOR: Elroy Kanye
# DATE:
# 1.1.A (Valid are A, B, D, T and P)
#       (For Alpha, Beta, Dev, Test and Production)
#
# PLATFORM: Linux
#
# PURPOSE: To be used a template for every script.
#
# REV LIST:
#       DATE: Date of Revision
#       By: Author of the Modification
#       Modification: Describe what was modified, new features, etc
#
# set -n    # Uncomment to check script syntax, without execution.
#           # NoteL Do not forget to put comment back.
# set -x    # Uncomment to debug this shell script
#
############################################################
#       DEFINE FILES AND VARIABLES HERE
############################################################

FILES=( "Bucket" "User" "Address" "Chat" "Message" "Comment" "Post" )

############################################################
#       DEFINE FUNCTIONS HERE
############################################################



############################################################
#       BEGINNING OF MAIN
############################################################


for FILE in ${FILES[@]}; do
  touch "$FILE.ts"
  echo "currently on $FILE"
  echo "export class $FILE {}" > "$FILE.ts"
  git add "$FILE.ts"
  git commit -m "added $FILE model"
  done




############################################################
#       END OF SCRIPT
############################################################
