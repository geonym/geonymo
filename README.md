# Geonymo
This is a POC of Geonym Web client app.


## Purpose
In France, some locations exist without any house number.
Sometimes, a general address exists not a specific one.
It can really be difficult to locate an address.

To give an answer to this problem, Geonym was developped.
Geonym gives a code and a checksum for a specific location.
This Geonym consists of a 8 letters code and a 1 or 2 letters checksum.
  (ie: PPB2-F4WN/1)

So, Geonym is really more simple to remind and communicate than a gps location.

What do you want to use 'PPB2-F4WN/1' geonym or [ 48.841025 ; 2.377966 ] coordinates? :-)


## Goal
This Geonym Web client app allows us to:
. Geocode a French address, get associated coordinates and geonym, and draw the result on a map.
. Thanks to coordinates, get associated geonym and draw the result on a map.
. Thaks to geonym, get associated coordinates and draw the result on a map.


## Details
Geonym allows to link 1 coordinate to a code and bijectively a code to 1 coordinate.
Geonym uses a French metropolitan grid.
This grid is divided in 390625 squares of 3 meters width.
Geonym is based on OpenPostCode project (http://www.openpostcode.org/).


## install

* Install NodeJS & npm tools from NodeJS PPA (6.x version)  
  <pre><code>
  $ cd ~  
  $ curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh  
  $ sudo bash nodesource_setup.sh  
  $ sudo apt-get install nodejs
  </code></pre>

* Check NodeJS & NPM versions  
  <pre><code>
  $ nodejs -v  
    => >= v6.9.4  
  $ npm -v  
    => >= 3.10.10
  </code></pre>

* Delete nodesource_setup.sh  
  <pre><code>
  $ rm nodesource_setup.sh
  </code></pre>

* Go to folder where you want to install Geonym
* git clone https://github.com/geonym/geonymo


## Setup

* Access the folder: `cd geonymo`
* Install dependencies: `npm install`


## Run the server

* Boot the server: `npm start`
* Open a browser and enter the following url: http://localhost:3001


## Online use

* Go to: http://geonym.fr/


## About

Fly
