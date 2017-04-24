#!/bin/bash

FILES=./*.mp4
for f in $FILES
do
  if [ ! -f "${f%.*}".jpg ]
  then ffmpeg -y -i $f -ss 00:00:00 -vframes 1 "${f%.*}".jpg
  fi
  if [ ! -f "${f%.*}".gif ]
  then gifify $f -o "${f%.*}".gif --colors 255
  fi
done