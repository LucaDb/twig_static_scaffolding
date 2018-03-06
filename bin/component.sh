#!/bin/bash

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

SRCPATH=$(pwd)/src/html/components
MODULE_DIR=${SRCPATH}/${1}

if [ -z ${1} ]; then
    echo -e "${RED} ERROR: Missing module directory name.\n ${NC}Please use npm run create-module -- [MODULE_NAME]\n"
    exit 1
fi

# Create folder
mkdir ${MODULE_DIR} || exit 1

# Create twig file
touch ${MODULE_DIR}/${1}.twig
printf "<div class=\"{{style(\"${1}\")}}\"></div>" >> ${MODULE_DIR}/${1}.twig

# Create sass file
touch ${MODULE_DIR}/style.scss
printf ".${1} {\n\n}" >> ${MODULE_DIR}/style.scss

# Create js file?
# touch ${MODULE_DIR}/index.js

echo -e "${GREEN} Module ${1} successfully created in ${MODULE_DIR}.\n"
