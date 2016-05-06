#!/bin/bash

FILES=./*.mp4
for f in $FILES
do
  ffmpeg -y -i $f -ss 00:00:00 -vframes 1 "${f%.*}".jpg
done