#!/bin/bash

BASEDIR=`dirname $0`
DISTDIR=$BASEDIR/../dist

csvfile=$BASEDIR/../src/meta.csv
for line in `cat ${csvfile} | sed -e '1d'`
do
  arg1=`echo ${line} | cut -d ',' -f 1`
  arg2=`echo ${line} | cut -d ',' -f 2`
  arg3=`echo ${line} | cut -d ',' -f 3`

  name=${arg1}.html
  title="<title>"${arg2}" - ふわりAngular<\/title>"
  description="<meta name=\"description\" content=\""${arg3}"\" \/>"
  url="http:\/\/www.banana-juice.com\/angular\/"

  cat $DISTDIR/index.html | sed -e "s/<title>.*$/${title}/g;s/<meta name=\"description\".*$/${description}/g;s/${url}/${url}${name}/g" > $DISTDIR/$name
done