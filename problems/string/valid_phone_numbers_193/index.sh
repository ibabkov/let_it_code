#!/bin/bash

function checkParams {
    if [ -z "$1" ]
    then
        echo "No parameters found. "
        exit
    fi§
}

function validatePhoneNumbers {
    local regexp="(^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$)|(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)"

    egrep "$regexp" $1 > result.txt
}

checkParams $1

validatePhoneNumbers $1
