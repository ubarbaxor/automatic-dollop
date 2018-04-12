#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
NAME=`dirname "$DIR"`

docker run -ti \
  -v $NAME/static:/usr/app/static \
  -p 80:80 \
  \
  ubarbaxor/`basename $NAME` "$@"
