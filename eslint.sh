#!/bin/bash

PACKAGES=()
PACKAGES_LINT_IGNORE=(api)

# Get all params from command line as (--fix)
params="--no-error-on-unmatched-pattern $@"

setDirectories () {
    # Get all directories from /packages/ directory and set to PACKAGES array
    shopt -s nullglob
    array=(packages/*)
    shopt -u nullglob # Turn off nullglob to make sure it doesn't interfere with anything later
    PACKAGES=(${PACKAGES[@]} "${array[@]/#packages\/}")
}

eslint () {
    package=$1
    
    # Ignore to run the command if the directory don't require linting
    if [[ ${PACKAGES_LINT_IGNORE[*]} =~ $package ]]; then
        continue
    fi

    # Invoke eslint command passing the package directory as parameter
    files="packages/$package/src/**/*.{js,jsx,ts,tsx,css,html} $params"
    echo "$files"
    ./node_modules/.bin/eslint $files
}

init () {
    # Loop through all the packages
    for path in "${PACKAGES[@]}"
    do
        # echo "Processing $path"
        eslint "${path}"
    done
}

setDirectories
init
