#!/bin/bash

BASEDIR=`dirname $0`
DISTDIR=$BASEDIR/../dist/fuwari-angular

URL="https:\/\/www.banana-juice.com\/angular\/"
CDNURL="https:\/\/cdn.banana-juice.com\/angular\/js\/"

csvfile=$BASEDIR/../src/meta.csv
for line in `cat ${csvfile} | sed -e '1d'`
do
  arg1=`echo ${line} | cut -d ',' -f 1`
  arg2=`echo ${line} | cut -d ',' -f 2`
  arg3=`echo ${line} | cut -d ',' -f 3`

  name=${arg1}.html
  title="<title>"${arg2}" - ふわりAngular<\/title>"
  description="<meta name=\"description\" content=\""${arg3}"\" \/>"

  sedstr="s/<title>.*$/${title}/g"
  sedstr="${sedstr};s/<meta name=\"description\".*$/${description}/g"
  sedstr="${sedstr};s/${URL}/${URL}${name}/g"
  # sedstr="${sedstr};s/src=\"inline./src=\"${CDNURL}inline./g"
  # sedstr="${sedstr};s/src=\"polyfills./src=\"${CDNURL}polyfills./g"
  # sedstr="${sedstr};s/src=\"vendor./src=\"${CDNURL}vendor./g"
  # sedstr="${sedstr};s/src=\"main./src=\"${CDNURL}main./g"

  cat $DISTDIR/index.html | sed -e "${sedstr}" > $DISTDIR/$name
done
